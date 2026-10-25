/* ===== Tietomoduuli: Opit ulkomailta (id ulkomaat) =====
   Lähde: erillinen artifakti 'Opit ulkomailta' (tietomoduulipohja v1). Maavalitsin, maakortit, vertailutaulukko ja opit.
   Data siirretty sellaisenaan; lisätty vertailu.rivit[].id (taulukon korostus), pois käyttämätön lueLisaaTeksti.
*/
(function () {
  var DATA = {
   "id": "opit-ulkomailta",
   "nimi": "Opit ulkomailta",
   "paat": [
    "tulevaisuus",
    "energia"
   ],
   "ingressi": "Irlanti, Alankomaat, Ruotsi, Tanska ja Saksa ovat jo eläneet datakeskusbuumin. Katso, mitä niissä tapahtui, mitä päätettiin ja mikä siitä voi päteä Suomeen.",
   "paivitetty": "2026-10-24",
   "rooliRivit": {
    "asukas": "Ulkomailla datakeskukset ovat näkyneet asukkaille eri tavoin: Odensessa kaukolämpönä, Amsterdamissa rakentamisen tauotuksena. Kumpi kokemus toistuu Suomessa, riippuu paikasta ja verkosta.",
    "yrittaja": "Luleåssa paikalliset yritykset saivat töitä rakentamisesta ja ylläpidosta. Muut jatkoinvestoinnit jäivät kuitenkin arvion mukaan pieniksi.",
    "viljelija": "Alankomaissa valtio rajasi suurimmat datakeskukset kahteen kuntaan, koska ne vievät paljon tilaa. Hollands Kroonissa huoli koski myös maisemaa ja asumista.",
    "nuori": "Luleåssa tekniikan opiskelupaikkoihin haki enemmän nuoria datakeskuksen tulon jälkeen. Pysyviä työpaikkoja syntyi satoja, ei tuhansia.",
    "valtuutettu": "Amsterdam ja Haarlemmermeer kokivat, että kunnalla oli liian vähän sananvaltaa. Ne pysäyttivät uudet hankkeet ja päättivät sitten itse alueet ja kasvun ylärajan."
   },
   "alueRivit": {
    "maaseutu": "Luleån ja Odensen kaltaiset seudut saivat suuria keskuksia, koska sähköä tai lämmön käyttäjiä oli lähellä. Ilman kaukolämpöverkkoa lämpö jää helposti käyttämättä.",
    "pienkunta": "Alankomaissa Hollands Kroon oli toinen kahdesta kunnasta, joihin suurimmat keskukset ohjattiin. Kunta halusi silti aikalisän, koska asukkaiden ääni oli sen mukaan jäänyt vähälle.",
    "kaupunki": "Dublinissa ja Amsterdamissa kasvu törmäsi sähköverkon ja tilan rajoihin. Uusia liittymiä rajattiin, ja keskuksia ohjattiin muualle."
   },
   "oletukset": [
    "Maat on valittu siksi, että niistä löytyi viranomaisten tai yhtiöiden omia lähteitä. Ne eivät kata kaikkia maita, joissa datakeskuksia on rakennettu.",
    "Vertailutaulukko tiivistää jokaisesta maasta yhden päätöksen. Todellisuudessa päätöksiä on useita, ja ne ovat muuttuneet ajan myötä."
   ],
   "lahteet": [
    {
     "id": "cso-2025",
     "nimi": "CSO (Irlannin tilastovirasto): Data Centres Metered Electricity Consumption 2025 (7.7.2026)",
     "url": "https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2025/keyfindings/"
    },
    {
     "id": "cso-2024",
     "nimi": "CSO (Irlannin tilastovirasto): Data Centres Metered Electricity Consumption 2024 (10.6.2025)",
     "url": "https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2024/keyfindings"
    },
    {
     "id": "eirgrid-2026",
     "nimi": "EirGrid: Data Centre Constrained Area Overview (20.5.2026)",
     "url": "https://cms.eirgrid.ie/sites/default/files/publications/Data-Centre-Constrained-Area-Overview-May-2026.pdf"
    },
    {
     "id": "williamfry-2025",
     "nimi": "William Fry (asianajotoimisto): CRU publishes long-awaited final policy on data centre connections (15.12.2025)",
     "url": "https://www.williamfry.com/knowledge/cru-publishes-long-awaited-final-policy-on-data-centre-connections/"
    },
    {
     "id": "dcd-dublin",
     "nimi": "DatacenterDynamics: EirGrid says no new applications for data centers in Dublin till 2028 (päiväys ei näy sivulla)",
     "url": "https://www.datacenterdynamics.com/en/news/eirgrid-says-no-new-applications-for-data-centers-in-dublin-till-2028"
    },
    {
     "id": "dcd-exodus",
     "nimi": "DatacenterDynamics: EirGrid warns Irish government mass exodus of data centers possible without connection agreements (2024)",
     "url": "https://www.datacenterdynamics.com/en/news/eirgrid-warns-irish-government-mass-exodus-of-data-centers-possible-without-connection-agreements"
    },
    {
     "id": "nieuws-2019",
     "nimi": "Nieuws.nl: Tijdelijke stop op bouw nieuwe datacenters (12.7.2019)",
     "url": "https://nieuws.nl/algemeen/tijdelijke-stop-op-bouw-nieuwe-datacenters"
    },
    {
     "id": "dda-2019",
     "nimi": "Dutch IT Channel: Dutch Data Centers betreurt bouwstop datacenters (16.7.2019)",
     "url": "https://www.dutchitchannel.nl/news/148851/dutch-data-centers-betreurt-bouwstop-datacenters"
    },
    {
     "id": "haarlemmermeer-2020",
     "nimi": "Gemeente Haarlemmermeer: Datacenterbeleid gemeente Haarlemmermeer (voimassa 24.11.2020 alkaen)",
     "url": "https://lokaleregelgeving.overheid.nl/CVDR646404"
    },
    {
     "id": "dcd-amsterdam",
     "nimi": "DatacenterDynamics: Amsterdam resumes data center building after year's moratorium (2020)",
     "url": "https://www.datacenterdynamics.com/en/news/amsterdam-resumes-data-center-building-after-years-moratorium"
    },
    {
     "id": "rijksoverheid-2022",
     "nimi": "Rijksoverheid (Alankomaiden hallitus): Kabinet beperkt mogelijkheid tot vestiging hyperscale datacentra (10.6.2022)",
     "url": "https://www.rijksoverheid.nl/actueel/nieuws/2022/06/10/kabinet-beperkt-mogelijkheid-tot-vestiging-hyperscale-datacentra"
    },
    {
     "id": "nos-2022a",
     "nimi": "NOS: Hyperscale-datacenters in Nederland? Nog maar op twee plekken welkom (10.6.2022)",
     "url": "https://nos.nl/l/2432219"
    },
    {
     "id": "nos-2022b",
     "nimi": "NOS: Een van de twee gemeenten voor megadatacenters stribbelt tegen (28.6.2022)",
     "url": "https://nos.nl/l/2434458"
    },
    {
     "id": "dcd-zeewolde",
     "nimi": "DatacenterDynamics: Facebook parent Meta officially kills Zeewolde data center after pushback in the Netherlands (2022)",
     "url": "https://datacenterdynamics.com/en/news/facebook-parent-meta-officially-kills-zeewolde-data-center-after-pushback-in-the-netherlands"
    },
    {
     "id": "tillvaxt-2014",
     "nimi": "Tillväxtverket: Etableringen av Facebooks europeiska datacenter i Sverige och Luleå, rapport 0170 (5/2014; Invest in Dalarnan tallentama kopio)",
     "url": "https://www.investindalarna.se/app/uploads/2016/12/rapport-0170-web-tillvaxtverketfacebook.pdf"
    },
    {
     "id": "barents-2016",
     "nimi": "The Barents Observer: Facebook and green energy key to economic boom (20.1.2016)",
     "url": "https://thebarentsobserver.com/en/industry/2016/01/facebook-and-green-energy-key-economic-boom"
    },
    {
     "id": "regeringen-se-2022",
     "nimi": "Ruotsin valtiovarainministeriö: Avskaffad avfallsförbränningsskatt och slopad energiskattenedsättning för datorhallar (9.9.2022)",
     "url": "https://regeringen.se/rattsliga-dokument/departementsserien-och-promemorior/2022/09/avskaffad-avfallsforbranningsskatt-och-slopad-energiskattenedsattning-for-datorhallar/"
    },
    {
     "id": "skatteverket-2022",
     "nimi": "Skatteverket (Ruotsin verovirasto): Slopad skattenedsättning för datorhallar (16.12.2022)",
     "url": "https://skatteverket.se/foretag/skatterochavdrag/punktskatter/nyheterinompunktskatter/2022/nyheterinompunktskatter/slopadskattenedsattningfordatorhallar.5.1997e70d1848dabbac93896.html"
    },
    {
     "id": "dcd-odense",
     "nimi": "DatacenterDynamics: Facebook begins installing district heating system at Odense data center (9.7.2020)",
     "url": "https://www.datacenterdynamics.com/en/news/facebook-begins-installing-district-heating-system-odense-data-center-denmark"
    },
    {
     "id": "meta-odense",
     "nimi": "Meta: Denmark data center to warm local community (ei päiväystä)",
     "url": "https://sustainability.atmeta.com/asset/fb-denmark-data-center-to-warm-local-community"
    },
    {
     "id": "ramboll-odense",
     "nimi": "Ramboll: Meta – surplus heat to district heating (hankesivu, ei päiväystä)",
     "url": "https://www.ramboll.com/en-us/meta-surplus-heat-to-district-heating"
    },
    {
     "id": "techradar-2026",
     "nimi": "TechRadar: This Danish data center is providing heat to thousands of household radiators (12.9.2026)",
     "url": "https://www.techradar.com/pro/finally-some-good-usage-this-danish-data-center-is-providing-heat-to-power-thousands-of-household-radiators"
    },
    {
     "id": "sdu-2019",
     "nimi": "Syddansk Universitet: Datacentre og overskudsvarme (1/2019)",
     "url": "https://www.sdu.dk/da/om-sdu/fakulteterne/samfundsvidenskab/sam_nyhedsliste/datacentre_og_overskudsvarme"
    },
    {
     "id": "regeringen-dk",
     "nimi": "Tanskan hallitus: Aftale om fremme af overskudsvarme (sopimusteksti, ei päiväystä)",
     "url": "https://regeringen.dk/media/mo0ghlev/aftaletekst-fremme-af-overskudsvarme.pdf"
    },
    {
     "id": "bdo-dk",
     "nimi": "BDO Danmark: Afgift på overskudsvarme – nye regler fra næste år (2021)",
     "url": "https://www.bdo.dk/da-dk/faglig-info/depechen/depechen-artikler-2021/afgift-pa-overskudsvarme-nye-regler-fra-naeste-aar"
    },
    {
     "id": "enefg-11",
     "nimi": "Saksan oikeusministeriö: Energieeffizienzgesetz § 11, Klimaneutrale Rechenzentren (voimassa oleva teksti)",
     "url": "https://www.gesetze-im-internet.de/enefg/__11.html"
    },
    {
     "id": "cms-2023",
     "nimi": "CMS (asianajotoimisto): Der Bundestag verabschiedet Energieeffizienzgesetz (29.9.2023)",
     "url": "https://cms.law/de/deu/legal-updates/der-bundestag-verabschiedet-energieeffizienzgesetz-das-erwartet-rechenzentrumsbetreiber"
    },
    {
     "id": "eco-2023",
     "nimi": "eco – Verband der Internetwirtschaft: Stellungnahme zum Energieeffizienzgesetz (11.4.2023)",
     "url": "https://eco.de/download/217601"
    },
    {
     "id": "fingrid-18-8",
     "nimi": "Fingrid: Sähkönkulutus on kääntymässä voimakkaaseen kasvuun (18.8.2026)",
     "url": "https://www.sttinfo.fi/tiedote/72239761/sahkonkulutus-on-kaantymassa-voimakkaaseen-kasvuun-rinnalle-tarvitaan-lisaa-saatovoimaa?lang=fi"
    },
    {
     "id": "fingrid-18-5",
     "nimi": "Fingrid: Webinaari liittymissopimushakemuksista, esitysmateriaali (18.5.2026)",
     "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/ajankohtaista-tapahtumat/webinaari-liittymissopimushakemuksista-18.5.2026-esitysmateriaali.pdf"
    },
    {
     "id": "he-156",
     "nimi": "Hallituksen esitys HE 156/2025 vp (2025)",
     "url": "https://www.eduskunta.fi/pdf/HE+156/2025+vp?lang=fi"
    },
    {
     "id": "microsoft-2026",
     "nimi": "Microsoft: Microsoft käynnistää pääkaupunkiseudun datakeskusalueen toisen vaiheen rakentamisen (28.4.2026)",
     "url": "https://news.microsoft.com/source/emea/2026/04/microsoft-kaynnistaa-paakaupunkiseudun-datakeskusalueen-toisen-vaiheen-rakentamisen/?lang=fi"
    },
    {
     "id": "hy-2026",
     "nimi": "Pervilä & Kangasharju, Helsingin yliopisto: Datakeskusten faktat ja fiktiot (20.7.2026)",
     "url": "https://helda.helsinki.fi/server/api/core/bitstreams/533969e6-e647-4fcd-b13c-afcb62effa2d/content"
    },
    {
     "id": "ely-vihti",
     "nimi": "Uudenmaan ELY-keskus: Vihdin datakeskuksen YVA-ohjelman lausunnot (2023)",
     "url": "https://www.ymparisto.fi/sites/default/files/documents/Lausuntokoonti_Vihdin_datakeskus_YVA-ohjelma.pdf"
    },
    {
     "id": "hel-2026",
     "nimi": "Helsingin kaupunki: Lahdenväylän varteen suunnitellaan uutta datakeskusta (22.4.2026)",
     "url": "https://www.hel.fi/fi/uutiset/lahdenvaylan-varteen-suunnitellaan-uutta-datakeskusta"
    }
   ],
   "sisalto": {
    "valitsin": {
     "otsikko": "Valitse maa",
     "teksti": "Jokaisessa kortissa on sama järjestys: mitä tapahtui, mitä päätettiin ja päteekö se Suomeen."
    },
    "maat": [
     {
      "id": "irlanti",
      "nimi": "Irlanti",
      "paikka": "Dublinin seutu · kaupunki",
      "karki": "Sähkö loppui ensin: verkko ei enää riittänyt kaikille uusille keskuksille.",
      "tapahtui": [
       {
        "t": "Irlannin tilastoviraston mukaan datakeskusten osuus mitatusta sähkönkulutuksesta nousi 5 prosentista (2015) 23 prosenttiin (2025).",
        "v": [
         "cso-2025"
        ]
       },
       {
        "t": "Vuonna 2025 kaikki kodit käyttivät yhteensä 27 % sähköstä. Datakeskukset käyttivät siis lähes yhtä paljon kuin kaikki kodit.",
        "v": [
         "cso-2025"
        ]
       }
      ],
      "kaavio": {
       "otsikko": "Osuus Irlannin mitatusta sähkönkulutuksesta",
       "yksikko": "%",
       "rivit": [
        {
         "nimi": "Datakeskukset 2015",
         "arvo": 5
        },
        {
         "nimi": "Datakeskukset 2024",
         "arvo": 22
        },
        {
         "nimi": "Datakeskukset 2025",
         "arvo": 23,
         "korostus": true
        },
        {
         "nimi": "Kaikki kodit 2025",
         "arvo": 27
        }
       ],
       "selite": "Kodit = kaupunkien kotitaloudet 18 % ja maaseudun 9 %.",
       "lahde": [
        "cso-2025",
        "cso-2024"
       ]
      },
      "nakokulmat": [
       {
        "kuka": "Sähkön riittävyys",
        "t": "Kantaverkkoyhtiö EirGrid antoi 12 kuukauden aikana seitsemän varoitusta mahdollisista sähkön toimitusongelmista.",
        "v": [
         "dcd-dublin"
        ]
       },
       {
        "kuka": "Talous",
        "t": "EirGrid varoitti myös hallitusta: jos uusia liittymiä ei tule, osa suurista keskuksista voi lähteä maasta.",
        "v": [
         "dcd-exodus"
        ]
       }
      ],
      "paatettiin": [
       {
        "t": "Sähkömarkkinoiden valvoja CRU asetti marraskuussa 2021 ehdot datakeskusten liittymille. Käytännössä ne pysäyttivät uudet liittymät Dublinin seudulla.",
        "v": [
         "williamfry-2025"
        ]
       },
       {
        "t": "EirGrid ilmoitti, ettei se liitä uusia datakeskuksia Dublinin alueella lähivuosina. Jo jonossa olleet hakemukset käsiteltiin.",
        "v": [
         "dcd-dublin"
        ]
       },
       {
        "t": "Joulukuussa 2025 CRU teki uuden päätöksen. Suuren keskuksen pitää tuoda mukanaan oma tai lähellä oleva sähköntuotanto tai sähkövarasto.",
        "v": [
         "eirgrid-2026",
         "williamfry-2025"
        ]
       },
       {
        "t": "Lisäksi 80 % keskuksen vuotuisesta sähköstä pitää kuuden vuoden kuluessa tulla uudesta irlantilaisesta uusiutuvasta tuotannosta.",
        "v": [
         "williamfry-2025"
        ]
       }
      ],
      "lisaa": [
       {
        "t": "EirGridin toukokuun 2026 katsauksen mukaan Dublinin seutu on edelleen täynnä. Galwayssa, Limerickissä ja Corkissa voi alustavan arvion mukaan olla tilaa noin 50–100 MW kussakin.",
        "v": [
         "eirgrid-2026"
        ]
       },
       {
        "t": "Uusi sääntö koskee keskuksia, joiden liittymä on vähintään 1 MVA. MVA on liittymän tehon yksikkö, suunnilleen sama kuin megawatti.",
        "v": [
         "williamfry-2025"
        ]
       }
      ],
      "suomi": {
       "samaa": [
        {
         "t": "Suomessakin liittymiä haetaan paljon. Sopimuksen saaneet datakeskushankkeet ovat Fingridin mukaan yhteensä lähes 5 GW.",
         "v": [
          "fingrid-18-8"
         ]
        },
        {
         "t": "Jos kaikki toteutuisivat, Suomen sähkönkulutus kasvaisi lähes 40 % vuoden 2025 tasosta.",
         "v": [
          "fingrid-18-8"
         ]
        },
        {
         "t": "Fingrid vaatii yli 30 MW:n kohteilta kykyä rajoittaa verkosta otettavaa tehoa. Ajatus muistuttaa Irlannin uusia ehtoja.",
         "v": [
          "fingrid-18-5"
         ]
        }
       ],
       "eroa": [
        {
         "t": "Irlannissa keskukset käyttävät jo lähes neljänneksen sähköstä. Suomessa hankkeiden toteutuminen veisi Fingridin mukaan ainakin viisi vuotta.",
         "v": [
          "cso-2025",
          "fingrid-18-8"
         ]
        },
        {
         "t": "Dublinin ruuhka keskittyi yhdelle seudulle. Fingridin mukaan Pohjois-Suomessa uusia investointeja voi liittää nopeasti, muualla odotus vaihtelee.",
         "v": [
          "eirgrid-2026",
          "fingrid-18-8"
         ]
        }
       ]
      },
      "lahteet": [
       "cso-2025",
       "cso-2024",
       "eirgrid-2026",
       "williamfry-2025",
       "dcd-dublin",
       "dcd-exodus"
      ]
     },
     {
      "id": "alankomaat",
      "nimi": "Alankomaat",
      "paikka": "Amsterdam ja Haarlemmermeer · kaupunki; Hollands Kroon ja Het Hogeland · maan reuna-alueet",
      "karki": "Tila ja sähkö loppuivat: kunnat ja valtio päättivät, minne keskuksia saa rakentaa.",
      "tapahtui": [
       {
        "t": "Heinäkuussa 2019 Amsterdam ja Haarlemmermeer pysäyttivät uusien datakeskusten rakentamisen väliaikaisesti.",
        "v": [
         "nieuws-2019"
        ]
       },
       {
        "t": "Syynä oli, että keskuksia tuli nopeasti ja ne vievät paljon tilaa ja energiaa. Kunnilla oli vähän sananvaltaa, koska hankkeet sopivat usein vanhoihin kaavoihin.",
        "v": [
         "nieuws-2019"
        ]
       }
      ],
      "puoletOtsikko": "Mitä pysäytyksestä seurasi",
      "puolet": {
       "hyoty": {
        "t": "Kunnat saivat ohjat: keskukset ohjattiin tietyille teollisuusalueille ja kasvulle tuli yläraja.",
        "v": [
         "haarlemmermeer-2020",
         "dcd-amsterdam"
        ]
       },
       "haitta": {
        "t": "Alan järjestö piti pysäytystä äkillisenä. Sen mukaan todellinen ongelma oli sähkö- ja lämpöverkkojen puute.",
        "v": [
         "dda-2019"
        ]
       }
      },
      "paatettiin": [
       {
        "t": "Vuonna 2020 Haarlemmermeer salli keskukset vain neljälle yritysalueelle. Kasvun yläraja on 750 MVA vuoteen 2030, noin 70 MVA vuodessa.",
        "v": [
         "haarlemmermeer-2020"
        ]
       },
       {
        "t": "Amsterdam salli 670 MVA vuoteen 2030. Uuden keskuksen tehokkuusluvun (PUE) pitää olla 1,2. Se tarkoittaa, että muuhun kuin palvelimiin kuluu enintään viidesosa lisää sähköä.",
        "v": [
         "dcd-amsterdam"
        ]
       },
       {
        "t": "Kesäkuussa 2022 hallitus päätti, että suurimmat keskukset sallitaan vain kahdessa kunnassa: Hollands Kroonissa ja Het Hogelandissa.",
        "v": [
         "rijksoverheid-2022"
        ]
       },
       {
        "t": "Suurimmilla tarkoitetaan yli 10 hehtaarin keskuksia, jotka tarvitsevat vähintään 70 MW sähköä.",
        "v": [
         "nos-2022a"
        ]
       }
      ],
      "lisaa": [
       {
        "t": "Hollands Kroonin uusi kunnanjohto halusi pian aikalisän. Sen mukaan asukkaat eivät olleet päässeet tarpeeksi vaikuttamaan, ja huolena olivat myös maisema ja asuminen.",
        "v": [
         "nos-2022b"
        ]
       },
       {
        "t": "Metan suunnittelema 200 MW:n keskus Zeewoldessa jäi toteutumatta. Meta luopui hankkeesta vastustuksen jälkeen.",
        "v": [
         "dcd-zeewolde"
        ]
       }
      ],
      "suomi": {
       "samaa": [
        {
         "t": "Suomessakin kunta päättää kaavasta. Fingridiltä voi hakea liittymää vasta, kun kaava on lainvoimainen ja rakennuslupa on myönnetty.",
         "v": [
          "fingrid-18-5"
         ]
        }
       ],
       "eroa": [
        {
         "t": "Alankomaiden hallitus perusteli rajaa sillä, että maa on pieni ja tilaa on niukasti.",
         "v": [
          "rijksoverheid-2022"
         ]
        },
        {
         "t": "Suomen hankkeiden koko vaihtelee: Helsingin Heikinlaakson alue on noin 7 ha, Vihdin noin 60 ha. Alankomaiden 10 hehtaarin raja ylittyisi Vihdissä.",
         "v": [
          "hel-2026",
          "ely-vihti"
         ]
        }
       ]
      },
      "lahteet": [
       "nieuws-2019",
       "dda-2019",
       "haarlemmermeer-2020",
       "dcd-amsterdam",
       "rijksoverheid-2022",
       "nos-2022a",
       "nos-2022b",
       "dcd-zeewolde"
      ]
     },
     {
      "id": "ruotsi",
      "nimi": "Ruotsi",
      "paikka": "Luleå, Norrbotten · maaseutumainen seutu",
      "karki": "Yksi suuri yhtiö tuli pohjoiseen halvan vesivoiman perässä. Odotukset olivat suuret, tulos vaihteleva.",
      "tapahtui": [
       {
        "t": "Facebook (nyk. Meta) rakensi Euroopan-datakeskuksensa Luleåhon. Rakentaminen alkoi 2011.",
        "v": [
         "tillvaxt-2014"
        ]
       },
       {
        "t": "Lulejoen vesivoimalat tuottavat 4 200 MW, ja noin puolet sähköstä viedään alueen ulkopuolelle.",
        "v": [
         "barents-2016"
        ]
       }
      ],
      "puoletOtsikko": "Mitä alueelle seurasi",
      "puolet": {
       "hyoty": {
        "t": "Ensimmäinen halli toi arvion mukaan noin 120 suoraa työpaikkaa, ja rakentaminen jopa 300 työpaikkaa vuodessa. Seudulle tuli myöhemmin noin kymmenen datakeskusta lisää.",
        "v": [
         "tillvaxt-2014",
         "barents-2016"
        ]
       },
       "haitta": {
        "t": "Muut jatkoinvestoinnit jäivät arvion mukaan pieniksi. Asuntojen hinnat noin kaksinkertaistuivat kolmessa vuodessa; syitä voi olla useita.",
        "v": [
         "tillvaxt-2014",
         "barents-2016"
        ]
       }
      },
      "paatettiin": [
       {
        "t": "Valtio myönsi hankkeelle aluetukea enintään 103 miljoonaa kruunua.",
        "v": [
         "tillvaxt-2014"
        ]
       },
       {
        "t": "Ruotsissa datakeskusten sähköveroa oli alennettu. Alennus poistettiin 1.7.2023.",
        "v": [
         "skatteverket-2022"
        ]
       },
       {
        "t": "Perusteluna oli energiatehokkuus ja se, että sähköä tarvitaan myös työvoimavaltaiselle teollisuudelle.",
        "v": [
         "regeringen-se-2022"
        ]
       }
      ],
      "lisaa": [
       {
        "t": "Täysin valmiin keskuksen arvioitiin tuovan noin 260 uutta työpaikkaa. Arvio tehtiin 2014, kun vain yksi halli oli valmis.",
        "v": [
         "tillvaxt-2014"
        ]
       },
       {
        "t": "Vuonna 2016 keskus työllisti lehden mukaan noin 100 henkeä. Luleån tekniseen yliopistoon hakevien määrä kasvoi.",
        "v": [
         "barents-2016",
         "tillvaxt-2014"
        ]
       },
       {
        "t": "Pohjoisen kunnissa datakeskus voi yhä saada niin sanotun Norrlannin vähennyksen.",
        "v": [
         "skatteverket-2022"
        ]
       }
      ],
      "suomi": {
       "samaa": [
        {
         "t": "Suomi teki saman ratkaisun: datakeskusten sähkövero nousi 1.7.2026 alkaen 0,05 sentistä 2,24 senttiin kilowattitunnilta.",
         "v": [
          "he-156"
         ]
        },
        {
         "t": "Suomessa 100 MW:n keskuksen pysyviksi työpaikoiksi on arvioitu 64–150 henkeä. Se on samaa luokkaa kuin Luleån luvut.",
         "v": [
          "hy-2026",
          "tillvaxt-2014"
         ]
        }
       ],
       "eroa": [
        {
         "t": "Luleån arvio tehtiin etukäteen, joten se kuvaa odotuksia. Toteutuneista vaikutuksista on vähemmän virallista tietoa.",
         "v": [
          "tillvaxt-2014"
         ]
        },
        {
         "t": "Fingridin mukaan Pohjois-Suomessa uusia investointeja voi liittää verkkoon nopeasti. Se riippuu kuitenkin hankkeiden määrästä.",
         "v": [
          "fingrid-18-8"
         ]
        }
       ]
      },
      "lahteet": [
       "tillvaxt-2014",
       "barents-2016",
       "skatteverket-2022",
       "regeringen-se-2022"
      ]
     },
     {
      "id": "tanska",
      "nimi": "Tanska",
      "paikka": "Odense, Fyn · kaupunki ja sen lähiseutu",
      "karki": "Lämpö haluttiin kotien käyttöön. Se onnistui, kun verkko oli lähellä ja veroja muutettiin.",
      "tapahtui": [
       {
        "t": "Metan datakeskus Odensessa aloitti 2019. Kaukolämpöyhtiö Fjernvarme Fyn rakensi sen viereen lämpöpumput.",
        "v": [
         "dcd-odense",
         "ramboll-odense"
        ]
       },
       {
        "t": "Lämpöpumput nostavat lämmön 70–75 asteeseen. Kaupungin verkkoon menee noin 45 MW lämpöä.",
        "v": [
         "ramboll-odense"
        ]
       }
      ],
      "puoletOtsikko": "Mitä lämmöstä seurasi",
      "puolet": {
       "hyoty": {
        "t": "Lämpö riittää vaiheesta ja laskutavasta riippuen noin 6 900–12 000 kotiin. Kaukolämpöyhtiö suunnitteli laajennusta osana hiilestä luopumista.",
        "v": [
         "meta-odense",
         "ramboll-odense",
         "techradar-2026"
        ]
       },
       "haitta": {
        "t": "Lämpöpumput tarvitsevat sähköä. Ennen verouudistusta lämmöstä saattoi joutua maksamaan veroa, vaikka sen antoi ilmaiseksi.",
        "v": [
         "eco-2023",
         "sdu-2019"
        ]
       }
      },
      "paatettiin": [
       {
        "t": "Tanskan puolueet sopivat ylijäämälämmön veron keventämisestä. Kauppahintaan sidottu 33 prosentin vero korvattiin kiinteällä maksulla.",
        "v": [
         "regeringen-dk"
        ]
       },
       {
        "t": "Vuodesta 2022 yritys voi vapautua verosta kokonaan, jos se tekee tietyt energiatehokkuustoimet ja ulkopuolinen arvioija vahvistaa ne.",
        "v": [
         "bdo-dk"
        ]
       }
      ],
      "lisaa": [
       {
        "t": "Lukujen ero johtuu hankkeen vaiheista: Meta kertoi alussa 6 900 kodista, Ramboll myöhemmin yli 12 000 kodista.",
        "v": [
         "meta-odense",
         "ramboll-odense",
         "techradar-2026"
        ]
       },
       {
        "t": "Tutkijat varoittivat 2019, että ilman muutoksia suuri osa tulevien datakeskusten lämmöstä voi jäädä käyttämättä.",
        "v": [
         "sdu-2019"
        ]
       }
      ],
      "suomi": {
       "samaa": [
        {
         "t": "Suomessakin on laajoja kaukolämpöverkkoja. Espoon seudulla Microsoftin keskusten lämmön on arvioitu kattavan noin 40 % Fortumin verkon kaukolämmöstä.",
         "v": [
          "microsoft-2026"
         ]
        }
       ],
       "eroa": [
        {
         "t": "Odensen kaukolämpöyhtiön johtajan mukaan hanke onnistui, koska jakeluverkko on hyvin laaja. Pienellä paikkakunnalla tilanne voi olla toinen.",
         "v": [
          "techradar-2026"
         ]
        },
        {
         "t": "Tanskan veroratkaisu ei siirry Suomeen sellaisenaan. Lämmön hinta ja verotus riippuvat kunkin maan säännöistä.",
         "v": [
          "bdo-dk"
         ]
        }
       ]
      },
      "lahteet": [
       "dcd-odense",
       "meta-odense",
       "ramboll-odense",
       "techradar-2026",
       "sdu-2019",
       "regeringen-dk",
       "bdo-dk"
      ]
     },
     {
      "id": "saksa",
      "nimi": "Saksa",
      "paikka": "koko maa · laki koskee kaikkia uusia keskuksia",
      "karki": "Lämmön käyttö kirjattiin lakiin. Ala pelkäsi, että vaatimus on liian kova.",
      "tapahtui": [
       {
        "t": "Saksan liittopäivät hyväksyi energiatehokkuuslain 21.9.2023. Laki asettaa datakeskuksille vaatimuksia sähkölle ja lämmölle.",
        "v": [
         "cms-2023",
         "enefg-11"
        ]
       },
       {
        "t": "Datakeskuksen lämpö on usein vain 30–35-asteista, kun lämpöverkot tarvitsevat usein noin 100 astetta. Siksi lämpö pitää nostaa lämpöpumpuilla.",
        "v": [
         "eco-2023"
        ]
       }
      ],
      "puoletOtsikko": "Mitä laista seuraa",
      "puolet": {
       "hyoty": {
        "t": "Lämpö on suunniteltava heti alussa. Laki velvoittaa myös lämpöverkon haltijan kertomaan, paljonko lämpöä verkko voi ottaa vastaan.",
        "v": [
         "enefg-11"
        ]
       },
       "haitta": {
        "t": "Alan järjestö eco arvioi lakiluonnoksesta, että velvoite voi käytännössä estää uusia keskuksia. Frankfurtin kokeiluissa uudelleenkäyttö jäi alle 10 prosentin.",
        "v": [
         "eco-2023"
        ]
       }
      },
      "paatettiin": [
       {
        "t": "1.7.2026 alkaen käyttöön otettavan keskuksen pitää käyttää uudelleen vähintään 10 % energiastaan. Osuus nousee 15 prosenttiin 2027 ja 20 prosenttiin 2028.",
        "v": [
         "enefg-11"
        ]
       },
       {
        "t": "Keskusten sähköstä 50 % piti olla uusiutuvaa vuodesta 2024, ja 100 % vuodesta 2027.",
        "v": [
         "enefg-11"
        ]
       },
       {
        "t": "Velvoitteesta voi poiketa, jos lähellä oleva lämpöverkko ei ota lämpöä vastaan omakustannushintaan kuudessa kuukaudessa.",
        "v": [
         "enefg-11"
        ]
       }
      ],
      "lisaa": [
       {
        "t": "Uusien keskusten tehokkuusluvun (PUE) pitää olla enintään 1,2. Vanhoille keskuksille raja tiukkenee vaiheittain: 1,5 vuonna 2027 ja 1,3 vuonna 2030.",
        "v": [
         "enefg-11"
        ]
       },
       {
        "t": "Eco kommentoi lakiluonnosta keväällä 2023. Lopulliseen lakiin tuli poikkeuksia esimerkiksi tilanteisiin, joissa lämmölle ei löydy ottajaa.",
        "v": [
         "eco-2023",
         "enefg-11"
        ]
       }
      ],
      "suomi": {
       "samaa": [
        {
         "t": "Suomessakin lämpöä hyödynnetään jo: Espoon seudulla Fortum ottaa Microsoftin keskusten lämmön kaukolämpöön.",
         "v": [
          "microsoft-2026"
         ]
        }
       ],
       "eroa": [
        {
         "t": "Saksassa vähimmäisosuus on laissa. Suomessa lämmöstä on sovittu yhtiöiden kesken hankekohtaisesti, kuten Espoossa.",
         "v": [
          "enefg-11",
          "microsoft-2026"
         ]
        }
       ]
      },
      "lahteet": [
       "cms-2023",
       "enefg-11",
       "eco-2023"
      ]
     }
    ],
    "vertailu": {
     "otsikko": "Maat rinnakkain",
     "selite": "Datakeskusten osuus sähköstä on vain Irlannista, koska vain sieltä löytyi viranomaisen mittaama luku. Eri maiden päätöksiä ei voi laittaa samalle asteikolle.",
     "rivit": [
      {
       "id": "irlanti",
       "maa": "Irlanti",
       "osuus": "23 % (2025)",
       "osuusV": [
        "cso-2025"
       ],
       "paatos": "Dublinin seudulle ei uusia liittymiä; uusilta keskuksilta oma sähköntuotanto tai -varasto",
       "paatosV": [
        "dcd-dublin",
        "williamfry-2025"
       ],
       "vuosi": "2021 ja 2025"
      },
      {
       "id": "alankomaat",
       "maa": "Alankomaat",
       "osuus": "–",
       "osuusV": [],
       "paatos": "Suurimmat keskukset vain kahteen kuntaan; kaupungeissa kasvun yläraja",
       "paatosV": [
        "rijksoverheid-2022",
        "haarlemmermeer-2020"
       ],
       "vuosi": "2019–2022"
      },
      {
       "id": "ruotsi",
       "maa": "Ruotsi",
       "osuus": "–",
       "osuusV": [],
       "paatos": "Datakeskusten sähköveron alennus poistettiin",
       "paatosV": [
        "skatteverket-2022"
       ],
       "vuosi": "2023 (voimaan)"
      },
      {
       "id": "tanska",
       "maa": "Tanska",
       "osuus": "–",
       "osuusV": [],
       "paatos": "Ylijäämälämmön veroa kevennettiin",
       "paatosV": [
        "regeringen-dk",
        "bdo-dk"
       ],
       "vuosi": "2022 (voimaan)"
      },
      {
       "id": "saksa",
       "maa": "Saksa",
       "osuus": "–",
       "osuusV": [],
       "paatos": "Uusille keskuksille lämmön uudelleenkäytön vähimmäisosuus",
       "paatosV": [
        "enefg-11"
       ],
       "vuosi": "2023 (laki), 2026 (velvoite)"
      },
      {
       "id": "suomi",
       "maa": "Suomi",
       "osuus": "–",
       "osuusV": [],
       "paatos": "Datakeskusten sähkövero nousi; liittymää voi hakea vasta lainvoimaisella kaavalla",
       "paatosV": [
        "he-156",
        "fingrid-18-5"
       ],
       "vuosi": "2026"
      }
     ]
    },
    "opit": {
     "otsikko": "Mitä maista voi oppia",
     "teksti": "Maat ratkaisivat eri asioita eri tavoin. Moni kysymys toistuu silti: riittääkö verkko, kuka päättää paikasta ja mihin lämpö menee.",
     "nakokulmat": [
      {
       "kuka": "Hallitus ja kunnat",
       "t": "Alankomaiden ministerin mukaan maa on liian pieni, jotta tilaa tai energiaa voisi käyttää huolimattomasti.",
       "v": [
        "rijksoverheid-2022"
       ]
      },
      {
       "kuka": "Datakeskusala",
       "t": "Alan järjestöt pitivät rajoituksia liian jyrkkinä. Niiden mukaan ongelma on verkkojen puute, ei datakeskukset.",
       "v": [
        "dda-2019",
        "eco-2023"
       ]
      },
      {
       "kuka": "Sähköverkko",
       "t": "EirGrid varoitti sekä sähkön riittävyydestä että siitä, että tiukat rajat voivat ajaa keskuksia muualle.",
       "v": [
        "dcd-dublin",
        "dcd-exodus"
       ]
      },
      {
       "kuka": "Asukkaat",
       "t": "Hollands Kroonissa kunnan mukaan asukkaat eivät päässeet tarpeeksi vaikuttamaan nopeaan rakentamiseen.",
       "v": [
        "nos-2022b"
       ]
      }
     ],
     "suomi": {
      "t": "Suomessa liittymäkyselyissä on kulutusta yli 100 GW, kun maan huippukulutus on alle 16 GW. Kyselyt eivät sido, joten kaikki eivät toteudu.",
      "v": [
       "fingrid-18-5"
      ]
     }
    }
   }
  };

  rekisteroiModuuli({
  id: "ulkomaat",
  nimi: "Opit ulkomailta",
  lyhyt: "Opit ulkomailta",
  pohja: true,
  data: DATA,
  html: "",
  css: `/* Opit ulkomailta: moduulin omat tyylit (vain pelin tokeneilla). Asettelu kapean palstan mukaan: container query, ei näkymän leveys. */
[hidden] { display: none !important; }
.sivu { container-type: inline-size; }
.maanapit .nappi { flex: 1 1 8rem; min-height: 44px; touch-action: manipulation; }
.maakortti h2:focus { outline: none; }
.maakortti h2:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.maakortti .paikka { font-family: var(--f-sc); font-size: 0.9rem; letter-spacing: 0.05em; color: var(--ink-soft); }
.maakortti .karki { font-size: 1.08rem; font-style: italic; border-left: 3px solid var(--gold); padding-left: 12px; }
.maakortti .lohko { display: grid; gap: 8px; border-top: 1px solid var(--line); padding-top: 12px; min-width: 0; }
.maakortti .lohko > h3 { display: flex; gap: 8px; align-items: baseline; }
.maakortti .lohko > h3 .nro { font-family: var(--f-display); color: var(--red); font-size: 1.3rem; line-height: 1; }
.alaotsikko { font-family: var(--f-sc); font-weight: 700; font-size: 0.85rem; letter-spacing: 0.08em; color: var(--ink-soft); }
.vertaus { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.vertaus .puoli { border-top: 2px solid var(--line); padding-top: 8px; display: grid; gap: 6px; align-content: start; }
.vertaus .puoli .otsake { font-family: var(--f-sc); font-weight: 700; font-size: 0.85rem; letter-spacing: 0.08em; color: var(--ink); }
.maakortti details { border-top: 1px dashed var(--line); }
.maakortti details > div { display: grid; gap: 8px; padding-bottom: 6px; }
.laskuri { font-size: 0.9rem; color: var(--ink-soft); }
.vertailu tbody th { font: 700 0.95rem var(--f-sc); letter-spacing: 0.04em; color: var(--ink); white-space: nowrap; }
.vertailu tr.valittu > * { background: color-mix(in srgb, var(--gold) 14%, transparent); }
.vertailu tr.valittu th { box-shadow: inset 4px 0 0 var(--red); }
.vertailu .valittu-merkki { font: 700 0.72rem var(--f-sc); letter-spacing: 0.08em; color: var(--red); border: 1px solid var(--red); border-radius: 999px; padding: 0 7px; margin-left: 6px; white-space: nowrap; }
.suomiRivi { background: color-mix(in srgb, var(--gold) 10%, transparent); border-radius: 4px; padding: 10px 12px; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@container (max-width: 560px) {
  .puolet, .vertaus { grid-template-columns: 1fr; }
  .maanapit .nappi { flex: 1 1 40%; }
  .vertailu table, .vertailu tbody, .vertailu tr, .vertailu td, .vertailu tbody th { display: block; width: 100%; }
  .vertailu thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  .vertailu tr { border-bottom: 1px solid var(--line); padding: 8px 0; }
  .vertailu td, .vertailu tbody th { border: 0; padding: 2px 10px; white-space: normal; }
  .vertailu tr.valittu > * { box-shadow: inset 4px 0 0 var(--red); }
  .vertailu td[data-otsake]::before { content: attr(data-otsake) ": "; font: 700 0.8rem var(--f-sc); letter-spacing: 0.06em; color: var(--ink-soft); }
}
/* Pohjan summary on flex, jolloin selaimen oma avausmerkki katoaa: lisätään oma merkki */
.maakortti details > summary { list-style: none; gap: 8px; }
.maakortti details > summary::-webkit-details-marker { display: none; }
.maakortti details > summary::before { content: "▸"; color: var(--red); font-family: var(--f-body); }
.maakortti details[open] > summary::before { content: "▾"; }
`,
  alusta(root, APU, ctx) {
    var A = APU, D = A.D, S = D.sisalto, esc = A.esc, $ = A.$;
    function tv(o) { return esc(o.t) + ((o.v && o.v.length) ? A.viite(o.v) : ""); }
    function kpl(lista) { return (lista || []).map(function (o) { return "<p>" + tv(o) + "</p>"; }).join(""); }

    /* Kapeaan näyttöön sopiva palkkikaavio: nimi palkin yläpuolella, yksi yksikkö, palkit nollasta */
    function kapeaPalkit(o) {
      var W = 360, rk = 46, maks = Math.max.apply(null, o.rivit.map(function (r) { return r.arvo; })) || 1, H = o.rivit.length * rk + 4, pl = W - 60;
      var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(o.otsikko + ": " + o.rivit.map(function (r) { return r.nimi + " " + A.fmt(r.arvo) + " " + o.yksikko; }).join(", ")) + '" style="width:100%;max-width:440px">';
      o.rivit.forEach(function (r, i) {
        var y = i * rk, w = Math.max(pl * r.arvo / maks, 2);
        s += '<text x="0" y="' + (y + 15) + '" font-size="14" fill="var(--ink)" font-family="var(--f-body)">' + esc(r.nimi) + "</text>";
        s += '<rect x="0" y="' + (y + 21) + '" width="' + w + '" height="16" rx="2" fill="' + (r.korostus ? "var(--chart-1)" : "var(--chart-muted)") + '"><title>' + esc(r.nimi + ": " + A.fmt(r.arvo) + " " + o.yksikko) + "</title></rect>";
        s += '<text x="' + (w + 6) + '" y="' + (y + 34) + '" font-size="14" fill="var(--ink)" font-family="var(--f-body)">' + esc(A.fmt(r.arvo) + " " + o.yksikko) + "</text>";
      });
      s += "</svg>";
      return '<figure class="kaavio" style="margin:0"><h3>' + esc(o.otsikko) + "</h3>" + s + "<figcaption>" + esc(o.selite || "") + "</figcaption>" + A.lahdeRivi(o.lahde) + "</figure>";
    }

    function maaKortti(m, i) {
      var h = '<h2 id="maa-otsikko-' + esc(m.id) + '" tabindex="-1">' + esc(m.nimi) + "</h2>" +
        '<p class="paikka">' + esc(m.paikka) + "</p>" +
        '<p class="karki">' + esc(m.karki) + "</p>";

      /* 1 Mitä tapahtui */
      h += '<div class="lohko"><h3><span class="nro" aria-hidden="true">1</span>Mitä tapahtui</h3>' + kpl(m.tapahtui);
      if (m.kaavio) h += kapeaPalkit(m.kaavio);
      if (m.nakokulmat) {
        h += '<div class="nakokulmat">' + m.nakokulmat.map(function (n) {
          return '<div class="nakokulma"><span class="kuka">' + esc(n.kuka) + "</span><p>" + tv(n) + "</p></div>";
        }).join("") + "</div>";
      }
      if (m.puolet) {
        h += '<span class="alaotsikko">' + esc(m.puoletOtsikko || "") + "</span>" + A.puolet(tv(m.puolet.hyoty), tv(m.puolet.haitta));
      }
      h += "</div>";

      /* 2 Mitä päätettiin */
      h += '<div class="lohko"><h3><span class="nro" aria-hidden="true">2</span>Mitä päätettiin</h3>' + kpl(m.paatettiin);
      if (m.lisaa && m.lisaa.length) h += "<details><summary>Lisää yksityiskohtia</summary><div>" + kpl(m.lisaa) + "</div></details>";
      h += "</div>";

      /* 3 Päteekö Suomeen? */
      h += '<div class="lohko"><h3><span class="nro" aria-hidden="true">3</span>Päteekö Suomeen?</h3>' +
        '<div class="vertaus">' +
        '<div class="puoli"><span class="otsake"><span aria-hidden="true">= </span>Samaa kuin Suomessa</span>' + kpl(m.suomi.samaa) + "</div>" +
        '<div class="puoli"><span class="otsake"><span aria-hidden="true">≠ </span>Eroa Suomeen</span>' + kpl(m.suomi.eroa) + "</div>" +
        "</div></div>";

      h += A.lahdeRivi(m.lahteet, "Kortin lähteet");
      return A.kortti(h, "maakortti", 'id="maa-' + esc(m.id) + '" role="region" aria-labelledby="maa-otsikko-' + esc(m.id) + '"' + (i === 0 ? "" : " hidden"));
    }

    var valitsin = A.kortti(
      '<h2 id="maavalitsin-otsikko">' + esc(S.valitsin.otsikko) + "</h2>" +
      "<p>" + esc(S.valitsin.teksti) + "</p>" +
      '<div class="napit maanapit" role="group" aria-labelledby="maavalitsin-otsikko">' +
      S.maat.map(function (m, i) {
        return '<button type="button" class="nappi" data-maa="' + esc(m.id) + '" aria-controls="maa-' + esc(m.id) + '" aria-pressed="' + (i === 0) + '">' + esc(m.nimi) + "</button>";
      }).join("") + "</div>" +
      '<p class="laskuri" id="maalaskuri" role="status" aria-live="polite"></p>', "maavalitsin");

    /* Vertailutaulukko: rivin korostus maan id:n mukaan (rivit[].id), ei nimen pienillä kirjaimilla */
    var V = S.vertailu;
    var taulu = A.kortti(
      '<h2 id="vertailu-otsikko">' + esc(V.otsikko) + "</h2>" +
      '<div class="taulu vertailu"><table aria-labelledby="vertailu-otsikko"><thead><tr><th scope="col">Maa</th><th scope="col">Datakeskusten osuus sähköstä</th><th scope="col">Tärkein päätös</th><th scope="col">Vuosi</th></tr></thead><tbody>' +
      V.rivit.map(function (r) {
        return '<tr data-rivi="' + esc(r.id) + '"><th scope="row">' + esc(r.maa) + '<span class="valittu-merkki" hidden>valittu</span></th>' +
          '<td class="num" data-otsake="Osuus sähköstä">' + esc(r.osuus) + (r.osuusV.length ? A.viite(r.osuusV) : "") + "</td>" +
          '<td data-otsake="Päätös">' + esc(r.paatos) + A.viite(r.paatosV) + "</td>" +
          '<td class="num" data-otsake="Vuosi">' + esc(r.vuosi) + "</td></tr>";
      }).join("") + "</tbody></table></div>" +
      '<p class="pieni">' + esc(V.selite) + "</p>");

    var O = S.opit;
    var opit = A.kortti(
      "<h2>" + esc(O.otsikko) + "</h2><p>" + esc(O.teksti) + "</p>" +
      '<div class="nakokulmat">' + O.nakokulmat.map(function (n) {
        return '<div class="nakokulma"><span class="kuka">' + esc(n.kuka) + "</span><p>" + tv(n) + "</p></div>";
      }).join("") + "</div>" +
      '<p class="suomiRivi"><span class="alaotsikko">Suomessa nyt: </span>' + tv(O.suomi) + "</p>");

    $("osiot").innerHTML = valitsin + S.maat.map(maaKortti).join("") + taulu + opit;

    function nayta(id) {
      var nro = 0, nimi = "";
      S.maat.forEach(function (m, i) {
        var k = $("maa-" + m.id), b = root.querySelector('[data-maa="' + m.id + '"]');
        var on = m.id === id; if (on) { nro = i + 1; nimi = m.nimi; }
        k.hidden = !on; b.setAttribute("aria-pressed", String(on));
      });
      [].forEach.call(root.querySelectorAll("tr[data-rivi]"), function (tr) {
        var on = tr.getAttribute("data-rivi") === id;
        tr.classList.toggle("valittu", on);
        tr.querySelector(".valittu-merkki").hidden = !on;
      });
      $("maalaskuri").textContent = "Maa " + nro + " / " + S.maat.length + ": " + nimi;
    }
    /* Valinta pitää tarkennuksen painikkeessa, jotta maata voi vaihtaa peräkkäin; nuolinäppäimet siirtyvät maasta toiseen. */
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-maa]"); if (!b) return;
      nayta(b.getAttribute("data-maa"));
    });
    root.addEventListener("keydown", function (e) {
      var b = e.target.closest && e.target.closest("[data-maa]"); if (!b) return;
      var napit = [].slice.call(root.querySelectorAll("[data-maa]")), i = napit.indexOf(b), j;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % napit.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + napit.length) % napit.length;
      else if (e.key === "Home") j = 0;
      else if (e.key === "End") j = napit.length - 1;
      else return;
      e.preventDefault();
      napit[j].focus();
      nayta(napit[j].getAttribute("data-maa"));
    });
    nayta(S.maat[0].id);
  }
  });
})();
