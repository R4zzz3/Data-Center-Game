/* =====================================================================
   Tietomoduuli: Hukkalämpö ja vesi (id "lampo", Ympäristö-pää)
   Siirretty erillisestä artifaktista (F4) Edistyneeseen valikkoon.
   Kaikki haut root-juuren kautta, ei location.hash-muutoksia, ei globaaleja.
   ===================================================================== */
(function () {
  const DATA = {
    "id": "lampo-ja-vesi",
    "nimi": "Hukkalämpö ja vesi",
    "paat": [
      "ymparisto"
    ],
    "ingressi": "Datakeskuksen sähkö muuttuu lähes kokonaan lämmöksi. Muutama keskus lämmittää jo kokonaisia kaupunkeja, mutta monesta uudesta hankkeesta ei ole julkaistu lämpösuunnitelmaa. Lisäksi lämmön käyttö ei itsestään pienennä kenenkään laskua.",
    "lueLisaaTeksti": "Lämmittääkö datakeskus jo sinun kotiasi? Katso kunnat ja vesi.",
    "paivitetty": "2026-10-24",
    "rooliRivit": {
      "asukas": "Jos asut kaukolämpötalossa, lämpösi voi tulla datakeskuksesta. Laskusi hinnan päättää silti lämpöyhtiö, eikä ilmainen lämpö automaattisesti näy laskussa.",
      "yrittaja": "Lämpöä voi myydä myös yrityksille, esimerkiksi kasvihuoneelle tai kalankasvatukseen. Valmiita ratkaisuja on vähän, joten käyttäjä pitää usein löytää datakeskuksen ulkopuolelta.",
      "viljelija": "Kasvihuone datakeskuksen vieressä on tutkittu idea. Haalea lämpö pitää ensin säätää lämpöpumpulla, ja valmista tekniikkaa on vielä vähän.",
      "nuori": "Kun hukkalämpö korvaa poltettua lämpöä, lämmityksen päästöt voivat pienentyä. Hyöty riippuu myös siitä, millä sähköllä keskus ja lämpöpumput toimivat.",
      "valtuutettu": "Kunta voi neuvotella, minne lämpö menee ja millä ehdoilla. Lämpöpumppulaitos maksaa miljoonia euroja, ja maksaja ratkaisee, kuka hyödyn saa."
    },
    "alueRivit": {
      "maaseutu": "Kaukolämpöverkkoa ei yleensä ole. Lämmölle pitää keksiä paikallinen käyttö, tai se menee hukkaan.",
      "pienkunta": "Pieni kaukolämpöverkko täyttyy nopeasti. Mäntsälässä kaikki datakeskuksen lämpö ei edes mahdu kunnan verkkoon.",
      "kaupunki": "Iso kaukolämpöverkko voi ottaa paljon lämpöä vastaan. Hyöty voi näkyä koko seudun lämmityksessä, mutta lämpöpumppulaitokset ovat kalliita."
    },
    "oletukset": [
      "Laskurissa talteen saatua lämpöä käytetään 4 000–8 000 tuntia vuodessa. Kesällä kaukolämpöä tarvitaan vähemmän, joten kaikkea lämpöä ei aina saada käyttöön.",
      "Laskuri olettaa, että koko valittu lämpöteho päätyy koteihin. Todellisuudessa osa menee yrityksille, palveluille tai hukkaan.",
      "Kerrostaloasunnon kulutus (noin 7 MWh vuodessa) on laskettu Helenin luvuista: yli 500 000 MWh riittää noin 70 000 asuntoon.",
      "Omakotitalon kulutus (noin 20 MWh vuodessa) on laskettu Energiateollisuuden luvuista: kaukolämpötalojen keskikulutus 34,1 kWh kuutiometriä kohden kertaa 600 kuutiometrin vertailupientalo. Oikea kulutus vaihtelee talon iän ja koon mukaan.",
      "Lähes kaikki datakeskuksen käyttämä sähkö muuttuu lämmöksi. Siksi 100 MW:n keskus voi antaa enintään noin 100 MW lämpöä ennen lämpöpumppuja."
    ],
    "lahteet": [
      {
        "id": "ms-2026",
        "nimi": "Microsoft: Microsoft käynnistää pääkaupunkiseudun datakeskusalueen toisen vaiheen rakentamisen (28.4.2026)",
        "url": "https://news.microsoft.com/source/emea/2026/04/microsoft-kaynnistaa-paakaupunkiseudun-datakeskusalueen-toisen-vaiheen-rakentamisen/?lang=fi"
      },
      {
        "id": "dcd-fortum",
        "nimi": "DCD: Fortum starts operations at two heat pump plants tied to Microsoft district heating scheme (7.5.2026)",
        "url": "https://datacenterdynamics.com/en/news/fortum-starts-operations-at-two-heat-pump-plants-tied-to-microsoft-district-heating-scheme/"
      },
      {
        "id": "helen",
        "nimi": "Helen: Helen hyödyntää uuden datakeskuksen hukkalämpöä Helsingin kaukolämmössä (31.8.2026)",
        "url": "https://www.helen.fi/en/news/2026/helen-hyodyntaa-uuden-datakeskuksen-hukkalampoa-helsingin-kaukolammossa"
      },
      {
        "id": "dcd-onzero",
        "nimi": "DCD: OnZero partners with Helen to connect Helsinki AI data center to district heating network (1.9.2026)",
        "url": "https://www.datacenterdynamics.com/en/news/onzero-partners-with-helen-to-connect-helsinki-ai-data-center-to-district-heating-network/"
      },
      {
        "id": "yle-hamina",
        "nimi": "Yle: Google lahjoittaa energiayhtiölle ilmaiseksi hukkalämpöä 2 000 kotitalouteen (21.5.2024)",
        "url": "https://yle.fi/a/74-20089673"
      },
      {
        "id": "yle-capman",
        "nimi": "Yle: Haminan Energia myy tytäryhtiönsä pääomasijoittajalle (10.10.2024)",
        "url": "https://yle.fi/a/74-20117083"
      },
      {
        "id": "dcd-hamina",
        "nimi": "DCD: Google launches heat recovery project at data center in Hamina, Finland (21.5.2024)",
        "url": "https://datacenterdynamics.com/en/news/google-launches-heat-recovery-project-at-data-center-in-hamina-finland"
      },
      {
        "id": "nivos",
        "nimi": "Nivos: Datasaleista saadaan lähivuosina lisää puhdasta lämpöä Mäntsälän keskustaan (27.8.2025)",
        "url": "https://nivos.fi/ajankohtaista/uusista-konesaleista-lisaa-puhdasta-lampoa-mantsalaan/"
      },
      {
        "id": "yle-mantsala",
        "nimi": "Yle: Kaupat Venäjällä täyttivät kassan ja nyt konesali Mäntsälässä kolminkertaistuu (10.10.2024)",
        "url": "https://yle.fi/a/74-20113966"
      },
      {
        "id": "lumi",
        "nimi": "LUMI: The waste energy of LUMI supercomputer produces 20 percent of the district heat of Kajaani (20.5.2020)",
        "url": "https://www.lumi-supercomputer.eu/the-waste-energy-of-lumi-supercomputer-produces-20-percent-of-the-district-heat-of-kajaani-csc-and-loiste-lampo-have-signed-an-agreement/"
      },
      {
        "id": "loiste",
        "nimi": "Loiste Lämpö: Konesalien hukkalämmöt hyödyksi -webinaari, Kajaanin ammattikorkeakoulu (1.10.2025)",
        "url": "https://kamk.fi/wp-content/uploads/2025/10/Konesalien-hukkalammot-hyodyksi-1.10.2025-Loiste.pdf"
      },
      {
        "id": "dcd-saarijarvi",
        "nimi": "DCD: 2MW data center being developed in Central Finland will be integrated into district heating (5.3.2026)",
        "url": "https://datacenterdynamics.com/en/news/2mw-data-center-being-developed-in-central-finland-will-be-integrated-into-district-heating/"
      },
      {
        "id": "calefa",
        "nimi": "Calefa / STT Info: Datakeskusten jäähdytys lämmittää suomalaisia koteja (31.8.2026)",
        "url": "https://www.sttinfo.fi/tiedote/72274046/datakeskusten-jaahdytys-lammittaa-suomalaisia-koteja?lang=fi"
      },
      {
        "id": "hy",
        "nimi": "Pervilä & Kangasharju, Helsingin yliopisto: Datakeskusten faktat ja fiktiot (20.7.2026)",
        "url": "https://helda.helsinki.fi/server/api/core/bitstreams/533969e6-e647-4fcd-b13c-afcb62effa2d/content"
      },
      {
        "id": "tem-etl",
        "nimi": "Työ- ja elinkeinoministeriö, Pia Kotro: Energiatehokkuuslaki 1372/2025, esitys Energiaviraston tilaisuudessa (27.1.2026)",
        "url": "https://energiavirasto.fi/documents/11120570/255005306/Kotro-TEM%20ETL%20270126%20f.pdf/3e8186e5-f259-1aff-49c4-87c375bf05bc?t=1769433901280"
      },
      {
        "id": "et-tilasto",
        "nimi": "Energiateollisuus: Kaukolämpötilasto 2024 (1/2026)",
        "url": "https://energia.fi/wp-content/uploads/2026/01/Kaukolampotilasto_2024.pdf"
      },
      {
        "id": "et-hinta",
        "nimi": "Energiateollisuus: Kaukolämmön hinta 1.1.2026 (17.2.2026)",
        "url": "https://energia.fi/wp-content/uploads/2026/06/Kaukolammon_hinta_01012026.pdf"
      },
      {
        "id": "yle-kainuu",
        "nimi": "Yle: Uudet datakeskukset loivat erikoisen mahdollisuuden: Kainuussa voisi kasvattaa tulevaisuudessa mangoja (25.1.2025)",
        "url": "https://yle.fi/a/74-20138519"
      },
      {
        "id": "lappeenranta",
        "nimi": "Lappeenrannan kaupunki: Pajarila data center (2026)",
        "url": "https://lappeenranta.fi/en/decision-making-and-administration/pajarila-data-center"
      },
      {
        "id": "lvv-kouvola",
        "nimi": "Lupa- ja valvontavirasto: YVA-yksittäistapauspäätös, atNorth datakeskus Kouvola (17.6.2026)",
        "url": "https://www.ymparisto.fi/sites/default/files/documents/YVA-yksitt%C3%A4istapausp%C3%A4%C3%A4t%C3%B6s_atNorth_datakeskus_Kouvola.pdf"
      },
      {
        "id": "helsinki",
        "nimi": "Helsingin kaupunki: Lahdenväylän varteen suunnitellaan uutta datakeskusta (22.4.2026)",
        "url": "https://www.hel.fi/fi/uutiset/lahdenvaylan-varteen-suunnitellaan-uutta-datakeskusta"
      },
      {
        "id": "yle-rovaniemi",
        "nimi": "Yle: Jättikokoisen datakeskuksen tulo Rovaniemelle voi tyssätä pohjavesialueen ja vedenottamon vuoksi (27.5.2025)",
        "url": "https://yle.fi/a/74-20163451"
      },
      {
        "id": "yle-seinajoki",
        "nimi": "Yle: uutinen Seinäjoen datakeskuksen ensimmäisestä vaiheesta, 110 MW (14.7.2026)",
        "url": "https://yle.fi/a/74-20236252"
      },
      {
        "id": "aljazeera",
        "nimi": "Al Jazeera: Finland orders halt to work on Google data sites over environment concerns (7.10.2026)",
        "url": "https://www.aljazeera.com/amp/news/2026/10/7/finland-orders-halt-to-work-on-google-data-sites-over-environment-concerns"
      },
      {
        "id": "aisuomi",
        "nimi": "AI Suomi (kooste): Datakeskukset Suomessa (29.9.2026)",
        "url": "https://aisuomi.fi/opas/datakeskukset-suomessa"
      }
    ],
    "sisalto": {
      "lammonKaytto": {
        "otsikko": "Missä datakeskus jo lämmittää",
        "teksti": "Datakeskuksen lämpö on haaleaa. Kotien lämmittämiseen se nostetaan ensin lämpöpumpulla ja johdetaan kaukolämpöverkkoon. Osuudet eivät ole keskenään vertailukelpoisia: osa on toteutunutta, osa tavoitteita.",
        "kohteet": [
          {
            "id": "espoo",
            "paikka": "Espoo, Kauniainen, Kirkkonummi",
            "kuka": "Microsoft → Fortum",
            "tila": "tulossa",
            "tilaTeksti": "Alkaa 2027",
            "osuus": "noin 40 %",
            "teksti": "Koko alueen valmistuttua noin 40 % vuoden kaukolämmöstä {v:ms-2026,dcd-fortum}. Verkossa on noin 250 000 lämmön käyttäjää, ja tarve on noin 2 TWh vuodessa {v:dcd-fortum}. Lämpöä aletaan toimittaa vaiheittain vuonna 2027 {v:dcd-fortum}."
          },
          {
            "id": "helsinki",
            "paikka": "Helsinki",
            "kuka": "OnZero → Helen",
            "tila": "tulossa",
            "tilaTeksti": "Alkaa 2027",
            "osuus": "noin 70 000 asuntoa",
            "teksti": "Uusi keskus voi tuottaa yli 500 000 MWh lämpöä vuodessa. Se riittää Helenin mukaan noin 70 000 asunnon lämmitykseen {v:helen}. Lämmön talteenotto alkaa suunnitelman mukaan 2027 {v:helen}."
          },
          {
            "id": "hamina",
            "paikka": "Hamina",
            "kuka": "Google → Haminan Energia",
            "tila": "tulossa",
            "tilaTeksti": "Tavoite",
            "osuus": "noin 80 %",
            "teksti": "Googlen lämmön on määrä kattaa noin 80 % kaupungin kaukolämmöstä, noin 2 000 kotitaloutta {v:yle-hamina}. Lämpö annetaan energiayhtiölle ilmaiseksi {v:yle-hamina,dcd-hamina}. Syksyllä 2024 lämmön odotettiin tulevan käyttöön 2026 {v:yle-capman}."
          },
          {
            "id": "mantsala",
            "paikka": "Mäntsälä",
            "kuka": "Nebius → Nivos",
            "tila": "kaytossa",
            "tilaTeksti": "Käytössä",
            "osuus": "noin kolmannes",
            "teksti": "Datakeskuksen lämpö kattaa noin kolmanneksen Mäntsälän keskustan kaukolämmöstä, ja osuuden odotetaan kasvavan {v:nivos}. Lämpöä on käytetty kymmenen vuotta {v:nivos}. Kaukolämpökoteja on pari tuhatta {v:yle-mantsala}."
          },
          {
            "id": "kajaani",
            "paikka": "Kajaani",
            "kuka": "CSC:n LUMI → Loiste Lämpö",
            "tila": "kaytossa",
            "tilaTeksti": "Käytössä",
            "osuus": "noin 20 %",
            "teksti": "LUMI-supertietokoneen lämmön arvioitiin kattavan noin 20 % Kajaanin kaukolämmöstä vuodesta 2021 {v:lumi}. Loiste Lämpö odottaa, että hukkalämpö kattaa tulevaisuudessa yli 80 % sen lämmöntuotannosta {v:loiste}."
          },
          {
            "id": "saarijarvi",
            "paikka": "Saarijärvi",
            "kuka": "Eddu Energy → Saarijärven Kaukolämpö",
            "tila": "tulossa",
            "tilaTeksti": "Aloitus kertomatta",
            "osuus": "noin kolmannes",
            "teksti": "Pieni 2 MW:n keskus on mitoitettu korvaamaan noin kolmanneksen lämpöyhtiön vuoden tuotannosta, joka nyt tehdään biomassalla {v:dcd-saarijarvi}. Aloitusaikaa ei ole kerrottu {v:dcd-saarijarvi}."
          },
          {
            "id": "seinajoki",
            "paikka": "Seinäjoki",
            "kuka": "MinersLoop → Seinäjoen Energia",
            "tila": "kaytossa",
            "tilaTeksti": "Käytössä",
            "osuus": "5 MW lämpöä",
            "teksti": "Lämpöpumppulaitos tekee 4 MW:n jäähdytyksestä 5 MW kaukolämpöä {v:calefa}. Osuutta kaupungin kaukolämmöstä ei ole kerrottu."
          }
        ]
      },
      "kotini": {
        "otsikko": "Lämmittääkö kotini?",
        "ohje": "Valitse kunta. Näet, onko sen kaukolämmössä datakeskuksen lämpöä ja kuinka paljon. Tieto koskee vain kaukolämpötaloja.",
        "kunnat": [
          {
            "id": "espoo",
            "nimi": "Espoo",
            "kohde": "espoo"
          },
          {
            "id": "kauniainen",
            "nimi": "Kauniainen",
            "kohde": "espoo"
          },
          {
            "id": "kirkkonummi",
            "nimi": "Kirkkonummi",
            "kohde": "espoo"
          },
          {
            "id": "helsinki",
            "nimi": "Helsinki",
            "kohde": "helsinki"
          },
          {
            "id": "hamina",
            "nimi": "Hamina",
            "kohde": "hamina"
          },
          {
            "id": "mantsala",
            "nimi": "Mäntsälä",
            "kohde": "mantsala"
          },
          {
            "id": "kajaani",
            "nimi": "Kajaani",
            "kohde": "kajaani"
          },
          {
            "id": "saarijarvi",
            "nimi": "Saarijärvi",
            "kohde": "saarijarvi"
          },
          {
            "id": "seinajoki",
            "nimi": "Seinäjoki",
            "kohde": "seinajoki",
            "lisa": "Kaupunkiin suunnitellusta suuresta Pure DC:n kampuksesta ei ole julkaistu lämpösuunnitelmaa {v:yle-seinajoki,aisuomi}."
          },
          {
            "id": "vihti",
            "nimi": "Vihti",
            "lisa": "Microsoftin kampus on Vihdissä. Tiedotteessa lämmön saajiksi mainitaan kuitenkin Espoo, Kauniainen ja Kirkkonummi, ei Vihti {v:ms-2026}."
          },
          {
            "id": "kouvola",
            "nimi": "Kouvola",
            "lisa": "atNorthin keskuksen alueelle on suunniteltu hukkalämmön talteenottorakennus. Päätöksessä ei kerrota, minne lämpö menee {v:lvv-kouvola}."
          },
          {
            "id": "lappeenranta",
            "nimi": "Lappeenranta",
            "lisa": "Kaupungin hankesivulla kerrotaan jäähdytyksestä, mutta ei lämmön käytöstä {v:lappeenranta}."
          },
          {
            "id": "nurmijarvi",
            "nimi": "Nurmijärvi",
            "lisa": "Sudentullin hanke on vasta ympäristövaikutusten arvioinnissa {v:aisuomi}."
          },
          {
            "id": "muu",
            "nimi": "Muu kunta"
          }
        ],
        "eiTietoaOtsikko": "Ei julkaistua tietoa",
        "eiTietoaTeksti": "Emme löytäneet julkaistua tietoa siitä, että kunnan kaukolämmössä olisi datakeskuksen lämpöä. Se ei tarkoita, ettei suunnitelmaa olisi."
      },
      "eiSuunnitelmaa": {
        "otsikko": "Isot hankkeet ilman julkaistua lämpösuunnitelmaa",
        "teksti": "Monesta suuresta hankkeesta ei ole julkaistu, minne lämpö menisi. Lista perustuu koosteeseen ja hankkeiden omiin tiedotteisiin {v:aisuomi}.",
        "hankkeet": [
          {
            "kunta": "Kouvola",
            "teksti": "atNorth Myllykoski ja TikTokin Koria. Kouvolan päätöksessä mainitaan talteenottorakennus, mutta ei lämmön käyttäjää {v:aisuomi,lvv-kouvola}."
          },
          {
            "kunta": "Lappeenranta",
            "teksti": "Nebiuksen Pajarila, täysin rakennettuna 310 MW. Ensimmäinen vaihe valmistuu 2027 {v:lappeenranta}."
          },
          {
            "kunta": "Seinäjoki",
            "teksti": "Pure DC:n kampus. Ensimmäisestä vaiheesta kertovassa uutisessa ei mainita lämpöä {v:yle-seinajoki}."
          },
          {
            "kunta": "Nurmijärvi",
            "teksti": "Kinetic DC:n Sudentulli, ympäristövaikutusten arviointi käynnissä {v:aisuomi}."
          },
          {
            "kunta": "Muhos, Kajaani, Vaala",
            "teksti": "Googlen uudet alueet. Muhoksen ja Kajaanin esityöt määrättiin keskeytettäväksi arvioinnin ajaksi {v:aisuomi,aljazeera}."
          },
          {
            "kunta": "Lapinlahti, Iisalmi",
            "teksti": "Helios Nordic Energyn hankkeet, kaavoitus tai suunnittelu käynnissä {v:aisuomi}."
          },
          {
            "kunta": "Mikkeli, Oulu",
            "teksti": "Visulahden ja Ruskon keskukset. Julkisuudessa on kerrottu lähinnä jäähdytyksestä ja tehosta {v:aisuomi}."
          }
        ],
        "huomautus": "Lain mukaan yli 1 MW:n datakeskuksen hukkalämpö on hyödynnettävä {v:tem-etl}. Jos lämpöä ei käytetä, toimijan on osoitettava kustannus-hyötyanalyysillä, ettei se ole teknisesti tai taloudellisesti järkevää {v:calefa}. Kustannus-hyötyanalyysi tarkoittaa laskelmaa, jossa hyödyt ja kulut verrataan keskenään."
      },
      "kotiLaskuri": {
        "otsikko": "Kuinka monta kotia?",
        "teksti": "Laskuri arvioi, montako kotia tietty lämpöteho voisi lämmittää vuodessa. Lasku on: lämpöteho × käyttötunnit ÷ kodin vuoden lämmönkulutus.",
        "tehoOletus": 100,
        "tehoMin": 1,
        "tehoMax": 150,
        "pikavalinnat": [
          {
            "mw": 2,
            "nimi": "2 MW",
            "selite": "Saarijärven keskuksen koko"
          },
          {
            "mw": 4,
            "nimi": "4 MW",
            "selite": "Seinäjoki: talteen saatu lämpö (lämpöpumpun jälkeen 5 MW)"
          },
          {
            "mw": 100,
            "nimi": "100 MW",
            "selite": "Pelin oletus: esimerkkikeskus"
          }
        ],
        "pikaLahteet": {
          "2": "dcd-saarijarvi",
          "4": "calefa"
        },
        "tunnitAla": 4000,
        "tunnitYla": 8000,
        "kotityypit": [
          {
            "id": "kerrostalo",
            "nimi": "Kerrostaloasunto",
            "mwh": 7.1,
            "selite": "noin 7 MWh vuodessa, laskettu Helenin luvuista {v:helen}"
          },
          {
            "id": "omakotitalo",
            "nimi": "Omakotitalo",
            "mwh": 20.5,
            "selite": "noin 20 MWh vuodessa, laskettu Energiateollisuuden keskikulutuksesta ja 600 m³:n vertailutalosta {v:et-tilasto,et-hinta}"
          }
        ],
        "huom": "Tulos on arvio. Fortumin hankkeessa noin 75 % datakeskusten hukkalämmöstä on tarkoitus ohjata kaukolämpöön {v:dcd-fortum}. Lämpöpumppu lisää lämpöä: Seinäjoella 4 MW jäähdytystä tuottaa 5 MW lämpöä {v:calefa}.",
        "tehoOtsikko": "Talteen saatu lämpöteho (ennen lämpöpumppua)"
      },
      "kukaHyotyy": {
        "otsikko": "Kuka lämmöstä hyötyy?",
        "teksti": "Lämpöyhtiö ostaa tai saa lämmön ja myy sen eteenpäin. Asukkaan laskun hinnan päättää lämpöyhtiö.",
        "nakokulmat": [
          {
            "kuka": "Lämpöyhtiö",
            "teksti": "Saa lämmön halvalla tai ilmaiseksi, mutta rakentaa laitokset. Haminassa lämpöpumppulaitos maksaa noin 5 miljoonaa euroa {v:yle-hamina}. Fortumin kaksi laitosta sähkökattiloineen ja lämpövarastoineen maksavat arviolta 225 miljoonaa euroa {v:dcd-fortum}."
          },
          {
            "kuka": "Asukas",
            "teksti": "Haminan Energia ei luvannut hintojen laskua, vaikka saa lämmön ilmaiseksi {v:yle-hamina}. Tutkijoiden mukaan loppukäyttäjien laskut eivät ole pienentymässä {v:hy}. Toisaalta ilman uutta lämpöä hinnoille voisi tulla nousupainetta {v:yle-hamina}."
          },
          {
            "kuka": "Kunta",
            "teksti": "Hamina myi kaukolämpöyhtiönsä pääomasijoittajalle, koska kaupungilla ei ollut varaa investointiin. Ostaja rakentaa lämpöpumppulaitoksen {v:yle-capman}. Mäntsälässä lämpöyhtiö on kunnan oma {v:nivos}."
          },
          {
            "kuka": "Datakeskus",
            "teksti": "Saa jäähdytyksen ja täyttää lain velvoitteen. Haminassa lämpö johdettiin aiemmin mereen {v:yle-hamina}. Helsingin OnZero johtaa lämmön kaukolämpöön haihduttavan jäähdytyksen sijaan {v:dcd-onzero}."
          }
        ],
        "hyoty": "Lämpö voi korvata poltettua lämpöä. Espoon seudulla päästöjen arvioidaan vähenevän noin 400 000 tonnia vuodessa {v:ms-2026}. Mäntsälän lämpöyhtiön päästöt ovat vähentyneet noin 5 000 tonnia vuodessa {v:nivos}.",
        "haitta": "Laitokset ovat kalliita, ja joku maksaa ne. Ilmainen lämpö ei automaattisesti pienennä asukkaan laskua {v:yle-hamina,hy}. Mäntsälässä kaikki lämpö ei mahdu kunnan verkkoon {v:yle-mantsala}."
      },
      "vesi": {
        "otsikko": "Paljonko vettä jäähdytys vie?",
        "teksti": "Suomessa datakeskukset käyttävät jäähdytykseen tutkijoiden mukaan EU:n vähiten puhdasta vettä. Haihduttavaa jäähdytystä ei ole tarvittu {v:hy}. Kansallista lukua datakeskusten vedenkulutuksesta ei ole julkaistu {v:aisuomi}.",
        "rivit": [
          {
            "hanke": "Hamina, Google",
            "tapa": "Jäähdytys merivedellä {v:dcd-hamina}."
          },
          {
            "hanke": "Lappeenranta, Nebius",
            "tapa": "Suljettu nestekierto, ei tarvitse vettä paikallisista vesivaroista {v:lappeenranta}."
          },
          {
            "hanke": "Kouvola, atNorth",
            "tapa": "Suljettu nestekierto. Vettä kuluu lähinnä henkilökunnalle ja siivoukseen {v:lvv-kouvola}."
          },
          {
            "hanke": "Helsinki, OnZero",
            "tapa": "Nestejäähdytys, lämpö kaukolämpöön. Yhtiö lupaa, ettei vettä kulu paikan päällä {v:dcd-onzero}."
          },
          {
            "hanke": "Mikkeli, Visulahti",
            "tapa": "Suljettu jäähdytyskierto suunnitteilla (kooste) {v:aisuomi}."
          },
          {
            "hanke": "Helsinki, Heikinlaakso",
            "tapa": "Vaikutukset Tattarisuon pohjavesialueeseen on selvitettävä {v:helsinki}."
          },
          {
            "hanke": "Rovaniemi, Hietavaara",
            "tapa": "Alue on pohjavesialueella vedenottamon vieressä. Hanke voi kaatua siihen {v:yle-rovaniemi}."
          },
          {
            "hanke": "Imatra",
            "tapa": "Huoli pohjavesialueesta (kooste) {v:aisuomi}."
          }
        ],
        "pohjavesi": "Pohjavedelle riski ei ole niinkään jäähdytys, vaan laaja päällystetty pinta. Se voi vähentää pohjaveden muodostumista {v:yle-rovaniemi}."
      }
    },
    "pelikytkos": [
      {
        "paatos": "ymparisto",
        "vaihtoehto": "A",
        "teksti": "Kaukolämpöverkkoon: näin tehdään Espoossa, Haminassa, Mäntsälässä ja Kajaanissa. Lämpöpumppulaitos maksaa, ja maksaja ratkaisee, kuka hyötyy."
      },
      {
        "paatos": "ymparisto",
        "vaihtoehto": "B",
        "teksti": "Paikallinen käyttö: kasvihuone tai kalankasvatus on tutkittu idea, mutta valmista tekniikkaa on vähän."
      },
      {
        "paatos": "ymparisto",
        "vaihtoehto": "C",
        "teksti": "Ei vaadita: yli 1 MW:n keskuksen on silti hyödynnettävä lämpö tai osoitettava, ettei se kannata."
      }
    ]
  };

  const CSS = `
.sivu { container-type: inline-size; }
.kohteet { display: grid; grid-template-columns: repeat(auto-fit, minmax(13.5rem, 1fr)); gap: 12px; }
.kohdekortti { border: 1px solid var(--line); border-radius: 6px; padding: 12px 14px; display: grid; gap: 6px; align-content: start; background: color-mix(in srgb, var(--bg) 40%, var(--card)); }
.kohdekortti .paikka { font-family: var(--f-sc); font-weight: 700; font-size: 1rem; letter-spacing: 0.04em; }
.kohdekortti .kuka { font-size: 0.9rem; color: var(--ink-soft); }
.kohdekortti .osuus { font-family: var(--f-display); font-weight: 700; font-size: 1.5rem; line-height: 1.15; }
.kohdekortti p { font-size: 0.95rem; }
.tila { display: inline-flex; gap: 6px; align-items: center; font: 700 0.78rem var(--f-sc); letter-spacing: 0.06em; color: var(--ink); border: 1px solid var(--line); border-radius: 999px; padding: 2px 10px; justify-self: start; }
.tila .merkki { width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--chart-2); }
.tila.kaytossa .merkki { background: var(--chart-2); }
.tila.tulossa .merkki { background: linear-gradient(90deg, var(--chart-2) 50%, transparent 50%); }
.tila.eitietoa .merkki { border-color: var(--chart-muted); }
.kuntanapit { display: flex; flex-wrap: wrap; gap: 6px; }
.kuntanapit .nappi { padding: 8px 11px; }
.kuntanapit .nappi[aria-pressed="true"] { padding: 7px 10px; }
.vastaus { border-left: 4px solid var(--gold); padding: 10px 14px; display: grid; gap: 8px; background: color-mix(in srgb, var(--bg) 40%, var(--card)); border-radius: 0 6px 6px 0; }
.vastaus h3:focus { outline: none; }
.vastaus h3:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.hankelista { margin: 0; padding: 0; list-style: none; display: grid; gap: 6px; }
.hankelista li { display: grid; grid-template-columns: minmax(7.5rem, 10rem) 1fr; gap: 2px 12px; border-bottom: 1px solid var(--line); padding: 6px 0; }
.hankelista .kunta { font-family: var(--f-sc); font-weight: 700; letter-spacing: 0.04em; }
.laskuri { display: grid; gap: 12px; }
.laskuri .rivi { display: grid; gap: 6px; }
.laskuri label, .laskuri .nimi { font-family: var(--f-sc); font-weight: 700; letter-spacing: 0.06em; font-size: 0.92rem; }
.liukuri { display: flex; gap: 4px 12px; align-items: center; flex-wrap: wrap; }
.liukuri .raide { flex: 1 1 12rem; min-width: 0; display: grid; }
.liukuri input[type="range"] { width: 100%; margin: 0; accent-color: var(--chart-1); min-height: 44px; cursor: pointer; }
.liukuri output { font-family: var(--f-display); font-weight: 700; font-size: 1.6rem; min-width: 5.5rem; }
.asteikko { position: relative; height: 1.6em; margin: -8px 9px 0; font-size: 0.8rem; color: var(--ink-soft); font-variant-numeric: tabular-nums; }
.asteikko span { position: absolute; top: 4px; transform: translateX(-50%); white-space: nowrap; }
.asteikko span::before { content: ""; position: absolute; left: 50%; top: -5px; height: 5px; border-left: 1px solid var(--ink-soft); }
.asteikko span:first-child { transform: translateX(-9px); }
.asteikko span:first-child::before { left: 9px; }
.asteikko span:last-child { transform: translateX(calc(-100% + 9px)); }
.asteikko span:last-child::before { left: auto; right: 9px; }
.laskuri .napit .nappi { text-align: left; line-height: 1.25; }
.laskuri .napit .nappi .pieni { display: block; font-family: var(--f-body); font-size: 0.82rem; letter-spacing: 0; }
.tulos { display: grid; gap: 6px; border-top: 1px solid var(--line); padding-top: 10px; }
.tulos .arvo { font-family: var(--f-display); font-weight: 700; font-size: 2rem; line-height: 1.1; font-variant-numeric: tabular-nums; }
.kaava { font-size: 0.92rem; color: var(--ink-soft); }
.pikto { color: var(--chart-1); }
.vaihtoehdot { display: grid; gap: 8px; }
.vaihtoehto { display: grid; grid-template-columns: 2.2rem 1fr; gap: 10px; align-items: start; }
.vaihtoehto > div { display: grid; gap: 4px; min-width: 0; }
.vaihtoehto .kirjain { font-family: var(--f-display); font-weight: 700; font-size: 1.5rem; color: var(--red); line-height: 1.2; text-align: center; border: 1px solid var(--line); border-radius: 6px; }
.vaihtoehto.oma { border: 2px solid var(--red); border-radius: 6px; padding: 8px 10px; }
.vaihtoehto.oma .kirjain { background: var(--red); color: var(--on-red); border-color: var(--red); }
.oma-merkki { justify-self: start; font: 700 0.78rem var(--f-sc); letter-spacing: 0.06em; color: var(--red); border: 1px solid var(--red); border-radius: 999px; padding: 1px 10px; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@container (max-width: 34rem) { .hankelista li { grid-template-columns: 1fr; } .puolet { grid-template-columns: 1fr; } }
`;

  rekisteroiModuuli({
    id: "lampo",
    nimi: "Hukkalämpö ja vesi",
    lyhyt: "Lämpö ja vesi",
    pohja: true,
    data: DATA,
    css: CSS,
    html: "",
    alusta(root, APU, ctx) {
      const A = APU, D = A.D, S = D.sisalto, $ = A.$;
      /* Teksti JSONista: escapoi ja muuta {v:id1,id2} viitteiksi */
      /* Sitovat välilyönnit numeroiden ja yksiköiden väliin sekä viitteen eteen, ettei viite tai piste jää yksin riville */
      const nb = s => String(s).replace(/(\d) (?=\d{3}\b)/g, "$1\u00a0").replace(/(\d) (?=(%|MW|MWh|GWh|TWh|kWh|milj|€|m³|tonnia|kotia)(?![a-zäö]))/g, "$1\u00a0");
      const t = s => A.esc(nb(s)).replace(/ ?\{v:([a-z0-9,-]+)\}/g, (m, ids) => "\u00a0" + A.viite(ids.split(",")));
      const TILAT = { kaytossa: "Käytössä", tulossa: "Tulossa", eitietoa: "Ei julkaistua tietoa" };
      const tilaMerkki = (tila, teksti) =>
        '<span class="tila ' + tila + '"><span class="merkki" aria-hidden="true"></span>' + A.esc(teksti || TILAT[tila]) + "</span>";
      const kohteet = {};
      S.lammonKaytto.kohteet.forEach(k => { kohteet[k.id] = k; });

      /* 1. Missä datakeskus jo lämmittää */
      const L = S.lammonKaytto;
      const osa1 = A.kortti(
        '<h2 id="o-kaytto">' + A.esc(L.otsikko) + "</h2><p>" + t(L.teksti) + "</p>" +
        '<div class="kohteet">' + L.kohteet.map(k =>
          '<article class="kohdekortti"><span class="paikka">' + A.esc(k.paikka) + '</span><span class="kuka">' + A.esc(k.kuka) + "</span>" +
          tilaMerkki(k.tila, k.tilaTeksti) + '<span class="osuus">' + A.esc(k.osuus) + "</span><p>" + t(k.teksti) + "</p></article>").join("") + "</div>"
      );

      /* 2. Lämmittääkö kotini? */
      const K = S.kotini;
      const osa2 = A.kortti(
        '<h2 id="o-kotini">' + A.esc(K.otsikko) + "</h2><p>" + t(K.ohje) + "</p>" +
        '<div class="kuntanapit" role="group" aria-label="Kunta">' + K.kunnat.map(k =>
          '<button type="button" class="nappi" data-kunta="' + A.esc(k.id) + '" aria-pressed="false">' + A.esc(k.nimi) + "</button>").join("") + "</div>" +
        '<div class="vastaus" id="kotini-vastaus" aria-live="polite"></div>'
      );

      /* 3. Ei julkaistua suunnitelmaa */
      const E = S.eiSuunnitelmaa;
      const osa3 = A.kortti(
        '<h2 id="o-ei">' + A.esc(E.otsikko) + "</h2><p>" + t(E.teksti) + "</p>" +
        '<ul class="hankelista">' + E.hankkeet.map(h =>
          '<li><span class="kunta">' + A.esc(h.kunta) + "</span><span>" + t(h.teksti) + "</span></li>").join("") + "</ul>" +
        '<p class="pieni">' + t(E.huomautus) + "</p>"
      );

      /* 4. Kuinka monta kotia? */
      const Q = S.kotiLaskuri;
      const asteikkoArvot = [Q.tehoMin, 50, 100, Q.tehoMax];
      const asteikko = '<div class="asteikko" aria-hidden="true">' + asteikkoArvot.map(v =>
        '<span style="left:' + (100 * (v - Q.tehoMin) / (Q.tehoMax - Q.tehoMin)) + '%">' + A.fmt(v) + (v === Q.tehoMin || v === Q.tehoMax ? " MW" : "") + "</span>").join("") + "</div>";
      const osa4 = A.kortti(
        '<h2 id="o-laskuri">' + A.esc(Q.otsikko) + "</h2><p>" + t(Q.teksti) + "</p>" +
        '<div class="laskuri">' +
          '<div class="rivi"><label for="lampo-teho">' + A.esc(Q.tehoOtsikko) + "</label>" +
            '<div class="liukuri"><div class="raide"><input type="range" id="lampo-teho" min="' + Q.tehoMin + '" max="' + Q.tehoMax + '" step="1" value="' + Q.tehoOletus + '">' + asteikko + "</div>" +
            '<output for="lampo-teho" id="lampo-teho-arvo"></output></div>' +
            '<div class="napit" role="group" aria-label="Pikavalinnat">' + Q.pikavalinnat.map(p =>
              '<button type="button" class="nappi" data-teho="' + p.mw + '" aria-pressed="false">' + A.esc(p.nimi) + ' <span class="pieni">' + A.esc(p.selite) + "</span></button>").join("") + "</div></div>" +
          '<div class="rivi"><span class="nimi" id="lampo-kotityyppi">Kodin tyyppi</span>' +
            '<div class="napit" role="group" aria-labelledby="lampo-kotityyppi">' + Q.kotityypit.map((k, i) =>
              '<button type="button" class="nappi" data-koti="' + A.esc(k.id) + '" aria-pressed="' + (i === 0) + '">' + A.esc(k.nimi) + "</button>").join("") + "</div></div>" +
          '<div class="tulos" id="lampo-tulos" aria-live="polite"></div>' +
        "</div>" +
        '<p class="pieni">' + t(Q.huom) + "</p>"
      );

      /* 5. Kuka hyötyy? */
      const H = S.kukaHyotyy;
      const osa5 = A.kortti(
        '<h2 id="o-hyoty">' + A.esc(H.otsikko) + "</h2><p>" + t(H.teksti) + "</p>" +
        '<div class="nakokulmat">' + H.nakokulmat.map(n =>
          '<div class="nakokulma"><span class="kuka">' + A.esc(n.kuka) + "</span><p>" + t(n.teksti) + "</p></div>").join("") + "</div>" +
        A.puolet(t(H.hyoty), t(H.haitta))
      );

      /* 6. Vesi */
      const V = S.vesi;
      const osa6 = A.kortti(
        '<h2 id="o-vesi">' + A.esc(V.otsikko) + "</h2><p>" + t(V.teksti) + "</p>" +
        '<div class="taulu"><table><thead><tr><th scope="col">Hanke</th><th scope="col">Jäähdytys ja vesi</th></tr></thead><tbody>' +
        V.rivit.map(r => "<tr><td>" + A.esc(r.hanke) + "</td><td>" + t(r.tapa) + "</td></tr>").join("") +
        "</tbody></table></div><p>" + t(V.pohjavesi) + "</p>"
      );

      /* 7. Pelikytkös (pelaajan Ympäristö-valinta korostetaan) */
      const oma = ctx.valinta ? ctx.valinta("ymparisto") : null;   // vain jos pelissä on päätös id "ymparisto"
      const osa7 = A.kortti(
        '<h2 id="o-peli">Pelissä: mitä lämmölle tehdään?</h2><p>Pelin Ympäristö-päätöksessä valitset yhden kolmesta vaihtoehdosta.</p>' +
        '<div class="vaihtoehdot">' + (D.pelikytkos || []).map((p, i) => {
          const onOma = oma === i;
          return '<div class="vaihtoehto' + (onOma ? " oma" : "") + '"><span class="kirjain" aria-hidden="true">' + A.esc(p.vaihtoehto) + "</span><div>" +
            (onOma ? '<span class="oma-merkki">Sinun valintasi pelissä</span>' : "") +
            '<p><span class="sr">Vaihtoehto ' + A.esc(p.vaihtoehto) + ": </span>" + t(p.teksti) + "</p></div></div>";
        }).join("") + "</div>"
      );

      $("osiot").innerHTML = osa1 + osa2 + osa3 + osa4 + osa5 + osa6 + osa7;

      /* --- Lämmittääkö kotini? -logiikka --- */
      const vastaus = $("kotini-vastaus");
      function naytaKunta(id, siirraFokus) {
        const k = K.kunnat.find(x => x.id === id);
        if (!k) return;
        root.querySelectorAll("[data-kunta]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.kunta === id)));
        let h;
        if (k.kohde && kohteet[k.kohde]) {
          const o = kohteet[k.kohde];
          h = '<h3 tabindex="-1">' + A.esc(k.nimi) + ": " + A.esc(o.kuka) + "</h3>" + tilaMerkki(o.tila, o.tilaTeksti) +
            '<p><span class="sc">Osuus tai määrä:</span> ' + A.esc(o.osuus) + "</p><p>" + t(o.teksti) + "</p>";
        } else {
          h = '<h3 tabindex="-1">' + A.esc(k.nimi) + ": " + A.esc(K.eiTietoaOtsikko) + "</h3>" + tilaMerkki("eitietoa") + "<p>" + t(K.eiTietoaTeksti) + "</p>";
        }
        if (k.lisa) h += "<p>" + t(k.lisa) + "</p>";
        vastaus.innerHTML = h;
        if (siirraFokus) { const o3 = vastaus.querySelector("h3"); if (o3) o3.focus({ preventScroll: true }); }
      }

      /* --- Laskuri --- */
      const tila = { teho: Q.tehoOletus, koti: Q.kotityypit[0].id };
      const tehoInput = $("lampo-teho"), tehoArvo = $("lampo-teho-arvo"), tulos = $("lampo-tulos");
      function yksikko(yla) {
        const u = [10, 50, 100, 500, 1000, 2000, 5000, 10000];
        for (let i = 0; i < u.length; i++) if (yla / u[i] <= 20) return u[i];
        return 20000;
      }
      const pyorista = n => { const p = n >= 10000 ? 1000 : n >= 1000 ? 100 : 10; return Math.round(n / p) * p; };
      function laskeKodit() {
        const kt = Q.kotityypit.find(x => x.id === tila.koti);
        const gwhA = tila.teho * Q.tunnitAla / 1000, gwhY = tila.teho * Q.tunnitYla / 1000;
        const ala = pyorista(tila.teho * Q.tunnitAla / kt.mwh), yla = pyorista(tila.teho * Q.tunnitYla / kt.mwh);
        const u = yksikko(yla);
        tehoInput.value = tila.teho;
        tehoArvo.textContent = A.fmt(tila.teho) + " MW";
        tehoInput.setAttribute("aria-valuetext", A.fmt(tila.teho) + " megawattia");
        root.querySelectorAll("[data-teho]").forEach(b => b.setAttribute("aria-pressed", String(Number(b.dataset.teho) === tila.teho)));
        root.querySelectorAll("[data-koti]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.koti === tila.koti)));
        const pl = Q.pikaLahteet && Q.pikaLahteet[String(tila.teho)];
        tulos.innerHTML =
          '<span class="sc">Arvio · ' + A.esc(kt.nimi) + "</span>" +
          '<span class="arvo">' + A.haarukka(ala, yla, 0, "kotia") + "</span>" +
          A.pikto("koti", ala, yla, u) +
          '<p class="pieni">Yksi talo = ' + A.fmt(u) + " kotia. Täysi talo = vähintään, haalea = voi olla jopa.</p>" +
          '<p class="kaava">' + A.fmt(tila.teho) + " MW × " + A.fmt(Q.tunnitAla) + "–" + A.fmt(Q.tunnitYla) + " tuntia = " + A.haarukka(gwhA, gwhY, gwhY < 10 ? 1 : 0, "GWh") +
          " lämpöä vuodessa. Se jaetaan kodin kulutuksella: " + t(kt.selite) + "." + (pl ? " Tehon lähde" + A.viite(pl) + "." : "") + "</p>";
      }
      tehoInput.addEventListener("input", () => { tila.teho = Number(tehoInput.value); laskeKodit(); });

      $("osiot").addEventListener("click", e => {
        const b = e.target.closest("[data-kunta],[data-teho],[data-koti]");
        if (!b) return;
        if (b.dataset.kunta) { naytaKunta(b.dataset.kunta, true); return; }
        if (b.dataset.teho) tila.teho = Number(b.dataset.teho);
        if (b.dataset.koti) tila.koti = b.dataset.koti;
        laskeKodit();
      });

      naytaKunta(K.kunnat[0].id, false);
      laskeKodit();
      return () => {};
    }
  });
})();
