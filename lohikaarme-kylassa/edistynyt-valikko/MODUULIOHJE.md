# Uuden tietomoduulin tekeminen Edistynyt valikko -pakettiin

Moduuli on yksi tiedosto `moduulit/<id>.js`, joka kutsuu `rekisteroiModuuli({...})`. Esimerkki omalla merkinnällä ja sivun datalohkoa lukevasta moduulista: `moduulit/asunnot.js`. Lisää id välilehdelle `osat/valikko.js` → `VALIKKO.valilehdet[].moduulit` ja aja `python3 asenna.py asenna PELI.html ULOS.html` sekä `node testaa.js ULOS.html`. Erillisenä artifaktina julkaistun moduulin id lisätään `VALIKKO.artifaktit`-listaan, jolloin linkit siihen avautuvat valikon sisällä.

## Rajapinta
```js
rekisteroiModuuli({
  id: "sahko",                       // annettu id, täsmälleen
  nimi: "Sähkö ja kantaverkko",       // koko nimi
  lyhyt: "Sähkö",                     // siru-painikkeen teksti, 1–3 sanaa
  pohja: true,                        // true = käyttää yhteistä tietomoduulipohjaa (yläosa, roolivalitsin, oletukset, lähteet)
  data: { /* moduulidata-JSON sellaisenaan objektina */ },
  css: `/* moduulin omat tyylit; Shadow DOM rajaa ne automaattisesti */`,
  html: "",                           // pohja:false -moduuleille koko oma merkintä; pohja:true -moduuleille yleensä tyhjä
  alusta(root, APU, ctx) {
    // root = ShadowRoot. Käytä root.getElementById / root.querySelector(All). Ei document.getElementById/querySelector.
    // Piirrä sisältö root.getElementById("osiot") -elementtiin (pohja:true).
    // Kuuntelijat root.addEventListener(...) – EI document/window-tason kuuntelijoita ellei pakko; jos lisäät, poista ne palautettavassa siivousfunktiossa.
    // window.ROOLI_MUUTTUI → APU.kunRooliMuuttuu(tila => { ... })   (tila = { rooli: "asukas", alue: "maaseutu" })
    // window.APU → parametri APU (sama sisältö: D, ROOLIT, ALUEET, PAAT, SYMBOLI, KULMA, esc, fmt, haarukka, viite, lahdeRivi, kortti, puolet, pikto, palkit, tila, root, $)
    return () => { /* siivous: ajastimet, window-kuuntelijat */ };
  }
});
```
`pohja: true` piirtää ennen `alusta`-kutsua yläosan (`D.nimi`, `D.ingressi`, `D.paat`), roolivalitsimen (`D.rooliRivit`, `D.alueRivit`), oletukset (`D.oletukset`), lähteet (`D.lahteet`, ankkurit `#lahde-<id>`) ja alatunnisteen (`D.paivitetty`, ilman paluulinkkejä). Pohjan HTML: `#ylaosa`, `#valitsin`, `#osiot`, `#oletukset`, `#lahteet`, `#alatunniste` (katso `osat/valikko.js`, `POHJA_HTML`).

`ctx` (pelin tila, vain luku): `rooli`, `alue` (pelin arvot tai null), `rooliId`, `alueId` (pohjan id:t tai null), `valinnat` (pelin raakataulukko), **`valinta(paatosId)`** → 0/1/2 (A/B/C) tai null — käytä tätä, älä indeksejä, koska pelin versioiden päätösjärjestys vaihtelee; `pelattu` (bool), `paatokset` (SISALTO.paatokset), `simulaatio` (SISALTO.simulaatio, mm. `perus.kayttoasteAla/Yla`, `perus.sahkoveroEuroaMWh`, `perus.tehoMW`), `laske(valinnat)`, `avaaModuuli(id)`, `naytaIlmoitus(teksti)`, `liikeVahennetty()`, `esc`.

## Säännöt
1. **Sisältö säilyy.** Tekstit, luvut ja lähteet siirretään sellaisinaan. Älä keksi lukuja, lähteitä tai linkkejä. Pelin omat laskut/pyöristykset merkitään "Pelin oletus:". Sisältöongelmat (lähteettömät luvut, ristiriidat) **listaa raporttiin** tiimille – älä poista sisältöä.
2. **Korjaa selvät bugit** (näyttövirheet, tyhjät otsikot, väärä laskenta, saavutettavuus). Kerro raportissa mitä korjasit.
3. **Värit:** käytä vain tokeneita `--bg --card --line --ink --ink-soft --red --on-red --green --gold --chart-1 --chart-2 --chart-muted` ja fontteja `--f-display --f-body --f-sc`. Älä määrittele `:root`-tokeneita moduulin `css`:ssä (Shadow DOMissa ne eivät toimi). Moduulin omat värit → `moduulit/<id>.tokens.css`, kaikki neljä teemaa:
   ```css
   :root { --x: ...; }                                                     /* pergamentti */
   @media (prefers-color-scheme: dark) {
     :root:not([data-theme="light"]) { --x: ...; }                         /* kynttilänvalo */
     :root[data-tila="edistynyt"]:not([data-theme="light"]) { --x: ...; }  /* velho, tumma */
   }
   :root[data-theme="dark"] { --x: ...; }
   :root[data-tila="edistynyt"] { --x: ...; }                              /* velho, vaalea */
   :root[data-tila="edistynyt"][data-theme="dark"] { --x: ...; }
   ```
   Etuliitä omat tokenit moduulin id:llä (esim. `--kartta-maa`). Valikko näkyy aina edistyneessä tilassa, joten velhoteemat (violetti) ovat tärkeimmät.
4. **Leveys:** moduuli näkyy noin 340–450 px leveänä (puhelin ja työpöytä, pelin kapea palsta). Ei vaakavieritystä: kaaviot `viewBox` + `width:100%`, leveät taulukot `.taulu`-kääreeseen (overflow-x:auto). Kosketuskohteet vähintään 44 px.
5. **Ei globaaleja sivuvaikutuksia:** ei `location.hash`/`history`-muutoksia, ei `document`-tason kuuntelijoita ilman siivousta, ei globaaleja muuttujia (kaikki `alusta`-funktion sisään tai `rekisteroiModuuli`-kutsun ympärille IIFE:hen). Ei ulkoisia kirjastoja eikä fontteja (peli lataa fontit jo). Ei merkkijonoja `</script` tai `<!--` (kirjoita `<\/script`).
6. **Linkit:** lähdeviitteet `#lahde-...` toimivat automaattisesti (isäntä vierittää Shadow DOMin sisällä). Linkit muihin moduuliartifakteihin (claude.ai/artifact/<id>) isäntä avaa valikon sisällä. Jos linkin on tarkoitus avata erillinen sivu, lisää `data-ulkoinen`.
7. **Pelin valinnat (vapaaehtoinen, pieni):** jos moduuli liittyy päätökseen, voit korostaa pelaajan valinnan `ctx.valinta("<päätös-id>")`, mutta toimi myös ilman sitä (null).
8. **Suomi**, selkeä arkikieli; käyttöliittymätekstit moduulin sisällä.

## Testaus
```bash
python3 asenna.py asenna PELI.html /tmp/ulos.html
node testaa.js /tmp/ulos.html --moduulit <id> --kuvat /tmp/kuvat
```
Kaikkien rivien pitää olla OK. Katso kuvakaappaukset ja testaa moduulin omat painikkeet (`document.querySelector('.moduuli-isanta').shadowRoot`).
