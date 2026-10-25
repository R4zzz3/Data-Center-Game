/* ===== Tietomoduuli: Näin vaikutat (id vaikuta) =====
   Lähde: erillinen artifakti 'Näin vaikutat' (tietomoduulipohja v1). Hankkeen polku, esimerkit, muistutuksen pohja,
   kuka päättää, aloitteet ja lakimuutos. Data siirretty sellaisenaan (pois: käyttämätön lueLisaaTeksti).
*/
(function () {
  var DATA = {
   "id": "nain-vaikutat",
   "nimi": "Näin vaikutat",
   "paat": [
    "maankaytto",
    "tulevaisuus"
   ],
   "ingressi": "Datakeskus etenee ilmoituksesta kaavaan, lupiin ja rakentamiseen. Jokaisessa vaiheessa asukas voi vielä sanoa sanansa, oli hän hankkeen puolella tai sitä vastaan.",
   "paivitetty": "2026-10-24",
   "rooliRivit": {
    "asukas": "Naapurina sinua kuullaan rakentamisluvasta, ja kaavaehdotuksesta voit jättää muistutuksen. Kunnan on vastattava muistutukseen perustellusti.",
    "yrittaja": "Yrityksesi on kaavan osallinen, jos kaava vaikuttaa sen toimintaan. Yritys voi jättää mielipiteen tai muistutuksen ja tehdä kuntaan aloitteen.",
    "viljelija": "Maanomistajana olet kaavan osallinen ja voit olla maasopimuksen osapuoli. Voimajohtoa varten maastasi voidaan lunastaa käyttöoikeus; maa jää sinulle ja menetykset korvataan.",
    "nuori": "Kunnan nuorisovaltuustolla on oikeus vaikuttaa kunnan suunnitteluun. Mielipiteen YVA:sta voi antaa jokainen, johon hanke voi vaikuttaa, ja kunnan asukas voi tehdä kuntalaisaloitteen.",
    "valtuutettu": "Sinä päätät: merkittävä kaava tulee valtuuston hyväksyttäväksi. Asukkaiden muistutukset ja kunnan vastineet ovat osa päätösaineistoasi."
   },
   "alueRivit": {
    "maaseutu": "Hanke voi tarvita satoja hehtaareja ja uusia voimajohtoja, joten osallisina on usein monta maanomistajaa. Kajaanin Otanmäen hankealue on noin 405 hehtaaria.",
    "pienkunta": "Pienessä kunnassa sama lautakunta ja valtuusto käsittelevät usein kaavan alusta loppuun. Päättäjät ovat lähellä, ja yksi hanke voi olla kunnan suurin kaava-asia.",
    "kaupunki": "Kaupungissa kaavoja on vireillä paljon ja naapureita on enemmän. Rakentamisluvassa naapuri on rajanaapuri tai kadun toisella puolella oleva kiinteistö."
   },
   "oletukset": [
    "Vaiheiden järjestys on yksinkertaistettu. Todellisessa hankkeessa YVA, kaava ja luvat voivat kulkea osin rinnakkain.",
    "Esisopimuksesta tai maan vuokrasta päättävä toimielin riippuu kunnan omista säännöistä ja sopimuksen koosta.",
    "Roolillesi tärkeimmät vaiheet on valittu pelissä, eivät lähteistä."
   ],
   "lahteet": [
    {
     "id": "yva-kortit",
     "nimi": "Ympäristöhallinto (ymparisto.fi): YVA-tietokortit osallistujalle (8/2022)",
     "url": "https://www.ymparisto.fi/sites/default/files/documents/YVA_Tietokortit_Osallistujalle_8_22.pdf"
    },
    {
     "id": "ely-lvv",
     "nimi": "ELY-keskus: Kysymyksiä ja vastauksia Lupa- ja valvontaviraston ympäristötoimialasta (25.11.2025)",
     "url": "https://www.ely-keskus.fi/documents/d/ely-keskus/kysymyksia-ja-vastauksia-lupa-ja-valvontaviraston-ymparistotoimialasta-25112025-pdf"
    },
    {
     "id": "mra-895",
     "nimi": "Finlex: Maankäyttö- ja rakennusasetus 895/1999, 27 § ja 30 § (alkuperäinen säädös 10.9.1999)",
     "url": "https://data.finlex.fi/api/assets/extra/statute-book-of-finland-pdf/fin/1999/19990100.pdf"
    },
    {
     "id": "vihti-sanasto",
     "nimi": "Vihdin kunta: Kaavasanasto (päiväämätön)",
     "url": "https://www.vihti.fi/wp-content/uploads/kaavasanasto-2.pdf"
    },
    {
     "id": "loimaa-rakl",
     "nimi": "Loimaan kaupunki: Rakentamislaki astuu voimaan 1.1.2025 (12/2024)",
     "url": "https://www.loimaa.fi/wp-content/uploads/2024/12/rakentamislaki-astuu-voimaan-1.1.2025.pdf"
    },
    {
     "id": "hel-naapuri",
     "nimi": "Helsingin kaupunki: Naapurin kuuleminen ja suostumus (luettu 24.10.2026)",
     "url": "https://www.hel.fi/fi/kaupunkiymparisto-ja-liikenne/tontit-ja-rakentamisen-luvat/rakentamisluvan-hakeminen/naapurin-kuuleminen-ja-suostumus"
    },
    {
     "id": "oulu-valitus",
     "nimi": "Oulun kaupunginvaltuusto: Pöytäkirjan ote 2/2026, asemakaavan hyväksyminen ja valitusosoitus (30.3.2026)",
     "url": "https://www.ouka.fi/media/18401/download"
    },
    {
     "id": "kouvola-kh",
     "nimi": "Kouvolan kaupunginhallitus: Pöytäkirjanote § 130, oikaisuvaatimusohje (1.6.2026)",
     "url": "https://www.kouvola.fi/wp-content/uploads/2026/06/kouvolan-kaupunginhallituksen-poytakirjanote-§130.pdf"
    },
    {
     "id": "yle-lappeenranta",
     "nimi": "Yle: Lappeenranta vuokraa tontit datakeskukselle (5.3.2026)",
     "url": "https://yle.fi/a/74-20213516"
    },
    {
     "id": "pyhajarvi",
     "nimi": "Pyhäjärven tekninen lautakunta: Uusi-Olkkolan asemakaavan OAS (18.11.2025)",
     "url": "https://poytakirjat.pyhajarvi.fi/djulkaisu/kokous/2025355-8.PDF"
    },
    {
     "id": "varkaus",
     "nimi": "Varkauden kaupunki: Kuulutus, Kiertotie 9 asemakaavaehdotus (6.2.2025)",
     "url": "https://varkaus.fi/sites/default/files/2025-02/kuulutus.pdf"
    },
    {
     "id": "lvv-sudentulli",
     "nimi": "Lupa- ja valvontavirasto: Klaukkalan Sudentullin datakeskuksen YVA-menettely käynnistyy (16.9.2026)",
     "url": "https://www.sttinfo.fi/tiedote/72306550/klaukkalan-sudentullin-datakeskuksen-yva-menettely-kaynnistyy?lang=fi"
    },
    {
     "id": "lvv-otanmaki",
     "nimi": "Lupa- ja valvontavirasto: Kehotus ja kuuleminen, Kajaanin-Otanmäen datakeskushanke (6.10.2026)",
     "url": "https://www.sttinfo.fi/files/69821631/72390663/516070/fi"
    },
    {
     "id": "vu-google",
     "nimi": "Verkkouutiset: Viranomainen kehottaa Googlea keskeyttämään datakeskusten valmistelun (6.10.2026)",
     "url": "https://www.verkkouutiset.fi/a/viranomainen-kehottaa-googlea-keskeyttamaan-datakeskusten-valmistelun/"
    },
    {
     "id": "kaleva-google",
     "nimi": "Kaleva: Google vastasi viranomaiselle (12.10.2026)",
     "url": "https://www.kaleva.fi/google-vastasi-viranomaiselle-tyomailla-saatetaan/13706132"
    },
    {
     "id": "kaleva-sll",
     "nimi": "Kaleva: Luonnonsuojeluliitto vaatii Muhoksen datakeskustöiden keskeyttämistä (17.9.2026)",
     "url": "https://www.kaleva.fi/luonnonsuojeluliitto-googlen-datakeskustyomailla-t/13671648"
    },
    {
     "id": "yle-otanmaki",
     "nimi": "Yle: Kaivosyhtiö Otanmäki Mine valitti osayleiskaavasta hallinto-oikeuteen (23.6.2026)",
     "url": "https://yle.fi/a/74-20232726"
    },
    {
     "id": "vhao-espoo",
     "nimi": "Vaasan hallinto-oikeus: Päätös 826/2026, datakeskuksen ympäristölupa, Espoo (23.6.2026)",
     "url": "https://www.tuomioistuimet.fi/app/uploads/sites/12/2026/01/VHaO-paatos-23.6.2026-nro-826_2026-dnro-1460_2025.pdf"
    },
    {
     "id": "lvv-lahti",
     "nimi": "Lupa- ja valvontavirasto: Lahden Kiveriön datakeskukselle myönnettiin ympäristölupa (5.10.2026)",
     "url": "https://www.sttinfo.fi/tiedote/72369251/lahden-kiverion-datakeskukselle-myonnettiin-ymparistolupa?lang=fi"
    },
    {
     "id": "mml-hamina",
     "nimi": "Maanmittauslaitos: Voimajohtolunastus Kotka–Hamina, alkukokouksen aineisto (28.5.2025)",
     "url": "https://www.maanmittauslaitos.fi/sites/maanmittauslaitos.fi/files/Voimajohtolunastus_toimituskalvot_Tuike%20alkukokous.pdf"
    },
    {
     "id": "fingrid-webinaari",
     "nimi": "Fingrid: Webinaari liittymissopimushakemuksista, esitysmateriaali (18.5.2026)",
     "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/ajankohtaista-tapahtumat/webinaari-liittymissopimushakemuksista-18.5.2026-esitysmateriaali.pdf"
    },
    {
     "id": "ejustice",
     "nimi": "Euroopan e-oikeusportaali: Oikeussuoja ympäristöasioissa, Suomi (luettu 24.10.2026)",
     "url": "https://e-justice.europa.eu/pdf-export/952_fi"
    },
    {
     "id": "kuntalaki-419",
     "nimi": "Finlex: Laki kuntalain muuttamisesta 419/2021, 23 § aloiteoikeus (25.5.2021)",
     "url": "https://finlex.fi/api/media/statute/25820/mainPdf/main.pdf"
    },
    {
     "id": "kuntaliitto",
     "nimi": "Kuntaliitto: Vaikuttamistoimielimet (päivitetty 8/2024)",
     "url": "https://www.kuntaliitto.fi/sites/default/files/media/file/Vaikuttamistoimielimet_p%C3%A4ivitetty2024.pdf"
    },
    {
     "id": "kaleva-aloite",
     "nimi": "Kaleva: Kansalaisaloite datakeskusten sähkönkäytön rajoittamisesta etenee eduskuntaan (18.9.2026)",
     "url": "https://www.kaleva.fi/kansalaisaloite-datakeskusten-sahkonkayton-rajoitt/13672490"
    },
    {
     "id": "he-70-2026",
     "nimi": "Edilex: HE 70/2026, hallituksen esitys uudeksi alueidenkäyttölaiksi (vireillä)",
     "url": "https://www.edilex.fi/he/20260070"
    },
    {
     "id": "safa",
     "nimi": "Suomen Arkkitehtiliitto SAFA: Kaavoituksen sujuvoittaminen ei saa tapahtua osallisuuden kustannuksella (16.9.2026)",
     "url": "https://www.sttinfo.fi/tiedote/72328190/kaavoituksen-sujuvoittaminen-ei-saa-tapahtua-osallisuuden-ja-ympariston-laadun-kustannuksella?lang=fi"
    }
   ],
   "sisalto": {
    "polku": {
     "otsikko": "Hankkeen polku",
     "ohje": "Valitse vaihe. Näet, mitä voit tehdä, mihin mennessä, kuka päättää ja mikä asiakirja kannattaa etsiä.",
     "kentat": {
      "tehda": "Mitä voit tehdä",
      "maaraika": "Määräaika",
      "paattaa": "Kuka päättää",
      "asiakirja": "Etsi tämä asiakirja"
     },
     "vaiheet": [
      {
       "nro": 1,
       "nimi": "Ilmoitus ja maasopimus",
       "lyhyt": "Yhtiö kertoo hankkeesta. Kunta voi tehdä esisopimuksen, myydä maata tai vuokrata sitä.",
       "tehda": {
        "t": "Voit seurata kunnanhallituksen ja valtuuston esityslistoja ja olla yhteydessä valtuutettuihin. Kunnan jäsen voi tehdä kunnanhallituksen päätöksestä oikaisuvaatimuksen.",
        "v": [
         "kouvola-kh"
        ]
       },
       "maaraika": {
        "t": "Oikaisuvaatimus 14 päivän kuluessa päätöksen tiedoksisaannista. Näin esimerkiksi Kouvolan kaupunginhallituksen päätöksessä 1.6.2026.",
        "v": [
         "kouvola-kh"
        ]
       },
       "paattaa": {
        "t": "Kunnanhallitus tai valtuusto, asian koon ja kunnan sääntöjen mukaan. Lappeenrannan kaupunki päätti maaliskuussa 2026 vuokrata tontit datakeskukselle.",
        "v": [
         "yle-lappeenranta"
        ]
       },
       "asiakirja": {
        "t": "Kokouksen pöytäkirja liitteineen, esimerkiksi sopimusluonnos. Pöytäkirjat julkaistaan kunnan verkkosivuilla.",
        "v": [
         "kouvola-kh",
         "yle-lappeenranta"
        ]
       }
      },
      {
       "nro": 2,
       "nimi": "Kaava vireille ja OAS",
       "lyhyt": "Kunta aloittaa kaavan. Osallistumis- ja arviointisuunnitelma (OAS) kertoo, miten voit osallistua ja mitä vaikutuksia selvitetään.",
       "tehda": {
        "t": "Osallinen voi antaa kunnalle mielipiteen suullisesti tai kirjallisesti. Osallisia ovat alueen maanomistajat ja ne, joiden asumiseen, työhön tai muihin oloihin kaava voi vaikuttaa paljon. Voit ehdottaa, mitä pitäisi selvittää.",
        "v": [
         "vihti-sanasto",
         "mra-895"
        ]
       },
       "maaraika": {
        "t": "Kunta ilmoittaa määräajan. Pyhäjärvellä datakeskuksen kaavan OAS asetettiin nähtäville 30 päiväksi.",
        "v": [
         "pyhajarvi",
         "mra-895"
        ]
       },
       "paattaa": {
        "t": "Kaavoituksesta vastaava lautakunta tai kunnanhallitus. Pyhäjärvellä OAS:n hyväksyi tekninen lautakunta 18.11.2025.",
        "v": [
         "pyhajarvi"
        ]
       },
       "asiakirja": {
        "t": "OAS ja myöhemmin kaavaluonnos kunnan kaavoitussivulla.",
        "v": [
         "vihti-sanasto"
        ]
       }
      },
      {
       "nro": 3,
       "nimi": "Ympäristövaikutusten arviointi (YVA)",
       "lyhyt": "Isossa hankkeessa ympäristövaikutukset selvitetään ennen lupia. Ensin tulee arviointiohjelma, sitten arviointiselostus.",
       "tehda": {
        "t": "Jokainen, johon hanke voi vaikuttaa, voi antaa mielipiteen ohjelmasta ja selostuksesta. Yleisötilaisuudessa voit kysyä suoraan hankkeen tekijältä.",
        "v": [
         "yva-kortit",
         "lvv-sudentulli"
        ]
       },
       "maaraika": {
        "t": "Arviointiohjelmasta vähintään 30 päivää, arviointiselostuksesta 30–60 päivää.",
        "v": [
         "yva-kortit"
        ]
       },
       "paattaa": {
        "t": "YVA ei ole lupa. Lupa- ja valvontavirasto (LVV) on yhteysviranomainen. Se antaa lopuksi perustellun päätelmän, joka otetaan huomioon luvissa.",
        "v": [
         "yva-kortit",
         "lvv-sudentulli"
        ]
       },
       "asiakirja": {
        "t": "Kuulutus ja arviointiohjelma tai -selostus. Kuulutus kertoo, minne ja mihin mennessä mielipide lähetetään.",
        "v": [
         "lvv-sudentulli"
        ]
       }
      },
      {
       "nro": 4,
       "nimi": "Kaavaehdotus nähtävillä",
       "lyhyt": "Kunta asettaa kaavaehdotuksen julkisesti nähtäville. Tämä on virallinen kuulemisen vaihe.",
       "tehda": {
        "t": "Kunnan jäsen ja osallinen voi jättää kirjallisen muistutuksen. Kunnan on ilmoitettava perusteltu vastauksensa muistutukseen.",
        "v": [
         "mra-895",
         "vihti-sanasto"
        ]
       },
       "maaraika": {
        "t": "Asemakaavaehdotus on nähtävillä vähintään 30 päivää, pienissä muutoksissa vähintään 14 päivää. Muistutus jätetään ennen nähtävilläolon loppua.",
        "v": [
         "mra-895",
         "varkaus"
        ]
       },
       "paattaa": {
        "t": "Kaavoituksesta vastaava lautakunta tai kunnanhallitus käsittelee muistutukset ja hyväksyy vastineet.",
        "v": [
         "vihti-sanasto"
        ]
       },
       "asiakirja": {
        "t": "Kuulutus, kaavakartta ja kaavaselostus liitteineen. Kuulutuksessa on osoite, johon muistutus lähetetään.",
        "v": [
         "varkaus"
        ]
       }
      },
      {
       "nro": 5,
       "nimi": "Valtuusto hyväksyy kaavan",
       "lyhyt": "Valtuusto äänestää kaavasta. Sen jälkeen alkaa valitusaika.",
       "tehda": {
        "t": "Kunnan jäsen ja asianosainen voi valittaa hallinto-oikeuteen. Valituksen peruste on lainvastaisuus tai väärä menettely, ei se, että päätös tuntuu huonolta.",
        "v": [
         "oulu-valitus"
        ]
       },
       "maaraika": {
        "t": "30 päivää päätöksen tiedoksisaannista. Kaava saa lainvoiman, jos siitä ei valiteta ajoissa.",
        "v": [
         "oulu-valitus",
         "vihti-sanasto"
        ]
       },
       "paattaa": {
        "t": "Valtuusto hyväksyy merkittävät kaavat. Valituksen ratkaisee hallinto-oikeus.",
        "v": [
         "vihti-sanasto",
         "oulu-valitus"
        ]
       },
       "asiakirja": {
        "t": "Valtuuston pöytäkirja ja sen valitusosoitus. Valitusosoitus kertoo tuomioistuimen ja osoitteen.",
        "v": [
         "oulu-valitus"
        ]
       }
      },
      {
       "nro": 6,
       "nimi": "Rakentamislupa, ympäristölupa ja sähköliittymä",
       "lyhyt": "Rakennuksille haetaan kunnalta rakentamislupa. Varavoimakoneet ja polttoaineen varastointi voivat tarvita ympäristöluvan.",
       "tehda": {
        "t": "Rakentamisluvassa naapureita kuullaan, ja naapuri voi esittää perusteltuja huomautuksia. Luvista voi hakea muutosta. Espoossa naapurit ja yhdistys valittivat datakeskuksen ympäristöluvasta.",
        "v": [
         "hel-naapuri",
         "loimaa-rakl",
         "vhao-espoo"
        ]
       },
       "maaraika": {
        "t": "Rakentamislain mukaan muutoksenhakuaika on kaikissa lupapäätöksissä 30 päivää päätöksen tiedoksisaannista.",
        "v": [
         "loimaa-rakl"
        ]
       },
       "paattaa": {
        "t": "Rakentamisluvan myöntää kunnan rakennusvalvonta. Ympäristöluvan myöntää LVV. Sähköliittymästä päättää Fingrid, ja se vaatii lainvoimaisen kaavan ja luvan.",
        "v": [
         "hel-naapuri",
         "lvv-lahti",
         "fingrid-webinaari"
        ]
       },
       "asiakirja": {
        "t": "Naapurin kuulemisilmoitus ja lupapäätös. Ympäristölupapäätökset löytyvät ympäristöasioiden tietopalvelusta.",
        "v": [
         "hel-naapuri",
         "lvv-lahti"
        ]
       }
      },
      {
       "nro": 7,
       "nimi": "Rakentaminen ja käyttö",
       "lyhyt": "Työmaa ja valmis keskus toimivat lupaehtojen mukaan. Viranomainen valvoo.",
       "tehda": {
        "t": "Kuka tahansa voi ilmoittaa viranomaiselle epäillystä ympäristöhaitasta. Asianosaisilla ja ympäristöjärjestöillä on lisäksi oikeus panna valvonta-asia vireille.",
        "v": [
         "ejustice"
        ]
       },
       "maaraika": {
        "t": "Kiinteää määräaikaa ei ole.",
        "v": [
         "ejustice"
        ]
       },
       "paattaa": {
        "t": "LVV valvoo ympäristölupia ja YVA:n noudattamista vuoden 2026 alusta. Kunnan rakennusvalvonta valvoo rakentamista.",
        "v": [
         "ely-lvv",
         "lvv-otanmaki"
        ]
       },
       "asiakirja": {
        "t": "Lupaehdot ja valvontapäätökset, esimerkiksi LVV:n kehotus Kajaanin hankkeelle 6.10.2026.",
        "v": [
         "lvv-otanmaki"
        ]
       }
      }
     ]
    },
    "roolinVaiheet": {
     "asukas": [
      4,
      6
     ],
     "yrittaja": [
      2,
      4
     ],
     "viljelija": [
      1,
      6
     ],
     "nuori": [
      2,
      3
     ],
     "valtuutettu": [
      1,
      5
     ]
    },
    "kaikille": {
     "otsikko": "Osallistuminen kuuluu kaikille",
     "johdanto": "Mielipide, muistutus ja valitus ovat samat keinot kaikille. Ne eivät vaadi kantaa hankkeen puolesta tai vastaan.",
     "nakokulmat": [
      {
       "kuka": "Jos kannatat hanketta",
       "t": "Voit kirjoittaa myönteisen mielipiteen samalla tavalla. Se kertoo päättäjille, mitä pidät tärkeänä.",
       "v": [
        "mra-895"
       ]
      },
      {
       "kuka": "Jos vastustat hanketta",
       "t": "Voit esittää huolesi perusteluineen. Hallinto-oikeus tutkii valituksessa vain, onko päätös lainmukainen.",
       "v": [
        "oulu-valitus"
       ]
      },
      {
       "kuka": "Jos et ole varma",
       "t": "Voit kysyä. Kunta tiivistää kaavaselostukseen saamansa mielipiteet ja vastaa niihin.",
       "v": [
        "vihti-sanasto"
       ]
      }
     ],
     "valitusHyoty": {
      "t": "Hallinto-oikeus tutkii, onko kaava tai lupa tehty lain mukaan.",
      "v": [
       "oulu-valitus"
      ]
     },
     "valitusHaitta": {
      "t": "Kaava ei saa lainvoimaa ennen ratkaisua. Ilman lainvoimaista kaavaa hanke ei saa Fingridin liittymäsopimusta, joten aikataulu venyy kaikille.",
      "v": [
       "vihti-sanasto",
       "fingrid-webinaari"
      ]
     }
    },
    "esimerkit": {
     "otsikko": "Juuri nyt Suomessa",
     "johdanto": "Esimerkit kertovat, mitä on tapahtunut. Ne eivät ota kantaa hankkeisiin.",
     "lista": [
      {
       "pvm": "16.9.–15.10.2026",
       "paikka": "Nurmijärvi, Sudentulli",
       "vaihe": 3,
       "t": "LVV kuulutti YVA-ohjelman noin 560 MW:n ja noin 96 hehtaarin datakeskuksesta. Mielipiteitä sai antaa 15.10.2026 asti. Yleisötilaisuus pidettiin 6.10.",
       "v": [
        "lvv-sudentulli"
       ]
      },
      {
       "pvm": "6.10.2026",
       "paikka": "Muhos ja Kajaani",
       "vaihe": 7,
       "t": "LVV kehotti Googlen hankeyhtiötä Tuike Finland Oy:tä keskeyttämään ympäristöä muuttavat esityöt viimeistään 23.10.2026, kunnes YVA on tehty. Luonnonsuojeluliitto oli pyytänyt LVV:tä ottamaan asian käsittelyyn.",
       "v": [
        "vu-google",
        "lvv-otanmaki",
        "kaleva-sll"
       ]
      },
      {
       "pvm": "11.10.2026",
       "paikka": "Muhos ja Kajaani",
       "vaihe": 7,
       "t": "Google kertoi keskeyttäneensä esityöt. Se varasi oikeuden tehdä vakautustöitä LVV:n luvalla. Milloin työt voivat jatkua, oli vielä epäselvää.",
       "v": [
        "kaleva-google"
       ]
      },
      {
       "pvm": "23.6.2026",
       "paikka": "Kajaani, Otanmäki",
       "vaihe": 5,
       "t": "Kaivosyhtiö Otanmäki Mine valitti Pohjois-Suomen hallinto-oikeuteen osayleiskaavasta, joka mahdollistaa Googlen datakeskuksen. Yhtiön mukaan kaava on lainvastainen. Kaupunki vaatii valituksen hylkäämistä.",
       "v": [
        "yle-otanmaki"
       ]
      },
      {
       "pvm": "23.6.2026",
       "paikka": "Espoo",
       "vaihe": 6,
       "t": "Vaasan hallinto-oikeus hylkäsi naapureiden ja paikallisen ympäristöyhdistyksen valituksen datakeskuksen varavoimakoneiden ympäristöluvasta.",
       "v": [
        "vhao-espoo"
       ]
      },
      {
       "pvm": "28.5.2025",
       "paikka": "Kotka ja Hamina",
       "vaihe": 6,
       "t": "Maanmittauslaitos aloitti voimajohdon lunastustoimituksen datakeskuksen sähkölinjaa varten. Maa jää omistajalle, mutta sen käyttöä rajoitetaan, ja menetykset korvataan.",
       "v": [
        "mml-hamina"
       ]
      }
     ]
    },
    "lakimuutos": {
     "otsikko": "Säännöt voivat muuttua",
     "t": "Eduskunnassa on käsittelyssä hallituksen esitys uudeksi alueidenkäyttölaiksi. Lait on tarkoitettu voimaan 1.1.2027. Nyt voimassa ovat vuoden 2025 alussa voimaan tullut rakentamislaki ja alueidenkäyttölaki, joka oli ennen nimeltään maankäyttö- ja rakennuslaki.",
     "v": [
      "he-70-2026",
      "loimaa-rakl"
     ],
     "nakokulmat": [
      {
       "kuka": "Hallituksen esitys",
       "t": "Kaavoitusta yksinkertaistettaisiin. Asemakaavan valitusoikeus rajattaisiin tietyissä tilanteissa asianosaisiin. Yhdistyksen pitäisi jättää muistutus ennen kuin se voi valittaa.",
       "v": [
        "he-70-2026"
       ]
      },
      {
       "kuka": "Arkkitehtiliitto SAFA",
       "t": "Liitto tukee nopeampaa kaavoitusta. Valitusoikeuden rajausta se pitää merkittävänä heikennyksenä osallistumiseen.",
       "v": [
        "safa"
       ]
      }
     ]
    },
    "muistutus": {
     "otsikko": "Muistutuksen pohja",
     "ohje": "Muokkaa tekstiä ja kopioi se omaan viestiisi. Lähetä se kuulutuksessa mainittuun osoitteeseen ennen määräajan loppua.",
     "ohjeV": [
      "varkaus",
      "lvv-sudentulli"
     ],
     "kannattajat": "Pohja sopii myös myönteiseen kannanottoon. Kirjoita omiin huomioihin, mitä hankkeessa pidät hyvänä ja millä ehdoilla.",
     "kopioi": "Kopioi teksti",
     "kopioitu": "Teksti on kopioitu leikepöydälle.",
     "valittu": "Teksti on valittu. Kopioi se näppäimillä tai valikosta.",
     "pohja": "MUISTUTUS / MIELIPIDE\n\nKenelle: [kunta tai viranomainen, kirjaamon osoite]\nAsia: [kaavan tai hankkeen nimi ja asianumero]\nLähettäjä: [nimi, osoite, puhelin tai sähköposti]\nSuhteeni alueeseen: [esimerkiksi asun lähellä, omistan maata, yritykseni toimii alueella]\n\nPyydän, että näihin kysymyksiin vastataan kaavaselostuksessa tai vastineessa:\n\n1. Mihin datakeskuksen hukkalämpö ohjataan, ja onko siitä jo sopimus?\n2. Kuinka paljon vettä keskus ottaa, mistä, ja mihin vesi johdetaan käytön jälkeen?\n3. Mitä reittejä raskas liikenne käyttää rakentamisen ja käytön aikana?\n4. Kuinka paljon melua jäähdytys ja varavoimakoneiden koekäytöt aiheuttavat lähimmissä kodeissa, ja mihin aikaan koekäytöt tehdään?\n5. Kuinka monta pysyvää työpaikkaa keskus tuo, ja miten arvio on laskettu?\n6. Tarvitaanko uusia voimajohtoja, ja kenen maiden kautta ne kulkisivat?\n\nOmat huomioni:\n\n\n\nPäivämäärä ja nimi:\n"
    },
    "kuka": {
     "otsikko": "Kuka päättää",
     "rivit": [
      {
       "kuka": "Kunnanvaltuusto",
       "t": "Hyväksyy merkittävät kaavat. Pienempien kaavojen hyväksymisen se voi siirtää lautakunnalle.",
       "v": [
        "vihti-sanasto"
       ]
      },
      {
       "kuka": "Kunnanhallitus",
       "t": "Valmistelee valtuuston asiat ja asettaa nuorisovaltuuston. Kunnan säännöt ratkaisevat, päättääkö se itse maasopimuksista.",
       "v": [
        "kouvola-kh",
        "kuntaliitto"
       ]
      },
      {
       "kuka": "Kaavoituksesta vastaava lautakunta",
       "t": "Hyväksyy OAS:n, asettaa kaavan nähtäville ja vastaa muistutuksiin. Nimi vaihtelee kunnittain.",
       "v": [
        "pyhajarvi",
        "vihti-sanasto"
       ]
      },
      {
       "kuka": "Rakennusvalvonta",
       "t": "Myöntää rakentamisluvan ja kuulee naapurit.",
       "v": [
        "hel-naapuri"
       ]
      },
      {
       "kuka": "Lupa- ja valvontavirasto (LVV)",
       "t": "Vuoden 2026 alusta YVA:n yhteysviranomainen, ympäristöluvat ja valvonta.",
       "v": [
        "ely-lvv",
        "lvv-sudentulli",
        "lvv-lahti"
       ]
      },
      {
       "kuka": "Fingrid",
       "t": "Päättää kantaverkon liittymästä, ei kunta. Edellyttää lainvoimaista kaavaa ja lupaa.",
       "v": [
        "fingrid-webinaari"
       ]
      },
      {
       "kuka": "Valtioneuvosto ja Maanmittauslaitos",
       "t": "Lunastusluvan voimajohdolle myöntää valtioneuvosto tai Maanmittauslaitos. Maanmittauslaitos hoitaa lunastuksen ja korvaukset.",
       "v": [
        "mml-hamina"
       ]
      },
      {
       "kuka": "Hallinto-oikeus",
       "t": "Ratkaisee valitukset kaavoista ja luvista. Se tutkii lainmukaisuuden.",
       "v": [
        "oulu-valitus",
        "vhao-espoo"
       ]
      }
     ]
    },
    "aloitteet": {
     "otsikko": "Aloite omasta asiasta",
     "lista": [
      {
       "kuka": "Kuntalaisaloite",
       "t": "Kunnan asukkaalla sekä kunnassa toimivalla yhteisöllä ja säätiöllä on oikeus tehdä aloitteita kunnan asioista. Tekijälle kerrotaan, mitä aloitteen takia tehtiin.",
       "v": [
        "kuntalaki-419"
       ]
      },
      {
       "kuka": "Nuorisovaltuusto",
       "t": "Kunnanhallituksen on asetettava nuorisovaltuusto tai vastaava nuorten ryhmä. Sille on annettava mahdollisuus vaikuttaa kunnan toiminnan suunnitteluun.",
       "v": [
        "kuntaliitto"
       ]
      },
      {
       "kuka": "Kansalaisaloite",
       "t": "Datakeskukset kuriin -kansalaisaloite sai vaaditut 50 000 allekirjoitusta muutamassa päivässä syyskuussa 2026. Se vaatii ehtoja datakeskusten verkkoliitynnälle ja erillistä datakeskusmaksua. Aloite etenee eduskuntaan.",
       "v": [
        "kaleva-aloite"
       ]
      }
     ]
    }
   }
  };

  rekisteroiModuuli({
  id: "vaikuta",
  nimi: "Näin vaikutat",
  lyhyt: "Näin vaikutat",
  pohja: true,
  data: DATA,
  html: "",
  css: `/* Näin vaikutat: moduulin omat tyylit (vain pelin tokeneilla). Asettelu kapean palstan mukaan: container query, ei näkymän leveys. */
[hidden] { display: none !important; }
.sivu { container-type: inline-size; }
.polku-yla { display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; justify-content: space-between; }
.roolivinkki { font-size: 0.95rem; color: var(--ink-soft); }
ol.polku { list-style: none; margin: 0; padding: 0; display: grid; gap: 0; }
ol.polku > li { position: relative; padding: 0 0 14px 52px; min-width: 0; }
ol.polku > li::before { content: ""; position: absolute; left: 19px; top: 40px; bottom: 0; border-left: 2px dashed var(--line); }
ol.polku > li:last-child::before { display: none; }
ol.polku > li:last-child { padding-bottom: 0; }
.vaihe-nro {
  position: absolute; left: 0; top: 2px; width: 40px; height: 40px; border-radius: 50%;
  display: grid; place-items: center; font: 700 1.1rem var(--f-sc); color: var(--ink);
  background: var(--card); border: 2px solid var(--gold);
}
li.auki .vaihe-nro { border-color: var(--red); color: var(--red); }
.vaihe-nappi {
  appearance: none; width: 100%; text-align: left; cursor: pointer; background: transparent; color: var(--ink);
  border: 1px solid var(--line); border-radius: 6px; padding: 8px 12px; min-height: 44px;
  display: grid; gap: 2px; font: inherit;
}
li.auki .vaihe-nappi { border-color: var(--red); background: color-mix(in srgb, var(--gold) 8%, var(--card)); }
.vaihe-nappi .nimi { font: 700 1rem var(--f-sc); letter-spacing: 0.04em; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 4px 10px; align-items: baseline; }
.vaihe-nappi .nimi .merkki { grid-column: 1; grid-row: 2; justify-self: start; }
.vaihe-nappi .nimi .nuoli { grid-column: 2; grid-row: 1; color: var(--ink-soft); font-family: var(--f-body); }
.vaihe-nappi .lyhyt { font-size: 0.95rem; color: var(--ink-soft); }
.merkki {
  font: 700 0.72rem var(--f-sc); letter-spacing: 0.08em; color: var(--red);
  border: 1px solid var(--red); border-radius: 999px; padding: 1px 8px; white-space: nowrap;
}
.vaihe-tiedot { margin: 8px 0 0; padding: 12px 14px; border-left: 3px solid var(--gold); background: var(--card); display: grid; gap: 10px; border-radius: 0 6px 6px 0; animation: kaaro .3s ease-out; transform-origin: top; }
.vaihe-tiedot dl { margin: 0; display: grid; gap: 10px; }
.vaihe-tiedot dt { font: 700 0.82rem var(--f-sc); letter-spacing: 0.08em; color: var(--ink-soft); }
.vaihe-tiedot dd { margin: 0; }
.esimerkit { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.esimerkit li { display: grid; gap: 4px; border-top: 1px solid var(--line); padding-top: 10px; }
.esimerkit li:first-child { border-top: 0; padding-top: 0; }
.esim-ots { display: flex; flex-wrap: wrap; gap: 4px 12px; align-items: baseline; }
.esim-pvm { font: 700 0.85rem var(--f-sc); letter-spacing: 0.06em; color: var(--ink-soft); font-variant-numeric: tabular-nums; }
.esim-paikka { font: 700 1rem var(--f-sc); letter-spacing: 0.04em; }
.linkkinappi { justify-self: start; font-size: 0.85rem; min-height: 44px; text-align: left; }
.pohja-teksti {
  width: 100%; min-height: 22rem; resize: vertical; font: 0.95rem/1.5 var(--f-body); color: var(--ink);
  background: var(--bg); border: 1px solid var(--line); border-radius: 6px; padding: 12px;
}
.kopiorivi { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.nappi.paa { background: var(--red); color: var(--on-red); border-color: var(--red); }
.kopio-tila { font-size: 0.92rem; color: var(--ink-soft); }
.kukalista { margin: 0; display: grid; gap: 0; }
.kukalista > div { display: grid; grid-template-columns: minmax(0, 15rem) minmax(0, 1fr); gap: 4px 16px; padding: 8px 0; border-bottom: 1px solid var(--line); }
.kukalista > div:last-child { border-bottom: 0; }
.kukalista dt { font: 700 0.95rem var(--f-sc); letter-spacing: 0.04em; }
.kukalista dd { margin: 0; }
@container (max-width: 560px) {
  .kukalista > div { grid-template-columns: 1fr; }
  .puolet { grid-template-columns: 1fr; }
  ol.polku > li { padding-left: 46px; }
  .vaihe-nro { width: 34px; height: 34px; font-size: 1rem; }
  ol.polku > li::before { left: 16px; top: 36px; }
}
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
`,
  alusta(root, APU, ctx) {
    var A = APU, D = A.D, S = D.sisalto, esc = A.esc, $ = A.$;
    var P = S.polku, auki = {};
    function tv(o) { return esc(o.t) + (o.v && o.v.length ? A.viite(o.v) : ""); }
    function rooliNimi(id) { var r = A.ROOLIT.filter(function (x) { return x.id === id; })[0]; return r ? r.nimi : id; }

    /* --- 1. Hankkeen polku (vuorovaikutteinen) --- */
    function vaiheHtml(v) {
      var tarkeat = S.roolinVaiheet[A.tila.rooli] || [], on = !!auki[v.nro], oma = tarkeat.indexOf(v.nro) >= 0;
      var tiedot = "";
      if (on) {
        tiedot = '<div class="vaihe-tiedot" id="vaihe-tiedot-' + v.nro + '"><dl>' +
          ["tehda", "maaraika", "paattaa", "asiakirja"].map(function (k) {
            return "<div><dt>" + esc(P.kentat[k]) + "</dt><dd>" + tv(v[k]) + "</dd></div>";
          }).join("") + "</dl></div>";
      }
      return '<li class="' + (on ? "auki" : "") + '"><span class="vaihe-nro" aria-hidden="true">' + v.nro + "</span>" +
        '<button type="button" class="vaihe-nappi" id="vaihe-' + v.nro + '" data-vaihe="' + v.nro + '" aria-expanded="' + on + '"' + (on ? ' aria-controls="vaihe-tiedot-' + v.nro + '"' : "") + ">" +
        '<span class="nimi"><span><span class="sr">Vaihe ' + v.nro + ": </span>" + esc(v.nimi) + "</span>" +
        (oma ? '<span class="merkki">Roolillesi tärkeä</span>' : "") +
        '<span class="nuoli" aria-hidden="true">' + (on ? "▴" : "▾") + "</span></span>" +
        '<span class="lyhyt">' + esc(v.lyhyt) + "</span></button>" + tiedot + "</li>";
    }
    function piirraPolku() {
      var tarkeat = S.roolinVaiheet[A.tila.rooli] || [];
      var kaikkiAuki = P.vaiheet.every(function (v) { return auki[v.nro]; });
      $("polku-sisalto").innerHTML =
        '<div class="polku-yla"><p class="roolivinkki">' + esc(rooliNimi(A.tila.rooli)) + ": tärkeimmät vaiheet " + tarkeat.join(" ja ") + ".</p>" +
        '<button type="button" class="nappi" id="polku-kaikki" aria-pressed="' + kaikkiAuki + '">' + (kaikkiAuki ? "Sulje kaikki" : "Avaa kaikki") + "</button></div>" +
        '<ol class="polku">' + P.vaiheet.map(vaiheHtml).join("") + "</ol>";
    }

    /* --- 2. Kaikille --- */
    var K = S.kaikille;
    var kaikilleHtml = "<h2>" + esc(K.otsikko) + "</h2><p>" + esc(K.johdanto) + "</p>" +
      '<div class="nakokulmat">' + K.nakokulmat.map(function (n) {
        return '<div class="nakokulma"><span class="kuka">' + esc(n.kuka) + "</span><p>" + tv(n) + "</p></div>";
      }).join("") + "</div>" +
      "<h3>Valitus hallinto-oikeuteen</h3>" + A.puolet(tv(K.valitusHyoty), tv(K.valitusHaitta));

    /* --- 3. Esimerkit --- */
    var E = S.esimerkit;
    var esimHtml = "<h2>" + esc(E.otsikko) + "</h2><p>" + esc(E.johdanto) + '</p><ul class="esimerkit">' +
      E.lista.map(function (e) {
        var v = P.vaiheet[e.vaihe - 1];
        return '<li><div class="esim-ots"><span class="esim-pvm">' + esc(e.pvm) + '</span><span class="esim-paikka">' + esc(e.paikka) + "</span></div>" +
          "<p>" + tv(e) + "</p>" +
          '<button type="button" class="nappi linkkinappi" data-nayta="' + e.vaihe + '">Näytä vaihe ' + e.vaihe + ": " + esc(v.nimi) + "</button></li>";
      }).join("") + "</ul>";

    /* --- 4. Lakimuutos --- */
    var L = S.lakimuutos;
    var lakiHtml = "<h2>" + esc(L.otsikko) + "</h2><p>" + tv(L) + '</p><div class="nakokulmat">' +
      L.nakokulmat.map(function (n) { return '<div class="nakokulma"><span class="kuka">' + esc(n.kuka) + "</span><p>" + tv(n) + "</p></div>"; }).join("") + "</div>";

    /* --- 5. Muistutuksen pohja --- */
    var M = S.muistutus;
    var muistHtml = '<h2 id="muistutus-otsikko">' + esc(M.otsikko) + "</h2><p>" + esc(M.ohje) + A.viite(M.ohjeV) + "</p>" +
      '<p class="pieni">' + esc(M.kannattajat) + "</p>" +
      '<label class="sc" for="pohja-teksti">Muistutuksen teksti, muokattavissa</label>' +
      '<textarea id="pohja-teksti" class="pohja-teksti" spellcheck="true">' + esc(M.pohja) + "</textarea>" +
      '<div class="kopiorivi"><button type="button" class="nappi paa" id="kopioi">' + esc(M.kopioi) + '</button><span class="kopio-tila" id="kopio-tila" role="status" aria-live="polite"></span></div>';

    /* --- 6. Kuka päättää --- */
    var KP = S.kuka;
    var kukaHtml = "<h2>" + esc(KP.otsikko) + '</h2><dl class="kukalista">' +
      KP.rivit.map(function (r) { return "<div><dt>" + esc(r.kuka) + "</dt><dd>" + tv(r) + "</dd></div>"; }).join("") + "</dl>";

    /* --- 7. Aloitteet --- */
    var AL = S.aloitteet;
    var aloiteHtml = "<h2>" + esc(AL.otsikko) + '</h2><div class="nakokulmat">' +
      AL.lista.map(function (n) { return '<div class="nakokulma"><span class="kuka">' + esc(n.kuka) + "</span><p>" + tv(n) + "</p></div>"; }).join("") + "</div>";

    $("osiot").innerHTML =
      A.kortti('<h2 id="polku-otsikko">' + esc(P.otsikko) + "</h2><p>" + esc(P.ohje) + '</p><div id="polku-sisalto"></div>', "", 'role="region" aria-labelledby="polku-otsikko"') +
      A.kortti(kaikilleHtml) +
      A.kortti(esimHtml) +
      A.kortti(muistHtml) +
      A.kortti(kukaHtml) +
      A.kortti(aloiteHtml) +
      A.kortti(lakiHtml);
    piirraPolku();

    function avaa(nro, kohdista) {
      auki[nro] = true; piirraPolku();
      var b = $("vaihe-" + nro);
      if (b && kohdista) {
        b.focus({ preventScroll: true });
        b.scrollIntoView({ block: "center", behavior: ctx.liikeVahennetty && !ctx.liikeVahennetty() ? "smooth" : "auto" });
      }
    }

    /* Kopiointi: ensin Clipboard API; jos se puuttuu tai epäonnistuu, valitaan teksti Shadow DOMin
       sisällä ja kokeillaan execCommand("copy"). Tila kerrotaan moduulin omassa aria-live-alueessa. */
    var tilaAjastin = null;
    function ilmoita(teksti) {
      var t = $("kopio-tila"); if (!t) return;
      t.textContent = "";
      clearTimeout(tilaAjastin);
      tilaAjastin = setTimeout(function () { t.textContent = teksti; }, 60);
    }
    function varakopio(ta) {
      ta.focus(); ta.select(); ta.setSelectionRange(0, ta.value.length);
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
      ilmoita(ok ? M.kopioitu : M.valittu);
    }
    function kopioi() {
      var ta = $("pohja-teksti"); if (!ta) return;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext !== false) {
          navigator.clipboard.writeText(ta.value).then(function () { ilmoita(M.kopioitu); }, function () { varakopio(ta); });
          return;
        }
      } catch (err) { /* siirrytään varakeinoon */ }
      varakopio(ta);
    }

    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-vaihe]");
      if (b) {
        var n = Number(b.dataset.vaihe); auki[n] = !auki[n]; piirraPolku();
        var uusi = $("vaihe-" + n); if (uusi) uusi.focus();
        return;
      }
      if (e.target.closest("#polku-kaikki")) {
        var kaikki = P.vaiheet.every(function (v) { return auki[v.nro]; });
        P.vaiheet.forEach(function (v) { auki[v.nro] = !kaikki; });
        piirraPolku();
        var k = $("polku-kaikki"); if (k) k.focus();
        return;
      }
      var nayta = e.target.closest("[data-nayta]");
      if (nayta) { avaa(Number(nayta.dataset.nayta), true); return; }
      if (e.target.closest("#kopioi")) kopioi();
    });

    /* Roolin vaihto päivittää "Roolillesi tärkeä" -merkit ja vinkin */
    A.kunRooliMuuttuu(function () { piirraPolku(); });

    return function () { clearTimeout(tilaAjastin); };
  }
  });
})();
