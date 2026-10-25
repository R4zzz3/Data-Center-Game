#!/usr/bin/env python3
"""Edistynyt valikko -paketin asennusohjelma Lohikäärme kylässä -peleihin.

Käyttö (aja paketin juuresta tai anna polku):
  python3 asenna.py tarkista PELI.html                 # mitä pelistä löytyy, mihin osat menisivät
  python3 asenna.py asenna   PELI.html ULOS.html [--ei-kytkinta] [--moduulit kartta,uutiset,...] [--ilmoitus "teksti"]
  python3 asenna.py pura     ASENNETTU.html HAKEMISTO   # irrottaa osat asennetusta pelistä pakettirakenteeksi
  python3 asenna.py poista   ASENNETTU.html ULOS.html   # poistaa kaikki paketin lisäämät osat

Periaatteet
- Jokainen lisätty lohko on merkitty: <style data-ev="...">, <script data-ev="...">, <!-- EV:ALKU nimi --> ... <!-- EV:LOPPU nimi -->.
  Uudelleenasennus poistaa ensin vanhat lohkot, joten asennus on toistettavissa (idempotentti).
- Tyylit ja skriptit lisätään pelin PÄÄSKRIPTIN EDELLE (se, jossa on "const SISALTO"). Valikko käynnistyy vasta
  DOMContentLoaded-hetkellä, joten pelin muuttujat ovat silloin olemassa, ja esim. muokkaustilan LAHDE_HTML säilyttää valikon.
- Velhokytkin (Edistynyt tila) ja velhoteema asennetaan vain, jos pelissä ei ole omaa #velho-kytkin-painiketta.
- Artifaktin julkaisupohja (1. rivin <!doctype…<body> ja lopun </body></html>) poistetaan, koska julkaisu lisää sen itse.
"""
import html, json, os, re, sys

PAKETTI = os.path.dirname(os.path.abspath(__file__))
OLETUSJARJESTYS = ["kartta", "uutiset", "asunnot", "sahko", "lampo", "maa", "rahavirrat", "lupaukset", "ulkomaat", "vaikuta", "sanasto"]
POISTETTAVA_KYTKIN_PAIKKA = '<span aria-hidden="true"></span>'


def lue(polku):
    with open(polku, encoding="utf8") as f:
        return f.read()


def kirjoita(polku, sisalto):
    os.makedirs(os.path.dirname(os.path.abspath(polku)), exist_ok=True)
    with open(polku, "w", encoding="utf8") as f:
        f.write(sisalto)


def osa(nimi):
    return lue(os.path.join(PAKETTI, "osat", nimi))


# ---------- Julkaisupohjan tunnistus ----------
def poista_julkaisupohja(s):
    eka, _, loput = s.partition("\n")
    if eka.lower().startswith("<!doctype html>") and eka.rstrip().endswith("<body>") and "color-scheme:light;box-sizing" in eka:
        loput = loput.rstrip()
        if loput.endswith("</body></html>"):
            loput = loput[: -len("</body></html>")].rstrip()
        return loput + "\n", True
    return s, False


# ---------- Merkityt lohkot ----------
RE_TYYLI = re.compile(r'<style data-ev="([^"]+)">\n?(.*?)</style>\n?', re.S)
RE_SKRIPTI = re.compile(r'<script data-ev="([^"]+)"(?: type="text/css")?>\n?(.*?)</script>\n?', re.S)
RE_HTML = re.compile(r'([ \t]*)<!-- EV:ALKU ([\w-]+)(?: korvasi="([^"]*)")? -->\n?(.*?)[ \t]*<!-- EV:LOPPU \2 -->(\n?)', re.S)


def poista_lohkot(s):
    s = RE_TYYLI.sub("", s)
    s = RE_SKRIPTI.sub("", s)
    s = RE_HTML.sub(lambda m: (m.group(1) + html.unescape(m.group(3)) + m.group(5)) if m.group(3) else "", s)
    return s


def onko_asennettu(s):
    return 'data-ev="valikko"' in s


# ---------- Kohtien etsintä ----------
def paaskriptin_alku(s):
    """Pelin pääskriptin <script>-tagin alkukohta: se, jossa on 'const SISALTO', muuten suurin tavallinen skripti."""
    ehdokkaat = []
    for m in re.finditer(r"<script(\s[^>]*)?>", s):
        attrs = m.group(1) or ""
        if "src=" in attrs or "data-ev" in attrs:
            continue
        if "type=" in attrs and not re.search(r'type="(text/javascript|module)"', attrs):
            continue
        loppu = s.find("</script>", m.end())
        runko = s[m.end():loppu]
        ehdokkaat.append((("const SISALTO" in runko), len(runko), m.start()))
    if not ehdokkaat:
        raise SystemExit("VIRHE: pelin pääskriptiä ei löytynyt.")
    return max(ehdokkaat)[2]


def ylapalkki(s):
    """(alku, loppu) yläpalkin <header>-elementille tai None."""
    m = re.search(r'<header[^>]*class="[^"]*ylapalkki[^"]*"[^>]*>', s) or re.search(r"<header[^>]*>", s)
    if not m:
        return None
    loppu = s.find("</header>", m.end())
    return (m.start(), loppu + len("</header>")) if loppu >= 0 else None


def tarkista(s):
    s, pohja = poista_julkaisupohja(s)
    yp = ylapalkki(s)
    pids = re.findall(r'^\s{6}id: "([\w-]+)",\s*$', s, re.M)
    tokenit = [t for t in ["--bg", "--card", "--line", "--ink", "--ink-soft", "--red", "--on-red", "--green", "--gold", "--valo", "--f-display", "--f-body", "--f-sc"] if t + ":" not in s]
    return {
        "julkaisupohja": pohja,
        "asennettu_jo": onko_asennettu(s),
        "oma_velhokytkin": 'id="velho-kytkin"' in s and 'data-ev="kytkin' not in s,
        "ylapalkki": bool(yp),
        "kytkimen_paikka_ylapalkissa": bool(yp and POISTETTAVA_KYTKIN_PAIKKA in s[yp[0]:yp[1]]),
        "main_sisalto": 'id="sisalto"' in s or "<main" in s,
        "sijoitettu_kehys(.laite)": 'class="laite"' in s,
        "paaskripti_const_SISALTO": "const SISALTO" in s,
        "tila_olio": bool(re.search(r"\bconst tila = \{", s)),
        "naytaIlmoitus": "function naytaIlmoitus" in s,
        "paatos_idt": pids[:12],
        "moduulien_korostus_toimii": [p for p in ("energia", "ymparisto", "maankaytto") if p in pids],
        "puuttuvat_tokenit": tokenit,
        "LAHDE_HTML_vienti": "LAHDE_HTML" in s,
        "asuntodata": "paketin" if paketin_asuntodata(s) else ("pelin oma" if 'id="asuntodata"' in s else "puuttuu (paketti lisää)"),
        "oma_syvemmalle_nakyma": 'data-toiminto="syvemmalle"' in s,
    }


# ---------- Asennus ----------
RE_ASUNTODATA = re.compile(r'<script id="asuntodata" type="application/json">(.*?)</script>', re.S)
ASUNTODATA_KOMMENTTI = "<!-- Asuntodata: keräintyökalu (keraa.py upota) kirjoittaa tämän lohkon. Älä muokkaa käsin. -->"


def paketin_asuntodata(s):
    """Paketin aiemmin asentama asuntodata (keraa.py on voinut päivittää sitä) tai None."""
    for m in RE_HTML.finditer(s):
        if m.group(2) == "asuntodata":
            d = RE_ASUNTODATA.search(m.group(4))
            return d.group(1).strip() if d else None
    return None


def asenna(s, ei_kytkinta=False, moduulit=None, ilmoitus=None):
    s, _ = poista_julkaisupohja(s)
    vanha_data = paketin_asuntodata(s)
    s = poista_lohkot(s)
    oma_kytkin = 'id="velho-kytkin"' in s
    asenna_kytkin = not oma_kytkin and not ei_kytkinta
    raportti = []

    # 1) Kytkimen painike yläpalkkiin
    if asenna_kytkin:
        yp = ylapalkki(s)
        if not yp:
            raise SystemExit("VIRHE: yläpalkkia (<header>) ei löytynyt kytkimelle. Käytä --ei-kytkinta tai lisää header.")
        alue = s[yp[0]:yp[1]]
        nappi = osa("kytkin.html").rstrip("\n")
        if POISTETTAVA_KYTKIN_PAIKKA in alue:
            sisennys = re.search(r"([ \t]*)" + re.escape(POISTETTAVA_KYTKIN_PAIKKA), alue).group(1)
            uusi = (f'{sisennys}<!-- EV:ALKU kytkin korvasi="{html.escape(POISTETTAVA_KYTKIN_PAIKKA)}" -->\n{nappi}\n'
                    f"{sisennys}<!-- EV:LOPPU kytkin -->")
            alue = alue.replace(sisennys + POISTETTAVA_KYTKIN_PAIKKA, uusi, 1)
            raportti.append("kytkin: korvasi yläpalkin tyhjän paikan")
        else:
            rivi = alue.rfind("\n", 0, alue.rfind("</header>")) + 1
            alue = alue[:rivi] + f"    <!-- EV:ALKU kytkin -->\n{nappi}\n    <!-- EV:LOPPU kytkin -->\n" + alue[rivi:]
            raportti.append("kytkin: lisätty yläpalkin loppuun")
        s = s[:yp[0]] + alue + s[yp[1]:]
    else:
        raportti.append("kytkin: pelissä on oma #velho-kytkin" if oma_kytkin else "kytkin: ohitettu (--ei-kytkinta)")

    # 2) Nauha + valikkopaneeli yläpalkin jälkeen
    merkinta = "  <!-- EV:ALKU valikko -->\n" + osa("valikko.html").rstrip("\n") + "\n  <!-- EV:LOPPU valikko -->\n"
    yp = ylapalkki(s)
    if yp:
        kohta = yp[1] + (1 if s[yp[1]:yp[1] + 1] == "\n" else 0)
        raportti.append("valikko: yläpalkin jälkeen")
    else:
        m = re.search(r"<main[\s>]", s)
        if not m:
            raise SystemExit("VIRHE: ei <header>- eikä <main>-elementtiä valikon paikaksi.")
        kohta = s.rfind("\n", 0, m.start()) + 1
        raportti.append("valikko: <main>-elementin edelle (ei yläpalkkia)")
    s = s[:kohta] + merkinta + s[kohta:]

    # 3) Tyylit ja skriptit pääskriptin edelle
    if moduulit:
        jarj = moduulit
    else:   # oletusjärjestys + muut moduulit/-kansion tiedostot aakkosjärjestyksessä
        kaikki = sorted(f[:-3] for f in os.listdir(os.path.join(PAKETTI, "moduulit")) if f.endswith(".js"))
        jarj = [m for m in OLETUSJARJESTYS if m in kaikki] + [m for m in kaikki if m not in OLETUSJARJESTYS]
    lohkot = []
    puuttuvat = [t for t in ["--card:", "--ink:", "--f-display:"] if t not in s]
    lohkot.append('<style data-ev="tokenit-varalla">\n' + osa("tokenit-varalla.css") + "</style>\n")
    if puuttuvat:
        raportti.append("tokenit: peliltä puuttui " + ", ".join(puuttuvat) + " → varapaletti käytössä")
    if asenna_kytkin:
        lohkot.append('<style data-ev="kytkin">\n' + osa("kytkin.css") + "</style>\n")
    lohkot.append('<style data-ev="valikko">\n' + osa("valikko.css") + "</style>\n")
    for m in jarj:
        p = os.path.join(PAKETTI, "moduulit", m + ".tokens.css")
        if os.path.exists(p):
            lohkot.append(f'<style data-ev="tokenit:{m}">\n' + lue(p) + "</style>\n")
    if asenna_kytkin:
        lohkot.append('<script data-ev="kytkin">\n' + osa("kytkin.js") + "</script>\n")
    lohkot.append('<script data-ev="pohja-css" type="text/css">\n' + osa("pohja.css") + "</script>\n")
    lohkot.append('<script data-ev="pohja-lisa-css" type="text/css">\n' + osa("pohja-lisa.css") + "</script>\n")
    lohkot.append('<script data-ev="valikko">\n' + osa("valikko.js") + "</script>\n")
    mukana = []
    for m in jarj:
        p = os.path.join(PAKETTI, "moduulit", m + ".js")
        if not os.path.exists(p):
            raportti.append(f"moduuli {m}: tiedosto puuttuu, ohitettu")
            continue
        koodi = lue(p)
        if re.search(r"</script|<!--", koodi, re.I):
            raise SystemExit(f'VIRHE: moduulit/{m}.js sisältää "</script" tai "<!--" – kirjoita "<\\/script".')
        lohkot.append(f'<script data-ev="moduuli:{m}">\n' + koodi.rstrip("\n") + "\n</script>\n")
        mukana.append(m)
    # Asuntodata asunnot-moduulille: pelin oma lohko käytetään sellaisenaan; muuten paketin (tai aiemmin päivitetty) data
    # samoilla ASUNTODATA-merkeillä, jotta keräintyökalu voi päivittää sitä.
    if "asunnot" in mukana:
        if 'id="asuntodata"' in s:
            raportti.append("asuntodata: pelin oma lohko")
        else:
            data = vanha_data or osa("asuntodata.json").strip()
            lohkot.insert(0, "<!-- EV:ALKU asuntodata -->\n" + ASUNTODATA_KOMMENTTI + "\n<!-- ASUNTODATA ALKU -->\n"
                          '<script id="asuntodata" type="application/json">' + data + "</script>\n<!-- ASUNTODATA LOPPU -->\n<!-- EV:LOPPU asuntodata -->\n")
            raportti.append("asuntodata: " + ("säilytetty aiempi (päivitetty) data" if vanha_data else "paketin data lisätty"))
    kohta = paaskriptin_alku(s)
    s = s[:kohta] + "".join(lohkot) + s[kohta:]

    # 4) Pelin oman kytkimen ilmoitusteksti (vain jos pyydetty ja avain löytyy)
    if ilmoitus:
        uusi, n = re.subn(r'(edistynytPaalla:\s*)"[^"]*"', lambda m: m.group(1) + json.dumps(ilmoitus, ensure_ascii=False), s, count=1)
        if n:
            s = uusi
            raportti.append("ilmoitus: edistynytPaalla päivitetty")
        else:
            kj = re.subn(r'(paalla:\s*)"[^"]*"', lambda m: m.group(1) + json.dumps(ilmoitus, ensure_ascii=False), s, count=1)
            s = kj[0]
            raportti.append("ilmoitus: kytkimen teksti päivitetty" if kj[1] else "ilmoitus: avainta ei löytynyt")
    raportti.append("moduulit: " + ", ".join(mukana))
    return s, raportti


# ---------- Purku ----------
def pura(s, hakemisto):
    s, _ = poista_julkaisupohja(s)
    if not onko_asennettu(s):
        raise SystemExit("VIRHE: tiedostossa ei ole Edistynyt valikko -asennusta (data-ev=\"valikko\").")
    tiedostot = {}
    for m in RE_TYYLI.finditer(s):
        nimi, runko = m.group(1), m.group(2)
        if nimi.startswith("tokenit:"):
            tiedostot[f"moduulit/{nimi.split(':', 1)[1]}.tokens.css"] = runko
        else:
            tiedostot[f"osat/{nimi}.css"] = runko
    for m in RE_SKRIPTI.finditer(s):
        nimi, runko = m.group(1), m.group(2)
        if nimi.startswith("moduuli:"):
            tiedostot[f"moduulit/{nimi.split(':', 1)[1]}.js"] = runko
        elif nimi == "pohja-css":
            tiedostot["osat/pohja.css"] = runko
        elif nimi == "pohja-lisa-css":
            tiedostot["osat/pohja-lisa.css"] = runko
        else:
            tiedostot[f"osat/{nimi}.js"] = runko
    for m in RE_HTML.finditer(s):
        if m.group(2) == "asuntodata":
            d = RE_ASUNTODATA.search(m.group(4))
            if d:
                tiedostot["osat/asuntodata.json"] = d.group(1).strip() + "\n"
            continue
        tiedostot[f"osat/{m.group(2)}.html"] = m.group(4)
    for polku, runko in tiedostot.items():
        kirjoita(os.path.join(hakemisto, polku), runko)
    oma = os.path.abspath(__file__)
    kirjoita(os.path.join(hakemisto, "asenna.py"), lue(oma))
    return sorted(tiedostot)


def main(argv):
    if len(argv) < 2 or argv[0] not in ("tarkista", "asenna", "pura", "poista"):
        print(__doc__)
        return 1
    komento, args = argv[0], argv[1:]

    def lippu(nimi):
        return args[args.index(nimi) + 1] if nimi in args else None

    if komento == "tarkista":
        print(json.dumps(tarkista(lue(args[0])), ensure_ascii=False, indent=1))
    elif komento == "asenna":
        mods = lippu("--moduulit")
        tulos, raportti = asenna(lue(args[0]), "--ei-kytkinta" in args, mods.split(",") if mods else None, lippu("--ilmoitus"))
        kirjoita(args[1], tulos)
        print("\n".join(raportti))
        print(f"→ {args[1]} ({len(tulos)} tavua)")
    elif komento == "pura":
        for p in pura(lue(args[0]), args[1]):
            print(p)
    elif komento == "poista":
        s, _ = poista_julkaisupohja(lue(args[0]))
        kirjoita(args[1], poista_lohkot(s))
        print(f"→ {args[1]}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
