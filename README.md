# Lohikäärme kylässä

*Peli datakeskusten vaikutuksista*

Selainpeli, joka tekee datakeskusten vaikutukset ymmärrettäviksi tavallisille suomalaisille. Datakeskus on lohikäärme, jonka päät ovat vaikutusalueita. Peli ei kerro oikeaa vastausta: jokaisessa vaihtoehdossa näkyvät hyöty ja haitta, ja tieto ja sen lähde näytetään rinnakkain.

> Kylään on ehdotettu datakeskusta, ja kunta kysyy asukkailta, mitä mieltä he ovat. Ajattele datakeskusta lohikäärmeenä, jolla on seitsemän päätä. Jokainen pää on yksi vaikutus. Seitsemässä ensimmäisessä kysymyksessä mietit, mitä hankkeelta voisi vaatia, jos se etenee. Lopuksi teet kunnan päätöksen: hyväksytäänkö hanke vai ei. Näet matkan varrella, mitä valinnoista voi seurata, ja lopuksi, miltä tulevaisuus voisi näyttää 20 vuoden päähän. Oikeaa vastausta ei ole.

## Pelaa

- **Suoraan:** lataa tämä kansio ja avaa `index.html` selaimessa. Ei asennuksia eikä palvelinta.
- **GitHub Pages:** Settings → Pages → Branch: `main`, kansio `/ (root)` → Save. Peli aukeaa osoitteessa `https://<käyttäjä>.github.io/<repo>/`.
- Fontit ladataan Google Fontsista; ilman verkkoa peli käyttää Georgia-fonttia.

## Pelin kulku

1. Valitse rooli (Paikallisasukas, Yrittäjä, Maanviljelijä, Nuori, Kunnanvaltuutettu).
2. Valitse alue (Maaseutu, Pienkunta, Kaupunki). Rooli ja alue vaihtavat tekstejä, eivät lukuja.
3. Tee 7 päätöstä. Jokaisen jälkeen näet hyödyn, haitan, vaikutukset sinulle ja kunnalle sekä lähteet.
4. Lopuksi näet valintasi, tulevaisuussimulaation ja voit verrata pelikertoja.

| # | Lohikäärmeen pää | Aihe |
|---|---|---|
| 1 | Sähkö | Sähkönkulutus ja sähköverkko |
| 2 | Lämpö | Hukkalämmön käyttö |
| 3 | Työ | Rakennustyö ja pysyvät työpaikat |
| 4 | Turvallisuus | Häiriöt ja varautuminen |
| 5 | Melu ja liikenne | Rekat, jäähdytys ja varavoiman koeajot |
| 6 | Luonto | Tontti ja maisema |
| 7 | Suomi | Suomen linja 2030-luvulla |

## Edistynyt tila ja Edistynyt valikko

Velhon hattu yläpalkissa kytkee edistyneen tilan päälle (violetti teema). Silloin yläpalkin alle tulee **✦ Edistynyt valikko**, jossa on syventävää tietoa päätöksentekijöille ja asiantuntijoille:

| Välilehti | Sisältö |
|---|---|
| Tilanne | Datakeskuskartta · Datakeskusvahti · Asunnot datakeskusten lähellä |
| Aiheet | Sähkö ja kantaverkko · Hukkalämpö ja vesi · Maankäyttö ja luonto · Datakeskuksen rahavirrat |
| Kokemukset | Lupaus ja toteuma · Opit ulkomailta |
| Vaikuta | Näin vaikutat · Datakeskussanasto |

Valikko on koottu uudelleenkäytettävästä paketista (kansio `edistynyt-valikko/`, versio 1.1.0). Sen saa asennettua mihin tahansa pelin versioon: `python3 edistynyt-valikko/asenna.py asenna PELI.html ULOS.html` (ohje: `edistynyt-valikko/OHJE.md`).

## Tekstien muokkaus

Kaikki pelin tekstit ja luvut ovat `index.html`-tiedoston alussa `SISALTO`-objektissa. Muokkaa vain lainausmerkkien sisällä olevia tekstejä. Valikon moduulien tekstit ovat tiedostoissa `edistynyt-valikko/moduulit/`; muutoksen jälkeen aja paketin asennus uudelleen.

## Lähteet

Pelin luvut ovat lähteistä. Pelin omat yksinkertaistukset on merkitty pelissä "Pelin oletus:".

**1. Sähkö**

- [Fingrid: Sähkönkulutus on kääntymässä voimakkaaseen kasvuun (18.8.2026)](https://www.sttinfo.fi/tiedote/72239761/sahkonkulutus-on-kaantymassa-voimakkaaseen-kasvuun-rinnalle-tarvitaan-lisaa-saatovoimaa?lang=fi)
- [Pervilä & Kangasharju, Helsingin yliopisto: Datakeskusten faktat ja fiktiot (20.7.2026)](https://helda.helsinki.fi/server/api/core/bitstreams/533969e6-e647-4fcd-b13c-afcb62effa2d/content)
- [Kaleva: Fingrid toivoo lisää datakeskuksia](https://www.kaleva.fi/fingrid-toivoo-lisaa-datakeskuksia-eika-pelkaa-sah/11556159)
- [Verkkouutiset / IS: Sähkölaskut ja verkon rakentaminen](https://www.verkkouutiset.fi/a/is-energiajarjestelma-myllerryksessa-sahkolaskut-uhkaavat-kallistua/)

**2. Lämpö**

- [Microsoft: Microsoft ja Fortum yhteistyöhön (17.3.2022)](https://news.microsoft.com/fi-fi/2022/03/17/microsoft-rakentaa-suomeen-datakeskusalueen/)
- [DCD: Fortumin lämpöpumppulaitokset ja Microsoftin hukkalämpö](https://datacenterdynamics.com/en/news/fortum-starts-operations-at-two-heat-pump-plants-tied-to-microsoft-district-heating-scheme/)
- [Kaleva: Datakeskukset ja kaukolämmön tulevaisuus](https://www.kaleva.fi/datakeskukset-ja-kaukolammon-tulevaisuus-energiamu/11551517)
- [Pervilä & Kangasharju, Helsingin yliopisto: Datakeskusten faktat ja fiktiot (20.7.2026)](https://helda.helsinki.fi/server/api/core/bitstreams/533969e6-e647-4fcd-b13c-afcb62effa2d/content)

**3. Työ**

- [EK / Ramboll: Selvitys datakeskustoimialan potentiaalista (18.9.2025), tiivistelmä](https://news.microsoft.com/source/emea/2025/09/selvitys-datakeskukset-vauhdittavat-suomen-digitaalista-kasvua/?lang=fi)
- [EK:n tiedote: Datakeskukset ovat avain Suomen digitaaliseen kilpailukykyyn](https://ek.fi/ajankohtaista/tiedotteet/selvitys-datakeskukset-ovat-avain-suomen-digitaaliseen-kilpailukykyyn-tarjoaa-suomelle-miljardiluokan-kasvupotentiaalin/)
- [Pervilä & Kangasharju, Helsingin yliopisto: Datakeskusten faktat ja fiktiot (20.7.2026)](https://helda.helsinki.fi/server/api/core/bitstreams/533969e6-e647-4fcd-b13c-afcb62effa2d/content)
- [FCG / Mikkelin kaupunki: Aluetaloudellisten vaikutusten arviointi (27.1.2026)](https://mikkeli.fi/wp-content/uploads/2026/02/Aluetaloudellisten-vaikutusten-arviointi_Loppuraportti_2026.pdf)

**4. Turvallisuus**

- [Huoltovarmuuskeskus: Toimintaympäristön muutos ja kyberturvallisuuden merkitys huoltovarmuudelle (20.4.2026)](https://www.paviljonki.fi/wp-content/uploads/juha_ilkka_forum-lava.pdf)
- [Huoltovarmuuskeskus: Toimialojen kyberkypsyysselvitys 2025 (päivitetty 2.3.2026)](https://www.huoltovarmuuskeskus.fi/files/264544b3f1eccc61915cc6d80df5ba6fc0d5fbf3/kyberkypsyys-toimialoilla-2025-paivitetty-2.3.2026.pdf)
- [Uudenmaan ELY-keskus: Vihdin datakeskuksen YVA-ohjelman lausunnot (2023)](https://www.ymparisto.fi/sites/default/files/documents/Lausuntokoonti_Vihdin_datakeskus_YVA-ohjelma.pdf)

**5. Melu ja liikenne**

- [Ramboll / Harjavallan kaupunki: Harjavallan datakeskuksen liikenneselvitys (30.10.2025)](https://www.harjavalta.fi/wp-content/uploads/2025/11/LIITE_11_Harjavallan_datakeskuksen_liikenneselvitys.pdf)
- [Uudenmaan ELY-keskus: Vihdin datakeskuksen YVA-ohjelman lausunnot (2023)](https://www.ymparisto.fi/sites/default/files/documents/Lausuntokoonti_Vihdin_datakeskus_YVA-ohjelma.pdf)
- [Huittisten kaupunki: Datakeskuksen asemakaavan yleisötilaisuus, hanketoimijan esitys (10.6.2026)](https://www.huittinen.fi/wp-content/uploads/2026/06/Greensky-Energy-Oyn-datakeskushankkeen-asemakaava-aloitusvaiheen-yleisotilaisuus-esitys-10.6.2026.pdf)

**6. Luonto**

- [Uudenmaan ELY-keskus: Vihdin datakeskuksen YVA-ohjelman lausunnot (2023)](https://www.ymparisto.fi/sites/default/files/documents/Lausuntokoonti_Vihdin_datakeskus_YVA-ohjelma.pdf)
- [Pyhäjärven kaupunki: Uusi-Olkkolan asemakaava (18.11.2025)](https://poytakirjat.pyhajarvi.fi/djulkaisu/kokous/2025355-8.PDF)

**7. Suomi**

- [Fingrid: Sähkönkulutus on kääntymässä voimakkaaseen kasvuun (18.8.2026)](https://www.sttinfo.fi/tiedote/72239761/sahkonkulutus-on-kaantymassa-voimakkaaseen-kasvuun-rinnalle-tarvitaan-lisaa-saatovoimaa?lang=fi)
- [EK:n tiedote: Datakeskukset ovat avain Suomen digitaaliseen kilpailukykyyn](https://ek.fi/ajankohtaista/tiedotteet/selvitys-datakeskukset-ovat-avain-suomen-digitaaliseen-kilpailukykyyn-tarjoaa-suomelle-miljardiluokan-kasvupotentiaalin/)

**Simulaatio ja muut pelin lähteet**

- [Suomalainen Tiedeakatemia: Datakeskusbuumi – miten hyöty saadaan kunnille (29.8.2025)](https://www.sttinfo.fi/tiedote/71396581/datakeskusbuumi-tutkijat-arvioivat-miten-miljardihankkeista-saadaan-suurin-hyoty-kunnille)
- [Hallituksen esitys HE 156/2025: datakeskusten sähkövero 2,24 snt/kWh 1.7.2026 alkaen](https://www.eduskunta.fi/pdf/HE+156/2025+vp?lang=fi)
- [Yle: Seinäjoen datakeskuksen 1. vaihe 110 MW, 1,5 mrd € (14.7.2026)](https://yle.fi/a/74-20236252)

**Edistynyt valikko · Datakeskuskartta**

- [AI Suomi: Datakeskukset Suomessa (kooste, 29.9.2026)](https://aisuomi.fi/opas/datakeskukset-suomessa)
- [AI Suomi: Suomeen jonottaa 5 gigawattia konesaleja](https://aisuomi.fi/liiketoiminta/suomeen-jonottaa-5-gigawattia-konesaleja-kuka-saa-lammon)
- [Tietolähde.fi: Datakeskukset kartalla](https://tietolahde.fi/datakeskukset/kartta/)
- [Microsoft: Pääkaupunkiseudun datakeskusalueen toinen vaihe (28.4.2026)](https://news.microsoft.com/source/emea/2026/04/microsoft-kaynnistaa-paakaupunkiseudun-datakeskusalueen-toisen-vaiheen-rakentamisen/?lang=fi)
- [Al Jazeera: Finland orders halt to work on Google data sites (7.10.2026)](https://www.aljazeera.com/amp/news/2026/10/7/finland-orders-halt-to-work-on-google-data-sites-over-environment-concerns)
- [Nivos: Datasaleista saadaan lähivuosina lisää puhdasta lämpöä Mäntsälän keskustaan (27.8.2025)](https://nivos.fi/ajankohtaista/uusista-konesaleista-lisaa-puhdasta-lampoa-mantsalaan/)
- [Yle: Google lahjoittaa energiayhtiölle ilmaiseksi hukkalämpöä 2 000 kotitalouteen (21.5.2024)](https://yle.fi/a/74-20089673)
- [United Bankers: UB Timberland Fund sold a plot of land in Vaala to Google (26.2.2026)](https://unitedbankers.fi/en/united-bankers-plc/investors/releases-and-publications/r/46068/united-bankers'-ub-timberland-fund-sold-a-plot-of-land-in-vaala-to-google/)
- [Fingrid: Webinaari liittymissopimushakemuksista (18.5.2026)](https://www.fingrid.fi/globalassets/dokumentit/fi/ajankohtaista-tapahtumat/webinaari-liittymissopimushakemuksista-18.5.2026-esitysmateriaali.pdf)

**Edistynyt valikko · Datakeskusvahti**

- [Ministeriön datakeskusten takia sorvaama lakimuutos uhkaa lisätä fossiilisen energian rakentamista](https://www.sttinfo.fi/tiedote/72400764/ministerion-datakeskusten-takia-sorvaama-lakimuutos-uhkaa-lisata-fossiilisen-energian-rakentamista)
- [Hypon asuntoluottoluokitus: Datakeskushankkeet vilkastuttavat asuntomarkkinoita](https://kiinteistolehti.fi/hypon-asuntoluottoluokitus-datakeskushankkeet-vilkastuttavat-asuntomarkkinoita)
- [Liperin datakeskushanke etenee edelleen – lakimuutos voi kuitenkin viivästyttää aikataulua](https://kotiseutu-uutiset.com/uutiset/2026/10/22/liperin-datakeskushanke-etenee-edelleen-lakimuutos-voi-kuitenkin-viivastyttaa-aikataulua)
- [Datakeskusinvestointien unohdettu kysymys on asuminen](https://www.sttinfo.fi/tiedote/72340978/datakeskusinvestointien-unohdettu-kysymys-on-asuminen?lang=fi)
- [Datakeskuksiin rekrytoidaan nyt ennätyksellisen paljon tekijöitä – eniten haetaan sähköasentajia](https://talotekniikka-lehti.fi/datakeskuksiin-rekrytoidaan-nyt-ennatyksellisen-paljon-tekijoita-eniten-haetaan-sahkoasentajia/)
- [Suomeen rakennetaan 23 suurta datakeskusta – näkymä nousi rajusti](https://www.verkkouutiset.fi/a/suomeen-rakennetaan-23-suurta-datakeskusta-nakyma-nousi-rajusti/)
- [Lahdessa rakennetaan datakeskusta aivan asutuksen viereen](https://yle.fi/a/74-20244990)
- [Kontiolahden Lehmoon suunnitteilla jo kolmas datakeskus](https://yle.fi/a/74-20248242)
- [Suomessa on julkistettu tänä vuonna useampi kuin yksi uusi datakeskus viikossa](https://yle.fi/a/74-20249055)
- [Viranomaisen yllätyspäätös pisti stopin Googlen datakeskustöille](https://yle.fi/a/74-20250334)
- [Jättimäinen datakeskus suunnitteilla Jämsään](https://yle.fi/a/74-20250354)
- [Google on hakannut laittomasti myös Haminassa, mutta rikosilmoitusta ei tehty](https://yle.fi/a/74-20252354)
- [Nouseeko naapuriisi datakeskus? Näin se voi vaikuttaa asunnon hintaan](https://yle.fi/a/74-20252969)

**Edistynyt valikko · Asunnot datakeskusten lähellä**

- [Tilastokeskus: Osakeasuntojen hinnat, taulukot 13mu ja 13mx (CC BY 4.0)](https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__ashi/)
- [Tilastokeskus: Paavo – postinumeroalueittainen avoin tieto (CC BY 4.0)](https://stat.fi/tup/paavo/index.html)
- [Ympäristöministeriö: asuntojen.hintatiedot.fi](https://asuntojen.hintatiedot.fi/)

**Edistynyt valikko · Sähkö ja kantaverkko**

- [Teknologiateollisuus: Keskustelu datakeskuksista kaipaa mittasuhteita (4.6.2026), lukuina Datakeskusteollisuus ry:n tiedot](https://teknologiateollisuus.fi/keskustelu-datakeskuksista-kaipaa-mittasuhteita-mita-hyotya-suomelle-todella-syntyy/)
- [Yle: Datakeskukset tuovat mukanaan uutta sähköntuotantoa – Energiateollisuus: ”Huoli hintojen noususta turha” (11.2.2026)](https://yle.fi/a/74-20208368)
- [Energiateollisuus: Energiatilastot 2025 (21.1.2026)](https://www.sttinfo.fi/tiedote/71751647/energiatilastot-2025-kaukolammon-paastot-putosivat-kolmanneksella-sahko-lahes-fossiilitonta-ja-euroopan-edullisinta)
- [Motiva: Home Electricity Use, Electricity Contracts and Smart Electricity Use (esimerkkikodit, englanninkielinen sivu)](https://www.motiva.fi/en/home-electricity-use-electricity-contracts-and-smart-electricity-use/)
- [Yle News: Study: Big growth in data centres could raise electricity prices by 10% by 2030 (5.11.2025)](https://yle.fi/a/74-20192344)
- [Yle: Tuulivoimaa Itä-Suomeen ja sähköveron huojennuksia datakeskuksille – hallituksen tilaama datakeskusselvitys (4.11.2025)](https://yle.fi/a/74-20192035)
- [Fingrid: Kysymyksiä ja vastauksia kantaverkkopalvelumaksujen rakenneuudistuksesta (2.7.2026)](https://www.fingrid.fi/globalassets/dokumentit/fi/palvelut/kulutuksen-ja-tuotannon-liittaminen-kantaverkkoon/kysymyksia-ja-vastauksia-kantaverkkopalvelumaksujen-rakenneuudistuksesta.pdf)
- [Fingrid: Konsernin puolivuosikatsaus 1.1.–30.6.2026 (23.7.2026)](https://www.sttinfo.fi/tiedote/72200778/fingrid-konsernin-puolivuosikatsaus-11-3062026?lang=fi)
- [Fingrid: Fingridin vuosi 2025 (vuosikertomus)](https://www.fingrid.fi/globalassets/dokumentit/fi/vuosikertomus/2025/fingrid-oyj-fingridin-vuosi-2025.pdf)
- [Verkkouutiset: Datakeskusten sähkönkulutus kasvaa nopeasti – ”Suomi ei ole Irlanti” (7.5.2026)](https://www.verkkouutiset.fi/a/datakeskusten-sahkonkulutus-kasvaa-nopeasti-suomi-ei-ole-irlanti/)
- [Energiavirasto: Usein kysyttyä sähkön verkkopalvelusta](https://energiavirasto.fi/usein-kysyttya-verkkopalvelusta)
- [Energiavirasto: Kotitalouksien sähkölasku pieneni lähes seitsemän prosenttia vuonna 2024 (16.1.2025)](https://energiavirasto.fi/-/kotitalouksien-sahkolasku-pieneni-lahes-seitseman-prosenttia-vuonna-2024)
- [Verohallinto: Sähkövero (päivitetty 23.4.2026)](https://vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/valmisteverotus/sahkovero/)
- [Fingrid: Näin etenee voimajohtohanke (2020)](https://www.fingrid.fi/globalassets/dokumentit/fi/julkaisut/fingrid_nain_etenee_voimajohtohanke_2020.pdf)

**Edistynyt valikko · Hukkalämpö ja vesi**

- [Helen: Helen hyödyntää uuden datakeskuksen hukkalämpöä Helsingin kaukolämmössä (31.8.2026)](https://www.helen.fi/en/news/2026/helen-hyodyntaa-uuden-datakeskuksen-hukkalampoa-helsingin-kaukolammossa)
- [DCD: OnZero partners with Helen to connect Helsinki AI data center to district heating network (1.9.2026)](https://www.datacenterdynamics.com/en/news/onzero-partners-with-helen-to-connect-helsinki-ai-data-center-to-district-heating-network/)
- [Yle: Haminan Energia myy tytäryhtiönsä pääomasijoittajalle (10.10.2024)](https://yle.fi/a/74-20117083)
- [DCD: Google launches heat recovery project at data center in Hamina, Finland (21.5.2024)](https://datacenterdynamics.com/en/news/google-launches-heat-recovery-project-at-data-center-in-hamina-finland)
- [Yle: Kaupat Venäjällä täyttivät kassan ja nyt konesali Mäntsälässä kolminkertaistuu (10.10.2024)](https://yle.fi/a/74-20113966)
- [LUMI: The waste energy of LUMI supercomputer produces 20 percent of the district heat of Kajaani (20.5.2020)](https://www.lumi-supercomputer.eu/the-waste-energy-of-lumi-supercomputer-produces-20-percent-of-the-district-heat-of-kajaani-csc-and-loiste-lampo-have-signed-an-agreement/)
- [Loiste Lämpö: Konesalien hukkalämmöt hyödyksi -webinaari, Kajaanin ammattikorkeakoulu (1.10.2025)](https://kamk.fi/wp-content/uploads/2025/10/Konesalien-hukkalammot-hyodyksi-1.10.2025-Loiste.pdf)
- [DCD: 2MW data center being developed in Central Finland will be integrated into district heating (5.3.2026)](https://datacenterdynamics.com/en/news/2mw-data-center-being-developed-in-central-finland-will-be-integrated-into-district-heating/)
- [Calefa / STT Info: Datakeskusten jäähdytys lämmittää suomalaisia koteja (31.8.2026)](https://www.sttinfo.fi/tiedote/72274046/datakeskusten-jaahdytys-lammittaa-suomalaisia-koteja?lang=fi)
- [Työ- ja elinkeinoministeriö, Pia Kotro: Energiatehokkuuslaki 1372/2025, esitys Energiaviraston tilaisuudessa (27.1.2026)](https://energiavirasto.fi/documents/11120570/255005306/Kotro-TEM%20ETL%20270126%20f.pdf/3e8186e5-f259-1aff-49c4-87c375bf05bc?t=1769433901280)
- [Energiateollisuus: Kaukolämpötilasto 2024 (1/2026)](https://energia.fi/wp-content/uploads/2026/01/Kaukolampotilasto_2024.pdf)
- [Energiateollisuus: Kaukolämmön hinta 1.1.2026 (17.2.2026)](https://energia.fi/wp-content/uploads/2026/06/Kaukolammon_hinta_01012026.pdf)
- [Yle: Uudet datakeskukset loivat erikoisen mahdollisuuden: Kainuussa voisi kasvattaa tulevaisuudessa mangoja (25.1.2025)](https://yle.fi/a/74-20138519)
- [Lappeenrannan kaupunki: Pajarila data center (2026)](https://lappeenranta.fi/en/decision-making-and-administration/pajarila-data-center)
- [Lupa- ja valvontavirasto: YVA-yksittäistapauspäätös, atNorth datakeskus Kouvola (17.6.2026)](https://www.ymparisto.fi/sites/default/files/documents/YVA-yksitt%C3%A4istapausp%C3%A4%C3%A4t%C3%B6s_atNorth_datakeskus_Kouvola.pdf)
- [Helsingin kaupunki: Lahdenväylän varteen suunnitellaan uutta datakeskusta (22.4.2026)](https://www.hel.fi/fi/uutiset/lahdenvaylan-varteen-suunnitellaan-uutta-datakeskusta)
- [Yle: Jättikokoisen datakeskuksen tulo Rovaniemelle voi tyssätä pohjavesialueen ja vedenottamon vuoksi (27.5.2025)](https://yle.fi/a/74-20163451)

**Edistynyt valikko · Maankäyttö ja luonto**

- [Ramboll / Fortum: Datakeskuksen asemakaava, Harjavalta – meluselvitys (25.9.2025)](https://www.harjavalta.fi/wp-content/uploads/2025/11/LIITE_9_Meluselvitys.pdf)
- [Lupa- ja valvontavirasto: Perusteltu päätelmä YVA-selostuksesta, Kouvolan datakeskus (1.6.2026)](https://www.ymparisto.fi/sites/default/files/documents/Yhteysviranomaisen%20perusteltu%20p%C3%A4%C3%A4telm%C3%A4%20YVA-selostuksesta%2C%20Kouvolan%20datakeskus%2C%20Kouvola.pdf)
- [Yle: Kouvolaan on tulossa kaksi suurta datakeskusta (7.11.2024)](https://yle.fi/a/74-20122544)
- [Yle: Atnorth hakee lupaa kolmelle uudelle datakeskukselle Kouvolassa (6.2.2026)](https://yle.fi/a/74-20208529)
- [Yle: Mikkeliläiset valittivat datakeskustyömaan rekkarallista (25.8.2026)](https://yle.fi/a/74-20242309)
- [Yle News: Google opens data centre in Hamina (10.9.2011)](https://yle.fi/a/3-5421764)
- [Lupa- ja valvontavirasto: Tuike Finland Oy:tä kehotetaan keskeyttämään Muhoksen ja Kajaanin datakeskushankkeiden valmistelutoimet (6.10.2026)](https://www.sttinfo.fi/tiedote/72390663/lupa-ja-valvontavirasto-kehottaa-tuike-finland-oyta-keskeyttamaan-muhoksen-ja-kajaanin-datakeskushankkeiden-valmistelutoimet?lang=fi)
- [FIFA: Football Stadiums Guidelines, 5.3 Pitch dimensions and surrounding areas (luettu 24.10.2026)](https://publications.fifa.com/de/football-stadiums-guidelines/technical-guideline/stadium-guidelines/pitch-dimensions-and-surrounding-areas)

**Edistynyt valikko · Datakeskuksen rahavirrat**

- [https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure](https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure)
- [https://yle.fi/a/74-20245686](https://yle.fi/a/74-20245686)
- [https://yle.fi/a/74-20245322](https://yle.fi/a/74-20245322)
- [https://yle.fi/a/74-20128113](https://yle.fi/a/74-20128113)
- [https://yle.fi/a/74-20247408](https://yle.fi/a/74-20247408)
- [https://www.uusijuttu.fi/juttu/su3ZnNOS-a9IALZQd-d9551](https://www.uusijuttu.fi/juttu/su3ZnNOS-a9IALZQd-d9551)
- [https://www.asiakastieto.fi/yritykset/fi/tuike-finland-oy/22060717/taloustiedot](https://www.asiakastieto.fi/yritykset/fi/tuike-finland-oy/22060717/taloustiedot)
- [https://aisuomi.fi/liiketoiminta/hallitus-lupasi-30-miljoonaa-ja-perui-sen](https://aisuomi.fi/liiketoiminta/hallitus-lupasi-30-miljoonaa-ja-perui-sen)
- [https://yle.fi/a/74-20059288](https://yle.fi/a/74-20059288)
- [https://ek.fi/wp-content/uploads/2025/09/FDCA_Datakeskustoimialan-potentiaali-Suomessa_v1.9.pdf](https://ek.fi/wp-content/uploads/2025/09/FDCA_Datakeskustoimialan-potentiaali-Suomessa_v1.9.pdf)
- [https://www.businessfinland.fi/en/whats-new/news/2024/google-announced-an-expansion-of-its-hamina-data-center/](https://www.businessfinland.fi/en/whats-new/news/2024/google-announced-an-expansion-of-its-hamina-data-center/)
- [https://www.fingrid.fi/globalassets/dokumentit/fi/yhtio/toimikunnat/neuvottelukunta/ntk226-kantaverkon-liittamisen-periaatteet.pdf](https://www.fingrid.fi/globalassets/dokumentit/fi/yhtio/toimikunnat/neuvottelukunta/ntk226-kantaverkon-liittamisen-periaatteet.pdf)
- [https://www.eduskunta.fi/FI/vaski/Kysymys/Documents/KKV_39+2026.pdf?lang=fi](https://www.eduskunta.fi/FI/vaski/Kysymys/Documents/KKV_39+2026.pdf?lang=fi)
- [https://yle.fi/a/74-20245327](https://yle.fi/a/74-20245327)
- [https://aisuomi.fi/liiketoiminta/datakeskus-tulee-kylaan-kuka-saa-lammon-kuka-laskun](https://aisuomi.fi/liiketoiminta/datakeskus-tulee-kylaan-kuka-saa-lammon-kuka-laskun)
- [https://capman.com/2024/10/capman-infra-invests-in-district-heating-and-electricity-network-infrastructure-in-hamina-finland/](https://capman.com/2024/10/capman-infra-invests-in-district-heating-and-electricity-network-infrastructure-in-hamina-finland/)
- [https://aisuomi.fi/liiketoiminta/suomi-45-kertaistaa-datakeskusten-sahkoveron](https://aisuomi.fi/liiketoiminta/suomi-45-kertaistaa-datakeskusten-sahkoveron)

**Edistynyt valikko · Lupaus ja toteuma**

- [Yle: Google to Turn Paper Mill into Server Centre (4.3.2009)](https://yle.fi/a/3-5729620)
- [Asiakastieto: Tuike Finland Oy, yrityksen tiedot (luettu 24.10.2026)](https://www.asiakastieto.fi/yritykset/fi/tuike-finland-oy/22060717/yfeasy)
- [Yle: Google buys more land from the city of Hamina (22.6.2022)](https://yle.fi/a/3-12507373)
- [Espoon kaupunki: Using waste heat from new data center to cover 40% of Espoo’s district heating needs (15.7.2024)](https://www.espoo.fi/en/articles/using-waste-heat-new-data-center-cover-40-espoos-district-heating-needs)
- [Google: tiedote investoinneista Suomeen (9.9.2026, julkaistu Cursor Oy:n sivulla)](https://www.cursor.fi/app/uploads/2026/09/Tiedote-Google-09092026.pdf)

**Edistynyt valikko · Opit ulkomailta**

- [CSO (Irlannin tilastovirasto): Data Centres Metered Electricity Consumption 2025 (7.7.2026)](https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2025/keyfindings/)
- [CSO (Irlannin tilastovirasto): Data Centres Metered Electricity Consumption 2024 (10.6.2025)](https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2024/keyfindings)
- [EirGrid: Data Centre Constrained Area Overview (20.5.2026)](https://cms.eirgrid.ie/sites/default/files/publications/Data-Centre-Constrained-Area-Overview-May-2026.pdf)
- [William Fry (asianajotoimisto): CRU publishes long-awaited final policy on data centre connections (15.12.2025)](https://www.williamfry.com/knowledge/cru-publishes-long-awaited-final-policy-on-data-centre-connections/)
- [DatacenterDynamics: EirGrid says no new applications for data centers in Dublin till 2028 (päiväys ei näy sivulla)](https://www.datacenterdynamics.com/en/news/eirgrid-says-no-new-applications-for-data-centers-in-dublin-till-2028)
- [DatacenterDynamics: EirGrid warns Irish government mass exodus of data centers possible without connection agreements (2024)](https://www.datacenterdynamics.com/en/news/eirgrid-warns-irish-government-mass-exodus-of-data-centers-possible-without-connection-agreements)
- [Nieuws.nl: Tijdelijke stop op bouw nieuwe datacenters (12.7.2019)](https://nieuws.nl/algemeen/tijdelijke-stop-op-bouw-nieuwe-datacenters)
- [Dutch IT Channel: Dutch Data Centers betreurt bouwstop datacenters (16.7.2019)](https://www.dutchitchannel.nl/news/148851/dutch-data-centers-betreurt-bouwstop-datacenters)
- [Gemeente Haarlemmermeer: Datacenterbeleid gemeente Haarlemmermeer (voimassa 24.11.2020 alkaen)](https://lokaleregelgeving.overheid.nl/CVDR646404)
- [DatacenterDynamics: Amsterdam resumes data center building after year's moratorium (2020)](https://www.datacenterdynamics.com/en/news/amsterdam-resumes-data-center-building-after-years-moratorium)
- [Rijksoverheid (Alankomaiden hallitus): Kabinet beperkt mogelijkheid tot vestiging hyperscale datacentra (10.6.2022)](https://www.rijksoverheid.nl/actueel/nieuws/2022/06/10/kabinet-beperkt-mogelijkheid-tot-vestiging-hyperscale-datacentra)
- [NOS: Hyperscale-datacenters in Nederland? Nog maar op twee plekken welkom (10.6.2022)](https://nos.nl/l/2432219)
- [NOS: Een van de twee gemeenten voor megadatacenters stribbelt tegen (28.6.2022)](https://nos.nl/l/2434458)
- [DatacenterDynamics: Facebook parent Meta officially kills Zeewolde data center after pushback in the Netherlands (2022)](https://datacenterdynamics.com/en/news/facebook-parent-meta-officially-kills-zeewolde-data-center-after-pushback-in-the-netherlands)
- [Tillväxtverket: Etableringen av Facebooks europeiska datacenter i Sverige och Luleå, rapport 0170 (5/2014; Invest in Dalarnan tallentama kopio)](https://www.investindalarna.se/app/uploads/2016/12/rapport-0170-web-tillvaxtverketfacebook.pdf)
- [The Barents Observer: Facebook and green energy key to economic boom (20.1.2016)](https://thebarentsobserver.com/en/industry/2016/01/facebook-and-green-energy-key-economic-boom)
- [Ruotsin valtiovarainministeriö: Avskaffad avfallsförbränningsskatt och slopad energiskattenedsättning för datorhallar (9.9.2022)](https://regeringen.se/rattsliga-dokument/departementsserien-och-promemorior/2022/09/avskaffad-avfallsforbranningsskatt-och-slopad-energiskattenedsattning-for-datorhallar/)
- [Skatteverket (Ruotsin verovirasto): Slopad skattenedsättning för datorhallar (16.12.2022)](https://skatteverket.se/foretag/skatterochavdrag/punktskatter/nyheterinompunktskatter/2022/nyheterinompunktskatter/slopadskattenedsattningfordatorhallar.5.1997e70d1848dabbac93896.html)
- [DatacenterDynamics: Facebook begins installing district heating system at Odense data center (9.7.2020)](https://www.datacenterdynamics.com/en/news/facebook-begins-installing-district-heating-system-odense-data-center-denmark)
- [Meta: Denmark data center to warm local community (ei päiväystä)](https://sustainability.atmeta.com/asset/fb-denmark-data-center-to-warm-local-community)
- [Ramboll: Meta – surplus heat to district heating (hankesivu, ei päiväystä)](https://www.ramboll.com/en-us/meta-surplus-heat-to-district-heating)
- [TechRadar: This Danish data center is providing heat to thousands of household radiators (12.9.2026)](https://www.techradar.com/pro/finally-some-good-usage-this-danish-data-center-is-providing-heat-to-power-thousands-of-household-radiators)
- [Syddansk Universitet: Datacentre og overskudsvarme (1/2019)](https://www.sdu.dk/da/om-sdu/fakulteterne/samfundsvidenskab/sam_nyhedsliste/datacentre_og_overskudsvarme)
- [Tanskan hallitus: Aftale om fremme af overskudsvarme (sopimusteksti, ei päiväystä)](https://regeringen.dk/media/mo0ghlev/aftaletekst-fremme-af-overskudsvarme.pdf)
- [BDO Danmark: Afgift på overskudsvarme – nye regler fra næste år (2021)](https://www.bdo.dk/da-dk/faglig-info/depechen/depechen-artikler-2021/afgift-pa-overskudsvarme-nye-regler-fra-naeste-aar)
- [Saksan oikeusministeriö: Energieeffizienzgesetz § 11, Klimaneutrale Rechenzentren (voimassa oleva teksti)](https://www.gesetze-im-internet.de/enefg/__11.html)
- [CMS (asianajotoimisto): Der Bundestag verabschiedet Energieeffizienzgesetz (29.9.2023)](https://cms.law/de/deu/legal-updates/der-bundestag-verabschiedet-energieeffizienzgesetz-das-erwartet-rechenzentrumsbetreiber)
- [eco – Verband der Internetwirtschaft: Stellungnahme zum Energieeffizienzgesetz (11.4.2023)](https://eco.de/download/217601)

**Edistynyt valikko · Näin vaikutat**

- [Ympäristöhallinto (ymparisto.fi): YVA-tietokortit osallistujalle (8/2022)](https://www.ymparisto.fi/sites/default/files/documents/YVA_Tietokortit_Osallistujalle_8_22.pdf)
- [ELY-keskus: Kysymyksiä ja vastauksia Lupa- ja valvontaviraston ympäristötoimialasta (25.11.2025)](https://www.ely-keskus.fi/documents/d/ely-keskus/kysymyksia-ja-vastauksia-lupa-ja-valvontaviraston-ymparistotoimialasta-25112025-pdf)
- [Finlex: Maankäyttö- ja rakennusasetus 895/1999, 27 § ja 30 § (alkuperäinen säädös 10.9.1999)](https://data.finlex.fi/api/assets/extra/statute-book-of-finland-pdf/fin/1999/19990100.pdf)
- [Vihdin kunta: Kaavasanasto (päiväämätön)](https://www.vihti.fi/wp-content/uploads/kaavasanasto-2.pdf)
- [Loimaan kaupunki: Rakentamislaki astuu voimaan 1.1.2025 (12/2024)](https://www.loimaa.fi/wp-content/uploads/2024/12/rakentamislaki-astuu-voimaan-1.1.2025.pdf)
- [Helsingin kaupunki: Naapurin kuuleminen ja suostumus (luettu 24.10.2026)](https://www.hel.fi/fi/kaupunkiymparisto-ja-liikenne/tontit-ja-rakentamisen-luvat/rakentamisluvan-hakeminen/naapurin-kuuleminen-ja-suostumus)
- [Oulun kaupunginvaltuusto: Pöytäkirjan ote 2/2026, asemakaavan hyväksyminen ja valitusosoitus (30.3.2026)](https://www.ouka.fi/media/18401/download)
- [Kouvolan kaupunginhallitus: Pöytäkirjanote § 130, oikaisuvaatimusohje (1.6.2026)](https://www.kouvola.fi/wp-content/uploads/2026/06/kouvolan-kaupunginhallituksen-poytakirjanote-§130.pdf)
- [Yle: Lappeenranta vuokraa tontit datakeskukselle (5.3.2026)](https://yle.fi/a/74-20213516)
- [Varkauden kaupunki: Kuulutus, Kiertotie 9 asemakaavaehdotus (6.2.2025)](https://varkaus.fi/sites/default/files/2025-02/kuulutus.pdf)
- [Lupa- ja valvontavirasto: Klaukkalan Sudentullin datakeskuksen YVA-menettely käynnistyy (16.9.2026)](https://www.sttinfo.fi/tiedote/72306550/klaukkalan-sudentullin-datakeskuksen-yva-menettely-kaynnistyy?lang=fi)
- [Lupa- ja valvontavirasto: Kehotus ja kuuleminen, Kajaanin-Otanmäen datakeskushanke (6.10.2026)](https://www.sttinfo.fi/files/69821631/72390663/516070/fi)
- [Verkkouutiset: Viranomainen kehottaa Googlea keskeyttämään datakeskusten valmistelun (6.10.2026)](https://www.verkkouutiset.fi/a/viranomainen-kehottaa-googlea-keskeyttamaan-datakeskusten-valmistelun/)
- [Kaleva: Google vastasi viranomaiselle (12.10.2026)](https://www.kaleva.fi/google-vastasi-viranomaiselle-tyomailla-saatetaan/13706132)
- [Kaleva: Luonnonsuojeluliitto vaatii Muhoksen datakeskustöiden keskeyttämistä (17.9.2026)](https://www.kaleva.fi/luonnonsuojeluliitto-googlen-datakeskustyomailla-t/13671648)
- [Yle: Kaivosyhtiö Otanmäki Mine valitti osayleiskaavasta hallinto-oikeuteen (23.6.2026)](https://yle.fi/a/74-20232726)
- [Vaasan hallinto-oikeus: Päätös 826/2026, datakeskuksen ympäristölupa, Espoo (23.6.2026)](https://www.tuomioistuimet.fi/app/uploads/sites/12/2026/01/VHaO-paatos-23.6.2026-nro-826_2026-dnro-1460_2025.pdf)
- [Lupa- ja valvontavirasto: Lahden Kiveriön datakeskukselle myönnettiin ympäristölupa (5.10.2026)](https://www.sttinfo.fi/tiedote/72369251/lahden-kiverion-datakeskukselle-myonnettiin-ymparistolupa?lang=fi)
- [Maanmittauslaitos: Voimajohtolunastus Kotka–Hamina, alkukokouksen aineisto (28.5.2025)](https://www.maanmittauslaitos.fi/sites/maanmittauslaitos.fi/files/Voimajohtolunastus_toimituskalvot_Tuike%20alkukokous.pdf)
- [Euroopan e-oikeusportaali: Oikeussuoja ympäristöasioissa, Suomi (luettu 24.10.2026)](https://e-justice.europa.eu/pdf-export/952_fi)
- [Finlex: Laki kuntalain muuttamisesta 419/2021, 23 § aloiteoikeus (25.5.2021)](https://finlex.fi/api/media/statute/25820/mainPdf/main.pdf)
- [Kuntaliitto: Vaikuttamistoimielimet (päivitetty 8/2024)](https://www.kuntaliitto.fi/sites/default/files/media/file/Vaikuttamistoimielimet_p%C3%A4ivitetty2024.pdf)
- [Kaleva: Kansalaisaloite datakeskusten sähkönkäytön rajoittamisesta etenee eduskuntaan (18.9.2026)](https://www.kaleva.fi/kansalaisaloite-datakeskusten-sahkonkayton-rajoitt/13672490)
- [Edilex: HE 70/2026, hallituksen esitys uudeksi alueidenkäyttölaiksi (vireillä)](https://www.edilex.fi/he/20260070)
- [Suomen Arkkitehtiliitto SAFA: Kaavoituksen sujuvoittaminen ei saa tapahtua osallisuuden kustannuksella (16.9.2026)](https://www.sttinfo.fi/tiedote/72328190/kaavoituksen-sujuvoittaminen-ei-saa-tapahtua-osallisuuden-ja-ympariston-laadun-kustannuksella?lang=fi)

**Edistynyt valikko · Datakeskussanasto**

- [Verohallinto: Sähköveron verotaulukot (luettu 24.10.2026)](https://vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/valmisteverotus/sahkovero/verotaulukot/)
- [Energiavirasto: Verkkotoiminnan luvanvaraisuus (luettu 24.10.2026)](https://energiavirasto.fi/verkkotoiminnan-luvanvaraisuus)
- [Energiavirasto: Kuluttajainfo sähköasiakkaille (luettu 24.10.2026)](https://energiavirasto.fi/documents/11120570/13015916/Kuluttajainfo%20s%C3%A4hk%C3%B6asiakkaille.pdf/49dc8be6-5169-7cd6-ffa2-a690770c048f)
- [Euroopan komissio: AI Factories (päivitetty 12.8.2026)](https://digital-strategy.ec.europa.eu/en/policies/ai-factories)
- [Yle: Hallitus tukee tekoälygigatehdashanketta (6.7.2025)](https://yle.fi/a/74-20171278)
- [Aluehallintovirasto: Uusi Lupa- ja valvontavirasto aloittaa 1.1.2026 (18.12.2025)](https://www.sttinfo.fi/tiedote/71700931/suomen-suurimpiin-virastoihin-kuuluva-uusi-lupa-ja-valvontavirasto-aloittaa-112026?lang=fi)
- [Lupa- ja valvontavirasto: Ebban sähkönsiirron YVA-menettely käynnistynyt (21.9.2026)](https://www.sttinfo.fi/tiedote/72336962/merituulivoimahanke-ebban-mantereelle-sijoittuvan-sahkonsiirron-yva-menettely-kaynnistynyt?lang=fi)
- [Helsingin kaupunki: Kaavoitus ja suunnittelu jakautuu eri tasoihin (luettu 24.10.2026)](https://www.hel.fi/fi/kaupunkiymparisto-ja-liikenne/kaupunkisuunnittelu-ja-rakentaminen/miten-suunnittelu-etenee)
- [Veronmaksajain Keskusliitto: Kiinteistövero vuonna 2026 (18.12.2025)](https://www.veronmaksajat.fi/neuvot/henkiloverotus/asuminen-ja-auto/kiinteistovero/kiinteistovero-kuka--maksaa/)
- [Veronmaksajain Keskusliitto: Kuntaverot (11.12.2025)](https://www.veronmaksajat.fi/tutkimus-ja-tilastot/kuntaverot/)
- [Tilastokeskus: Käsitteet, henkilötyövuosi (luettu 24.10.2026)](https://stat.fi/meta/kas/henkilotyovuosi.html)
- [Huoltovarmuuskeskus: Sanasto (luettu 24.10.2026)](https://www.huoltovarmuuskeskus.fi/sanasto)
- [Motiva: Kaukolämpö pientalossa (luettu 24.10.2026)](https://motiva.fi/koti_ja_asuminen/energiatehokas_pientalo/pientalon_lammitys/kaukolampo)

## Tunnetut sisältöasiat

Avoin tarkistuslista tiimille. Lukuja ei ole muutettu ilman lähdettä.

- Kartta: seitsemän hankkeen (Google Hamina/Kajaani/Muhos/Vaala, Microsoft Espoo/Kirkkonummi/Vihti) Tietolähde-luku ilman lähdettä listassa; Haminan 100–200 MW; Forssan Yle-viite; 5,3 GW summaa koko kampusten tavoitteita.
- Rahavirrat: 10 M€/MW vs pelin noin 13,6 M€/MW; pysyvät työpaikat 0,5–1,5 / MW vs pelin 64–150 / 100 MW; Tuike-riveiltä puuttuvat rivikohtaiset lähteet; lähdeluettelon nimet on muodostettu osoitteista.
- Lämpö ja vesi: 100 MW × 8 000 h = 800 GWh lämpöä > pelin 788 GWh sähköä; Seinäjoen esivalinta muutettu 5 → 4 MW (talteen saatu lämpö); kaksi lähteetöntä roolitekstiä; `yle-kainuu` ei viitattu.
- Maa ja luonto / peli: "Heikinlaakso ~7 ha" vs "Lahdenväylä ~7,3 ha" samasta lähteestä.
- Lupaus ja toteuma: "määräsi" vs viranomaisen "kehottaa".
- Sanasto: seitsemän määritelmää ja "miljoonat ihmiset" ilman lähdettä.
- Näin vaikutat: "Otanmäki noin 405 ha" ilman lähdettä. Opit ulkomailta: Vuosi-sarake ilman lähteitä, 4 päiväämätöntä lähdettä.
- Uutiset: tilannekuva 24.10.2026 (13 uutista); live-uutisvahti on erillinen artifakti.
- Asunnot: datassa ei vielä ole myynti-ilmoituksia eikä viimeisen 12 kuukauden kauppoja, joten vain "Myynnissä nyt" -osion tyhjä teksti on nähty.

## Tekijät

Vainikkalan Ritarit:
- Rasmus Tarkiainen
- Samuel Rantanen
- Joel Peltonen
- Valtteri Ikävalko
- Topias Becker
