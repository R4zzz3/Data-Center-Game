/* Moduuli: Lupaus ja toteuma (lähde: F7-tietomoduuli). Siirretty Edistyneeseen valikkoon. */
(function () {
  "use strict";
  var DATA = {
 "id": "lupaus-ja-toteuma",
 "nimi": "Lupaus ja toteuma",
 "paat": [
  "tyopaikat",
  "tulevaisuus"
 ],
 "ingressi": "Datakeskuksista kerrotaan etukäteen työpaikkoja, veroja, lämpöä ja miljardeja. Tässä arviot ovat rinnakkain sen kanssa, mitä nyt tiedetään, ja selitys sille, miksi luvut usein eroavat.",
 "lueLisaaTeksti": "Mitä luvattiin, mitä toteutui, ja miksi luvut eroavat toisistaan?",
 "paivitetty": "2026-10-24",
 "rooliRivit": {
  "asukas": "Uutisen työpaikkaluku voi tarkoittaa rakennusajan väkeä, joka on paikkakunnalla vain muutaman vuoden. Valmiissa keskuksessa työskentelee yleensä selvästi vähemmän ihmisiä.",
  "yrittaja": "Rakennusaika tuo majoitukselle, ruokapaikoille ja kuljetuksille asiakkaita muutamaksi vuodeksi. Käytön aikana kysyntä on pienempää mutta tasaisempaa.",
  "viljelija": "Arviot puhuvat yleensä työstä, veroista ja lämmöstä, eivät maataloudesta. Maatilan arkeen hanke näkyy usein enemmän rakennusajan liikenteenä kuin valmiina työpaikkoina.",
  "nuori": "Rakennustyötä on tarjolla muutaman vuoden. Käytön aikaiset työpaikat ovat pysyvämpiä, ja niihin haetaan usein sähkö-, kone- tai tietotekniikan osaajia.",
  "valtuutettu": "Kunnan talousarviossa ratkaisee, onko luku laskettu enimmäiskoosta vai ensimmäisestä vaiheesta. Kiinteistövero tulee vasta valmiista rakennuksesta, ja maanvuokrasopimus voi korvata sen osin."
 },
 "alueRivit": {
  "maaseutu": "Rakennusajan työntekijät tulevat usein muualta ja asuvat paikkakunnalla tilapäisesti. Pysyvä työntekijä voi asua naapurikunnassa, jolloin hänen kunnallisveronsa menee sinne.",
  "pienkunta": "Pienessä kunnassa yksikin hanke näkyy taloudessa selvästi. Siksi ero enimmäiskoon ja toteutuneen koon välillä tuntuu budjetissa.",
  "kaupunki": "Kaupungissa lupaus koskee usein hukkalämpöä kaukolämpöverkkoon. Lämmön osuus riippuu siitä, lasketaanko se yhden kaupungin vai koko verkon tarpeesta."
 },
 "oletukset": [
  "Tilamerkinnät (Toteutunut, Osin, Ei vielä arvioitavissa, Ero määritelmässä) ovat tämän osan tekijän tulkinta lähteistä, eivät virallinen arvio.",
  "Rivit ovat esimerkkejä. Ne eivät kata kaikkia Suomen datakeskushankkeita."
 ],
 "lahteet": [
  {
   "id": "yle-2009",
   "nimi": "Yle: Google to Turn Paper Mill into Server Centre (4.3.2009)",
   "url": "https://yle.fi/a/3-5729620"
  },
  {
   "id": "asiakastieto-tuike",
   "nimi": "Asiakastieto: Tuike Finland Oy, yrityksen tiedot (luettu 24.10.2026)",
   "url": "https://www.asiakastieto.fi/yritykset/fi/tuike-finland-oy/22060717/yfeasy"
  },
  {
   "id": "bf-2024",
   "nimi": "Business Finland: Google announced an expansion of its Hamina data center and a new heat recovery project (20.5.2024)",
   "url": "https://www.businessfinland.fi/en/whats-new/news/2024/google-announced-an-expansion-of-its-hamina-data-center/"
  },
  {
   "id": "yle-2022",
   "nimi": "Yle: Google buys more land from the city of Hamina (22.6.2022)",
   "url": "https://yle.fi/a/3-12507373"
  },
  {
   "id": "espoo-2024",
   "nimi": "Espoon kaupunki: Using waste heat from new data center to cover 40% of Espoo’s district heating needs (15.7.2024)",
   "url": "https://www.espoo.fi/en/articles/using-waste-heat-new-data-center-cover-40-espoos-district-heating-needs"
  },
  {
   "id": "ms-2026",
   "nimi": "Microsoft: Microsoft käynnistää pääkaupunkiseudun datakeskusalueen toisen vaiheen rakentamisen (28.4.2026)",
   "url": "https://news.microsoft.com/source/emea/2026/04/microsoft-kaynnistaa-paakaupunkiseudun-datakeskusalueen-toisen-vaiheen-rakentamisen/?lang=fi"
  },
  {
   "id": "ms-2022",
   "nimi": "Microsoft: Microsoft rakentaa Suomeen datakeskusalueen (17.3.2022)",
   "url": "https://news.microsoft.com/fi-fi/2022/03/17/microsoft-rakentaa-suomeen-datakeskusalueen/"
  },
  {
   "id": "dcd-fortum-2026",
   "nimi": "DCD: Fortum starts operations at two heat pump plants tied to Microsoft district heating scheme (7.5.2026)",
   "url": "https://datacenterdynamics.com/en/news/fortum-starts-operations-at-two-heat-pump-plants-tied-to-microsoft-district-heating-scheme/"
  },
  {
   "id": "ek-2025",
   "nimi": "EK: Selvitys: Datakeskukset ovat avain Suomen digitaaliseen kilpailukykyyn (Ramboll, 18.9.2025)",
   "url": "https://ek.fi/ajankohtaista/tiedotteet/selvitys-datakeskukset-ovat-avain-suomen-digitaaliseen-kilpailukykyyn-tarjoaa-suomelle-miljardiluokan-kasvupotentiaalin/"
  },
  {
   "id": "hy-faktat",
   "nimi": "Pervilä & Kangasharju, Helsingin yliopisto: Datakeskusten faktat ja fiktiot (20.7.2026)",
   "url": "https://helda.helsinki.fi/server/api/core/bitstreams/533969e6-e647-4fcd-b13c-afcb62effa2d/content"
  },
  {
   "id": "fcg-mikkeli",
   "nimi": "FCG / Mikkelin kaupunki: Aluetaloudellisten vaikutusten arviointi, loppuraportti (27.1.2026)",
   "url": "https://mikkeli.fi/wp-content/uploads/2026/02/Aluetaloudellisten-vaikutusten-arviointi_Loppuraportti_2026.pdf"
  },
  {
   "id": "google-2026",
   "nimi": "Google: tiedote investoinneista Suomeen (9.9.2026, julkaistu Cursor Oy:n sivulla)",
   "url": "https://www.cursor.fi/app/uploads/2026/09/Tiedote-Google-09092026.pdf"
  },
  {
   "id": "tiedeakatemia-2025",
   "nimi": "Suomalainen Tiedeakatemia: Datakeskusbuumi – tutkijat arvioivat, miten miljardihankkeista saadaan suurin hyöty kunnille (29.8.2025)",
   "url": "https://www.sttinfo.fi/tiedote/71396581/datakeskusbuumi-tutkijat-arvioivat-miten-miljardihankkeista-saadaan-suurin-hyoty-kunnille"
  },
  {
   "id": "aljazeera-2026",
   "nimi": "Al Jazeera: Finland orders halt to work on Google data sites over environment concerns (7.10.2026)",
   "url": "https://www.aljazeera.com/amp/news/2026/10/7/finland-orders-halt-to-work-on-google-data-sites-over-environment-concerns"
  }
 ],
 "sisalto": {
  "taulukko": {
   "otsikko": "Lupaus ja toteuma rinnakkain",
   "johdanto": "Jokaisella rivillä on yksi arvio tai lupaus, sen tekijä, nykytieto ja selitys erolle. Valitse aihe, niin näet vain sen rivit.",
   "suodatinOtsikko": "Näytä aihe",
   "aiheet": [
    {
     "id": "kaikki",
     "nimi": "Kaikki"
    },
    {
     "id": "tyopaikat",
     "nimi": "Työpaikat"
    },
    {
     "id": "verot",
     "nimi": "Verot"
    },
    {
     "id": "lampo",
     "nimi": "Lämpö"
    },
    {
     "id": "investointi",
     "nimi": "Investointi"
    }
   ],
   "sarakkeet": {
    "lupaus": "Lupaus tai arvio",
    "kuka": "Kuka ja milloin",
    "nyt": "Mitä tiedetään nyt",
    "ero": "Ero selittyy",
    "lahteet": "Lähteet"
   },
   "tilat": {
    "toteutunut": {
     "nimi": "Toteutunut",
     "merkki": "●",
     "selite": "Nykytieto vastaa arviota tai ylittää sen."
    },
    "osin": {
     "nimi": "Osin",
     "merkki": "◐",
     "selite": "Osa luvatusta on käynnissä, osa vasta tulossa."
    },
    "eiViela": {
     "nimi": "Ei vielä arvioitavissa",
     "merkki": "○",
     "selite": "Arvio koskee tulevia vuosia. Toteumaa ei voi vielä verrata."
    },
    "maaritelma": {
     "nimi": "Ero määritelmässä",
     "merkki": "⇄",
     "selite": "Luvut eroavat, koska ne laskevat eri asioita."
    }
   },
   "laajuusOtsake": "Koskee",
   "rivit": [
    {
     "id": "hamina-tyo",
     "aiheet": [
      "tyopaikat"
     ],
     "otsikko": "Googlen Hamina: työpaikat",
     "tila": "toteutunut",
     "laajuus": "yhtä hanketta, Googlen datakeskusta Haminassa",
     "lupaus": [
      "Vuonna 2009 valmiiseen palvelinkeskukseen arvioitiin 50 työpaikkaa ja remonttiin noin 200 työntekijää.[[yle-2009]]"
     ],
     "kuka": "Yle uutisoi Googlen suunnitelmasta maaliskuussa 2009.",
     "nyt": [
      "Googlen suomalainen yhtiö Tuike Finland Oy työllisti 120 henkeä vuonna 2025.[[asiakastieto-tuike]]",
      "Kampuksella oli vuonna 2024 noin 400 kokoaikaista ja alihankkijan työpaikkaa.[[bf-2024]]"
     ],
     "ero": [
      "Alussa puhuttiin yhdestä vanhan paperitehtaan rakennuksesta. Sen jälkeen kampus on laajentunut useita kertoja.[[bf-2024]]",
      "Yhtiön oma henkilöstö on pienempi luku kuin kaikki kampuksella työskentelevät. Vuonna 2022 Yle kertoi noin 400 hengen työllistyvän suoraan ja välillisesti.[[yle-2022]]"
     ],
     "lahteet": [
      "yle-2009",
      "asiakastieto-tuike",
      "bf-2024",
      "yle-2022"
     ]
    },
    {
     "id": "microsoft-tyo",
     "aiheet": [
      "tyopaikat"
     ],
     "otsikko": "Microsoftin Uusimaa: työpaikat",
     "tila": "maaritelma",
     "laajuus": "yhtä hanketta, Microsoftin kampuksia Espoossa, Kirkkonummella ja Vihdissä",
     "lupaus": [
      "Espoon kaupungin mukaan datakeskus tuo 200–300 pysyvää työpaikkaa ja noin 2 000 rakennustyöpaikkaa.[[espoo-2024]]"
     ],
     "kuka": "Espoon kaupunki heinäkuussa 2024. Microsoft huhtikuussa 2026.",
     "nyt": [
      "Microsoftin mukaan käytön aikana työskentelee noin 50 henkeä rakennusta kohden.[[ms-2026]]",
      "Rakennustyöntekijöitä on yli 3 500, huipussaan jopa 7 500. Ensimmäinen vaihe valmistuu noin vuodenvaihteessa 2026–2027.[[ms-2026]]"
     ],
     "ero": [
      "Microsoftin luku on yhtä rakennusta kohden, Espoon luku koko hankkeesta. Lopullinen määrä riippuu siitä, montako rakennusta valmistuu.",
      "Espoon tiedote ei kerro, koskeeko rakennustyön luku vain Espoota. Microsoftin luku koskee kolmea kampusta.[[espoo-2024]][[ms-2026]]",
      "Vuonna 2022 mainittu yli 11 000 työpaikkaa oli IDC:n arvio koko Suomen tietotekniikka-alasta neljässä vuodessa, ei datakeskuksen henkilöstöstä. IDC:n selvityksen rahoitti Microsoft.[[ms-2022]]"
     ],
     "lahteet": [
      "espoo-2024",
      "ms-2026",
      "ms-2022"
     ]
    },
    {
     "id": "ek-suomi",
     "aiheet": [
      "tyopaikat",
      "verot",
      "investointi"
     ],
     "otsikko": "EK:n selvitys: koko Suomen arvio",
     "tila": "eiViela",
     "laajuus": "koko Suomea, tiedossa olevia hankkeita vuosina 2025–2030",
     "lupaus": [
      "Rakentaminen työllistäisi noin 45 000 henkilötyövuotta. Henkilötyövuosi on yhden ihmisen vuoden työ.[[ek-2025]]",
      "Vuonna 2030 datakeskukset työllistäisivät suoraan ja välillisesti 9 900 henkilötyövuotta. Verovaikutus olisi noin 400 milj. € vuodessa vuodesta 2030 alkaen.[[ek-2025]]"
     ],
     "kuka": "Ramboll EK:n toimeksiannosta, syyskuu 2025.",
     "nyt": [
      "Vuosi 2030 on vielä edessä. Arvio perustuu julkisiin investointisuunnitelmiin, yhteensä noin 12 mrd €.[[ek-2025]]"
     ],
     "ero": [
      "Helsingin yliopiston tutkijoiden mukaan enimmäiskokoon lasketut mallit antavat liian suuria työpaikkalukuja. Raportti itsekin pitää epätodennäköisenä, että kaikki hankkeet onnistuvat.[[hy-faktat]]",
      "Rakennusajan 45 000 henkilötyövuotta kertyy usean vuoden aikana. Se ei tarkoita 45 000 yhtäaikaista työpaikkaa.[[ek-2025]]"
     ],
     "lahteet": [
      "ek-2025",
      "hy-faktat"
     ]
    },
    {
     "id": "google-13",
     "aiheet": [
      "investointi",
      "tyopaikat"
     ],
     "otsikko": "Googlen 13 miljardia: investointi ja työ",
     "tila": "eiViela",
     "laajuus": "yhtä yhtiötä, Googlen hankkeita Haminassa, Kajaanissa, Muhoksella ja Vaalassa",
     "lupaus": [
      "Google suunnittelee yli 13 mrd €:n investointeja vuosina 2027–2028.[[google-2026]]",
      "Työllisyysvaikutus arvioidaan yli 37 000 työpaikaksi, joista noin 16 000 rakennusalalla. Käytön aikana vaikutus olisi 7 000 työpaikkaa vuodessa.[[google-2026]]"
     ],
     "kuka": "Googlen tiedote 9.9.2026.",
     "nyt": [
      "Rakentaminen ajoittuu vuosiin 2027–2028, joten toteumaa ei voi vielä verrata.[[google-2026]]",
      "Lupa- ja valvontavirasto määräsi lokakuussa 2026 keskeyttämään merkittävät esityöt Muhoksella ja Kajaanissa, kunnes ympäristövaikutukset on arvioitu.[[aljazeera-2026]]"
     ],
     "ero": [
      "Tiedote ei kerro, kuka työpaikka-arvion teki. Se laskee mukaan myös laitetoimittajat sekä paikalliset kaupat ja ravintolat.[[google-2026]]",
      "Business Finlandin arvion mukaan datakeskuksen investointisummasta vain 10–30 % jää Suomeen.[[tiedeakatemia-2025]]"
     ],
     "lahteet": [
      "google-2026",
      "aljazeera-2026",
      "tiedeakatemia-2025"
     ]
    },
    {
     "id": "mikkeli-verot",
     "aiheet": [
      "verot",
      "tyopaikat"
     ],
     "otsikko": "Mikkelin arvio: verot ja työ",
     "tila": "eiViela",
     "laajuus": "laskennallista 100 MW:n esimerkkikeskusta Mikkelissä",
     "lupaus": [
      "Käytön aikana kiinteistövero olisi noin 0,7 milj. € ja Mikkelin kunnallisvero noin 0,8 milj. € vuodessa.[[fcg-mikkeli]]",
      "Rakennusaikana Mikkeliin syntyisi noin 1 310 henkilötyövuotta työtä.[[fcg-mikkeli]]"
     ],
     "kuka": "FCG Mikkelin kaupungille, tammikuu 2026.",
     "nyt": [
      "Arvio on tehty 100 MW:lle, jotta sitä voi myöhemmin suurentaa tai pienentää. Mikkeliin suunnitellaan isompia keskuksia, esimerkiksi noin 250 MW:n keskusta Visulahteen.[[fcg-mikkeli]]"
     ],
     "ero": [
      "Visulahden alueella kaupunki saa maasta vuokraa, noin 350 000 € vuodessa, eikä kiinteistöveroa.[[fcg-mikkeli]]",
      "Kunnallisvero menee työntekijän kotikuntaan, joka voi olla naapurikunta. Rakennustyön 1 310 henkilötyövuotta on koko rakennusajalta, ei vuodessa.[[fcg-mikkeli]]"
     ],
     "lahteet": [
      "fcg-mikkeli"
     ]
    },
    {
     "id": "hamina-lampo",
     "aiheet": [
      "lampo"
     ],
     "otsikko": "Googlen Hamina: hukkalämpö",
     "tila": "toteutunut",
     "laajuus": "yhtä hanketta, Haminan kaukolämpöverkkoa",
     "lupaus": [
      "Google kertoi 2024, että hukkalämpö kattaisi noin 80 % Haminan kaukolämmön tarpeesta. Lämpö annetaan Haminan Energialle maksutta, ja käyttö alkaisi vuoden 2025 lopulla.[[bf-2024]]"
     ],
     "kuka": "Google ja Business Finland, toukokuu 2024.",
     "nyt": [
      "Googlen syyskuun 2026 tiedotteen mukaan hukkalämpö kattaa 80 % verkon vuotuisesta lämmöntarpeesta.[[google-2026]]",
      "Tieto on yhtiön oma. Lämpöyhtiön omaa lukua ei löytynyt julkisista lähteistä."
     ],
     "ero": [
      "Osuus lasketaan kaukolämpöverkon tarpeesta, ei kaikesta Haminan lämmityksestä. Talot, joilla on oma lämmitys, eivät kuulu siihen."
     ],
     "lahteet": [
      "bf-2024",
      "google-2026"
     ]
    },
    {
     "id": "espoo-lampo",
     "aiheet": [
      "lampo"
     ],
     "otsikko": "Microsoftin Uusimaa: hukkalämpö",
     "tila": "osin",
     "laajuus": "yhtä hanketta, Fortumin kaukolämpöverkkoa Espoossa, Kauniaisissa ja Kirkkonummella",
     "lupaus": [
      "Vuonna 2022 hukkalämmön kerrottiin kattavan noin 40 % kolmen kunnan noin 250 000 kaukolämmön käyttäjän tarpeesta.[[ms-2022]]",
      "Espoon kaupunki puhui 2024 noin 40 %:sta Espoon kaukolämmön tarpeesta.[[espoo-2024]]"
     ],
     "kuka": "Microsoft ja Fortum maaliskuussa 2022. Espoon kaupunki 2024.",
     "nyt": [
      "Fortumin kaksi lämpöpumppulaitosta käynnistyi 2026. Ne tuottavat lämpöä toistaiseksi ulkoilmasta ja sähkökattiloilla.[[dcd-fortum-2026]]",
      "Datakeskusten hukkalämpö alkaa tulla verkkoon vaiheittain vuodesta 2027.[[dcd-fortum-2026]]"
     ],
     "ero": [
      "40 % koskee tilannetta, kun koko alue on valmis.[[ms-2026]] Määrä kasvaa sitä mukaa kuin rakennuksia valmistuu.[[dcd-fortum-2026]]",
      "Microsoftin luku koskee kolmen kunnan verkkoa, Espoon kaupungin luku Espoota."
     ],
     "lahteet": [
      "ms-2022",
      "espoo-2024",
      "dcd-fortum-2026",
      "ms-2026"
     ]
    }
   ],
   "tilaSeliteOtsikko": "Mitä tilamerkinnät tarkoittavat"
  },
  "lukuohje": {
   "otsikko": "Miten arvioita kannattaa lukea",
   "johdanto": "Kun näet datakeskuksesta luvun, kysy siltä nämä viisi asiaa.",
   "kysymykset": [
    {
     "kysymys": "Rakennusaika vai valmis keskus?",
     "selitys": "Rakennustyö kestää muutaman vuoden. Valmiissa keskuksessa työskentelee paljon vähemmän väkeä. Microsoftin työmailla on tuhansia rakentajia, käytössä noin 50 henkeä rakennusta kohden.[[ms-2026]]"
    },
    {
     "kysymys": "Suorat vai välilliset?",
     "selitys": "Suorat työpaikat ovat itse keskuksessa. Välilliset syntyvät toimittajille, kaupoille ja ravintoloille. Ne voivat olla muualla kuin hankekunnassa."
    },
    {
     "kysymys": "Koko alue vai yksi rakennus?",
     "selitys": "Luku voi koskea yhtä rakennusta, yhtä kampusta, kolmea kuntaa tai koko Suomea. Sama hanke voi siksi näkyä eri luvuin."
    },
    {
     "kysymys": "Enimmäiskoko vai todellinen koko?",
     "selitys": "Arvio voi olla laskettu hankkeen suurimmasta mahdollisesta koosta. Tutkijoiden mukaan sellaiset laskelmat antavat usein liian suuria lukuja.[[hy-faktat]]"
    },
    {
     "kysymys": "Vuodessa vai koko aikana?",
     "selitys": "Henkilötyövuodet lasketaan usein yhteen koko rakennusajalta. 1 310 henkilötyövuotta voi siis tarkoittaa muutamaa sataa ihmistä muutaman vuoden ajan.[[fcg-mikkeli]]"
    }
   ]
  },
  "nakokulmat": {
   "otsikko": "Miksi arviot ja toteuma eroavat",
   "johdanto": "Ero ei tarkoita, että joku olisi johtanut harhaan. Siihen on useita selityksiä.",
   "kohdat": [
    {
     "kuka": "Hankkeen tekijä",
     "teksti": "Ennakkoarvio tehdään ennen kuin kaikki tiedetään. Hanke voi kasvaa, kuten Haminassa, tai valmistua vaiheittain.[[bf-2024]]"
    },
    {
     "kuka": "Tutkija",
     "teksti": "Arviot noin 100 MW:n keskuksen henkilöstöstä vaihtelevat 64:stä 150:een. Tutkijoiden mukaan nykyaikainen keskus voi tarvita vielä vähemmän väkeä.[[hy-faktat]]"
    },
    {
     "kuka": "Kunta",
     "teksti": "Kunta tarvitsee lukuja talousarvioon ja kaavoitukseen jo ennen rakentamista. Siksi se käyttää arvioita, vaikka ne ovat epävarmoja."
    }
   ]
  }
 }
};

  var CSS = `
#osiot { container-type: inline-size; }
.suodatin { display: grid; gap: 8px; }
.lt-maara { font-family: var(--f-sc); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.06em; color: var(--ink-soft); }
.lt-lista { display: grid; gap: 14px; }
.lt-rivi { border: 1px solid var(--line); border-radius: 6px; padding: 14px 16px; display: grid; gap: 10px; min-width: 0; background: color-mix(in srgb, var(--bg) 35%, var(--card)); }
.lt-rivi[hidden] { display: none; }
.lt-paa { display: flex; flex-wrap: wrap; gap: 8px 12px; align-items: center; justify-content: space-between; }
.lt-laajuus { font-size: 0.9rem; color: var(--ink-soft); border-left: 3px solid var(--gold); padding-left: 8px; }
.lt-laajuus b { font-family: var(--f-sc); letter-spacing: 0.04em; }
.tila { display: inline-flex; align-items: center; gap: 6px; font: 700 0.82rem var(--f-sc); letter-spacing: 0.05em; color: var(--ink);
  border: 1.5px solid var(--ink-soft); border-radius: 999px; padding: 3px 10px; background: var(--card); white-space: nowrap; }
.tila .merkki { font-family: var(--f-body); font-size: 1rem; line-height: 1; }
.tila.osin { border-style: dashed; }
.tila.eiViela { border-style: dotted; border-width: 2px; }
.tila.maaritelma { border-style: double; border-width: 3px; }
.lt-tiedot { display: grid; grid-template-columns: 10.5rem minmax(0, 1fr); gap: 6px 14px; margin: 0; }
.lt-tiedot dt { font: 700 0.8rem var(--f-sc); letter-spacing: 0.07em; color: var(--ink-soft); padding-top: 3px; }
.lt-tiedot dd { margin: 0; min-width: 0; }
.lt-tiedot dd p + p { margin-top: 4px; }
.selitteet { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
.selitteet li { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 10px; align-items: start; }
.kysymykset { margin: 0; padding-left: 1.4em; display: grid; gap: 10px; }
.kysymykset li::marker { font-family: var(--f-sc); font-weight: 700; color: var(--red); }
.kysymykset strong { font-family: var(--f-sc); letter-spacing: 0.03em; }
.lukulaatikko { border: 2px solid var(--gold); border-radius: 6px; }
@container (max-width: 560px) {
  .lt-tiedot { grid-template-columns: 1fr; gap: 2px; }
  .lt-tiedot dd { margin-bottom: 8px; }
  .lt-rivi { padding: 12px; }
  .selitteet li { grid-template-columns: 1fr; gap: 2px; }
  .selitteet li .tila { justify-self: start; }
}
`;

  rekisteroiModuuli({
    id: "lupaukset",
    nimi: DATA.nimi,
    lyhyt: "Lupaus ja toteuma",
    pohja: true,
    data: DATA,
    css: CSS,
    html: "",
    alusta: function (root, A, ctx) {
      var D = A.D, S = D.sisalto, T = S.taulukko;
      var $ = function (id) { return root.getElementById(id); };
      /* Teksti JSONista: escapoidaan ja [[lahde-id]] korvataan viitteellä */
      function teksti(s) { return A.esc(s).replace(/\[\[([a-z0-9-]+)\]\]/g, function (_, id) { return A.viite(id); }); }
      function kappaleet(lista) { return [].concat(lista).map(function (s) { return "<p>" + teksti(s) + "</p>"; }).join(""); }
      function siru(tilaId) {
        var t = T.tilat[tilaId];
        return '<span class="tila ' + A.esc(tilaId) + '"><span class="merkki" aria-hidden="true">' + A.esc(t.merkki) + "</span>" + A.esc(t.nimi) + "</span>";
      }
      var aiheNimi = {}; T.aiheet.forEach(function (a) { aiheNimi[a.id] = a.nimi; });

      function rivi(r) {
        var k = T.sarakkeet;
        return '<article class="lt-rivi" data-aiheet="' + A.esc(r.aiheet.join(" ")) + '" aria-labelledby="rivi-' + A.esc(r.id) + '">' +
          '<div class="lt-paa"><h3 id="rivi-' + A.esc(r.id) + '">' + A.esc(r.otsikko) + "</h3>" + siru(r.tila) + "</div>" +
          '<p class="lt-laajuus"><b>' + A.esc(T.laajuusOtsake) + ":</b> " + A.esc(r.laajuus) + ' · <span class="sc">' + r.aiheet.map(function (a) { return A.esc(aiheNimi[a]); }).join(", ") + "</span></p>" +
          '<dl class="lt-tiedot">' +
          "<dt>" + A.esc(k.lupaus) + "</dt><dd>" + kappaleet(r.lupaus) + "</dd>" +
          "<dt>" + A.esc(k.kuka) + "</dt><dd><p>" + teksti(r.kuka) + "</p></dd>" +
          "<dt>" + A.esc(k.nyt) + "</dt><dd>" + kappaleet(r.nyt) + "</dd>" +
          "<dt>" + A.esc(k.ero) + "</dt><dd>" + kappaleet(r.ero) + "</dd>" +
          "<dt>" + A.esc(k.lahteet) + "</dt><dd><p>" + A.viite(r.lahteet) + "</p></dd>" +
          "</dl></article>";
      }

      var tilaSelitteet = "<details><summary>" + A.esc(T.tilaSeliteOtsikko) + '</summary><ul class="selitteet">' +
        Object.keys(T.tilat).map(function (id) { return "<li>" + siru(id) + "<span>" + A.esc(T.tilat[id].selite) + "</span></li>"; }).join("") + "</ul></details>";

      var osa1 = A.kortti(
        '<h2 id="taulukko-otsikko">' + A.esc(T.otsikko) + "</h2><p>" + A.esc(T.johdanto) + "</p>" +
        '<div class="suodatin"><h3 id="suodatin-otsikko">' + A.esc(T.suodatinOtsikko) + "</h3>" +
        '<div class="napit" role="group" aria-labelledby="suodatin-otsikko">' +
        T.aiheet.map(function (a, i) { return '<button type="button" class="nappi" data-aihe="' + A.esc(a.id) + '" aria-pressed="' + (i === 0) + '" aria-controls="lt-lista">' + A.esc(a.nimi) + "</button>"; }).join("") +
        '</div><p class="lt-maara" id="lt-maara" aria-live="polite"></p></div>' +
        tilaSelitteet +
        '<div class="lt-lista" id="lt-lista">' + T.rivit.map(rivi).join("") + "</div>",
        "", 'aria-labelledby="taulukko-otsikko"');

      var L = S.lukuohje;
      var osa2 = A.kortti(
        '<h2 id="lukuohje-otsikko">' + A.esc(L.otsikko) + "</h2><p>" + A.esc(L.johdanto) + '</p><ol class="kysymykset">' +
        L.kysymykset.map(function (q) { return "<li><strong>" + A.esc(q.kysymys) + "</strong><p>" + teksti(q.selitys) + "</p></li>"; }).join("") + "</ol>",
        "lukulaatikko", 'aria-labelledby="lukuohje-otsikko"');

      var N = S.nakokulmat;
      var osa3 = A.kortti(
        '<h2 id="nakokulmat-otsikko">' + A.esc(N.otsikko) + "</h2><p>" + A.esc(N.johdanto) + '</p><div class="nakokulmat">' +
        N.kohdat.map(function (n) { return '<div class="nakokulma"><span class="kuka">' + A.esc(n.kuka) + "</span><p>" + teksti(n.teksti) + "</p></div>"; }).join("") + "</div>",
        "", 'aria-labelledby="nakokulmat-otsikko"');

      var osiot = $("osiot");
      osiot.innerHTML = osa1 + osa2 + osa3;

      /* Suodatin aiheen mukaan */
      function suodata(aihe) {
        var rivit = root.querySelectorAll("#lt-lista .lt-rivi"), n = 0;
        [].forEach.call(rivit, function (el) {
          var nayta = aihe === "kaikki" || el.getAttribute("data-aiheet").split(" ").indexOf(aihe) >= 0;
          el.hidden = !nayta; if (nayta) n++;
        });
        [].forEach.call(root.querySelectorAll("[data-aihe]"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-aihe") === aihe)); });
        $("lt-maara").textContent = "Näkyvissä " + n + " / " + rivit.length + " riviä" + (aihe === "kaikki" ? "" : " · aihe: " + aiheNimi[aihe]);
      }
      osiot.addEventListener("click", function (e) {
        var b = e.target.closest("[data-aihe]"); if (!b) return;
        suodata(b.getAttribute("data-aihe"));
      });
      suodata("kaikki");
      return function () {};
    }
  });
})();
