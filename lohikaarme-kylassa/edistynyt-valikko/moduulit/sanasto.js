/* Moduuli: sanasto – Datakeskussanasto (lähde: F9). Käyttää yhteistä tietomoduulipohjaa. */
(function () {
  /* moduulidata.json sellaisenaan. Lisätty kenttä esimerkkiMerkinta: pelin oma esimerkki tai lasku näkyy merkittynä. */
  const DATA = {
 "id": "sanasto",
 "nimi": "Datakeskussanasto",
 "paat": [
  "energia",
  "ymparisto",
  "tyopaikat",
  "liikenne",
  "maankaytto",
  "turvallisuus",
  "tulevaisuus"
 ],
 "ingressi": "Datakeskuksista puhutaan sanoilla, joita harva käyttää arjessa. Tästä sanastosta löydät lyhyet selitykset, esimerkit ja lähteet pelin tärkeimpiin sanoihin.",
 "lueLisaaTeksti": "Mitä tarkoittaa PUE tai asemakaava? Hae sana sanastosta.",
 "paivitetty": "2026-10-24",
 "rooliRivit": {
  "asukas": "Sähkölaskussasi siirtomaksu ja sähkövero ovat omia rivejään, ja kaukolämpösi voi tulla osin datakeskuksen hukkalämmöstä. Kaavaehdotuksesta asukkaalla on oikeus jättää muistutus.",
  "yrittaja": "Sinua koskevat erityisesti välilliset työpaikat: ne syntyvät, kun datakeskus ostaa huoltoa, rakentamista ja palveluja. Sähkövero ja siirtomaksu ovat osa myös yrityksen kuluja.",
  "viljelija": "Sinulle olennaisia ovat yleiskaava, asemakaava ja YVA, koska niissä ratkeaa, voiko peltoa tai metsää ottaa rakentamiseen. Alempi sähköveroluokka II koskee myös ammattimaista kasvihuoneviljelyä.",
  "nuori": "Tekoälytehdas, hyperskaalaaja ja henkilötyövuosi kertovat, millaista tekniikkaa ja työtä alalla on. Rakennusaikana töitä on paljon, valmiissa keskuksessa selvästi vähemmän.",
  "valtuutettu": "Sinulle keskeisiä ovat asemakaava, kiinteistövero ja kunnallisvero, koska valtuusto hyväksyy kaavat ja päättää veroprosenteista. Kiinteistövero jää varmasti sijaintikuntaan, kunnallisvero vain osin."
 },
 "alueRivit": {
  "maaseutu": "Maaseudulla korostuvat yleiskaava, YVA ja kantaverkko, koska suuret hankkeet vievät paljon maata ja tarvitsevat vahvan sähköyhteyden. Jos lähellä ei ole kaukolämpöverkkoa, hukkalämmölle voi olla vaikea löytää käyttäjää.",
  "pienkunta": "Pienessä kunnassa kiinteistövero ja välilliset työpaikat näkyvät suhteessa enemmän, koska budjetti ja työvoima ovat pienet. Kunnallisvero kertyy vain niistä työntekijöistä, jotka asuvat kunnassa.",
  "kaupunki": "Kaupungissa kaukolämpö, hukkalämpö ja asemakaava ovat keskeisiä, koska lämpöverkko on valmiina ja tontteja on vähän. Siirtomaksu ja jakeluverkko koskevat lähes jokaista kotia."
 },
 "oletukset": [
  "100 MW:n esimerkkikeskuksen käyttöaste on 50–90 %, jolloin sähköä kuluu 438–788 GWh vuodessa.",
  "Sanaston selitykset on yksinkertaistettu. Lakien, verojen ja sopimusten tarkat ehdot voivat poiketa niistä."
 ],
 "lahteet": [
  {
   "id": "vero-sahkovero",
   "nimi": "Verohallinto: Sähkövero (luettu 24.10.2026)",
   "url": "https://vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/valmisteverotus/sahkovero/"
  },
  {
   "id": "vero-verotaulukot",
   "nimi": "Verohallinto: Sähköveron verotaulukot (luettu 24.10.2026)",
   "url": "https://vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/valmisteverotus/sahkovero/verotaulukot/"
  },
  {
   "id": "fingrid-18-8",
   "nimi": "Fingrid: Sähkönkulutus on kääntymässä voimakkaaseen kasvuun (18.8.2026)",
   "url": "https://www.sttinfo.fi/tiedote/72239761/sahkonkulutus-on-kaantymassa-voimakkaaseen-kasvuun-rinnalle-tarvitaan-lisaa-saatovoimaa?lang=fi"
  },
  {
   "id": "fingrid-webinaari",
   "nimi": "Fingrid: Webinaari liittymissopimushakemuksista, esitysmateriaali (18.5.2026)",
   "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/ajankohtaista-tapahtumat/webinaari-liittymissopimushakemuksista-18.5.2026-esitysmateriaali.pdf"
  },
  {
   "id": "energiavirasto-luvat",
   "nimi": "Energiavirasto: Verkkotoiminnan luvanvaraisuus (luettu 24.10.2026)",
   "url": "https://energiavirasto.fi/verkkotoiminnan-luvanvaraisuus"
  },
  {
   "id": "energiavirasto-kuluttaja",
   "nimi": "Energiavirasto: Kuluttajainfo sähköasiakkaille (luettu 24.10.2026)",
   "url": "https://energiavirasto.fi/documents/11120570/13015916/Kuluttajainfo%20s%C3%A4hk%C3%B6asiakkaille.pdf/49dc8be6-5169-7cd6-ffa2-a690770c048f"
  },
  {
   "id": "ek-tekoalytehtaat",
   "nimi": "Euroopan komissio: AI Factories (päivitetty 12.8.2026)",
   "url": "https://digital-strategy.ec.europa.eu/en/policies/ai-factories"
  },
  {
   "id": "yle-gigatehdas",
   "nimi": "Yle: Hallitus tukee tekoälygigatehdashanketta (6.7.2025)",
   "url": "https://yle.fi/a/74-20171278"
  },
  {
   "id": "hy-faktat",
   "nimi": "Pervilä & Kangasharju, Helsingin yliopisto: Datakeskusten faktat ja fiktiot (20.7.2026)",
   "url": "https://helda.helsinki.fi/server/api/core/bitstreams/533969e6-e647-4fcd-b13c-afcb62effa2d/content"
  },
  {
   "id": "fcg-mikkeli",
   "nimi": "FCG / Mikkelin kaupunki: Aluetaloudellisten vaikutusten arviointi (27.1.2026)",
   "url": "https://mikkeli.fi/wp-content/uploads/2026/02/Aluetaloudellisten-vaikutusten-arviointi_Loppuraportti_2026.pdf"
  },
  {
   "id": "lvv-aloittaa",
   "nimi": "Aluehallintovirasto: Uusi Lupa- ja valvontavirasto aloittaa 1.1.2026 (18.12.2025)",
   "url": "https://www.sttinfo.fi/tiedote/71700931/suomen-suurimpiin-virastoihin-kuuluva-uusi-lupa-ja-valvontavirasto-aloittaa-112026?lang=fi"
  },
  {
   "id": "lvv-ebba",
   "nimi": "Lupa- ja valvontavirasto: Ebban sähkönsiirron YVA-menettely käynnistynyt (21.9.2026)",
   "url": "https://www.sttinfo.fi/tiedote/72336962/merituulivoimahanke-ebban-mantereelle-sijoittuvan-sahkonsiirron-yva-menettely-kaynnistynyt?lang=fi"
  },
  {
   "id": "aljazeera-google",
   "nimi": "Al Jazeera: Finland orders halt to work on Google data sites over environment concerns (7.10.2026)",
   "url": "https://www.aljazeera.com/amp/news/2026/10/7/finland-orders-halt-to-work-on-google-data-sites-over-environment-concerns"
  },
  {
   "id": "vihti-yva",
   "nimi": "Uudenmaan ELY-keskus: Vihdin datakeskuksen YVA-ohjelman lausuntokoonti (2023)",
   "url": "https://www.ymparisto.fi/sites/default/files/documents/Lausuntokoonti_Vihdin_datakeskus_YVA-ohjelma.pdf"
  },
  {
   "id": "helsinki-kaavoitus",
   "nimi": "Helsingin kaupunki: Kaavoitus ja suunnittelu jakautuu eri tasoihin (luettu 24.10.2026)",
   "url": "https://www.hel.fi/fi/kaupunkiymparisto-ja-liikenne/kaupunkisuunnittelu-ja-rakentaminen/miten-suunnittelu-etenee"
  },
  {
   "id": "veronmaksajat-kv",
   "nimi": "Veronmaksajain Keskusliitto: Kiinteistövero vuonna 2026 (18.12.2025)",
   "url": "https://www.veronmaksajat.fi/neuvot/henkiloverotus/asuminen-ja-auto/kiinteistovero/kiinteistovero-kuka--maksaa/"
  },
  {
   "id": "veronmaksajat-kunta",
   "nimi": "Veronmaksajain Keskusliitto: Kuntaverot (11.12.2025)",
   "url": "https://www.veronmaksajat.fi/tutkimus-ja-tilastot/kuntaverot/"
  },
  {
   "id": "tilastokeskus-htv",
   "nimi": "Tilastokeskus: Käsitteet, henkilötyövuosi (luettu 24.10.2026)",
   "url": "https://stat.fi/meta/kas/henkilotyovuosi.html"
  },
  {
   "id": "hvk-sanasto",
   "nimi": "Huoltovarmuuskeskus: Sanasto (luettu 24.10.2026)",
   "url": "https://www.huoltovarmuuskeskus.fi/sanasto"
  },
  {
   "id": "motiva-kaukolampo",
   "nimi": "Motiva: Kaukolämpö pientalossa (luettu 24.10.2026)",
   "url": "https://motiva.fi/koti_ja_asuminen/energiatehokas_pientalo/pientalon_lammitys/kaukolampo"
  },
  {
   "id": "microsoft-28-4",
   "nimi": "Microsoft: Pääkaupunkiseudun datakeskusalueen toisen vaiheen rakentaminen käynnistyy (28.4.2026)",
   "url": "https://news.microsoft.com/source/emea/2026/04/microsoft-kaynnistaa-paakaupunkiseudun-datakeskusalueen-toisen-vaiheen-rakentamisen/?lang=fi"
  }
 ],
 "sisalto": {
  "versio": "1.0 (24.10.2026)",
  "termit": [
   {
    "id": "mw-ja-mwh",
    "termi": "MW ja MWh (myös GWh ja TWh)",
    "selitys": "MW eli megawatti kertoo, kuinka paljon sähköä laite ottaa juuri nyt. MWh eli megawattitunti kertoo, paljonko sähköä kuluu ajan mittaan; 1 000 MWh on 1 GWh ja 1 000 GWh on 1 TWh.",
    "esimerkki": "Kun 1 MW on päällä koko vuoden, kuluu 8 760 MWh, joten pelin 100 MW:n keskus käyttäisi täydellä teholla noin 876 GWh vuodessa.",
    "paat": [
     "energia",
     "tulevaisuus"
    ],
    "lahde": [],
    "esimerkkiLahde": [],
    "katso": [
     "kayttoaste",
     "pue",
     "kantaverkko"
    ],
    "esimerkkiMerkinta": "Pelin oletus: pelin oma laskutoimitus."
   },
   {
    "id": "kayttoaste",
    "termi": "Käyttöaste",
    "selitys": "Käyttöaste kertoo, kuinka suuren osan täydestä tehostaan datakeskus käyttää keskimäärin. Uusi keskus ei yleensä käy heti täysillä, vaan kulutus kasvaa vaiheittain vuosien aikana.",
    "esimerkki": "Pelissä 100 MW:n keskuksen käyttöaste on 50–90 %, jolloin sähköä kuluu 438–788 GWh vuodessa.",
    "paat": [
     "energia",
     "tulevaisuus"
    ],
    "lahde": [
     "hy-faktat",
     "fingrid-18-8"
    ],
    "esimerkkiLahde": [],
    "katso": [
     "mw-ja-mwh",
     "kolokaatiokeskus"
    ],
    "esimerkkiMerkinta": "Pelin oletus:"
   },
   {
    "id": "pue",
    "termi": "PUE (energiatehokkuusluku)",
    "selitys": "PUE kertoo, paljonko sähköä koko datakeskus käyttää verrattuna siihen, mitä pelkät palvelimet käyttävät. Mitä lähempänä luku on yhtä, sitä vähemmän sähköä kuluu jäähdytykseen ja muuhun.",
    "esimerkki": "Jos PUE on 1,2, jokaista palvelinten 100 kilowattituntia kohden kuluu 20 kilowattituntia lisää esimerkiksi jäähdytykseen.",
    "paat": [
     "energia",
     "ymparisto"
    ],
    "lahde": [],
    "esimerkkiLahde": [],
    "katso": [
     "mw-ja-mwh",
     "suljettu-jaahdytyskierto",
     "hukkalampo"
    ],
    "esimerkkiMerkinta": "Pelin oletus: esimerkkiluku."
   },
   {
    "id": "datakeskus",
    "termi": "Datakeskus",
    "selitys": "Datakeskus on rakennus täynnä palvelimia eli tietokoneita, jotka tallentavat tietoa ja laskevat verkon kautta. Se tarvitsee paljon sähköä, jäähdytystä ja nopeat tietoliikenneyhteydet.",
    "paat": [
     "energia",
     "tulevaisuus",
     "turvallisuus"
    ],
    "lahde": [],
    "katso": [
     "hyperskaalaaja",
     "kolokaatiokeskus",
     "tekoalytehdas"
    ]
   },
   {
    "id": "hyperskaalaaja",
    "termi": "Hyperskaalaaja (suuri pilvipalveluyhtiö)",
    "selitys": "Hyperskaalaaja on suuri pilvipalveluyhtiö, joka rakentaa omia, hyvin isoja datakeskuksia omiin palveluihinsa. Sen palveluja käyttävät miljoonat ihmiset ja yritykset ympäri maailmaa.",
    "esimerkki": "Helsingin yliopiston selvityksen mukaan Suomessa toimi vuonna 2025 tämän kokoluokan yhtiöistä vain Google Haminassa ja Nebius Mäntsälässä.",
    "paat": [
     "tulevaisuus",
     "tyopaikat"
    ],
    "lahde": [],
    "esimerkkiLahde": [
     "hy-faktat"
    ],
    "katso": [
     "datakeskus",
     "kolokaatiokeskus",
     "tekoalytehdas"
    ]
   },
   {
    "id": "kolokaatiokeskus",
    "termi": "Kolokaatiokeskus (yhteiskäyttöinen datakeskus)",
    "selitys": "Kolokaatiokeskus vuokraa tilaa, sähköä ja jäähdytystä monelle asiakkaalle, jotka tuovat sinne omat palvelimensa. Se on vähän kuin kerrostalo, jossa eri yritykset asuvat vuokralla.",
    "esimerkki": "Helsingin yliopiston selvityksen mukaan Suomen yhteiskäyttöisten keskusten keskikoko on noin 5 MW, paljon pienempi kuin pelin 100 MW.",
    "paat": [
     "tulevaisuus",
     "energia"
    ],
    "lahde": [
     "hy-faktat"
    ],
    "esimerkkiLahde": [
     "hy-faktat"
    ],
    "katso": [
     "hyperskaalaaja",
     "kayttoaste"
    ]
   },
   {
    "id": "tekoalytehdas",
    "termi": "Tekoälytehdas ja tekoälygigatehdas",
    "selitys": "Tekoälytehdas on EU:n tukema keskus, joka kokoaa laskentatehoa, tietoa ja osaajia tekoälyn kehittämiseen. Gigatehdas on paljon suurempi laitos, jossa koulutetaan uusimpia tekoälymalleja.",
    "esimerkki": "Komission mukaan Eurooppaan suunnitellaan enintään seitsemää gigatehdasta, joissa kussakin on yli 100 000 tekoälysuoritinta.",
    "paat": [
     "tulevaisuus",
     "energia"
    ],
    "lahde": [
     "ek-tekoalytehtaat"
    ],
    "esimerkkiLahde": [
     "ek-tekoalytehtaat"
    ],
    "katso": [
     "hyperskaalaaja",
     "datakeskus"
    ],
    "lisa": "Kesällä 2025 Suomen hallitus tuki Nokian johtamaa hakemusta, jossa gigatehdasta ehdotettiin Kajaaniin LUMI-supertietokoneen yhteyteen.",
    "lisaLahde": [
     "yle-gigatehdas"
    ]
   },
   {
    "id": "kantaverkko",
    "termi": "Kantaverkko",
    "selitys": "Kantaverkko on Suomen sähköverkon runko: suurjännitejohdot, jotka siirtävät sähköä pitkiä matkoja. Sen jännite on vähintään 110 kilovolttia, ja sitä hallitsee Fingrid.",
    "esimerkki": "Fingridin mukaan datakeskushankkeilla oli elokuussa 2026 liittymissopimuksia yhteensä lähes 5 GW, mukana myös jakeluverkkoon liitettäviä.",
    "paat": [
     "energia",
     "turvallisuus",
     "maankaytto"
    ],
    "lahde": [
     "energiavirasto-luvat"
    ],
    "esimerkkiLahde": [
     "fingrid-18-8"
    ],
    "katso": [
     "fingrid",
     "jakeluverkko",
     "liittymakysely-ja-liittymissopimus"
    ]
   },
   {
    "id": "fingrid",
    "termi": "Fingrid",
    "selitys": "Fingrid on Suomen kantaverkkoyhtiö, joka hoitaa kantaverkkoa koko maassa Ahvenmaata lukuun ottamatta. Vähintään 2 MW:n uusien sähkönkäyttäjien liittymishakemukset käsitellään Fingridissä.",
    "esimerkki": "Fingridin mukaan kaikkien sovittujen datakeskushankkeiden toteutuminen kasvattaisi Suomen sähkönkulutusta lähes 40 % vuoden 2025 tasosta, ja siihen menisi ainakin viisi vuotta.",
    "paat": [
     "energia",
     "turvallisuus",
     "tulevaisuus"
    ],
    "lahde": [
     "fingrid-18-8",
     "energiavirasto-luvat",
     "fingrid-webinaari"
    ],
    "esimerkkiLahde": [
     "fingrid-18-8"
    ],
    "katso": [
     "kantaverkko",
     "liittymakysely-ja-liittymissopimus",
     "jousto"
    ]
   },
   {
    "id": "jakeluverkko",
    "termi": "Jakeluverkko",
    "selitys": "Jakeluverkko vie sähkön koteihin, maatiloille ja yrityksiin, ja sen jännite on alle 110 kilovolttia. Kullakin alueella yksi verkkoyhtiö saa jakaa sähköä.",
    "esimerkki": "Datakeskus voi liittyä myös jakeluverkkoon, ja silloin paikallinen verkkoyhtiö lähettää liittymishakemuksen Fingridille.",
    "paat": [
     "energia"
    ],
    "lahde": [
     "energiavirasto-luvat"
    ],
    "esimerkkiLahde": [
     "fingrid-webinaari"
    ],
    "katso": [
     "siirtomaksu",
     "kantaverkko"
    ]
   },
   {
    "id": "liittymakysely-ja-liittymissopimus",
    "termi": "Liityntäkysely ja liittymissopimus",
    "selitys": "Liityntäkysely eli liittymäkysely on alustava tiedustelu, joka ei sido ketään. Liittymissopimus sitoo hankkeen ja verkkoyhtiön, ja sitä varten hankkeella pitää olla lainvoimainen kaava ja rakennuslupa.",
    "esimerkki": "Fingridin mukaan kyselyissä on kulutusta yli 100 GW, josta yli puolet datakeskuksia, kun Suomen suurin sähkönkulutus on alle 16 GW.",
    "paat": [
     "energia",
     "tulevaisuus",
     "maankaytto"
    ],
    "lahde": [
     "fingrid-webinaari"
    ],
    "esimerkkiLahde": [
     "fingrid-webinaari"
    ],
    "katso": [
     "fingrid",
     "yleiskaava-ja-asemakaava",
     "kantaverkko"
    ]
   },
   {
    "id": "siirtomaksu",
    "termi": "Siirtomaksu",
    "selitys": "Siirtomaksu on se osa sähkölaskua, joka maksetaan oman alueen verkkoyhtiölle sähkön kuljettamisesta. Myyjän voi vaihtaa mutta verkkoyhtiötä ei, joten Energiavirasto valvoo hinnoittelua.",
    "esimerkki": "Energiaviraston mukaan verkkoyhtiö ei saa nostaa jakelumaksujaan yli 15 % edeltävän 12 kuukauden maksuista.",
    "paat": [
     "energia"
    ],
    "lahde": [
     "energiavirasto-kuluttaja"
    ],
    "esimerkkiLahde": [
     "energiavirasto-kuluttaja"
    ],
    "katso": [
     "jakeluverkko",
     "sahkovero"
    ]
   },
   {
    "id": "sahkovero",
    "termi": "Sähkövero ja veroluokat I ja II",
    "selitys": "Sähkövero on valtion vero jokaisesta käytetystä kilowattitunnista. Alempi veroluokka II koskee esimerkiksi teollisuutta, lämpöpumppuja ja ammattimaista kasvihuoneviljelyä, ja muu sähkö kuuluu korkeampaan luokkaan I.",
    "esimerkki": "Datakeskukset siirtyivät 1.7.2026 veroluokasta II luokkaan I, jolloin sähkön energiavero nousi 0,05 sentistä 2,24 senttiin kilowattitunnilta.",
    "paat": [
     "energia",
     "tulevaisuus"
    ],
    "lahde": [
     "vero-sahkovero"
    ],
    "esimerkkiLahde": [
     "vero-sahkovero",
     "vero-verotaulukot"
    ],
    "katso": [
     "mw-ja-mwh",
     "siirtomaksu"
    ]
   },
   {
    "id": "jousto",
    "termi": "Jousto (kysyntäjousto)",
    "selitys": "Jousto tarkoittaa, että sähkön käyttöä vähennetään tai siirretään hetkiin, jolloin sähköä on enemmän tai se on halvempaa. Se auttaa pitämään sähköjärjestelmän tasapainossa.",
    "esimerkki": "Fingridin valmistelemissa vaatimuksissa yli 30 MW:n kuluttajalta, kuten datakeskukselta, edellytetään kykyä rajoittaa verkosta otettavaa tehoa.",
    "paat": [
     "energia",
     "tulevaisuus"
    ],
    "lahde": [],
    "esimerkkiLahde": [
     "fingrid-webinaari"
    ],
    "katso": [
     "saatovoima",
     "fingrid",
     "varavoima"
    ]
   },
   {
    "id": "saatovoima",
    "termi": "Säätövoima",
    "selitys": "Säätövoima on sähköntuotantoa, jota voi lisätä tai vähentää nopeasti tarpeen mukaan. Sitä tarvitaan, kun tuuli- ja aurinkosähkön tuotanto vaihtelee sään mukaan.",
    "esimerkki": "Fingridin mukaan sähkönkulutuksen kasvun rinnalle tarvitaan lisää säätövoimaa, ja suurten uusien käyttäjien toivotaan tukevan joustoa.",
    "paat": [
     "energia",
     "tulevaisuus",
     "turvallisuus"
    ],
    "lahde": [
     "fingrid-18-8"
    ],
    "esimerkkiLahde": [
     "fingrid-18-8"
    ],
    "katso": [
     "jousto",
     "kantaverkko"
    ]
   },
   {
    "id": "varavoima",
    "termi": "Varavoima",
    "selitys": "Varavoima on datakeskuksen oma sähkönlähde, esimerkiksi generaattori tai akusto, joka käynnistyy, jos verkosta ei tule sähköä. Suurten keskusten varavoima toimii vielä useimmiten fossiilisilla polttoaineilla.",
    "esimerkki": "Vihdin hankkeessa generaattoreiden koekäytön on arvioitu kestävän noin 160 tuntia vuodessa.",
    "paat": [
     "turvallisuus",
     "ymparisto",
     "energia"
    ],
    "lahde": [
     "hy-faktat"
    ],
    "esimerkkiLahde": [
     "vihti-yva"
    ],
    "katso": [
     "huoltovarmuus",
     "jousto"
    ]
   },
   {
    "id": "huoltovarmuus",
    "termi": "Huoltovarmuus",
    "selitys": "Huoltovarmuus on yhteiskunnan kyky pitää välttämättömät taloudelliset perustoiminnot käynnissä vakavissa häiriöissä ja poikkeusoloissa. Tavoitteena on turvata ihmisten elämä ja yhteiskunnan toiminta.",
    "paat": [
     "turvallisuus"
    ],
    "lahde": [
     "hvk-sanasto"
    ],
    "katso": [
     "kriittinen-infrastruktuuri",
     "varavoima"
    ]
   },
   {
    "id": "kriittinen-infrastruktuuri",
    "termi": "Kriittinen infrastruktuuri",
    "selitys": "Kriittinen infrastruktuuri tarkoittaa rakenteita ja palveluja, joita yhteiskunta tarvitsee toimiakseen. Esimerkkejä ovat sähkön tuotanto ja siirto, vesihuolto sekä tieto- ja viestintäjärjestelmät.",
    "paat": [
     "turvallisuus"
    ],
    "lahde": [
     "hvk-sanasto"
    ],
    "katso": [
     "huoltovarmuus",
     "kantaverkko"
    ]
   },
   {
    "id": "hukkalampo",
    "termi": "Hukkalämpö",
    "selitys": "Hukkalämpö on lämpöä, joka syntyy jonkin muun toiminnan sivutuotteena ja menisi muuten hukkaan. Datakeskuksessa sitä syntyy, kun lämpenevät palvelimet jäähdytetään.",
    "esimerkki": "Microsoftin mukaan Espoon, Kauniaisten ja Kirkkonummen datakeskusten hukkalämpö voisi alueen valmistuttua kattaa noin 40 % alueen kaukolämmön tarpeesta.",
    "paat": [
     "ymparisto",
     "energia"
    ],
    "lahde": [],
    "esimerkkiLahde": [
     "microsoft-28-4"
    ],
    "katso": [
     "lampopumppu",
     "kaukolampo",
     "pue"
    ]
   },
   {
    "id": "lampopumppu",
    "termi": "Lämpöpumppu",
    "selitys": "Lämpöpumppu nostaa haalean lämmön niin kuumaksi, että sillä voi lämmittää taloja, ja käyttää siihen sähköä. Datakeskuksen hukkalämpö tarvitsee yleensä lämpöpumpun ennen kaukolämpöverkkoa.",
    "esimerkki": "Helsingin yliopiston selvityksen mukaan lämpöpumppulaitokset maksavat paljon, ja hukkalämmön hyötykäyttö on Suomessa vielä melko vähäistä.",
    "paat": [
     "ymparisto",
     "energia"
    ],
    "lahde": [
     "motiva-kaukolampo",
     "hy-faktat"
    ],
    "esimerkkiLahde": [
     "hy-faktat"
    ],
    "katso": [
     "hukkalampo",
     "kaukolampo"
    ]
   },
   {
    "id": "kaukolampo",
    "termi": "Kaukolämpö",
    "selitys": "Kaukolämmössä lämpö tuotetaan keskitetysti ja kuljetetaan kuumana vetenä putkia pitkin taloihin. Jäähtynyt vesi palaa lämpölaitokselle uudelleen lämmitettäväksi.",
    "esimerkki": "Monet energiayhtiöt tuottavat jo kaukolämpöä myös hukkalämmöllä, jota voi saada esimerkiksi datakeskusten jäähdytyksestä.",
    "paat": [
     "ymparisto",
     "energia"
    ],
    "lahde": [
     "motiva-kaukolampo"
    ],
    "esimerkkiLahde": [
     "motiva-kaukolampo"
    ],
    "katso": [
     "hukkalampo",
     "lampopumppu"
    ]
   },
   {
    "id": "suljettu-jaahdytyskierto",
    "termi": "Suljettu jäähdytyskierto",
    "selitys": "Suljetussa jäähdytyskierrossa sama vesi tai neste kiertää putkissa yhä uudelleen, eikä sitä juuri haihdu tai lasketa pois. Silloin datakeskus tarvitsee vähän uutta vettä.",
    "esimerkki": "Helsingin yliopiston selvityksen mukaan Suomessa ei ole tarvittu haihduttavaa jäähdytystä, ja puhtaan veden käyttö jäähdytyksessä on EU:n alhaisimpia.",
    "paat": [
     "ymparisto"
    ],
    "lahde": [],
    "esimerkkiLahde": [
     "hy-faktat"
    ],
    "katso": [
     "pue",
     "hukkalampo"
    ]
   },
   {
    "id": "yva",
    "termi": "YVA eli ympäristövaikutusten arviointi",
    "selitys": "YVA on menettely, jossa selvitetään ennen lupapäätöksiä, miten iso hanke vaikuttaa luontoon, ihmisiin ja ympäristöön. Kun arviointiohjelma on nähtävillä, kuka tahansa voi esittää siitä mielipiteen.",
    "esimerkki": "Vihdin datakeskushankkeen YVA-ohjelmasta annettiin vuonna 2023 lausuntoja muun muassa liikenteestä ja varavoimasta.",
    "paat": [
     "ymparisto",
     "maankaytto",
     "liikenne"
    ],
    "lahde": [
     "lvv-ebba"
    ],
    "esimerkkiLahde": [
     "vihti-yva"
    ],
    "katso": [
     "lupa-ja-valvontavirasto",
     "yleiskaava-ja-asemakaava",
     "liikenneselvitys"
    ]
   },
   {
    "id": "yleiskaava-ja-asemakaava",
    "termi": "Yleiskaava ja asemakaava",
    "selitys": "Yleiskaava on kunnan yleinen suunnitelma siitä, mihin suuntaan alueet kehittyvät pitkällä aikavälillä. Asemakaava on tarkka suunnitelma: mitä tietylle alueelle saa rakentaa, kuinka paljon ja kuinka korkealle.",
    "esimerkki": "Datakeskus ei saa liittymissopimusta Fingridin kanssa ilman lainvoimaista kaavaa.",
    "paat": [
     "maankaytto",
     "ymparisto",
     "liikenne"
    ],
    "lahde": [
     "helsinki-kaavoitus"
    ],
    "esimerkkiLahde": [
     "fingrid-webinaari"
    ],
    "katso": [
     "oas",
     "muistutus",
     "valitus",
     "liittymakysely-ja-liittymissopimus"
    ]
   },
   {
    "id": "oas",
    "termi": "OAS eli osallistumis- ja arviointisuunnitelma",
    "selitys": "OAS laaditaan, kun kaavan tekeminen alkaa. Siitä näkee, mitä kaavalla tavoitellaan ja miten asukkaat voivat osallistua työn aikana.",
    "paat": [
     "maankaytto"
    ],
    "lahde": [
     "helsinki-kaavoitus"
    ],
    "katso": [
     "yleiskaava-ja-asemakaava",
     "muistutus"
    ]
   },
   {
    "id": "muistutus",
    "termi": "Muistutus",
    "selitys": "Muistutus on kirjallinen huomautus kaavaehdotuksesta. Sen voi jättää, kun ehdotus on nähtävillä, ennen kuin kunta tekee ehdotuksesta päätöksen.",
    "paat": [
     "maankaytto"
    ],
    "lahde": [
     "helsinki-kaavoitus"
    ],
    "katso": [
     "oas",
     "valitus",
     "yleiskaava-ja-asemakaava"
    ]
   },
   {
    "id": "valitus",
    "termi": "Valitus",
    "selitys": "Kun valtuusto on hyväksynyt kaavan, siitä voi valittaa hallinto-oikeuteen. Jos kaavasta valitetaan, se tulee voimaan vasta, kun oikeus on käsitellyt valitukset.",
    "paat": [
     "maankaytto"
    ],
    "lahde": [
     "helsinki-kaavoitus"
    ],
    "katso": [
     "muistutus",
     "yleiskaava-ja-asemakaava"
    ]
   },
   {
    "id": "lupa-ja-valvontavirasto",
    "termi": "Lupa- ja valvontavirasto (LVV)",
    "selitys": "Lupa- ja valvontavirasto aloitti 1.1.2026, kun aluehallintovirastojen, Valviran ja ELY-keskusten tehtäviä koottiin yhteen. Se myöntää ja valvoo ympäristölupia ja hoitaa ympäristövaikutusten arviointia.",
    "esimerkki": "Lokakuussa 2026 virasto vaati Googlen suomalaista yhtiötä keskeyttämään ympäristöä muuttavat esityöt Muhoksella ja Kajaanissa.",
    "paat": [
     "ymparisto",
     "maankaytto"
    ],
    "lahde": [
     "lvv-aloittaa",
     "lvv-ebba"
    ],
    "esimerkkiLahde": [
     "aljazeera-google"
    ],
    "katso": [
     "yva"
    ]
   },
   {
    "id": "kiinteistovero",
    "termi": "Kiinteistövero",
    "selitys": "Kiinteistövero on vero, jonka maan ja rakennusten omistaja maksaa joka vuosi. Kunta päättää veroprosentin lain sallimissa rajoissa.",
    "esimerkki": "FCG:n Mikkelin arviossa 100 MW:n keskus maksaisi kiinteistöveroa noin 0,7 miljoonaa euroa vuodessa, ja se on ainoa vero, joka jää varmasti sijaintikuntaan.",
    "paat": [
     "tyopaikat",
     "tulevaisuus"
    ],
    "lahde": [
     "veronmaksajat-kv"
    ],
    "esimerkkiLahde": [
     "fcg-mikkeli"
    ],
    "katso": [
     "kunnallisvero",
     "yleiskaava-ja-asemakaava"
    ]
   },
   {
    "id": "kunnallisvero",
    "termi": "Kunnallisvero",
    "selitys": "Kunnallisvero on tulovero, jonka ihmiset maksavat palkastaan kotikunnalleen. Datakeskuksen sijaintikunta saa sitä vain niiltä työntekijöiltä, jotka asuvat kunnassa.",
    "esimerkki": "FCG:n Mikkelin arviossa käytön aikainen kunnallisvero olisi noin 0,8 miljoonaa euroa vuodessa, mutta sen kohdentuminen on epävarmaa.",
    "paat": [
     "tyopaikat",
     "tulevaisuus"
    ],
    "lahde": [
     "veronmaksajat-kunta",
     "fcg-mikkeli"
    ],
    "esimerkkiLahde": [
     "fcg-mikkeli"
    ],
    "katso": [
     "kiinteistovero",
     "suorat-ja-valilliset-tyopaikat"
    ]
   },
   {
    "id": "htv",
    "termi": "Henkilötyövuosi (htv)",
    "selitys": "Henkilötyövuosi tarkoittaa yhden ihmisen kokoaikaista työtä vuoden ajan. Kaksi puolipäiväistä vuoden työtä on yhteensä yksi henkilötyövuosi.",
    "esimerkki": "FCG:n arviossa 100 MW:n keskuksen rakentaminen toisi Mikkeliin noin 1 310 henkilötyövuotta koko rakennusajalle, ei joka vuodelle.",
    "paat": [
     "tyopaikat"
    ],
    "lahde": [
     "tilastokeskus-htv"
    ],
    "esimerkkiLahde": [
     "fcg-mikkeli"
    ],
    "katso": [
     "suorat-ja-valilliset-tyopaikat",
     "kunnallisvero"
    ]
   },
   {
    "id": "suorat-ja-valilliset-tyopaikat",
    "termi": "Suorat ja välilliset työpaikat",
    "selitys": "Suorat työpaikat ovat datakeskuksessa itsessään. Välilliset syntyvät muualle, kun keskus ostaa tavaroita ja palveluja, esimerkiksi suunnittelua, alihankintaa ja huoltoa.",
    "esimerkki": "FCG:n arviossa 100 MW:n keskus työllistäisi Suomessa käytön aikana suoraan noin 150 ja välillisesti noin 520 henkilötyövuotta vuodessa.",
    "paat": [
     "tyopaikat"
    ],
    "lahde": [
     "fcg-mikkeli"
    ],
    "esimerkkiLahde": [
     "fcg-mikkeli"
    ],
    "katso": [
     "htv",
     "kunnallisvero"
    ]
   },
   {
    "id": "liikenneselvitys",
    "termi": "Liikenneselvitys",
    "selitys": "Liikenneselvitys arvioi, paljonko autoja ja rekkoja hanke tuo teille rakentamisen ja käytön aikana. Sen avulla voidaan suunnitella esimerkiksi kulkureittejä ja liikenneturvallisuutta.",
    "esimerkki": "Vihdin hankkeessa maa- ja kiviainesten kuljetuksia arvioitiin rakennusaikana olevan noin 34 raskasta ajoneuvoa päivässä.",
    "paat": [
     "liikenne",
     "maankaytto"
    ],
    "lahde": [],
    "esimerkkiLahde": [
     "vihti-yva"
    ],
    "katso": [
     "yva",
     "yleiskaava-ja-asemakaava"
    ]
   }
  ],
  "nakokulmat": [
   {
    "kuka": "Energiayhtiön ja hankkeen näkökulma",
    "teksti": "Hukkalämpö on hyödyllinen sivutuote: Espoon seudulla datakeskusten lämpö voisi kattaa noin 40 % alueen kaukolämmön tarpeesta.",
    "lahde": [
     "microsoft-28-4"
    ]
   },
   {
    "kuka": "Tutkijoiden näkökulma",
    "teksti": "Hukkalämmön hyötykäyttö on Suomessa vielä melko vähäistä, ja lämpöpumppulaitokset maksavat paljon.",
    "lahde": [
     "hy-faktat"
    ]
   },
   {
    "kuka": "Kunnan talouden näkökulma",
    "teksti": "Kiinteistövero jää varmasti sijaintikuntaan, mutta kunnallis- ja yhteisöveron kohdentuminen on epävarmaa.",
    "lahde": [
     "fcg-mikkeli"
    ]
   }
  ]
 }
};

  const CSS = `
[hidden] { display: none !important; }
.haku { display: grid; gap: 6px; }
.haku label { font-family: var(--f-sc); font-weight: 700; letter-spacing: 0.06em; }
.haku input {
  font: 1rem var(--f-body); color: var(--ink); background: var(--bg); border: 1px solid var(--line); border-radius: 6px;
  min-height: 44px; padding: 8px 12px; width: 100%; min-width: 0;
}
.haku input:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.maara { font-family: var(--f-sc); font-weight: 700; letter-spacing: 0.06em; color: var(--ink-soft); }
.suodatin .nappi { padding-inline: 12px; }
.suodatin .nappi[aria-pressed="true"] { padding-inline: 11px; }
.termilista { list-style: none; margin: 0; padding: 0; display: grid; gap: 0; }
.termi { border-top: 1px solid var(--line); padding: 14px 4px; display: grid; gap: 6px; scroll-margin-top: 16px; min-width: 0; }
.termi:first-child { border-top: 0; }
.termi h3 { font-size: 1.1rem; color: var(--red); }
.termi h3:focus { outline: none; }
.termi h3:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.termi.korostus { background: color-mix(in srgb, var(--gold) 16%, transparent); border-radius: 4px; }
.termi p { overflow-wrap: anywhere; }
.termi .esim { border-left: 3px solid var(--gold); padding-left: 10px; }
.termi .esim.oletus { border-left-style: dashed; }
.termi .esim .sc, .termi .katso .sc { font-weight: 700; font-size: 0.85rem; color: var(--ink-soft); }
.termi .katso { font-size: 0.95rem; line-height: 2; }
.termi .katso a { display: inline-block; min-height: 32px; padding: 2px 0; }
.termi .katso .erotin { color: var(--ink-soft); padding: 0 2px; }
.tyhja { padding: 12px 4px; }
`;

  rekisteroiModuuli({
    id: "sanasto",
    nimi: DATA.nimi,
    lyhyt: "Sanasto",
    pohja: true,
    data: DATA,
    css: CSS,
    html: "",
    alusta(root, A) {
      const D = A.D, S = D.sisalto;
      const PAAJARJ = ["energia", "ymparisto", "tyopaikat", "liikenne", "maankaytto", "turvallisuus", "tulevaisuus"];
      const termit = S.termit.slice().sort((a, b) => a.termi.localeCompare(b.termi, "fi"));
      const nimiId = {}; termit.forEach((t) => { nimiId[t.id] = t; });
      const haku = {};
      const tila = { haku: "", paa: "" };
      const $ = (id) => root.getElementById(id);

      const v = (ids) => ids && [].concat(ids).length ? A.viite(ids) : "";
      const hakuteksti = (t) => (t.termi + " " + t.selitys + " " + (t.esimerkki || "") + " " + (t.lisa || "") + " " + t.id.replace(/-/g, " ")).toLocaleLowerCase("fi");
      termit.forEach((t) => { haku[t.id] = hakuteksti(t); });

      function termiHtml(t) {
        const katso = (t.katso || []).filter((k) => nimiId[k]);
        const merkinta = t.esimerkkiMerkinta;
        return '<li class="termi" id="termi-' + A.esc(t.id) + '" data-id="' + A.esc(t.id) + '">' +
          '<h3 tabindex="-1">' + A.esc(t.termi) + "</h3>" +
          "<p>" + A.esc(t.selitys) + v(t.lahde) + "</p>" +
          (t.esimerkki ? '<p class="esim' + (merkinta ? " oletus" : "") + '"><span class="sc">' + A.esc(merkinta || "Esimerkki:") + " </span>" + A.esc(t.esimerkki) + v(t.esimerkkiLahde) + "</p>" : "") +
          (t.lisa ? '<p class="esim">' + A.esc(t.lisa) + v(t.lisaLahde) + "</p>" : "") +
          (katso.length ? '<p class="katso"><span class="sc">Katso myös:</span> ' + katso.map((k) =>
            '<a href="#termi-' + A.esc(k) + '" data-katso="' + A.esc(k) + '">' + A.esc(nimiId[k].termi) + "</a>"
          ).join(' <span class="erotin" aria-hidden="true">·</span> ') + "</p>" : "") +
          "</li>";
      }

      const nappi = (id, nimi) => '<button type="button" class="nappi" data-paa="' + id + '" aria-pressed="' + (tila.paa === id) + '">' + A.esc(nimi) + "</button>";
      const hakuKortti = A.kortti(
        '<h2 id="sanasto-otsikko">Etsi sana</h2>' +
        '<div class="haku"><label for="sanahaku">Hae sanaa tai aihetta</label>' +
        '<input id="sanahaku" type="search" autocomplete="off" spellcheck="false" placeholder="esimerkiksi PUE, kaava tai vero" aria-describedby="sanamaara"></div>' +
        '<div class="napit suodatin" role="group" aria-label="Näytä lohikäärmeen pään mukaan">' + nappi("", "Kaikki") +
        PAAJARJ.map((p) => nappi(p, A.PAAT[p])).join("") + "</div>" +
        '<p class="maara" id="sanamaara" aria-live="polite"></p>' +
        '<ul class="termilista" id="termilista">' + termit.map(termiHtml).join("") + "</ul>" +
        '<p class="tyhja" id="tyhja" hidden>Yhtään sanaa ei löytynyt. Kokeile lyhyempää hakusanaa tai valitse ”Kaikki”.</p>',
        "", 'aria-labelledby="sanasto-otsikko"');

      const nkKortti = A.kortti(
        '<h2 id="nk-otsikko">Sama sana, eri painotus</h2>' +
        "<p>Sanat eivät ole aina neutraaleja. Esimerkiksi hukkalämmöstä ja veroista puhutaan eri tavoin sen mukaan, kuka puhuu.</p>" +
        '<div class="nakokulmat">' + S.nakokulmat.map((n) =>
          '<div class="nakokulma"><span class="kuka">' + A.esc(n.kuka) + "</span><p>" + A.esc(n.teksti) + v(n.lahde) + "</p></div>"
        ).join("") + "</div>", "", 'aria-labelledby="nk-otsikko"');

      const osiot = $("osiot");
      osiot.innerHTML = hakuKortti + nkKortti;

      const syote = $("sanahaku"), lista = $("termilista"), maara = $("sanamaara"), tyhja = $("tyhja");

      function suodata() {
        const q = tila.haku.trim().toLocaleLowerCase("fi");
        let n = 0;
        termit.forEach((t) => {
          const nakyy = (!q || haku[t.id].indexOf(q) >= 0) && (!tila.paa || t.paat.indexOf(tila.paa) >= 0);
          $("termi-" + t.id).hidden = !nakyy;
          if (nakyy) n++;
        });
        maara.textContent = n + (n === 1 ? " termi" : " termiä") + (n < termit.length ? " / " + termit.length : "");
        tyhja.hidden = n > 0;
        lista.hidden = n === 0;
        root.querySelectorAll("[data-paa]").forEach((b) => { b.setAttribute("aria-pressed", String(b.dataset.paa === tila.paa)); });
      }

      // Avaa termin: poistaa suodatuksen tarvittaessa, korostaa, vierittää näkyviin ja siirtää fokuksen. Ei koske osoiteriviin.
      function avaa(id) {
        const el = $("termi-" + id); if (!el) return;
        if (el.hidden) { tila.haku = ""; tila.paa = ""; syote.value = ""; suodata(); }
        lista.querySelectorAll(".korostus").forEach((x) => { x.classList.remove("korostus"); });
        el.classList.add("korostus");
        el.querySelector("h3").focus({ preventScroll: true });
        el.scrollIntoView({ block: "start", behavior: "auto" });
      }

      const onInput = () => { tila.haku = syote.value; suodata(); };
      const onClick = (e) => {
        const b = e.target.closest("[data-paa]");
        if (b) { tila.paa = b.dataset.paa; suodata(); return; }
        const a = e.target.closest("[data-katso]");
        if (a) { e.preventDefault(); e.stopPropagation(); avaa(a.dataset.katso); }   // isännän #-vieritys ohitetaan, avaa() hoitaa sen
      };
      syote.addEventListener("input", onInput);
      osiot.addEventListener("click", onClick);
      suodata();

      return () => { syote.removeEventListener("input", onInput); osiot.removeEventListener("click", onClick); };
    }
  });
})();
