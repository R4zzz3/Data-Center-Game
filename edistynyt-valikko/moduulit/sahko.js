/* =====================================================================
   Tietomoduuli: Sähkö ja kantaverkko (id "sahko", Energia-pää)
   Siirretty erillisestä artifaktista (F3) Edistyneeseen valikkoon.
   Kaikki haut root-juuren kautta, ei location.hash-muutoksia, ei globaaleja.
   ===================================================================== */
(function () {
  const DATA = {
    "id": "sahko",
    "nimi": "Sähkö ja kantaverkko",
    "paat": [
      "energia"
    ],
    "ingressi": "Uutisten gigawatit ovat usein vasta kyselyjä. Tässä osassa näet, kuinka paljon datakeskuksia oikeasti on käynnissä, mitä yksi keskus kuluttaa ja mistä osista sähkölaskusi muodostuu.",
    "lueLisaaTeksti": "Kuinka moni gigawatti oikeasti valmistuu – ja maksatko siitä sinä?",
    "paivitetty": "2026-10-24",
    "rooliRivit": {
      "asukas": "Sähkölaskussasi on kolme osaa: sähköenergia, siirto ja verot. Datakeskus voi vaikuttaa energian hintaan ja siirtomaksuihin, eikä suunta ole varma.",
      "yrittaja": "Jos yrityksesi käyttää paljon sähköä pörssihinnalla, hintapiikit näkyvät kuluissa heti. Piikkejä tulee etenkin tyyninä pakkaspäivinä, ja suuri uusi kulutus voi joko jyrkentää tai tasata niitä.",
      "viljelija": "Uusi voimajohto voi kulkea pellon tai metsän halki. Maa jää omistajalle, menetyksistä maksetaan korvaus, ja hanke kestää vuosia.",
      "nuori": "Jos hankkeet toteutuvat, ne valmistuvat vaiheittain vuosien kuluessa, kun moni nyt nuori aloittaa työuraansa. Sähköä paljon käyttävä teollisuus voi olla tulevaisuuden työnantaja, mutta se ei ole varmaa.",
      "valtuutettu": "Kunta päättää kaavasta, ei sähköverkosta. Hanke pääsee hakemaan liittymää kantaverkkoon vasta, kun kaava ja rakennuslupa ovat lainvoimaisia."
    },
    "alueRivit": {
      "maaseutu": "Suuri datakeskus tarvitsee vahvan liitoksen sähköverkkoon. Maaseudulla se voi tarkoittaa uutta voimajohtoa peltojen ja metsien halki.",
      "pienkunta": "Pienessä kunnassa yksi suuri datakeskus voi käyttää enemmän sähköä kuin kaikki kunnan kodit yhteensä. Sähkövero menee silti valtiolle, ei kunnalle.",
      "kaupunki": "Etelän kaupunkiseuduilla sähköverkossa on ollut ruuhkaa, joten uusi hanke voi joutua odottamaan liitäntää. Siirtomaksusi riippuu oman alueesi verkkoyhtiöstä."
    },
    "oletukset": [
      "Esimerkkikeskus on 100 MW, sama kuin pelin tulevaisuussimulaatiossa. Se on kuvitteellinen keskus, ei minkään todellisen hankkeen koko. Laskurin oletuskoko ja sähköverolaskelma käyttävät sitä.",
      "Datakeskus käyttää vuodessa 50–90 % siitä sähköstä, jonka se käyttäisi täydellä teholla joka tunti (käyttöaste).",
      "Laskurin megawatit tarkoittavat tehoa, jolla keskus ottaa sähköä verkosta. Hankkeiden ilmoittamat luvut voivat olla myös palvelinten tehoa tai liittymän kokoa.",
      "Sähköveron laskussa koko vuoden sähkö on uuden veron piirissä. Huoltovarmuusmaksua ei ole laskettu mukaan.",
      "Kotivertailussa käytetään Motivan kahta esimerkkikotia. Ne eivät ole kaikkien suomalaiskotien keskiarvoja."
    ],
    "lahteet": [
      {
        "id": "fingrid-webinaari",
        "nimi": "Fingrid: Webinaari liittymissopimushakemuksista, esitysmateriaali (18.5.2026)",
        "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/ajankohtaista-tapahtumat/webinaari-liittymissopimushakemuksista-18.5.2026-esitysmateriaali.pdf"
      },
      {
        "id": "fingrid-18-8",
        "nimi": "Fingrid: Sähkönkulutus on kääntymässä voimakkaaseen kasvuun (18.8.2026)",
        "url": "https://www.sttinfo.fi/tiedote/72239761/sahkonkulutus-on-kaantymassa-voimakkaaseen-kasvuun-rinnalle-tarvitaan-lisaa-saatovoimaa?lang=fi"
      },
      {
        "id": "tekno-4-6",
        "nimi": "Teknologiateollisuus: Keskustelu datakeskuksista kaipaa mittasuhteita (4.6.2026), lukuina Datakeskusteollisuus ry:n tiedot",
        "url": "https://teknologiateollisuus.fi/keskustelu-datakeskuksista-kaipaa-mittasuhteita-mita-hyotya-suomelle-todella-syntyy/"
      },
      {
        "id": "vu-20-10",
        "nimi": "Verkkouutiset: Suomeen rakennetaan 23 suurta datakeskusta – näkymä nousi rajusti (20.10.2026)",
        "url": "https://www.verkkouutiset.fi/a/suomeen-rakennetaan-23-suurta-datakeskusta-nakyma-nousi-rajusti/"
      },
      {
        "id": "yle-et",
        "nimi": "Yle: Datakeskukset tuovat mukanaan uutta sähköntuotantoa – Energiateollisuus: ”Huoli hintojen noususta turha” (11.2.2026)",
        "url": "https://yle.fi/a/74-20208368"
      },
      {
        "id": "et-21-1",
        "nimi": "Energiateollisuus: Energiatilastot 2025 (21.1.2026)",
        "url": "https://www.sttinfo.fi/tiedote/71751647/energiatilastot-2025-kaukolammon-paastot-putosivat-kolmanneksella-sahko-lahes-fossiilitonta-ja-euroopan-edullisinta"
      },
      {
        "id": "motiva-koti",
        "nimi": "Motiva: Home Electricity Use, Electricity Contracts and Smart Electricity Use (esimerkkikodit, englanninkielinen sivu)",
        "url": "https://www.motiva.fi/en/home-electricity-use-electricity-contracts-and-smart-electricity-use/"
      },
      {
        "id": "yle-afry",
        "nimi": "Yle News: Study: Big growth in data centres could raise electricity prices by 10% by 2030 (5.11.2025)",
        "url": "https://yle.fi/a/74-20192344"
      },
      {
        "id": "yle-mattila",
        "nimi": "Yle: Tuulivoimaa Itä-Suomeen ja sähköveron huojennuksia datakeskuksille – hallituksen tilaama datakeskusselvitys (4.11.2025)",
        "url": "https://yle.fi/a/74-20192035"
      },
      {
        "id": "fingrid-kvv",
        "nimi": "Fingrid: Kysymyksiä ja vastauksia kantaverkkopalvelumaksujen rakenneuudistuksesta (2.7.2026)",
        "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/palvelut/kulutuksen-ja-tuotannon-liittaminen-kantaverkkoon/kysymyksia-ja-vastauksia-kantaverkkopalvelumaksujen-rakenneuudistuksesta.pdf"
      },
      {
        "id": "fingrid-pvk",
        "nimi": "Fingrid: Konsernin puolivuosikatsaus 1.1.–30.6.2026 (23.7.2026)",
        "url": "https://www.sttinfo.fi/tiedote/72200778/fingrid-konsernin-puolivuosikatsaus-11-3062026?lang=fi"
      },
      {
        "id": "fingrid-vuosi",
        "nimi": "Fingrid: Fingridin vuosi 2025 (vuosikertomus)",
        "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/vuosikertomus/2025/fingrid-oyj-fingridin-vuosi-2025.pdf"
      },
      {
        "id": "kaleva",
        "nimi": "Kaleva: Fingrid toivoo lisää datakeskuksia eikä pelkää sähköpulaa (18.3.2025)",
        "url": "https://www.kaleva.fi/fingrid-toivoo-lisaa-datakeskuksia-eika-pelkaa-sah/11556159"
      },
      {
        "id": "vu-is",
        "nimi": "Verkkouutiset / IS: Energiajärjestelmä myllerryksessä, sähkölaskut uhkaavat kallistua (24.5.2025)",
        "url": "https://www.verkkouutiset.fi/a/is-energiajarjestelma-myllerryksessa-sahkolaskut-uhkaavat-kallistua/"
      },
      {
        "id": "vu-7-5",
        "nimi": "Verkkouutiset: Datakeskusten sähkönkulutus kasvaa nopeasti – ”Suomi ei ole Irlanti” (7.5.2026)",
        "url": "https://www.verkkouutiset.fi/a/datakeskusten-sahkonkulutus-kasvaa-nopeasti-suomi-ei-ole-irlanti/"
      },
      {
        "id": "ev-ukk",
        "nimi": "Energiavirasto: Usein kysyttyä sähkön verkkopalvelusta",
        "url": "https://energiavirasto.fi/usein-kysyttya-verkkopalvelusta"
      },
      {
        "id": "ev-2024",
        "nimi": "Energiavirasto: Kotitalouksien sähkölasku pieneni lähes seitsemän prosenttia vuonna 2024 (16.1.2025)",
        "url": "https://energiavirasto.fi/-/kotitalouksien-sahkolasku-pieneni-lahes-seitseman-prosenttia-vuonna-2024"
      },
      {
        "id": "he156",
        "nimi": "Hallituksen esitys HE 156/2025 vp sähköverolain muuttamisesta (23.10.2025)",
        "url": "https://www.eduskunta.fi/pdf/HE+156/2025+vp?lang=fi"
      },
      {
        "id": "vero",
        "nimi": "Verohallinto: Sähkövero (päivitetty 23.4.2026)",
        "url": "https://vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/valmisteverotus/sahkovero/"
      },
      {
        "id": "fingrid-johto",
        "nimi": "Fingrid: Näin etenee voimajohtohanke (2020)",
        "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/julkaisut/fingrid_nain_etenee_voimajohtohanke_2020.pdf"
      },
      {
        "id": "aisuomi",
        "nimi": "AI Suomi (kooste): Datakeskukset Suomessa (29.9.2026)",
        "url": "https://aisuomi.fi/opas/datakeskukset-suomessa"
      }
    ],
    "sisalto": {
      "suppilo": {
        "otsikko": "Otsikon gigawatit ja todellisuus",
        "johdanto": "Uutisissa puhutaan gigawateista. Luvut kuvaavat kuitenkin eri vaiheita: kyselyjä, sopimuksia, työmaita ja käynnissä olevia saleja. Kaikki luvut ovat megawatteina (MW); 1 gigawatti on 1 000 megawattia.",
        "vaiheet": [
          {
            "nimi": "Liittymäkyselyt",
            "arvo": 100000,
            "arvoTeksti": "yli 100 000 MW",
            "selite": "Kaikki uuden kulutuksen kyselyt Fingridille, joista yli puolet datakeskuksia. Kysely ei sido mihinkään.[[fingrid-webinaari]]"
          },
          {
            "nimi": "Liittymissopimukset",
            "arvo": 5000,
            "arvoTeksti": "lähes 5 000 MW",
            "selite": "Datakeskushankkeet, joilla on sopimus, myös jakeluverkkoon liitettävät (elokuu 2026).[[fingrid-18-8]]"
          },
          {
            "nimi": "Rakenteilla",
            "arvo": 2000,
            "arvoTeksti": "noin 2 000 MW",
            "selite": "18 suurta datakeskusta, alan järjestön Datakeskusteollisuuden tieto (kesäkuu 2026).[[tekno-4-6]]"
          },
          {
            "nimi": "Toiminnassa",
            "arvo": 370,
            "arvoTeksti": "noin 370 MW",
            "selite": "Palvelinten teho vuoden 2025 lopussa, Datakeskusteollisuuden arvio.[[tekno-4-6]][[vu-20-10]]"
          }
        ],
        "vertailu": {
          "nimi": "Vertailu: Suomen huippukulutus",
          "arvo": 16000,
          "arvoTeksti": "alle 16 000 MW",
          "selite": "Koko Suomen suurin sähkön tarve samalla hetkellä.[[fingrid-webinaari]]"
        },
        "kaavio1": "Kaikki vaiheet samalla asteikolla (0–100 000 MW)",
        "kaavio2": "Suurennos alemmista vaiheista (0–5 000 MW)",
        "kaavio2Selite": "Sama yksikkö, mutta asteikko on 20 kertaa tarkempi. Huippukulutus 16 000 MW ei mahdu tälle asteikolle.",
        "huomiot": [
          "Fingridin mukaan sopimushankkeiden toteutuminen veisi ainakin viisi vuotta, ja hankkeet käynnistyvät vaiheittain.[[fingrid-18-8]]",
          "Liittymissopimusta voi hakea vasta, kun hankkeella on lainvoimainen kaava ja rakennuslupa.[[fingrid-webinaari]]",
          "Liittymän koko ei ole sama kuin kulutus. Erään datakeskusyhtiön mukaan keskukset käyttävät enintään 60 % liittymänsä tehosta.[[yle-et]]",
          "Ala itse arvioi lokakuussa 2026, että datakeskusten teho voisi kasvaa jopa 2 800 MW:iin vuoteen 2030 mennessä.[[vu-20-10]]"
        ],
        "vertailukelpoisuus": "Vaiheet eivät ole täysin samaa joukkoa. Kyselyissä on mukana muutakin kulutusta kuin datakeskuksia. Toiminnassa olevien luku on palvelinten teho, ja koko laitos voi ottaa verkosta enemmän. Eräässä koosteessa toiminnassa olevien tehoksi kerrotaan noin 300 MW.[[aisuomi]] Lukujen ero kertoo, että tarkkaa yhteistä lukua ei ole julkaistu."
      },
      "laskuri": {
        "otsikko": "Yhtä paljon kuin…",
        "johdanto": "Valitse datakeskuksen koko. Laskuri näyttää, paljonko sähköä se käyttäisi vuodessa ja mihin sitä voi verrata.",
        "esiasetukset": [
          {
            "mw": 75,
            "nimi": "Mäntsälä",
            "tila": "toiminnassa",
            "lahde": "aisuomi"
          },
          {
            "mw": 100,
            "nimi": "Pelin oletus: esimerkkikeskus",
            "tila": "kuvitteellinen keskus",
            "lahde": ""
          },
          {
            "mw": 310,
            "nimi": "Lappeenranta",
            "tila": "kampuksen suunniteltu koko",
            "lahde": "aisuomi"
          },
          {
            "mw": 560,
            "nimi": "Nurmijärvi",
            "tila": "suunnitelma, YVA kesken",
            "lahde": "aisuomi"
          }
        ],
        "kayttoasteAla": 0.5,
        "kayttoasteYla": 0.9,
        "suomiGWh": 85000,
        "suomiSelite": "Suomen sähkönkulutus 2025 oli 85 TWh eli 85 000 GWh.[[et-21-1]]",
        "kodit": [
          {
            "nimi": "kerrostaloasuntoa",
            "kuvaus": "50 m², kaukolämpö, 1 asukas",
            "kWh": 3100
          },
          {
            "nimi": "sähkölämmitteistä omakotitaloa",
            "kuvaus": "120 m², 4 asukasta",
            "kWh": 19200
          }
        ],
        "kotiSelite": "Kodit ovat Motivan esimerkkejä, eivät koko maan keskiarvoja.[[motiva-koti]]",
        "loppu": "Vertailu kertoo määrän. Se ei kerro, keneltä sähkö olisi pois: uutta tuotantoa voidaan rakentaa samaan aikaan.[[yle-et]]"
      },
      "maksut": {
        "otsikko": "Maksanko minä?",
        "johdanto": "Datakeskus voi näkyä sähkölaskussasi kolmea eri reittiä. Jokaisesta päättää eri taho.",
        "kanavat": [
          {
            "nimi": "Sähkön markkinahinta",
            "kuka": "Kukaan ei päätä yksin. Hinta syntyy sähköpörssissä tarjonnan ja kysynnän mukaan.",
            "tiedetaan": "Vuonna 2025 Suomen tukkusähkö oli halvinta Euroopan hinta-alueista, joissa on pääkaupunki.[[et-21-1]]",
            "epavarmaa": "Hallitukselle tehdyn AFRYn arvion mukaan 2 500 MW:n kasvu voisi nostaa keskihintaa noin 10 % noin viidessä vuodessa, jos kulutus ei jousta.[[yle-afry]] Paljon riippuu siitä, rakennetaanko uutta tuotantoa samaa tahtia.[[yle-et]]"
          },
          {
            "nimi": "Kantaverkkomaksu",
            "kuka": "Fingrid, joka omistaa valtakunnan pääverkon eli kantaverkon. Energiavirasto vahvistaa maksujen ehdot.[[fingrid-kvv]]",
            "tiedetaan": "Kotitalouden laskusta kantaverkon maksut ovat tyypillisesti noin 2 %. Datakeskuksille ei ole omaa hintaa, koska maksujen on kohdeltava kaikkia samoin.[[fingrid-kvv]] Fingrid arvioi investoivansa 2026–2029 noin 2 miljardia euroa.[[fingrid-pvk]]",
            "epavarmaa": "Maksujen rakenne uudistuu: malli on tarkoitus päättää 2026 ja vahvistaa 2027.[[fingrid-kvv]] Kasvavatko verkon kulut nopeammin kuin maksajien määrä, selviää vasta vuosien päästä."
          },
          {
            "nimi": "Jakeluverkon siirtomaksu",
            "kuka": "Oman alueesi sähköverkkoyhtiö. Siirto on monopoli, joten yhtiötä ei voi vaihtaa. Energiavirasto valvoo hintoja.[[ev-ukk]]",
            "tiedetaan": "Valvonta on jälkikäteistä neljän vuoden jaksoissa. Liikaa perityt rahat palautetaan asiakkaille seuraavalla jaksolla.[[ev-ukk]] Vuonna 2024 kotitalouksien siirtohinta nousi keskimäärin 2,1 %.[[ev-2024]]",
            "epavarmaa": "Vaikutus riippuu siitä, liittyykö keskus kantaverkkoon vai alueesi jakeluverkkoon. Fingridin lähes 5 GW:n luvussa on mukana myös jakeluverkkoon liittyviä hankkeita.[[fingrid-18-8]]"
          }
        ],
        "nakokulmatOtsikko": "Eri näkemyksiä samasta asiasta",
        "nakokulmat": [
          {
            "kuka": "Fingrid",
            "teksti": "Datakeskukset ovat kantaverkolle toivottuja asiakkaita, eikä niiden rakentamista tarvitse rajoittaa.[[kaleva]] Kun kulutusta tulee paljon, siirron kulut jakautuvat useammalle maksajalle.[[vu-is]]"
          },
          {
            "kuka": "Huoli sähkölaskusta",
            "teksti": "Verkkoa laajennetaan uuden teollisuuden, lähinnä datakeskusten, takia, ja kotien laskujen arvioidaan nousevan.[[vu-is]] Hallituksen datakeskusselvityksen mukaan suuri kulutus voi nostaa kuluttajien hintoja tyyninä ja pilvisinä päivinä.[[yle-mattila]]"
          },
          {
            "kuka": "Energia- ja datakeskusala",
            "teksti": "Energiateollisuuden mukaan kaikki saavat edullisempaa sähköä, jos tuotantoa rakennetaan kulutuksen tahtiin.[[yle-et]] Datakeskusteollisuuden mukaan alle 10 %:n osuus kulutuksesta ei käännä sähkömarkkinaa päälaelleen.[[vu-7-5]]"
          }
        ]
      },
      "vero": {
        "otsikko": "Sähkövero muuttui 1.7.2026",
        "teksti": "Datakeskusten sähkö siirtyi 1.7.2026 alemmasta veroluokasta yleiseen veroluokkaan I.[[vero]] Vero nousi 0,05 sentistä 2,24 senttiin kilowattitunnilta, eli samaan, jota kodit maksavat.[[he156]]",
        "veroUusi": 22.4,
        "veroVanha": 0.5,
        "esimerkkiMW": 100,
        "valtio": "Sähkövero menee valtiolle, ei sijaintikunnalle. Hallitus arvioi muutoksen tuovan valtiolle kaikista datakeskuksista noin 47 miljoonaa euroa vuodessa vuoden 2026 tasolla.[[he156]]"
      },
      "pelinValinnat": {
        "otsikko": "Pelin valinnat ja tämä osa",
        "johdanto": "Pelin Energia-päätöksessä on kolme vaihtoehtoa. Mikään niistä ei ole oikea vastaus; kukin painottaa eri asiaa.",
        "valinnat": [
          {
            "kirjain": "A",
            "nimi": "Hanke etenee",
            "teksti": "Suppilo ja laskuri kertovat, mitä yksi keskus tarkoittaa Suomen kulutuksessa ja kuinka moni hanke ylipäätään valmistuu. Myös sähkövero koskee tätä vaihtoehtoa."
          },
          {
            "kirjain": "B",
            "nimi": "Jousto",
            "teksti": "Fingrid vaatii yli 30 MW:n kuluttajilta kykyä rajoittaa verkosta otettavaa tehoa.[[fingrid-webinaari]] AFRYn hinta-arvio koskee tilannetta, jossa kulutus ei jousta.[[yle-afry]] Jousto voi myös vähentää uusien johtojen tarvetta.[[fingrid-vuosi]]"
          },
          {
            "kirjain": "C",
            "nimi": "Ohjataan sinne, missä verkossa on tilaa",
            "teksti": "Pohjois-Suomessa uutta teollisuutta voi liittää nopeasti, muualla odotusajat vaihtelevat.[[fingrid-18-8]] Tämä liittyy kantaverkon maksuihin ja siihen, missä uusia voimajohtoja tarvitaan."
          }
        ]
      },
      "voimajohto": {
        "otsikko": "Kun uusi voimajohto tulee",
        "teksti": "Voimajohtohanke kestää kaikkine vaiheineen noin 5–8 vuotta. Maa jää omistajalle, ja Fingrid saa pysyvän oikeuden käyttää johtoaluetta. Maanomistajalla on oikeus täyteen korvaukseen taloudellisista menetyksistä.[[fingrid-johto]]"
      }
    },
    "pelikytkos": [
      {
        "paatos": "energia",
        "vaihtoehto": "A",
        "teksti": "Kuinka moni gigawatti valmistuu ja mitä 100 MW tarkoittaa Suomen sähkössä."
      },
      {
        "paatos": "energia",
        "vaihtoehto": "B",
        "teksti": "Jousto: mitä Fingrid vaatii suurilta kuluttajilta ja miksi se vaikuttaa hintaan."
      },
      {
        "paatos": "energia",
        "vaihtoehto": "C",
        "teksti": "Missä verkossa on tilaa ja kuka maksaa uudet johdot."
      }
    ]
  };

  const CSS = `
.sivu { container-type: inline-size; }
.suppilo { display: grid; gap: 10px; }
.srivi { display: grid; gap: 3px; }
.srivi .ots { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 2px 12px; align-items: baseline; }
.srivi .snimi { font-family: var(--f-sc); font-weight: 700; font-size: 0.95rem; letter-spacing: 0.04em; }
.srivi .sarvo { font-family: var(--f-display); font-weight: 700; font-size: 1.25rem; font-variant-numeric: tabular-nums; }
.srivi .sselite { font-size: 0.88rem; color: var(--ink-soft); }
.kaavio .suppilo .palkki svg { height: 18px; width: 100%; display: block; }
.akseli { position: relative; height: 1.4em; font-size: 0.78rem; color: var(--ink-soft); border-top: 1px solid var(--ink-soft); margin-top: 2px; }
.akseli span { position: absolute; top: 2px; transform: translateX(-50%); white-space: nowrap; font-variant-numeric: tabular-nums; }
.akseli span:first-child { transform: none; }
.akseli span:last-child { transform: translateX(-100%); }
.laskuri { display: grid; gap: 14px; }
.laskuri .napit .nappi { text-align: left; line-height: 1.25; }
.laskuri .nappi small { display: block; font-family: var(--f-body); font-size: 0.8rem; color: var(--ink-soft); letter-spacing: 0; }
.liukuri { display: grid; gap: 4px; }
.liukuri label { font-family: var(--f-sc); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.04em; }
.liukuri input[type="range"] { width: 100%; min-height: 44px; margin: 0; accent-color: var(--red); cursor: pointer; }
.asteikko { position: relative; height: 1.6em; margin: -8px 9px 0; font-size: 0.8rem; color: var(--ink-soft); font-variant-numeric: tabular-nums; }
.asteikko span { position: absolute; top: 4px; transform: translateX(-50%); white-space: nowrap; }
.asteikko span::before { content: ""; position: absolute; left: 50%; top: -5px; height: 5px; border-left: 1px solid var(--ink-soft); }
.asteikko span:first-child { transform: translateX(-9px); }
.asteikko span:first-child::before { left: 9px; }
.asteikko span:last-child { transform: translateX(calc(-100% + 9px)); }
.asteikko span:last-child::before { left: auto; right: 9px; }
.tulos { display: grid; gap: 14px; border-top: 1px solid var(--line); padding-top: 12px; }
.tulos .valittu { font-family: var(--f-display); font-weight: 700; font-size: 1.6rem; color: var(--red); margin: 0; }
.kanavat { display: grid; grid-template-columns: repeat(auto-fit, minmax(13.5rem, 1fr)); gap: 12px; }
.kanava { border: 1px solid var(--line); border-top: 3px solid var(--gold); border-radius: 4px; padding: 12px 14px; display: grid; gap: 8px; align-content: start; }
.kanava dl { margin: 0; display: grid; gap: 8px; }
.kanava dt { font-family: var(--f-sc); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.08em; color: var(--ink-soft); }
.kanava dd { margin: 0; font-size: 0.95rem; }
.valinnat { display: grid; gap: 10px; }
.nakokulmat .nakokulma { align-content: start; }
.valinta { display: grid; grid-template-columns: 2.4rem 1fr; gap: 10px; align-items: start; }
.valinta > div { display: grid; gap: 4px; min-width: 0; }
.valinta .kirjain { font-family: var(--f-display); font-weight: 700; font-size: 1.6rem; color: var(--red); line-height: 1; border: 1px solid var(--line); border-radius: 50%; width: 2.4rem; height: 2.4rem; display: grid; place-items: center; }
.valinta.oma { border: 2px solid var(--red); border-radius: 6px; padding: 8px 10px; }
.valinta.oma .kirjain { background: var(--red); color: var(--on-red); border-color: var(--red); }
.oma-merkki { justify-self: start; font: 700 0.78rem var(--f-sc); letter-spacing: 0.06em; color: var(--red); border: 1px solid var(--red); border-radius: 999px; padding: 1px 10px; }
@container (max-width: 34rem) { .puolet { grid-template-columns: 1fr; } }
`;

  rekisteroiModuuli({
    id: "sahko",
    nimi: "Sähkö ja kantaverkko",
    lyhyt: "Sähkö",
    pohja: true,
    data: DATA,
    css: CSS,
    html: "",
    alusta(root, APU, ctx) {
      const A = APU, D = A.D, S = D.sisalto, $ = A.$;
      /* Sitovat välilyönnit numeroiden ja yksiköiden väliin */
      const nb = s => String(s).replace(/(\d) (?=\d)/g, "$1 ").replace(/(\d) (?=(%|MW|GWh|GW|TWh|kWh|milj|snt|€|m²))/g, "$1 ");
      /* Teksti, jossa [[lahde-id]] muuttuu viitteeksi */
      const t = s => A.esc(nb(s)).replace(/\[\[([a-z0-9-]+)\]\]/g, (m, id) => "\u2060" + A.viite(id));
      const prosentti = (n, des) => A.fmt(n, des).replace(/\s/g, " ");

      /* ---------- 1. Suppilo ---------- */
      const SP = S.suppilo;
      function palkki(arvo, maks, vari, viiva) {
        const w = Math.max(1000 * arvo / maks, 3);
        let s = '<svg viewBox="0 0 1000 18" preserveAspectRatio="none" aria-hidden="true">' +
          '<rect x="0" y="0" width="1000" height="18" fill="var(--line)" opacity="0.35"/>' +
          '<rect x="0" y="0" width="' + w.toFixed(1) + '" height="18" fill="' + vari + '"/>';
        if (viiva != null) s += '<line x1="' + viiva + '" x2="' + viiva + '" y1="0" y2="18" stroke="var(--ink)" stroke-width="2" stroke-dasharray="3 2" vector-effect="non-scaling-stroke"/>';
        return s + "</svg>";
      }
      const rivi = (r, maks, vari, viiva) =>
        '<div class="srivi"><div class="ots"><span class="snimi">' + A.esc(r.nimi) + '</span><span class="sarvo">' + A.esc(nb(r.arvoTeksti)) + "</span></div>" +
        '<div class="palkki">' + palkki(r.arvo, maks, vari, viiva) + '</div><span class="sselite">' + t(r.selite) + "</span></div>";
      function akseli(maks, askel) {
        let s = '<div class="akseli" aria-hidden="true">';
        for (let v = 0; v <= maks; v += askel) s += '<span style="left:' + (100 * v / maks) + '%">' + A.fmt(v) + "</span>";
        return s + "</div>";
      }
      const ariaTeksti = rivit => rivit.map(r => r.nimi + " " + r.arvoTeksti).join(", ");
      const kaikki = SP.vaiheet.concat([SP.vertailu]);
      const viiva1 = 1000 * SP.vertailu.arvo / 100000;
      const k1 = '<figure class="kaavio" style="margin:0"><h3>' + t(SP.kaavio1) + "</h3>" +
        '<div class="suppilo" role="img" aria-label="' + A.esc(SP.kaavio1 + ": " + ariaTeksti(kaikki)) + '">' +
        SP.vaiheet.map(r => rivi(r, 100000, "var(--chart-1)", viiva1)).join("") +
        rivi(SP.vertailu, 100000, "var(--chart-muted)", viiva1) + akseli(100000, 25000) + "</div>" +
        "<figcaption>Katkoviiva näyttää Suomen huippukulutuksen kohdan. Pienimmät palkit ovat tällä asteikolla vain viivan levyisiä.</figcaption>" +
        A.lahdeRivi(["fingrid-webinaari", "fingrid-18-8", "tekno-4-6", "vu-20-10"], "Lähteet") + "</figure>";
      const alemmat = SP.vaiheet.slice(1);
      const k2 = '<figure class="kaavio" style="margin:0"><h3>' + t(SP.kaavio2) + "</h3>" +
        '<div class="suppilo" role="img" aria-label="' + A.esc(SP.kaavio2 + ": " + ariaTeksti(alemmat)) + '">' +
        alemmat.map(r => rivi(r, 5000, "var(--chart-1)", null)).join("") + akseli(5000, 1000) + "</div>" +
        "<figcaption>" + t(SP.kaavio2Selite) + "</figcaption>" +
        A.lahdeRivi(["fingrid-18-8", "tekno-4-6", "vu-20-10"], "Lähteet") + "</figure>";
      const huom = "<ul>" + SP.huomiot.map(h => "<li>" + t(h) + "</li>").join("") + "</ul>";
      const osa1 = A.kortti("<h2>" + A.esc(SP.otsikko) + "</h2><p>" + t(SP.johdanto) + "</p>" + k1 + k2 + huom +
        "<details><summary>Miksi luvut eivät ole aivan vertailukelpoisia</summary><p>" + t(SP.vertailukelpoisuus) + "</p></details>", "osio");

      /* ---------- 2. Laskuri ---------- */
      const L = S.laskuri, VR = S.vero;
      const oletusMW = VR.esimerkkiMW;
      const MIN = 10, MAX = 600, ASKEL = 5;
      const napit = L.esiasetukset.map(e =>
        '<button type="button" class="nappi" data-mw="' + e.mw + '" aria-pressed="' + (e.mw === oletusMW) + '">' +
        A.fmt(e.mw) + " MW · " + A.esc(e.nimi) + "<small>" + A.esc(e.tila) + "</small></button>").join("");
      const esiLahteet = [];
      L.esiasetukset.forEach(e => { if (e.lahde && esiLahteet.indexOf(e.lahde) < 0) esiLahteet.push(e.lahde); });
      const asteikko = '<div class="asteikko" aria-hidden="true">' + [10, 150, 300, 450, 600].map(v =>
        '<span style="left:' + (100 * (v - MIN) / (MAX - MIN)) + '%">' + A.fmt(v) + (v === MIN || v === MAX ? " MW" : "") + "</span>").join("") + "</div>";
      const osa2 = A.kortti("<h2>" + A.esc(L.otsikko) + "</h2><p>" + t(L.johdanto) + "</p>" +
        '<div class="laskuri">' +
        '<div class="napit" role="group" aria-label="Datakeskuksen koko">' + napit + "</div>" +
        '<p class="pieni">Hankkeiden koot: Mäntsälä, Lappeenranta ja Nurmijärvi koosteen mukaan' + esiLahteet.map(id => A.viite(id)).join("") +
        ". Pelin oletus: esimerkkikeskus on " + A.fmt(oletusMW) + " MW.</p>" +
        '<div class="liukuri"><label for="sahko-mw">Tai valitse koko itse: <span id="sahko-mw-arvo">' + A.fmt(oletusMW) + "</span> MW</label>" +
        '<input type="range" id="sahko-mw" min="' + MIN + '" max="' + MAX + '" step="' + ASKEL + '" value="' + oletusMW + '">' + asteikko + "</div>" +
        '<div class="tulos" id="sahko-tulos" aria-live="polite"></div></div>', "osio");

      /* Prosenttiosuuden desimaalit: niin monta, että pienikin keskus näyttää eron (esim. 10 MW → 0,05–0,09 %) */
      function osuusDesimaalit(a, b) {
        let des = a < 0.1 ? 2 : (a < 10 ? 1 : 0);
        while (des < 3 && A.fmt(a, des) === A.fmt(b, des)) des++;
        return des;
      }
      function laskeSahko(mw) {
        const ala = mw * 8760 * L.kayttoasteAla / 1000, yla = mw * 8760 * L.kayttoasteYla / 1000; /* GWh */
        const osAla = 100 * ala / L.suomiGWh, osYla = 100 * yla / L.suomiGWh;
        const kodit = L.kodit.map(k => {
          const a = Math.round(ala * 1e6 / k.kWh / 1000) * 1000, b = Math.round(yla * 1e6 / k.kWh / 1000) * 1000;
          return '<div class="luku"><span class="arvo">' + A.haarukka(a, b, 0) + '</span><span class="selite">' + t(k.nimi + " (" + k.kuvaus + ", " + A.fmt(k.kWh) + " kWh vuodessa)") + "</span></div>";
        }).join("");
        const des = osuusDesimaalit(osAla, osYla);
        $("sahko-tulos").innerHTML =
          '<p class="valittu">' + A.fmt(mw) + " MW</p>" +
          '<div class="luvut"><div class="luku"><span class="arvo">' + A.haarukka(Math.round(ala), Math.round(yla), 0, "GWh") + '</span><span class="selite">sähköä vuodessa, kun käyttöaste on ' + A.haarukka(L.kayttoasteAla * 100, L.kayttoasteYla * 100, 0, "%") + "</span></div>" +
          '<div class="luku"><span class="arvo">' + prosentti(osAla, des) + "–" + prosentti(osYla, des) + ' %</span><span class="selite">Suomen koko sähkönkulutuksesta</span></div></div>' +
          "<div><h3>Salama = 100 GWh</h3>" + A.pikto("salama", ala, yla, 100, "var(--chart-2)") +
          '<p class="pieni">Täysi salama: vähintään. Haalea salama: voi olla jopa.</p></div>' +
          "<p>" + t(L.suomiSelite) + "</p>" +
          "<h3>Yhtä paljon kuin vuodessa käyttää noin</h3>" + '<div class="luvut">' + kodit + "</div>" +
          '<p class="pieni">' + t(L.kotiSelite) + "</p>" +
          "<p>" + t(L.loppu) + "</p>";
      }

      /* ---------- 3. Maksanko minä ---------- */
      const M = S.maksut;
      const kanavat = '<div class="kanavat">' + M.kanavat.map(k =>
        '<div class="kanava"><h3>' + A.esc(k.nimi) + "</h3><dl>" +
        "<dt>Kuka päättää</dt><dd>" + t(k.kuka) + "</dd>" +
        "<dt>Mitä tiedetään</dt><dd>" + t(k.tiedetaan) + "</dd>" +
        "<dt>Mikä on epävarmaa</dt><dd>" + t(k.epavarmaa) + "</dd></dl></div>").join("") + "</div>";
      const nako = "<h3>" + A.esc(M.nakokulmatOtsikko) + '</h3><div class="nakokulmat">' + M.nakokulmat.map(n =>
        '<div class="nakokulma"><span class="kuka">' + A.esc(n.kuka) + "</span><p>" + t(n.teksti) + "</p></div>").join("") + "</div>";
      const V = S.voimajohto;
      const osa3 = A.kortti("<h2>" + A.esc(M.otsikko) + "</h2><p>" + t(M.johdanto) + "</p>" + kanavat + nako +
        "<details><summary>" + A.esc(V.otsikko) + "</summary><p>" + t(V.teksti) + "</p></details>", "osio");

      /* ---------- 4. Sähkövero ---------- */
      const gAla = oletusMW * 8760 * L.kayttoasteAla / 1000, gYla = oletusMW * 8760 * L.kayttoasteYla / 1000; /* GWh */
      const milj = (gwh, eurMWh) => gwh * 1000 * eurMWh / 1e6;
      const osa4 = A.kortti("<h2>" + A.esc(VR.otsikko) + "</h2><p>" + t(VR.teksti) + "</p>" +
        '<div class="luvut">' +
        '<div class="luku"><span class="arvo">' + A.haarukka(milj(gAla, VR.veroUusi), milj(gYla, VR.veroUusi), 1, "milj. €") + '</span><span class="selite">sähköveroa vuodessa ' + A.fmt(oletusMW) + " MW:n keskukselta 1.7.2026 alkaen" + A.viite("he156") + "</span></div>" +
        '<div class="luku"><span class="arvo">' + A.haarukka(milj(gAla, VR.veroVanha), milj(gYla, VR.veroVanha), 1, "milj. €") + '</span><span class="selite">sama keskus vanhalla verolla (' + A.fmt(VR.veroVanha / 10, 2) + " snt/kWh)" + A.viite("he156") + "</span></div></div>" +
        '<p class="pieni">Pelin oletus: laskettu käyttöasteella ' + A.haarukka(L.kayttoasteAla * 100, L.kayttoasteYla * 100, 0, "%") + ", eli " +
        A.haarukka(Math.round(gAla), Math.round(gYla), 0, "GWh") + " vuodessa × " + A.fmt(VR.veroUusi, 2) + " € megawattitunnilta.</p>" +
        "<p>" + t(VR.valtio) + "</p>", "osio");

      /* ---------- 5. Pelin valinnat (pelaajan Energia-valinta korostetaan) ---------- */
      const PV = S.pelinValinnat;
      const oma = ctx.valinta ? ctx.valinta("energia") : null;   // vain jos pelissä on päätös id "energia"
      const osa5 = A.kortti("<h2>" + A.esc(PV.otsikko) + "</h2><p>" + t(PV.johdanto) + '</p><div class="valinnat">' +
        PV.valinnat.map((v, i) => {
          const onOma = oma === i;
          return '<div class="valinta' + (onOma ? " oma" : "") + '"><span class="kirjain" aria-hidden="true">' + A.esc(v.kirjain) + "</span><div><h3>" + A.esc(v.kirjain + ": " + v.nimi) + "</h3>" +
            (onOma ? '<span class="oma-merkki">Sinun valintasi pelissä</span>' : "") + "<p>" + t(v.teksti) + "</p></div></div>";
        }).join("") + "</div>", "osio");

      $("osiot").innerHTML = osa1 + osa2 + osa3 + osa4 + osa5;

      /* Laskurin toiminta */
      const liukuri = $("sahko-mw"), arvo = $("sahko-mw-arvo");
      function aseta(mw) {
        liukuri.value = mw;
        arvo.textContent = A.fmt(mw);
        liukuri.setAttribute("aria-valuetext", A.fmt(mw) + " megawattia");
        root.querySelectorAll("[data-mw]").forEach(b => b.setAttribute("aria-pressed", String(Number(b.dataset.mw) === mw)));
        laskeSahko(mw);
      }
      $("osiot").addEventListener("click", e => {
        const b = e.target.closest("[data-mw]");
        if (b) aseta(Number(b.dataset.mw));
      });
      liukuri.addEventListener("input", () => aseta(Number(liukuri.value)));
      aseta(oletusMW);
      return () => {};
    }
  });
})();
