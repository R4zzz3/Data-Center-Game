/* Moduuli: Maankäyttö ja luonto (lähde: F8-tietomoduuli). Siirretty Edistyneeseen valikkoon. */
(function () {
  "use strict";
  var DATA = {
 "id": "maankaytto-ja-luonto",
 "nimi": "Maankäyttö ja luonto",
 "paat": [
  "maankaytto",
  "ymparisto"
 ],
 "ingressi": "Datakeskus vie maata muutamasta hehtaarista satoihin hehtaareihin. Tässä näet, mitä alueilla oli ennen, mitä rakennusaika tuo mukanaan ja miten vanha tehdasalue eroaa uudesta metsäalueesta.",
 "lueLisaaTeksti": "Kuinka paljon maata datakeskus vie, ja mitä alueella oli ennen?",
 "paivitetty": "2026-10-24",
 "rooliRivit": {
  "asukas": "Rakennusaikana tiellä kulkee raskaita kuormia, ja räjäytykset voivat kuulua kotiin. Valmiista keskuksesta voi kuulua jäähdytyksen tasainen ääni, ja tuttu polku voi jäädä aidan taakse.",
  "yrittaja": "Kunta voi kaavoittaa uusia yritystontteja datakeskuksen lähelle. Rakennusaika tuo maansiirto- ja kuljetustöitä, mutta myös raskasta liikennettä samoille teille kuin asiakkaillesi.",
  "viljelija": "Datakeskus voi tarvita peltoa tai metsää, ja maanomistaja voi saada ostotarjouksen. Uusi voimajohto voi kulkea pelto- ja metsäpalstojen poikki.",
  "nuori": "Metsä, jossa olet ulkoillut tai marjastanut, voi muuttua pysyvästi teollisuusalueeksi. Toisaalta tyhjä tehdasalue voi saada uuden käytön.",
  "valtuutettu": "Valtuusto päättää kaavasta, ja isoissa hankkeissa ympäristövaikutukset pitää arvioida ennen maaston muuttamista. Kaavaan voidaan merkitä säästettävät luontokohteet ja viherkäytävät."
 },
 "alueRivit": {
  "maaseutu": "Maaseudulla hanke vie usein metsää tai peltoa, ja alue voi olla kymmeniä tai satoja hehtaareja. Lähimmät talot voivat olla lähellä tontin reunaa.",
  "pienkunta": "Pienessä kunnassa vanha tehdasalue voi saada uuden käytön. Rakennusajan raskas liikenne näkyy pienen kunnan teillä selvästi.",
  "kaupunki": "Kaupungissa tontti on usein muutaman hehtaarin kokoinen ja jo kaavassa työpaikka-aluetta. Korkea rakennus voi kuitenkin olla aivan viheralueen vieressä."
 },
 "oletukset": [
  "Jalkapallokentiksi muunnetaan koko hankealue, vaikka rakennukset eivät peitä sitä kokonaan.",
  "Kenttien määrä on pyöristetty lähimpään kokonaiseen kenttään."
 ],
 "lahteet": [
  {
   "id": "vihti-avi",
   "nimi": "Uudenmaan ELY-keskus: Vihdin datakeskuksen YVA-ohjelman lausuntokoonti, mm. Etelä-Suomen aluehallintoviraston lausunto (14.6.2023)",
   "url": "https://www.ymparisto.fi/sites/default/files/documents/Lausuntokoonti_Vihdin_datakeskus_YVA-ohjelma.pdf"
  },
  {
   "id": "hel",
   "nimi": "Helsingin kaupunki: Lahdenväylän varteen suunnitellaan uutta datakeskusta (22.4.2026)",
   "url": "https://www.hel.fi/fi/uutiset/lahdenvaylan-varteen-suunnitellaan-uutta-datakeskusta"
  },
  {
   "id": "pyhajarvi",
   "nimi": "Pyhäjärven kaupunki: Uusi-Olkkolan asemakaava, tekninen lautakunta (18.11.2025)",
   "url": "https://poytakirjat.pyhajarvi.fi/djulkaisu/kokous/2025355-8.PDF"
  },
  {
   "id": "harjavalta-melu",
   "nimi": "Ramboll / Fortum: Datakeskuksen asemakaava, Harjavalta – meluselvitys (25.9.2025)",
   "url": "https://www.harjavalta.fi/wp-content/uploads/2025/11/LIITE_9_Meluselvitys.pdf"
  },
  {
   "id": "kouvola-lvv",
   "nimi": "Lupa- ja valvontavirasto: Perusteltu päätelmä YVA-selostuksesta, Kouvolan datakeskus (1.6.2026)",
   "url": "https://www.ymparisto.fi/sites/default/files/documents/Yhteysviranomaisen%20perusteltu%20p%C3%A4%C3%A4telm%C3%A4%20YVA-selostuksesta%2C%20Kouvolan%20datakeskus%2C%20Kouvola.pdf"
  },
  {
   "id": "kouvola-yle-2024",
   "nimi": "Yle: Kouvolaan on tulossa kaksi suurta datakeskusta (7.11.2024)",
   "url": "https://yle.fi/a/74-20122544"
  },
  {
   "id": "kouvola-yle-2026",
   "nimi": "Yle: Atnorth hakee lupaa kolmelle uudelle datakeskukselle Kouvolassa (6.2.2026)",
   "url": "https://yle.fi/a/74-20208529"
  },
  {
   "id": "mikkeli-yle",
   "nimi": "Yle: Mikkeliläiset valittivat datakeskustyömaan rekkarallista (25.8.2026)",
   "url": "https://yle.fi/a/74-20242309"
  },
  {
   "id": "hamina-yle",
   "nimi": "Yle News: Google opens data centre in Hamina (10.9.2011)",
   "url": "https://yle.fi/a/3-5421764"
  },
  {
   "id": "lvv-muhos",
   "nimi": "Lupa- ja valvontavirasto: Tuike Finland Oy:tä kehotetaan keskeyttämään Muhoksen ja Kajaanin datakeskushankkeiden valmistelutoimet (6.10.2026)",
   "url": "https://www.sttinfo.fi/tiedote/72390663/lupa-ja-valvontavirasto-kehottaa-tuike-finland-oyta-keskeyttamaan-muhoksen-ja-kajaanin-datakeskushankkeiden-valmistelutoimet?lang=fi"
  },
  {
   "id": "aljazeera",
   "nimi": "Al Jazeera: Finland orders halt to work on Google data sites over environment concerns (7.10.2026)",
   "url": "https://www.aljazeera.com/amp/news/2026/10/7/finland-orders-halt-to-work-on-google-data-sites-over-environment-concerns"
  },
  {
   "id": "ub-vaala",
   "nimi": "United Bankers: UB Timberland Fund sold a plot of land in Vaala to Google (26.2.2026)",
   "url": "https://unitedbankers.fi/en/united-bankers-plc/investors/releases-and-publications/r/46068/united-bankers'-ub-timberland-fund-sold-a-plot-of-land-in-vaala-to-google/"
  },
  {
   "id": "fifa",
   "nimi": "FIFA: Football Stadiums Guidelines, 5.3 Pitch dimensions and surrounding areas (luettu 24.10.2026)",
   "url": "https://publications.fifa.com/de/football-stadiums-guidelines/technical-guideline/stadium-guidelines/pitch-dimensions-and-surrounding-areas"
  }
 ],
 "sisalto": {
  "hankkeet": {
   "otsikko": "Mitä alueella oli ennen?",
   "johdanto": "Hankkeiden alueet ovat hyvin eri kokoisia. Osa tulee vanhalle tehdasalueelle, osa metsään tai pellolle. Kaikki hankkeet eivät toteudu: osa on vasta kaavavaiheessa.",
   "sarakkeet": [
    "Hanke",
    "Koko",
    "Mitä alueella oli",
    "Lähellä ja huomioita"
   ],
   "rivit": [
    {
     "nimi": "Vihti",
     "koko": "noin 60 ha",
     "ennen": "Pohjoisosa on peltoa ja itäreuna talousmetsää. Eteläosassa on otettu kiviainesta.{v:vihti-avi}",
     "lahella": "Lähimmät asuintalot ovat noin 100 metrin päässä.{v:vihti-avi}"
    },
    {
     "nimi": "Helsinki, Lahdenväylä",
     "koko": "noin 7,3 ha",
     "ennen": "Yleiskaavassa pääosin työpaikka-aluetta. Pohjoispuolella on virkistys- ja viheraluetta.{v:hel}",
     "lahella": "Länsireunalla on liito-oravalle sopivaa metsää. Rakennus olisi noin 21–30 metriä korkea.{v:hel}"
    },
    {
     "nimi": "Kouvola, Myllykoski",
     "koko": "24 ha",
     "ennen": "Vanha tehdasalue, jolla on vain yksi rakennus.{v:kouvola-yle-2024} Tontti ostettiin UPM:ltä entiseltä paperitehdasalueelta.{v:kouvola-yle-2026}",
     "lahella": "Alueelle tarvittaisiin noin 15 kilometrin uusi voimajohto Korialta.{v:kouvola-yle-2024}"
    },
    {
     "nimi": "Kouvola, Hiivuri",
     "koko": "noin 11,1 ha",
     "ennen": "Alueella on jo voimassa oleva asemakaava. Rannan rotkoista kolme on kaavassa merkitty luonnon monimuotoisuudelle tärkeiksi.{v:kouvola-lvv}",
     "lahella": "Lähimmät asuintalot ovat alueen länsipuolella. Etäisyyttä metreinä ei kerrota.{v:kouvola-lvv}"
    },
    {
     "nimi": "Mikkeli, Visulahti",
     "koko": "10 ha",
     "ennen": "Lähde ei kerro, mitä tontilla oli ennen.{v:mikkeli-yle}",
     "lahella": "Työmaalta on ajettu pois 250 000–300 000 tonnia ylijäämämaata.{v:mikkeli-yle}"
    },
    {
     "nimi": "Pyhäjärvi, Uusi-Olkkola",
     "koko": "87 ha",
     "ennen": "Lähde ei kerro alueen nykyistä käyttöä. Alueen poikki kulkee kaksi suurjännitelinjaa.{v:pyhajarvi}",
     "lahella": "Alueesta lounaaseen on tuulivoimapuisto.{v:pyhajarvi}"
    },
    {
     "nimi": "Harjavalta, Sievari",
     "koko": "noin 94 ha",
     "ennen": "Lähde ei kerro alueen aiempaa käyttöä.{v:harjavalta-melu}",
     "lahella": "Lähimmät kodit ovat kaakossa. Laskelman mukaan datakeskuksen ääni olisi niillä noin 45 desibeliä.{v:harjavalta-melu}"
    },
    {
     "nimi": "Hamina",
     "koko": "ei kerrottu",
     "ennen": "Vanha Summan paperitehdas. Tehdas suljettiin alkuvuonna 2008, ja noin 450 työpaikkaa hävisi.{v:hamina-yle}",
     "lahella": "Jäähdytyksessä käytetään merivettä.{v:hamina-yle}"
    },
    {
     "nimi": "Muhos",
     "koko": "hakattu yli 300 ha",
     "ennen": "Metsää. Luonnonsuojeluliiton mukaan hakattu ala on yli 300 hehtaaria.{v:aljazeera}",
     "lahella": "Viranomainen määräsi esityöt keskeytettäviksi siksi aikaa, kun ympäristövaikutukset arvioidaan.{v:lvv-muhos} Google kertoo istuttavansa puita 130 hehtaarille.{v:aljazeera}"
    },
    {
     "nimi": "Vaala",
     "koko": "noin 900 ha",
     "ennen": "Maata on ostettu muun muassa metsärahastolta, joka sijoittaa metsätiloihin.{v:ub-vaala}",
     "lahella": "Alue on noin 6 kilometrin päässä Vaalan keskustasta, lähellä Fingridin sähköasemaa. Kaavoitus on kesken.{v:ub-vaala}"
    }
   ]
  },
  "koko": {
   "otsikko": "Kuinka iso on X hehtaaria?",
   "johdanto": "Valitse hanke. Näet sen alueen jalkapallokenttinä.",
   "kentta": {
    "pituusM": 105,
    "leveysM": 68,
    "ha": 0.714,
    "selitys": "Yksi jalkapallokenttä on 105 × 68 metriä eli 7 140 neliömetriä. Se on noin 0,714 hehtaaria.{v:fifa} Hehtaari on 100 × 100 metrin ala."
   },
   "hankkeet": [
    {
     "id": "helsinki",
     "nappi": "Helsinki",
     "nimi": "Helsinki, Lahdenväylä",
     "rivit": [
      {
       "nimi": "Suunnittelualue",
       "ha": 7.3,
       "haTeksti": "noin 7,3 ha"
      }
     ],
     "huomio": "Kaupungin tontti on pieni, mutta rakennus olisi noin 21–30 metriä korkea.{v:hel}",
     "lahde": [
      "hel"
     ]
    },
    {
     "id": "mikkeli",
     "nappi": "Mikkeli",
     "nimi": "Mikkeli, Visulahti",
     "rivit": [
      {
       "nimi": "Tontti",
       "ha": 10,
       "haTeksti": "10 ha"
      }
     ],
     "huomio": "Pienestäkin tontista voi lähteä paljon maata: työmaalta on ajettu pois 250 000–300 000 tonnia.{v:mikkeli-yle}",
     "lahde": [
      "mikkeli-yle"
     ]
    },
    {
     "id": "hiivuri",
     "nappi": "Kouvola Hiivuri",
     "nimi": "Kouvola, Hiivuri",
     "rivit": [
      {
       "nimi": "Hankealue",
       "ha": 11.1,
       "haTeksti": "noin 11,1 ha"
      }
     ],
     "huomio": "Alueella on jo asemakaava, mutta rannan rotkot ja viherkäytävä pitää ottaa huomioon.{v:kouvola-lvv}",
     "lahde": [
      "kouvola-lvv"
     ]
    },
    {
     "id": "myllykoski",
     "nappi": "Kouvola Myllykoski",
     "nimi": "Kouvola, Myllykoski",
     "rivit": [
      {
       "nimi": "Tontti vanhalla tehdasalueella",
       "ha": 24,
       "haTeksti": "24 ha"
      }
     ],
     "huomio": "Vanhakin tehdasalue voi tarvita uuden, noin 15 kilometrin voimajohdon.{v:kouvola-yle-2024}",
     "lahde": [
      "kouvola-yle-2024"
     ]
    },
    {
     "id": "vihti",
     "nappi": "Vihti",
     "nimi": "Vihti",
     "rivit": [
      {
       "nimi": "Hankealue",
       "ha": 60,
       "haTeksti": "noin 60 ha"
      }
     ],
     "huomio": "Lähimmät kodit ovat noin 100 metrin päässä.{v:vihti-avi} Se on vähän alle yhden jalkapallokentän pituus.{v:fifa}",
     "lahde": [
      "vihti-avi"
     ]
    },
    {
     "id": "pyhajarvi",
     "nappi": "Pyhäjärvi",
     "nimi": "Pyhäjärvi, Uusi-Olkkola",
     "rivit": [
      {
       "nimi": "Asemakaavoitettu alue",
       "ha": 87,
       "haTeksti": "87 ha"
      }
     ],
     "huomio": "Alueen poikki kulkee kaksi suurjännitelinjaa, ja lähellä on tuulivoimapuisto.{v:pyhajarvi}",
     "lahde": [
      "pyhajarvi"
     ]
    },
    {
     "id": "harjavalta",
     "nappi": "Harjavalta",
     "nimi": "Harjavalta, Sievari",
     "rivit": [
      {
       "nimi": "Kaava-alue",
       "ha": 94,
       "haTeksti": "noin 94 ha"
      }
     ],
     "huomio": "Lähimmät kodit ovat kaakossa. Laskelman mukaan datakeskuksen ääni olisi niillä noin 45 desibeliä.{v:harjavalta-melu}",
     "lahde": [
      "harjavalta-melu"
     ]
    },
    {
     "id": "muhos",
     "nappi": "Muhos",
     "nimi": "Muhos",
     "rivit": [
      {
       "nimi": "Hakattu metsä (Luonnonsuojeluliiton arvio)",
       "ha": 300,
       "haTeksti": "yli 300 ha"
      },
      {
       "nimi": "Puiden istutus (Googlen mukaan)",
       "ha": 130,
       "haTeksti": "130 ha"
      }
     ],
     "huomio": "Luvut ovat eri tahoilta: hakatun alan arvio on Luonnonsuojeluliiton, istutusala Googlen.{v:aljazeera}",
     "lahde": [
      "aljazeera"
     ]
    },
    {
     "id": "vaala",
     "nappi": "Vaala",
     "nimi": "Vaala",
     "rivit": [
      {
       "nimi": "Googlen ostama maa",
       "ha": 900,
       "haTeksti": "noin 900 ha"
      }
     ],
     "huomio": "Ostettu maa ei kerro, kuinka paljon siitä lopulta rakennetaan. Kaavoitus on kesken.{v:ub-vaala}",
     "lahde": [
      "ub-vaala"
     ]
    }
   ],
   "vertailuOtsikko": "Kaikki hankkeet hehtaareina",
   "vertailuSelite": "Muhoksen palkki on hakattu ala, Vaalan palkki ostettu maa. Hamina puuttuu, koska alan kokoa ei kerrota."
  },
  "rakentaminen": {
   "otsikko": "Kun työmaa alkaa",
   "johdanto": "Rakennusaikana näkyy ja kuuluu eniten: maata siirretään, kalliota louhitaan ja kuormia ajetaan.",
   "luvut": [
    {
     "arvo": "noin 34",
     "selite": "raskasta ajoneuvoa päivässä maa- ja kiviaineskuljetuksissa Vihdin hankkeessa",
     "viite": "vihti-avi"
    },
    {
     "arvo": "250 000–300 000 t",
     "selite": "ylijäämämaata ajettu pois Mikkelin työmaalta",
     "viite": "mikkeli-yle"
    },
    {
     "arvo": "noin 160 h",
     "selite": "varavoimakoneiden testausta vuodessa Vihdin hankkeessa, päiväaikaan",
     "viite": "vihti-avi"
    }
   ],
   "rekat": {
    "maara": 34,
    "teksti": "Vihdin arvio: raskaat ajoneuvot päivässä. Yksi merkki = yksi raskas ajoneuvo.",
    "viite": "vihti-avi"
   },
   "kappaleet": [
    "Vihdissä louhintaräjäytyksiä arvioitiin olevan ensimmäisenä vuonna lähes päivittäin.{v:vihti-avi}",
    "Mikkelissä osa maasta, 55 000–60 000 tonnia, vietiin tilalle ilman ympäristölupaa. Viranomainen määräsi läjityksen keskeytettäväksi. Kaupungin ympäristöpalvelut saivat rekkarallista paljon ilmoituksia.{v:mikkeli-yle}"
   ],
   "meluOtsikko": "Melu: mitä selvitykset sanovat",
   "melu": [
    "Melulle on valtioneuvoston päätöksessä ohjearvot. Asuinalueilla ulkona ne ovat 55 desibeliä päivällä ja 50 desibeliä yöllä. Uusilla asuinalueilla yön arvo on 45 desibeliä.{v:harjavalta-melu}",
    "Jäähdytyksen ääni on tasaista ja jatkuu läpi vuorokauden.{v:harjavalta-melu} Harjavallan laskelmassa melu olisi yöllä lähimmillä kodeilla yhteensä noin 49 desibeliä, kun liikenne ja teollisuuspuisto lasketaan mukaan. Se jää ohjearvon alle.{v:harjavalta-melu}",
    "Kouvolan Hiivurissa viranomaisen mukaan rakentamisen melu ylittäisi päivän ohjearvot useassa kohdassa, lähinnä asuintaloilla. Syynä on etenkin paalutus. Valmiin keskuksen melu ei viranomaisen mukaan ylittäisi ohjearvoja yhtä tienvarren kohtaa lukuun ottamatta, jossa ne ylittyvät jo nyt.{v:kouvola-lvv}"
   ],
   "meluLisaOtsikko": "Varavoimakoneet ja laskelmien tarkkuus",
   "meluLisa": [
    "Varavoimakoneet ovat moottoreita, jotka tuottavat sähköä sähkökatkon aikana. Niitä koekäytetään säännöllisesti.{v:harjavalta-melu}",
    "Vihdissä testejä arvioitiin noin 160 tuntia vuodessa, ja ne tehdään päiväaikaan.{v:vihti-avi} Harjavallan selvityksessä kutakin konetta koekäytetään noin kerran kuussa tunnin ajan.{v:harjavalta-melu}",
    "Kouvolassa viranomainen edellyttää ympäristölupahakemukseen melulaskelman myös vuorokauden mittaisesta sähkökatkosta. Koekäytöt pitää porrastaa ja pitää mahdollisimman lyhyinä.{v:kouvola-lvv}",
    "Laskelmat ovat arvioita. Harjavallan laskelman tarkkuus on noin 3 desibeliä suuntaansa, ja se pitää päivittää, jos suunnitelmat muuttuvat.{v:harjavalta-melu}"
   ]
  },
  "vertailu": {
   "otsikko": "Vanha tehdas vai uusi metsä?",
   "johdanto": "Pelin Maankäyttö-päätöksessä on kolme vaihtoehtoa. Oikeissa hankkeissa jokaisella on omat hyvät ja huonot puolensa. Yhtä oikeaa vastausta ei ole.",
   "tyypit": [
    {
     "kirjain": "A",
     "nimi": "Vanha teollisuusalue",
     "hyoty": "Haminassa suljettu paperitehdas sai uuden käytön, ja jäähdytykseen käytetään merivettä.{v:hamina-yle} Myllykoskella keskus on suunniteltu vanhalle tehdasalueelle.{v:kouvola-yle-2024}",
     "haitta": "Vanhakaan alue ei aina riitä sellaisenaan: Myllykoskelle tarvittaisiin noin 15 kilometrin uusi voimajohto.{v:kouvola-yle-2024} Saman yhtiön Ummeljoen alueen laajennus on suunniteltu kaavoittamattomalle metsämaalle.{v:kouvola-yle-2026}"
    },
    {
     "kirjain": "B",
     "nimi": "Uusi metsä- tai peltoalue",
     "hyoty": "Isoja yhtenäisiä alueita löytyy. Vaalan alue on lähellä Fingridin sähköasemaa.{v:ub-vaala}",
     "haitta": "Vihdin lausunnon mukaan maisema muuttuu pysyvästi, kun kallio- ja metsäalueista tulee teollisuusaluetta.{v:vihti-avi} Muhoksella metsää hakattiin ennen arviointia, ja viranomainen keskeytti esityöt.{v:lvv-muhos}"
    },
    {
     "kirjain": "C",
     "nimi": "Kaupungin työpaikka-alue",
     "hyoty": "Helsingin Lahdenväylän tontti on yleiskaavassa jo työpaikka-aluetta. Rakennus voisi suojata ympäristöä moottoritien melulta.{v:hel}",
     "haitta": "Tontti on viheralueen ja liito-oravametsän vieressä. Keskus tuottaa myös itse ääntä, ja sen vaikutukset pitää selvittää.{v:hel}"
    }
   ],
   "nakokulmatOtsikko": "Kuka sanoo mitä",
   "nakokulmat": [
    {
     "kuka": "Viranomainen",
     "teksti": "Ympäristövaikutukset pitää arvioida ennen kuin maastoa muutetaan paljon. Muuten vaihtoehtoja ei voi enää kunnolla vertailla.{v:lvv-muhos}"
    },
    {
     "kuka": "Luonnonsuojeluliitto",
     "teksti": "Muhoksella hakattiin myös luontokohteita, jotka olisi pitänyt säästää.{v:aljazeera}"
    },
    {
     "kuka": "Yhtiö",
     "teksti": "Google myöntää puutteet, aikoo noudattaa viranomaisen ohjeita ja kertoo istuttavansa puita 130 hehtaarille.{v:aljazeera}"
    },
    {
     "kuka": "Kunta",
     "teksti": "Vaalan kunnanjohtajan mukaan datakeskusalueen suunnitelmat etenevät aikataulussa.{v:ub-vaala}"
    }
   ]
  },
  "peli": {
   "otsikko": "Pelissä: Maankäyttö-päätös",
   "rivit": [
    {
     "kirjain": "A",
     "teksti": "Vanha teollisuusalue: esimerkkejä ovat Haminan paperitehdas ja Kouvolan Myllykoski.{v:hamina-yle}{v:kouvola-yle-2024}"
    },
    {
     "kirjain": "B",
     "teksti": "Uusi metsä- tai peltoalue: esimerkkejä ovat Vihti, Muhos ja Vaala.{v:vihti-avi}{v:aljazeera}{v:ub-vaala}"
    },
    {
     "kirjain": "C",
     "teksti": "Kaupungin työpaikka-alue: esimerkki on Helsingin Lahdenväylä.{v:hel}"
    }
   ]
  }
 },
 "pelikytkos": [
  {
   "paatos": "maankaytto",
   "vaihtoehto": "A",
   "teksti": "Vanha tehdasalue: Hamina ja Myllykoski. Vanhakin alue voi tarvita uuden voimajohdon."
  },
  {
   "paatos": "maankaytto",
   "vaihtoehto": "B",
   "teksti": "Metsä tai pelto: Vihdissä noin 60 ha, Muhoksella hakattiin yli 300 ha."
  },
  {
   "paatos": "maankaytto",
   "vaihtoehto": "C",
   "teksti": "Kaupungin työpaikka-alue: Helsingin Lahdenväylän tontti on noin 7,3 ha."
  }
 ]
};

  /* Jalkapallokenttä-kuvakkeet. Yksikkö 1 = alkuperäinen kenttäkuvake; isommille yksiköille pino, jossa luku. */
  var KUVAKE = {
    1: { leveys: 22, vb: "0 0 24 24",
      svg: '<rect x="1.5" y="5" width="21" height="14" rx="1" fill="currentColor"/><path d="M12 5v14" stroke="var(--card)" stroke-width="1.2"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="var(--card)" stroke-width="1.2"/><path d="M1.5 9.5h2.6v5H1.5M22.5 9.5h-2.6v5h2.6" fill="none" stroke="var(--card)" stroke-width="1.2"/>' },
    10: { leveys: 30, vb: "0 0 32 24",
      svg: '<rect x="7" y="1" width="24" height="15" rx="1.5" fill="currentColor" opacity=".45"/><rect x="1" y="7" width="26" height="16" rx="1.5" fill="currentColor"/><text x="14" y="19.4" text-anchor="middle" font-size="12" font-weight="700" fill="var(--card)" font-family="var(--f-body)">10</text>' },
    100: { leveys: 34, vb: "0 0 36 24",
      svg: '<rect x="9" y="0.5" width="26" height="13" rx="1.5" fill="currentColor" opacity=".3"/><rect x="5" y="4" width="26" height="14" rx="1.5" fill="currentColor" opacity=".6"/><rect x="1" y="8" width="28" height="15.5" rx="1.5" fill="currentColor"/><text x="15" y="20.2" text-anchor="middle" font-size="11" font-weight="700" fill="var(--card)" font-family="var(--f-body)">100</text>' }
  };
  /* Pelin Maankäyttö-vaihtoehto → kuvan esivalittu hanke (moduulidata.pelikytkos: A = Hamina ja Myllykoski,
     Haminan kokoa ei kerrota → Myllykoski; B = Vihti; C = Helsinki, Lahdenväylä). */
  var VALINTA_HANKE = { A: "myllykoski", B: "vihti", C: "helsinki" };

  var CSS = `
#osiot { container-type: inline-size; }
.vh { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.hanketaulu td:first-child { font-weight: 700; }
.hanketaulu td { font-size: 0.95rem; }
.koko-tulos { display: grid; gap: 12px; border-top: 1px solid var(--line); padding-top: 12px; }
.koko-tulos h3:focus { outline: none; }
.koko-tulos h3:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.koko-rivi { display: grid; gap: 4px; }
.koko-rivi .otsake { font-family: var(--f-sc); font-weight: 700; letter-spacing: 0.04em; }
.koko-rivi .maara { font-family: var(--f-display); font-weight: 700; font-size: 1.6rem; line-height: 1.1; font-variant-numeric: tabular-nums; }
.kentat { display: flex; flex-wrap: wrap; gap: 3px; align-items: center; color: var(--chart-1); }
.kentat svg { height: 22px; flex: none; display: block; }
.kentat .osa { display: block; overflow: hidden; flex: none; }
.selite-yks { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 0.9rem; color: var(--ink-soft); }
.selite-yks svg { height: 18px; color: var(--chart-1); flex: none; }
.pelivalinta { border-left: 4px solid var(--red); background: var(--card); border-radius: 4px; padding: 8px 12px; font-size: 0.95rem; }
.nappi.oma::after { content: "✦"; color: var(--gold); margin-left: 6px; }
.palkkilista { display: grid; gap: 6px; margin: 0; padding: 0; list-style: none; }
.palkkilista li { display: grid; grid-template-columns: minmax(7.5rem, 11rem) minmax(0, 1fr) 5.4rem; gap: 8px; align-items: center; font-size: 0.92rem; }
.palkkilista .ppalkki { position: relative; height: 16px; border-left: 1px solid var(--line); }
.palkkilista .ppalkki > span { display: block; height: 100%; min-width: 2px; background: var(--chart-muted); border-radius: 0 2px 2px 0; }
.palkkilista li.valittu .ppalkki > span { background: var(--chart-1); }
.palkkilista li.valittu .pnimi { font-weight: 700; }
.palkkilista .parvo { font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
.palkkilista li.katkaistu .ppalkki > span { border-radius: 0; }
.palkkilista .katko { position: absolute; top: -3px; bottom: -3px; right: 14%; width: 9px; background: var(--card);
  transform: skewX(-20deg); border-left: 2px solid var(--ink-soft); border-right: 2px solid var(--ink-soft); }
.katkoselite { font-size: 0.85rem; color: var(--ink-soft); }
.tyyppi { display: grid; gap: 8px; border-top: 2px solid var(--line); padding-top: 10px; }
.tyyppi h3 .kirjain { color: var(--red); }
.tyyppi.oma { border-top-color: var(--red); }
.merkinta { display: inline-block; font: 700 0.78rem var(--f-sc); letter-spacing: 0.06em; color: var(--red); border: 1.5px solid var(--red); border-radius: 999px; padding: 1px 9px; margin-left: 6px; vertical-align: middle; }
.peli-lista { margin: 0; padding-left: 1.2em; display: grid; gap: 6px; }
.peli-lista li.oma { background: color-mix(in srgb, var(--gold) 14%, transparent); border-radius: 4px; padding: 4px 6px; }
.peli-lista .kytkos { margin-top: 4px; font-size: 0.95rem; }
.lahella-pikto { display: grid; gap: 4px; }
@container (max-width: 560px) {
  .hanketaulu thead { display: none; }
  .hanketaulu tr { display: grid; gap: 4px; padding: 10px 0; border-bottom: 1px solid var(--line); }
  .hanketaulu td { border: 0; padding: 0; }
  .hanketaulu td[data-otsake]::before { content: attr(data-otsake) ": "; font: 700 0.8rem var(--f-sc); letter-spacing: 0.06em; color: var(--ink-soft); }
  .puolet { grid-template-columns: 1fr; }
  .palkkilista li { grid-template-columns: 6.6rem minmax(0, 1fr) 5.4rem; font-size: 0.88rem; }
}
`;

  rekisteroiModuuli({
    id: "maa",
    nimi: DATA.nimi,
    lyhyt: "Maa ja luonto",
    pohja: true,
    data: DATA,
    css: CSS,
    html: "",
    alusta: function (root, A, ctx) {
      var D = A.D, S = D.sisalto;
      var $ = function (id) { return root.getElementById(id); };
      /* Teksti, jossa {v:lahde-id} → lähdeviite */
      function t(s) { return A.esc(s).replace(/\{v:([a-z0-9-]+)\}/g, function (_, id) { return A.viite(id); }); }
      function kappaleet(lista) { return lista.map(function (x) { return "<p>" + t(x) + "</p>"; }).join(""); }

      /* Pelaajan Maankäyttö-valinta (jos tehty) */
      var vInd = ctx && ctx.valinta ? ctx.valinta("maankaytto") : null;   // vain jos pelissä on päätös id "maankaytto"
      var oma = (vInd === 0 || vInd === 1 || vInd === 2) ? "ABC".charAt(vInd) : null;
      var omaTyyppi = oma ? S.vertailu.tyypit.filter(function (x) { return x.kirjain === oma; })[0] : null;
      var omaKytkos = oma ? (D.pelikytkos || []).filter(function (x) { return x.paatos === "maankaytto" && x.vaihtoehto === oma; })[0] : null;

      /* 1. Mitä alueella oli ennen */
      var H = S.hankkeet;
      var taulu = '<div class="taulu"><table class="hanketaulu"><thead><tr>' + H.sarakkeet.map(function (c) { return '<th scope="col">' + A.esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        H.rivit.map(function (r) {
          return "<tr><td>" + A.esc(r.nimi) + '</td><td class="num" data-otsake="' + A.esc(H.sarakkeet[1]) + '">' + A.esc(r.koko) + '</td><td data-otsake="' + A.esc(H.sarakkeet[2]) + '">' + t(r.ennen) + '</td><td data-otsake="' + A.esc(H.sarakkeet[3]) + '">' + t(r.lahella) + "</td></tr>";
        }).join("") + "</tbody></table></div>";
      var osa1 = A.kortti('<h2 id="hankkeet-otsikko">' + A.esc(H.otsikko) + "</h2><p>" + t(H.johdanto) + "</p>" + taulu, "", 'aria-labelledby="hankkeet-otsikko"');

      /* 2. Kuinka iso on … hehtaaria? */
      var K = S.koko, KHA = K.kentta.ha;
      var valittu = (oma && VALINTA_HANKE[oma]) || "vihti";
      if (!K.hankkeet.some(function (p) { return p.id === valittu; })) valittu = K.hankkeet[0].id;
      function kentat(ha) { return Math.round(ha / KHA); }
      /* Otsikon "X" täytetään valitun hankkeen koolla (esim. "noin 60") */
      var otsOsat = K.otsikko.split("X");
      function haLuku(p) { return p.rivit[0].haTeksti.replace(/\s*ha$/, ""); }
      function kuvakkeet(maara, yks) {
        var k = KUVAKE[yks], n = maara / yks, taysi = Math.floor(n + 1e-9), osa = n - taysi, s = "";
        var svg = '<svg viewBox="' + k.vb + '" width="' + k.leveys + '" aria-hidden="true" focusable="false">' + k.svg + "</svg>";
        for (var i = 0; i < taysi; i++) s += svg;
        if (osa >= 0.05) s += '<span class="osa" style="width:' + Math.max(3, Math.round(k.leveys * osa)) + 'px">' + svg + "</span>";
        return '<div class="kentat" aria-hidden="true">' + s + "</div>";
      }
      function yksikkoSelite(yks) {
        var k = KUVAKE[yks], ikoni = '<svg viewBox="' + k.vb + '" width="' + Math.round(k.leveys * 18 / 22) + '" aria-hidden="true" focusable="false">' + k.svg + "</svg>";
        var teksti = yks === 1 ? "Yksi merkki = yksi jalkapallokenttä." :
          "Pelin oletus: yksi kuvake = " + yks + " jalkapallokenttää, jotta kuvakkeita ei tule liikaa. Vajaa kuvake tarkoittaa alle " + yks + " kenttää.";
        return '<p class="selite-yks">' + ikoni + "<span>" + A.esc(teksti) + "</span></p>";
      }
      function piirraKoko(siirraFokus) {
        var p = K.hankkeet.filter(function (x) { return x.id === valittu; })[0];
        var maks = Math.max.apply(null, p.rivit.map(function (r) { return kentat(r.ha); }));
        var yks = maks <= 100 ? 1 : maks <= 1000 ? 10 : 100;
        var html = '<h3 id="koko-otsikko" tabindex="-1">' + A.esc(p.nimi) + "</h3>";
        p.rivit.forEach(function (r) {
          html += '<div class="koko-rivi"><span class="otsake">' + A.esc(r.nimi) + ": " + A.esc(r.haTeksti) + '</span><span class="maara">≈ ' + A.fmt(kentat(r.ha)) + " jalkapallokenttää</span>" +
            kuvakkeet(kentat(r.ha), yks) + "</div>";
        });
        html += yksikkoSelite(yks) + "<p>" + t(p.huomio) + "</p>" + A.lahdeRivi(p.lahde.concat(["fifa"]));
        $("koko-tulos").innerHTML = html;
        $("koko-x").textContent = haLuku(p);
        [].forEach.call(root.querySelectorAll("[data-hanke]"), function (b) { b.setAttribute("aria-pressed", String(b.dataset.hanke === valittu)); });
        [].forEach.call(root.querySelectorAll(".palkkilista li"), function (li) {
          var on = li.dataset.id === valittu;
          li.classList.toggle("valittu", on);
          li.querySelector(".tila-vh").textContent = on ? " (valittu yllä)" : "";
        });
        if (siirraFokus) $("koko-otsikko").focus();
      }
      var napit = '<div class="napit" role="group" aria-label="Valitse hanke">' + K.hankkeet.map(function (p) {
        var omaHanke = oma && VALINTA_HANKE[oma] === p.id;
        return '<button type="button" class="nappi' + (omaHanke ? " oma" : "") + '" data-hanke="' + A.esc(p.id) + '" aria-pressed="' + (p.id === valittu) + '">' + A.esc(p.nappi) +
          (omaHanke ? '<span class="vh"> (pelivalintasi esimerkki)</span>' : "") + "</button>";
      }).join("") + "</div>";
      var pelirivi = omaTyyppi ? '<p class="pelivalinta">Valitsit pelissä vaihtoehdon <strong>' + A.esc(oma) + " · " + A.esc(omaTyyppi.nimi) +
        "</strong>. Siksi kuvassa on valmiiksi valittuna " + A.esc(K.hankkeet.filter(function (x) { return x.id === valittu; })[0].nimi) + ' (merkitty <span aria-hidden="true">✦</span><span class="vh">tähdellä</span>).</p>' : "";

      /* Vertailupalkit: tekstinä luettava lista; hyvin pitkä palkki katkaistaan, jotta muut erottuvat */
      var arvot = K.hankkeet.map(function (p) { return p.rivit[0].ha; }).sort(function (a, b) { return b - a; });
      var katkaise = arvot.length > 1 && arvot[0] > 2 * arvot[1];
      var asteikko = katkaise ? arvot[1] * 1.1 : arvot[0];
      var katkaistu = null;
      var palkit = '<figure class="kaavio" style="margin:0" aria-labelledby="vertailu-h"><h3 id="vertailu-h">' + A.esc(K.vertailuOtsikko) + '</h3><ul class="palkkilista">' +
        K.hankkeet.map(function (p) {
          var ha = p.rivit[0].ha, yli = katkaise && ha > asteikko;
          if (yli) katkaistu = p;
          var lev = yli ? 100 : 100 * ha / asteikko;
          return '<li data-id="' + A.esc(p.id) + '"' + (yli ? ' class="katkaistu"' : "") + '><span class="pnimi">' + A.esc(p.nimi) + '</span>' +
            '<span class="ppalkki" aria-hidden="true"><span style="width:' + lev.toFixed(2) + '%"></span>' + (yli ? '<span class="katko"></span>' : "") + "</span>" +
            '<span class="parvo"><span class="vh">: </span>' + A.esc(p.rivit[0].haTeksti.replace(/^noin /, "")) + "</span>" +
            '<span class="vh tila-vh"></span>' + (yli ? '<span class="vh"> (palkki katkaistu)</span>' : "") + "</li>";
        }).join("") + "</ul><figcaption>" + A.esc(K.vertailuSelite) +
        (katkaistu ? '</figcaption><p class="katkoselite">Pelin oletus: ' + A.esc(katkaistu.nimi) + ": palkki on katkaistu, jotta pienemmät hankkeet erottuvat. Oikeassa mittakaavassa se olisi noin " +
          A.fmt(arvot[0] / arvot[1]) + " kertaa pisimmän muun palkin pituinen.</p>" : "</figcaption>") +
        A.lahdeRivi(["hel", "mikkeli-yle", "kouvola-lvv", "kouvola-yle-2024", "vihti-avi", "pyhajarvi", "harjavalta-melu", "aljazeera", "ub-vaala"]) + "</figure>";
      var osa2 = A.kortti('<h2 id="koko-osio">' + A.esc(otsOsat[0]) + '<span id="koko-x"></span>' + A.esc(otsOsat.slice(1).join("X")) + "</h2><p>" + A.esc(K.johdanto) + " " + t(K.kentta.selitys) + "</p>" +
        pelirivi + napit + '<div class="koko-tulos" id="koko-tulos"></div><details><summary>Vertaa kaikkia hankkeita</summary>' + palkit + "</details>", "", 'aria-labelledby="koko-osio"');

      /* 3. Kun työmaa alkaa */
      var R = S.rakentaminen;
      var luvut = '<div class="luvut">' + R.luvut.map(function (l) {
        return '<div class="luku"><span class="arvo">' + A.esc(l.arvo) + '</span><span class="selite">' + A.esc(l.selite) + A.viite(l.viite) + "</span></div>";
      }).join("") + "</div>";
      var rekat = '<div class="lahella-pikto">' + A.pikto("rekka", R.rekat.maara, null, 1, "var(--chart-2)") + '<span class="pieni">' + A.esc(R.rekat.teksti) + A.viite(R.rekat.viite) + "</span>" + A.lahdeRivi([R.rekat.viite]) + "</div>";
      var osa3 = A.kortti('<h2 id="tyomaa-otsikko">' + A.esc(R.otsikko) + "</h2><p>" + A.esc(R.johdanto) + "</p>" + luvut + rekat + kappaleet(R.kappaleet) +
        "<h3>" + A.esc(R.meluOtsikko) + "</h3>" + kappaleet(R.melu) +
        "<details><summary>" + A.esc(R.meluLisaOtsikko) + '</summary><div class="osio">' + kappaleet(R.meluLisa) + "</div></details>", "", 'aria-labelledby="tyomaa-otsikko"');

      /* 4. Vanha tehdas vai uusi metsä */
      var V = S.vertailu, merkinta = '<span class="merkinta">Sinun valintasi</span>';
      var tyypit = V.tyypit.map(function (x) {
        var on = x.kirjain === oma;
        return '<div class="tyyppi' + (on ? " oma" : "") + '"><h3><span class="kirjain">' + A.esc(x.kirjain) + "</span> · " + A.esc(x.nimi) + (on ? merkinta : "") + "</h3>" + A.puolet(t(x.hyoty), t(x.haitta)) + "</div>";
      }).join("");
      var nako = "<h3>" + A.esc(V.nakokulmatOtsikko) + '</h3><div class="nakokulmat">' + V.nakokulmat.map(function (n) {
        return '<div class="nakokulma"><span class="kuka">' + A.esc(n.kuka) + "</span><p>" + t(n.teksti) + "</p></div>";
      }).join("") + "</div>";
      var osa4 = A.kortti('<h2 id="vertailu-otsikko">' + A.esc(V.otsikko) + "</h2><p>" + A.esc(V.johdanto) + "</p>" + tyypit + nako, "", 'aria-labelledby="vertailu-otsikko"');

      /* 5. Pelikytkös: pelaajan valinta korostetaan ja sen tiivistelmä (moduulidata.pelikytkos) näytetään */
      var P = S.peli;
      var osa5 = A.kortti('<h2 id="peli-otsikko">' + A.esc(P.otsikko) + '</h2><ul class="peli-lista">' + P.rivit.map(function (r) {
        var on = r.kirjain === oma;
        return "<li" + (on ? ' class="oma"' : "") + '><span class="sc"><strong>' + A.esc(r.kirjain) + "</strong></span> · " + t(r.teksti) + (on ? merkinta : "") +
          (on && omaKytkos ? '<p class="kytkos">' + A.esc(omaKytkos.teksti) + "</p>" : "") + "</li>";
      }).join("") + "</ul>", "", 'aria-labelledby="peli-otsikko"');

      var osiot = $("osiot");
      osiot.innerHTML = osa1 + osa2 + osa3 + osa4 + osa5;
      piirraKoko(false);
      osiot.addEventListener("click", function (e) {
        var b = e.target.closest("[data-hanke]"); if (!b) return;
        valittu = b.dataset.hanke; piirraKoko(true);
      });
      return function () {};
    }
  });
})();
