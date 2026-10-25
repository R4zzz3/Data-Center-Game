/* Tietomoduuli: Datakeskuksen rahavirrat (Googlen Suomen-hanke).
   Alkuperäinen artifakti oli Dashboard-tyyppinen (dash.* + d3). Tässä versiossa
   data on upotettu, kaaviot ovat tavallista HTML:ää/CSS:ää eikä kirjastoja tarvita. */
(function () {
  const DATA = {
   "investointi": [
    {
     "kohde": "Koko investointi",
     "min_mrd": 13.0,
     "max_mrd": 13.0,
     "kuka": "Google, 9.9.2026",
     "lahde": "Google: tiedote 9.9.2026",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure"
    },
    {
     "kohde": "Tuonti ulkomailta",
     "min_mrd": 9.1,
     "max_mrd": 10.4,
     "kuka": "VM: 70–80 % laitteita ja siruja",
     "lahde": "Yle 10.9.2026 / AI Suomi",
     "url": "https://yle.fi/a/74-20245686"
    },
    {
     "kohde": "Googlen bkt-arvio (2 v, brutto)",
     "min_mrd": 7.2,
     "max_mrd": 7.2,
     "kuka": "Google: 3,6 mrd €/v, ei nettovaikutus",
     "lahde": "Yle 9.9.2026",
     "url": "https://yle.fi/a/74-20245322"
    },
    {
     "kohde": "Suomeen kohdistuva tuotanto",
     "min_mrd": 2.6,
     "max_mrd": 3.9,
     "kuka": "VM: 20–30 % investoinnista",
     "lahde": "Yle 10.9.2026",
     "url": "https://yle.fi/a/74-20245686"
    }
   ],
   "virrat": [
    {
     "id": "inv_tuonti",
     "vaihe": "Rakentaminen",
     "maksaja": "Google-konserni",
     "saaja": "Ulkomaiset laite- ja sirutoimittajat",
     "mita": "Palvelimet, sirut ja muut tuontilaitteet (VM: 70–80 %)",
     "meur": 9100,
     "summa": "9 100–10 400 M€ / 2 v",
     "varmuus": "Arvio",
     "lahde": "Yle: VM-arvio 10.9.2026",
     "url": "https://yle.fi/a/74-20245686",
     "kaavio_from": null,
     "kaavio_to": null,
     "lyhyt": "Tuontilaitteet",
     "meur_v": null
    },
    {
     "id": "inv_suomi",
     "vaihe": "Rakentaminen",
     "maksaja": "Google-konserni",
     "saaja": "Suomalaiset urakoitsijat ja toimittajat",
     "mita": "Rakentaminen, sähkö- ja LVI-työt, maanrakennus, palvelut (VM: 20–30 %)",
     "meur": 2600,
     "summa": "2 600–3 900 M€ / 2 v",
     "varmuus": "Arvio",
     "lahde": "Yle: VM-arvio 10.9.2026",
     "url": "https://yle.fi/a/74-20245686",
     "kaavio_from": null,
     "kaavio_to": null,
     "lyhyt": "Kotimaiset hankinnat",
     "meur_v": null
    },
    {
     "id": "maa_2024",
     "vaihe": "Rakentaminen",
     "maksaja": "Google",
     "saaja": "Maanomistajat Muhoksella ja Kajaanissa",
     "mita": "Noin 1 400 hehtaaria maata (2024)",
     "meur": 27,
     "summa": "yli 27 M€ kertaerä",
     "varmuus": "Toteutunut",
     "lahde": "Yle 29.11.2024",
     "url": "https://yle.fi/a/74-20128113",
     "kaavio_from": null,
     "kaavio_to": null,
     "lyhyt": "Maakaupat",
     "meur_v": null
    },
    {
     "id": "maa_hamina",
     "vaihe": "Rakentaminen",
     "maksaja": "Google",
     "saaja": "Haminan kaupunki",
     "mita": "Yli 56 hehtaaria lisämaata (2026)",
     "meur": 10.7,
     "summa": "10,7 M€ kertaerä",
     "varmuus": "Toteutunut",
     "lahde": "Yle 21.9.2026",
     "url": "https://yle.fi/a/74-20247408",
     "kaavio_from": null,
     "kaavio_to": null,
     "lyhyt": "Maakauppa",
     "meur_v": null
    },
    {
     "id": "yhteisopaketti",
     "vaihe": "Rakentaminen",
     "maksaja": "Google",
     "saaja": "Kunnat, yhteisöt ja tutkimus",
     "mita": "Economic Community Partnerships, josta 10 M€ tutkimukseen",
     "meur": 31,
     "summa": "31 M€ / 4 v",
     "varmuus": "Yrityksen ilmoitus",
     "lahde": "Google: tiedote 9.9.2026",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure",
     "kaavio_from": null,
     "kaavio_to": null,
     "lyhyt": "Yhteisöpaketti",
     "meur_v": null
    },
    {
     "id": "myynti",
     "vaihe": "Käyttö",
     "maksaja": "Pilvi- ja tekoälyasiakkaat maailmalla",
     "saaja": "Google-konserni (Suomen ulkopuolella)",
     "mita": "Palvelujen myyntitulot, joita datakeskuksen laskenta tuottaa",
     "meur": null,
     "summa": "ei julkinen",
     "varmuus": "Ei julkinen",
     "lahde": "Uusi Juttu 27.5.2026 (Verohallinto: siirtohinnoittelu)",
     "url": "https://www.uusijuttu.fi/juttu/su3ZnNOS-a9IALZQd-d9551",
     "kaavio_from": "asiakkaat",
     "kaavio_to": "konserni",
     "lyhyt": "Myyntitulot",
     "meur_v": null
    },
    {
     "id": "palvelukorvaus",
     "vaihe": "Käyttö",
     "maksaja": "Google-konserni",
     "saaja": "Tuike Finland Oy (Haminan datakeskusyhtiö)",
     "mita": "Tuiken liikevaihto 2025, eli korvaus datakeskuksen pyörittämisestä",
     "meur": 574.4,
     "summa": "574 M€ (2025)",
     "varmuus": "Toteutunut",
     "lahde": "Asiakastieto: Tuike Finland Oy",
     "url": "https://www.asiakastieto.fi/yritykset/fi/tuike-finland-oy/22060717/taloustiedot",
     "kaavio_from": "konserni",
     "kaavio_to": "tuike",
     "lyhyt": "Palvelukorvaus",
     "meur_v": 574.4
    },
    {
     "id": "sahko",
     "vaihe": "Käyttö",
     "maksaja": "Tuike Finland Oy",
     "saaja": "Sähköntuottajat",
     "mita": "Fortumin Loviisan ydinvoima (22 v sopimus) ja tuulivoima, 629 MW",
     "meur": null,
     "summa": "ei julkinen",
     "varmuus": "Ei julkinen",
     "lahde": "Google: tiedote 9.9.2026",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure",
     "kaavio_from": "tuike",
     "kaavio_to": "tuottajat",
     "lyhyt": "Sähkö (PPA)",
     "meur_v": null
    },
    {
     "id": "sahkovero",
     "vaihe": "Käyttö",
     "maksaja": "Kaikki Suomen datakeskukset",
     "saaja": "Valtio",
     "mita": "Sähköveron korotus 0,05 → 2,24 c/kWh 1.7.2026 alkaen (lisätuotto)",
     "meur": 47,
     "summa": "47 M€ / v",
     "varmuus": "Arvio",
     "lahde": "AI Suomi 2.9.2026 (VM:n arvio)",
     "url": "https://aisuomi.fi/liiketoiminta/hallitus-lupasi-30-miljoonaa-ja-perui-sen",
     "kaavio_from": "tuike",
     "kaavio_to": "valtio",
     "lyhyt": "Sähkövero, kaikki DC:t",
     "meur_v": 47
    },
    {
     "id": "yhteisovero",
     "vaihe": "Käyttö",
     "maksaja": "Tuike Finland Oy",
     "saaja": "Valtio, kunnat ja seurakunnat",
     "mita": "Yhteisövero 2022 (verotettava tulo 44,4 M€)",
     "meur": 8.9,
     "summa": "8,9 M€ (2022)",
     "varmuus": "Toteutunut",
     "lahde": "Yle 8.11.2023",
     "url": "https://yle.fi/a/74-20059288",
     "kaavio_from": "tuike",
     "kaavio_to": "valtio",
     "lyhyt": "Yhteisövero",
     "meur_v": 8.9
    },
    {
     "id": "kiinteistovero",
     "vaihe": "Käyttö",
     "maksaja": "Google",
     "saaja": "Haminan kaupunki",
     "mita": "Kiinteistövero maasta ja rakennuksista, ei palvelimista (noin 78 € asukasta kohden)",
     "meur": 1.5,
     "summa": "noin 1,5 M€ / v",
     "varmuus": "Arvio",
     "lahde": "Uusi Juttu 27.5.2026",
     "url": "https://www.uusijuttu.fi/juttu/su3ZnNOS-a9IALZQd-d9551",
     "kaavio_from": "tuike",
     "kaavio_to": "hamina",
     "lyhyt": "Kiinteistövero",
     "meur_v": 1.5
    },
    {
     "id": "verot_yht",
     "vaihe": "Käyttö",
     "maksaja": "Tuike Finland Oy",
     "saaja": "Julkinen sektori",
     "mita": "Yhteisö-, palkka- ja kiinteistöverot yhteensä, keskiarvo 2018–2023",
     "meur": 20,
     "summa": "noin 20 M€ / v",
     "varmuus": "Arvio",
     "lahde": "EK / Ramboll 2025, s. 7",
     "url": "https://ek.fi/wp-content/uploads/2025/09/FDCA_Datakeskustoimialan-potentiaali-Suomessa_v1.9.pdf",
     "kaavio_from": null,
     "kaavio_to": null,
     "lyhyt": "Verot yhteensä",
     "meur_v": 20
    },
    {
     "id": "palkat",
     "vaihe": "Käyttö",
     "maksaja": "Tuike Finland Oy ja urakoitsijat",
     "saaja": "Työntekijät (noin 500 kampuksella)",
     "mita": "Palkat; kunnallisvero menee työntekijän asuinkuntaan",
     "meur": null,
     "summa": "ei julkinen",
     "varmuus": "Ei julkinen",
     "lahde": "Yle 21.9.2026",
     "url": "https://yle.fi/a/74-20247408",
     "kaavio_from": "tuike",
     "kaavio_to": "tyontekijat",
     "lyhyt": "Palkat",
     "meur_v": null
    },
    {
     "id": "lampo",
     "vaihe": "Käyttö",
     "maksaja": "Google",
     "saaja": "Haminan Energia (CapMan Infra -rahaston omistama)",
     "mita": "Hukkalämpö maksutta liitäntäpisteessä, kattaa 70–80 % Haminan kaukolämmöstä",
     "meur": 0,
     "summa": "0 €",
     "varmuus": "Toteutunut",
     "lahde": "Business Finland 20.5.2024; CapMan 10.10.2024",
     "url": "https://www.businessfinland.fi/en/whats-new/news/2024/google-announced-an-expansion-of-its-hamina-data-center/",
     "kaavio_from": "tuike",
     "kaavio_to": "energia",
     "lyhyt": "Hukkalämpö",
     "meur_v": 0
    },
    {
     "id": "siirto",
     "vaihe": "Käyttö",
     "maksaja": "Tuike Finland Oy",
     "saaja": "Fingrid ja paikallinen verkkoyhtiö",
     "mita": "Liittymis- ja siirtomaksut",
     "meur": null,
     "summa": "ei julkinen",
     "varmuus": "Ei julkinen",
     "lahde": "Fingrid: liittämisen periaatteet 29.4.2026",
     "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/yhtio/toimikunnat/neuvottelukunta/ntk226-kantaverkon-liittamisen-periaatteet.pdf",
     "kaavio_from": "tuike",
     "kaavio_to": "fingrid",
     "lyhyt": "Siirtomaksut",
     "meur_v": null
    },
    {
     "id": "kantaverkko",
     "vaihe": "Käyttö",
     "maksaja": "Kaikki sähkönkäyttäjät",
     "saaja": "Fingrid",
     "mita": "Kantaverkon investointiohjelma; noin 80 % vastaa asiakkaiden liittymistarpeisiin",
     "meur": 5200,
     "summa": "5 200 M€ / 10 v",
     "varmuus": "Arvio",
     "lahde": "Valtiovarainministerin vastaus KKV 39/2026; Fingrid 2026",
     "url": "https://www.eduskunta.fi/FI/vaski/Kysymys/Documents/KKV_39+2026.pdf?lang=fi",
     "kaavio_from": "kayttajat",
     "kaavio_to": "fingrid",
     "lyhyt": "Kantaverkko-ohjelma",
     "meur_v": 520
    }
   ],
   "tuike": [
    {
     "vuosi": 2021,
     "liikevaihto_meur": 381.0,
     "liikevoitto_meur": 31.5,
     "marginaali_pros": 8.3,
     "henkilosto": 97
    },
    {
     "vuosi": 2022,
     "liikevaihto_meur": 371.6,
     "liikevoitto_meur": 39.6,
     "marginaali_pros": 10.7,
     "henkilosto": 99
    },
    {
     "vuosi": 2023,
     "liikevaihto_meur": 307.2,
     "liikevoitto_meur": 23.3,
     "marginaali_pros": 7.6,
     "henkilosto": 103
    },
    {
     "vuosi": 2024,
     "liikevaihto_meur": 452.7,
     "liikevoitto_meur": 30.7,
     "marginaali_pros": 6.8,
     "henkilosto": 105
    },
    {
     "vuosi": 2025,
     "liikevaihto_meur": 574.4,
     "liikevoitto_meur": 30.3,
     "marginaali_pros": 5.3,
     "henkilosto": 120
    }
   ],
   "tyopaikat": [
    {
     "id": "g_rak",
     "vaite": "Rakennusvaiheen työpaikat koko Suomessa (sis. välilliset)",
     "luku": "yli 37 000",
     "kuka": "Google (oma arvio)",
     "lahde": "Google 9.9.2026",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure"
    },
    {
     "id": "g_rak2",
     "vaite": "… joista rakennusalalla",
     "luku": "noin 16 000",
     "kuka": "Google (oma arvio)",
     "lahde": "Google 9.9.2026",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure"
    },
    {
     "id": "g_kaytto",
     "vaite": "Työpaikat vuosittain käytön aikana (sis. välilliset)",
     "luku": "7 000",
     "kuka": "Google (oma arvio)",
     "lahde": "Google 9.9.2026",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure"
    },
    {
     "id": "muhos_rak",
     "vaite": "Muhos, rakennusaika",
     "luku": "2 000–3 000",
     "kuka": "Kunnanhallituksen pj. Tapani Ervasti",
     "lahde": "Yle 9.9.2026",
     "url": "https://yle.fi/a/74-20245327"
    },
    {
     "id": "muhos_k",
     "vaite": "Muhos, käytön aikana",
     "luku": "enintään 1 000",
     "kuka": "Kunnanhallituksen pj. Tapani Ervasti",
     "lahde": "Yle 9.9.2026",
     "url": "https://yle.fi/a/74-20245327"
    },
    {
     "id": "vaala",
     "vaite": "Vaala, datakeskus",
     "luku": "noin 400",
     "kuka": "Kunnanjohtaja Minna Kärkkäinen",
     "lahde": "Yle 9.9.2026",
     "url": "https://yle.fi/a/74-20245327"
    },
    {
     "id": "hamina",
     "vaite": "Hamina nyt, kampuksella",
     "luku": "noin 500",
     "kuka": "Yle",
     "lahde": "Yle 21.9.2026",
     "url": "https://yle.fi/a/74-20247408"
    },
    {
     "id": "tuike",
     "vaite": "Tuike Finland Oy:n oma henkilöstö 2025",
     "luku": "120",
     "kuka": "Tilinpäätöstieto",
     "lahde": "Asiakastieto",
     "url": "https://www.asiakastieto.fi/yritykset/fi/tuike-finland-oy/22060717/taloustiedot"
    },
    {
     "id": "tt",
     "vaite": "100 MW datakeskus, suorat pysyvät työpaikat",
     "luku": "50–150",
     "kuka": "Teknologiateollisuus / Ramboll",
     "lahde": "Teknologiateollisuus 4.6.2026",
     "url": "https://teknologiateollisuus.fi/keskustelu-datakeskuksista-kaipaa-mittasuhteita-mita-hyotya-suomelle-todella-syntyy/"
    }
   ],
   "tapahtumat": [
    {
     "id": "e2011",
     "pvm": "2011",
     "tapahtuma": "Google avaa Haminan datakeskuksen vanhalla paperitehtaalla.",
     "lahde": "AI Suomi",
     "url": "https://aisuomi.fi/liiketoiminta/datakeskus-tulee-kylaan-kuka-saa-lammon-kuka-laskun"
    },
    {
     "id": "e2024a",
     "pvm": "20.5.2024",
     "tapahtuma": "1 mrd € laajennus Haminaan ja hukkalämpö maksutta kaukolämpöön.",
     "lahde": "Business Finland",
     "url": "https://www.businessfinland.fi/en/whats-new/news/2024/google-announced-an-expansion-of-its-hamina-data-center/"
    },
    {
     "id": "e2024b",
     "pvm": "10.10.2024",
     "tapahtuma": "Haminan kaupungin energiayhtiö myy kaukolämmön ja sähköverkon CapMan Infra -rahastolle.",
     "lahde": "CapMan",
     "url": "https://capman.com/2024/10/capman-infra-invests-in-district-heating-and-electricity-network-infrastructure-in-hamina-finland/"
    },
    {
     "id": "e2024c",
     "pvm": "2024",
     "tapahtuma": "Google ostaa noin 1 400 ha maata Muhokselta ja Kajaanista.",
     "lahde": "Yle",
     "url": "https://yle.fi/a/74-20128113"
    },
    {
     "id": "e2026a",
     "pvm": "1.7.2026",
     "tapahtuma": "Datakeskusten sähkövero nousee 0,05 → 2,24 c/kWh.",
     "lahde": "AI Suomi",
     "url": "https://aisuomi.fi/liiketoiminta/suomi-45-kertaistaa-datakeskusten-sahkoveron"
    },
    {
     "id": "e2026b",
     "pvm": "2.9.2026",
     "tapahtuma": "Hallitus luopuu 30 M€ korvaavasta verotuesta budjettiriihessä.",
     "lahde": "AI Suomi",
     "url": "https://aisuomi.fi/liiketoiminta/hallitus-lupasi-30-miljoonaa-ja-perui-sen"
    },
    {
     "id": "e2026c",
     "pvm": "9.9.2026",
     "tapahtuma": "Google ilmoittaa 13 mrd € investoinnista: Muhos, Kajaani, Vaala ja Hamina.",
     "lahde": "Google",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure"
    },
    {
     "id": "e2026d",
     "pvm": "10.9.2026",
     "tapahtuma": "VM: investoinnista noin 20–30 % kohdistuu suomalaiseen tuotantoon.",
     "lahde": "Yle",
     "url": "https://yle.fi/a/74-20245686"
    },
    {
     "id": "e2026e",
     "pvm": "21.9.2026",
     "tapahtuma": "Google ostaa Haminan kaupungilta 56 ha lisämaata 10,7 M€:lla.",
     "lahde": "Yle",
     "url": "https://yle.fi/a/74-20247408"
    },
    {
     "id": "e2026f",
     "pvm": "6.10.2026",
     "tapahtuma": "Lupa- ja valvontavirasto käskee keskeyttää valmistelutyöt Muhoksella ja Kajaanissa YVA:n ajaksi.",
     "lahde": "Yle",
     "url": "https://yle.fi/a/74-20250334"
    },
    {
     "id": "e2027",
     "pvm": "2027–2028",
     "tapahtuma": "Rakennusvaihe; 94 MW akkuvarasto Kajaaniin loppuvuodesta 2027.",
     "lahde": "Google",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure"
    }
   ],
   "avoimet": [
    {
     "id": "hinta",
     "otsikko": "Sähkön hinta",
     "teksti": "Jos datakeskuskapasiteetti kasvaa 300 MW:sta 2 500 MW:iin eikä kulutus jousta, sähkön keskihinta voi nousta noin 10 % viidessä vuodessa (AFRY, marraskuu 2025).",
     "lahde": "AI Suomi",
     "url": "https://aisuomi.fi/opas/datakeskukset-suomessa"
    },
    {
     "id": "verkko",
     "otsikko": "Kantaverkon lasku",
     "teksti": "Fingridin 5,2 mrd € ohjelmasta noin 80 % vastaa liittyjien tarpeisiin. Uudet liittämisperiaatteet ovat valmisteilla loppuvuodelle 2026; datakeskusten osuutta kustannuksista ei ole julkaistu.",
     "lahde": "Fingrid 29.4.2026",
     "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/yhtio/toimikunnat/neuvottelukunta/ntk226-kantaverkon-liittamisen-periaatteet.pdf"
    },
    {
     "id": "voitot",
     "otsikko": "Mihin voitto kirjautuu",
     "teksti": "Verohallinnon pääjohtajan mukaan 44 datakeskusta toivat valtiolle 7,7 M€ verotuloja 2024; poistot ja siirtohinnoittelu jättävät Suomeen vähän voittoa.",
     "lahde": "Uusi Juttu 27.5.2026",
     "url": "https://www.uusijuttu.fi/juttu/su3ZnNOS-a9IALZQd-d9551"
    },
    {
     "id": "lampo",
     "otsikko": "Kenelle ilmainen lämpö",
     "teksti": "Lämpö luovutetaan maksutta, mutta julkisista lähteistä ei selviä, miten se näkyy kaukolämmön hinnassa. Muhokselta ja Kajaanista ei ole julkisia lämpösopimuksia.",
     "lahde": "AI Suomi",
     "url": "https://aisuomi.fi/liiketoiminta/datakeskus-tulee-kylaan-kuka-saa-lammon-kuka-laskun"
    },
    {
     "id": "aikataulu",
     "otsikko": "Aikataulu ja luvat",
     "teksti": "Muhoksella hakattiin noin 330 ha ja Kajaanissa lähes 200 ha metsää ennen YVA:n valmistumista. Kaavoista on valitettu, ja keskeytys voi kestää kuukausia.",
     "lahde": "Yle 8.10.2026",
     "url": "https://yle.fi/a/74-20250334"
    },
    {
     "id": "liikenne",
     "otsikko": "Liikenne",
     "teksti": "Muhoksen työmaalle ajetaan jopa 30 000 soralastia marraskuun loppuun mennessä, ympäri vuorokauden.",
     "lahde": "Yle 9.9.2026",
     "url": "https://yle.fi/a/74-20245327"
    }
   ],
   "parametrit": [
    {
     "id": "vero_uusi",
     "arvo": 2.24,
     "yksikko": "c/kWh",
     "kuvaus": "Sähkövero 1.7.2026 alkaen",
     "lahde": "AI Suomi",
     "url": "https://aisuomi.fi/liiketoiminta/suomi-45-kertaistaa-datakeskusten-sahkoveron"
    },
    {
     "id": "vero_vanha",
     "arvo": 0.05,
     "yksikko": "c/kWh",
     "kuvaus": "Sähkövero ennen 1.7.2026",
     "lahde": "AI Suomi",
     "url": "https://aisuomi.fi/liiketoiminta/suomi-45-kertaistaa-datakeskusten-sahkoveron"
    },
    {
     "id": "rakennus_per_mw",
     "arvo": 10,
     "yksikko": "M€/MW",
     "kuvaus": "Rakennushanke ilman palvelimia (100 MW ≈ 1 mrd €)",
     "lahde": "Teknologiateollisuus 4.6.2026",
     "url": "https://teknologiateollisuus.fi/keskustelu-datakeskuksista-kaipaa-mittasuhteita-mita-hyotya-suomelle-todella-syntyy/"
    },
    {
     "id": "tyo_min",
     "arvo": 0.5,
     "yksikko": "työpaikkaa/MW",
     "kuvaus": "Suorat pysyvät työpaikat, alaraja (50 / 100 MW)",
     "lahde": "Teknologiateollisuus 4.6.2026",
     "url": "https://teknologiateollisuus.fi/keskustelu-datakeskuksista-kaipaa-mittasuhteita-mita-hyotya-suomelle-todella-syntyy/"
    },
    {
     "id": "tyo_max",
     "arvo": 1.5,
     "yksikko": "työpaikkaa/MW",
     "kuvaus": "Suorat pysyvät työpaikat, yläraja (150 / 100 MW)",
     "lahde": "Teknologiateollisuus 4.6.2026",
     "url": "https://teknologiateollisuus.fi/keskustelu-datakeskuksista-kaipaa-mittasuhteita-mita-hyotya-suomelle-todella-syntyy/"
    }
   ],
   "lahteet": [
    {
     "id": "google",
     "nimi": "Google: tiedote 9.9.2026, 13 mrd € investointi tekoälyinfrastruktuuriin Suomessa",
     "url": "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure"
    },
    {
     "id": "yle-vm",
     "nimi": "Yle 10.9.2026: VM:n arvio investoinnin Suomeen kohdistuvasta osuudesta",
     "url": "https://yle.fi/a/74-20245686"
    },
    {
     "id": "yle-bkt",
     "nimi": "Yle 9.9.2026: Googlen bkt-arvio",
     "url": "https://yle.fi/a/74-20245322"
    },
    {
     "id": "yle-muhos",
     "nimi": "Yle 9.9.2026: Muhoksen ja Vaalan työpaikka-arviot, Muhoksen soralastit",
     "url": "https://yle.fi/a/74-20245327"
    },
    {
     "id": "yle-maa",
     "nimi": "Yle 29.11.2024: Googlen maakaupat Muhoksella ja Kajaanissa",
     "url": "https://yle.fi/a/74-20128113"
    },
    {
     "id": "yle-hamina",
     "nimi": "Yle 21.9.2026: Haminan maakauppa ja kampuksen työpaikat",
     "url": "https://yle.fi/a/74-20247408"
    },
    {
     "id": "yle-yva",
     "nimi": "Yle 8.10.2026: valmistelutyöt Muhoksella ja Kajaanissa keskeytetään YVA:n ajaksi",
     "url": "https://yle.fi/a/74-20250334"
    },
    {
     "id": "yle-vero",
     "nimi": "Yle 8.11.2023: Tuike Finland Oy:n yhteisövero 2022",
     "url": "https://yle.fi/a/74-20059288"
    },
    {
     "id": "uusijuttu",
     "nimi": "Uusi Juttu 27.5.2026: datakeskusten verotulot ja siirtohinnoittelu (Verohallinto)",
     "url": "https://www.uusijuttu.fi/juttu/su3ZnNOS-a9IALZQd-d9551"
    },
    {
     "id": "asiakastieto",
     "nimi": "Asiakastieto: Tuike Finland Oy, taloustiedot",
     "url": "https://www.asiakastieto.fi/yritykset/fi/tuike-finland-oy/22060717/taloustiedot"
    },
    {
     "id": "aisuomi-vero",
     "nimi": "AI Suomi: Suomi 45-kertaistaa datakeskusten sähköveron",
     "url": "https://aisuomi.fi/liiketoiminta/suomi-45-kertaistaa-datakeskusten-sahkoveron"
    },
    {
     "id": "aisuomi-30",
     "nimi": "AI Suomi 2.9.2026: Hallitus lupasi 30 miljoonaa ja perui sen (VM:n arvio)",
     "url": "https://aisuomi.fi/liiketoiminta/hallitus-lupasi-30-miljoonaa-ja-perui-sen"
    },
    {
     "id": "aisuomi-lampo",
     "nimi": "AI Suomi: Datakeskus tulee kylään – kuka saa lämmön, kuka laskun",
     "url": "https://aisuomi.fi/liiketoiminta/datakeskus-tulee-kylaan-kuka-saa-lammon-kuka-laskun"
    },
    {
     "id": "aisuomi-opas",
     "nimi": "AI Suomi: Datakeskukset Suomessa (opas, AFRY:n arvio sähkön hinnasta)",
     "url": "https://aisuomi.fi/opas/datakeskukset-suomessa"
    },
    {
     "id": "bf",
     "nimi": "Business Finland 20.5.2024: Google laajentaa Haminan datakeskusta",
     "url": "https://www.businessfinland.fi/en/whats-new/news/2024/google-announced-an-expansion-of-its-hamina-data-center/"
    },
    {
     "id": "capman",
     "nimi": "CapMan 10.10.2024: CapMan Infra sijoittaa Haminan kaukolämpö- ja sähköverkkoon",
     "url": "https://capman.com/2024/10/capman-infra-invests-in-district-heating-and-electricity-network-infrastructure-in-hamina-finland/"
    },
    {
     "id": "fingrid",
     "nimi": "Fingrid 29.4.2026: kantaverkon liittämisen periaatteet (neuvottelukunta)",
     "url": "https://www.fingrid.fi/globalassets/dokumentit/fi/yhtio/toimikunnat/neuvottelukunta/ntk226-kantaverkon-liittamisen-periaatteet.pdf"
    },
    {
     "id": "kkv",
     "nimi": "Valtiovarainministerin vastaus kirjalliseen kysymykseen KKV 39/2026",
     "url": "https://www.eduskunta.fi/FI/vaski/Kysymys/Documents/KKV_39+2026.pdf?lang=fi"
    },
    {
     "id": "ek",
     "nimi": "EK / Ramboll 2025: Datakeskustoimialan potentiaali Suomessa (FDCA), s. 7",
     "url": "https://ek.fi/wp-content/uploads/2025/09/FDCA_Datakeskustoimialan-potentiaali-Suomessa_v1.9.pdf"
    },
    {
     "id": "tt",
     "nimi": "Teknologiateollisuus 4.6.2026: Keskustelu datakeskuksista kaipaa mittasuhteita",
     "url": "https://teknologiateollisuus.fi/keskustelu-datakeskuksista-kaipaa-mittasuhteita-mita-hyotya-suomelle-todella-syntyy/"
    }
   ]
  };

  const KULMA = typeof POHJA_KULMA === "string" ? POHJA_KULMA : "";
  const kortti = (sisalto, luokka, attr) => '<div class="kortti ' + (luokka || "") + '" ' + (attr || "") + ">" + KULMA + sisalto + "</div>";

  const HTML = '<div class="sivu rv">' +
    '<header class="osio">' +
      '<div class="rubriikki"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="var(--gold)"/><circle cx="12" cy="12" r="6" fill="none" stroke="var(--card)" stroke-width="1.5"/></svg>Rahavirrat · Googlen Suomen-hanke</div>' +
      '<h1>Datakeskuksen rahavirrat: Googlen Suomen-hanke</h1>' +
      '<p class="ingressi" id="rv-ingressi"></p>' +
    "</header>" +

    '<section aria-label="Avainluvut">' + kortti('<div class="luvut rv-luvut" id="rv-luvut"></div>') + "</section>" +

    '<section class="osio" aria-labelledby="rv-h-rak">' +
      '<h2 id="rv-h-rak">Rakennusvaihe: minne 13 miljardia menee</h2>' +
      '<p class="pieni">Suurin osa rahasta maksetaan laitteista, jotka valmistetaan ulkomailla. Googlen oma bkt-arvio on bruttoluku, ja VM pitää nettovaikutusta selvästi pienempänä.</p>' +
      kortti('<div class="rv-selite" aria-hidden="true"><span><i class="rv-nelio"></i>Varma osuus</span><span><i class="rv-nelio haalea"></i>Arvion vaihteluväli</span></div>' +
        '<div class="rv-vali" id="rv-vali" role="list" aria-label="Investoinnin jakautuminen, mrd €"></div>') +
    "</section>" +

    '<section class="osio" aria-labelledby="rv-h-kaytto">' +
      '<h2 id="rv-h-kaytto">Käyttövaihe: kuka maksaa kenelle</h2>' +
      '<p class="pieni">Haminan kampus esimerkkinä. Viivan paksuus kertoo summan vuositasolla. Katkoviiva tarkoittaa, että rahaa liikkuu, mutta summaa ei ole julkaistu.</p>' +
      kortti('<div class="rv-virta" id="rv-virta"></div>' +
        '<div class="rv-selite" aria-hidden="true">' +
          '<span><i class="rv-viiva julkinen"></i>Julkinen summa</span>' +
          '<span><i class="rv-viiva eijulk"></i>Ei julkista summaa</span>' +
          '<span><i class="rv-viiva maksutta"></i>Maksutta</span>' +
          '<span><i class="rv-viiva yhteinen"></i>Koskee kaikkia, ei vain Googlea</span>' +
        "</div>" +
        '<p class="pieni" id="rv-kantaverkko-oletus"></p>' +
        '<p class="pieni">Tulkinta: Tuike Finland Oy:n liikevoittomarginaali on ollut 5–11 %, mikä sopii malliin, jossa Suomen yhtiö saa kulut ja pienen katteen ja palveluiden varsinainen tuotto kirjautuu konsernissa muualle. Verohallinnon pääjohtaja on kuvannut datakeskusten siirtohinnoittelua samoin.</p>') +
    "</section>" +

    '<section class="osio" aria-labelledby="rv-h-kirja">' +
      '<h2 id="rv-h-kirja">Kaikki rahavirrat lähteineen</h2>' +
      '<p class="pieni">Pallon väri ja muoto kertovat luvun varmuuden: toteutunut, arvio tai ei julkinen.</p>' +
      kortti('<div class="napit" role="group" aria-label="Suodata vaiheen mukaan">' +
          '<button type="button" class="nappi" data-suodatin="" aria-pressed="true">Kaikki</button>' +
          '<button type="button" class="nappi" data-suodatin="Rakentaminen" aria-pressed="false">Rakentaminen</button>' +
          '<button type="button" class="nappi" data-suodatin="Käyttö" aria-pressed="false">Käyttö</button>' +
        "</div>" +
        '<p class="pieni" id="rv-maara" aria-live="polite"></p>' +
        '<div class="taulu"><table class="rv-kortitaulu" id="rv-virrat"><thead><tr>' +
          "<th>Maksaja</th><th>Saaja</th><th>Mistä on kyse</th><th>Summa</th><th>Varmuus</th><th>Lähde</th>" +
        "</tr></thead><tbody></tbody></table></div>") +
    "</section>" +

    '<section class="osio" aria-labelledby="rv-h-tuike">' +
      '<h2 id="rv-h-tuike">Haminan datakeskusyhtiön tulos</h2>' +
      '<p class="pieni">Tuike Finland Oy, Googlen tytäryhtiö. Liikevaihto ja siitä jäävä liikevoitto, M€.</p>' +
      kortti('<div class="rv-selite" aria-hidden="true"><span><i class="rv-nelio vaihto"></i>Liikevaihto</span><span><i class="rv-nelio"></i>Liikevoitto</span></div>' +
        '<div class="rv-tuike" id="rv-tuike" role="list" aria-label="Tuike Finland Oy: liikevaihto ja liikevoitto vuosittain"></div>' +
        '<p class="pieni" id="rv-tuike-lisa"></p>' +
        '<p class="lahdeRivi" id="rv-tuike-lahde"></p>') +
    "</section>" +

    '<section class="osio" aria-labelledby="rv-h-tyo">' +
      '<h2 id="rv-h-tyo">Työpaikkalupaukset ja -arviot</h2>' +
      '<p class="pieni">Luvut eivät ole yhteismitallisia: osa sisältää välilliset työpaikat, osa vain suorat.</p>' +
      kortti('<div class="taulu"><table class="rv-kortitaulu" id="rv-tyo"><thead><tr>' +
        "<th>Mitä</th><th>Määrä</th><th>Kuka arvioi</th><th>Lähde</th></tr></thead><tbody></tbody></table></div>") +
    "</section>" +

    '<section class="osio" aria-labelledby="rv-h-laskuri">' +
      '<h2 id="rv-h-laskuri">Laske oma esimerkki</h2>' +
      '<p class="pieni" id="rv-laskuri-oletus"></p>' +
      kortti('<div class="rv-laskuri">' +
          '<label for="rv-mw"><span class="sc">Datakeskuksen teho</span><b id="rv-mw-arvo">100 MW</b></label>' +
          '<input type="range" id="rv-mw" min="10" max="1000" step="10" value="100">' +
          '<div class="rv-tulos" aria-live="polite">' +
            '<div><span class="sc">Sähkönkulutus</span><span class="v" id="rv-o-gwh">–</span></div>' +
            '<div><span class="sc">Sähkövero nyt</span><span class="v" id="rv-o-vero">–</span></div>' +
            '<div><span class="sc">Sähkövero ennen 1.7.2026</span><span class="v" id="rv-o-vanha">–</span></div>' +
            '<div><span class="sc">Rakennus ilman palvelimia</span><span class="v" id="rv-o-rak">–</span></div>' +
            '<div><span class="sc">Suorat pysyvät työpaikat</span><span class="v" id="rv-o-tyo">–</span></div>' +
          "</div>" +
          '<p class="pieni" id="rv-kertoimet"></p>' +
        "</div>") +
    "</section>" +

    '<section class="osio" aria-labelledby="rv-h-avoimet">' +
      '<h2 id="rv-h-avoimet">Avoimet kysymykset</h2>' +
      '<p class="pieni">Missä rahavirta voi kääntyä toisin kuin on luvattu.</p>' +
      kortti('<ul class="rv-lista" id="rv-avoimet"></ul>') +
    "</section>" +

    '<section class="osio" aria-labelledby="rv-h-aika">' +
      '<h2 id="rv-h-aika">Aikajana</h2>' +
      kortti('<ol class="rv-aika" id="rv-aika"></ol>') +
    "</section>" +

    '<p class="pieni">Kaikki luvut ovat avoimista lähteistä: yritysten tiedotteista, ministeriöiden arvioista, tilinpäätöstiedoista ja uutisista. Googlen omat arviot on merkitty erikseen. Sivun kirjoittamat tulkinnat on merkitty sanalla ”tulkinta”. Tilanne 24.10.2026.</p>' +

    '<section class="lahteet kortti" id="rv-lahteet" aria-labelledby="rv-lahteet-otsikko"></section>' +
  "</div>";

  const CSS = `
.rv { container-type: inline-size; }
.rv .rubriikki svg { width: 20px; height: 20px; }
.rv .pieni { max-width: 65ch; }
.rv b { font-weight: 700; }

/* Avainluvut */
.rv-luvut { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 14px; }
.rv-luvut .luku { align-content: start; }
.rv-luvut .nimi { font: 700 .8rem var(--f-sc); letter-spacing: .06em; color: var(--ink-soft); line-height: 1.25; }
.rv-luvut .arvo { font-size: 1.9rem; }
.rv-luvut .yks { font: 600 .9rem var(--f-body); color: var(--ink-soft); margin-left: 4px; }
.rv-luvut .selite { font-size: .85rem; line-height: 1.35; }

/* Selitteet */
.rv-selite { display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: .85rem; color: var(--ink-soft); }
.rv-selite span { display: inline-flex; align-items: center; gap: 6px; }
.rv-nelio { display: inline-block; width: 14px; height: 10px; border-radius: 2px; background: var(--chart-1); }
.rv-nelio.haalea { opacity: .35; }
.rv-nelio.vaihto { background: var(--chart-muted); }
.rv-viiva { display: inline-block; width: 28px; height: 0; border-top: 6px solid var(--chart-1); opacity: .75; border-radius: 3px; }
.rv-viiva.eijulk { border-top: 2px dashed var(--chart-muted); opacity: 1; }
.rv-viiva.maksutta { border-top: 3px dotted var(--chart-2); opacity: 1; }
.rv-viiva.yhteinen { border-top-color: var(--chart-muted); }

/* Investoinnin vaihteluväli */
.rv-vali { display: grid; gap: 14px; }
.rv-akseli { position: relative; height: 1.2rem; margin-top: -6px; border-top: 1px solid var(--ink-soft); }
.rv-akseli b { position: absolute; top: 2px; transform: translateX(-50%); font: 400 .8rem var(--f-body); color: var(--ink-soft); font-variant-numeric: tabular-nums; }
.rv-akseli b.eka { transform: none; }
.rv-akseli b.vika { transform: translateX(-100%); }
.rv-akseli-nimi { font-size: .8rem; color: var(--ink-soft); text-align: right; margin-top: -8px; }
.rv-rivi { position: relative; display: grid; gap: 4px; }
.rv-rivi .yla { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
.rv-rivi .nimike { font-weight: 700; line-height: 1.25; }
.rv-rivi .summa { color: var(--ink-soft); font-size: .92rem; white-space: nowrap; font-variant-numeric: tabular-nums; }
.rv-rivi .raide { position: relative; height: 18px; }
.rv-rivi .raide i { position: absolute; top: 0; bottom: 0; border-radius: 4px; }
.rv-rivi .raide .tikki { position: absolute; top: -4px; bottom: -4px; border-left: 1px solid var(--line); }
.rv-rivi .raide i.vaihtelu { opacity: .35; }
.rv-rivi .kuka { font-size: .82rem; color: var(--ink-soft); line-height: 1.35; }

/* Käyttövaiheen kaavio */
.rv-virta { display: grid; gap: 0; }
.rv-solmu { border: 1px solid var(--line); border-radius: 8px; background: var(--bg); padding: 8px 12px; display: grid; gap: 1px; line-height: 1.3; }
.rv-solmu .nimi { font-weight: 700; }
.rv-solmu .ala { font-size: .85rem; color: var(--ink-soft); }
.rv-solmu.tuike { border: 2px solid var(--ink); }
.rv-solmu.yhteinen { border-style: dashed; }
.rv-liitos { display: grid; grid-template-columns: 36px 1fr; align-items: center; min-height: 52px; gap: 8px; }
.rv-liitos .runko { justify-self: center; align-self: stretch; width: 0; border-left: 2px solid var(--chart-1); }
.rv-liitos .teksti, .rv-haara .teksti { font-size: .9rem; line-height: 1.3; }
.rv-liitos .teksti b, .rv-haara b { font-weight: 700; }
.rv-ryhma { margin: 4px 0 0 17px; padding: 6px 0 0; display: grid; gap: 8px; list-style: none; position: relative; }
.rv-ryhma::before { content: ""; position: absolute; left: 0; top: 0; bottom: 22px; border-left: 2px solid var(--ink-soft); }
.rv-haara { display: grid; grid-template-columns: 30px 1fr; align-items: center; }
.rv-haara .oksa { height: 0; border-top: 2px solid var(--chart-1); }
.rv-haara .rv-solmu { background: var(--card); }
.rv-haara .rivit { display: grid; gap: 2px; margin-top: 2px; }
.rv-haara .lisa { font-size: .85rem; color: var(--ink-soft); }
.rv-virta .ryhmaotsikko { margin: 16px 0 6px; font: 700 .85rem var(--f-sc); letter-spacing: .06em; color: var(--ink-soft); }
.rv-virta .yhteinen-pari { display: grid; gap: 0; }
.rv-virta .yhteinen-pari + .yhteinen-pari { margin-top: 12px; }

/* Varmuus */
.rv-pilleri { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; font-size: .88rem; }
.rv-pilleri::before { content: ""; width: 10px; height: 10px; border-radius: 50%; box-sizing: border-box; flex: none; }
.rv-pilleri.ok::before { background: var(--green); }
.rv-pilleri.est::before { background: var(--chart-2); border-radius: 2px; transform: rotate(45deg) scale(.85); }
.rv-pilleri.na::before { border: 2px solid var(--ink-soft); }

/* Taulukot: kapeassa palstassa rivit kortteina */
.rv-kortitaulu td.summa { font-variant-numeric: tabular-nums; font-weight: 700; }
.rv-kortitaulu td.summa .rv-pilleri { font-weight: 400; }
.rv-kortitaulu tbody tr:last-child, .rv-kortitaulu tbody tr:last-child td { border-bottom: 0; }
.rv-kortitaulu a { overflow-wrap: anywhere; }
@container (max-width: 640px) {
  .rv-kortitaulu thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  .rv-kortitaulu, .rv-kortitaulu tbody, .rv-kortitaulu tr, .rv-kortitaulu td { display: block; }
  .rv-kortitaulu tr { padding: 10px 0; border-bottom: 1px solid var(--line); display: grid; gap: 2px; }
  .rv-kortitaulu tr:first-child { padding-top: 0; }
  .rv-kortitaulu td { border: 0; padding: 0; }
  .rv-kortitaulu td[data-otsikko]::before { content: attr(data-otsikko) ": "; font: 700 .78rem var(--f-sc); letter-spacing: .06em; color: var(--ink-soft); }
  .rv-kortitaulu td.paa { font-weight: 700; }
  .rv-kortitaulu td.paa::before { content: none; }
  .rv-kortitaulu td.rivi2 { display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: center; }
  .rv-kortitaulu td.leveavain { display: none; }
}
@container (min-width: 641px) {
  .rv-kortitaulu td.rivi2 > * + * { display: none; }
}

/* Tuike-kaavio */
.rv-tuike { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; align-items: end; }
.rv-sarake { display: grid; justify-items: center; gap: 2px; text-align: center; }
.rv-sarake .lv { font-weight: 700; font-size: .95rem; font-variant-numeric: tabular-nums; line-height: 1.2; }
.rv-sarake .mg { font-size: .8rem; color: var(--ink-soft); font-variant-numeric: tabular-nums; }
.rv-sarake .alue { position: relative; width: 100%; height: 170px; border-bottom: 1px solid var(--ink-soft); margin-top: 4px; }
.rv-sarake .alue i { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: min(38px, 80%); border-radius: 4px 4px 0 0; }
.rv-sarake .alue i.vaihto { background: var(--chart-muted); }
.rv-sarake .alue i.voitto { background: var(--chart-1); border-radius: 3px 3px 0 0; }
.rv-sarake .vuosi { font-size: .85rem; color: var(--ink-soft); font-variant-numeric: tabular-nums; }
.rv-piilo { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

/* Laskuri */
.rv-laskuri { display: grid; gap: 12px; }
.rv-laskuri label { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
.rv-laskuri label b { font: 700 1.3rem var(--f-body); font-variant-numeric: tabular-nums; }
.rv-laskuri input[type=range] { width: 100%; min-height: 44px; margin: 0; accent-color: var(--red); cursor: pointer; }
.rv-tulos { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 9.5rem), 1fr)); gap: 10px 14px; }
.rv-tulos div { border-top: 1px solid var(--line); padding-top: 6px; display: grid; gap: 2px; }
.rv-tulos .sc { font-size: .8rem; font-weight: 700; color: var(--ink-soft); line-height: 1.25; }
.rv-tulos .v { font: 700 1.2rem var(--f-body); font-variant-numeric: tabular-nums; line-height: 1.25; }
.rv-oletus { display: block; border-left: 3px solid var(--gold); padding-left: 8px; }
#rv-laskuri-oletus .rv-oletus { margin-bottom: 4px; }

/* Listat */
.rv-lista { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
.rv-lista li { display: grid; gap: 2px; line-height: 1.45; }
.rv-lista .lahde, .rv-aika .lahde { font-size: .85rem; }
.rv-aika { list-style: none; margin: 0; padding: 0; display: grid; }
.rv-aika li { display: grid; grid-template-columns: 6.2rem 1fr; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--line); line-height: 1.4; }
.rv-aika li:last-child { border-bottom: 0; }
.rv-aika .pvm { font: 700 .85rem var(--f-sc); letter-spacing: .03em; color: var(--ink-soft); padding-top: 2px; font-variant-numeric: tabular-nums; }
.rv-aika li.nyt .tapahtuma { font-weight: 700; }
@container (max-width: 380px) { .rv-aika li { grid-template-columns: 1fr; gap: 0; } }
`;

  rekisteroiModuuli({
    id: "rahavirrat",
    nimi: "Datakeskuksen rahavirrat",
    lyhyt: "Rahavirrat",
    pohja: false,
    data: DATA,
    css: CSS,
    html: HTML,
    alusta(root, APU, ctx) {
      const D = DATA;
      const esc = ctx.esc;
      const $ = id => root.getElementById(id);
      const f1 = new Intl.NumberFormat("fi-FI", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      const f0 = new Intl.NumberFormat("fi-FI", { maximumFractionDigits: 0 });
      const fAuto = v => (Math.abs(v) >= 100 || Number.isInteger(v)) ? f0.format(v) : f1.format(v);
      const fParam = new Intl.NumberFormat("fi-FI", { maximumFractionDigits: 2 });
      const vali = (a, b, f) => f(a) === f(b) ? f(a) : f(a) + "–" + f(b);
      const f2 = new Intl.NumberFormat("fi-FI", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      // Alle 1 M€: kaksi desimaalia (muuten 10 MW:n vanha vero näkyisi nollana); haarukan molemmat päät samalla tarkkuudella.
      const rahaVali = (a, b) => vali(a, b, Math.min(a, b) < 1 ? f2.format : fAuto);
      const ulkoLinkki = (url, teksti, luokka) => '<a href="' + esc(url) + '" target="_blank" rel="noopener"' + (luokka ? ' class="' + luokka + '"' : "") + ">" + esc(teksti) + "</a>";
      const etsi = (taulu, avain, arvo) => D[taulu].find(r => String(r[avain]) === arvo) || {};

      const koko = etsi("investointi", "kohde", "Koko investointi");
      const suomi = etsi("investointi", "kohde", "Suomeen kohdistuva tuotanto");
      const virta = id => etsi("virrat", "id", id);

      /* ---------- Ingressi ja avainluvut ---------- */
      $("rv-ingressi").innerHTML = "Googlen <b>" + fAuto(koko.max_mrd) + " mrd €</b> investoinnista valtiovarainministeriön arvion mukaan <b>" +
        fAuto(suomi.min_mrd) + "–" + fAuto(suomi.max_mrd) + " mrd €</b> kohdistuu suomalaiseen tuotantoon. Loppu on pääosin tuotuja palvelimia ja siruja. " +
        "Käytön aikana suurin julkinen rahavirta kulkee konsernin sisällä: Google maksoi Haminan datakeskusyhtiölle <b>" + fAuto(virta("palvelukorvaus").meur) +
        " M€</b> vuonna 2025. Kaupunki saa kiinteistöveroa noin <b>" + fAuto(virta("kiinteistovero").meur) +
        " M€</b> vuodessa, ja palvelujen myyntitulot kirjautuvat Suomen ulkopuolelle.";
      const luku = (nimi, arvo, yks, selite) => '<div class="luku"><span class="nimi">' + esc(nimi) + '</span><span class="arvo">' + arvo +
        '<span class="yks">' + esc(yks) + '</span></span><span class="selite">' + esc(selite) + "</span></div>";
      $("rv-luvut").innerHTML =
        luku("Investointi 2027–2028", fAuto(koko.max_mrd), "mrd €", "Googlen ilmoitus 9.9.2026") +
        luku("Jää suomalaiseen tuotantoon", fAuto(suomi.min_mrd) + "–" + fAuto(suomi.max_mrd), "mrd €", "VM:n arvio, 20–30 %") +
        luku("Kiinteistövero Haminalle", fAuto(virta("kiinteistovero").meur), "M€ / v", "Arvio, nykyinen Haminan kampus") +
        luku("Sähköveron lisätuotto valtiolle", fAuto(virta("sahkovero").meur), "M€ / v", "Kaikki datakeskukset, 1.7.2026 alkaen");

      /* ---------- Investoinnin vaihteluväli ---------- */
      (function () {
        const rivit = D.investointi;
        const maks = Math.max.apply(null, rivit.map(r => r.max_mrd));
        const askel = maks > 10 ? 2 : 1;
        const pros = v => (v / maks * 100).toFixed(3) + "%";
        const tikit = []; for (let t = 0; t <= maks + 1e-9; t += askel) tikit.push(t);
        const viivat = tikit.map(t => '<span class="tikki" style="left:' + pros(t) + '"></span>').join("");
        const akseli = '<div class="rv-akseli" aria-hidden="true">' + tikit.map((t, i) =>
          '<b class="' + (i === 0 ? "eka" : (t / maks > 0.97 ? "vika" : "")) + '" style="left:' + pros(t) + '">' + f0.format(t) + "</b>").join("") + "</div>" +
          '<div class="rv-akseli-nimi" aria-hidden="true">mrd €</div>';
        const vari = k => k.startsWith("Suomeen") ? "var(--chart-1)" : k.startsWith("Tuonti") ? "var(--chart-2)" : "var(--chart-muted)";
        $("rv-vali").innerHTML = rivit.map(d => {
          const summa = d.min_mrd === d.max_mrd ? f1.format(d.max_mrd) + " mrd €" : f1.format(d.min_mrd) + "–" + f1.format(d.max_mrd) + " mrd €";
          return '<div class="rv-rivi" role="listitem">' +
            '<div class="yla"><span class="nimike">' + esc(d.kohde) + '</span><span class="summa">' + summa + "</span></div>" +
            '<div class="raide" aria-hidden="true">' + viivat + '<i style="left:0;width:' + pros(d.min_mrd) + ";background:" + vari(d.kohde) + '"></i>' +
              (d.max_mrd > d.min_mrd ? '<i class="vaihtelu" style="left:' + pros(d.min_mrd) + ";width:" + pros(d.max_mrd - d.min_mrd) + ";background:" + vari(d.kohde) + '"></i>' : "") + "</div>" +
            '<span class="kuka">' + esc(d.kuka) + " · Lähde: " + ulkoLinkki(d.url, d.lahde) + "</span></div>";
        }).join("") + akseli;
      })();

      /* ---------- Käyttövaihe: kuka maksaa kenelle ---------- */
      (function () {
        const rivit = D.virrat.filter(r => r.kaavio_from && r.kaavio_to);
        const maksV = Math.max.apply(null, rivit.map(r => r.meur_v || 0)) || 1;
        // Viivan paksuus kuten alkuperäisessä (neliöjuuri), mutta kapeaan palstaan mitoitettuna.
        const paksuus = f => f.meur_v > 0 ? Math.max(2.5, Math.min(18, 18 * Math.sqrt(f.meur_v / maksV))) : 2;
        const yhteinen = f => f.kaavio_from === "kayttajat" || f.id === "sahkovero";
        function tyyli(f, suunta) {
          const reuna = suunta === "pysty" ? "border-left" : "border-top";
          const s = paksuus(f);
          if (f.meur_v == null) return reuna + ":2px dashed var(--chart-muted)";
          if (f.meur_v === 0) return reuna + ":3px dotted var(--chart-2)";
          return reuna + ":" + s.toFixed(1) + "px solid " + (yhteinen(f) ? "var(--chart-muted)" : "var(--chart-1)") + ";opacity:.8";
        }
        const pilleri = v => '<span class="rv-pilleri ' + pillerinLuokka(v) + '">' + esc(v) + "</span>";
        const solmu = (nimi, ala, luokka) => '<div class="rv-solmu ' + (luokka || "") + '"><span class="nimi">' + esc(nimi) + "</span>" +
          [].concat(ala || []).map(a => '<span class="ala">' + esc(a) + "</span>").join("") + "</div>";
        const liitos = f => '<div class="rv-liitos" title="' + esc(f.maksaja + " → " + f.saaja + ": " + f.mita) + '"><span class="runko" style="' + tyyli(f, "pysty") + '"></span>' +
          '<span class="teksti">' + esc(f.lyhyt) + ": <b>" + esc(f.summa) + "</b> " + pilleri(f.varmuus) + "</span></div>";

        const myynti = rivit.find(f => f.kaavio_from === "asiakkaat");
        const korvaus = rivit.find(f => f.kaavio_from === "konserni");
        const SAAJAT = {
          tuottajat: { nimi: "Sähköntuottajat" }, valtio: { nimi: "Valtio" }, hamina: { nimi: "Haminan kaupunki" },
          tyontekijat: { nimi: "Työntekijät" }, energia: { nimi: "Haminan Energia", lisa: "→ kaukolämpöasiakkaat" },
          fingrid: { nimi: "Fingrid ja verkkoyhtiöt" }
        };
        // Tuikelta lähtevät virrat. Sähkövero koskee kaikkia datakeskuksia, joten se piirretään omana virtanaan alla.
        const tuikelta = rivit.filter(f => f.kaavio_from === "tuike" && !yhteinen(f));
        const haara = f => {
          const s = SAAJAT[f.kaavio_to] || { nimi: f.saaja };
          return '<li class="rv-haara" title="' + esc(f.maksaja + " → " + f.saaja + ": " + f.mita) + '"><span class="oksa" style="' + tyyli(f, "vaaka") + '"></span>' +
            '<div class="rv-solmu"><span class="nimi">' + esc(s.nimi) + '</span><span class="rivit"><span class="teksti">' + esc(f.lyhyt) + ": <b>" + esc(f.summa) + "</b></span>" +
            pilleri(f.varmuus) + "</span>" + (s.lisa ? '<span class="lisa">' + esc(s.lisa) + "</span>" : "") + "</div></li>";
        };
        const yhteiset = rivit.filter(yhteinen);
        const maksajaNimi = f => f.kaavio_from === "kayttajat" ? ["Kaikki sähkönkäyttäjät", "Siirtomaksut sähkölaskussa"] : [f.maksaja, "myös Tuike Finland Oy"];
        $("rv-virta").innerHTML =
          solmu("Asiakkaat maailmalla", "Pilvi- ja tekoälypalvelut") + liitos(myynti) +
          solmu("Google-konserni", "Suomen ulkopuolella") + liitos(korvaus) +
          solmu("Tuike Finland Oy", ["Googlen datakeskusyhtiö", "Hamina"], "tuike") +
          '<ul class="rv-ryhma" aria-label="Tuike Finland Oy maksaa">' + tuikelta.map(haara).join("") + "</ul>" +
          '<p class="ryhmaotsikko">Koskee kaikkia, ei vain Googlea</p>' +
          yhteiset.map(f => {
            const m = maksajaNimi(f), s = SAAJAT[f.kaavio_to] || { nimi: f.saaja };
            return '<div class="yhteinen-pari">' + solmu(m[0], m[1], "yhteinen") + liitos(f) + solmu(s.nimi) + "</div>";
          }).join("");
        const kv = virta("kantaverkko");
        $("rv-kantaverkko-oletus").innerHTML = '<span class="rv-oletus">Pelin oletus: kantaverkko-ohjelman viivan paksuus on laskettu vuositasolle, ' +
          f0.format(kv.meur) + " M€ ÷ 10 v ≈ " + f0.format(kv.meur_v) + " M€/v. Lähteessä luku on " + esc(kv.summa) + ".</span>";
      })();

      /* ---------- Rahavirtataulukko ---------- */
      function pillerinLuokka(v) { return v === "Toteutunut" ? "ok" : v === "Ei julkinen" ? "na" : "est"; }
      let suodatin = "";
      function piirraTaulu() {
        const rivit = D.virrat.filter(r => !suodatin || r.vaihe === suodatin);
        root.querySelector("#rv-virrat tbody").innerHTML = rivit.map(r =>
          '<tr data-key="' + esc(r.id) + '">' +
            '<td class="paa" data-otsikko="Maksaja">' + esc(r.maksaja) + "</td>" +
            '<td data-otsikko="Saaja">' + esc(r.saaja) + "</td>" +
            "<td>" + esc(r.mita) + "</td>" +
            '<td class="summa rivi2"><span>' + esc(r.summa) + '</span><span class="rv-pilleri ' + pillerinLuokka(r.varmuus) + '">' + esc(r.varmuus) + "</span></td>" +
            '<td class="leveavain"><span class="rv-pilleri ' + pillerinLuokka(r.varmuus) + '">' + esc(r.varmuus) + "</span></td>" +
            '<td data-otsikko="Lähde">' + ulkoLinkki(r.url, r.lahde) + "</td></tr>").join("");
        $("rv-maara").textContent = "Näytetään " + rivit.length + " / " + D.virrat.length + " rahavirtaa.";
      }
      root.addEventListener("click", e => {
        const b = e.target.closest("[data-suodatin]");
        if (!b) return;
        suodatin = b.dataset.suodatin;
        root.querySelectorAll("[data-suodatin]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
        piirraTaulu();
      });
      piirraTaulu();

      /* ---------- Tuike Finland Oy ---------- */
      (function () {
        const rivit = D.tuike;
        const maks = Math.max.apply(null, rivit.map(r => r.liikevaihto_meur));
        const pros = v => (v / maks * 100).toFixed(2) + "%";
        $("rv-tuike").innerHTML = rivit.map(r =>
          '<div class="rv-sarake" role="listitem">' +
            '<span class="rv-piilo">' + r.vuosi + ": liikevaihto " + f1.format(r.liikevaihto_meur) + " M€, liikevoitto " + f1.format(r.liikevoitto_meur) +
              " M€ (" + f1.format(r.marginaali_pros) + " %), henkilöstö " + r.henkilosto + "</span>" +
            '<span class="lv" aria-hidden="true">' + f0.format(r.liikevaihto_meur) + "</span>" +
            '<span class="mg" aria-hidden="true">' + f1.format(r.marginaali_pros) + " %</span>" +
            '<span class="alue" aria-hidden="true" title="' + esc(r.vuosi + ": liikevaihto " + f1.format(r.liikevaihto_meur) + " M€, liikevoitto " + f1.format(r.liikevoitto_meur) + " M€") + '">' +
              '<i class="vaihto" style="height:' + pros(r.liikevaihto_meur) + '"></i><i class="voitto" style="height:' + pros(r.liikevoitto_meur) + '"></i></span>' +
            '<span class="vuosi" aria-hidden="true">' + r.vuosi + "</span></div>").join("");
        $("rv-tuike-lisa").textContent = "Pylvään yläpuolella liikevaihto (M€) ja liikevoittomarginaali. Liikevoitto: " +
          rivit.map(r => f1.format(r.liikevoitto_meur)).join(" · ") + " M€. Henkilöstö: " + rivit.map(r => r.henkilosto).join(" · ") + ".";
        const l = D.lahteet.find(x => x.id === "asiakastieto");
        $("rv-tuike-lahde").innerHTML = "Lähde: " + ulkoLinkki(l.url, l.nimi);
      })();

      /* ---------- Työpaikat ---------- */
      root.querySelector("#rv-tyo tbody").innerHTML = D.tyopaikat.map(r =>
        '<tr data-key="' + esc(r.id) + '"><td class="paa">' + esc(r.vaite) + '</td><td class="summa" data-otsikko="Määrä">' + esc(r.luku) + "</td>" +
        '<td data-otsikko="Kuka arvioi">' + esc(r.kuka) + '</td><td data-otsikko="Lähde">' + ulkoLinkki(r.url, r.lahde) + "</td></tr>").join("");

      /* ---------- Laskuri: käyttöaste pelin oletuksesta ---------- */
      const P = (ctx.simulaatio && ctx.simulaatio.perus) || {};
      const kaAla = typeof P.kayttoasteAla === "number" ? P.kayttoasteAla : 0.5;
      const kaYla = typeof P.kayttoasteYla === "number" ? P.kayttoasteYla : 0.9;
      const k = Object.fromEntries(D.parametrit.map(r => [r.id, Number(r.arvo)]));
      const kaTxt = Math.round(kaAla * 100) + "–" + Math.round(kaYla * 100) + " %";
      $("rv-laskuri-oletus").innerHTML = '<span class="rv-oletus">Pelin oletus: käyttöaste ' + kaTxt +
        ". Datakeskus ei käy koko vuotta täydellä teholla, joten kulutus ja sähkövero näytetään vaihteluvälinä.</span> Muut kertoimet tulevat lähteistä alla.";
      const pl = id => { const r = D.parametrit.find(x => x.id === id); return ulkoLinkki(r.url, fParam.format(r.arvo)); };
      $("rv-kertoimet").innerHTML = "Kertoimet: sähkövero " + pl("vero_uusi") + " c/kWh (ennen " + pl("vero_vanha") + "), rakentaminen noin " + pl("rakennus_per_mw") +
        " M€/MW ilman palvelimia ja " + pl("tyo_min") + "–" + pl("tyo_max") + " suoraa työpaikkaa/MW (Teknologiateollisuus). " +
        "Sähkönkulutus = teho × 8 760 h × käyttöaste. Palvelimet voivat moninkertaistaa investoinnin, mutta ne tuodaan ulkomailta.";
      const mwIn = $("rv-mw");
      function laske() {
        const mw = Number(mwIn.value);
        $("rv-mw-arvo").textContent = f0.format(mw) + " MW";
        mwIn.setAttribute("aria-valuetext", f0.format(mw) + " megawattia");
        const gwhA = mw * 8.76 * kaAla, gwhY = mw * 8.76 * kaYla;   // MW × 8 760 h × käyttöaste / 1000
        $("rv-o-gwh").textContent = vali(gwhA, gwhY, f0.format) + " GWh/v";
        $("rv-o-vero").textContent = rahaVali(gwhA * k.vero_uusi / 100, gwhY * k.vero_uusi / 100) + " M€/v";
        $("rv-o-vanha").textContent = rahaVali(gwhA * k.vero_vanha / 100, gwhY * k.vero_vanha / 100) + " M€/v";
        $("rv-o-rak").textContent = f0.format(mw * k.rakennus_per_mw) + " M€";
        $("rv-o-tyo").textContent = f0.format(mw * k.tyo_min) + "–" + f0.format(mw * k.tyo_max);
      }
      mwIn.addEventListener("input", laske);
      laske();

      /* ---------- Avoimet kysymykset ja aikajana ---------- */
      $("rv-avoimet").innerHTML = D.avoimet.map(r =>
        "<li><h3>" + esc(r.otsikko) + "</h3><p>" + esc(r.teksti) + " " + ulkoLinkki(r.url, r.lahde, "lahde") + "</p></li>").join("");
      $("rv-aika").innerHTML = D.tapahtumat.map(r =>
        '<li class="' + (r.id === "e2026f" ? "nyt" : "") + '"><span class="pvm">' + esc(r.pvm) + '</span><span class="tapahtuma">' + esc(r.tapahtuma) + " " +
        ulkoLinkki(r.url, r.lahde, "lahde") + "</span></li>").join("");

      /* ---------- Lähteet ---------- */
      $("rv-lahteet").innerHTML = KULMA + '<h3 id="rv-lahteet-otsikko">Lähteet</h3><ol>' +
        D.lahteet.map(l => '<li id="lahde-' + esc(l.id) + '">' + ulkoLinkki(l.url, l.nimi) + "</li>").join("") + "</ol>";

      return () => {};
    }
  });
})();
