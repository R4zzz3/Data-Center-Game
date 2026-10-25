/* Tietomoduuli: Asunnot datakeskusten lähellä (pelin "Syvemmälle"-näkymä, peli-v4).
   Tekstit = SISALTO.syvemmalle sellaisenaan. Luvut luetaan sivun asuntodata-lohkosta
   (<script id="asuntodata" type="application/json">, keräintyökalu keraa.py päivittää sen;
   paketti lisää lohkon, jos pelissä sitä ei ole). Dataa EI upoteta tähän tiedostoon.
   Pelin tyylit eivät näy Shadow DOMiin, joten näkymän tarvitsemat pelin luokat on kopioitu
   alle (.sy-etuliitteellä, jotta ne voittavat yhteisen pohjan tyylit). */
(function () {
  const TEKSTIT = {
    nappi: "Syvemmälle: asunnot datakeskusten lähellä",
    rubriikki: "Syvemmälle",
    otsikko: "Asunnot datakeskusten lähellä",
    johdanto: "Tässä näet oikeaa tilastotietoa asuntojen hinnoista ja kaupoista Suomen datakeskusten lähellä. Luvut kertovat, mitä alueella on tapahtunut. Ne eivät kerro, onko datakeskus syy muutoksiin.",
    oletus: "hamina-google",
    valitse: "Valitse datakeskus",
    tilat: { toiminnassa: "Toiminnassa", rakenteilla: "Rakenteilla", suunnitteilla: "Suunnitteilla" },
    teho: "teho {mw} MW",
    tehoEi: "tehoa ei kerrottu",
    julkistettu: "julki vuonna {v}",
    hankeLahde: "Tieto hankkeesta",
    sijaintiHuom: "Hankkeen tarkkaa tonttia ei löytynyt lähteistä. Etäisyydet lasketaan kunnan keskustasta.",
    hintaOtsikko: "Mitä asunnot maksavat?",
    hintaOhje: "Vanhojen kerros- ja rivitaloasuntojen keskimääräinen neliöhinta vuonna {v}. Hinta on painotettu kauppojen määrällä.",
    vyohykkeet: { "0-5": "Alle 5 km", "5-15": "5–15 km", "15-30": "15–30 km", "vertailu": "30–80 km (vertailu)" },
    kunta: "Koko {kunta}",
    maa: "Koko Suomi",
    kauppoja: "{n} kauppaa, {p} postinumeroaluetta",
    epavarma: "vähän kauppoja, luku epävarma",
    eiTietoa: "ei tietoa",
    eiAlueita: "ei asuttuja postinumeroalueita",
    kehitysOtsikko: "Muuttuiko hintakehitys hankkeen jälkeen?",
    kehitysOhje: "Hinnat suhteessa vuoteen {v}, jolloin hanke tuli julki. Sen vuoden hinta on 100. Jos viiva nousee yli 100:n, hinnat ovat nousseet.",
    hintaKehitysOhje: "Neliöhinnat vuosittain (€/m²). Pystyviiva näyttää vuoden {v}, jolloin hanke tuli julki.",
    hintaKehitysOhjeEiVuotta: "Neliöhinnat vuosittain (€/m²).",
    lahiSelite: "alle 15 km datakeskuksesta",
    vertailuSelite: "30–80 km päässä (vertailu)",
    kysyntaOtsikko: "Kuinka paljon asuntoja myydään?",
    kysyntaOhje: "Asuntokauppojen määrä vuosittain alle 15 km päässä datakeskuksesta.",
    kysyntaHuom: "Tilastokeskus muutti kauppojen laskutapaa vuonna 2020, joten luvut ennen ja jälkeen eivät ole täysin vertailukelpoisia. Postinumeroalueet, joilla on alle 6 kauppaa vuodessa, puuttuvat tilastosta.",
    katko: "laskutapa muuttui",
    toteutuneet: "Toteutuneet kaupat viimeisen 12 kuukauden aikana (alle 15 km): {n} kpl, mediaani {h} €/m².",
    myynnissaOtsikko: "Myynnissä nyt",
    myynnissaEi: "Myynti-ilmoituksia ei ole vielä kirjattu tälle alueelle. Asuntoportaalit eivät salli automaattista keräystä, joten tiimi kirjaa ilmoitukset käsin.",
    ilmoituksia: "ilmoitusta alle 15 km päässä",
    pyynti: "pyyntihinnan mediaani",
    paivia: "päivää myynnissä (mediaani)",
    suhde: "pyyntihinta suhteessa toteutuneisiin kauppoihin",
    taulukko: "Näytä luvut taulukkona",
    vuosi: "Vuosi",
    muistaOtsikko: "Muista tämä",
    muista: [
      "Yhteys ei ole syy. Hintoihin vaikuttavat korot, työpaikat, muuttoliike ja moni muu asia.",
      "Pienten alueiden luvut heiluvat paljon, koska kauppoja on vähän.",
      "Kaikki suunnitellut hankkeet eivät toteudu.",
      "Etäisyys lasketaan postinumeroalueen keskipisteestä."
    ],
    lahteetOtsikko: "Lähteet",
    graafiLahde: "Lähde: Tilastokeskus, osakeasuntojen hinnat (taulukot 13mu ja 13mx) ja Paavo-postinumeroalueet.",
    paivitetty: "Tiedot haettu {pvm}.",
    eiDataa: "Aineistoa ei ole vielä kerätty. Tiimi kokoaa sen keräintyökalulla, ja luvut ilmestyvät tähän."
  };

  // Pelin kulmakoriste (pelin --kulma-token), jotta .koriste toimii myös peleissä, joista token puuttuu.
  const KULMA_URL = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round'%3E%3Cpath d='M3 29V10Q3 3 10 3h19'/%3E%3Cpath d='M8 21q0-9 9-12'/%3E%3Cpath d='M12.5 9q-2.5 5 2.5 6.5'/%3E%3C/g%3E%3Cpath d='M17 9q5-4 9-1q-4 4-9 1z' fill='%23000'/%3E%3Cpath d='M8 21q-3.5 4 0 7.5q3.5-3.5 0-7.5z' fill='%23000'/%3E%3Ccircle cx='3' cy='3' r='2.2' fill='%23000'/%3E%3C/svg%3E\")";

  const CSS = `
/* ---- Pelin perustyylit, joita näkymä käyttää (pohja.css:n päälle) ---- */
.sy { color: var(--ink); }
.sy p { margin: 0 0 .75em; max-width: none; }
.sy p:last-child { margin-bottom: 0; }
.sy h2, .sy h3, .sy h4 { line-height: 1.2; margin: 0 0 .5em; text-wrap: wrap; }
.sy h3 { font-size: 1.1rem; font-weight: 700; }
.sy h4 { font-size: 1rem; font-weight: 700; }
.sy a { color: var(--green); text-underline-offset: 3px; text-decoration-thickness: 1px; }
.sy a:hover { text-decoration-thickness: 2px; }
.sy :focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; border-radius: 4px; }
.sy .rubriikki {
  display: block; font-family: var(--f-sc); font-weight: 700; font-size: .82rem;
  letter-spacing: .12em; text-transform: lowercase; color: var(--red); margin-bottom: 4px;
}
.sy h2.koristeotsikko { font-family: var(--f-display); font-size: 1.9rem; color: var(--red); font-weight: 700; }
.sy .pieni { font-size: .92rem; color: inherit; }
.sy .himmea { color: var(--ink-soft); }

/* Kortit ja kulmakoristeet */
.sy .kortti {
  display: block; position: relative; background: var(--card); border: 1px solid var(--line); border-radius: 4px;
  padding: 18px; margin: 0 0 14px; box-shadow: 0 1px 2px var(--varjo, rgba(70, 45, 20, .14)); min-width: 0;
}
.sy .kortti h3, .sy .kortti h4 { margin-bottom: .35em; }
.sy .kortti h3.sc { font-family: var(--f-sc); letter-spacing: .06em; color: var(--red); }
.sy .koriste { padding: 22px 22px 20px; }
.sy .koriste::before, .sy .koriste::after {
  content: ""; position: absolute; width: 22px; height: 22px; pointer-events: none; background: var(--gold);
  -webkit-mask: ${KULMA_URL} no-repeat center / contain; mask: ${KULMA_URL} no-repeat center / contain;
}
.sy .koriste::before { top: 4px; left: 4px; }
.sy .koriste::after { bottom: 4px; right: 4px; transform: rotate(180deg); }

/* Vaakapalkit, luvut, lähderivi */
.sy .palkki { margin-bottom: 12px; }
.sy .palkki:last-of-type { margin-bottom: 0; }
.sy .palkki-ots { display: flex; justify-content: space-between; gap: 8px; font-size: .95rem; margin-bottom: 4px; }
.sy .palkki-ots b { white-space: nowrap; }
.sy .palkki-ura { height: 12px; background: var(--bg); border: 1px solid var(--line); border-radius: 999px; overflow: hidden; }
.sy .palkki-ura span { display: block; height: 100%; border-radius: 999px; background: var(--ink-soft); }
.sy .palkki-ura.hanke span { background: var(--green); }
.sy .palkki-selite { display: block; font-size: .85rem; color: var(--ink-soft); margin-top: 2px; }
.sy .graafi-lahde { margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--line); font-size: .86rem; color: var(--ink-soft); }
.sy .luvut { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.sy .luku { display: block; background: var(--bg); border: 1px solid var(--line); border-radius: 4px; padding: 12px; }
.sy .luku .arvo { display: block; font-family: inherit; font-size: 1.6rem; font-weight: 700; color: var(--red); line-height: 1.1; }
.sy .luku .yksikko { display: block; font-weight: 700; font-size: .92rem; }
.sy .luku .selite { display: block; font-size: .84rem; color: var(--ink-soft); margin-top: 4px; line-height: 1.4; }

/* Listat ja lähteet */
.sy .kysymyslista { margin: 0; padding-left: 1.2em; }
.sy .kysymyslista li { margin-bottom: 6px; }
.sy .lahteet h4 { font-family: var(--f-sc); letter-spacing: .06em; }
.sy .lahteet ul { margin: 0; padding-left: 1.1em; }
.sy .lahteet li { margin-bottom: 0; font-size: .95rem; }
/* Kosketuskohde vähintään 44 px */
.sy .lahteet li a { display: block; padding: 10px 0; }
.sy .iso-kohde { display: inline-block; padding: 10px 0; margin: -10px 0; }

/* Avattava taulukko (pelin details.muut) */
.sy details.muut > summary {
  cursor: pointer; font-family: inherit; font-weight: 700; letter-spacing: normal; min-height: 44px;
  display: flex; align-items: center; list-style: none; gap: 8px;
}
.sy details.muut > summary::-webkit-details-marker { display: none; }
.sy details.muut > summary::before {
  content: "+"; display: grid; place-items: center; width: 24px; height: 24px; border-radius: 50%;
  border: 1px solid var(--gold); color: var(--red); flex-shrink: 0; font-family: system-ui, sans-serif; font-weight: 400;
}
.sy details.muut[open] > summary::before { content: "−"; }

/* ===== Syvemmälle: asunnot datakeskusten lähellä ===== */
.sy .syva-valinta label { display: block; font-family: var(--f-sc); font-weight: 700; letter-spacing: .05em; margin-bottom: 6px; }
.sy .syva-valinta select {
  width: 100%; min-height: 48px; padding: 8px 12px; font: inherit; color: var(--ink);
  background: var(--card); border: 1px solid var(--ink-soft); border-radius: 6px;
}
.sy .kaavio { display: block; width: 100%; height: auto; margin: 4px 0 2px; overflow: visible; }
.sy .kaavio text { font-family: var(--f-body); font-size: 12px; fill: var(--ink-soft); }
.sy .kaavio .akseli { stroke: var(--line); stroke-width: 1; }
.sy .kaavio .perus { stroke: var(--gold); stroke-width: 1.2; stroke-dasharray: 4 3; }
.sy .kaavio .lahi { fill: none; stroke: var(--red); stroke-width: 2.5; stroke-linejoin: round; }
.sy .kaavio .vertailu { fill: none; stroke: var(--ink-soft); stroke-width: 2; stroke-dasharray: 6 4; stroke-linejoin: round; }
.sy .kaavio .piste-lahi { fill: var(--red); }
.sy .kaavio .piste-vertailu { fill: var(--ink-soft); }
.sy .kaavio .pylvas { fill: var(--green); }
.sy .kaavio .pylvas-tyhja { fill: none; stroke: var(--line); stroke-dasharray: 2 2; }
.sy .selite-rivi { display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: .88rem; color: var(--ink-soft); margin: 6px 0 0; }
.sy .selite-rivi span::before { content: ""; display: inline-block; width: 22px; height: 0; vertical-align: middle; margin-right: 6px; border-top: 3px solid var(--red); }
.sy .selite-rivi span.v::before { border-top: 2px dashed var(--ink-soft); }
.sy .taulu { overflow-x: auto; }
.sy .lukutaulu { width: 100%; border-collapse: collapse; font-size: .9rem; margin-top: 6px; }
.sy .lukutaulu th, .sy .lukutaulu td {
  text-align: left; padding: 4px 6px; border-bottom: 1px solid var(--line); vertical-align: middle;
  font: inherit; letter-spacing: normal; color: inherit;
}
.sy .lukutaulu th { font-weight: 700; }
.sy .lukutaulu td.n { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
`;

  // Valittu datakeskus säilyy, kun moduuli avataan uudelleen samalla sivukäynnillä (vrt. pelin tila.syvaValinta).
  let valinta = null;

  const HTML = '<section class="sy" aria-labelledby="sy-otsikko"><div id="sy-runko"></div></section>';

  rekisteroiModuuli({
    id: "asunnot",
    nimi: "Asunnot datakeskusten lähellä",
    lyhyt: "Asunnot",
    pohja: false,
    data: { tekstit: TEKSTIT },
    css: CSS,
    html: HTML,
    alusta(root, APU, ctx) {
      const SY = TEKSTIT;
      const esc = ctx.esc;
      const $ = id => root.getElementById(id);

      function sy(avain, muuttujat) {
        return String(SY[avain] == null ? avain : SY[avain])
          .replace(/\{(\w+)\}/g, (_, k) => (muuttujat && muuttujat[k] != null ? muuttujat[k] : ""));
      }
      // Asuntodata on sivun (light DOM) lohkossa, ei Shadow DOMissa. Luetaan kiinnityshetkellä.
      function haeAsuntoData() {
        try {
          const el = document.getElementById("asuntodata");
          const d = el ? JSON.parse(el.textContent) : null;
          return d && Array.isArray(d.datakeskukset) && d.datakeskukset.length ? d : null;
        } catch (e) {
          return null;
        }
      }
      const lukuMuoto = new Intl.NumberFormat("fi-FI", { maximumFractionDigits: 0 });
      function luku(n) { return n == null ? "–" : lukuMuoto.format(n); }
      function pvm(iso) {
        const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
        return m ? `${Number(m[3])}.${Number(m[2])}.${m[1]}` : "";
      }
      function dkNimi(d) { return String(d.nimi || "").replace(/\s*\(sijainti kuntataso\)/, ""); }
      // Vain http(s)-linkit; muut (esim. javascript:) estetään.
      function turvaUrl(u) { return /^https?:\/\//i.test(u || "") ? u : "#"; }
      // Estetty linkki näytetään pelkkänä tekstinä, jotta "#" ei muuta sivun osoitetta.
      function linkki(url, teksti, luokka) {
        const u = turvaUrl(url);
        return u === "#" ? esc(teksti)
          : `<a${luokka ? ` class="${luokka}"` : ""} href="${esc(u)}" target="_blank" rel="noopener">${esc(teksti)}</a>`;
      }

      // Vaakapalkit: rivit [{nimi, arvo, selite, lahi}]
      function hintaPalkit(rivit) {
        const max = Math.max(1, ...rivit.map(r => r.arvo || 0));
        return rivit.map(r => `
          <div class="palkki">
            <div class="palkki-ots"><span>${esc(r.nimi)}</span><b>${r.arvo == null ? esc(SY.eiTietoa) : luku(r.arvo) + " €/m²"}</b></div>
            <div class="palkki-ura${r.lahi ? " hanke" : ""}" aria-hidden="true"><span style="width:${r.arvo ? (r.arvo / max * 100).toFixed(1) : 0}%"></span></div>
            ${r.selite ? `<span class="palkki-selite">${esc(r.selite)}</span>` : ""}
          </div>`).join("");
      }

      // Viivakaavio: lähialue ja vertailu. viite = 100 (indeksi) tai null (€/m²).
      // perusvuosi = hankkeen julkistusvuosi (pystyviiva), jos se osuu aikasarjaan.
      function svgViivat(lahi, vertailu, perusvuosi, kuvaus, viite) {
        if (viite === undefined) viite = 100;
        const W = 320, H = 190, L = 40, R = 10, T = 14, B = 28;
        const kaikki = lahi.concat(vertailu || []);
        const vuodet = kaikki.map(p => p.vuosi), arvot = kaikki.map(p => p.arvo).concat(viite == null ? [] : [viite]);
        const v0 = Math.min(...vuodet), v1 = Math.max(...vuodet);
        let lo = Math.min(...arvot), hi = Math.max(...arvot);
        const vara = Math.max(2, (hi - lo) * 0.08); lo -= vara; hi += vara;
        const x = v => L + (v - v0) / ((v1 - v0) || 1) * (W - L - R);
        const y = a => T + (hi - a) / ((hi - lo) || 1) * (H - T - B);
        const viiva = (s, luokka) => s && s.length ? `
          <polyline class="${luokka}" points="${s.map(p => `${x(p.vuosi).toFixed(1)},${y(p.arvo).toFixed(1)}`).join(" ")}"/>
          ${s.map(p => `<circle class="piste-${luokka}" cx="${x(p.vuosi).toFixed(1)}" cy="${y(p.arvo).toFixed(1)}" r="2.6"/>`).join("")}` : "";
        // Korjaus: ylä- tai alarajan lukua ei näytetä, jos se menisi viitearvon (100) päälle (esim. 103 ja 100).
        const yMerkki = (yy, a) => viite != null && Math.abs(yy - (y(viite) + 4)) < 13 ? ""
          : `<text x="${L - 4}" y="${yy}" text-anchor="end">${esc(luku(Math.round(a)))}</text>`;
        const merkki = perusvuosi != null && perusvuosi >= v0 && perusvuosi <= v1;
        // Korjaus: päätyvuotta ei näytetä, jos se osuisi julkistusvuoden päälle (esim. 2024 ja 2025).
        const xMerkit = [...new Set(merkki ? [v0, perusvuosi, v1] : [v0, v1])]
          .filter(v => !merkki || v === perusvuosi || Math.abs(x(v) - x(perusvuosi)) >= 32)
          .map(v => `<text x="${x(v).toFixed(1)}" y="${H - 8}" text-anchor="middle">${esc(v)}</text>`).join("");
        return `<svg class="kaavio" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(kuvaus)}">
          <line class="akseli" x1="${L}" y1="${H - B}" x2="${W - R}" y2="${H - B}"/>
          ${viite == null ? "" : `<line class="perus" x1="${L}" y1="${y(viite).toFixed(1)}" x2="${W - R}" y2="${y(viite).toFixed(1)}"/>
          <text x="${L - 4}" y="${(y(viite) + 4).toFixed(1)}" text-anchor="end">${viite}</text>`}
          ${yMerkki(T + 4, hi)}${yMerkki(H - B, lo)}
          ${merkki ? `<line class="perus" x1="${x(perusvuosi).toFixed(1)}" y1="${T}" x2="${x(perusvuosi).toFixed(1)}" y2="${H - B}"/>` : ""}
          ${viiva(vertailu, "vertailu")}${viiva(lahi, "lahi")}${xMerkit}
        </svg>`;
      }

      // Pylväskaavio: kauppamäärät vuosittain, katkoviiva laskutavan muutoksen kohdalla.
      function svgPylvaat(pisteet, kuvaus) {
        const W = 320, H = 170, L = 40, R = 6, T = 16, B = 28;
        const max = Math.max(1, ...pisteet.map(p => p.kaupat || 0));
        const lev = (W - L - R) / pisteet.length;
        const y = a => T + (1 - a / max) * (H - T - B);
        const katkoI = pisteet.findIndex(p => p.vuosi === 2020);
        const viimeinen = pisteet.length - 1;
        const pylvaat = pisteet.map((p, i) => {
          const px = L + i * lev + lev * 0.15, pw = lev * 0.7;
          // Joka neljäs vuosi + viimeinen (ei kahta vierekkäistä merkkiä, jotka menisivät päällekkäin).
          const merkki = ((i % 4 === 0 && viimeinen - i >= 2) || i === viimeinen)
            ? `<text x="${(px + pw / 2).toFixed(1)}" y="${H - 8}" text-anchor="middle">${esc(p.vuosi)}</text>` : "";
          const pylvas = p.kaupat
            ? `<rect class="pylvas" x="${px.toFixed(1)}" y="${y(p.kaupat).toFixed(1)}" width="${pw.toFixed(1)}" height="${(H - B - y(p.kaupat)).toFixed(1)}"/>`
            : `<rect class="pylvas-tyhja" x="${px.toFixed(1)}" y="${H - B - 3}" width="${pw.toFixed(1)}" height="3"/>`;
          return pylvas + merkki;
        }).join("");
        const katko = katkoI > 0 ? (() => {
          const kx = (L + katkoI * lev).toFixed(1);
          return `<line class="perus" x1="${kx}" y1="${T - 6}" x2="${kx}" y2="${H - B}"/>
            <text x="${kx}" y="${T - 8}" text-anchor="middle">${esc(SY.katko)}</text>`;
        })() : "";
        return `<svg class="kaavio" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(kuvaus)}">
          <line class="akseli" x1="${L}" y1="${H - B}" x2="${W - R}" y2="${H - B}"/>
          <text x="${L - 4}" y="${T + 4}" text-anchor="end">${luku(max)}</text>
          <text x="${L - 4}" y="${H - B}" text-anchor="end">0</text>
          ${pylvaat}${katko}
        </svg>`;
      }

      function lukuTaulu(otsikot, rivit) {
        return `<details class="muut"><summary>${esc(SY.taulukko)}</summary>
          <div class="taulu"><table class="lukutaulu"><thead><tr>${otsikot.map(o => `<th scope="col">${esc(o)}</th>`).join("")}</tr></thead>
          <tbody>${rivit.map(r => `<tr>${r.map((c, i) => i ? `<td class="n">${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join("")}</tr>`).join("")}</tbody></table></div>
        </details>`;
      }

      function syvaSisalto(data, d) {
        const lahde = `<p class="graafi-lahde">${esc(SY.graafiLahde)} ${esc(sy("paivitetty", { pvm: pvm(data.paivitetty) }))}</p>`;
        const tietoja = [SY.tilat[d.tila] || d.tila, d.teho_mw ? sy("teho", { mw: luku(d.teho_mw) }) : SY.tehoEi];
        if (d.julkistettu) tietoja.push(sy("julkistettu", { v: d.julkistettu }));

        // 1. Hintataso
        const vyoRivit = Object.keys(SY.vyohykkeet).map(k => {
          const v = (d.vyohykkeet || {})[k] || {};
          let selite = "";
          if (!v.postinumeroita) selite = SY.eiAlueita;
          else if (v.hinta_m2 != null) selite = sy("kauppoja", { n: luku(v.kaupat), p: v.postinumeroita }) + (v.epavarma ? " · " + SY.epavarma : "");
          return { nimi: SY.vyohykkeet[k], arvo: v.hinta_m2, selite, lahi: k !== "vertailu" };
        });
        const viiteRivit = [
          { nimi: sy("kunta", { kunta: d.kunta }), arvo: d.kunta_hinta && d.kunta_hinta.hinta_m2 },
          { nimi: SY.maa, arvo: data.koko_maa && data.koko_maa.hinta_m2 }
        ];
        const hintaRivit = vyoRivit.concat(viiteRivit);
        const vuosi = ((d.vyohykkeet || {})["0-5"] || {}).vuosi || data.viimeisin_vuosi;

        // 2. Hintakehitys
        let kehitys;
        if (d.indeksi) {
          const ind = d.indeksi;
          const kuvaus = `${SY.kehitysOtsikko} ${sy("kehitysOhje", { v: ind.perusvuosi })}`;
          const vt = {}; (ind.vertailu || []).forEach(p => { vt[p.vuosi] = p.arvo; });
          kehitys = `<p class="pieni">${esc(sy("kehitysOhje", { v: ind.perusvuosi }))}</p>
            ${svgViivat(ind.lahi, ind.vertailu, ind.perusvuosi, kuvaus)}
            <p class="selite-rivi"><span>${esc(SY.lahiSelite)}</span>${ind.vertailu ? `<span class="v">${esc(SY.vertailuSelite)}</span>` : ""}</p>
            ${lukuTaulu([SY.vuosi, SY.lahiSelite, SY.vertailuSelite],
              ind.lahi.map(p => [String(p.vuosi), String(p.arvo).replace(".", ","), vt[p.vuosi] == null ? "–" : String(vt[p.vuosi]).replace(".", ",")]))}`;
        } else {
          // Indeksiä ei voi laskea: näytetään €/m²-kehitys sellaisenaan ja kerrotaan miksi.
          const hs = s => ((d.sarjat && d.sarjat[s]) || []).filter(p => p.hinta_m2 != null)
            .map(p => ({ vuosi: p.vuosi, arvo: p.hinta_m2 }));
          const lh = hs("lahi"), vh = hs("vertailu");
          const vt = {}; vh.forEach(p => { vt[p.vuosi] = p.arvo; });
          kehitys = `<p class="pieni himmea">${esc(d.indeksi_syy || SY.eiTietoa)}</p>` + (lh.length > 1 ? `
            <p class="pieni">${esc(d.julkistettu ? sy("hintaKehitysOhje", { v: d.julkistettu }) : SY.hintaKehitysOhjeEiVuotta)}</p>
            ${svgViivat(lh, vh.length ? vh : null, d.julkistettu, SY.kehitysOtsikko + " " + SY.hintaKehitysOhjeEiVuotta, null)}
            <p class="selite-rivi"><span>${esc(SY.lahiSelite)}</span>${vh.length ? `<span class="v">${esc(SY.vertailuSelite)}</span>` : ""}</p>
            ${lukuTaulu([SY.vuosi, SY.lahiSelite + " (€/m²)", SY.vertailuSelite + " (€/m²)"],
              lh.map(p => [String(p.vuosi), luku(p.arvo), luku(vt[p.vuosi])]))}` : "");
        }

        // 3. Kysyntä
        const sarja = (d.sarjat && d.sarjat.lahi) || [];
        const kysynta = sarja.length
          ? `<p class="pieni">${esc(SY.kysyntaOhje)}</p>
             ${svgPylvaat(sarja, SY.kysyntaOtsikko + " " + SY.kysyntaOhje)}
             ${lukuTaulu([SY.vuosi, "Kauppoja", "€/m²"], sarja.map(p => [String(p.vuosi), luku(p.kaupat), luku(p.hinta_m2)]))}
             <p class="pieni himmea">${esc(SY.kysyntaHuom)}</p>`
          : `<p class="pieni himmea">${esc(SY.eiTietoa)}</p>`;

        // 4. Myynnissä nyt
        const il = d.ilmoitukset, tt = d.toteutuneet;
        const myynnissa = (il ? `<div class="luvut">
            <div class="luku"><span class="arvo">${luku(il.maara)}</span><span class="yksikko">${esc(SY.ilmoituksia)}</span></div>
            <div class="luku"><span class="arvo">${luku(il.mediaani_hinta_m2)}</span><span class="yksikko">€/m²</span><span class="selite">${esc(SY.pyynti)}</span></div>
            <div class="luku"><span class="arvo">${luku(il.mediaani_paivia)}</span><span class="yksikko">${esc(SY.paivia)}</span></div>
            ${il.pyynti_vs_toteutunut ? `<div class="luku"><span class="arvo">${esc(String(il.pyynti_vs_toteutunut).replace(".", ","))}</span><span class="yksikko">×</span><span class="selite">${esc(SY.suhde)}</span></div>` : ""}
          </div>` : `<p class="pieni himmea">${esc(SY.myynnissaEi)}</p>`)
          + (tt ? `<p class="pieni" style="margin-top:10px">${esc(sy("toteutuneet", { n: luku(tt.maara), h: luku(tt.mediaani_hinta_m2) }))}</p>` : "");

        return `
          <div class="kortti">
            <h3 class="sc">${esc(dkNimi(d))}</h3>
            <p class="pieni">${esc(d.toimija)} · ${esc(d.kunta)}, ${esc(d.maakunta)}<br>${esc(tietoja.join(" · "))}</p>
            ${/\(sijainti kuntataso\)/.test(d.nimi) ? `<p class="pieni himmea">${esc(SY.sijaintiHuom)}</p>` : ""}
            <p class="pieni">${esc(SY.hankeLahde)}: ${linkki(d.lahde_url, d.lahde_nimi, "iso-kohde")}</p>
          </div>
          <div class="kortti">
            <h3 class="sc">${esc(SY.hintaOtsikko)}</h3>
            <p class="pieni">${esc(sy("hintaOhje", { v: vuosi }))}</p>
            ${hintaPalkit(hintaRivit)}
            ${lahde}
          </div>
          <div class="kortti">
            <h3 class="sc">${esc(SY.kehitysOtsikko)}</h3>
            ${kehitys}
            ${lahde}
          </div>
          <div class="kortti">
            <h3 class="sc">${esc(SY.kysyntaOtsikko)}</h3>
            ${kysynta}
            ${lahde}
          </div>
          <div class="kortti">
            <h3 class="sc">${esc(SY.myynnissaOtsikko)}</h3>
            ${myynnissa}
          </div>`;
      }

      /* ---------- Näkymä ---------- */
      const runko = $("sy-runko");
      const data = haeAsuntoData();
      const alku = `
        <span class="rubriikki">${esc(SY.rubriikki)}</span>
        <h2 class="koristeotsikko" id="sy-otsikko">${esc(SY.otsikko)}</h2>
        <p>${esc(SY.johdanto)}</p>`;
      if (!data) {
        runko.innerHTML = alku + `<div class="kortti koriste"><p>${esc(SY.eiDataa)}</p></div>`;
        return () => {};
      }
      const dks = data.datakeskukset;
      if (!dks.some(d => d.id === valinta)) valinta = (dks.find(d => d.id === SY.oletus) || dks[0]).id;
      const ryhmat = Object.keys(SY.tilat).map(tl => {
        const jasenet = dks.filter(d => d.tila === tl);
        return jasenet.length ? `<optgroup label="${esc(SY.tilat[tl])}">${jasenet.map(d =>
          `<option value="${esc(d.id)}"${d.id === valinta ? " selected" : ""}>${esc(d.kunta)}: ${esc(dkNimi(d))}</option>`).join("")}</optgroup>` : "";
      }).join("");
      const lahteet = (data.lahteet || []).map(l => `<li>${linkki(l.url, l.nimi)}</li>`).join("");
      runko.innerHTML = alku + `
        <div class="kortti syva-valinta">
          <label for="sy-valinta">${esc(SY.valitse)}</label>
          <select id="sy-valinta">${ryhmat}</select>
        </div>
        <div id="sy-sisalto"></div>
        <div class="kortti koriste">
          <h3 class="sc">${esc(SY.muistaOtsikko)}</h3>
          <ul class="kysymyslista">${SY.muista.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
        </div>
        <div class="kortti lahteet">
          <h4>${esc(SY.lahteetOtsikko)}</h4>
          <ul>${lahteet}</ul>
          <p class="pieni himmea" style="margin-top:8px">${esc(sy("paivitetty", { pvm: pvm(data.paivitetty) }))}</p>
        </div>`;
      const piirraValittu = () => {
        const d = dks.find(x => x.id === valinta);
        $("sy-sisalto").innerHTML = syvaSisalto(data, d);
      };
      $("sy-valinta").addEventListener("change", e => {
        valinta = e.target.value;
        piirraValittu();
      });
      piirraValittu();
      return () => {};
    }
  });

})();
