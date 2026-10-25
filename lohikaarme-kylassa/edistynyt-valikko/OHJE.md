# Edistynyt valikko -paketti (v1.1.0)

Uudelleenkäytettävä moduuli Lohikäärme kylässä -peleihin. Lisää peliin:

1. **Velhokytkin** (Edistynyt tila) yläpalkkiin ja **velhoteema** (violetti, vaalea + tumma). Asennetaan vain, jos pelissä ei ole omaa `#velho-kytkin`-painiketta.
2. **Edistynyt valikko**: nauha yläpalkin alle (näkyy vain edistyneessä tilassa) ja valikkopaneeli, jossa 4 välilehteä ja sirut:

| Välilehti | Moduulit (id) |
|---|---|
| Tilanne | Kartta (`kartta`), Uutiset (`uutiset`), Asunnot (`asunnot`) |
| Aiheet | Sähkö (`sahko`), Lämpö ja vesi (`lampo`), Maa ja luonto (`maa`), Rahavirrat (`rahavirrat`) |
| Kokemukset | Lupaus ja toteuma (`lupaukset`), Opit ulkomailta (`ulkomaat`) |
| Vaikuta | Näin vaikutat (`vaikuta`), Sanasto (`sanasto`) |

3. **✦-pikapainike** "Syvemmälle: asunnot datakeskusten lähellä" alku- ja loppunäytölle (vain edistyneessä tilassa), jos pelissä ei ole omaa Syvemmälle-painiketta. Avaa valikon Asunnot-sirulle.
4. **11 tietomoduulia**. Kukin piirretään omaan Shadow DOM -juureensa: tyylit ja id:t eivät sekoitu peliin, mutta pelin värit (myös velhoteema ja tumma tila) periytyvät.

## Rakenne

```
asenna.py            asennus / päivitys / purku / poisto / tarkistus
testaa.js            Playwright-testi asennetulle pelille
tyokalut/kokoa_github.py   GitHub-palautuspaketti (zip): kehys, valikko, README lähteineen, .gitignore, testi
OHJE.md              tämä ohje
MODUULIOHJE.md       uuden tietomoduulin tekeminen
osat/valikko.js      valikon logiikka (välilehdet, sirut, Shadow DOM, sovitin, tietomoduulipohja)
osat/valikko.css     valikon tyylit + kaaviotokenit
osat/valikko.html    nauha + valikkopaneelin merkintä
osat/kytkin.js|css|html   velhokytkin ja velhoteema
osat/pohja.css, pohja-lisa.css   tietomoduulipohjan tyylit Shadow DOMiin
osat/tokenit-varalla.css         varapaletti (:where, ei koskaan ohita pelin omia tokeneita)
osat/asuntodata.json Asunnot-moduulin data (Tilastokeskus; keraa.py päivittää)
moduulit/<id>.js     11 moduulia (data, tyylit ja koodi samassa tiedostossa)
moduulit/<id>.tokens.css   moduulin omat värit dokumentin tasolla (kartta, uutiset)
```

## Asennus toiseen pelin versioon

```bash
python3 asenna.py tarkista PELI.html                    # mitä löytyy: yläpalkki, oma kytkin, päätösten id:t, puuttuvat tokenit…
python3 asenna.py asenna PELI.html ULOS.html            # tai --ei-kytkinta, --moduulit kartta,sahko, --ilmoitus "teksti"
node testaa.js ULOS.html --kuvat kuvat/                 # 390/1200 px × vaalea/tumma, kaikki moduulit, Esc, kytkin, peli, vienti
```
- Artifaktista luettu tiedosto voi sisältää julkaisupohjan (1. rivi `<!doctype…<body>`); `asenna` poistaa sen, koska julkaisu lisää sen itse.
- Asennus on toistettavissa: vanhat merkityt lohkot poistetaan ensin. **Päivitys** = aja `asenna` uudelleen uudemmalla paketilla.
- `poista` palauttaa alkuperäisen tiedoston tavulleen (paitsi `--ilmoitus`-muutoksen).
- `pura ASENNETTU.html HAKEMISTO` irrottaa koko paketin (osat, moduulit, asenna.py) mistä tahansa asennetusta pelistä.

### Mihin osat menevät
- Kytkin korvaa yläpalkin tyhjän paikan `<span aria-hidden="true"></span>` (tai lisätään yläpalkin loppuun).
- Nauha ja valikko: heti `</header>`-elementin jälkeen (ilman yläpalkkia `<main>`-elementin edelle).
- Tyylit ja skriptit: pelin **pääskriptin edelle** (skripti, jossa `const SISALTO`). Valikko käynnistyy `DOMContentLoaded`-hetkellä, joten pelin muuttujat ovat silloin olemassa, ja muokkaustilan `LAHDE_HTML`-vienti säilyttää valikon.
- Merkit: `<style data-ev="…">`, `<script data-ev="…">`, `<!-- EV:ALKU nimi -->…<!-- EV:LOPPU nimi -->`.

## GitHub-palautuspaketti
```bash
python3 tyokalut/kokoa_github.py --peli PELI.html --ulos HAKEMISTO [--lahde-url URL] [--versio ID] [--keraa keraa.py]
```
Tekee kansion `lohikaarme-kylassa/` (index.html kehyksineen, `edistynyt-valikko/`, README.md, .gitignore, `tyokalut/keraa.py` jos annettu), asentaa tai päivittää valikon uusimpaan pakettiin, testaa index.html:n suoraan tiedostosta ja pakkaa zipiksi. Raportti listaa pelaajalle näkyvät keskeneräisyysmerkinnät (esim. `[Lähde: …]`).

## Asuntodata (Asunnot-moduuli)
- Moduuli lukee sivun `<script id="asuntodata" type="application/json">` -lohkon. Jos pelissä on oma lohko (esim. pääpelin Syvemmälle-näkymä), sitä käytetään sellaisenaan.
- Muuten paketti lisää lohkon pääskriptin edelle merkeillä `<!-- EV:ALKU asuntodata -->` ja sisälle samat `<!-- ASUNTODATA ALKU/LOPPU -->`-merkit kuin pääpelissä, joten tiimin keräintyökalu `keraa.py` voi päivittää sitä.
- Uudelleenasennus säilyttää aiemmin asennetun (keraa.py:n päivittämän) datan eikä kirjoita sen päälle paketin vanhempaa dataa. `pura` tallentaa sen tiedostoon `osat/asuntodata.json`.
- Pikapainikkeet ovat `VALIKKO.pikanapit`-listassa (`osat/valikko.js`): moduuli, teksti ja `ohita`-valitsin, jonka löytyessä paketti ei lisää omaa painiketta.

## Miten valikko löytää pelin osat (sovitin)

Valikko seuraa `<html data-tila="edistynyt">` -attribuuttia (kytkin asettaa sen). Pelistä luetaan oletuksena:

| Sovittimen kohta | Oletus |
|---|---|
| `pelinTila()` | globaali `tila` (`rooli`, `alue`, `valinnat`) |
| `sisalto()` | globaali `SISALTO` (`paatokset`, `simulaatio`) |
| `laskeSimulaatio(...)` | globaali `laske` |
| `ilmoita(teksti)` | `naytaIlmoitus`, muuten paketin oma ilmoitus |
| `paasisalto()` | `#sisalto` tai `main` (asetetaan `inert`, kun valikko on auki) |
| `ylapalkki()` | `.ylapalkki` tai `header` (valikko alkaa sen alta) |
| `muuDialogiAuki()` | `#vahvistus` näkyvissä → Esc ei sulje valikkoa |
| `paatosAliakset` | `{}` |

Jos toisessa pelissä nimet eroavat, lisää **ennen paketin skriptejä** (tai pelin pääskriptin alkuun):
```html
<script>window.EDISTYNYT_SOVITIN = { pelinTila: () => peli.tila, paatosAliakset: { maankaytto: "luonto" } };</script>
```
`paatosAliakset` kannattaa käyttää vain, jos pelin päätöksen vaihtoehdot A/B/C ovat samat kuin moduulin. Sähkö, Lämpö ja vesi sekä Maa ja luonto korostavat pelaajan valinnan vain, jos pelissä on päätös id:llä `energia`, `ymparisto` tai `maankaytto`. Muuten ne toimivat ilman korostusta.

Roolit ja alueet voivat olla pelissä nimiä ("Paikallisasukas") tai id:itä ("asukas"); molemmat käyvät.

## Muokkaus
- **Välilehdet, järjestys, tekstit**: `osat/valikko.js` → `VALIKKO` (tekstit, valilehdet[].moduulit, artifaktit).
- **Kytkimen tekstit**: `osat/kytkin.js` → `TEKSTIT` (vain paketin oma kytkin; pelin omalle kytkimelle `--ilmoitus`).
- **Uusi moduuli**: ks. MODUULIOHJE.md. Lisää id välilehdelle `VALIKKO.valilehdet` ja tiedosto `moduulit/<id>.js`; `asenna` ottaa kansion tiedostot mukaan automaattisesti.

## Tunnetut sisältöasiat (tiimin tarkistettavaksi, lukuja ei ole muutettu)
- Kartta: seitsemän hankkeen (Google Hamina/Kajaani/Muhos/Vaala, Microsoft Espoo/Kirkkonummi/Vihti) Tietolähde-luku ilman lähdettä listassa; Haminan 100–200 MW; Forssan Yle-viite; 5,3 GW summaa koko kampusten tavoitteita.
- Rahavirrat: 10 M€/MW vs pelin noin 13,6 M€/MW; pysyvät työpaikat 0,5–1,5 / MW vs pelin 64–150 / 100 MW; Tuike-riveiltä puuttuvat rivikohtaiset lähteet; lähdeluettelon nimet on muodostettu osoitteista.
- Lämpö ja vesi: 100 MW × 8 000 h = 800 GWh lämpöä > pelin 788 GWh sähköä; Seinäjoen esivalinta muutettu 5 → 4 MW (talteen saatu lämpö); kaksi lähteetöntä roolitekstiä; `yle-kainuu` ei viitattu.
- Maa ja luonto / peli: "Heikinlaakso ~7 ha" vs "Lahdenväylä ~7,3 ha" samasta lähteestä.
- Lupaus ja toteuma: "määräsi" vs viranomaisen "kehottaa".
- Sanasto: seitsemän määritelmää ja "miljoonat ihmiset" ilman lähdettä.
- Näin vaikutat: "Otanmäki noin 405 ha" ilman lähdettä. Opit ulkomailta: Vuosi-sarake ilman lähteitä, 4 päiväämätöntä lähdettä.
- Uutiset: tilannekuva 24.10.2026 (13 uutista); live-uutisvahti on erillinen artifakti.
- Asunnot: datassa ei vielä ole myynti-ilmoituksia eikä viimeisen 12 kuukauden kauppoja, joten vain "Myynnissä nyt" -osion tyhjä teksti on nähty.
