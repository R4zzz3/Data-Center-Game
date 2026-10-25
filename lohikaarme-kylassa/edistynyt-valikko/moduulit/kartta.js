/* ===== Tietomoduuli: Datakeskuskartta (alkuperäinen artifakti VpA8GUi18uw526wtWbZwVY) =====
   Suomen kartta datakeskushankkeista: pallon pinta-ala = ilmoitettu teho, väri = vaihe.
   Kaikki id:t ja kuuntelijat ovat moduulin Shadow DOMissa (root). Värit: moduulit/kartta.tokens.css. */
(function () {
  var DATA = {
 "id": "kartta",
 "nimi": "Datakeskuskartta",
 "paat": [
  "energia",
  "maankaytto"
 ],
 "ingressi": "Suomen julkisuudessa olleet datakeskushankkeet: missä ne ovat, kuinka isoja ne ovat ja missä vaiheessa ne ovat. Kaikki suunnitelmat eivät toteudu.",
 "lueLisaaTeksti": "Katso kartalta, missä Suomen datakeskushankkeet ovat ja missä vaiheessa.",
 "paivitetty": "2026-10-25",
 "rooliRivit": {
  "asukas": "Kartalta näet, onko lähelläsi hanke ja missä vaiheessa se on. Vaihe kertoo, voiko kaavaan vielä vaikuttaa.",
  "yrittaja": "Rakenteilla olevat hankkeet tuovat työmaille asiakkaita ja alihankintaa usean vuoden ajan. Valmis keskus ostaa paikallisesti vähemmän.",
  "viljelija": "Moni iso hanke on suunniteltu maaseudulle metsän tai pellon paikalle. Ne tarvitsevat myös voimalinjoja, jotka voivat kulkea tilojen halki.",
  "nuori": "Suurin osa hankkeista on vasta suunnitelmia, ja moni ei toteudu. Työpaikkojen määrä selviää vasta vuosien päästä.",
  "valtuutettu": "Kartta näyttää, kuinka moni hanke tavoittelee samoja sähköverkon paikkoja. Kaavasta päättää kunta, liittymästä Fingrid."
 },
 "alueRivit": {
  "maaseutu": "Kartan suurimmat ilmoitetut hankkeet ovat pienissä kunnissa ja maaseudulla, esimerkiksi Pyhäjoella, Jämsässä ja Nurmijärvellä.",
  "pienkunta": "Pienessä kunnassa yksi hanke voi muuttaa koko kunnan sähkönkulutuksen ja talouden. Se näkyy kaikkialla.",
  "kaupunki": "Helsingin toimivat keskukset ovat kartalla pieniä, 12–15 megawattia. Kaupungissa kaukolämpöverkko on yleensä lähellä."
 },
 "oletukset": [
  "Vuoden energia on laskettu käyttöasteella 50–90 %, kuten pelin simulaatiossa.",
  "Pisteet ovat kunnan tai alueen kohdalla, eivät tarkassa tontissa."
 ],
 "lahteet": [
  {
   "id": "aisuomi-opas",
   "nimi": "AI Suomi: Datakeskukset Suomessa (kooste, 29.9.2026)",
   "url": "https://aisuomi.fi/opas/datakeskukset-suomessa"
  },
  {
   "id": "aisuomi-jono",
   "nimi": "AI Suomi: Suomeen jonottaa 5 gigawattia konesaleja",
   "url": "https://aisuomi.fi/liiketoiminta/suomeen-jonottaa-5-gigawattia-konesaleja-kuka-saa-lammon"
  },
  {
   "id": "tietolahde",
   "nimi": "Tietolähde.fi: Datakeskukset kartalla",
   "url": "https://tietolahde.fi/datakeskukset/kartta/"
  },
  {
   "id": "microsoft",
   "nimi": "Microsoft: Pääkaupunkiseudun datakeskusalueen toinen vaihe (28.4.2026)",
   "url": "https://news.microsoft.com/source/emea/2026/04/microsoft-kaynnistaa-paakaupunkiseudun-datakeskusalueen-toisen-vaiheen-rakentamisen/?lang=fi"
  },
  {
   "id": "aljazeera",
   "nimi": "Al Jazeera: Finland orders halt to work on Google data sites (7.10.2026)",
   "url": "https://www.aljazeera.com/amp/news/2026/10/7/finland-orders-halt-to-work-on-google-data-sites-over-environment-concerns"
  },
  {
   "id": "nivos",
   "nimi": "Nivos: Datasaleista saadaan lähivuosina lisää puhdasta lämpöä Mäntsälän keskustaan (27.8.2025)",
   "url": "https://nivos.fi/ajankohtaista/uusista-konesaleista-lisaa-puhdasta-lampoa-mantsalaan/"
  },
  {
   "id": "yle-hamina",
   "nimi": "Yle: Google lahjoittaa energiayhtiölle ilmaiseksi hukkalämpöä 2 000 kotitalouteen (21.5.2024)",
   "url": "https://yle.fi/a/74-20089673"
  },
  {
   "id": "ub-vaala",
   "nimi": "United Bankers: UB Timberland Fund sold a plot of land in Vaala to Google (26.2.2026)",
   "url": "https://unitedbankers.fi/en/united-bankers-plc/investors/releases-and-publications/r/46068/united-bankers'-ub-timberland-fund-sold-a-plot-of-land-in-vaala-to-google/"
  },
  {
   "id": "fingrid-18-5",
   "nimi": "Fingrid: Webinaari liittymissopimushakemuksista (18.5.2026)",
   "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/ajankohtaista-tapahtumat/webinaari-liittymissopimushakemuksista-18.5.2026-esitysmateriaali.pdf"
  }
 ],
 "sisalto": {
  "vaiheJarjestys": [
   "kaytossa",
   "rakenteilla",
   "kaava",
   "suunniteltu",
   "keskeytetty"
  ],
  "vaiheet": {
   "kaytossa": {
    "nimi": "Käytössä",
    "vari": "var(--v-kaytossa)"
   },
   "rakenteilla": {
    "nimi": "Rakenteilla",
    "vari": "var(--v-rakenteilla)"
   },
   "kaava": {
    "nimi": "Kaava tai YVA",
    "vari": "var(--v-kaava)"
   },
   "suunniteltu": {
    "nimi": "Suunniteltu",
    "vari": "var(--v-suunniteltu)"
   },
   "keskeytetty": {
    "nimi": "Keskeytetty",
    "vari": "var(--v-keskeytetty)"
   }
  },
  "alueetKartalla": [
   {
    "id": "koko",
    "nimi": "Koko Suomi",
    "raja": null
   },
   {
    "id": "uusimaa",
    "nimi": "Uusimaa",
    "raja": [
     [
      23.6,
      59.95
     ],
     [
      25.8,
      60.75
     ]
    ]
   },
   {
    "id": "kaakko",
    "nimi": "Kaakkois-Suomi",
    "raja": [
     [
      25.4,
      60.4
     ],
     [
      29.2,
      61.9
     ]
    ]
   },
   {
    "id": "pohjoinen",
    "nimi": "Oulu ja Kainuu",
    "raja": [
     [
      24,
      63.9
     ],
     [
      28.2,
      65.5
     ]
    ]
   }
  ],
  "vertailuTeksti": "Vertailuksi: koko Suomen sähkön huippukulutus on alle 16 000 megawattia. Ilmoitettu teho on hankkeiden tavoite, ei mitattu kulutus.",
  "karttaHuomio": "Pallon pinta-ala kertoo ilmoitetun tehon. Vedä karttaa siirtääksesi ja lähennä painikkeilla tai kahdella sormella.",
  "taulukkoHuomio": "Hankelista on koottu hankkeiden tiedotteista ja kahdesta koosteesta. Lähteet ovat ristiriidassa osassa hankkeita, ja vaiheet muuttuvat nopeasti.",
  "moduulit": {
   "sahko": {
    "nimi": "Sähkö ja kantaverkko",
    "url": "https://claude.ai/artifact/TPJAA9G5quTdzRPUNbP7nM"
   },
   "lampo-ja-vesi": {
    "nimi": "Hukkalämpö ja vesi",
    "url": "https://claude.ai/artifact/NwTr1GDe8pzZujTbKLGthQ"
   },
   "nain-vaikutat": {
    "nimi": "Näin vaikutat",
    "url": "https://claude.ai/artifact/MaEKRkKd7bQoqcRArEdUtS"
   },
   "maankaytto-ja-luonto": {
    "nimi": "Maankäyttö ja luonto",
    "url": "https://claude.ai/artifact/NGDbkxeFTFsH5myAD6kS1M"
   }
  },
  "hankkeet": [
   {
    "id": "google-hamina",
    "nimi": "Google Hamina",
    "toimija": "Google (Tuike Finland Oy)",
    "kunta": "Hamina",
    "lat": 60.535,
    "lon": 27.11,
    "mw": null,
    "vaihe": "kaytossa",
    "tilanne": "Käytössä vuodesta 2011 entisellä Summan paperitehtaalla, laajenee",
    "lampo": "Haminan Energia: Googlen lämmön on määrä kattaa noin 80 % kaupungin kaukolämmöstä, noin 2 000 kotitaloutta",
    "lahteet": [
     "yle-hamina",
     "aisuomi-opas"
    ],
    "mwHuomio": "Ei julkistettu; arviot 100–200 MW, Tietolähde 255 MW",
    "jaahdytys": "Jäähdytys merivedellä",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "google-kajaani",
    "nimi": "Google Kajaani (Otanmäki)",
    "toimija": "Google (Tuike Finland Oy)",
    "kunta": "Kajaani",
    "lat": 64.12,
    "lon": 27.09,
    "mw": null,
    "vaihe": "keskeytetty",
    "tilanne": "Lupa- ja valvontavirasto määräsi esityöt keskeytettäväksi 23.10.2026 mennessä, kunnes YVA on tehty. Kaavasta on valitettu.",
    "lampo": null,
    "lahteet": [
     "aljazeera",
     "aisuomi-jono"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 200 MW",
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "google-muhos",
    "nimi": "Google Muhos",
    "toimija": "Google (Tuike Finland Oy)",
    "kunta": "Muhos",
    "lat": 64.81,
    "lon": 25.99,
    "mw": null,
    "vaihe": "keskeytetty",
    "tilanne": "Esityöt keskeytettävä 23.10.2026 mennessä YVA:n ajaksi. Google kertoo istuttavansa puita 130 hehtaarille.",
    "lampo": null,
    "lahteet": [
     "aljazeera",
     "aisuomi-jono"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 200 MW",
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "google-vaala",
    "nimi": "Google Vaala",
    "toimija": "Google",
    "kunta": "Vaala",
    "lat": 64.56,
    "lon": 26.84,
    "mw": null,
    "vaihe": "kaava",
    "tilanne": "Google on ostanut noin 900 hehtaaria maata noin 6 kilometrin päästä Vaalan keskustasta. Kaavoitus on kesken. Ei kuulu keskeytysmääräykseen.",
    "lampo": null,
    "lahteet": [
     "ub-vaala",
     "aljazeera"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 150 MW",
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "csc-lumi",
    "nimi": "LUMI ja LUMI-AI",
    "toimija": "CSC – Tieteen tietotekniikan keskus",
    "kunta": "Kajaani",
    "lat": 64.225,
    "lon": 27.73,
    "mw": null,
    "vaihe": "kaytossa",
    "tilanne": "LUMI-supertietokone käytössä Renforsin Rannassa; LUMI-AI avautuu käyttäjille vuoden 2027 lopussa.",
    "lampo": "Kajaanin kaukolämpöverkkoon vuodesta 2021",
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono",
     "tietolahde"
    ],
    "mwHuomio": "Lähteiden luvut eroavat (7–20 MW)",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "xtx-kajaani",
    "nimi": "XTX Markets Kajaani",
    "toimija": "XTX Markets",
    "kunta": "Kajaani",
    "lat": 64.22,
    "lon": 27.73,
    "mw": 22.5,
    "vaihe": "rakenteilla",
    "tilanne": "Rakenteilla",
    "lampo": null,
    "lahteet": [
     "tietolahde"
    ],
    "moduulit": [
     "sahko",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "microsoft-espoo",
    "nimi": "Microsoft Espoo",
    "toimija": "Microsoft",
    "kunta": "Espoo",
    "lat": 60.21,
    "lon": 24.66,
    "mw": null,
    "vaihe": "rakenteilla",
    "tilanne": "1. vaihe valmistuu noin vuodenvaihteessa 2026–2027; 2. vaiheen rakentaminen alkaa 2026. Työmailla jopa 7 500 työntekijää huipussaan; käytössä noin 50 henkeä rakennusta kohden.",
    "lampo": "Fortum: koko alueen valmistuttua noin 40 % Espoon, Kauniaisten ja Kirkkonummen verkon kaukolämmöstä",
    "lahteet": [
     "microsoft"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 80 MW",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "microsoft-kirkkonummi",
    "nimi": "Microsoft Kirkkonummi",
    "toimija": "Microsoft",
    "kunta": "Kirkkonummi",
    "lat": 60.12,
    "lon": 24.44,
    "mw": null,
    "vaihe": "rakenteilla",
    "tilanne": "Rakennusluvat 2. vaiheelle myönnetty. Sama hanke kuin Espoo ja Vihti.",
    "lampo": "Fortum (sama verkko kuin Espoo)",
    "lahteet": [
     "microsoft"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 80 MW",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "microsoft-vihti",
    "nimi": "Microsoft Vihti",
    "toimija": "Microsoft",
    "kunta": "Vihti",
    "lat": 60.42,
    "lon": 24.32,
    "mw": null,
    "vaihe": "rakenteilla",
    "tilanne": "Rakennusluvat 2. vaiheelle myönnetty. Kunnan historian suurin yritysinvestointi.",
    "lampo": "Fortum (sama hanke)",
    "lahteet": [
     "microsoft"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 60 MW",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "onzero-helsinki",
    "nimi": "OnZero Helsinki",
    "toimija": "OnZero",
    "kunta": "Helsinki",
    "lat": 60.205,
    "lon": 24.97,
    "mw": null,
    "vaihe": "suunniteltu",
    "tilanne": "Uusi sali; lämpö verkkoon 2027 alkaen",
    "lampo": "Noin 70 000 kodin lämmitys",
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "mwHuomio": "Lämpöteho noin 60 MW",
    "jaahdytys": "Suljettu jäähdytyskierto",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "atnorth-helsinki",
    "nimi": "atNorth FIN01–FIN03",
    "toimija": "atNorth",
    "kunta": "Helsinki",
    "lat": 60.2,
    "lon": 24.94,
    "mw": 12,
    "vaihe": "kaytossa",
    "tilanne": "Käytössä",
    "lampo": null,
    "lahteet": [
     "tietolahde"
    ],
    "moduulit": [
     "sahko",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "verne-helsinki",
    "nimi": "Verne Helsinki",
    "toimija": "Verne Global (atNorth)",
    "kunta": "Helsinki",
    "lat": 60.19,
    "lon": 24.93,
    "mw": 15,
    "vaihe": "kaytossa",
    "tilanne": "Käytössä",
    "lampo": null,
    "lahteet": [
     "tietolahde"
    ],
    "moduulit": [
     "sahko",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "kinetic-nurmijarvi",
    "nimi": "Kinetic DC Sudentulli",
    "toimija": "Kinetic DC (DigitalLand Services)",
    "kunta": "Nurmijärvi",
    "lat": 60.46,
    "lon": 24.81,
    "mw": 560,
    "vaihe": "kaava",
    "tilanne": "YVA-ohjelma; mielipiteet 15.10.2026 asti",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "nebius-mantsala",
    "nimi": "Nebius Mäntsälä",
    "toimija": "Nebius Group",
    "kunta": "Mäntsälä",
    "lat": 60.63,
    "lon": 25.32,
    "mw": 75,
    "vaihe": "kaytossa",
    "tilanne": "Käytössä, laajenee",
    "lampo": "Nivos: noin kolmannes Mäntsälän keskustan kaukolämmöstä, osuus kasvamassa",
    "lahteet": [
     "nivos",
     "aisuomi-opas"
    ],
    "mwHuomio": "Kasvamassa 145 MW:iin",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "hyperco-lohja",
    "nimi": "Hyperco Lohja (Virkkala)",
    "toimija": "Hyperco",
    "kunta": "Lohja",
    "lat": 60.2,
    "lon": 23.98,
    "mw": 100,
    "vaihe": "suunniteltu",
    "tilanne": "Suunniteltu",
    "lampo": null,
    "lahteet": [
     "tietolahde"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "atnorth-kouvola",
    "nimi": "atNorth FIN04 Myllykoski",
    "toimija": "atNorth (Equinix, CPP Investments)",
    "kunta": "Kouvola",
    "lat": 60.77,
    "lon": 26.78,
    "mw": 430,
    "vaihe": "rakenteilla",
    "tilanne": "Rakenteilla, 1. vaihe 2027",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "tietolahde"
    ],
    "mwHuomio": "Tavoite, ei vahvistettu",
    "moduulit": [
     "sahko",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "tiktok-kouvola",
    "nimi": "TikTok Koria (Project Clover)",
    "toimija": "TikTok (Hyperco, DayOne)",
    "kunta": "Kouvola",
    "lat": 60.85,
    "lon": 26.55,
    "mw": null,
    "vaihe": "rakenteilla",
    "tilanne": "Rakenteilla",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "tietolahde"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 100 MW",
    "moduulit": [
     "sahko",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "tiktok-lahti",
    "nimi": "TikTok Lahti",
    "toimija": "TikTokin emoyhtiö (DayOne)",
    "kunta": "Lahti",
    "lat": 60.98,
    "lon": 25.66,
    "mw": null,
    "vaihe": "rakenteilla",
    "tilanne": "Rakenteilla (Tietolähde: suunniteltu)",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "tietolahde"
    ],
    "mwHuomio": "Ei julkistettu; Tietolähde arvioi 100 MW",
    "moduulit": [
     "sahko",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "nebius-lappeenranta",
    "nimi": "Nebius Pajarila",
    "toimija": "Nebius, Polarnode",
    "kunta": "Lappeenranta",
    "lat": 61.06,
    "lon": 28.19,
    "mw": 310,
    "vaihe": "rakenteilla",
    "tilanne": "Rakenteilla, ensimmäinen rakennus 2027",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "mw1": 60,
    "jaahdytys": "Suljettu kierto, ei vedenottoa vesistöstä",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "nordvire-imatra",
    "nimi": "Nord Vire Imatra",
    "toimija": "Nord Vire",
    "kunta": "Imatra",
    "lat": 61.19,
    "lon": 28.77,
    "mw": null,
    "vaihe": "suunniteltu",
    "tilanne": "Maanvuokrasopimus allekirjoitettu",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas"
    ],
    "jaahdytys": "Huoli pohjavesialueesta",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "cerebras-mikkeli",
    "nimi": "Visulahti",
    "toimija": "Cerebras, Compute Nordic Finland",
    "kunta": "Mikkeli",
    "lat": 61.73,
    "lon": 27.31,
    "mw": 165,
    "vaihe": "rakenteilla",
    "tilanne": "1. vaihe rakenteilla. Kiinteistövero arviolta 0,8–2,5 milj. € vuodessa.",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas"
    ],
    "mw1": 50,
    "jaahdytys": "Suljettu kierto",
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "qts-forssa",
    "nimi": "Forssan datakeskus",
    "toimija": "Ei vahvistettu (Tietolähde: QTS / Blackstone)",
    "kunta": "Forssa",
    "lat": 60.81,
    "lon": 23.62,
    "mw": null,
    "vaihe": "suunniteltu",
    "tilanne": "Suunniteltu",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "tietolahde"
    ],
    "mwHuomio": "Yle: voisi käyttää jopa 8 % Suomen sähköstä; Tietolähde 450 MW",
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "turku-raisio",
    "nimi": "Turku–Raisio kampus",
    "toimija": "Useita toimijoita",
    "kunta": "Turku",
    "lat": 60.48,
    "lon": 22.17,
    "mw": 300,
    "vaihe": "suunniteltu",
    "tilanne": "Suunnitteluvaiheessa",
    "lampo": null,
    "lahteet": [
     "tietolahde"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "puredc-seinajoki",
    "nimi": "Pure DC Seinäjoki",
    "toimija": "Pure DC",
    "kunta": "Seinäjoki",
    "lat": 62.79,
    "lon": 22.84,
    "mw": 550,
    "vaihe": "suunniteltu",
    "tilanne": "1. vaihe vuokrattu asiakkaalle (heinäkuu 2026)",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "mw1": 110,
    "mwHuomio": "Koko kampus yli 550 MW",
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "sesterce-jamsa",
    "nimi": "Sesterce Kaipola",
    "toimija": "Sesterce",
    "kunta": "Jämsä",
    "lat": 62.08,
    "lon": 25.27,
    "mw": 600,
    "vaihe": "suunniteltu",
    "tilanne": "Ilmoitettu 8.10.2026; ankkuriasiakas ja rahoittajat nimeämättä",
    "lampo": null,
    "lahteet": [
     "aisuomi-jono"
    ],
    "mw1": 200,
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "eddu-saarijarvi",
    "nimi": "Eddu Energy Saarijärvi",
    "toimija": "Eddu Energy",
    "kunta": "Saarijärvi",
    "lat": 62.71,
    "lon": 25.26,
    "mw": 2,
    "vaihe": "suunniteltu",
    "tilanne": "Lämpöä tavoitellaan talvelle 2026–2027",
    "lampo": "Saarijärven Kaukolämpö, 1,6 MW",
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "moduulit": [
     "sahko",
     "lampo-ja-vesi",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "helios-lapinlahti",
    "nimi": "Helios Alapitkä",
    "toimija": "Helios Nordic Energy",
    "kunta": "Lapinlahti",
    "lat": 63.37,
    "lon": 27.4,
    "mw": 500,
    "vaihe": "kaava",
    "tilanne": "Kaavoitus käynnissä",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "mw1": 90,
    "mwHuomio": "1. vaihe 80–100 MW; noin 5 % Suomen sähköstä täydellä teholla",
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "helios-iisalmi",
    "nimi": "Helios Iisalmi",
    "toimija": "Helios Nordic Energy",
    "kunta": "Iisalmi",
    "lat": 63.56,
    "lon": 27.19,
    "mw": 500,
    "vaihe": "suunniteltu",
    "tilanne": "Suunniteltu",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "lehmo-kontiolahti",
    "nimi": "Lehmo",
    "toimija": "YIT, UPM, Usva Energia",
    "kunta": "Kontiolahti",
    "lat": 62.66,
    "lon": 29.85,
    "mw": null,
    "vaihe": "kaava",
    "tilanne": "Kaavoitus käynnissä",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "glesys-oulu",
    "nimi": "Glesys Rusko",
    "toimija": "Glesys, Trevian",
    "kunta": "Oulu",
    "lat": 65.05,
    "lon": 25.58,
    "mw": 300,
    "vaihe": "rakenteilla",
    "tilanne": "1. vaihe valmistumassa syksyllä 2026",
    "lampo": null,
    "lahteet": [
     "aisuomi-opas",
     "aisuomi-jono"
    ],
    "mw1": 8,
    "mwHuomio": "1. vaihe 8 MW, potentiaali 300 MW",
    "moduulit": [
     "sahko",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "nscale-oulu",
    "nimi": "Nokia ja Nscale Toppila",
    "toimija": "Nokia, Nscale",
    "kunta": "Oulu",
    "lat": 65.04,
    "lon": 25.44,
    "mw": null,
    "vaihe": "suunniteltu",
    "tilanne": "Haku EU:n tekoälygigatehtaaksi; päätökset alkuvuonna 2027",
    "lampo": null,
    "lahteet": [
     "aisuomi-jono"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "hyperco-pyhajoki",
    "nimi": "Hyperco Pyhäjoki",
    "toimija": "Hyperco",
    "kunta": "Pyhäjoki",
    "lat": 64.47,
    "lon": 24.26,
    "mw": 680,
    "vaihe": "suunniteltu",
    "tilanne": "Suunniteltu",
    "lampo": null,
    "lahteet": [
     "tietolahde"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   },
   {
    "id": "meta-ii",
    "nimi": "Meta Ii",
    "toimija": "Meta / Valoa Networks",
    "kunta": "Ii",
    "lat": 65.32,
    "lon": 25.37,
    "mw": 200,
    "vaihe": "suunniteltu",
    "tilanne": "Suunniteltu",
    "lampo": null,
    "lahteet": [
     "tietolahde"
    ],
    "moduulit": [
     "sahko",
     "nain-vaikutat",
     "maankaytto-ja-luonto"
    ]
   }
  ]
 }
};

  var CSS = [
    ".karttaRuutu { display: grid; gap: 18px; }",
    ".karttaKortti { gap: 10px; }",
    ".alueet { gap: 6px; }",
    ".kartta { position: relative; width: min(100%, calc(66vh * 0.56)); width: min(100%, calc(66svh * 0.56)); margin-inline: auto;",
    "  border: 1px solid var(--line); border-radius: 4px; overflow: hidden; background: var(--kartta-meri); }",
    "#kartta { display: block; width: 100%; height: auto; aspect-ratio: 560 / 1000; touch-action: pan-y; cursor: grab; user-select: none; -webkit-user-select: none; }",
    "#kartta.zoomattu { touch-action: none; }",
    "#kartta:active { cursor: grabbing; }",
    "#naapurit path { fill: var(--kartta-muu-maa); stroke: var(--line); stroke-width: 0.6; vector-effect: non-scaling-stroke; }",
    "#suomi { fill: var(--kartta-maa); stroke: var(--gold); stroke-width: 1; stroke-linejoin: round; vector-effect: non-scaling-stroke; }",
    ".piste, .osuma { cursor: pointer; }",
    ".osuma { fill: transparent; pointer-events: all; }",
    ".piste:focus { outline: none; }",
    ".piste:focus-visible circle:first-child { stroke: var(--gold); stroke-width: 3px; vector-effect: non-scaling-stroke; }",
    ".zoom { position: absolute; top: 8px; right: 8px; display: grid; gap: 6px; }",
    ".zoom .nappi { width: 44px; padding: 0; font: 700 1.3rem var(--f-body); line-height: 1; background: color-mix(in srgb, var(--card) 92%, transparent); }",
    ".pieniNappi { min-height: 44px; padding: 6px 10px; font-size: 0.85rem; }",
    ".pieniNappi[aria-pressed=\"true\"] { padding: 5px 9px; }",
    ".vihje, .rullaVihje { position: absolute; background: var(--ink); color: var(--card); font: 600 0.85rem var(--f-body); padding: 5px 9px; border-radius: 4px; pointer-events: none; z-index: 2; }",
    ".vihje { transform: translate(-50%, calc(-100% - 8px)); white-space: nowrap; }",
    ".rullaVihje { left: 50%; bottom: 12px; transform: translateX(-50%); width: max-content; max-width: calc(100% - 24px); text-align: center; }",
    ".lampoValinta { display: inline-flex; gap: 8px; align-items: center; font-family: var(--f-sc); letter-spacing: 0.04em; min-height: 44px; cursor: pointer; }",
    ".lampoValinta input { width: 20px; height: 20px; accent-color: var(--green); margin: 0; }",
    ".vaiheNappi { display: inline-flex; gap: 7px; align-items: center; }",
    ".pallo { width: 11px; height: 11px; border-radius: 50%; background: var(--v); flex: none; }",
    ".vaiheNappi[aria-pressed=\"false\"] { opacity: 0.6; }",
    ".vaiheNappi[aria-pressed=\"false\"] .pallo { background: transparent; box-shadow: inset 0 0 0 1.5px var(--v); }",
    ".maara { font-family: var(--f-body); color: var(--ink-soft); font-size: 0.85rem; }",
    ".vaiheMerkki { display: inline-flex; gap: 6px; align-items: center; font: 700 0.85rem var(--f-sc); letter-spacing: 0.05em; color: var(--ink); white-space: nowrap; }",
    ".paneeli { gap: 12px; }",
    ".paneeli #kaikki-hankkeet { justify-self: start; }",
    ".paneeli h2:focus { outline: none; }",
    ".paneeli h2:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }",
    ".selitteet { display: grid; gap: 6px; font-size: 0.92rem; }",
    ".selite1 { display: flex; gap: 8px; align-items: center; }",
    ".selite1 svg { width: 22px; height: 22px; flex: none; }",
    ".hankelista { list-style: none; margin: 0; padding: 0; max-height: 30rem; overflow-y: auto; border-top: 1px solid var(--line); }",
    ".hankelista button { appearance: none; width: 100%; background: none; border: 0; border-bottom: 1px solid var(--line); color: var(--ink); font: inherit; text-align: left; cursor: pointer; min-height: 44px; padding: 8px 2px; display: grid; grid-template-columns: 12px minmax(0, 1fr) auto; gap: 10px; align-items: center; }",
    ".hankelista button:hover { background: color-mix(in srgb, var(--gold) 12%, transparent); }",
    ".hankelista .nimi { font-weight: 600; min-width: 0; }",
    ".hankelista small { font-weight: 400; color: var(--ink-soft); }",
    ".hankelista .mw { font-variant-numeric: tabular-nums; color: var(--ink-soft); white-space: nowrap; }",
    ".tiedot { display: grid; grid-template-columns: max-content minmax(0, 1fr); gap: 8px 14px; margin: 0; }",
    ".tiedot dt { font: 700 0.8rem var(--f-sc); letter-spacing: 0.08em; color: var(--ink-soft); padding-top: 3px; }",
    ".tiedot dd { margin: 0; min-width: 0; }",
    ".linkkiNappi { text-decoration: none; display: inline-flex; align-items: center; color: var(--green); }",
    ".taulukkoNappi { appearance: none; background: none; border: 0; padding: 0; font: 600 1rem var(--f-body); color: var(--green); text-decoration: underline; cursor: pointer; text-align: left; min-height: 44px; }",
    "tr.himmea { opacity: 0.5; }",
    ".taulu table { min-width: 640px; }",
    ".taulu:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }",
    ".piilo { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; }",
    "@media (max-width: 380px) { .tiedot { grid-template-columns: 1fr; gap: 2px; } .tiedot dd { margin-bottom: 8px; } }"
  ].join("\n");

  function alusta(root, A, ctx) {
    var D = A.D, esc = A.esc, fmt = A.fmt, $ = function (id) { return root.getElementById(id); };
    var S = D.sisalto, GEO = KARTTA_GEO;
    var JARJ = S.vaiheJarjestys;
    /* Vaiheiden värit tulevat moduulin omista tokeneista (--kartta-<vaihe>), jotta ne toimivat kaikissa teemoissa. */
    var VAIHEET = {};
    Object.keys(S.vaiheet).forEach(function (v) { VAIHEET[v] = { nimi: S.vaiheet[v].nimi, vari: "var(--kartta-" + v + ")" }; });
    /* Kopio hankkeista: kartan koordinaatit lisätään kopioon, data pysyy koskemattomana. */
    var P = S.hankkeet.map(function (p) { var q = {}; for (var k in p) q[k] = p[k]; return q; });
    var tila = { vaiheet: {}, vainLampo: false, valittu: null, k: 1, cx: 280, cy: 500 };
    JARJ.forEach(function (v) { tila.vaiheet[v] = true; });
    var raf = 0, rullaAjastin = 0, vieritin = null;

    /* Projektio: sama kuin karttapohjan laskennassa (poikittainen Mercator, keskimeridiaani 26° I). */
    function proj(lon, lat) {
      var R = Math.PI / 180, l = (lon - 26) * R, f = lat * R;
      var x = Math.cos(l) * Math.cos(f), y = Math.sin(l) * Math.cos(f), z = Math.sin(f);
      var lam = Math.atan2(-z, x), phi = Math.asin(y);
      return [GEO.translate[0] + GEO.scale * Math.log(Math.tan((Math.PI / 2 + phi) / 2)), GEO.translate[1] + GEO.scale * lam];
    }
    /* Saman kunnan hankkeet levitetään pienelle kehälle, jotta jokaista voi napauttaa. */
    var ryhmat = {};
    P.forEach(function (p) { (ryhmat[p.kunta] = ryhmat[p.kunta] || []).push(p); });
    Object.keys(ryhmat).forEach(function (k) {
      var arr = ryhmat[k], c = proj(arr[0].lon, arr[0].lat);
      arr.forEach(function (p, i) {
        p.x = c[0]; p.y = c[1]; p.ox = 0; p.oy = 0;
        if (arr.length > 1) { var a = i / arr.length * 2 * Math.PI - Math.PI / 2; p.ox = Math.cos(a) * 9; p.oy = Math.sin(a) * 9; }
      });
    });
    /* Pallon pinta-ala on suoraan verrannollinen tehoon: r = K·√MW. Pienin säde RMIN on näyttövalinta. */
    var K = 1, RMIN = 3, MW_MIN = Math.round((RMIN / K) * (RMIN / K));
    function sade(p) { return p.mw == null ? 6 : Math.max(RMIN, K * Math.sqrt(p.mw)); }
    function nakyvat() { return P.filter(function (p) { return tila.vaiheet[p.vaihe] && (!tila.vainLampo || p.lampo); }); }
    function mwTeksti(p) { return p.mw == null ? "Ei julkistettu" : fmt(p.mw, p.mw % 1 ? 1 : 0) + " MW"; }
    function hanke(id) { return P.filter(function (x) { return x.id === id; })[0]; }
    /* Vuosienergia: pienillä hankkeilla GWh, jotta haarukka ei näy muodossa "0,0–0,0 TWh". */
    function vuosiTeksti(mw) {
      var ala = mw * 8.76 * 0.5, yla = mw * 8.76 * 0.9; // GWh
      if (yla >= 1000) return A.haarukka(ala / 1000, yla / 1000, 1, "TWh");
      return A.haarukka(ala, yla, yla < 20 ? 1 : 0, "GWh");
    }

    /* --- Rakenne --- */
    $("osiot").innerHTML =
      A.kortti('<h2 id="yhteenveto-otsikko">Hankkeet yhdellä silmäyksellä</h2>' +
        '<div class="luvut" id="luvut"></div>' +
        '<p class="pieni" id="vertailu"></p>', "yhteenveto") +
      '<div class="karttaRuutu">' +
        '<div class="kortti karttaKortti">' +
          '<div class="napit" role="group" aria-label="Näytä vaiheen mukaan" id="suodattimet"></div>' +
          '<label class="lampoValinta" for="vainLampo"><input type="checkbox" id="vainLampo"> Vain hukkalämpöä hyödyntävät</label>' +
          '<div class="napit alueet" role="group" aria-label="Siirry alueelle">' +
            S.alueetKartalla.map(function (r, i) { return '<button type="button" class="nappi pieniNappi" data-kalue="' + esc(r.id) + '" aria-pressed="' + (i === 0) + '">' + esc(r.nimi) + "</button>"; }).join("") +
          "</div>" +
          '<div class="kartta" id="karttaAlue">' +
            '<svg id="kartta" viewBox="0 0 560 1000" role="img" aria-label="Suomen kartta datakeskushankkeista">' +
              '<g id="naapurit"></g><path id="suomi"></path><g id="osumat"></g><g id="pisteet"></g></svg>' +
            '<div class="zoom"><button type="button" class="nappi" id="lahenna" aria-label="Lähennä">+</button><button type="button" class="nappi" id="loitonna" aria-label="Loitonna">−</button></div>' +
            '<div class="vihje" id="vihje" hidden></div>' +
            '<div class="rullaVihje" id="rullaVihje" hidden>Lähennä: Ctrl tai ⌘ + rulla</div>' +
          "</div>" +
          '<p class="pieni">' + esc(S.karttaHuomio) + " Hiirellä: Ctrl tai ⌘ + rulla.</p>" +
          '<p class="pieni">Näyttövalinta: alle ' + MW_MIN + " MW:n hankkeet piirretään " + MW_MIN + " MW:n kokoisina, jotta ne erottuvat kartalla.</p>" +
        "</div>" +
        '<div class="kortti paneeli" id="paneeli"></div>' +
        '<p class="piilo" role="status" id="tilaIlmoitus"></p>' +
      "</div>" +
      A.kortti('<h2 id="taulukko-otsikko">Kaikki hankkeet</h2><div class="taulu" tabindex="0" role="region" aria-labelledby="taulukko-otsikko"><table><thead><tr><th>Hanke</th><th>Kunta</th><th>Vaihe</th><th>Teho, MW</th><th>Hukkalämpö</th></tr></thead><tbody id="taulukko"></tbody></table></div>' +
        '<p class="pieni">' + esc(S.taulukkoHuomio) + A.viite(["aisuomi-opas", "tietolahde"]) + "</p>");

    var svg = $("kartta"), alue = $("karttaAlue"), vihje = $("vihje"), rullaVihje = $("rullaVihje");
    $("suomi").setAttribute("d", GEO.fin);
    $("naapurit").innerHTML = GEO.naapurit.map(function (d) { return '<path d="' + d + '"/>'; }).join("");
    function ilmoita(t) { $("tilaIlmoitus").textContent = t; }

    /* --- Zoom ja siirto viewBoxilla --- */
    function rajaa() {
      tila.k = Math.max(1, Math.min(12, tila.k));
      var w = 280 / tila.k, h = 500 / tila.k;
      tila.cx = Math.max(w, Math.min(560 - w, tila.cx)); tila.cy = Math.max(h, Math.min(1000 - h, tila.cy));
    }
    function asetaVB() {
      rajaa();
      svg.setAttribute("viewBox", (tila.cx - 280 / tila.k) + " " + (tila.cy - 500 / tila.k) + " " + (560 / tila.k) + " " + (1000 / tila.k));
      /* Lähentämättömänä yhden sormen pystypyyhkäisy vierittää valikkoa; lähennettynä se siirtää karttaa. */
      svg.classList.toggle("zoomattu", tila.k > 1.01);
      piirraPisteet();
    }
    function siirry(k, cx, cy) {
      cancelAnimationFrame(raf);
      if (ctx.liikeVahennetty()) { tila.k = k; tila.cx = cx; tila.cy = cy; asetaVB(); return; }
      var a = { k: tila.k, cx: tila.cx, cy: tila.cy }, t0 = performance.now();
      function askel(t) {
        var u = Math.min(1, (t - t0) / 420), e = 1 - Math.pow(1 - u, 3);
        tila.k = a.k + (k - a.k) * e; tila.cx = a.cx + (cx - a.cx) * e; tila.cy = a.cy + (cy - a.cy) * e; asetaVB();
        raf = u < 1 ? requestAnimationFrame(askel) : 0;
      }
      raf = requestAnimationFrame(askel);
    }
    function vapaaAlue() { root.querySelectorAll("[data-kalue]").forEach(function (b) { b.setAttribute("aria-pressed", "false"); }); }
    function svgPiste(ev) { var pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY; return pt.matrixTransform(svg.getScreenCTM().inverse()); }
    /* Lähin pystysuunnassa vierittyvä esivanhempi (valikon runko), jotta kartan reunalta voi jatkaa vieritystä. */
    function etsiVieritin() {
      var el = root.host;
      while (el && el !== document.body) {
        var oy = getComputedStyle(el).overflowY;
        if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight) return el;
        el = el.parentElement;
      }
      return document.scrollingElement;
    }
    var osoittimet = {}, veto = null;
    function osuu(t) { return t.closest && t.closest(".piste, .osuma"); }
    svg.addEventListener("pointerdown", function (e) {
      if (osuu(e.target)) return;
      cancelAnimationFrame(raf);
      osoittimet[e.pointerId] = { x: e.clientX, y: e.clientY };
      try { svg.setPointerCapture(e.pointerId); } catch (err) {}
      veto = { cx: tila.cx, cy: tila.cy, k: tila.k, x: e.clientX, y: e.clientY, d: null, yli: 0, kosketus: e.pointerType === "touch" };
      var ids = Object.keys(osoittimet);
      if (ids.length === 2) { var a = osoittimet[ids[0]], b = osoittimet[ids[1]]; veto.d = Math.hypot(a.x - b.x, a.y - b.y); }
      if (veto.kosketus && ids.length === 1) vieritin = etsiVieritin();
    });
    svg.addEventListener("pointermove", function (e) {
      if (!osoittimet[e.pointerId] || !veto) return;
      osoittimet[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(osoittimet), r = svg.getBoundingClientRect();
      if (!r.width) return;
      if (ids.length === 2 && veto.d) {
        var a = osoittimet[ids[0]], b = osoittimet[ids[1]];
        tila.k = veto.k * Math.hypot(a.x - b.x, a.y - b.y) / veto.d;
        vapaaAlue(); asetaVB();
        return;
      }
      if (ids.length !== 1) return;
      var s = 560 / veto.k / r.width, haluttuCy = veto.cy - (e.clientY - veto.y) * s;
      tila.cx = veto.cx - (e.clientX - veto.x) * s;
      tila.cy = haluttuCy;
      if (Math.abs(e.clientX - veto.x) + Math.abs(e.clientY - veto.y) > 4 && tila.k > 1.01) vapaaAlue();
      asetaVB();
      /* Kun kartta on reunassa, loppuosa sormen liikkeestä vierittää valikkoa: käyttäjä ei jää jumiin kartan päälle. */
      if (veto.kosketus && vieritin) {
        var yli = (haluttuCy - tila.cy) / s;
        if (yli !== veto.yli) { vieritin.scrollTop += yli - veto.yli; veto.yli = yli; }
      }
    });
    function lopeta(e) { delete osoittimet[e.pointerId]; veto = null; vieritin = null; }
    svg.addEventListener("pointerup", lopeta); svg.addEventListener("pointercancel", lopeta);
    /* Hiiren rulla: vain Ctrl/⌘ + rulla (ja kosketuslevyn nipistys) lähentää. Pelkkä rulla vierittää valikkoa. */
    svg.addEventListener("wheel", function (e) {
      if (!e.ctrlKey && !e.metaKey) {
        rullaVihje.hidden = false;
        clearTimeout(rullaAjastin);
        rullaAjastin = setTimeout(function () { rullaVihje.hidden = true; }, 1600);
        return;
      }
      e.preventDefault();
      cancelAnimationFrame(raf);
      var dy = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
      var p = svgPiste(e), kerroin = Math.max(0.5, Math.min(2, Math.pow(1.25, -dy / 100)));
      var uusiK = Math.max(1, Math.min(12, tila.k * kerroin));
      tila.cx = p.x + (tila.cx - p.x) * tila.k / uusiK; tila.cy = p.y + (tila.cy - p.y) * tila.k / uusiK;
      tila.k = uusiK; vapaaAlue(); asetaVB();
    }, { passive: false });
    function alueelle(id) {
      root.querySelectorAll("[data-kalue]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.kalue === id)); });
      var r = S.alueetKartalla.filter(function (x) { return x.id === id; })[0];
      if (!r || !r.raja) { siirry(1, 280, 500); return; }
      var a = proj(r.raja[0][0], r.raja[0][1]), b = proj(r.raja[1][0], r.raja[1][1]);
      var k = Math.min(12, 0.9 / Math.max(Math.abs(b[0] - a[0]) / 560, Math.abs(b[1] - a[1]) / 1000));
      siirry(k, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
    }

    /* --- Pisteet --- */
    function piirraPisteet() {
      var sk = Math.sqrt(tila.k), leveys = svg.getBoundingClientRect().width || 320;
      var pxYksikko = leveys / (560 / tila.k);           // näyttöpikseliä per kartan yksikkö
      var lista = nakyvat().slice().sort(function (a, b) { return (b.mw || 0) - (a.mw || 0); });
      lista.sort(function (a, b) { return (a.id === tila.valittu) - (b.id === tila.valittu); });
      var osumat = "", pisteet = "";
      lista.forEach(function (p) {
        var v = VAIHEET[p.vaihe].vari, r = sade(p) / sk, valittu = p.id === tila.valittu;
        var x = p.x + p.ox / sk, y = p.y + p.oy / sk;
        /* Näkymätön osuma-alue (halkaisija vähintään noin 22 px) pallojen alla: pienetkin hankkeet voi napauttaa. */
        osumat += '<circle class="osuma" data-id="' + p.id + '" cx="' + x + '" cy="' + y + '" r="' + Math.max(r, 11 / pxYksikko) + '"/>';
        var ympyra = p.mw == null
          ? '<circle r="' + r + '" fill="var(--card)" stroke="' + v + '" stroke-width="' + (valittu ? 2.6 : 1.5) / sk + '" stroke-dasharray="' + 3 / sk + " " + 2 / sk + '"/><circle r="' + 1.6 / sk + '" fill="' + v + '"/>'
          : '<circle r="' + r + '" fill="' + v + '" fill-opacity="0.5" stroke="' + v + '" stroke-width="' + (valittu ? 2.6 : 1.3) / sk + '"/>';
        var kehys = valittu ? '<circle r="' + (r + 3 / sk) + '" fill="none" stroke="var(--ink)" stroke-width="' + 1.6 / sk + '"/>' : "";
        pisteet += '<g class="piste" tabindex="0" role="button" data-id="' + p.id + '" transform="translate(' + x + "," + y + ')" aria-label="' + esc(p.nimi + ", " + p.kunta + ", " + VAIHEET[p.vaihe].nimi + ", " + mwTeksti(p)) + '"' + (valittu ? ' aria-pressed="true"' : "") + ">" + ympyra + kehys + "</g>";
      });
      $("osumat").innerHTML = osumat;
      $("pisteet").innerHTML = pisteet;
    }
    function naytaVihje(el) {
      var p = hanke(el.dataset.id); if (!p) return;
      var kohde = root.querySelector('.piste[data-id="' + p.id + '"]') || el;
      var r = kohde.getBoundingClientRect(), host = alue.getBoundingClientRect();
      vihje.textContent = p.nimi + " · " + mwTeksti(p);
      var x = r.left + r.width / 2 - host.left;
      vihje.style.left = Math.max(60, Math.min(host.width - 60, x)) + "px"; vihje.style.top = Math.max(34, r.top - host.top) + "px"; vihje.hidden = false;
    }
    svg.addEventListener("pointerover", function (e) { var el = osuu(e.target); if (el) naytaVihje(el); });
    svg.addEventListener("pointerout", function (e) { if (osuu(e.target)) vihje.hidden = true; });
    svg.addEventListener("focusin", function (e) { var el = e.target.closest(".piste"); if (el) naytaVihje(el); });
    svg.addEventListener("focusout", function () { vihje.hidden = true; });
    svg.addEventListener("keydown", function (e) { var el = e.target.closest(".piste"); if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); valitse(el.dataset.id, false); } });

    /* --- Suodattimet, luvut, paneeli, taulukko --- */
    function piirraSuodattimet() {
      var m = {}; P.forEach(function (p) { if (!tila.vainLampo || p.lampo) m[p.vaihe] = (m[p.vaihe] || 0) + 1; });
      $("suodattimet").innerHTML = JARJ.map(function (v) {
        return '<button type="button" class="nappi vaiheNappi" id="vaihe-' + v + '" data-vaihe="' + v + '" aria-pressed="' + tila.vaiheet[v] + '" style="--v:' + VAIHEET[v].vari + '"><span class="pallo" aria-hidden="true"></span>' + esc(VAIHEET[v].nimi) + ' <span class="maara">' + (m[v] || 0) + "</span></button>";
      }).join("");
    }
    function piirraLuvut() {
      var v = nakyvat(), tunnetut = v.filter(function (p) { return p.mw != null; });
      var summa = tunnetut.reduce(function (s, p) { return s + p.mw; }, 0);
      $("luvut").innerHTML =
        '<div class="luku"><span class="arvo">' + v.length + '</span><span class="selite">hanketta näkyvissä, joista ' + (v.length - tunnetut.length) + " ilman julkistettua tehoa</span></div>" +
        '<div class="luku"><span class="arvo">' + (summa >= 1000 ? fmt(summa / 1000, 1) + " GW" : fmt(summa) + " MW") + '</span><span class="selite">ilmoitettua tehoa ' + tunnetut.length + " hankkeelta</span></div>";
      $("vertailu").innerHTML = esc(S.vertailuTeksti) + A.viite("fingrid-18-5");
    }
    function piirraPaneeli() {
      var el = $("paneeli"), p = hanke(tila.valittu);
      if (!p) {
        var lista = nakyvat().slice().sort(function (a, b) { return (b.mw == null ? -1 : b.mw) - (a.mw == null ? -1 : a.mw); });
        el.innerHTML = '<h2 id="paneeli-otsikko" tabindex="-1">Hankkeet</h2>' +
          '<div class="selitteet"><div class="selite1"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="var(--kartta-kaytossa)" fill-opacity=".5" stroke="var(--kartta-kaytossa)"/></svg><span>Teho julkistettu: isompi pallo, enemmän megawatteja</span></div>' +
          '<div class="selite1"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7" fill="var(--card)" stroke="var(--kartta-kaytossa)" stroke-width="1.5" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="1.6" fill="var(--kartta-kaytossa)"/></svg><span>Tehoa ei ole julkistettu, joten koko ei kerro mitään</span></div></div>' +
          (lista.length ? '<ul class="hankelista" aria-label="Näkyvät hankkeet tehon mukaan">' + lista.map(function (x) {
            return '<li><button type="button" data-valitse="' + x.id + '" style="--v:' + VAIHEET[x.vaihe].vari + '"><span class="pallo" aria-hidden="true"></span><span class="nimi">' + esc(x.nimi) + ' <small>' + esc(x.kunta) + '</small></span><span class="mw">' + (x.mw == null ? "–" : fmt(x.mw, x.mw % 1 ? 1 : 0) + " MW") + "</span></button></li>";
          }).join("") + "</ul>" : '<p class="pieni">Ei hankkeita tällä rajauksella. Valitse lisää vaiheita kartan yläpuolelta.</p>');
        return;
      }
      el.innerHTML =
        '<button type="button" class="nappi pieniNappi" id="kaikki-hankkeet">Kaikki hankkeet</button>' +
        '<span class="vaiheMerkki" style="--v:' + VAIHEET[p.vaihe].vari + '"><span class="pallo" aria-hidden="true"></span>' + esc(VAIHEET[p.vaihe].nimi) + "</span>" +
        '<h2 id="hanke-otsikko" tabindex="-1">' + esc(p.nimi) + "</h2>" +
        '<p class="pieni">' + esc(p.toimija) + " · " + esc(p.kunta) + "</p>" +
        '<dl class="tiedot">' +
          "<dt>Teho</dt><dd><strong>" + esc(mwTeksti(p)) + "</strong>" + (p.mw1 ? "<br>1. vaihe " + fmt(p.mw1) + " MW" : "") + (p.mwHuomio ? '<br><span class="pieni">' + esc(p.mwHuomio) + "</span>" : "") + "</dd>" +
          (p.mw != null ? "<dt>Vuodessa</dt><dd>" + vuosiTeksti(p.mw) + ", jos käyttöaste on 50–90 %</dd>" : "") +
          "<dt>Tilanne</dt><dd>" + esc(p.tilanne) + "</dd>" +
          "<dt>Hukkalämpö</dt><dd>" + (p.lampo ? esc(p.lampo) : "Ei julkaistua suunnitelmaa") + "</dd>" +
          (p.jaahdytys ? "<dt>Jäähdytys</dt><dd>" + esc(p.jaahdytys) + "</dd>" : "") +
        "</dl>" +
        '<p class="pieni">Lähteet: ' + A.viite(p.lahteet) + "</p>" +
        (p.moduulit && p.moduulit.length ? '<div class="napit">' + p.moduulit.map(function (m) { var mm = S.moduulit[m]; return mm ? '<a class="nappi linkkiNappi" href="' + esc(mm.url) + '" target="_blank" rel="noopener">' + esc(mm.nimi) + "</a>" : ""; }).join("") + "</div>" : "");
    }
    function piirraTaulukko() {
      var nak = {}; nakyvat().forEach(function (p) { nak[p.id] = true; });
      var rivit = P.slice().sort(function (a, b) { return JARJ.indexOf(a.vaihe) - JARJ.indexOf(b.vaihe) || (b.mw == null ? -1 : b.mw) - (a.mw == null ? -1 : a.mw); });
      $("taulukko").innerHTML = rivit.map(function (p) {
        return '<tr class="' + (nak[p.id] ? "" : "himmea") + '"><td><button type="button" class="taulukkoNappi" data-valitse="' + p.id + '">' + esc(p.nimi) + '</button><br><span class="pieni">' + esc(p.toimija) + "</span></td><td>" + esc(p.kunta) + '</td><td><span class="vaiheMerkki" style="--v:' + VAIHEET[p.vaihe].vari + '"><span class="pallo" aria-hidden="true"></span>' + esc(VAIHEET[p.vaihe].nimi) + '</span></td><td class="num">' + (p.mw == null ? "–" : fmt(p.mw, p.mw % 1 ? 1 : 0)) + "</td><td>" + (p.lampo ? esc(p.lampo) : "–") + "</td></tr>";
      }).join("");
    }
    function kaikki() { piirraSuodattimet(); piirraLuvut(); piirraPaneeli(); piirraTaulukko(); piirraPisteet(); }
    function valitse(id, kohdista) {
      tila.valittu = id;
      var p = hanke(id);
      if (p && kohdista) { vapaaAlue(); siirry(Math.max(tila.k, 3.5), p.x, p.y); }
      piirraPaneeli(); piirraPisteet();
      if (p) { ilmoita("Valittu: " + p.nimi); $("hanke-otsikko").focus(); }
    }
    function suodatusMuuttui() {
      if (tila.valittu && !nakyvat().some(function (p) { return p.id === tila.valittu; })) tila.valittu = null;
      kaikki();
      ilmoita(nakyvat().length + " hanketta näkyvissä");
    }
    /* Kaikki klikit rajataan moduulin juureen (ei document-tason kuuntelijaa). */
    root.addEventListener("click", function (e) {
      var b, t = e.target;
      if (!t.closest) return;
      if ((b = t.closest("[data-vaihe]"))) {
        var v = b.dataset.vaihe, paalla = JARJ.filter(function (x) { return tila.vaiheet[x]; }).length;
        if (tila.vaiheet[v] && paalla === 1) { ilmoita("Vähintään yksi vaihe pitää olla valittuna."); return; }
        tila.vaiheet[v] = !tila.vaiheet[v];
        suodatusMuuttui(); $("vaihe-" + v).focus(); return;
      }
      if ((b = t.closest("[data-kalue]"))) { alueelle(b.dataset.kalue); return; }
      if (t.closest("#kaikki-hankkeet")) { tila.valittu = null; piirraPaneeli(); piirraPisteet(); ilmoita("Kaikki hankkeet"); $("paneeli-otsikko").focus(); return; }
      if ((b = t.closest("[data-valitse]"))) { valitse(b.dataset.valitse, true); return; }
      if ((b = osuu(t))) { valitse(b.dataset.id, false); return; }
      if (t.closest("#lahenna")) { vapaaAlue(); siirry(Math.min(12, tila.k * 1.6), tila.cx, tila.cy); return; }
      if (t.closest("#loitonna")) { vapaaAlue(); siirry(Math.max(1, tila.k / 1.6), tila.cx, tila.cy); }
    });
    $("vainLampo").addEventListener("change", function (e) { tila.vainLampo = e.target.checked; suodatusMuuttui(); });
    kaikki();
    /* Pisteiden osuma-alueet riippuvat kartan leveydestä: piirretään uudelleen, kun leveys on tiedossa. */
    raf = requestAnimationFrame(function () { raf = 0; piirraPisteet(); });

    return function () { cancelAnimationFrame(raf); clearTimeout(rullaAjastin); };
  }

  /* Karttapohja (83 kt): valmiiksi projisoidut SVG-polut, viewBox 0 0 560 1000. */
  var KARTTA_GEO = {"scale":5328.498688959191,"translate":[271.38918068163923,6541.853412094452],"fin":"M369.7,119.9L365.9,124.2L361.9,125.8L353.6,132.6L352.1,132.8L352.2,134.5L352.8,135.3L353.4,135.7L360.1,135L362.8,135.3L365.4,138L364,145.2L363,148.2L355.1,165.8L354.7,166.9L354.7,168.4L355.3,170.5L356.1,173.2L363.4,196.9L364.4,198.8L365.6,199.6L375.8,203.4L385.9,207.2L387,208L388.1,209.4L391.3,215.3L392.9,218.1L399.5,230.5L401.8,233.3L412.8,242.5L412.2,243.8L412,244.8L411.8,245.9L411.9,252L411.9,253.1L411.1,257.4L410.6,259.2L397.6,279.5L397.3,280.5L397,282.2L396.8,282.8L396.5,283.5L394.7,285.8L384.1,308.8L382.6,316.8L384.4,323.1L393.6,337.3L395.4,342.2L395.5,342.4L396.6,344.2L396.8,345L396.8,345.9L397,346.9L397.5,347.6L402.1,354.4L402.5,356L403.2,359.9L403.5,361.8L404.3,364.9L405.4,367.8L407.9,373.2L413.7,382.7L417.1,386.9L418.2,389.2L419.3,392.9L420.8,399.9L421.2,401.6L422.9,405.4L423.4,406.8L424.9,411.5L426.6,415.3L427,417L428.6,425.5L428.9,427.7L428.9,429.8L428.4,430.8L427.1,430.4L424.7,428.9L415.6,432.3L413.4,434.2L414.6,436L417.6,438L419,439.8L418.5,441.1L415.7,445.1L415.2,446.4L415.1,446.8L414.9,450.3L416,458.6L415.7,461.9L412,467.8L410.8,471L412.7,472.8L418.2,472.3L420.8,473.3L421.3,476.9L420.9,477.5L420.5,478.2L420.3,478.8L420.2,479.8L420.8,480.5L421.5,480.6L421.9,480.9L421.9,482.2L421,483.6L415,485.4L413.5,487.1L412.5,489.6L412.3,493.6L414.6,501.3L417.6,507.6L421.1,511.3L425,512.2L432.2,511.7L433.9,512.4L434.6,513.2L434.7,513.8L434.6,514.4L434.5,515.4L434.4,516.5L434.3,517.1L434.5,517.6L435,518.6L435.5,519.2L437.1,521L438,522.7L437.8,524.6L437.1,526.2L436.3,527.2L429.6,531.1L429.3,531.4L429.2,532.1L429.4,532.2L429.7,532.4L429.8,532.5L429.9,534.2L430.1,535L430.5,535.9L430.5,536.1L430.5,536.4L430.5,536.7L430.5,536.9L431,537.2L431.1,537.3L431,538L433,539.1L434.4,540.7L434.2,542.9L433.5,545.3L433.4,547.9L434.2,549.6L436.1,551L438.9,552.6L445.4,554.3L447.6,555.8L448.9,557.4L449.9,559.1L451,560.2L453.3,560.7L454.7,561.6L455.7,562.7L455.5,564.8L454.9,566.6L455,568.1L455.6,569.7L456.4,571.4L457.7,575.2L457.7,578.4L456.7,581.3L455.1,584.2L448.4,593.5L446.3,599.8L443.9,603.4L437.9,606.6L435.7,608.2L435,608.9L436.1,611.2L446.8,622.9L452.8,627.1L455.6,630.8L456.6,632.5L457.7,633.3L472.2,640.3L479.3,648L488.1,653.1L489.3,654.3L490.3,655.8L490.8,657.6L491.1,659.3L491.4,661.2L492,663L492.7,664.4L493.9,665.9L496.6,667.7L498,668.8L501,673L502.2,673.9L502.7,674.3L503.9,675.9L504.7,678.1L505.5,680.2L507.1,681.5L504,689.2L502.6,692.7L501.7,696.8L500.3,705.7L499.8,707.8L498.2,711.1L497.5,713.4L496.9,717.8L496.3,719.9L495.5,721.1L493.3,722.7L492.7,723.5L492.4,724.7L491.7,726.8L486.1,734.3L485.6,735.3L484.7,738.5L484.2,739.6L483.5,740.6L478.8,744.6L475.2,748.8L473.7,750L473,750.7L472.4,751.5L471.4,754.6L466.4,762.8L460.8,770.3L453.2,784L446.6,795.8L441,802.4L440.1,804L439.3,807.2L438.5,808.9L432.5,816.9L431.3,818.1L428.5,819.5L427.6,820.5L426.9,821.9L426.2,824.3L425.5,826.3L419.3,833.7L418.1,835.8L417.7,836.9L417.1,838.2L414.6,842.5L411.5,845.7L405.1,850.2L402.8,852.2L399.7,855.7L397.2,857.2L396.4,858.2L395.2,860.6L392.6,863.8L391.7,865.3L391.1,867.2L389.4,870.1L385.4,871.3L383.5,873L377.2,880.1L373.2,886.6L368.9,889.8L362.6,898.7L361.7,900.1L357.7,904.5L354.1,909.3L353.2,908.5L352.5,907.5L351.9,906.8L350.9,907.3L351.1,907.7L351.4,908.4L351.6,908.7L350.8,909.1L350.6,910.2L351,911.4L351.7,912.5L350.9,913L350.7,913.2L351.4,913.8L351.7,913.8L350.1,915.4L349.5,915.7L346.3,915.2L346.8,914.1L348.1,913.4L348.9,912.6L346.9,912.3L346.1,912.5L345.4,913.3L345,914.4L345.2,915.2L345.5,916L346,917.1L344.4,916.6L340.5,913.3L338.9,914.1L339.2,914.2L339.5,914.4L339.7,915.3L339.6,915.6L339.1,916.3L338.9,916.6L339.4,916.9L339.8,917.4L340.3,917.8L340.4,918.6L338.1,918L334.1,915L332.1,914.2L328.6,914.1L327.8,913.7L327.8,912.4L328.9,912.1L331.2,912.4L330.2,911.4L326.7,909.3L327.5,907.4L326.9,906.9L325.9,907.4L325.2,908.5L325.4,910L326.1,911.4L326.3,912.8L325.3,913.7L325.1,912.5L325,912.2L324,912.5L323.5,912.2L322.8,910.9L322.3,910.6L322,911L321.5,912.2L321.2,912.5L320.7,912.2L320,911L319.7,910.7L319.2,910.7L318.7,911.2L318.2,911.6L318.2,912.3L318.4,913.2L318.1,913.7L317.8,914.2L317.1,916.1L316.1,916.5L314,916.4L315.2,918L315.7,918.9L315.5,920L315.2,919.7L313.7,918.2L313.4,917.4L309.1,919L307.8,919.2L308.1,918.5L308.4,917.9L308.7,916.5L307.9,916.5L306.9,916.8L306.1,917.3L305.4,918.1L305.3,918.9L305.3,920.5L305.3,921.1L305,921.4L304,922L303.5,922.7L303,922.8L302.2,921.9L301.2,920.7L300.5,919.9L299.7,919.6L298.7,919.7L297.9,920.2L297.7,921.2L296.7,921.5L295.6,920.9L294.4,919.6L293.6,918.2L293.2,916.5L293.9,915.4L295,914.7L296,913.8L297.1,911.3L297.3,910.6L297.1,908.4L297.3,907.7L297.9,906.7L299.9,905L301.8,905.3L305.8,908.2L304.8,904.8L303.3,902.1L301.5,901L299.5,902L298.4,903.3L296.6,906.7L292.7,914.6L292.2,917.6L293.7,920.6L292.9,922L292.6,922.6L292.1,923.1L290.8,923.1L290.5,923.6L290.8,925L290.3,924.8L289.8,924.4L289,923.1L289,924.2L289,924.7L288.6,925L288,925L287.5,925.3L287.5,925.9L287.3,926.6L287.2,926.9L286.3,926.3L285.7,924.7L285.2,923.1L284.7,922.5L284.2,921.9L283.5,920.8L282.7,919.8L282,920L281.9,921.1L282.5,922.4L284,924.4L279.5,923.6L279.2,923.8L278.4,924.7L277.9,925L277.6,924.4L275.7,922.5L274.3,921.6L273.6,921.1L271.9,918.9L270.5,917.7L269,916.9L267.7,916.7L267.7,917.3L270.1,918.6L270.6,919.2L271.6,921L272.8,921.6L273.1,922.4L273.3,923.3L273.3,924.1L272.9,924.6L272.1,924.6L271.8,924.6L271.9,925.7L272.4,926.5L274.1,927.6L275.1,929.3L275.4,929.9L276.1,930.1L276.4,930.7L276.3,931.8L275.9,932.9L275.6,933.4L273.3,934L273.1,931.8L271.3,928.8L271.6,927.6L271.1,927.7L270.6,928L270.3,928.7L270,928.8L269.5,928.8L269,928.5L266.3,925.7L265.3,924.9L264.2,924.4L265.8,926.8L266.8,927.7L267.6,928.3L267.1,930.2L266.1,932.1L266,933.4L266.5,934.8L267.8,937.1L268.1,939L267.1,939L266.5,938.7L266,938.1L265.3,937.1L265.6,936.5L265,935.4L264.1,935.1L263.2,934.9L262.2,934.6L260.8,932.6L260,932.1L259.3,932.7L259.7,934.3L261.3,935.5L264.5,937.1L261.3,938.5L261.3,939L260.5,939.5L259.2,938.8L255.5,934.6L255.2,934L255.4,932.7L255.7,931.8L256.2,931.4L255.2,930.8L255.2,930L257.9,930L257.2,928.2L256.2,928L255.1,928.6L254.4,929.6L253.1,930.3L249.6,931.4L249.6,931.9L250.2,932.4L250.6,933.3L250.4,934.6L250.2,935.8L250,936.1L249.7,936.3L249.4,936.6L249,938.2L248.9,938.6L248.5,938.9L241.9,938.9L242.1,937.5L241.4,936.8L239.7,936.3L239.9,936.8L240.1,937.9L240,938.4L238.7,938.8L234.4,938.8L234.1,938.9L234.1,939.3L234,940.4L234,940.5L233.7,940.8L233.2,940.7L232.4,940L232.4,940.8L234,941.9L234.7,942.6L234.2,943L233.5,943L234.3,944L233.3,944.6L230.5,945.2L229.5,945.2L229.7,944.5L229.7,944.2L229.8,943.9L227.8,945L227.3,945.8L228.3,946.4L228,947L227.1,947L226.5,947.8L225.6,947.5L225,946.4L225.6,945.7L226.2,944.3L226.4,942.9L226,941.8L225.2,941.7L224.5,942.9L223.3,947.4L222.8,948.1L218.9,948.3L217.9,948L217.5,946.9L219.1,946.4L219,944.7L217.9,943.3L216.2,943.7L217.1,946.2L216.5,946.7L215.1,947.8L214.6,948.1L212.1,948.3L210.6,948.9L210.3,949.1L209.9,949.6L209.9,950.2L210,951.4L209.7,951.9L209,951.9L208.9,951.1L208.7,950L208.6,949.2L207.9,948.6L205.1,946.8L204.5,946.6L204.3,946.9L204.8,947.9L205.4,948.5L206.1,948.8L206.4,949.3L205.9,950.4L205.4,951.2L204.7,951.5L204,951.8L203.7,953L206.9,951.8L206.7,952.6L206.2,953.2L205.3,954.3L206.1,955L206.1,955.6L202.9,957.9L201.2,960.5L200.1,961.4L199.1,961.7L197.8,961.9L198.1,960.4L199.6,957.5L200.1,956.7L199.2,956.5L198,957.6L195.8,960.5L195.5,958.8L194.7,959.4L193.8,960.5L192.9,961.1L193.3,959.5L193.8,958.9L194.5,958.5L195,957.5L195.2,956.9L195.2,956.1L195.3,955.2L195.6,954.1L193.5,953.9L192.3,954.2L191.4,955.3L192.1,955.9L190.7,957L190.2,957.1L189.5,957.1L188,956.4L186.7,956.2L185.9,956.7L185.8,957.5L187,958.3L186.1,958.9L185.3,958.5L184.6,958.1L183.8,957.6L183.5,957.7L181.6,958.6L181.1,958.6L180.6,958.1L179.7,959.6L178.9,959.5L178.6,958.5L179.3,957.4L179.3,956.8L178.5,956.9L178,957.5L177.6,958.3L177.1,959.2L176.4,960L175.7,960.5L172.5,961L168.9,964.2L167.7,963L160,963.9L159.3,963.4L158.9,962.2L158.6,961.9L157.9,961.9L154.8,962.6L152.8,963.6L151.8,963.6L152.3,962.2L154.5,958.6L155.2,957.9L156.5,957.4L157.2,957L157.3,956.4L157,955.6L157,954.8L157.2,953.9L157.6,952.9L155.9,953.5L155.3,953.8L155,954.6L154.6,955.5L154.2,956.3L153.6,956.5L153,957L152.8,957.9L152.6,959L152.3,960.1L151.9,960.6L150.9,961.3L150.3,961.9L148.7,964.5L146.8,966.5L142.5,968.7L141.8,969.8L141.7,971.5L142.2,972.9L143,973.3L143,974L135,975L134.3,975.6L131.5,974.8L130.4,975.1L129.6,975.5L126.7,976L125.9,975.8L126.7,975.2L128,973.2L128.7,972.6L130.7,972.4L137.4,969.6L139.3,969.3L139,967.4L139.2,966.7L139.9,966.7L140.4,966.9L141.9,966.9L143.1,966.3L144.2,965.1L145.4,963.1L146.2,961.3L147.1,958.5L147.5,956.6L146.7,957.2L143.4,964L142,965.7L141.1,965.6L141.1,965.3L141.3,964.7L141.5,964.4L141,963.9L140.5,963.7L140,963.9L139.5,964.3L139.6,964.9L137.8,964.2L137.3,965.2L137.1,966.1L136.7,966.1L136.4,965.4L136.3,964.5L136.9,961.7L136.9,961.4L137.8,960.5L141.4,959.4L142.1,958.4L143.2,956.1L144.1,955.5L141.6,954.5L137,955.2L134.9,955.1L133.7,954.6L132.8,953.9L132,953L131.9,951.5L132.2,950.3L133,949.2L134.6,947.4L133.6,946.1L133.4,946.7L132.8,948.3L132.7,948.8L132.1,949L131.3,949.5L130.9,949.9L131,948.4L130.6,947.2L129.7,946.7L128.3,946.2L127.3,945L126.8,944.6L127.2,943.6L127.4,942.7L127.1,941.9L126.5,941.4L129.4,937.1L130.2,935.7L133.4,932.9L134.3,931.5L134.6,930.6L135,929L135.4,928.4L136.6,927.4L137.1,926.8L137.2,925.8L136.2,925.6L135,926.8L133.7,928.7L133.2,930.2L130.6,929.2L127.5,930.4L120.8,935.9L114.9,937.4L112.1,938.6L110.8,938.6L111.5,937.8L114.1,936.2L113.3,935.9L113.1,935.2L114.2,933.4L114.7,932.9L117,932L114.6,932.2L113.4,932.6L111.2,934.2L110,934.6L107.5,934.6L108,934L108.1,933.4L108.1,932.9L108.3,932.1L108.7,931.7L109.5,931.1L110.6,929.6L112.2,928.1L112.4,926.7L114.9,924L116.4,923L116.7,921.7L116.4,920.8L114.3,922.9L112.6,923.1L108.8,922.6L109.9,920.1L102.6,921.6L101.1,921.5L100.4,921.2L99.2,919.4L96.2,916.8L95.2,916.3L93.3,916L93,915.2L93.1,914.1L92.8,913.6L91.9,915L90.8,915.9L90.2,915.7L88.9,913.9L88.8,913.6L89,912.8L89,912.5L88.7,912.4L88.2,912.6L88,912.4L87.7,912.1L87.4,911.9L87.3,911.6L87.5,910.5L85.3,910.3L85.6,909.7L85.8,908.5L86.2,907.9L85.4,907.4L84.1,906.8L82.8,906.7L81.8,907L81.2,907.9L81.3,909L82.5,911.4L80.4,910.7L79.4,910.6L78.4,911.2L78.6,909.6L79.5,906.8L79.7,905L79.7,903.5L79.9,902.3L80.5,901.4L81.8,901.2L81.2,900.3L81.1,899.4L81.3,898.4L81.7,897.4L78.6,899.5L77.5,900.6L76.5,901.4L74,901.8L73.3,902.5L73.1,903.3L73.5,904.7L73.1,905.5L72.9,905.9L72.7,906.4L72.7,907L72.6,908L71.9,909.2L70.5,909.7L69,909.8L68.1,909.2L69.3,908.1L68.8,906.1L66.7,902.1L67.4,902.1L69.5,903L69.5,902.2L68.4,901.8L65.3,901.3L63.8,901.8L63.3,901.8L62.8,901.6L62.2,900.8L61.7,900.6L61.8,899.8L62.1,899.8L62.3,899.7L62.8,899.4L62.2,898L63.5,898.7L64.3,898.7L64.7,898.1L62.7,896.1L61.7,895.6L60.8,894.2L60.3,892.8L59.9,891.5L59.9,891L60.1,890.9L60.1,890.7L60,890.2L63.2,891.4L63.8,891.5L64.2,890.2L64,889.3L63.7,888.3L63.3,887.2L65.4,887.3L65.5,886.7L64.5,886.6L63.6,886.1L62.8,885.4L61.9,884.5L62.7,884L63,884L63.5,884L62.7,882.5L62,882L61.5,882L62,880.8L61.7,879.3L61.1,878.5L60.5,878.8L60.2,878.4L59.9,877.9L59.7,877.3L59.6,876.7L60.2,875.8L59.5,873.8L60.2,873.6L62.4,874.2L63.6,874.1L64.6,873.2L64.2,872.7L63.7,872.5L62.5,872.5L62.2,872.3L61.4,870.5L61.9,870.4L62.8,869.5L63.1,869.3L63.6,869.5L63.8,870.2L64.1,870.7L64.8,870.7L64.5,869.8L64.4,868.7L64.2,867.8L63.9,867.4L63.4,867.2L63.3,866.8L63.1,866.2L62.9,865.4L61.2,861L60.5,860.2L61.2,859.1L61.6,858.8L60.3,857.8L60.1,857L60,855.7L61,855.8L62.8,857.4L63.7,857.7L64.7,857.6L64.8,857.2L64.8,856.9L64,856.2L63.1,856L64.4,855.1L66.9,856.7L68.2,856.3L67.6,855.6L67.1,854.5L67,853.2L67.5,852.3L67.2,850.1L67.1,849.1L66.7,848.5L67,848.5L68.2,848L67.8,847.9L67.5,847.8L67.4,847.6L67.1,847.3L67.8,846L67.2,846L67.7,845.4L68.5,845.3L70,845.4L69.7,844.4L69.7,844.1L71.1,843.4L72.5,843.1L72,841.1L71.1,840.1L69.1,839L69.7,838.1L70.2,837.7L70.7,837.1L70.6,836L72.4,836.1L72.4,835.3L72.3,834.9L72.6,833.1L72.6,832.2L72.5,831.7L72.2,831.4L72.1,830.9L72.1,830.4L72.2,829.5L72.2,829L72,827.1L71.9,826.5L71.3,825.8L70.7,825.3L69.5,824.7L68.8,824.4L70.3,823.7L73,824L74.5,823.5L74,822.1L73.3,820.9L72.1,819.4L69.1,817.6L68.3,816.6L74.1,818L75.8,817.1L75,814.4L74.9,813.9L74.2,813.6L72.9,814L72.5,813.8L70.7,811L70.5,810L70.5,809.5L70.7,809.4L71.5,809.1L72.6,809L77.6,811.6L80.3,813.8L81.5,814.4L81.6,813.6L78.8,810.3L77.3,808L76.7,803.8L75.9,803.1L75,802.6L74.4,801.6L74.5,801L74.9,799.6L74.8,798.8L74,796.5L74,795.9L74.8,796.3L76.1,797.6L76.9,797.4L75.8,795.9L72.9,793.5L72.1,791.2L72.3,790.1L72.9,788.9L73.3,787.7L73.2,786.6L72.6,785.9L71.9,785.7L71.4,785L71.7,783.6L70.6,781.5L70,780.2L69.6,779.1L70.1,778.6L70.5,778L70.7,777.4L69.8,776.7L69.7,776.1L69.6,775.1L69.3,774.5L69,774.3L67,774.3L66.7,774.1L66.5,774.1L65.5,773.1L65,772.9L65.9,771.1L65.4,770.2L63.4,769.6L65.7,763.7L66.2,761.5L66.6,757.1L67,756.3L67.7,758.3L68.5,755.7L68.7,754.4L68.5,753.3L69.2,752.2L70.7,751.4L71.2,750.7L71.6,749.4L71.3,748.5L70.2,747.1L71.4,743.9L70.4,743.8L69.7,744.9L69.2,746.1L68.5,747L68.7,745.4L69.4,742.8L69.7,741.3L70,736.9L70.4,735.5L68,736.4L67.4,735.9L67.2,734.9L67.1,733.8L67.3,732.6L68,731.5L67.8,730.2L64.7,734.7L64.5,735.7L65,737.1L64.1,736.7L63.9,735.3L64.3,733.5L64.7,731.9L64.4,731.7L64.2,731.4L63.9,731.2L64.3,730.1L64.6,729.7L64.9,729.4L64.2,728.7L63.4,729L62.6,729.5L61.9,730.4L61.8,729.2L62.8,726.4L63.3,724.9L62.4,725.4L61.8,725.7L61.5,725.2L61.5,723.5L61.8,721.8L62.2,720.5L62.9,719.6L63.7,719.1L63.4,718.3L62.6,716.5L63.6,715.8L64.5,714.6L65.5,713.8L66.4,714.1L65.9,712.3L62.9,711.3L62.2,710L61.7,710.2L61.2,710.8L60.3,712.3L60.6,710.2L61.5,706.6L61.5,704.7L62.3,704.6L63.6,703.8L64.6,702.6L65.2,701.2L65.3,700.3L65.1,700.1L64.8,700.1L64.5,699.9L63.8,698.9L63.6,698.3L63.4,696.7L63.6,695.3L64.5,694.5L65.4,694.3L66.1,695.1L66.7,695.5L66.9,694.7L67.1,694.4L67.9,693.2L68.3,692.5L68.6,691.1L68.8,689.7L69.1,688.6L69.7,687.5L70.8,687.6L73.6,689.1L74.5,688.8L74.9,688.4L75.7,687.5L76.1,687L76.4,686.4L76.6,685.2L77,684L77.6,682L77.8,681.3L78.2,681.2L79.6,680.7L79.2,677.3L79.2,675.6L79.3,673.6L79.2,672.8L79.2,672.5L79.4,672.3L80,671.7L80.5,671.6L80.8,672.1L80.9,672.1L81.2,670.7L81.7,669.5L82.9,670.4L84.5,672.7L85.7,673.2L87,674.4L88.2,675L89.6,674.3L88,671.5L85.4,668.6L84.6,667.5L84.4,666.4L85.4,665L84.8,665.3L84.1,665.4L83.7,665.2L83.1,664.5L83.1,663.4L83.3,662.5L83.2,661.9L82.7,661.7L83.1,660.6L83.6,660.3L84.8,660.4L84.8,659.8L83.2,659L82.8,658.4L82.8,656.8L83.1,656L83.9,655.3L84.9,654.9L85.5,654.8L87.7,657.6L89,658.3L89.9,656.3L90.8,657.2L91.8,658L93,658.4L93.9,657.9L93.3,657.4L92,656.8L91.4,656.4L91.5,655.8L93.2,654.7L93.8,654.6L95.6,654.8L96.5,654.4L98.6,653.1L99.6,653.2L99.1,654.4L99.1,655.4L99.1,659L99.1,659.8L98.6,660.7L99.6,661.1L102.7,664.3L102.4,662.2L101.8,660.3L103,659.9L103.5,659.3L104,658.5L104.2,657.6L104.4,656.8L104.6,656L104.9,655.4L105.9,654.9L106.2,655.4L106.6,656.2L107,656.8L107.6,656.9L108.7,656L109.3,655.7L109.8,655.9L110.6,656.6L111.2,656.4L111.5,656.1L111.6,655.8L111.6,655.4L111.6,655.2L111.9,655.2L112.2,655.4L112.5,655.7L112.5,655.9L114.4,653.5L115.4,651.8L116,650.3L116.3,650.3L117,652.7L118,652.1L119,650.1L120,648.8L119.7,648.1L119.4,647.5L119.1,646L118.5,645.1L117.4,643.7L115.5,640.5L115.4,640L114.6,640L114,639.6L113.6,639.1L113.2,638L113.2,635.5L114.2,634.4L115.5,634.7L116.6,636L117.7,637.9L119.1,638.5L120.2,638.7L121.7,639.7L118.5,635.6L117,633L116.8,630.6L117.3,629.4L117.8,629.1L118.8,629.3L119.5,629.9L119.5,630.8L119.3,631.7L119.2,632.7L120.1,633.2L121.1,633.4L121.8,634.2L121.6,636.6L122.2,636.1L122.8,635.2L123.5,634.8L123.5,634.2L123.3,633.2L123.3,632.4L123.6,631.7L124,630.6L124.9,627.2L125.4,626.6L125.9,626.1L126.4,625.5L126.6,624.4L126.7,624.3L128.5,625.5L128.2,624.4L126.8,621L127.4,619.8L127.9,619.3L128.2,619L128.2,618.4L128.1,618.2L128,617.7L129.7,618.3L130.5,618L130.9,616.3L131,614.6L130.9,613.7L131.2,613.7L131.9,614.2L132.4,615.3L132.9,615.6L133,615.2L133.2,614.3L133.5,613.8L134,613.7L134.4,614L135,614.8L135.5,615.8L135.6,616.9L135.4,618.1L135.8,618.9L136.4,621L136.7,621.5L137.3,621.4L138.1,621.1L138.8,620.7L139.3,620.1L139.8,619.8L140.1,619.6L140.5,619.5L140.7,618.7L140.8,618.1L140.8,617.6L141,617.2L141.1,616.7L141.8,615.8L143.1,615.1L143.8,614.2L143.1,613.5L141.1,612.1L143.9,612.3L143.2,610.7L142.9,610.3L143.9,611L144.5,611L145,610.8L145,610.1L145.2,609.5L145.2,608.7L145.1,608.4L144.4,607.9L144,606.9L144.2,605.8L145.1,605.3L145.8,605.4L146.4,606.1L147,608.2L147.7,609.2L148.2,609L148.2,608.1L147.8,606.6L148,605.6L148.1,604.9L148,604.1L150.4,601.9L151.1,600.8L151.5,600.4L153.4,601.2L153.9,600.9L154.3,600.3L154.8,599.9L154.7,599.9L154.4,599.4L154.4,598.8L154.9,598L155.5,597.9L156.7,597.5L159.9,597.8L161.1,597.3L162.1,595.8L163,597.1L163.9,596.8L164.9,595.9L165.8,594.7L164.5,593.4L164,592.6L164,591.8L164.5,590.6L164.4,589.6L164.1,588.8L164,587.9L164.2,587.4L164.8,583.2L165.4,582.4L166.3,582.5L167.6,583.3L167.9,583.6L168.3,584.3L168.7,584.6L169.2,584.5L169.5,584.2L169.9,584L171.2,585L173.8,585.4L174.4,584.5L174.1,582.3L173.1,580.1L172.6,578.9L172.9,578L173.4,577.9L174.5,578.4L174.8,578.1L175.8,576.5L176.4,576.1L176.5,574.8L177.3,573.8L178.4,572.7L178.5,572.6L179.1,571.6L178.9,571.6L179,570.2L179.4,568.8L179.9,568.2L180.7,568.9L181.3,568.9L183.2,567.8L183.8,567.2L184.1,566.5L185.1,563.5L185.8,563.7L187.5,564.8L188.2,565.5L188,564.5L187.7,563.3L187.6,562L187.8,560.5L188.5,559.1L189.7,557.4L190.3,556L190.8,553.3L191.1,552.4L192,551.6L193.8,550.9L194.5,550.1L194.3,548.6L194.9,548.7L195.3,548.6L195.7,548.3L196.2,547.7L196.3,547.8L198,546.8L199.4,546.8L199.7,546.5L199.7,544.8L199.8,544.2L200.1,543.5L200.5,543.4L201.6,543.7L202.1,543.3L202.4,542.7L202.6,541.4L202.9,541.1L203.6,540.3L204.5,540.2L205.2,539.6L205.8,538L205.9,537.4L205.7,536.5L205.7,535.8L206.5,535.1L206.5,534.3L206.4,533.7L206.2,533.5L206.6,531.6L206.9,530.5L208.1,528.5L208.3,527.7L208.4,527L208.7,526.2L208.9,526L209.4,525.7L210.6,524L212.2,523.1L213,522.3L213.7,521L213.3,520L213.2,519.7L213.2,519.1L213.6,518.1L214.2,517.5L215.4,516.6L214,515.1L213.6,514.4L214.3,513.9L215.2,514.1L218.2,516L218.7,515.9L219,515.4L219,514.9L218.6,514.3L218.4,513.7L218.8,512.1L219.6,511.7L221.2,511.7L221.5,509.8L222.9,508.9L227.8,508.4L234.8,504.4L235.7,504.2L236.4,504.6L236.8,505.5L237.1,506.5L237.6,507.4L237.9,507.4L238.2,507.1L238.5,507L238.9,507.4L239,507.7L239.2,509.2L239.3,509.6L239.9,510.7L240.4,511.4L241.1,511.9L242.1,512L242.1,512.5L241.7,512.5L241.4,512.6L240.7,513.1L242.1,513.7L245.8,512.5L246.1,512.2L245.7,510.5L245.8,509.7L246.4,506.7L246.4,506.1L246.2,505L245.6,505L245.2,505.5L244.6,505.6L244,505.1L243.1,503.9L241.5,503.2L240.8,502.4L239.6,499.7L239.7,499.4L240.1,498.8L240.4,498.5L240.2,497.9L240.7,497.6L244.7,498.2L245.4,498.9L246.8,500.5L247.8,501.2L248.6,501.6L249.3,501.1L249.5,499.8L249.2,498.6L248.8,497.8L248.5,496.9L248.7,495.4L248.4,495L248.4,494.5L248.4,494L248.5,493.6L247.6,492.3L247.2,491.5L246.9,490.6L246.9,489.6L246.8,488.8L246.5,488.4L246.2,487.7L244.9,486.5L240.6,485.1L240.9,483.1L241.2,482.2L242.5,480.6L243,480L243.3,478.9L243.5,477.6L243.4,476.2L243.8,476.4L244.2,476.2L244.8,476.1L245.2,475.6L244.9,475.5L244.4,475.1L244.1,475L244.5,473.6L244.7,473.1L244,472.6L243.7,472.5L243.4,472.5L244,471.5L244.4,468.5L245,467.3L244.9,467L244.6,466.3L244.5,466L244.9,465.9L245,465.7L245.6,464.8L243,461.6L243.5,461.3L244.5,461.2L245.1,460.9L245.5,460.4L246.1,459L246.5,458.5L246.1,456.9L246.6,453.5L246.4,451.8L245.3,449.6L244.1,447.8L241.4,444.8L240.6,444.3L239.4,444.3L238.6,444.6L237.8,444.4L236.8,443L236.7,442.2L236.6,441.6L236.4,441.3L236.3,440.3L235.8,439.5L235.4,439.2L234.4,439.5L233.8,438.9L233.2,438.2L231.4,438.7L230.5,438.5L230.1,437.9L229.5,436.5L229.1,436L227.7,435.2L226.2,434.8L224.7,435.1L223.3,435.9L222.3,437.1L221.7,437.4L221,437.5L220.6,437.2L220.5,436.3L220.4,432.8L220.4,432L220,431.7L217.7,430.2L217.2,429.6L216.7,428.3L216.2,426.9L216.1,425.2L216.5,422.8L217.1,421.1L219.4,416.3L219.9,414.6L220.3,414L220.8,413.4L221.9,413.2L222.4,412.8L222.4,411.5L221.8,412.3L219.9,413.3L219.5,413.5L219.2,413.5L218.9,413.6L218.8,414.2L218.7,415.3L218.7,415.7L218.6,416L217.6,416.7L215.9,420.9L214.9,422.2L213.9,422.1L213.2,422L212.4,422L211.6,422.7L211.4,423L211.3,423.3L211.3,423.8L211,424.3L210.6,424.6L208.7,423.6L207.6,421.8L207.2,421.4L205.7,420.7L204.3,419.4L204.6,420.7L204.7,422.1L204.4,423.3L203.6,423.8L202.9,423.4L202.2,422.3L201.7,421L201.4,419.9L201.4,419.3L201.4,417.6L200.1,415L199.4,411.2L198.4,409.5L197.6,407.6L197.8,405.5L197.7,404.1L196.9,399.4L196.7,398.1L196.3,397.5L195.4,396.5L195,395.8L194.8,395.1L192.9,388.7L192,387.6L188.3,386L187,384.7L185.9,383.1L184.9,378.4L184.6,376L184.1,373.8L184,372.8L184.2,371.9L184.5,370.7L184.7,369.7L184.7,368.5L184.7,366.7L184.6,365.5L184.5,364.5L183.9,362.8L183.8,361.7L184.3,359.5L185.1,358.1L186.2,357.4L187.2,357.1L187.2,355.5L188.2,354.8L189.4,354.2L190.1,353.3L190.3,352.3L192.3,351L193,350.1L193.5,348.7L193.5,347.1L193.4,345.5L193.2,343.8L193.7,342.2L194,340.7L194.2,338.8L194.3,336.9L194,333.4L194,332.6L195.3,330.6L195.8,329.1L196.6,328.8L197.6,329L198.1,328.7L198.3,327.8L198.2,327.1L196.9,322.5L196,320L195.3,318.5L193.9,316.6L192,311.7L191.1,310.5L190.1,309.9L189.4,309.2L188.6,307.8L187.4,304.8L187.1,303.8L187,303.2L187.1,302.4L187,301.1L186.9,300.2L186.7,299.5L186.3,299.2L185.4,297.1L184.7,296.2L184.1,294.9L183.9,293L184.3,292.4L184.8,291.4L185.2,290.5L185.5,289.3L184.8,288.9L184.7,288.3L184.8,286.4L185.3,285L185.9,284.3L190.1,282.4L191.1,280.8L192.1,278.1L190.9,277.2L190.9,275L191.4,272.5L191.6,270.3L191.1,269.7L190.4,269.2L187.9,268.8L185.6,267L184.2,267.1L182.7,267.8L181.4,267.7L180.3,266.1L179.9,263.7L180.5,262L181.3,260.5L182.1,258.5L181.7,257.4L182.7,256.5L184,255.4L184.7,254.5L184.6,252.3L184.4,250.9L183.6,248.3L183.4,246.9L183.2,243.1L182.9,241.7L182.8,240.4L183,235L183,233.1L182.9,230.9L183.1,228.7L183.8,227.1L185,226.1L187.6,225.2L188.7,224.3L189.7,222.6L189.8,220.9L189.2,219.8L186.8,218.8L183.8,214.6L182.9,213.7L180.5,211.1L180.1,210.3L180,209.5L178.9,204L178.6,203L178.1,202.4L177,202.3L173.9,204.2L173.2,204.2L172.9,203.7L172.8,203.7L172.7,203.5L172.7,202.6L172.8,202.1L172.9,201.3L173.3,199L173.2,198.2L173,197.6L173.2,195.4L172.8,193.8L171.4,191.7L170.9,190.9L170.8,190.1L170.7,189.3L170.5,188.5L170.1,187.7L165.2,183.8L164.3,182.5L162.9,179.3L162.1,178.3L160,179L159.1,177.9L158.2,176.1L157.2,175.1L156.6,175L156,175.2L155.4,175.1L154.1,174L152.5,173.7L150.4,172.3L147.8,172L147.6,171.7L147.7,170.9L147.6,170.6L145.3,169.8L137.5,169.2L136.3,168.2L136.4,167.7L136.4,167.1L136.4,166.4L136.2,166.1L136,165.9L135.7,165.5L135.2,164.5L134.3,163L134.2,162.5L132.8,160.4L126.8,158.2L126.3,155.2L124.5,153.8L121.7,150.5L119.1,149.5L118.2,148.3L117.8,147.4L117,144.5L116.9,143.4L116.7,142.4L116,141.9L113.6,141.7L113.4,141.5L113.2,141.2L113,140.4L112.9,140.2L112.4,139.6L110.8,135.6L108.8,133.1L106.3,130.4L101,127.6L100.4,126.4L100.7,124.6L101.7,124L102.4,122.7L102.5,121L101.8,119.6L100.3,119L98.2,116.5L94.3,115.5L92.7,113.6L96.3,108.1L97.3,107.7L106.3,114.3L107.6,114.9L108.5,114.3L110.7,110.4L107.4,101.3L108.6,98.3L109.3,96.9L109.9,96.2L117.4,91.9L127.9,94.5L128.7,95.4L136.8,114.4L139,119.4L143.2,125L143.6,126.1L144,128.5L144.3,129.5L146.6,134.3L149.1,136.9L149.6,137.8L149.9,146.2L150.2,148.1L150.9,148.3L154.7,147.1L155.7,147L156.6,147.4L164.9,152.4L170.7,151.6L172.4,152.3L173.3,153.2L175.7,157.9L176.4,158.3L186.3,152.4L191.8,151.7L194.9,149.9L196.2,146.2L197,142.1L199.2,140.6L201.8,140.7L208.5,144.7L209.6,146.8L210.3,147.7L215,151.2L220.1,153.2L226.1,155.4L229.2,158.1L231.7,162.3L232.6,165.1L233.2,165.9L234.2,165.8L235,164.5L235.4,162.8L235.8,161.2L236.9,160.3L237.7,160.5L240,158.9L240.8,158.6L241.6,158.3L242.1,157.4L242.4,155.5L242.1,154.7L242.1,154.1L242.2,153.6L242.5,153L242.5,148.6L242.7,146.6L243.2,144.7L244.6,142L250.8,136.5L252.4,135.5L254.1,135.2L258,136.7L258.9,136.5L259.7,135.7L260.2,134.3L260.6,132.9L261.2,131.8L262.3,130.3L262.7,129.3L262.8,128.1L263.1,126.8L264.6,125.4L264.8,124.3L264.7,123.7L264.5,123.2L263.9,122.4L263.6,121.9L263.5,121.6L263.6,121.2L263.5,120.8L263.1,119.3L263.1,118.8L263.3,117.9L263.4,117.2L263.4,114.1L263.6,113.8L263.7,113.5L263.8,113L263.8,112.4L263.7,111.6L263.3,110L263.1,109.5L262.6,107L262.8,104.5L264,97.1L264.3,95.7L267.4,90.4L267.2,89.6L266.3,86L267,83.8L267.4,83.3L267.7,82.5L267.7,80.3L267.9,79.2L268.4,78.1L268.1,77.5L267.8,77L267.7,76.4L268.2,75.3L270.1,73.9L271,72.3L271.5,70.3L271.5,68.1L270.7,65.9L270.3,65.1L270.1,64.2L270.4,63.2L270.7,62.1L271.5,60.7L272.5,60.1L277.2,58.7L277.8,58.3L278.2,57.6L278.6,56.8L280,54.3L281.6,50.9L284.8,47.2L285.7,45.3L285.4,43.5L285.7,42.8L286.7,41.2L287.4,39.4L288.4,38.8L293.9,37.8L296,38.4L299,37.4L299.9,37.7L301.8,39.1L302.7,38.8L303.6,38.8L305.9,40.6L306.5,40.6L313.2,38L314.5,36.2L314.2,35.9L313.8,35.4L313.5,35.1L313.9,34.3L314.3,34L314.9,34L315.3,33.8L317.3,31L321.1,29L321.3,27.4L322.6,25.5L324.2,24.8L328.2,25.5L330.5,24L331.6,24.3L332.5,26L334.4,30L340.7,40.5L341.4,41.2L347.6,43.7L347.8,47L348.6,48.7L349.8,49.7L351.1,50.1L361.8,54.9L372.5,59.5L373.1,60.4L375.2,67.6L380.5,78.8L377.2,87L365.8,102.5L365.5,103.7L365.4,105.8L365.1,112.7L365.2,114.3L365.6,115.2ZM104.7,952.4L104.5,950.3L105,949.4L105.9,949.8L106.6,951.2L106.4,954.7L106.3,956.3L106.1,957.7L105.8,957.6L105.3,956.7L104.5,956.5L103.8,956.7L103.4,957.8L103.2,958L102.8,956.9L102.2,955.2L102.1,954.1L102,952.7L101.9,951.3L102.3,950.2L103,949.8L103.6,950.3L103.6,951.5L103.7,952.5ZM63,942.1L64.6,940L66.5,939.2L68.5,939.3L70.4,940.7L70,941.8L69.5,942.2L68.3,943.1L69.1,943.2L69.4,943.7L69.2,944.4L68.8,945.2L68.1,945.6L67.4,945.6L66.3,945L65.8,945L64.4,945.4L63.9,945.8L63.6,945.8L63.1,945.1L62.7,944.5L62.2,944L62.9,943.5L63.9,943.4L65.7,943.6L65.3,942.4L64.7,942.1ZM74.6,937.9L77.3,937.4L79.8,937.6L81.3,938.9L81.2,939.5L80.7,939.5L80.2,939.5L79.7,939.6L79.3,940L79.7,940.2L80.3,941.4L76.8,941.1L78.2,941.9L77.9,942.2L77.4,942.4L76.8,942.6L77,942.7L77.3,943.1L76.1,944.1L74.7,944.8L73.2,944.8L72.1,944L72.4,943.5L72.6,943.4L72.5,942.1L73.2,941.7L73.4,941.6L73.4,940.9L72.8,940.4L72.9,939.5L73.8,938.4ZM56.8,934.6L57.4,936.1L58.5,936.6L61,936.9L61,937.6L59.2,937.3L58.4,937.9L58,939.3L57.7,939.2L57.4,938.6L56.8,938.1L55.3,937.8L54.6,937.4L54.2,936.8L53.7,936.3L52.9,936.4L53.6,935.2L54.7,934.6ZM89.4,936.7L90,938.2L87,940.5L87.2,940.7L87.8,941.7L88.1,941.8L86.6,943.5L85.1,943.6L84.1,942.2L83.5,939.7L84.2,939.2L86.4,938.6L87.9,937.3L88.6,936.7ZM262.8,942.5L263.1,941.7L264,941.5L265.6,941.7L265.1,942.8L264.6,943.3L263.8,943.6L263.1,943.6ZM96.3,937.8L96.9,936.1L98.2,934.4L99.4,933.5L100.4,934.2L100.4,936.4L98.9,938.7L97.2,939.7ZM254,939.6L252.5,939.3L251.5,937.9L251.4,936L252,934.2L252.9,934.7L256.8,939L256.5,939.6L255.7,940.1L255,940.5L254.5,941.5L254.6,942.7L253.5,942.1L253,941.8L253.3,941.2ZM125.8,935.9L126.9,933.7L128.1,931.9L129.5,931L131.1,931.4L130.7,933.4L129.8,934.6L128.6,935.5L127.5,936.6L127.2,937.5L127,938.4L126.6,939.2L125.4,939.6L125,940.4L125,941.5L125.3,942.6L124.9,942.6L124.8,942.7L124.6,943L124.2,943.2L124.6,943.3L125.2,943.8L125,944.8L124.8,945.1L125.3,948.1L123.5,950.7L119.5,953.8L119.5,954.4L120,954.4L120.3,954.6L120.8,955.1L120.3,955.7L119.7,957.3L119.3,957.7L118.2,957.3L117.8,957.5L117.1,958.2L116.6,956.5L116,954.9L115.6,955.8L114,957.6L113.8,957.8L113.6,958.2L113.6,959.3L113.2,959.3L113.5,957.9L113.3,957.1L113,956.8L112.3,957.4L112.2,956.1L112.6,955.5L113,954.7L113.2,953.5L112.6,954.2L110.9,955.7L110.2,956.9L108.1,957.3L107.3,957.7L107.4,955.2L107.6,954.1L107.8,953.2L107.7,952.1L107.8,950.8L108,949.9L107.9,949.1L107.4,948.4L106.1,947.6L105.7,946.6L106.7,946.4L108.4,945.2L109.5,944.9L114,945.2L114,944.5L105.5,943.5L106.1,941.5L106.6,938.8L107.4,936.8L108.7,936.6L107.6,938.9L107.4,940L108,940.5L112.7,939.8L114.5,938.6L115.3,938.2L124.4,937.2ZM92.1,927.4L93.3,927.4L98.7,928L102,929.6L102.7,930.6L102.5,931.7L102.3,932.1L101.3,932.4L101,932.2L100.7,931.9L100.3,931.7L100,932L99.8,932.3L99.1,932.7L98.9,932.9L96.8,933.4L96.1,933.2L97,932.1L96.4,931.2L95.4,930.6L94.3,930.6L93.6,930.7L95.4,930.8L94.5,932.6L93.3,932.2L92,931.4L91,931.5L90.7,931.5L90.6,930.2L91,928.5ZM105.1,927.4L104.2,928L103.4,928.1L101.6,927.2L102.5,925.8L103.6,924.8L104.6,924.4L105.7,924.3L105.9,924.5L105.9,924.9L105.8,925.4L105.8,925.5L107.1,926.4L107.8,926.4L108.4,926.5L108.9,926.7L109.2,927.6L108.1,928.8L106.8,929.5L105.3,930.1L104.1,930L104.5,929.4L104.7,928.8ZM87.3,925.3L86.4,925.7L85.6,925.6L84.6,925.4L83.8,925L83.6,925L83.4,925.3L83.1,925.6L82.7,925.6L82.8,925.3L82.8,924.5L82.8,924.2L81.9,923.4L81.4,923L79.9,922.6L79,921.9L78.1,920.9L77.8,919.8L78.2,918.7L78.9,918L79.9,917.7L80.7,917.8L80.8,917.1L78.8,914.5L79,913.3L79.3,912.3L79.8,911.9L80.5,911.9L81.1,912.8L83.1,914.1L83.4,915.1L83.5,915.9L83.8,916.4L84.3,916.6L84.8,916.8L85.5,918.7L85.5,919.3L84.2,918.8L83.5,918.7L82.8,919.2L83.4,919.7L84.7,920.5L85.3,921.2L85,921.8L86.5,921.9L86.9,922.3L87.4,923.2L86.2,923.8L85.7,923.9L86.5,924.4L86.8,924.4L87.3,924.5ZM75.6,910.7L75,911.7L74.3,912.6L73.8,913.1L73.5,912.1L74.1,910.4L75.2,908.1L76.7,906.6L77.6,906.7L77.4,908L76.8,908.9ZM57,909.4L56.2,908.9L54.7,908.5L53.9,907.6L54.6,905.8L54.3,904.6L53.7,903.7L53.4,901.9L54.4,902L55.6,903.6L56.5,905.9L56.6,906.9L57.3,909.4ZM60.9,902.4L61.6,904.1L63.9,904.5L64.8,905.9L64.5,905.8L64.5,906L64.3,906L63.8,905.8L63.6,906.7L63.5,907.5L63.5,908.3L63.6,908.9L63,908.7L62.3,909.1L62.1,909.9L62.7,910.8L61.5,910.2L60.5,908.9L59.6,907.1L59.3,904.8L58.5,905.7L58,906L57.7,905.4L57.7,903.8L58.3,902.4L59.1,902.2ZM56.7,901.4L55.9,901.4L55.6,900.8L55.5,900L55.2,899.4L54.4,899.1L53.9,898.8L53.5,898L53.1,896.5L53.5,896.1L54.5,895.5L54.9,894.9L55.1,894.1L55.4,893.9L55.9,894.4L55.8,895.1L56,895.8L56.2,896.4L56.7,896.9L56.1,898.3L55.8,899.6L55.9,900.7L56.8,900.7ZM57.2,872.1L55.7,872L55.1,871.8L54.5,871.2L55.7,870.4L57.9,871.5L58.9,870.9L58.8,870.6L58.6,870.3L58.6,870L58.7,869.7L58.8,869.4L59.4,868.8L59.7,868.5L58.4,866.5L57.6,865.8L56.7,865.6L58.1,864.1L58.8,863.8L59.6,863.9L60.3,865.4L60.9,866.4L62.5,867.9L61.5,868.9L60.8,869.2L60.3,869.6L60,871.6L59.6,872.4L58.6,872.5L57.7,872ZM79.9,653.1L79.5,654.4L79.4,655.5L79.5,656.6L79.8,657.5L78.7,658.1L77.7,658.2L77.1,657.8L77.8,656.8L77.2,656.7L74,659L73.9,659.6L74.2,659.8L74.9,660.3L74.3,661.1L73.5,661.5L71.7,661.5L71.3,660.7L70.9,659.6L70.4,658.3L69.7,657.4L69.2,657.7L68.6,658.3L68,658.2L67.5,656.6L68.4,656.7L68.4,656.1L67.9,655.6L66.8,653.9L66.4,653.1L66.3,652.1L65.8,649.2L65.9,648.1L67.4,649.8L69.1,649.8L70.8,649.3L72.6,649.3L72.5,649.9L71.9,650.2L71.4,650.9L70.3,653.1L70.4,653.9L70.4,654L70.2,654.3L70.8,654.8L73.1,655.2L73.3,655.3L73.6,655.8L73.9,656L74.4,655.6L74.6,655L74.5,654.3L74.2,653.8L74.4,653.4L75.4,652.3L77.2,651.5L78.9,651.6ZM75.8,648.9L75.7,647.5L75.4,647.3L74.8,647.6L74.2,647.5L72.3,644.9L72.6,644.6L72.8,644.4L73.3,644.3L74.5,643.9L75.9,642.6L77.5,641.9L78.6,643.4L78.5,644.8L77.6,646.5ZM231.9,491.5L233.5,491.2L234.6,492.6L233.3,493.4L230.6,493.3L227.4,492.3L225.1,492.4L224.4,494.2L221.2,496L222.3,498.7L224.7,498.4L225.3,498.9L224.8,499.4L224.4,499.5L223.8,499.5L223.4,499.5L223,499.8L222.7,500.4L222.3,500.7L221.5,500.9L220.7,500.8L220.3,500.2L220.6,498.8L220.5,498.5L220.2,497.5L219.6,496.6L218.6,498.9L217.6,499.2L216.2,497L215.6,495.4L215.2,494.1L214.9,492.7L215.9,491.6L218.7,488.9L222.1,488.6L225.8,487.6L227.6,488.4L228.1,489.7L227.3,490.3L227.5,490.9L228.5,490.9L229.7,491ZM174.5,962.8L174.8,963.3L174.6,963.4L174.6,964L174.1,964.7L173.4,964.6L173.4,964.8L173.4,964.9L172.9,965.1L172.2,965.2L171.5,964.6L171.4,964.7L171.2,964.4L171.6,963.6L172.3,962.9L173.3,962.4ZM127,952.1L128.3,952.2L128.8,952.5L128.4,953.1L128.2,953.9L128,954.7L127.7,955L127.5,955L127.2,955.4L126.6,956.7L126.4,957.4L126,957.9L125.4,957.4L125.1,955.8L125.4,954.5L126.7,954.5L126.7,954L126.4,953.7L125.7,953.6L125.4,953.3L125.8,952.5ZM130.5,948.3L130.6,949L130.6,949.6L130.2,950.4L129.9,950.7L129.4,950.8L129.1,950.6L129.2,950.2L128.9,950.2L128.4,950.6L127.5,950.9L126.2,950.8L125.9,950.8L125,950.8L125.1,950.4L125.6,949.8L126.1,949.1L126.5,948.2L126.8,947.9L127.4,947.4L128.6,946.8L129.6,947L130,947.5ZM85.8,944.1L86.1,944.2L86.7,944.9L86.5,945.5L85.5,945.8L84.8,945.7L83.5,945.5L83.4,945.3L82.9,944.5L83.3,943.9L84,943.5L84.5,943.4L85.1,944ZM101.1,939.3L104,938.3L104.4,939.2L103.5,940.7L102.3,941.4L101.1,941.8L101.1,942.3L101.7,942.8L101.9,943.4L101.2,943.4L100.2,943.3L99.7,943.1L99.9,942.8L99.9,942.5L99.8,941.7L100,941.3L100.2,941L100.3,940.7L100.4,940.2L100.6,939.6ZM86.3,929.8L86,929.8L85.8,929.6L86.2,929.3L87,928.7L87.5,928.6L87.4,929L86.8,929.5ZM85.1,930L84.5,930.3L83.6,930.2L82.8,930L82.4,929.1L81.9,929L81.5,927.6L81.7,927.1L82.3,927.2L83,927.2L83.8,926.9L85.3,927.2L86,927.4L86.1,928ZM101.3,922.9L100.8,923.7L96.7,924.9L96.2,925L95.3,924.8L94.6,924L94.7,923.3L95,923L99.4,922.2L100.7,922.1ZM97.1,921.3L97.1,921.9L92.7,923.7L92.3,923.7L93.1,922L94,921.4L94.3,921.3ZM57.3,918.6L57.9,919.9L58,921L57.8,921.6L57.4,921.4L57.1,921.4L56.8,921.2L57,920.4L56.9,920.3L56.5,920.1L55.5,920.3L55.2,919.7L55.3,919.1L55.7,918.4L55.9,918L56.5,917.9ZM299,920.2L301,921.6L301.4,922.1L301.2,922.5L300.5,923.2L297.7,924L297.1,924.8L296.6,926.5L296.1,926.7L295.6,925.9L294.8,924.3L294.9,923.5L297.1,923.1L297.7,922.6L298,921.9L298,921.3L298.2,920.7L298.5,920.2ZM105.6,647.8L105.9,647.8L106.8,649.7L106.8,650.4L106.2,651.6L105.5,652L104.7,651.8L104.6,651.5L104.6,650.8L104.5,650.5L104.2,650.8L104,651.1L104,651.6L103.8,651.7L103.5,651.9L103.4,651.6L103.1,650.9L103.3,649.8L104,648.8L104.5,648.5L105.3,649.2L105.6,649L105.5,648.5L105,647.9L104.8,647.4L105,647.4L105.3,647.4L105.4,647.6ZM110.1,654.6L109.7,654.6L107.6,653.6L107.5,653.1L107.7,652.8L107.4,652.3L107,651.9L107.2,651.5L107.5,651.2L107.8,651L108,650.4L107.9,649.6L107.5,648.8L107.4,648.2L107.7,647.9L108.3,647.8L109.1,647.3L109.6,647.7L109.9,647.7L110.2,648L110.6,648.7L110.9,649.2L111.2,649L111.2,648.6L111.6,648.4L111.8,648.6L112.1,648.8L112.3,649.3L112.6,649.3L112.9,649.1L113,648.7L113.2,647.9L113.4,647.3L113.8,646.7L113.9,646.5L114.2,646.7L114.3,647.5L114.3,648L114.4,649.1L114.6,649.7L114.5,650.2L114.1,651L113.4,652.2L113,652.8L112.1,652.7L110.8,651.2L109,651.6L108.9,651.7L110,652.1L110.9,652.6L110.9,653.6L110.6,654.2L110.3,654.2L110.1,654.3ZM102.8,646.6L102.3,646.5L102.4,646.1L102.4,645.8L102.5,645.5L102.7,645.1L103.1,644.6L103.2,644.1L103.6,643.7L103.7,643.2L104.1,642.9L104.2,642.5L104.7,641.9L105.5,641.9L106.1,642.1L106.7,641.7L107.3,641.7L107.6,641.9L107.7,642.1L108.2,642.3L108.5,642.1L108.8,642.3L108.7,642.6L108.4,642.7L108.1,642.9L108.1,643.2L108.2,643.7L107.9,644.4L107.1,644.5L105.8,643.7L105.2,643.8L104.7,644.7L104.5,645.2L103.9,645.9L103.1,646.7ZM140.3,607.1L140.9,607.1L141.1,607.4L141,607.7L140.8,607.9L140.7,608L140.6,608.7L140.5,609.3L140.3,609.6L140.1,610L139.8,611L139.5,610.6L139.1,610.3L138.8,610.6L138.9,611.2L138.7,611.9L138.3,611.8L137.9,612.3L137.2,612.4L136.3,611.7L135.8,610.9L135.4,609.5L135.1,609.2L135,608.8L135,608.4L135.9,607.8L136.3,607.5L136.6,607L137.3,606.4L138.6,605.9L139.3,606.1L139.6,606.7L139.8,607.2L140,607.4L140.1,607.2ZM108,968.9L108.5,969.1L108.7,969.3L108.3,969.7L105.4,971.2L104.5,971.4L104,971.1L104.1,970.3L104.4,969.8L104.6,969.9L104.9,969.7L106.1,969.3L107.2,969.2L107.5,969.1ZM68.6,931.5L69.2,931.4L69.7,931.7L69.3,932.5L68.8,933.2L68.6,933.8L68.4,934.5L67.9,934.4L67.7,934.4L67.2,934.4L66.6,933.9L66.6,932.6L67.1,931.2L68,930L68.8,930.1L68.8,930.9L68.4,931.1ZM56.8,874.7L57.1,874.9L57,876.2L56.8,876.9L56.2,876.6L54.5,875.3L54.3,875.5L54.2,875.3L54.2,875L53.9,874.7L53.6,874.2L53.6,873.9L54.4,873.6L55.1,874.1L55.2,874.9L55.3,875.2L55.6,875.1L56,875.1L56.1,875.3L56.4,875.3ZM66.2,845.3L66.5,845.6L66.7,845.8L66.2,845.6L64.8,844.7L63.8,845.1L63.2,845.1L62.9,844.9L63,844.9L62.9,844.6L62.8,843.6L63,843.2L63.3,843.1L63.5,842.9L63.5,842.6L63.9,842.1L64.6,841.6L65,842.1L64.8,842.8L64.9,843.6ZM73.7,803.1L73.8,803.6L73.6,803.9L73.3,803.9L73.1,804.2L72.9,804.5L72.6,804.5L71.7,804.3L70.9,803.6L70.9,803.4L71.4,803.3L72,802.4ZM68.9,680.4L68.2,679.5L67.9,679.8L67.1,680.2L66.4,679.4L66,678.6L66,678.1L66.2,678.1L66.5,678.3L66.6,678.5L66.8,678.2L67,677.4L66.7,677.1L66.3,676.6L65.9,675.7L65.9,674.9L66.3,674.5L66.6,674.2L66.9,674.2L67,674.6L67.2,674.7L68.2,675.3L68.6,675.8L69,676.6L69.4,677.7L69.5,679L69.4,679.9L69.2,680.2Z","naapurit":["M0,618.9L1,619.3L0.3,621.6L0.7,622.4L1.7,622.8L2.9,624.1L1.6,624.7L1,625L0.2,625.1L0.1,625.4L0.4,626.2L1.8,628.9L1.9,629.5L1.9,630.6L1.5,630.9L0.8,630.3L0,629.3L0,618.9ZM0,187.5L1,186L2.2,182.3L2.7,163.8L3.1,161L4.9,152.7L5.1,151.6L5.6,151L6.2,151L15,148.7L16.3,150L21.1,156.3L23,157L34.6,157.4L48.8,166.7L63.5,175L64.8,175.1L66.3,174L75.3,164.3L66.3,157.4L73.2,151.9L76.6,147.4L80.9,137.8L81.6,136L81.9,134.3L82.4,126.1L82.3,124.5L75.2,113.3L84,113.5L92.7,113.6L92.7,113.6L94.3,115.5L98.2,116.5L100.3,119L101.8,119.6L102.5,121L102.4,122.7L101.7,124L100.7,124.6L100.4,126.4L101,127.6L106.3,130.4L108.8,133.1L110.8,135.6L112.4,139.6L112.9,140.2L113,140.4L113.2,141.2L113.4,141.5L113.6,141.7L116,141.9L116.7,142.4L116.9,143.4L117,144.5L117.8,147.4L118.2,148.3L119.1,149.5L121.7,150.5L124.5,153.8L126.3,155.2L126.8,158.2L132.8,160.4L134.2,162.5L134.3,163L135.2,164.5L135.7,165.5L136,165.9L136.2,166.1L136.4,166.4L136.4,167.1L136.4,167.7L136.3,168.2L137.5,169.2L145.3,169.8L147.6,170.6L147.7,170.9L147.6,171.7L147.8,172L150.4,172.3L152.5,173.7L154.1,174L155.4,175.1L156,175.2L156.6,175L157.2,175.1L158.2,176.1L159.1,177.9L160,179L162.1,178.3L162.9,179.3L164.3,182.5L165.2,183.8L170.1,187.7L170.5,188.5L170.7,189.3L170.8,190.1L170.9,190.9L171.4,191.7L172.8,193.8L173.2,195.4L173,197.6L173.2,198.2L173.3,199L172.9,201.3L172.8,202.1L172.7,202.6L172.7,203.5L172.8,203.7L172.9,203.7L173.2,204.2L173.9,204.2L177,202.3L178.1,202.4L178.6,203L178.9,204L180,209.5L180.1,210.3L180.5,211.1L182.9,213.7L183.8,214.6L186.8,218.8L189.2,219.8L189.8,220.9L189.7,222.6L188.7,224.3L187.6,225.2L185,226.1L183.8,227.1L183.1,228.7L182.9,230.9L183,233.1L183,235L182.8,240.4L182.9,241.7L183.2,243.1L183.4,246.9L183.6,248.3L184.4,250.9L184.6,252.3L184.7,254.5L184,255.4L182.7,256.5L181.7,257.4L182.1,258.5L181.3,260.5L180.5,262L179.9,263.7L180.3,266.1L181.4,267.7L182.7,267.8L184.2,267.1L185.6,267L187.9,268.8L190.4,269.2L191.1,269.7L191.6,270.3L191.4,272.5L190.9,275L190.9,277.2L192.1,278.1L191.1,280.8L190.1,282.4L185.9,284.3L185.3,285L184.8,286.4L184.7,288.3L184.8,288.9L185.5,289.3L185.2,290.5L184.8,291.4L184.3,292.4L183.9,293L184.1,294.9L184.7,296.2L185.4,297.1L186.3,299.2L186.7,299.5L186.9,300.2L187,301.1L187.1,302.4L187,303.2L187.1,303.8L187.4,304.8L188.6,307.8L189.4,309.2L190.1,309.9L191.1,310.5L192,311.7L193.9,316.6L195.3,318.5L196,320L196.9,322.5L198.2,327.1L198.3,327.8L198.1,328.7L197.6,329L196.6,328.8L195.8,329.1L195.3,330.6L194,332.6L194,333.4L194.3,336.9L194.2,338.8L194,340.7L193.7,342.2L193.2,343.8L193.4,345.5L193.5,347.1L193.5,348.7L193,350.1L192.3,351L190.3,352.3L190.1,353.3L189.4,354.2L188.2,354.8L187.2,355.5L187.2,357.1L186.2,357.4L185.1,358.1L184.3,359.5L183.8,361.7L183.9,362.8L184.5,364.5L184.6,365.5L184.7,366.7L184.7,368.5L184.7,369.7L184.5,370.7L184.2,371.9L184,372.8L184.1,373.8L184.6,376L184.9,378.4L185.9,383.1L187,384.7L188.3,386L192,387.6L192.9,388.7L194.8,395.1L195,395.8L195.4,396.5L196.3,397.5L196.7,398.1L196.9,399.4L197.7,404.1L197.8,405.5L197.6,407.6L198.4,409.5L199.4,411.2L200.1,415L201.4,417.6L201.4,419.3L200.5,421L199.1,421.3L196.4,420.4L196.7,420.9L196.7,421.2L196.8,421.4L197.2,421.7L196.2,422.1L194.4,421.8L193.5,422.2L193.3,422.8L193,424.2L192.6,424.8L192.3,424.8L191.9,424.5L191.6,424.2L191.1,423.8L190.7,423.5L190.4,423L190.3,422.4L190.2,421.6L190,421.6L189.6,422.1L187.7,422L186.7,421.7L186.5,420.4L186.2,418.8L185.4,418.1L183.4,418.1L182.9,418.5L181.8,420.5L181.3,421.1L180.7,421.1L180.5,420.6L180.3,420.2L180.2,419.8L177.2,419.7L175.6,419L175.9,417.8L175.7,417.3L175.1,417.4L174.5,417.7L174.7,417.9L174.2,419L173.9,419.3L173.6,419.4L173.4,419.6L173.2,420.2L173.6,420.7L173.7,421.2L173.7,421.9L173.6,422.7L173.5,423.5L173.2,423.7L172.9,423.5L172.3,423.3L171.6,422.6L171.2,421.2L171.2,419.6L171.4,418.2L170.5,418.4L170,419.1L169.5,420L168.9,420.6L168.1,420.6L167.3,419.9L165.9,418L165.3,417.7L164.7,417.6L164.1,418.2L164,419.8L164.2,421.1L164.7,421.9L165.9,423L165.4,423.5L162.8,424.6L162.4,425.1L161.7,426.1L161.6,427.9L160.6,428.8L159.6,428.6L160,426.5L159,424L158.6,423.5L156.4,423.1L154.8,421.9L154.6,421.6L153.8,420L153.3,419.6L152.3,420L151.6,419.8L150.9,418.7L149.8,414.9L149.2,413.4L145.1,409.3L144.4,408.9L143.7,409.2L144,410.2L144.9,411.5L145.3,412.6L145.4,413.4L145.4,415.7L145.5,416.9L145.6,417.8L145.7,418.7L145.4,420.2L145.1,421.4L144.6,422.5L144,423.1L143.5,423.2L143.7,421.2L142.8,419.9L140.7,419.3L140.1,419.6L138.8,421.1L138.4,421L138.1,420.2L138.5,419.3L138.9,418.4L139.2,417.9L138.9,416.7L138.3,415.8L137.1,414.7L137.2,414.4L137.4,413.4L134.7,412.6L133.4,412.7L133.3,414.4L131.6,415L133.1,417.6L132.9,418.7L132.3,418.8L131.1,418.1L131.5,419.1L132,421.1L132.5,422.1L131,424.4L129.6,423.5L128.1,421.9L126.8,421.8L127.5,423.2L128.1,424.2L128.9,424.7L131.5,425.5L132.3,426.2L132.8,427.8L133,430.3L132.6,430.3L132.1,430.3L131.6,430.4L131.2,431L130.9,428.6L130.2,427.5L129.2,427.4L128.2,428.2L128.4,428.6L128.5,429.3L128.3,430.1L128,430.8L128.3,431.3L128.5,432.1L128.9,433.9L127.9,434.4L125.2,434.4L128,435.7L129.4,435.8L130.2,433.9L130.1,433L129.2,431.7L129.1,430.9L129.5,430L130,430.5L130.6,431.4L130.8,432.2L130.5,432.7L132.5,433.9L132.6,434.6L130.9,435.7L130.6,436.6L131,437.4L131.7,438.1L133.2,438.7L133.5,439L133.7,440L134,441.9L133,442.4L132.4,441.8L131.7,440.5L131.1,439.8L130,439.6L129.1,439.1L128.3,437.9L127.9,437.7L127.3,438.3L127.5,439.6L126.4,439.4L122.7,436.2L119.9,434.7L118.8,432.9L118.2,432.3L116.8,431.7L115.5,430.2L113.2,429.1L112.7,428.6L112.3,427.9L111.6,426.2L111.2,425.5L110,424.5L109.6,423.7L110.2,427.6L112.3,430.1L116.8,433.1L119.8,436.5L122.3,438L122.7,438.5L123.3,439.3L124.1,441L124.5,441.5L125.3,441.4L124.3,442.2L122.1,442.1L120.9,442.3L120.6,442.6L120.5,443L120.5,443.3L120.3,444L119.8,444.3L119.5,443.8L119.2,443.2L118.8,443.2L117.8,443.9L112.6,441.7L111.8,441.8L113.4,445.2L114.4,446.3L115.3,445.8L114.5,444.8L114.3,444.6L115.2,444.5L117.3,447.6L118.2,448.6L117.8,449.9L117.6,451L117.3,451.9L116.7,452.3L116,452.3L115.5,451.6L114.8,449.7L114.3,450.7L114.4,451.7L114.6,452.7L114.5,453.6L113.8,454.2L113.1,454.3L112.4,453.8L112.1,452.6L110.9,453.7L109.7,454.2L108.5,454.1L105.4,452.7L104.7,452.8L105.1,454.2L103.3,454.1L102.4,453.7L101.6,451.9L100.8,452L99.1,452.5L99,453L100.5,453.9L101.1,453.9L101,454.4L98.3,453.8L96.9,454L95.9,455.5L96.2,455.5L96.6,456L96.7,456.2L95,457.3L95.8,457.5L96.6,458.2L97.3,459.2L97.8,460.3L98.5,461.2L99.3,461.4L100,461L100.3,459.6L100.9,459.9L101.6,460.6L102.7,462.4L103.9,463.6L104.4,464.6L104.2,466L102.8,467.6L101,468.6L99.2,468.6L98,467.7L97.7,466.8L97.1,464.4L96.8,463.1L96.3,462.1L95.8,461.3L95.1,460.8L94.3,460.4L93.3,459.4L92.3,457.3L91.2,455.6L89.9,455.7L90,455.8L90.4,456.2L90.6,456.3L90.1,457.4L88.4,457.4L87.7,458.6L92.5,460.4L93.7,461.8L95.7,466.3L97.6,469.3L100,475.1L100.3,477.2L99.4,477.9L97.3,477.9L97.8,478.6L97.9,479.4L97.8,480.3L96.9,483L97,483.4L97.7,483.8L98.5,484.3L97.5,485L94.3,484.7L93.8,485.4L94,486.7L94.6,488.1L95,488.6L93.6,489.6L93.2,489.8L92.9,489.6L92.1,489.1L91.7,489L91.7,489.2L91.6,489.5L91.5,490L91.3,490.3L90.6,490.8L89.9,491.4L89.7,492.4L90.2,493.3L89.6,493.9L84.8,493.9L84.2,494.2L84.1,494.9L84.2,495.4L84.5,496.1L84.1,497.1L83.8,497.7L83.3,498.5L82.8,498.9L82.3,499L82.5,501.6L81.6,502.6L80.8,503.2L81,504.9L80.4,505.4L78.9,505.9L78.2,505.8L77.6,505.5L77.4,504.4L77.5,503.3L77.3,502.6L76.7,502.2L76.1,502.5L75.5,503.4L75.3,504.7L75.4,505.9L75.8,506.4L76.9,507L76.7,508.1L76.7,508.4L77.3,509.4L78,509.8L79.6,509.9L82.1,509.3L84.5,510.7L85.5,511.6L85.7,512.9L85,513.3L83.1,513L82.2,513.2L82.8,514.8L83.5,516.2L85.3,517.9L85.2,518.7L84.5,518.6L84.2,519L84.3,519.7L84.7,520.5L84.6,521L83.7,520.4L81.9,518.3L81,517.5L80.2,516.9L79.6,515.4L78.8,514.4L77.8,514.5L77.3,515.7L77.3,517.3L77.6,518.9L78.2,520L79.3,520.4L80.6,520.7L81.7,521.2L82.3,522.8L81.6,523L81.5,523.9L82,524.9L82.7,525.4L83.6,525.6L84,525.8L84.2,526.1L84.5,526.6L84.7,527.9L84.8,528.1L85.2,528.4L85.6,529.7L86,530.1L86.4,529.9L86.4,529.5L86.5,529L86.3,529L86.7,527.7L86.8,527L87.1,526.7L87.8,527L88.5,528.3L89.3,530.1L89.9,531L90.7,528.8L91,528.8L91.4,529.2L91.5,529.7L91.3,531.7L91.7,532.8L92.2,533.7L92.9,533.9L93.6,533.9L93.2,534.5L92.5,534.9L92,535.1L91.4,534.7L90.5,532.7L90.1,532.4L88.1,534L86.9,534.7L86.6,533.7L86.5,533.1L86.2,532.7L85.9,532.7L85.6,533L85.4,533.6L85.7,533.8L86.3,534L86.9,535.6L87.4,536.1L87.9,535.7L88.3,535.4L89.9,535.2L90.5,535.6L90.6,535.9L90.8,537.5L90.9,538.1L90.2,539.5L90.3,540.6L90.6,541.3L91.5,541.5L91.8,541.2L92.3,540L92.6,539.7L93.5,539.9L94.3,540.4L94.1,539L94.7,539L95.1,539.5L95.3,540.5L95.2,541.7L94.9,542.7L94.5,542.6L94,542.6L93.4,543.2L92.9,543.8L91.9,544.3L91.4,544.9L88.8,548.8L87.1,550.3L86.1,551.5L85.1,552.4L84.4,551.4L83.6,549.9L83.1,549.1L83.2,549.9L83.3,550.7L83.1,551.4L82.9,552.4L83.2,552.5L83.3,552.9L83.2,553.3L83.4,553.7L82.8,553.9L81.5,554.8L80.8,554.7L80.3,554.4L80,554L79.8,554.2L74,561.8L73.8,561.9L72.7,561.2L72.6,561L72.1,561.5L70.9,564.2L67.4,567.9L66.5,569.7L67,571.3L66.5,572.9L64.6,576.3L64.5,576.6L64.4,577.1L64.2,578.3L64.3,578.2L64.3,578.5L64.4,579L64.4,579.3L64.2,579.6L64.1,579.6L63.9,579.7L63.7,580.2L63.6,582.1L63.4,583L63,583.5L62.6,583.6L62.3,584L62.1,584.5L61.9,584.6L61,585.2L60.2,586.4L59.2,589.4L58,592.3L57.7,593.3L55.6,595L53.7,594.8L53.2,595.4L52.9,596.7L53.2,597.3L53.8,597.5L54.5,597.4L53.4,599.5L52.8,600.3L52.5,600.1L51.8,597.8L51.3,597.3L50.5,597.1L48.4,599.1L48.2,600.4L47.8,601.1L47.4,601.2L46.8,600.6L47.3,599.7L47.4,598.9L47,598L46.2,596.9L46.1,596.7L43.8,601.2L42.8,602.1L42,601.4L42.1,602.2L42,602.7L41.8,603.1L41.8,603.9L41.9,606L41.8,606.6L41.4,607.7L41.1,608.6L40.5,609.3L39.9,609.7L39.2,609.4L39,608.5L38.9,607.3L39.5,606.1L39.4,605.1L39.2,603.8L38.7,602.8L38.2,602.3L37.8,603.7L37.3,609.3L36.8,611.5L36.2,611.8L35.6,610.9L35.1,609.9L35.2,608.8L35.6,607.9L36,606.5L36.4,605.3L36.4,604.2L35.5,605.4L34.5,607.2L34,609.5L33.9,611.6L33.1,611.3L30.4,611.2L29.9,611.5L29.4,611.8L28.8,611.9L28.4,611.4L28.2,610.6L28.1,610.1L28,609.8L27.1,609.5L26.3,609.8L25.5,610.3L24.9,611.1L24.3,612.3L24.3,613.4L24.8,615.3L21.8,613.4L21.2,613.4L20.6,614L19,614.8L18.7,615L17.7,617.3L16,618.9L14.3,620L12.6,621.4L12.5,622.3L12.9,624.9L13,627.1L12.8,627.4L11.7,627.6L11.4,628.1L10.7,628.6L9.7,629.7L9.1,629.7L7.3,628.3L7.3,627L7.5,626.1L7.4,625.3L6.5,624.4L6.7,624.1L6.9,623.5L6.9,623.2L6.4,622.7L5.5,621L3.3,620L3,619.2L2.2,617.7L1.4,616.8L0.3,616.9L0,617.1L0,187.5ZM59.4,602.9L60.7,600.3L62.3,600.7L62.8,602.7L60.8,604.2L61.1,603.6L60.9,602.7L60.5,602.5L60,602.6ZM60,612.1L59.6,613L59.3,613.7L58.6,614.3L57.9,614.4L58.1,613.5L59.8,611.4L59.9,611.6ZM61.7,604.3L62.1,604.2L62.6,603.4L63.6,602.7L63.9,602.6L63.9,602.8L63.7,603.1L63.5,603.4L63.6,603.8L63.6,604.3L63.3,604.6L63.1,605.2L63.2,606L63.1,606.9L62.9,608L62.3,609.1L61.7,609.8L61,610.3L60.7,610.2L60.4,610.2L59.8,610.8L59.7,609.8L61,605.4L61.3,604.8ZM132.7,450.6L133.1,451.1L132.8,451.9L131.7,452.6L131.3,452.7L128.1,452.9L127.8,452.5L127.9,451.4L128.2,450.5L128.8,450.4L129.2,450.7L129.3,451.2L129.7,451.5L130.4,450.9L131.3,450.1L132,450.1ZM122.7,452.4L122.6,451.9L122.4,450.8L122.6,450L122.6,449.7L122.6,448.7L123.1,448.1L123.8,448.2L125.1,449.2L125.2,449.7L124.9,450L124.9,450.6L125.3,451.4L125.6,451.9L125.8,452.4L125.7,453L125.7,453.7L125.3,453.5L124.9,453.1L124.6,452.8ZM140.3,444.3L140.8,444.6L141.1,445.2L140.9,445.7L140.6,445.9L139.9,445.7L139.1,445.1L138.6,443.9L138.9,443.2L139.6,443.8L139.9,444.1ZM125.6,445.3L124.8,443.5L124.6,442.4L125.1,442L125.6,441.8L126.1,441.9L129,444.1L129.3,444.1L129.6,444L129.9,444.3L130.2,445.1L131,445.9L131,446.7L130.4,447.2L130,447L129.6,446.2L129.1,445.5L128.6,445.2L128,444.8L127.7,445.1L127.8,446.1L127.7,446.1L127.6,446.4L127.6,447L128,447.7L128.1,448.1L127.8,448.1L127.3,447.8ZM139.9,439L141.7,438.2L142.4,438.7L142.2,439.5L141.5,439.8L141.2,440.2L141.2,441L140.9,441.5L140.4,441.8L140.1,441.7L139.6,441.4L139.5,441.4L139.7,441.7L139.5,441.7L138.2,440.8L138.1,440.4L138,439.6L138.2,439.1L138.6,439.1L139.2,439.2ZM139.7,437.9L139.3,437.3L139.2,437L139.6,436.4L140.7,436.3L140.9,437.5L140.3,438.1ZM155.3,427.4L155.8,428.1L156,429L155.8,429.6L155.4,429.3L155.2,429.3L155,429.9L155.1,430.7L155.5,432L154.8,431.6L153.7,430.3L152.7,428.7L152.3,427L152.5,425.4L153.2,425L154.1,425L155.1,425.8L155.2,426.6L154.6,426.6L154.6,426.9ZM187.3,425.3L187.4,425.6L187.4,426.2L187.2,427L187.1,427.6L186.8,427.9L186.7,428.3L186.6,428.6L186.2,429.2L184.8,430.5L183.4,429.4L182.8,428.1L182.9,426.1L183.2,425.6L183.4,426.4L183.7,426.9L184,426.4L184.1,425.3L184.3,425.5L184.7,426L185.1,426.3L185.6,426.3L186,426.2L186.5,425.6L186.6,425.7L186.9,426.2L187,425.9L187.2,425.3ZM146.7,427.3L146.5,426.8L146.2,426.3L146.3,425.7L146.4,424.9L146.6,423.7L146.8,422.4L147.3,422L148.8,423.9L149.2,425.4L149.5,427.3L149.2,428.2L147.5,427.8Z","M0,95.5L2.6,95.8L5.8,93.7L8.1,93.2L12.3,93.9L10.1,92.2L9.9,91.3L10.2,89.6L10.6,88.7L11,88L11.7,86.8L10.8,85.9L8.7,86.4L7.9,85.7L8.6,84.4L8.9,81.1L9.6,79.4L10.7,78.5L13.2,77.2L14.2,75.6L14.2,74L14.7,72.8L15.5,71.8L16.3,70.6L16.1,70.1L16,69.6L16,69.3L16.2,68.2L16,67.7L15.8,67.4L15.8,66.7L16,66L16.1,65.7L16.3,65.7L17.3,65L19,64.6L19.3,64.2L19.5,63.9L19.9,63.5L20.3,63.5L21.1,63.8L21.7,64.6L22.1,65.8L23.1,69.3L23.1,70.2L22.9,70.8L22.6,71.4L22.2,72.8L22,72.9L22.2,72.8L24.8,73L25.3,73.3L25.9,74.2L26.3,75.4L26.3,76.8L26,78.3L25.4,81.3L25.1,82.8L25.5,83.5L25.6,84.1L25.4,85.1L25.1,85.7L24.8,86.3L24.7,87L24.7,87.8L25.7,85.4L26.3,84.1L26.6,82.5L26.8,79.4L27.2,77.5L27.5,76.6L28.2,76.2L28.5,77.4L28.6,79.1L28.6,80.9L28.7,82.3L29.4,83L30.1,83.6L30.7,84.5L30.9,85.1L31.3,85.9L31.6,86.1L31.9,84.9L31.9,83.8L31.6,83.3L31.3,82.9L31.1,82.1L31.8,80.9L33.4,80.6L36.2,80.8L37.4,81.4L39.4,83.9L41.8,85.1L42,85.1L42.2,84.4L42.1,83.9L41.9,83.6L41.7,83.4L41.4,83.2L40.6,81L39.9,80.5L31.5,76.2L30.6,74.8L30.1,74.4L29.9,73.9L29.8,72.9L29.8,71.8L29.8,71L29.4,70L29,69.5L28,68.9L26.7,68.8L25.9,68.3L25.7,67.4L25.8,66.4L26.3,65.7L26.7,65.3L27.1,65L26.7,62.9L27,61.8L27.9,61.3L30,61.2L32.4,60.1L39.6,59.9L39.9,60.5L39.8,61.9L39.7,62.7L39.4,63.5L39.1,64.1L38.8,64.5L39.3,64.4L39.9,64.6L40.4,65.2L40.7,66L40.8,66.6L40.6,68.2L40.7,68.8L41.1,70L43.4,72L42.9,73.9L43.2,74.8L44.5,76.1L46.3,78.8L47,79.5L53.5,81.1L54.4,83.2L53.8,85.2L53.1,86.1L50.7,87.1L49,86.3L48.5,86.4L47.6,87L46.9,87.4L46.8,88.1L47.1,88.7L47.3,89.2L47.6,89.1L48.7,88.1L49,87.8L49.7,87.1L50.2,88L50.1,89.2L49.2,90.1L49.6,90.7L50.8,92L51.2,92.2L52,92L53.1,91L53.6,90.5L54.6,90.8L56.6,92.9L57.7,92.3L57.1,91.1L56.5,90.2L56,89.1L56,87L56.1,86.1L56.4,85.6L56.7,84.9L56.8,83.8L56.6,83.1L56.2,81.5L53.9,77.8L53.1,77.2L52.3,77L47.7,77.2L46.5,76.3L46.3,75.7L45.7,73.5L45.6,73.2L45.7,72.7L45.8,72.1L45.7,71.6L45.5,71.3L44.6,70.9L44,70L43.5,68.7L43.4,66.8L44.1,64.8L45.1,63.5L46.4,62.5L50.1,61.2L50.6,61.4L51.4,62.9L51.8,63.6L52.2,64L52.6,64.2L52.4,63.1L52.2,62.1L51.9,61.3L52,59.9L49.3,59.9L47.8,60.5L46.1,60.8L45.4,61.6L44.8,62.2L44.1,61.7L43.5,60.6L43.2,59.5L43.3,54.4L48.6,47.8L49.5,43.9L50.2,43.2L50.9,43L52.4,42.8L53,42.6L54.2,41.1L54.7,40.5L56.3,40.2L61,41.2L62.2,41L64.8,39.6L70.7,38.9L72.1,39.9L71.8,41.1L71.5,41.7L69.9,44.1L70,44.4L70,45.8L69.6,47.2L68.9,48.9L68,50.2L67.5,50.9L67.9,52.6L68.5,53.6L68.7,54.7L68.1,57.5L67.5,59.1L65.1,63.8L64.8,64.7L64.4,65.6L64.2,66.9L64.1,68L64.2,68.9L64.4,70.2L64.5,71.3L64.3,71.8L63.3,72.1L62.1,73.1L61,74.7L60.1,76.4L65.6,72.8L66.1,71L66.9,68.6L67.5,66.4L67.1,64.9L69.3,58.7L69.2,58.5L69.1,58.2L69.1,57.9L69,57.6L69.6,57.6L70.9,57.6L74.9,58.8L76.8,60.6L78.9,61.7L80.6,61.2L79.5,61.1L78.1,60.7L76.8,59.8L75.7,58.6L74.9,57.8L73.7,57.4L72.8,56.5L72.6,54.3L72.6,53.5L72.4,52.2L72.2,51.4L72.3,50.8L72.5,48.6L73.1,47.6L73.9,46.7L74.5,45.8L74.6,43.9L75.2,43L76.5,42.2L77.2,41.3L78.6,38.2L79,37.4L79.6,37L79.6,37.8L79.3,39L78.4,41.3L77.6,44.2L78.9,43.9L79.9,41.9L81.9,37.1L83.4,34L84.7,30.1L85.1,29L85.6,28.4L85.6,29.4L85.5,29.8L85.5,30.3L85.2,32.6L85.1,34.1L85.3,34.7L85.8,35.4L85.9,36.2L86.2,36.2L86.4,34.3L86.5,30.1L86.8,29.5L87.9,28.2L89.1,26.2L89.8,26L90.4,26.8L93.1,33.9L93.2,35.1L93,36.1L92.6,37L92.1,38L91.9,39.1L91.8,41L91.6,41.8L91.3,42.4L90.9,43.1L90.4,44L90.2,45.1L90,46L89.7,47.1L89.4,48.2L89,48.9L88.2,52.5L88.2,53L88.2,54.1L88.4,54.7L89.6,56.7L89.8,57.5L89.8,58.6L89.7,59.7L89.5,60.8L89.3,61.7L88.9,62L87.7,62.2L86.3,62.9L85.6,64.1L86.6,65.6L85.9,66.2L85.5,66.9L85.2,68L84.8,69.4L85.1,71L84.6,72.5L83.7,73.2L83,72.4L82.4,75L81.7,77.5L80.8,79.1L78.9,80L76.8,82L74.9,82.8L74.2,83.7L74.3,84L74.6,84.7L74.8,85L72.3,88.2L71.4,89.9L72.4,90.6L73.2,90L74.3,88.6L75.4,87L76.1,85.4L77.1,84.3L82.6,80.2L83.9,80L84.3,79.6L87.4,72.8L88.2,71.6L90,69.4L90.8,68L91.2,65.7L91.4,64.9L91.7,64.2L92.2,63.4L92.6,63L93,63L93.4,63.7L93.8,64.4L95.2,66.4L97.4,68.8L102,70.3L102.5,71L102.9,71.8L103.4,72.1L103.9,71.7L102.7,70.2L99.8,68.4L98.8,66.4L98.2,63.7L98,62.8L97.3,61.8L94.7,60.2L93.3,58.5L93,57.5L93.4,56.6L94.8,53.9L95.5,51.4L95.6,49.1L95,47.3L94,46.6L94.1,45.8L95.1,45.4L99.4,45.5L104.1,43.2L104.8,42.3L105.5,40.8L105.7,39.5L105.4,38.4L105.1,37.1L104.9,36L106.1,35.8L113.7,30.6L115,30.4L114.9,31L111.2,34.2L108.9,37.4L108,38L108,38.6L108.6,39.2L109.3,39.2L109.9,39.4L110.2,40.9L109.9,40.8L109.6,41L109.5,41.4L109.2,42L110.7,44.5L111.5,45.1L112.6,44.2L112.2,43.6L111.2,42.5L111.1,41.6L111.8,41.5L112.7,41.1L113.5,40L113.3,38.4L114.1,38L117,37.3L117.5,38L117.2,39.2L115.7,41.9L115.1,43.2L115.8,43.1L116.9,42.5L117.8,41.6L118.5,40.3L118.6,39.2L118.5,34.4L122.2,34.7L121.6,33.4L120.6,32.6L119.6,32L118.7,31.9L119.4,28.2L120.5,25.8L121.8,24.1L123.3,23.3L125.2,23.6L130.2,27.8L130,29L130.3,30L131.4,31L130.4,33.5L131.2,34.9L132.3,36.3L133.5,37.1L135.8,38.1L140.1,43.7L140.8,45.4L141.1,47.3L141.5,48.2L144.4,50.9L143.8,51.5L143.2,51.5L142,50.8L142.7,51.8L143.6,52.5L144.6,52.5L145.5,52.1L145.9,51L145.7,50.4L144.7,49.1L144.8,47L143.4,45.1L140.5,42.5L141.3,42.2L143.3,43L143.9,42.1L143.8,40.8L143.1,39.8L141.7,39.3L141.3,38.8L141.3,37.4L141.5,35.8L141.4,34.5L141.2,33.3L141.2,32.6L141.8,30.9L141.8,30.6L141.6,30.1L141.6,29.7L141.9,29.1L142.3,28.9L143.6,29.2L144.4,29.1L144.9,29.1L145.2,29.6L145.2,30.2L144.7,31.9L145.5,33.5L146,31.8L146.1,28.7L146,26.2L146.5,26.2L147.5,25.7L148,25.7L148,25.1L142.8,26.4L140,26.3L138.1,23.8L139.5,22.3L144.1,22.3L144.8,22L145.3,21.4L146.4,19.9L147.5,18.9L147.9,18.1L148.1,16.7L145.5,18.1L145.1,18.3L144.4,19.5L143.4,19.7L139.7,18.8L139.4,19.1L138.9,20.4L138.5,20.6L135.8,21.4L134.8,21L133.2,18.1L132.6,17.7L129.4,18.1L128.5,17.4L128.1,16.6L127.4,13.7L127.4,12.6L128,11.7L128.9,11.1L129.5,10.4L125,11L123.7,10.6L123.1,10.2L122.7,9.7L122.4,9.1L122.1,8.3L121.7,7.4L120.8,6.7L120.7,6.6L121.6,5.1L122.8,3.9L124,3.2L125,3L127.3,1.6L128.3,1.5L128.1,3.2L128.2,4.3L129.5,7.2L129.7,6.5L129.7,6L129.6,5.7L129.7,4.9L129.8,4.3L130.2,3.4L130.5,2.7L130.6,1.5L130.7,0.4L130.7,0L133.1,0L133.1,0L133.1,0.1L133.8,1.7L134.4,2.6L135.9,3.3L136.7,3.8L139.1,8.1L139.3,8.9L139.3,9.8L139.6,11.1L139.9,11.8L141.2,13.7L141.4,12.5L141.4,11.7L141.3,10.9L141.2,10L141.2,9.6L141,9.6L140.9,9.3L141.1,8.7L141.3,8.1L141.6,7.9L141.9,8L142.2,8.1L141.5,7.3L140.2,6.3L139.7,5L139.8,3.4L140.3,2.3L143.1,0L145.9,0L145.9,0L145.8,0.2L145.5,1.3L146.3,1.2L147.8,0L149.4,0L149.4,0L149.4,0.6L149.1,5.1L149.3,6.2L150.1,6L150.5,5.1L150.6,4L150.4,1.6L154.4,0.9L155.6,1.6L155.8,3L155.2,4.6L154.3,6.1L153.7,6.8L154.1,8L154.2,9.4L154.3,11.1L154.5,12.7L154,13.6L153,14.2L152.5,15.1L153.7,15.7L157.9,14.8L161.5,17.2L162.7,17L162.1,15.8L161.1,15L155.5,12.8L155.8,11.7L156.9,8.3L157.5,5.5L157.4,5.2L158.4,4.4L159.4,4.4L160.6,4.4L161.9,5.1L163,6.6L163.5,6.8L163.8,6.5L164.2,6.4L164.5,6.8L164.3,8.2L164.5,8.6L166.8,8.2L175.9,10.1L176.2,11.1L175.9,11.9L172.1,17.6L171.4,18.1L170.4,18.3L168.1,19.6L162.2,20.9L159.9,20.1L158.5,20.3L157.1,22.2L153.6,24.1L154.1,24.6L155,24.5L155.9,24.1L157.1,22.8L165.1,21.8L167.4,20.2L172.2,19.5L175.9,15.9L177.2,15.8L176.6,19L176.4,20.2L176.3,21.9L176.4,23.4L176.5,24.8L176.8,26L177.1,26.7L177.8,26.6L178.9,26L179.8,25.7L180.2,26.5L180,28.6L179.8,29.8L179.9,30.8L180.7,32.1L180.2,32.8L179.8,33.3L179.3,33.7L178.9,33.9L179.7,34.8L180.9,34.3L185,30.5L185.4,30.4L186,30.2L186,30.6L186.2,31.2L186.5,31.7L186.7,32.2L186.6,32.6L185.6,34.3L185.6,34.6L186.3,34.8L189.3,32.1L190.8,31.6L191.1,30.9L191.4,29.7L192,29.2L192.7,28.8L193.2,28L191.7,27L185.6,26.3L184.8,25.6L182,21.3L182.6,20.8L183.7,20.7L184.2,20.4L184.7,19.8L185.2,19.5L187.9,19.3L188.6,18.6L189.3,17L188.7,16.2L186.9,15.2L186.1,14.4L187.1,13.6L189.5,13.3L190.2,12L187.3,12.1L185.7,11.5L184.7,9.8L185.7,9L189.2,8.7L190.2,8.4L192.4,8.4L192.9,8.2L193,7.6L193.8,7.6L192.9,6.7L191.9,6.5L186.3,7.3L187,6.1L189.8,4.2L195.2,3.3L196.6,2.1L193.5,2.6L193.6,1.8L194.6,0.1L193.9,0.1L192.5,0.8L192,0.6L192.3,0L243.6,0L243.6,0L243.4,0.4L243.4,1.5L243.9,2.1L244.5,1.6L245.2,0.7L246,0.1L246.5,0.9L246.6,2.3L246.4,3.1L241.8,8L240.8,8.5L240.4,8.8L240.1,9.4L239.7,9.9L239.6,10.2L239.3,10.2L239.3,10.7L239.3,11.3L239.2,11.6L239,12.4L238.8,13.2L238.8,13.8L239,15.2L238.7,15.8L238.1,16.9L238.1,17.7L237.9,22.1L238.6,24.2L239.8,25.6L240.8,25.6L240.8,23.1L240.4,22.3L240.1,21.5L240,20.6L240.1,19.2L240.7,18.4L242.8,17.3L242.6,17.9L242.1,19.8L242.6,19.8L243.2,19.5L243.7,19.4L244.1,19.8L243.1,20.3L242.6,20.8L242.3,21.9L242.7,22.3L242.9,23.1L243.3,23.9L244.1,24.4L244.7,24.1L246.2,23.3L246.9,23.2L247.7,22.2L248.4,20.4L249.6,15.8L250.1,14.7L250.7,14.1L251.2,13.6L251.9,13.7L252.4,13.2L253,12.3L253.4,11.2L253.7,10.1L254.1,8.7L256.3,6L257,4.1L256.3,2.9L253.3,1.6L253.9,0L253.9,0L339.4,0L339.4,0L339.3,1.4L339.1,4.2L339.2,7.7L340.1,13.6L340.2,16.3L339.9,18L339.4,19.2L339,20.1L337.9,22.5L337,23.5L336,24.1L335.2,24.2L336.9,24.9L338.8,23.1L340.4,19.9L341.4,16.2L341.6,14.4L341.3,13.3L340.9,12.2L340.5,10.5L340.5,9.5L340.7,7.8L340.5,7L340.4,6.4L340.1,4.2L340.3,2.6L340.7,0L427.7,0L427.7,0L426.2,1L414.2,3.4L413.3,4.4L413.4,6.4L412.7,7.8L409.8,8.8L409.2,9.6L408.7,10.9L408.8,12L409.7,12.5L408.9,14.8L407.9,16.1L402.6,18.9L401.8,19.6L401.8,20.2L402.3,20.6L403.1,20.7L388.2,19.5L373.2,18L373.4,18L364.2,15.6L355.1,13L353.8,13.7L353.3,15.1L358.3,14.3L357.7,16.1L356.4,17.5L355,18.5L353.9,18.9L354.6,20.1L355.7,20.7L357.9,20.8L359.1,19.5L359.6,19.4L361.1,20.5L361.5,20.6L361.6,21.2L358.7,21.2L358,22L364.1,22.8L366.3,24.3L370.9,23.9L370.7,24.9L370.5,25.2L371.7,25.1L372.4,25.3L372.7,25.7L372.5,26.2L370.8,27.7L371.8,28.4L377.6,27.3L379.1,28.3L388.7,31.1L388,31.5L385.4,34.4L384,35.6L382.7,37L381.3,38L380.7,39L380.5,39.6L380.4,40.1L380.4,40.4L380.2,41L379.8,41.4L379,41.9L380.7,42.1L381.3,41.6L382.4,39.2L383.6,37.1L384.3,36.6L384.7,36.5L385.2,36.7L385.6,36.9L386.1,37.4L386.5,37.7L387.3,37L388.5,37.6L389.9,36.2L390.9,36.8L390.6,38.1L390.9,38.8L391.2,39.6L391.1,40.7L392.3,43.2L391.8,44.1L391.3,46.5L390.1,47.5L388.6,49.5L388.6,50.3L388.6,51.1L388,51.3L387.6,52.1L387.3,53.2L387.1,54.3L386.4,54.8L385.1,55.2L384.5,55.7L385.6,55.7L385.4,56.9L384.6,58.7L384,60.2L385.1,59.5L385.6,58.8L386.5,56.9L389.9,52.9L391,52.4L394.3,51.8L396.9,52.3L397.2,52.3L399.8,49.3L400.9,48.4L401.9,48.8L401.4,49.8L400.8,52.1L400.2,53.2L398.8,54.2L398.3,55.2L398.5,56.8L398.9,55.2L399.6,54.3L401.2,53.4L402.5,51.6L402.7,51.8L403.5,53.8L404.1,54.7L406,56.4L406.4,56.2L406.5,55.6L406.2,55L405.5,54.1L404.1,51.2L403.5,50.1L404.2,49.6L406,49.3L406.6,48.5L406.6,47.3L406.1,46.5L405.3,45.8L404.8,44.9L404.9,43.7L404.8,41.5L404.7,39.5L404.6,38.6L407,38.4L408.5,37.7L408.9,37.8L409.7,39.3L409.6,40.1L408,41.5L409.1,42L411.4,41.1L412.2,41.8L412.5,42.4L412.6,43.2L412.6,44.1L412.7,44.9L413.1,47L413.1,47.1L413.5,51.2L413.6,54.5L413.1,56.6L411.3,57.2L412.2,57.7L414.4,56.9L414.8,56.6L414.9,55.6L414.8,53.1L414.6,52L414.5,51.4L415,51.1L415.1,50.6L415,50.1L415,49.6L414.8,48.6L414.5,47.8L414.3,47L414.6,46.1L414.1,44.4L415.1,43.5L422.1,43.9L422.9,44.8L422.4,45.3L422.3,46.3L422.5,47L423,47.3L423.4,47.1L423.9,46.6L424.9,45.3L425.1,45.3L426.6,43.7L427,47.5L428,49L428.3,50L428.6,51.6L428.7,52.5L428.8,53.3L429.5,54.5L430.4,55.9L431.1,63.1L431.1,64.6L430.4,67.8L429.1,69.5L426,70.4L418,69.6L416.9,68.9L410.4,62.3L408.2,60.8L406.7,60.6L405.3,60.9L404.6,61.4L404.9,62.2L405.7,62.7L407.7,63.6L408.1,64.3L408.5,66L408.7,68.2L408.6,69.8L408.2,71.1L407.7,71.9L406.8,72.6L406.6,73.2L406.4,74.7L406.3,75.9L406.4,77.2L406.4,78.1L406,79.3L402.3,83.9L401.3,85.9L400.7,86.7L399.2,87.4L394.4,87.9L393.6,88.4L391.6,91L389.8,92.1L384.2,92.7L382.4,93.8L381.1,96L380.9,97.5L380.7,100L380.4,100.8L380.4,101.6L380.5,102.4L380.4,103.3L380.2,104.1L379.7,105.6L379.5,106.5L379.1,109.8L378.8,111.3L378.2,112.9L376.8,115.6L375.1,117.9L373.3,119.1L371.4,119L370.3,119.2L369.7,119.9L365.6,115.2L365.2,114.3L365.1,112.7L365.4,105.8L365.5,103.7L365.8,102.5L377.2,87L380.5,78.8L375.2,67.6L373.1,60.4L372.5,59.5L361.8,54.9L351.1,50.1L349.8,49.7L348.6,48.7L347.8,47L347.6,43.7L341.4,41.2L340.7,40.5L334.4,30L332.5,26L331.6,24.3L330.5,24L328.2,25.5L324.2,24.8L322.6,25.5L321.3,27.4L321.1,29L317.3,31L315.3,33.8L314.9,34L314.3,34L313.9,34.3L313.5,35.1L313.8,35.4L314.2,35.9L314.5,36.2L313.2,38L306.5,40.6L305.9,40.6L303.6,38.8L302.7,38.8L301.8,39.1L299.9,37.7L299,37.4L296,38.4L293.9,37.8L288.4,38.8L287.4,39.4L286.7,41.2L285.7,42.8L285.4,43.5L285.7,45.3L284.8,47.2L281.6,50.9L280,54.3L278.6,56.8L278.2,57.6L277.8,58.3L277.2,58.7L272.5,60.1L271.5,60.7L270.7,62.1L270.4,63.2L270.1,64.2L270.3,65.1L270.7,65.9L271.5,68.1L271.5,70.3L271,72.3L270.1,73.9L268.2,75.3L267.7,76.4L267.8,77L268.1,77.5L268.4,78.1L267.9,79.2L267.7,80.3L267.7,82.5L267.4,83.3L267,83.8L266.3,86L267.2,89.6L267.4,90.4L264.3,95.7L264,97.1L262.8,104.5L262.6,107L263.1,109.5L263.3,110L263.7,111.6L263.8,112.4L263.8,113L263.7,113.5L263.6,113.8L263.4,114.1L263.4,117.2L263.3,117.9L263.1,118.8L263.1,119.3L263.5,120.8L263.6,121.2L263.5,121.6L263.6,121.9L263.9,122.4L264.5,123.2L264.7,123.7L264.8,124.3L264.6,125.4L263.1,126.8L262.8,128.1L262.7,129.3L262.3,130.3L261.2,131.8L260.6,132.9L260.2,134.3L259.7,135.7L258.9,136.5L258,136.7L254.1,135.2L252.4,135.5L250.8,136.5L244.6,142L243.2,144.7L242.7,146.6L242.5,148.6L242.5,153L242.2,153.6L242.1,154.1L242.1,154.7L242.4,155.5L242.1,157.4L241.6,158.3L240.8,158.6L240,158.9L237.7,160.5L236.9,160.3L235.8,161.2L235.4,162.8L235,164.5L234.2,165.8L233.2,165.9L232.6,165.1L231.7,162.3L229.2,158.1L226.1,155.4L220.1,153.2L215,151.2L210.3,147.7L209.6,146.8L208.5,144.7L201.8,140.7L199.2,140.6L197,142.1L196.2,146.2L194.9,149.9L191.8,151.7L186.3,152.4L176.4,158.3L175.7,157.9L173.3,153.2L172.4,152.3L170.7,151.6L164.9,152.4L156.6,147.4L155.7,147L154.7,147.1L150.9,148.3L150.2,148.1L149.9,146.2L149.6,137.8L149.1,136.9L146.6,134.3L144.3,129.5L144,128.5L143.6,126.1L143.2,125L139,119.4L136.8,114.4L128.7,95.4L127.9,94.5L117.4,91.9L109.9,96.2L109.3,96.9L108.6,98.3L107.4,101.3L110.7,110.4L108.5,114.3L107.6,114.9L106.3,114.3L97.3,107.7L96.3,108.1L92.7,113.6L92.7,113.6L84,113.5L75.2,113.3L82.3,124.5L82.4,126.1L81.9,134.3L81.6,136L80.9,137.8L76.6,147.4L73.2,151.9L66.3,157.4L75.3,164.3L66.3,174L64.8,175.1L63.5,175L48.8,166.7L34.6,157.4L23,157L21.1,156.3L16.3,150L15,148.7L6.2,151L5.6,151L5.1,151.6L4.9,152.7L3.1,161L2.7,163.8L2.2,182.3L1,186L0,187.5L0,95.5ZM0,58.7L0.5,59L1.3,59.1L1.8,58.1L1.8,57.3L1.2,56.9L1.2,56.1L1.3,55.1L1.4,53.4L1.5,52.6L1.4,52L1.4,51.5L1.4,51.2L1.8,50.6L2.3,50.4L2.7,50.7L2.9,51.6L3.1,52.2L3.6,55.5L4,56.5L4.7,55.9L6,53.6L6.7,52.5L7.3,52.1L8,52.7L8.3,54L8.5,57.5L8,58.3L7.2,59.3L6.8,59.8L6.4,60.4L6.4,60.9L6.2,61.4L6,62.3L5.4,63.8L5.2,64.6L5.3,65.4L5.7,65.7L6.3,65.2L7.1,63.4L7.6,61.9L7.9,61L8.9,60.5L9.6,59.3L10,59L10.8,59.4L13,61.9L12.5,62.8L11.9,63.2L10.7,62.9L10.9,64.7L10.3,65.9L8.7,67.7L9.9,69.3L10.4,69.7L11.1,68.7L11,67.5L11.5,66.8L12.4,66.8L13,67.3L13,67.3L13.1,68.6L12.7,72.1L12.9,72.9L13.2,73.2L13.1,74L12.8,74.8L12.4,75.3L11.9,75.6L10.2,75.1L8.1,75.7L6.9,76.5L6.2,77.7L6.6,78.4L6.6,79L6.5,80L6.4,81.1L6.7,81.6L7.3,82.6L7.5,83.1L6.9,84.1L6,84.3L4.5,84L4.4,84.6L5.4,85.5L6,86.2L6.1,87L6.2,88.3L6.9,88.7L7.6,88.7L8.2,88.9L7.3,90.2L6.2,90.7L1.6,91L0,90.7L0,58.7ZM47.3,35L47.8,36.3L48.5,37.5L48.8,38.9L48.5,41.1L47.6,42.9L45.4,43.6L43.1,46.7L41.9,47.2L40.6,47.2L39.5,47.8L39.1,48.2L38.6,49.1L38.2,50.2L38,51L38.1,51.9L38.6,52.3L39.2,52.7L39.5,53.4L39.7,55.1L39.1,56.3L37.1,57.8L35.9,58.3L32.6,56.6L32.2,56.9L30.9,58L30.2,58.3L27.8,58L20.3,59.6L18.1,59.3L17.4,58.2L16.4,55.9L15.8,55.2L13.9,54.9L13.1,54.3L12.4,52.8L12.9,52.1L13.7,50.9L14.1,50.5L14.1,50L14.1,49.2L14.4,49.3L14.6,49.5L15.2,50.2L15.6,50.4L16,50.1L16.7,49.6L17.5,49.2L20.6,50.4L21.4,51.1L21.5,51.6L21.9,52.8L21.7,52.8L21.6,53.2L21.6,53.7L21.9,54.1L22.2,53.8L22.9,52.6L23.3,52.3L23.3,51.7L24,51.8L24.4,51.5L24.8,50.9L25.7,50.6L26.1,50L23.6,50.5L22.9,50.2L22.5,49.7L20,42.9L20.9,42.5L24.1,43.4L24,43.4L25.3,43.9L29.3,44L33.4,46L34.2,45.3L33,44.3L26.7,42.6L25.5,41.5L25.5,39.6L25.1,38.1L25.5,36.8L26.5,35.8L27.3,35.4L27.7,35.6L27.8,36.1L28.3,37.1L28.8,37.7L29.8,37.5L30.2,37.7L30.2,38.5L30,39.4L30,40.2L30.6,40.2L31,40L31.3,39.2L32,37.6L32.8,36.2L33.8,35.7L36,35.8L35.1,40.3L35.3,44.3L36.4,47L38.2,47L37.7,46.3L37.6,45.2L37.8,44L38.8,41.1L40.2,38.2L39.8,37.1L37.5,33.2L37.2,32L37.1,30.8L37.7,28.5L38.9,28.9L40.3,30.2L41.4,30L41,29.5L41.6,28.8L42.3,29L42.8,29.8L43.2,31L42.8,31.3L42.7,31.7L42.3,32.8L43,32.9L44.3,32.7L46.9,34.4ZM133.3,31.8L133.9,31.3L134.5,31.2L135.1,31.4L135.5,31.9L135.2,32.9L134.9,33.2L134.5,33.4L134.1,33.7L133.8,33.5L133.6,33.1L133.4,32.6ZM77.8,20.5L78.5,20L79.5,19.8L80.2,20.2L80.9,20.9L79.3,21.5L78.3,21.2L78.1,20.9ZM111.2,24.9L115.7,24.6L111.7,27L111.5,28.7L110.2,30.1L108.6,30.8L107,30.7L106,29.6L105.1,27.4L104.9,25.9L104.9,24.8L105.9,22.5L106.6,21.3L107.3,20.9L108.4,20.9L109.2,21.5L110.5,24.3ZM114.3,19.8L114.3,21.8L113.3,22.8L111.2,23L111.7,22.1L112.7,20.6L113.6,19.6ZM68.9,19.6L69.5,19.4L70.1,19.4L70.5,19.8L70.8,20.8L70.6,22.8L69.3,24.1L65.7,25.5L65.5,25.9L65.1,27L65,27.3L64.7,28.4L64.7,28.8L64.4,29.4L63.8,29.8L63.5,30.3L63,31.2L61.6,32.8L61.2,33.4L60.9,34.1L60.7,34.9L60.4,35.5L59.2,36.8L57.8,37.6L50.8,39.2L49.9,37.8L49.2,34.9L48.8,34.2L43.2,27.5L40.8,26.1L39.9,24.4L40,22.9L41.4,22.4L44.3,24L44.9,23.8L46,22.3L46.8,21.6L45,21.1L44,20.2L43.8,18.6L44.4,17.1L45.5,16.4L47.4,16L48.9,16.8L49.4,16.7L50.1,16L50.6,15.7L50.9,16.1L51,16.7L51.1,17.4L51.1,17.7L51.7,17.9L53.2,16.7L52.9,15.7L52.3,14.7L51.9,13.7L52,12.1L52.6,12.8L53.2,13L53.7,12.8L56.8,10.7L57.3,11.3L57.2,12L56.9,13.1L57.2,13.9L57.9,13.7L58.7,12.8L59.5,12.1L60.2,13L59.6,14L59,15.7L58.7,17.3L60.1,18.7L61.5,21.2L62.3,21.6L62.6,19.3L63.4,17.6L64.4,16.5L66.7,15.6L67.3,15.8L67.8,16.7L67.9,18L67.7,18.9L67.4,19.8L67.3,20.7L67.5,21.7L67.9,21.4L68.5,20.4ZM106.6,16.3L106.6,17.7L106.6,18.5L106.3,18.9L105.7,19.4L105,19.5L104.2,18.9L103.7,18.2L103.2,17.9L102.8,18.2L102.1,19.4L101.8,19.7L101.4,19.8L100.7,20.2L100.2,20.1L99.8,19.9L99.9,19.5L100.1,18.9L100.3,18.3L100.6,16.2L100.7,15.3L100.5,14.5L100,14L99.6,14.4L99.3,15.5L99.4,16.9L97.9,16.8L97.9,18.2L97.4,18.6L96.2,17.9L95.6,17.8L95.1,17.5L94.6,16.8L94.2,15.8L94.1,14.7L94,14.1L94.2,13.4L94.3,12.2L94.8,9.7L95.4,7.9L96.3,6.5L97.1,5.8L99.2,5.2L99.8,4.8L99.8,4.5L100,3.9L100,3.2L100.2,2.8L100.5,2.5L101.4,2.3L106,2.7L107.3,3.4L108.2,4.4L108.6,5.4L108.5,6.8L107.8,9L107,10.6L106.7,11.6L106.3,13.3L106.3,13.6L106.1,14L106.2,14.5L106.5,16.1ZM74.4,0L74.6,0.3L75.1,1L75.6,1.2L76.2,2.4L76.3,4.4L76.6,6.2L77.5,5.8L77.9,4.9L78.6,2.6L78.8,2L79.4,2.4L80.8,4.3L80.3,6L80.4,7.1L80.9,8.1L81.6,8.8L81.6,8.8L85.4,11.7L86.8,11.8L86.7,12.4L83.4,13.2L82.4,14.1L82.7,14.9L82.5,15.6L82,16.1L80.7,16.9L75.7,16.4L74.4,15.5L73.6,13.8L73.7,13L74,10.2L74.1,9.1L73.9,8.6L73.7,8.3L73.6,7.6L73.1,4.7L72.8,4.1L72.3,3.1L72.2,2.4L71.3,0.9L69.8,0L74.4,0ZM175.4,0L175.3,0.3L175,1.1L175,1.1L175.6,1.6L176.3,1.8L177,2.3L177.6,3.4L177.9,4.9L177.7,6L177.2,6.4L168.8,5.2L159.9,1.5L159.1,0L175.4,0ZM189,0L189.4,0.5L184,3.6L182.1,4L180.5,3.4L179.9,1.7L180.2,0L189,0ZM102.2,34.8L102,35.3L101.9,35.9L102,37.5L102.3,39.7L101.7,41.6L100.2,42.7L98.3,43.3L96.7,42.5L96.1,41.4L96,40.6L96,38.9L96.4,37.6L97.1,35.8L97.4,35L97.6,34.3L97.7,33.8L98.2,33.4L99,33.1L102.7,33L103,33.5L102.9,34.1L102.7,34.4L102.5,34.5ZM400.3,43.3L402.7,42.8L403.1,43.4L402.5,44.5L401.6,45.2L399,46.3L397.6,48L396.8,48.5L396.2,48.3L395.5,47.4L394.8,46.9L394.4,47.4L394.9,48.5L394.5,49.5L393.5,50.8L390.8,50.2L391.3,47.8L393.3,44.7L394.1,43L393.3,40.6L393.4,38.2L394.1,36.4L395.2,35.9L398.2,36.8L399,37.5L399.1,38.1L399.2,39.4L399.4,40.2L399.5,40.5L400.4,41.2L400.3,41.7L400.3,42.8ZM74.9,21.7L75.5,22.4L76,24.5L75.1,26.6L73.5,28.8L72.1,31.7L70.6,34L69.2,34.8L62.9,35.7L61.3,35.4L61.7,33.7L64.3,30.7L65.2,28.4L65.7,27.8L67.4,27.2L70.8,24.9L71.9,23.6L72.8,22.1L73.7,21.2L74.6,21.5ZM39,15.3L38.8,14.7L38.9,13.4L39.6,11.9L40.5,10.9L41,10.3L40.9,10L41.1,9.2L40.9,8.6L41,7.6L41.6,7.4L42.6,7.8L43.3,8.9L43.6,10.5L43.5,12.2L43.6,12.9L44.1,12.4L44.6,11.7L46.9,8.8L47.4,9L47.7,9.8L49.1,11.1L49.1,12.2L48.6,13L47.8,14L46.8,14.5L44.4,15L41.9,16.5L40.6,18L40.1,18.9L40,19.1L39.8,19.2L39.5,19.3L39.2,19L38.8,18L38.9,16.7L39.5,15.8L39.6,15.5ZM109.7,17.7L108.6,18.5L107.5,18.1L107,17.4L106.9,16.2L106.9,13.8L107.5,11.8L108.4,10.9L109.1,11.5L110.6,15.1L110.5,16.3ZM67.1,12.3L65.6,12.2L63.4,11L61.7,9.8L61.3,9.3L61,8.5L61.4,7.3L62.3,6.1L63.8,5.5L64.8,6.2L67.9,9.9L68.3,10.7L68.1,11.7L67.5,12.2ZM58.6,0L58.5,0.3L59,1.3L59,1.3L59,2.1L59,2.8L58.9,3.9L58.1,5.2L57.9,5.6L57.8,6.1L57.8,6.6L57.9,6.9L57.7,7.4L55.9,9.1L54.7,9.4L53.7,8.6L51.7,6.2L51,5.6L50.6,5L50.9,4.5L52.4,3.6L53,3.5L53.3,4L53.6,4.8L54,4.9L54.2,2.2L54.8,1.7L55.5,1.4L55.7,1L55.1,0.3L55,0L58.6,0ZM138.8,0L138.6,0.5L138.1,1.7L137.4,2.5L136.9,2.9L136.5,2.7L136.1,1.9L135.9,0.6L135.9,0L138.8,0Z","M368.9,1000L368.9,999.5L367.9,995.3L366.1,992.1L365.2,990.1L364.8,988L365,986.9L365.4,984.4L365.4,983L367.6,979.9L368.9,978.9L370.8,979.5L372.6,981L373.8,982.6L374.5,984.7L374.9,987.1L375.7,988.8L381,990.8L382.9,990.9L384.3,989.3L384.7,986.9L384.8,984.4L384.5,979.4L384.9,977.1L385.8,975.1L386.9,973.5L388.1,972.6L388.9,972.4L389.8,972.7L390.6,973.2L392.1,975L393.8,975.4L395.1,976.1L396.2,976.4L396.7,976.7L396.9,977.2L397.4,978.2L397.6,978.5L398.6,979.1L399.3,978.8L400.8,977.8L401.6,977.7L403,978.6L403.8,978.9L404.5,978.6L406.3,976L406.7,975.8L407.9,976.2L408.4,975.9L409.7,974.9L410.1,974.9L410.4,974.4L412,971.9L413,969.2L412.8,967.8L410.2,965.3L411.5,965.4L411.8,965.2L412.9,963.9L415.1,960.3L416.4,959L418.4,958.1L423.3,958.4L434.3,960.5L448.5,962.4L451.4,964.2L463.5,967.9L465.6,967.9L466.9,966.7L467.9,964.2L468.1,961.8L467.2,960.9L467.6,959.5L468.4,958.6L468.9,957.8L468.3,956.4L467,955.6L457.3,955.1L454.7,953.6L453.8,950.2L453.5,950.3L452.8,949.5L452,948.5L451.6,947.2L451.7,946L452,945.2L451.9,944.1L451.2,942.7L449.4,941.2L442.4,938.5L434.3,938.8L431.2,941.1L429.4,942L421.9,941.7L414.4,942L412.4,941.4L410.7,940.4L409.3,938.6L407.3,934.3L406,932.9L404.5,932.3L403.2,931.6L402.2,929.6L401.6,927.3L400.9,925.6L400,924.8L399.9,925.6L400,926.7L399.6,927.4L397.8,927.4L396.7,927.2L396,926.6L395.3,925.7L392.2,924.5L391.7,923.9L391.2,923.3L386.7,914.2L383.6,909.6L382.8,907.7L383.5,907.3L384.5,907.1L385.3,907.2L386,907.6L386.3,908.4L386.6,910.1L386.9,911L387.8,912.1L391.3,914L393.2,916.3L394.4,916.9L395.2,916.4L395.5,914.8L394.9,912.8L394.3,911.2L393.1,909.7L393.1,907.8L393,905.6L392.7,904.2L393,902.3L394,902.1L393.4,900.9L392.2,898.4L391.8,897.2L392.2,896.1L393.2,896.2L394.2,896.8L394.9,897.1L395.8,894.8L395.2,892.2L393.7,890.7L392.1,891.7L391.3,892.8L389.9,894.4L389.1,895.7L388.6,896L386.2,896L385.5,896.3L384.7,897.1L384.1,897.5L381.8,897.4L380.7,897.9L380.4,899.8L380.2,901.9L379.2,901.9L378.2,901.6L377.4,902.3L377.7,902.7L378.1,903.2L378.3,904L378.4,904.8L377.9,904.3L377.3,904L376.6,904L376.1,904.1L375.8,904.4L375.6,904.7L375.5,905L374.5,906.2L373.6,908.1L372.7,909.2L372.5,909.4L371.5,909.2L370.5,909L370,908.8L369.7,909.1L369.7,909.8L369.6,910.4L369.1,910.7L368.6,910.6L367.8,910.3L367.3,910.2L366.5,910.4L365.2,911.3L364.5,911.5L358.4,911.4L356.9,910.3L356.5,907.8L355.7,908.8L355.1,910.4L354.5,911.6L353.5,911.2L353.6,910.7L354.1,909.3L357.7,904.5L361.7,900.1L362.6,898.7L368.9,889.8L373.2,886.6L377.2,880.1L383.5,873L385.4,871.3L389.4,870.1L391.1,867.2L391.7,865.3L392.6,863.8L395.2,860.6L396.4,858.2L397.2,857.2L399.7,855.7L402.8,852.2L405.1,850.2L411.5,845.7L414.6,842.5L417.1,838.2L417.7,836.9L418.1,835.8L419.3,833.7L425.5,826.3L426.2,824.3L426.9,821.9L427.6,820.5L428.5,819.5L431.3,818.1L432.5,816.9L438.5,808.9L439.3,807.2L440.1,804L441,802.4L446.6,795.8L453.2,784L460.8,770.3L466.4,762.8L471.4,754.6L472.4,751.5L473,750.7L473.7,750L475.2,748.8L478.8,744.6L483.5,740.6L484.2,739.6L484.7,738.5L485.6,735.3L486.1,734.3L491.7,726.8L492.4,724.7L492.7,723.5L493.3,722.7L495.5,721.1L496.3,719.9L496.9,717.8L497.5,713.4L498.2,711.1L499.8,707.8L500.3,705.7L501.7,696.8L502.6,692.7L504,689.2L507.1,681.5L505.5,680.2L504.7,678.1L503.9,675.9L502.7,674.3L502.2,673.9L501,673L498,668.8L496.6,667.7L493.9,665.9L492.7,664.4L492,663L491.4,661.2L491.1,659.3L490.8,657.6L490.3,655.8L489.3,654.3L488.1,653.1L479.3,648L472.2,640.3L457.7,633.3L456.6,632.5L455.6,630.8L452.8,627.1L446.8,622.9L436.1,611.2L435,608.9L435.7,608.2L437.9,606.6L443.9,603.4L446.3,599.8L448.4,593.5L455.1,584.2L456.7,581.3L457.7,578.4L457.7,575.2L456.4,571.4L455.6,569.7L455,568.1L454.9,566.6L455.5,564.8L455.7,562.7L454.7,561.6L453.3,560.7L451,560.2L449.9,559.1L448.9,557.4L447.6,555.8L445.4,554.3L438.9,552.6L436.1,551L434.2,549.6L433.4,547.9L433.5,545.3L434.2,542.9L434.4,540.7L433,539.1L431,538L431.1,537.3L431,537.2L430.5,536.9L430.5,536.7L430.5,536.4L430.5,536.1L430.5,535.9L430.1,535L429.9,534.2L429.8,532.5L429.7,532.4L429.4,532.2L429.2,532.1L429.3,531.4L429.6,531.1L436.3,527.2L437.1,526.2L437.8,524.6L438,522.7L437.1,521L435.5,519.2L435,518.6L434.5,517.6L434.3,517.1L434.4,516.5L434.5,515.4L434.6,514.4L434.7,513.8L434.6,513.2L433.9,512.4L432.2,511.7L425,512.2L421.1,511.3L417.6,507.6L414.6,501.3L412.3,493.6L412.5,489.6L413.5,487.1L415,485.4L421,483.6L421.9,482.2L421.9,480.9L421.5,480.6L420.8,480.5L420.2,479.8L420.3,478.8L420.5,478.2L420.9,477.5L421.3,476.9L420.8,473.3L418.2,472.3L412.7,472.8L410.8,471L412,467.8L415.7,461.9L416,458.6L414.9,450.3L415.1,446.8L415.2,446.4L415.7,445.1L418.5,441.1L419,439.8L417.6,438L414.6,436L413.4,434.2L415.6,432.3L424.7,428.9L427.1,430.4L428.4,430.8L428.9,429.8L428.9,427.7L428.6,425.5L427,417L426.6,415.3L424.9,411.5L423.4,406.8L422.9,405.4L421.2,401.6L420.8,399.9L419.3,392.9L418.2,389.2L417.1,386.9L413.7,382.7L407.9,373.2L405.4,367.8L404.3,364.9L403.5,361.8L403.2,359.9L402.5,356L402.1,354.4L397.5,347.6L397,346.9L396.8,345.9L396.8,345L396.6,344.2L395.5,342.4L395.4,342.2L393.6,337.3L384.4,323.1L382.6,316.8L384.1,308.8L394.7,285.8L396.5,283.5L396.8,282.8L397,282.2L397.3,280.5L397.6,279.5L410.6,259.2L411.1,257.4L411.9,253.1L411.9,252L411.8,245.9L412,244.8L412.2,243.8L412.8,242.5L401.8,233.3L399.5,230.5L392.9,218.1L391.3,215.3L388.1,209.4L387,208L385.9,207.2L375.8,203.4L365.6,199.6L364.4,198.8L363.4,196.9L356.1,173.2L355.3,170.5L354.7,168.4L354.7,166.9L355.1,165.8L363,148.2L364,145.2L365.4,138L362.8,135.3L360.1,135L353.4,135.7L352.8,135.3L352.2,134.5L352.1,132.8L353.6,132.6L361.9,125.8L365.9,124.2L369.7,119.9L370.3,119.2L371.4,119L373.3,119.1L375.1,117.9L376.8,115.6L378.2,112.9L378.8,111.3L379.1,109.8L379.5,106.5L379.7,105.6L380.2,104.1L380.4,103.3L380.5,102.4L380.4,101.6L380.4,100.8L380.7,100L380.9,97.5L381.1,96L382.4,93.8L384.2,92.7L389.8,92.1L391.6,91L393.6,88.4L394.4,87.9L399.2,87.4L400.7,86.7L401.3,85.9L402.3,83.9L406,79.3L406.4,78.1L406.4,77.2L406.3,75.9L406.4,74.7L406.6,73.2L406.8,72.6L407.7,71.9L408.2,71.1L408.6,69.8L408.7,68.2L408.5,66L408.1,64.3L407.7,63.6L405.7,62.7L404.9,62.2L404.6,61.4L405.3,60.9L406.7,60.6L408.2,60.8L410.4,62.3L416.9,68.9L418,69.6L426,70.4L429.1,69.5L430.4,67.8L431.1,64.6L431.1,63.1L430.4,55.9L429.5,54.5L428.8,53.3L428.7,52.5L428.6,51.6L428.3,50L428,49L427,47.5L426.6,43.7L432.9,45.9L436.3,45.8L437.4,46.1L438.5,47.3L439,47.4L439.3,47.2L440.1,46.7L440.4,46.5L441.2,46.8L442,47.5L443.6,49.2L444.3,49.6L445,49.9L445.6,50.6L445.6,52.5L445.6,53.2L445.4,53.8L445.1,54.3L444.9,54.5L444.7,54.8L444.6,55.5L444.7,56.1L444.6,56.7L444.2,57.9L442.8,60.5L443.7,60.1L444.6,58.9L447.2,53L447.9,52L449.4,52.8L449.7,52.3L450,51.8L450.4,51.5L458.8,51.9L458.2,50.4L457.3,49.7L455.5,48.8L454.8,47.7L454.7,47.1L455.4,44.5L454.9,42.8L454.4,41.2L454.3,39.4L454.7,37.6L455.5,36.8L458.4,36.5L459.2,36.9L460.5,38.5L462.5,39.6L464.8,42.5L465.8,42.9L465.9,42.7L466.1,42.2L466.4,41.7L467.1,41.5L467,41.2L467,40.6L466.9,39.9L466.6,39.3L465,37L463.1,35.1L462.5,34.2L462.5,33.7L462.3,32.2L462.3,31.7L462,31.4L460.1,29.6L459.8,28.6L460,27.2L460.4,25.9L461.1,25.4L461.8,25.3L464,25.7L470.7,32.4L471.7,33.1L474.5,32.5L475.8,32.9L478.9,34.7L480.2,36.3L479.7,37.4L479.9,38.3L480.5,39L484,40.5L487.1,39.4L493.4,39.8L496.4,41.3L498,42.9L498.5,43L499,42.3L499.5,41.9L500.1,42.3L500.8,43.7L500.7,44L500.7,47.2L500.7,47.8L500.6,48.4L500.8,49.1L501,49.7L501,50L501,50.6L500.8,51.1L500,52.8L498.8,54.4L493.9,58.2L481.5,54.9L479.3,53.5L478.7,53.6L477.2,54.5L472.3,53.8L471.3,54L470.5,53.9L470.2,53.3L470.2,52.7L470.2,52.2L470.4,51.9L470.5,51.4L470.4,50.2L470.4,49.2L470.3,48.3L470.1,47L469.5,45.8L468.9,45.1L468.3,44.7L467.8,45.1L467.7,45.7L467.9,46.6L468.3,47.9L468.4,49.1L468.3,52.3L467,53.8L464,54.6L465.1,55.3L466.1,55.5L467.1,56L467.5,57.6L467.3,59L466.7,60.2L466.4,61.3L466.5,62.7L468.1,60.2L469.9,59.2L471.9,59.6L474,60.7L475.1,60.9L478.3,59.6L478.6,59.7L479.3,60L479.7,60.4L480,61.3L479.8,61.8L479.1,63.3L478.9,64.1L479.8,64L482.7,65.5L482.2,66.8L481.5,67L480.8,66.9L480.1,67.2L479.7,68L479.1,70L478.7,70.5L477.4,71.3L474.9,73.9L473.4,74.2L474.9,75.1L476.6,74.2L479.5,71L479.8,70.8L480.2,71L480.5,70.6L480.8,69.9L481.2,68.3L481.4,68L481.8,67.6L482.7,68L483.5,68.1L483.8,68.1L483.9,67.7L483.8,67.4L483.8,66.3L483.8,66.2L484.5,66.4L485.8,68.1L486.3,68.3L487.4,66.9L488.1,66.3L488.8,66.2L492.3,67.1L494.1,66.6L495.1,66.6L495.9,67.3L493.8,69.8L492.8,71.3L492.4,74.1L495.8,69.3L498.8,67.6L502,67.3L495.9,78.3L495.4,81.5L495,82.8L494.7,84.1L494.9,84.4L495.3,84.3L495.6,84.1L496.2,83.3L496.5,83.3L496.8,83.2L497.2,83.2L497.3,83.2L497.5,82.8L497.7,81.8L498.1,79.6L498.7,76.8L499.2,75.8L499.7,75.1L509.1,69.4L509.7,68.6L510.1,68.5L510.9,69.7L511.4,70L511.9,69.7L513.2,68.5L514,68.5L515.8,69.7L516.8,69.9L516.4,72.4L515.5,73.3L514.4,74L513.8,75.5L514.5,75.4L516.4,74.6L515.7,76.7L513.9,79.8L513.3,81.6L512.4,82.8L509.7,83.6L509,85.8L509.8,85.7L510.4,85.3L511.1,84.7L511.3,84.2L514.2,83.1L515.8,83.2L516.9,84.8L514.2,87L512.7,87.4L512.1,87.9L511.5,89.3L513.9,88.3L515.2,88.8L515.4,90.7L516.4,90.3L517.5,89.2L518.6,88.7L519.9,90.1L519.1,92.5L515.6,96.1L513.4,99.3L512.7,100L510.8,100.6L508.5,102.1L506.8,102.6L505.4,103.6L504.5,106.1L504.4,108L504.5,110.8L505,113.8L505.6,115.6L505.8,113.5L505.4,108.2L505.8,105.9L507.1,104.2L510.9,103.6L513.8,101.3L515.7,101.1L517.3,100.3L517.7,97.9L517.8,96.7L518.2,95.7L520.8,92.6L520.8,91.9L521,91L520.9,89.5L520.2,86.9L520.3,86.6L520.4,86L520.5,85.6L520.3,85.2L520.1,84.6L520,84.1L519.9,84.4L519.6,82.9L519.6,82.3L519.7,81.1L520.2,79.6L521,78.8L524.3,77.6L524.7,78L525,78.7L525,79.5L524.9,80L524.6,80.5L525.2,80.3L526.3,79.2L526.9,79.1L527.5,79.5L528.2,79.7L529,79.8L529.5,79.3L529.2,78.8L528.9,78.1L528.5,76.9L537.9,76.9L547.3,76.9L547.3,78.6L548.5,79.4L551.8,80.2L553.1,79.7L553.9,79.9L555.5,81.3L556,81.5L560,81.7L560,321L560,321L560,321.1L558.9,321.1L558.1,319.7L556.7,316.1L555.6,314.8L553.4,313.3L552.3,312.2L551.7,311.7L550.7,312.2L550.3,311.8L549.8,311.1L548.7,309.6L548.6,310.8L548.8,311.7L549.5,313.3L547.8,312.3L546.9,311.3L546.2,310L546.3,312.6L547.7,314.5L550.8,317.2L549.8,316.6L547.7,315L546.7,314.5L547.1,315.4L547.8,316.3L548.2,317L548.8,317.4L548.9,318L548.1,318L546.4,316.3L545.6,315.9L546.3,317.1L547.7,318.3L548.5,319.3L547.1,319.8L545.8,319.5L530.5,309.3L520,299.4L518.9,298.1L518.2,296.4L517.7,294.6L517.6,292.8L518,291.4L519.2,290.3L522,289.5L523.2,288.3L521.8,287.6L517.5,288.9L516.2,288.9L514.8,288.4L510.8,285.7L504.3,286.2L503.5,286L501.9,284.4L501.5,284.1L499.5,284.5L498.5,284.9L497.5,285.8L496.9,286L494.6,285.5L490.5,287L489.4,286.9L485.7,285.2L484.4,285L483.2,285.5L482.4,286.6L485.1,286.4L485.1,287L484.9,289.1L491.4,288.9L495.3,287.1L496.3,287.2L497.4,287.9L499.3,290.2L500.8,291.3L501.5,292.5L500.8,292.1L500.1,292L498.9,292.1L500,293.6L501.2,293.8L502.5,293.7L503.8,293.8L507,295.7L508.2,297L509,298.3L509.4,299.3L509.3,300.5L508.8,302.3L508,303.2L504.9,302.9L503.7,303.2L504.7,303.9L506.8,303.6L507.7,304.8L507.3,305.3L507,305.4L507.3,306.9L506.9,307.9L505.4,308.8L505.4,309.5L509.4,309.1L510,309.1L512,311.3L514.4,312.6L515.3,313.8L515.1,315.6L516.7,316.7L523.6,317.2L524.2,317.7L524.7,318.3L525.3,319.8L525.6,320.7L525.2,321.3L521.2,321.7L519.6,321.4L527.6,325.3L535.2,324.2L540.3,327.1L540.9,328L540.9,329.4L539.7,329.4L537.3,328.4L534.6,327.9L533.4,328.4L533,330.2L532.8,332.1L531.9,333.5L530.9,334.2L530,334.2L528.5,333.5L527.2,333.5L524.6,334.3L526.2,336.3L533.6,335.3L533.1,334.6L533.4,333.6L534,333.2L536.7,333.1L537,332.9L537.6,332.2L537.5,332L537.4,331.6L537.4,331.1L537.6,330.9L538.8,330.8L545.2,332.4L546.3,334.2L547,335.4L547.2,335.7L547.7,336.1L549.5,336.8L549.9,337.2L548.7,338.6L536.8,334.7L535.5,335.8L535.7,335.6L536.2,335.8L536.5,336.3L536.8,336.9L536.2,336.9L536,337L534.4,337.6L532.6,337.2L531.1,338.5L528.9,339.2L528.1,340.4L530,341.8L532.2,342L534.3,341.4L536.8,339.2L537.7,338.8L538.7,338.9L540.9,339.6L541.3,339.8L541.5,340.3L541.6,340.7L541.6,341.2L541.8,341.7L542.8,342.7L543.9,343.2L549.6,343.9L550.6,343.2L552,340.8L552.7,340.1L553.6,340.9L554.2,342.4L554,342.9L553.3,343.1L552.6,344L554,344.6L557.2,344.9L558.5,346.5L556.7,347.8L552.3,347.9L550.6,349.3L552.2,350.3L555.7,351.3L557,353.1L555.5,354.4L549.7,354.7L546.6,355.5L544.9,356.7L543.9,358.5L550.4,357.9L554.5,356L555.3,356L555.9,356.6L556.3,357.2L555.5,357.8L560,359L560,1000ZM391.6,903.5L390.2,905.9L389,905.6L388.3,904.2L388.1,902.7L388.2,901.1L388.8,899.8L389.4,899.5L390.1,899.5L390.8,900.1L391,901L391.3,902.1ZM447.7,957.4L448,957.7L448.1,958.1L447.9,958.3L447.8,958.8L447.6,959.1L445,957.4L444.6,956.9L444.1,956.5L443.3,956L441.3,954.7L441.8,954.5L443.9,955.1L447.5,957.1ZM359,959.6L359.3,960.2L359.3,961L358.5,961.2L356,962.4L355.3,961.7L355.1,960.8L355.5,959.9L355.4,958.8L355.9,957.8L356.9,958.2L358.3,959.3ZM318.9,957.5L318.9,958L319.1,959.1L318.8,959.9L318.3,960.2L317.6,960.2L317.1,959.9L316.8,959.1L316.3,957.5L316.2,957.2L316.1,956L315.2,953L315.5,952.4L316,952.4L316.7,953.3L317.2,954.4L317.7,955.3L318.2,956.1L318.6,957ZM396.4,931.9L396.5,932L396.9,932.5L396.6,932.8L396.1,933.3L395.8,934L395.8,934.7L395.7,935.1L394.6,934.8L394,934.8L393.5,934.7L392.5,934.3L389.7,932.3L388.9,931.4L388.5,930.2L388.4,929.2L388.6,928.6L388.6,927.8L388.4,927.3L388.5,927.2L389,927.5L389.5,927.6L389.9,927.1L390,927.1L390.4,927.9L390.7,928L391.2,927.9L391.6,928.2L392.1,928.8L395,931.5ZM387.2,928.2L387.4,928.6L387.6,928.8L387.6,929.4L387.3,930.5L386.7,930.7L385.6,929.8L385.1,929L384.9,928.6L384.6,928.3L384.3,928.1L383.7,927.8L382.9,926.3L383,925.8L384.2,925.6L384.7,925.8L385.7,926L386.5,926.8L387,927.4L387.1,927.9ZM501.9,286.8L502.8,287.8L502.8,289L502.5,289.7L501.3,288.7L500.9,288.6L500.5,288.3L500.2,287.6L500.2,286.5L500.7,286.3L501.3,286.3ZM533.5,71L536.4,69.5L539.5,68.9L546.4,73.2L545.7,74.2L533.9,74.7L532.5,74.1L532.1,73.5L532.2,72.4L532.6,71.7Z","M247.4,1000L247.1,998L246.9,994.2L247.3,992.5L247.9,993.1L249.6,996.3L250.5,997.1L251.5,997.4L252.1,998.5L253.1,1000L247.4,1000ZM258,1000L257.7,998.7L257.1,997.6L256.6,996.3L256.9,994.4L256.6,994.4L256.1,993.9L255.9,993.8L257.1,992.4L258.4,992.9L261.1,995.7L260.8,996.5L261.3,997.6L261.6,999.9L261.7,1000L258,1000ZM265,1000L265.5,999L265.2,998.4L265.9,996.2L266.9,996.8L267.9,998.5L268.7,999.5L269.8,999.3L269.8,998.7L269.6,997.9L269.8,997.1L270.3,996.2L270.8,995.9L271.4,996L273.1,997L274.8,998.7L275,999L275.2,999.5L275.2,1000L265,1000ZM200.2,1000L200.8,998.7L201.5,998.4L201.5,998.4L202.3,999.8L202.4,1000L200.2,1000Z"]};

  rekisteroiModuuli({
    id: "kartta",
    nimi: DATA.nimi,
    lyhyt: "Kartta",
    pohja: true,
    data: DATA,
    css: CSS,
    html: "",
    alusta: alusta
  });
})();
