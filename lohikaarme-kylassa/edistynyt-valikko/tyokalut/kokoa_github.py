#!/usr/bin/env python3
"""Kokoaa Lohikäärme kylässä -pelistä GitHub-palautuspaketin (zip).

Käyttö:
  python3 kokoa_github.py --peli PELI.html [--paketti EV-PAKETTI/] --ulos HAKEMISTO   (paketti oletuksena tämän kansion yläkansio)
      [--lahde-url https://claude.ai/artifact/...] [--versio VERSIO-ID]
      [--keraa polku/keraa.py] [--ei-valikkoa] [--nimi lohikaarme-kylassa]

Tekee:
  1. index.html: pelin tiedosto + sivun kehys (doctype, lang="fi", charset, viewport, sama nollaus kuin
     Claude-artifaktissa), jotta se aukeaa suoraan selaimessa ja GitHub Pagesissa.
  2. Edistynyt valikko -paketin asennus tai päivitys uusimpaan (asenna.py), ellei --ei-valikkoa.
  3. Kansio edistynyt-valikko/ (paketin lähdekoodi ilman pakettisivua), tyokalut/keraa.py jos annettu.
  4. README.md pelin omasta datasta: johdanto, päätökset, valikon välilehdet, kaikki lähteet linkkeineen,
     tunnetut sisältöasiat, avaus- ja julkaisuohje.
  5. .gitignore.
  6. Testi: index.html file://-osoitteesta 390/1200 px vaalea/tumma (paketin testaa.js) + lähteiden haku.
  7. Zip: HAKEMISTO/<nimi>-github-<pvm>.zip (juurikansiona <nimi>/).
Tulostaa raportin: mitä tehtiin, testitulos, pelaajalle näkyvät keskeneräisyysmerkinnät.
"""
import datetime, json, os, re, shutil, subprocess, sys, tempfile, zipfile

KEHYS_TYYLI = ('<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);'
               'padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}'
               'body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}'
               'img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>')
KEHYS = ('<!doctype html><html lang="fi"><head><meta charset="utf-8">'
         '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' + KEHYS_TYYLI + '</head><body>\n')
MERKINNAT = re.compile(r"\[Lähde:|\btarkista(?:ttava)?\b|linkki lisättävä|lähde tarkistettava|sanamuoto tarkistettava|tarvitsee tiimin tarkistuksen|\bTODO\b|\bXXX\b", re.I)

POIMI_JS = r"""
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 390, height: 860 } });
  const virheet = [];
  pg.on('pageerror', e => virheet.push(e.message));
  pg.on('console', m => { if (m.type() === 'error' && !/net::|Failed to load resource/.test(m.text())) virheet.push(m.text()); });
  await pg.goto('file://' + process.argv[2]); await pg.waitForTimeout(800);
  const d = await pg.evaluate(() => {
    const S = typeof SISALTO !== 'undefined' ? SISALTO : {};
    const lahteet = (o, ulos, nahty = new Set()) => {
      if (!o || typeof o !== 'object' || nahty.has(o)) return ulos; nahty.add(o);
      if (typeof o.url === 'string' && /^https?:/.test(o.url)) ulos.push({ nimi: o.nimi || o.otsikko || o.title || o.url, url: o.url });
      for (const k in o) lahteet(o[k], ulos, nahty);
      return ulos;
    };
    const tekstit = []; const keraa = (o, polku, nahty = new Set()) => {
      if (typeof o === 'string') { tekstit.push([polku, o]); return; }
      if (!o || typeof o !== 'object' || nahty.has(o)) return; nahty.add(o);
      for (const k in o) keraa(o[k], polku + '.' + k, nahty);
    };
    keraa(S, 'SISALTO');
    const paatokset = (S.paatokset || []).map(p => ({ id: p.id, nimi: p.nimi, aihe: p.aihe || '', kysymys: p.kysymys || '', lahteet: lahteet(p.lahteet || [], []) }));
    const EV = window.EdistynytValikko;
    const valikko = EV ? {
      versio: EV.versio,
      valilehdet: EV.VALIKKO.valilehdet.map(v => ({ nimi: v.nimi, kuvaus: v.kuvaus,
        moduulit: v.moduulit.map(id => ({ id, nimi: EV.MODUULIT[id] ? EV.MODUULIT[id].nimi : id,
          lahteet: EV.MODUULIT[id] ? lahteet(EV.MODUULIT[id].data, []) : [] })) }))
    } : null;
    return {
      otsikko: S.otsikko || document.title, alaotsikko: S.alaotsikko || '', johdanto: S.johdanto || '',
      taustaRivi: S.taustaRivi || '', roolit: (S.roolit || []).map(r => r.nimi || r), alueet: (S.alueet || []).map(a => a.nimi || a),
      paatokset, kaikkiLahteet: lahteet(S, []), valikko, tekstit,
      asuntoLahteet: (() => { const e = document.getElementById('asuntodata'); try { return e ? lahteet(JSON.parse(e.textContent), []) : []; } catch (x) { return []; } })(),
      title: document.title
    };
  });
  // Peli käynnistyy?
  let kaynnistyy = null;
  if (await pg.$('[data-toiminto=aloita]')) { await pg.click('[data-toiminto=aloita]'); await pg.waitForTimeout(300); kaynnistyy = !!(await pg.$('[data-toiminto=rooli]')); }
  console.log(JSON.stringify({ ...d, kaynnistyy, virheet }));
  await b.close();
})();
"""


def lue(p):
    with open(p, encoding="utf8") as f:
        return f.read()


def kirjoita(p, s):
    os.makedirs(os.path.dirname(os.path.abspath(p)), exist_ok=True)
    with open(p, "w", encoding="utf8") as f:
        f.write(s)


def lippu(args, nimi, oletus=None):
    return args[args.index(nimi) + 1] if nimi in args else oletus


def ilman_merkkeja(s):
    return re.sub(r"\s*\[Lähde:[^\]]*\]", "", s or "").strip()


def md_linkki(l):
    nimi = l["nimi"].replace("[", "(").replace("]", ")")
    return f"[{nimi}]({l['url']})"


def readme(d, meta, tunnetut):
    r = [f"# {d['otsikko']}", ""]
    if d["alaotsikko"]:
        r += [f"*{d['alaotsikko']}*", ""]
    r += ["Selainpeli, joka tekee datakeskusten vaikutukset ymmärrettäviksi tavallisille suomalaisille. "
          "Datakeskus on lohikäärme, jonka päät ovat vaikutusalueita. Peli ei kerro oikeaa vastausta: "
          "jokaisessa vaihtoehdossa näkyvät hyöty ja haitta, ja tieto ja sen lähde näytetään rinnakkain.", ""]
    if d["johdanto"]:
        r += ["> " + ilman_merkkeja(d["johdanto"]), ""]
    r += ["## Pelaa", "",
          "- **Suoraan:** lataa tämä kansio ja avaa `index.html` selaimessa. Ei asennuksia eikä palvelinta.",
          "- **GitHub Pages:** Settings → Pages → Branch: `main`, kansio `/ (root)` → Save. Peli aukeaa osoitteessa `https://<käyttäjä>.github.io/<repo>/`.",
          "- Fontit ladataan Google Fontsista; ilman verkkoa peli käyttää Georgia-fonttia.", ""]
    r += ["## Pelin kulku", "",
          "1. Valitse rooli" + (f" ({', '.join(d['roolit'])})" if d["roolit"] else "") + ".",
          "2. Valitse alue" + (f" ({', '.join(d['alueet'])})" if d["alueet"] else "") + ". Rooli ja alue vaihtavat tekstejä, eivät lukuja.",
          f"3. Tee {len(d['paatokset'])} päätöstä. Jokaisen jälkeen näet hyödyn, haitan, vaikutukset sinulle ja kunnalle sekä lähteet.",
          "4. Lopuksi näet valintasi, tulevaisuussimulaation ja voit verrata pelikertoja.", ""]
    if d["paatokset"]:
        r += ["| # | Lohikäärmeen pää | Aihe |", "|---|---|---|"]
        r += [f"| {i + 1} | {p['nimi']} | {p['aihe']} |" for i, p in enumerate(d["paatokset"])]
        r += [""]
    if d["valikko"]:
        r += ["## Edistynyt tila ja Edistynyt valikko", "",
              "Velhon hattu yläpalkissa kytkee edistyneen tilan päälle (violetti teema). Silloin yläpalkin alle tulee "
              "**✦ Edistynyt valikko**, jossa on syventävää tietoa päätöksentekijöille ja asiantuntijoille:", "",
              "| Välilehti | Sisältö |", "|---|---|"]
        r += [f"| {v['nimi']} | " + " · ".join(m["nimi"] for m in v["moduulit"]) + " |" for v in d["valikko"]["valilehdet"]]
        r += ["", f"Valikko on koottu uudelleenkäytettävästä paketista (kansio `edistynyt-valikko/`, versio {d['valikko']['versio']}). "
              "Sen saa asennettua mihin tahansa pelin versioon: `python3 edistynyt-valikko/asenna.py asenna PELI.html ULOS.html` "
              "(ohje: `edistynyt-valikko/OHJE.md`).", ""]
    r += ["## Tekstien muokkaus", "",
          "Kaikki pelin tekstit ja luvut ovat `index.html`-tiedoston alussa `SISALTO`-objektissa. Muokkaa vain lainausmerkkien sisällä olevia tekstejä. "
          "Valikon moduulien tekstit ovat tiedostoissa `edistynyt-valikko/moduulit/`; muutoksen jälkeen aja paketin asennus uudelleen.", ""]
    if meta.get("keraa"):
        r += ["Asuntojen hintadata päivitetään keräintyökalulla `tyokalut/keraa.py`, joka kirjoittaa `ASUNTODATA`-merkkien väliin.", ""]
    r += ["## Lähteet", "",
          "Pelin luvut ovat lähteistä. Pelin omat yksinkertaistukset on merkitty pelissä \"Pelin oletus:\".", ""]
    nahty = set()
    for i, p in enumerate(d["paatokset"]):
        if not p["lahteet"]:
            continue
        r += [f"**{i + 1}. {p['nimi']}**", ""]
        for l in p["lahteet"]:
            r.append(f"- {md_linkki(l)}"); nahty.add(l["url"])
        r += [""]
    muut = [l for l in d["kaikkiLahteet"] if l["url"] not in nahty]
    uniq = []
    for l in muut:
        if l["url"] not in nahty:
            uniq.append(l); nahty.add(l["url"])
    if uniq:
        r += ["**Simulaatio ja muut pelin lähteet**", ""] + [f"- {md_linkki(l)}" for l in uniq] + [""]
    if not d["valikko"]:
        ad = [l for l in d.get("asuntoLahteet", []) if l["url"] not in nahty and not nahty.add(l["url"])]
        if ad:
            r += ["**Asuntodata**", ""] + [f"- {md_linkki(l)}" for l in ad] + [""]
    if d["valikko"]:
        for v in d["valikko"]["valilehdet"]:
            for m in v["moduulit"]:
                ls = []
                for l in m["lahteet"]:
                    if l["url"] not in nahty and not re.search(r"claude\.ai/(code/)?artifact/", l["url"]):
                        ls.append(l); nahty.add(l["url"])
                if m["id"] == "asunnot":
                    ls += [l for l in d.get("asuntoLahteet", []) if l["url"] not in nahty and not nahty.add(l["url"])]
                if ls:
                    r += [f"**Edistynyt valikko · {m['nimi']}**", ""] + [f"- {md_linkki(l)}" for l in ls] + [""]
    if tunnetut:
        r += ["## Tunnetut sisältöasiat", "", "Avoin tarkistuslista tiimille. Lukuja ei ole muutettu ilman lähdettä.", "", tunnetut.strip(), ""]
    r += ["## Jatkokehitys", "",
          "- Oikeat kuntakohtaiset datat ja useampi hankekoko",
          "- Lisää todellisia hankkeita karttaan ja vertailuun",
          "- Sähkön hinnan laskuri",
          "- Kuntalaisten palautelomake", "",
          "## Tekijät", "", "Hackathon-tiimi. Lisää tähän tiimin nimet ja yhteystieto.", "",
          "---", f"Koottu {meta['pvm']}" + (f" artifaktista {meta['lahde']}" if meta.get("lahde") else "") +
          (f" (versio {meta['versio']})" if meta.get("versio") else "") + "."]
    return "\n".join(r) + "\n"


def main(args):
    peli, paketti, ulos = lippu(args, "--peli"), lippu(args, "--paketti"), lippu(args, "--ulos")
    if not paketti:   # ajetaan paketin tyokalut/-kansiosta → paketti on yläkansio
        yla = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        if os.path.exists(os.path.join(yla, "asenna.py")) and "--ei-valikkoa" not in args:
            paketti = yla
    if not (peli and ulos):
        print(__doc__); return 1
    nimi = lippu(args, "--nimi", "lohikaarme-kylassa")
    pvm = datetime.date.today().isoformat()
    juuri = os.path.join(ulos, nimi)
    if os.path.exists(juuri):
        shutil.rmtree(juuri)
    raportti = []
    s = lue(peli)

    # 1) Kehys pois (palautetaan lopuksi omana, lang="fi")
    eka, _, loput = s.partition("\n")
    if eka.lower().startswith("<!doctype html") and eka.rstrip().endswith("<body>"):
        s = loput.rstrip()
        if s.endswith("</body></html>"):
            s = s[:-len("</body></html>")].rstrip()
        s += "\n"
    elif s.lstrip().lower().startswith("<!doctype"):
        raportti.append("HUOM: tiedostossa on oma täysi HTML-rakenne; kehys jätetty sellaisekseen")

    # 2) Edistynyt valikko: asennus tai päivitys uusimpaan pakettiin
    if paketti and "--ei-valikkoa" not in args:
        sys.path.insert(0, os.path.abspath(paketti))
        import asenna  # noqa: E402
        oli = asenna.onko_asennettu(s)
        s, r2 = asenna.asenna(s)
        raportti.append(("valikko päivitetty uusimpaan pakettiin" if oli else "valikko asennettu") + ": " + "; ".join(r2))
    elif "--ei-valikkoa" in args:
        raportti.append("valikko: ohitettu (--ei-valikkoa)")

    taysi = s if s.lstrip().lower().startswith("<!doctype") else KEHYS + s.rstrip() + "\n</body></html>\n"
    kirjoita(os.path.join(juuri, "index.html"), taysi)

    # 3) Paketti ja työkalut
    if paketti:
        def ohita(hak, tiedostot):
            return [t for t in tiedostot if t in ("__pycache__", ".DS_Store") or t.endswith(".pyc") or (hak == os.path.abspath(paketti) and t == "index.html")]
        shutil.copytree(os.path.abspath(paketti), os.path.join(juuri, "edistynyt-valikko"), ignore=lambda h, t: ohita(os.path.abspath(h), t))
    keraa = lippu(args, "--keraa")
    if keraa:
        os.makedirs(os.path.join(juuri, "tyokalut"), exist_ok=True)
        shutil.copy2(keraa, os.path.join(juuri, "tyokalut", "keraa.py"))
    kirjoita(os.path.join(juuri, ".gitignore"),
             "__pycache__/\n*.pyc\n.DS_Store\nnode_modules/\nev-kuvat/\nkuvat/\ndist*/\n*.testi.html\n*.zip\n")

    # 4) Tiedot pelistä selaimella → README
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf8") as f:
        f.write(POIMI_JS); js = f.name
    p = subprocess.run(["node", js, os.path.abspath(os.path.join(juuri, "index.html"))], capture_output=True, text=True, timeout=120)
    os.unlink(js)
    if p.returncode != 0:
        print(p.stderr); raise SystemExit("VIRHE: pelin tietoja ei saatu luettua selaimessa.")
    d = json.loads(p.stdout.strip().splitlines()[-1])
    tunnetut = ""
    ohje = os.path.join(juuri, "edistynyt-valikko", "OHJE.md")
    if d["valikko"] and os.path.exists(ohje):
        m = re.search(r"^## Tunnetut sisältöasiat[^\n]*\n(.*?)(?=^## |\Z)", lue(ohje), re.S | re.M)
        tunnetut = m.group(1) if m else ""
    kirjoita(os.path.join(juuri, "README.md"),
             readme(d, {"pvm": pvm, "lahde": lippu(args, "--lahde-url"), "versio": lippu(args, "--versio"), "keraa": bool(keraa)}, tunnetut))

    # 5) Testit
    merkinnat = [(k, v[:140]) for k, v in d["tekstit"] if MERKINNAT.search(v)]
    testi = None
    tjs = os.path.join(juuri, "edistynyt-valikko", "testaa.js")
    if d["valikko"] and os.path.exists(tjs):
        kuvat = tempfile.mkdtemp(prefix="ev-kuvat-")
        t = subprocess.run(["node", tjs, os.path.join(juuri, "index.html"), "--kuvat", kuvat], capture_output=True, text=True, timeout=900)
        ok = t.stdout.count("\nOK") + t.stdout.startswith("OK")
        fail = [l for l in t.stdout.splitlines() if l.startswith("FAIL")]
        testi = {"ok": ok, "fail": fail, "kuvat": kuvat}

    # 6) Zip
    zipnimi = os.path.join(ulos, f"{nimi}-github-{pvm}.zip")
    with zipfile.ZipFile(zipnimi, "w", zipfile.ZIP_DEFLATED) as z:
        for hak, _, tiedostot in os.walk(juuri):
            for t in sorted(tiedostot):
                polku = os.path.join(hak, t)
                z.write(polku, os.path.relpath(polku, ulos))

    print(json.dumps({
        "zip": zipnimi, "kansio": juuri, "tiedostot": sorted(os.path.relpath(os.path.join(h, t), juuri) for h, _, ts in os.walk(juuri) for t in ts if "/moduulit/" not in os.path.join(h, t))[:40],
        "raportti": raportti, "otsikko": d["otsikko"], "paatoksia": len(d["paatokset"]),
        "lahteita": len({l["url"] for l in d["kaikkiLahteet"]}), "valikko": bool(d["valikko"]),
        "peli_kaynnistyy": d["kaynnistyy"], "konsolivirheet": d["virheet"], "testi": testi,
        "pelaajalle_nakyvat_keskeneraisyysmerkinnat": merkinnat[:30], "merkintoja_yhteensa": len(merkinnat)
    }, ensure_ascii=False, indent=1))
    return 1 if (d["virheet"] or (testi and testi["fail"]) or d["kaynnistyy"] is False) else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
