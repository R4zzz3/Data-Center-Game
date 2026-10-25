/* Moduuli: uutiset – Datakeskusvahti (lähde: F1). Tallennettu tilanne; live-uutisvahti on erillinen artifakti. */
(function () {
  /* Tilannekuva Datakeskusvahdin tietokannasta (kokoelmat items ja meta/status) sellaisenaan. */
  const DATA = {
 "meta": {
  "itemCount": 13,
  "lastRun": "2026-10-24T20:30:00Z",
  "note": "Google News RSS estää haut; GDELT vastaa ajoittain.",
  "runBy": "Ensimmäinen haku (käsin)",
  "sources": [
   "Yle RSS",
   "GDELT DOC API",
   "Verkkohaku"
  ]
 },
 "items": [
  {
   "id": "greenpeace-sahkomarkkinalaki-2026-10",
   "addedAt": "2026-10-24T20:30:00Z",
   "places": [
    "Koko Suomi"
   ],
   "published": "2026-10-12",
   "source": "Greenpeace (STT Info)",
   "summary": "Työ- ja elinkeinoministeriö valmistelee sähkömarkkinalain muutosta, joka ratkaisisi, missä järjestyksessä isot sähkönkäyttäjät, kuten datakeskukset, pääsevät sähköverkkoon. Greenpeacen mukaan esitys voisi kannustaa rakentamaan maakaasuvoimaloita datakeskusten yhteyteen. Järjestö vaatii ympäristövaikutusten arviointia ennen kuin laki etenee eduskuntaan.",
   "themes": [
    "politiikka",
    "ymparisto"
   ],
   "title": "Ministeriön datakeskusten takia sorvaama lakimuutos uhkaa lisätä fossiilisen energian rakentamista",
   "url": "https://www.sttinfo.fi/tiedote/72400764/ministerion-datakeskusten-takia-sorvaama-lakimuutos-uhkaa-lisata-fossiilisen-energian-rakentamista"
  },
  {
   "id": "kiinteistolehti-hypo-2026-10",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Hintaennuste ensi vuodelle +0,5 %",
   "places": [
    "Koko Suomi"
   ],
   "published": "2026-10-23",
   "source": "Kiinteistölehti",
   "summary": "Asuntorahoittaja Hypon mukaan miljardien datakeskus- ja vihreän siirtymän hankkeet voivat piristää asuntokauppaa pienissä kunnissa, vaikka asuntojen hinnat eivät nousisikaan. Samalla Hypo ennustaa asuntojen hintojen laskevan tänä vuonna koko maassa 3 prosenttia ja kääntyvän pieneen nousuun ensi vuonna.",
   "themes": [
    "asuminen"
   ],
   "title": "Hypon asuntoluottoluokitus: Datakeskushankkeet vilkastuttavat asuntomarkkinoita",
   "url": "https://kiinteistolehti.fi/hypon-asuntoluottoluokitus-datakeskushankkeet-vilkastuttavat-asuntomarkkinoita"
  },
  {
   "id": "kotiseutu-liperi-2026-10-22",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Noin 800 milj. euron hanke",
   "places": [
    "Liperi",
    "Kitee"
   ],
   "published": "2026-10-22",
   "source": "Kotiseutu-uutiset",
   "summary": "Scale42 valmistelee yhä noin 800 miljoonan euron datakeskusta Liperiin, vaikka yhtiö keskeytti toisen hankkeensa Kiteellä. Syynä on suunniteltu sähkömarkkinalain muutos, jossa datakeskukset jäisivät sähköverkkoon pääsyn jonossa kotitalouksien ja pk-yritysten taakse. Liperin kunta huomauttaa lausunnossaan, että muutos voi suosia Länsi-Suomea, ja pyytää pidempää siirtymäaikaa.",
   "themes": [
    "politiikka",
    "ymparisto"
   ],
   "title": "Liperin datakeskushanke etenee edelleen – lakimuutos voi kuitenkin viivästyttää aikataulua",
   "url": "https://kotiseutu-uutiset.com/uutiset/2026/10/22/liperin-datakeskushanke-etenee-edelleen-lakimuutos-voi-kuitenkin-viivastyttaa-aikataulua"
  },
  {
   "id": "kova-asuminen-2026-09",
   "addedAt": "2026-10-24T20:30:00Z",
   "places": [
    "Koko Suomi"
   ],
   "published": "2026-09-22",
   "source": "KOVA ry (STT Info)",
   "summary": "Kohtuuhintaisten vuokratalojen omistajien järjestö KOVA muistuttaa, että datakeskusten ja muiden suurinvestointien työntekijät tarvitsevat kohtuuhintaisia koteja työpaikan lähellä. Monilla hankepaikkakunnilla uusia asuntoja ei ole rakennettu vuosiin. Järjestön mielestä asuntopolitiikka pitäisi nähdä osana kasvu- ja työvoimapolitiikkaa.",
   "themes": [
    "asuminen",
    "tyopaikat",
    "politiikka"
   ],
   "title": "Datakeskusinvestointien unohdettu kysymys on asuminen",
   "url": "https://www.sttinfo.fi/tiedote/72340978/datakeskusinvestointien-unohdettu-kysymys-on-asuminen?lang=fi"
  },
  {
   "id": "talotekniikka-rekrytointi-2026-10",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Yli 3 400 työpaikkailmoitusta tammi–syyskuussa",
   "places": [
    "Koko Suomi"
   ],
   "published": "2026-10-23",
   "source": "Talotekniikka-lehti",
   "summary": "Datakeskuksiin haetaan nyt työntekijöitä ennätysmäärin: tammi–syyskuussa Duunitorissa oli yli 3 400 datakeskuksiin liittyvää työpaikkailmoitusta, kun vuotta aiemmin niitä oli noin 900. Lähes puolet paikoista on rakennusalalla, ja eniten haetaan sähköasentajia. Ilman datakeskuksia työpaikkailmoitusten määrä olisi syyskuussa jopa hieman laskenut.",
   "themes": [
    "tyopaikat"
   ],
   "title": "Datakeskuksiin rekrytoidaan nyt ennätyksellisen paljon tekijöitä – eniten haetaan sähköasentajia",
   "url": "https://talotekniikka-lehti.fi/datakeskuksiin-rekrytoidaan-nyt-ennatyksellisen-paljon-tekijoita-eniten-haetaan-sahkoasentajia/"
  },
  {
   "id": "verkkouutiset-23-datakeskusta",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "50–150 omaa työntekijää valmista keskusta kohden",
   "places": [
    "Koko Suomi"
   ],
   "published": "2026-10-20",
   "source": "Verkkouutiset",
   "summary": "Datakeskusalan järjestön mukaan Suomen datakeskusten kapasiteetti voi kasvaa 2 800 megawattiin vuoteen 2030 mennessä, mikä on yli kaksinkertainen viime vuoden arvioon verrattuna. Rakenteilla on ainakin 23 suurta hanketta. Valmis datakeskus työllistää tyypillisesti 50–150 omaa työntekijää ja suunnilleen saman verran ulkopuolisia, ja rakennustyömaiden työntekijöistä reilu kolmannes on ulkomaalaisia.",
   "themes": [
    "tyopaikat",
    "ymparisto"
   ],
   "title": "Suomeen rakennetaan 23 suurta datakeskusta – näkymä nousi rajusti",
   "url": "https://www.verkkouutiset.fi/a/suomeen-rakennetaan-23-suurta-datakeskusta-nakyma-nousi-rajusti/"
  },
  {
   "id": "yle-74-20244990",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Lähimmät kodit kymmenien metrien päässä",
   "places": [
    "Lahti"
   ],
   "published": "2026-09-18",
   "source": "Yle",
   "summary": "Singaporelainen DayOne rakentaa Lahden Kiveriöön TikTokin käyttöön tulevaa datakeskusta vain kymmenien metrien päähän kerrostaloista ja omakotitaloista. Asukkaat ovat valittaneet työmaan melusta, tärinästä ja pölystä tammikuusta asti. Kaupunki ei löytänyt lainrikkomusta, mutta velvoitti urakoitsijat ilmoittamaan yötöistä viikkoa etukäteen.",
   "themes": [
    "asuminen",
    "politiikka"
   ],
   "title": "Lahdessa rakennetaan datakeskusta aivan asutuksen viereen",
   "url": "https://yle.fi/a/74-20244990"
  },
  {
   "id": "yle-74-20248242",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Noin 35 ha kaavoitettavaksi",
   "places": [
    "Kontiolahti"
   ],
   "published": "2026-09-28",
   "source": "Yle",
   "summary": "Usva Energia on pyytänyt Kontiolahden kuntaa aloittamaan kaavoituksen noin 35 hehtaarin alueelle Lehmossa, lähellä Joensuun rajaa. Kaavaluonnos on tarkoitus saada valmiiksi vuoden loppuun mennessä, minkä jälkeen kunnanhallitus ja valtuusto päättävät asiasta. Alueelle tarvittava 400 kilovoltin voimalinja valmistuu vasta 2030-luvulla.",
   "themes": [
    "politiikka"
   ],
   "title": "Kontiolahden Lehmoon suunnitteilla jo kolmas datakeskus",
   "url": "https://yle.fi/a/74-20248242"
  },
  {
   "id": "yle-74-20249055",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "60 uutta hanketta tänä vuonna, 145 yhteensä",
   "places": [
    "Koko Suomi"
   ],
   "published": "2026-10-06",
   "source": "Yle",
   "summary": "Elinkeinoelämän keskusliiton mukaan Suomessa on tänä vuonna julkistettu jo 60 uutta datakeskushanketta, ja kaikkiaan hankkeita on ilmoitettu 145. Kasvua voivat jarruttaa sähköverkon kapasiteetti ja kaavoitetun maan puute. Ministeriön lakiluonnos ohjaisi suuria sähkönkäyttäjiä alueille, joilla verkossa on tilaa, ja laki tulisi voimaan vuoden 2027 alussa.",
   "themes": [
    "politiikka",
    "ymparisto"
   ],
   "title": "Suomessa on julkistettu tänä vuonna useampi kuin yksi uusi datakeskus viikossa",
   "url": "https://yle.fi/a/74-20249055"
  },
  {
   "id": "yle-74-20250334",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Noin 530 ha metsää raivattu kahdella työmaalla",
   "places": [
    "Muhos",
    "Kajaani"
   ],
   "published": "2026-10-08",
   "source": "Yle",
   "summary": "Lupa- ja valvontavirasto määräsi Googlen keskeyttämään datakeskustyömaidensa valmistelut Muhoksella ja Kajaanissa. Yhtiö oli raivannut metsää noin 330 hehtaaria Muhoksella ja lähes 200 hehtaaria Kajaanissa, vaikka ympäristövaikutusten arviointi on yhä kesken. Pysäytys voi kestää kuukausia, ja Muhoksen töistä on käynnissä myös poliisin esiselvitys.",
   "themes": [
    "politiikka",
    "ymparisto"
   ],
   "title": "Viranomaisen yllätyspäätös pisti stopin Googlen datakeskustöille",
   "url": "https://yle.fi/a/74-20250334"
  },
  {
   "id": "yle-74-20250354",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Noin 300 pysyvää työpaikkaa, 2 000 rakennusaikana",
   "places": [
    "Jämsä"
   ],
   "published": "2026-10-08",
   "source": "Yle",
   "summary": "Ranskalainen Sesterce suunnittelee yli 10 miljardin euron datakeskusta UPM:n entisen Kaipolan paperitehtaan alueelle Jämsään. Rakennusaikana työtä olisi noin 2 000 ihmiselle ja valmiissa keskuksessa noin 300:lle. Kaupunginjohtajan mukaan hanke vaatii vielä monta lupaprosessia ennen kuin se on varma.",
   "themes": [
    "tyopaikat"
   ],
   "title": "Jättimäinen datakeskus suunnitteilla Jämsään",
   "url": "https://yle.fi/a/74-20250354"
  },
  {
   "id": "yle-74-20252354",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "1,3 ha liito-oravan elinympäristöä tuhoutui",
   "places": [
    "Hamina"
   ],
   "published": "2026-10-20",
   "source": "Yle",
   "summary": "Googlen tytäryhtiö hakkasi Haminan Summassa vuosina 2018–2019 metsää lupaa enemmän ja tuhosi noin 1,3 hehtaaria liito-oravan elinympäristöä. Rikosilmoitusta ei tuolloin tehty, vaikka viranomaisen mukaan nykyinen laki sitä edellyttäisi. Luonnonsuojelupiiri aikoo nyt pyytää poliisia tutkimaan asian.",
   "themes": [
    "ymparisto",
    "politiikka"
   ],
   "title": "Google on hakannut laittomasti myös Haminassa, mutta rikosilmoitusta ei tehty",
   "url": "https://yle.fi/a/74-20252354"
  },
  {
   "id": "yle-74-20252969",
   "addedAt": "2026-10-24T20:30:00Z",
   "keyFact": "Oulun Toppilaan suunnitellaan 5 mrd. euron tekoälykampusta",
   "places": [
    "Lahti",
    "Oulu",
    "Kouvola",
    "Kajaani"
   ],
   "published": "2026-10-24",
   "source": "Yle",
   "summary": "Yle kysyi kiinteistönvälittäjiltä eri puolilta Suomea, vaikuttavatko lähelle asutusta nousevat datakeskukset asuntojen hintoihin. Toistaiseksi vaikutusta hintoihin ei ole näkynyt Lahdessa, Oulussa eikä Kajaanissa. Kouvolassa rakennustyömaat ovat kuitenkin lisänneet isojen vuokra-asuntojen kysyntää.",
   "themes": [
    "asuminen"
   ],
   "title": "Nouseeko naapuriisi datakeskus? Näin se voi vaikuttaa asunnon hintaan",
   "url": "https://yle.fi/a/74-20252969"
  }
 ]
};
  const LIVE_URL = "https://claude.ai/artifact/6Ysv21EKJiWU1UJGZB3qm3";

  const ICONS = {
    asuminen: '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8 8 2.5 14 8M4 7v6.5h8V7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    tyopaikat: '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="5" width="12" height="8.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 5V3.2h4V5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    politiikka: '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 13.5h12M3.5 11.5V7M6.5 11.5V7M9.5 11.5V7M12.5 11.5V7M2 6l6-3.5L14 6z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    ymparisto: '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M9 1.5 3.5 9h4L6.5 14.5 12.5 7h-4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    muut: '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="2" fill="currentColor"/></svg>'
  };

  const CSS = `
:host {
  --t-asuminen: var(--uutiset-asuminen, var(--red));
  --t-tyopaikat: var(--uutiset-tyopaikat, var(--chart-2));
  --t-politiikka: var(--uutiset-politiikka, var(--ink));
  --t-ymparisto: var(--uutiset-ymparisto, var(--green));
  --t-muut: var(--ink-soft);
  container-type: inline-size;
}
[hidden] { display: none !important; }
.wrap { display: grid; gap: 22px; min-width: 0; }

/* Yläosa */
.masthead { display: grid; gap: 10px; }
.brand { display: flex; align-items: center; gap: 10px; }
.brand svg { flex: none; }
.lede { color: var(--ink-soft); }
.tilanne {
  background: var(--card); border: 1px solid var(--line); border-left: 4px solid var(--gold); border-radius: 4px 8px 8px 4px;
  padding: 12px 14px; display: grid; gap: 6px; font-size: 0.95rem;
}
.tilanne .pvm { font-family: var(--f-sc); font-weight: 700; letter-spacing: 0.06em; color: var(--ink); font-size: 1.02rem; }
.tilanne p { color: var(--ink-soft); }
.tilanne a { font-weight: 700; }

/* Teemojen yhteenveto */
.themes { display: grid; grid-template-columns: 1fr; gap: 8px; }
.theme-btn {
  --t: var(--t-muut);
  appearance: none; text-align: left; cursor: pointer; min-height: 44px;
  background: var(--card); color: var(--ink);
  border: 1.5px solid var(--line); border-radius: 8px;
  padding: 10px 14px; display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 10px; font: inherit;
  transition: border-color .15s, background-color .15s;
}
.theme-btn:hover { border-color: var(--t); }
.theme-btn[aria-pressed="true"] { border-color: var(--t); border-width: 2.5px; padding: 9px 13px; background: color-mix(in srgb, var(--t) 10%, var(--card)); }
.theme-btn .lbl { font-family: var(--f-sc); font-weight: 700; font-size: 1rem; letter-spacing: 0.04em; display: flex; align-items: center; gap: 7px; color: var(--t); }
.theme-btn .num { grid-row: 1 / span 2; grid-column: 2; font-family: var(--f-body); font-weight: 700; font-size: 1.6rem; line-height: 1.1; font-variant-numeric: tabular-nums; }
.theme-btn .sub { font-size: 0.82rem; color: var(--ink-soft); line-height: 1.35; }
.ico { width: 16px; height: 16px; flex: none; }
@container (min-width: 620px) {
  .themes { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .theme-btn { grid-template-columns: 1fr; }
  .theme-btn .num { grid-row: auto; grid-column: auto; }
}

/* Suodattimet */
.filters { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.chip {
  appearance: none; cursor: pointer; font-family: var(--f-sc); font-weight: 700; font-size: 0.92rem; letter-spacing: 0.03em;
  border: 1px solid var(--line); background: var(--card); color: var(--ink);
  border-radius: 999px; padding: 6px 14px; min-height: 44px;
}
.chip[aria-pressed="true"] { background: var(--red); color: var(--on-red); border-color: var(--red); }
.paikka { font-family: var(--f-sc); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.04em; color: var(--ink-soft); display: flex; flex-wrap: wrap; align-items: center; gap: 4px 8px; width: 100%; }
.paikka select {
  font: 1rem var(--f-body); color: var(--ink); background: var(--card);
  border: 1px solid var(--line); border-radius: 6px; padding: 6px 10px; min-height: 44px; flex: 1 1 12rem; max-width: 100%; min-width: 0;
}
.maara { font-family: var(--f-sc); font-size: 0.88rem; letter-spacing: 0.04em; color: var(--ink-soft); width: 100%; }

/* Syöte */
.feed { display: grid; gap: 22px; min-width: 0; }
.day { display: grid; gap: 0; min-width: 0; }
.day h2 {
  font-family: var(--f-sc); font-weight: 700; font-size: 0.85rem; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--ink-soft); margin: 0 0 4px; padding-bottom: 6px; border-bottom: 1px solid var(--line);
}
.feed article { padding: 16px 0 18px; border-bottom: 1px solid var(--line); display: grid; gap: 8px; min-width: 0; }
.feed article:last-child { border-bottom: 0; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tag {
  --t: var(--t-muut);
  font-family: var(--f-sc); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.03em;
  color: var(--t); background: color-mix(in srgb, var(--t) 12%, transparent);
  border-radius: 5px; padding: 2px 8px; display: inline-flex; align-items: center; gap: 5px;
}
.tag .ico { width: 13px; height: 13px; }
.feed article h3 { margin: 0; font-family: var(--f-body); font-weight: 700; font-size: 1.16rem; line-height: 1.3; letter-spacing: 0; text-wrap: balance; }
.feed article h3 a { color: var(--ink); text-decoration: none; }
.feed article h3 a:hover { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
.summary { overflow-wrap: anywhere; }
.feed mark {
  --t: var(--t-muut);
  color: inherit; background: color-mix(in srgb, var(--t) 16%, transparent);
  box-shadow: inset 0 -2px 0 var(--t); border-radius: 2px; padding: 0 1px;
}
.fact { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; color: var(--ink); font-weight: 700; }
.fact b { font-family: var(--f-sc); color: var(--ink-soft); letter-spacing: 0.08em; font-size: 0.8rem; }
.meta { font-size: 0.88rem; color: var(--ink-soft); display: flex; flex-wrap: wrap; gap: 2px 12px; }
.meta a { font-weight: 700; }

.notice {
  background: var(--card); border: 1px dashed var(--line); border-radius: 8px;
  padding: 18px; color: var(--ink-soft); display: grid; gap: 6px;
}
.notice strong { color: var(--ink); font-family: var(--f-sc); font-size: 1.05rem; }
.alaviite { font-size: 0.88rem; color: var(--ink-soft); display: grid; gap: 4px; border-top: 1px solid var(--line); padding-top: 14px; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
`;

  const HTML = `<div class="wrap">
  <header class="masthead">
    <div class="brand">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect x="4" y="3" width="22" height="7" rx="1.5" fill="none" stroke="var(--green)" stroke-width="2"/>
        <rect x="4" y="12" width="22" height="7" rx="1.5" fill="none" stroke="var(--green)" stroke-width="2"/>
        <rect x="4" y="21" width="22" height="6" rx="1.5" fill="none" stroke="var(--green)" stroke-width="2"/>
        <circle cx="9" cy="6.5" r="1.4" fill="var(--t-asuminen)"/>
        <circle cx="9" cy="15.5" r="1.4" fill="var(--t-tyopaikat)"/>
        <circle cx="9" cy="24" r="1.4" fill="var(--t-politiikka)"/>
      </svg>
      <h1>Datakeskusvahti</h1>
    </div>
    <p class="lede">Suomen datakeskusuutiset muutamassa virkkeessä. Esiin nostetaan, mitä hankkeet tarkoittavat asumiselle, työpaikoille ja päätöksenteolle.</p>
    <div class="tilanne" id="tilanne"></div>
  </header>

  <section class="themes" aria-label="Korostetut teemat" id="themes"></section>

  <div class="filters" id="filters" role="group" aria-label="Suodata uutisia"></div>

  <section class="feed" id="feed" aria-label="Uutiset"></section>

  <footer class="alaviite">
    <span>Lähteet: Ylen RSS-syöte, GDELT-uutisrajapinta ja verkkohaku (mm. paikallislehdet, kuntien ja järjestöjen tiedotteet).</span>
    <span>Tiivistelmät on tehnyt tekoäly. Tarkista yksityiskohdat alkuperäisestä jutusta.</span>
  </footer>
</div>`;

  rekisteroiModuuli({
    id: "uutiset",
    nimi: "Datakeskusvahti",
    lyhyt: "Uutiset",
    pohja: false,
    data: DATA,
    css: CSS,
    html: HTML,
    alusta(root) {
      const THEMES = {
        asuminen:   { label: "Asuminen",            short: "Asuminen",   sub: "hinnat, vuokrat, naapurusto",
          re: /(?<!\p{L})(asun\p{L}*|asuk\p{L}*|asutu\p{L}*|vuokra\p{L}*|kotitalou\p{L}*|kote\p{L}*|kiinteistönväli\p{L}*|asuntomarkkin\p{L}*|melu\p{L}*|tärinä\p{L}*|pöly\p{L}*)/giu },
        tyopaikat:  { label: "Työpaikat",           short: "Työpaikat",  sub: "rekrytointi, työllisyys",
          re: /(?<!\p{L})(työpaik\p{L}*|työntekij\p{L}*|työllis\p{L}*|työvoim\p{L}*|rekry\p{L}*|asentaj\p{L}*|työtä|työmai\p{L}*|työmaa\p{L}*)/giu },
        politiikka: { label: "Politiikka",          short: "Politiikka", sub: "kaavat, lait, päätökset",
          re: /(?<!\p{L})(kaav\p{L}*|valtuust\p{L}*|kunnanhallit\p{L}*|kaupunginhallit\p{L}*|eduskun\p{L}*|ministeri\p{L}*|lakimuut\p{L}*|lakiluonno\p{L}*|lain(?!\p{L})|laki(?!\p{L})|lausun\p{L}*|viranomai\p{L}*|lupaprosess\p{L}*|vero\p{L}*|kaupunginjohtaj\p{L}*|siirtymäai\p{L}*)/giu },
        ymparisto:  { label: "Ympäristö ja energia", short: "Ympäristö" },
        muut:       { label: "Muut",                short: "Muut" }
      };
      const MAIN = ["asuminen", "tyopaikat", "politiikka"];
      const ALL_CHIPS = ["kaikki", "asuminen", "tyopaikat", "politiikka", "ymparisto", "muut"];
      const DAYS = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
      const $ = (id) => root.getElementById(id);
      const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

      // Uusin ensin, kuten alkuperäisessä (orderBy published desc).
      const items = DATA.items.slice().sort((a, b) => String(b.published).localeCompare(String(a.published)) || String(a.id).localeCompare(String(b.id)));
      const meta = DATA.meta || {};
      const state = { theme: "kaikki", place: "" };   // suodattimet pidetään muistissa (ei osoiterivin #-osaa)

      function parseDay(s) { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || ""); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }
      function dayLabel(s) {
        const d = parseDay(s); if (!d) return "Päiväys puuttuu";
        const today = new Date(); today.setHours(0, 0, 0, 0);
        const diff = Math.round((today - d) / 86400000);
        const base = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
        if (diff === 0) return `Tänään · ${base}`;
        if (diff === 1) return `Eilen · ${base}`;
        return `${DAYS[d.getDay()]} ${base}`;
      }
      // Tilannekuvan päivä Suomen ajassa (lastRun on UTC-aikaleima).
      function snapshotDate(iso) {
        const d = new Date(iso); if (isNaN(d)) return "";
        try {
          const o = {}; new Intl.DateTimeFormat("fi-FI", { timeZone: "Europe/Helsinki", day: "numeric", month: "numeric", year: "numeric" })
            .formatToParts(d).forEach((p) => { o[p.type] = p.value; });
          return `${o.day}.${o.month}.${o.year}`;
        } catch (e) { return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`; }
      }
      function themesOf(it) {
        const t = Array.isArray(it.themes) ? it.themes.filter((x) => THEMES[x]) : [];
        return t.length ? t : ["muut"];
      }
      function placesOf(it) { return Array.isArray(it.places) ? it.places.filter(Boolean) : (it.place ? [it.place] : []); }

      // Teeman avainsanojen korostus (escapattu teksti).
      function highlight(text) {
        const spans = [];
        for (const key of MAIN) {
          const re = new RegExp(THEMES[key].re.source, "giu");
          let m;
          while ((m = re.exec(text))) spans.push({ start: m.index, end: m.index + m[0].length, key });
        }
        if (!spans.length) return esc(text);
        spans.sort((a, b) => a.start - b.start || b.end - a.end);
        const kept = []; let lastEnd = -1;
        for (const s of spans) if (s.start >= lastEnd) { kept.push(s); lastEnd = s.end; }
        let out = "", pos = 0;
        for (const s of kept) {
          out += esc(text.slice(pos, s.start));
          out += `<mark style="--t:var(--t-${s.key})" title="${THEMES[s.key].label}">${esc(text.slice(s.start, s.end))}</mark>`;
          pos = s.end;
        }
        return out + esc(text.slice(pos));
      }

      function filtered() {
        return items.filter((it) => {
          if (state.theme !== "kaikki" && !themesOf(it).includes(state.theme)) return false;
          if (state.place && !placesOf(it).includes(state.place)) return false;
          return true;
        });
      }

      function renderStatus() {
        const pvm = snapshotDate(meta.lastRun);
        $("tilanne").innerHTML =
          `<span class="pvm">Tilanne ${esc(pvm || "ei tiedossa")} · ${items.length} uutista</span>` +
          `<p>Tämä on tallennettu tilannekuva. Ajantasainen uutisvahti päivittyy omalla sivullaan: ` +
          `<a href="${LIVE_URL}" data-ulkoinen target="_blank" rel="noopener">avaa Datakeskusvahti ↗</a></p>` +
          `<p>Tiivistelmät on tehnyt tekoäly, eikä niitä ole tarkistettu yksitellen. Tarkista yksityiskohdat linkitetystä jutusta.</p>`;
      }

      function renderThemes() {
        // "Viim. 30 pv" lasketaan tilannekuvan päivästä, ei katselupäivästä.
        const ref = new Date(meta.lastRun).getTime();
        const since = (isNaN(ref) ? Date.now() : ref) - 30 * 86400000;
        $("themes").innerHTML = MAIN.map((k) => {
          const all = items.filter((it) => themesOf(it).includes(k));
          const recent = all.filter((it) => { const d = parseDay(it.published); return d && d.getTime() >= since; }).length;
          return `<button class="theme-btn" type="button" id="theme-${k}" style="--t:var(--t-${k})" aria-pressed="${state.theme === k}" data-theme-key="${k}">
            <span class="lbl">${ICONS[k]}${THEMES[k].label}</span>
            <span class="num">${all.length}</span>
            <span class="sub">${recent} viim. 30 pv · ${THEMES[k].sub}</span>
          </button>`;
        }).join("");
      }

      function renderFilters() {
        const places = new Map();
        for (const it of items) for (const p of placesOf(it)) places.set(p, (places.get(p) || 0) + 1);
        const sorted = [...places.keys()].sort((a, b) => a === "Koko Suomi" ? -1 : b === "Koko Suomi" ? 1 : a.localeCompare(b, "fi"));
        if (state.place && !places.has(state.place)) state.place = "";
        const chips = ALL_CHIPS.map((k) => {
          const label = k === "kaikki" ? "Kaikki" : THEMES[k].short;
          return `<button class="chip" type="button" id="chip-${k}" aria-pressed="${state.theme === k}" data-theme-key="${k}">${label}</button>`;
        }).join("");
        $("filters").innerHTML = chips +
          `<label class="paikka" for="place">Paikkakunta
            <select id="place"><option value="">Kaikki</option>${sorted.map((p) => `<option value="${esc(p)}"${p === state.place ? " selected" : ""}>${esc(p)} (${places.get(p)})</option>`).join("")}</select>
          </label>
          <p class="maara" id="maara" aria-live="polite"></p>`;
      }

      function renderFeed() {
        const feed = $("feed");
        const list = filtered();
        const maara = $("maara");
        if (maara) maara.textContent = list.length === items.length ? `Kaikki ${items.length} uutista` : `Näytetään ${list.length} / ${items.length} uutista`;
        if (!items.length) {
          feed.innerHTML = `<div class="notice"><strong>Tilannekuvassa ei ole uutisia</strong><span>Katso ajantasaiset uutiset Datakeskusvahdin omalta sivulta.</span></div>`;
          return;
        }
        if (!list.length) {
          feed.innerHTML = `<div class="notice"><strong>Ei uutisia tällä rajauksella</strong><span>Valitse toinen teema tai paikkakunta.</span></div>`;
          return;
        }
        const groups = new Map();
        for (const it of list) { const k = (it.published || "").slice(0, 10); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(it); }
        feed.innerHTML = [...groups.entries()].map(([day, its]) => `
          <section class="day" aria-label="${esc(dayLabel(day))}">
            <h2>${esc(dayLabel(day))}</h2>
            ${its.map(renderItem).join("")}
          </section>`).join("");
      }

      function renderItem(it) {
        const th = themesOf(it);
        const places = placesOf(it);
        let host = "";
        try { host = new URL(it.url).hostname.replace(/^www\./, ""); } catch (e) {}
        const safeUrl = /^https?:\/\//i.test(it.url || "") ? it.url : "";
        return `<article>
          <div class="tags">${th.map((k) => `<span class="tag" style="--t:var(--t-${k})">${ICONS[k]}${THEMES[k].label}</span>`).join("")}</div>
          <h3>${safeUrl ? `<a href="${esc(safeUrl)}" target="_blank" rel="noopener">${esc(it.title)}</a>` : esc(it.title)}</h3>
          <p class="summary">${highlight(it.summary || "")}</p>
          ${it.keyFact ? `<div class="fact"><b>Luku</b><span>${esc(it.keyFact)}</span></div>` : ""}
          <div class="meta">
            ${places.length ? `<span>${esc(places.join(", "))}</span>` : ""}
            <span>${esc(it.source || host)}</span>
            ${safeUrl ? `<a href="${esc(safeUrl)}" target="_blank" rel="noopener">Lue alkuperäinen ↗</a>` : ""}
          </div>
        </article>`;
      }

      function setTheme(k, fokusId) {
        state.theme = (state.theme === k && k !== "kaikki") ? "kaikki" : k;
        renderThemes(); renderFilters(); renderFeed();
        // Painikkeet piirretään uudelleen: palautetaan fokus samaan painikkeeseen.
        const f = fokusId && $(fokusId); if (f) f.focus();
      }

      const onClick = (e) => {
        const b = e.target.closest("[data-theme-key]");
        if (b) setTheme(b.dataset.themeKey, b.id);
      };
      const onChange = (e) => {
        if (e.target.id === "place") { state.place = e.target.value; renderFeed(); }
      };
      root.addEventListener("click", onClick);
      root.addEventListener("change", onChange);

      renderStatus(); renderThemes(); renderFilters(); renderFeed();
      return () => { root.removeEventListener("click", onClick); root.removeEventListener("change", onChange); };
    }
  });
})();
