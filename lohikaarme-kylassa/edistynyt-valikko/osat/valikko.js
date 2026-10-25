/* =====================================================================
   EDISTYNYT VALIKKO v1 – uudelleenkäytettävä moduuli Lohikäärme kylässä -peleihin
   ---------------------------------------------------------------------
   • Näkyy vain edistyneessä tilassa: seuraa <html data-tila="edistynyt"> -attribuuttia.
   • Neljä välilehteä, niissä sirut; jokainen siru avaa tietomoduulin omaan
     Shadow DOM -juureensa (tyylit ja id:t eivät sekoitu peliin, värit periytyvät).
   • Ei globaaleja nimiä paitsi window.EdistynytValikko ja window.rekisteroiModuuli.
   • Käynnistyy vasta, kun sivu on ladattu, joten tämä skripti voi olla pelin
     oman skriptin EDESSÄ (esim. muokkaustilan LAHDE_HTML säilyttää valikon).
   • Pelin osat löydetään sovittimella. Jos toisessa pelissä nimet eroavat,
     määrittele ennen latautumista: window.EDISTYNYT_SOVITIN = { ... } (ks. OHJE.md).
   ===================================================================== */
(function () {
  "use strict";
  var VERSIO = "1.1.0";

  /* ---------- Asetukset: tekstit, välilehdet, moduulien järjestys ---------- */
  var VALIKKO = {
    tekstit: {
      avaa: "Edistynyt valikko",
      otsikko: "Edistynyt valikko",
      sulje: "Sulje ✕",
      sirutAria: "Aiheet",
      virhe: "Tätä osiota ei saatu ladattua. Kokeile toista välilehteä.",
      puuttuu: "Tämä osio on vielä tulossa."
    },
    valilehdet: [
      { id: "tilanne", nimi: "Tilanne", kuvaus: "Missä hankkeet ovat nyt, mitä niistä uutisoidaan ja mitä asunnoille on tapahtunut niiden lähellä.",
        moduulit: ["kartta", "uutiset", "asunnot"],
        ikoni: '<path d="M12 2.5a6.5 6.5 0 0 0-6.5 6.5c0 4.8 6.5 12.5 6.5 12.5s6.5-7.7 6.5-12.5A6.5 6.5 0 0 0 12 2.5z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9" r="2.4" fill="currentColor"/>' },
      { id: "aiheet", nimi: "Aiheet", kuvaus: "Syvemmälle lohikäärmeen päihin: sähkö, lämpö, maa ja raha.",
        moduulit: ["sahko", "lampo", "maa", "rahavirrat"],
        ikoni: '<path d="M3.5 5h6a2.5 2.5 0 0 1 2.5 2.5V20a2 2 0 0 0-2-2H3.5zM20.5 5h-6A2.5 2.5 0 0 0 12 7.5V20a2 2 0 0 1 2-2h6.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>' },
      { id: "kokemukset", nimi: "Kokemukset", kuvaus: "Mitä luvattiin, mitä toteutui ja mitä muualla on opittu.",
        moduulit: ["lupaukset", "ulkomaat"],
        ikoni: '<path d="M12 3v17M6 20h12M5 7h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M7 7l-3 6.5h6zM17 7l-3 6.5h6z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' },
      { id: "vaikuta", nimi: "Vaikuta", kuvaus: "Miten pääset mukaan päätöksiin ja mitä alan sanat tarkoittavat.",
        moduulit: ["vaikuta", "sanasto"],
        ikoni: '<path d="M19.5 3.5C13 4.5 8.5 9 7.5 15.5L5 20l4.5-2.5C16 16.5 20.5 12 19.5 3.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.5 15.5 14 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' }
    ],
    // Pikanapit pelin alku- ja loppunäytölle (vain edistyneessä tilassa). Ohitetaan, jos pelissä on jo oma painike (ohita).
    pikanapit: [
      { moduuli: "asunnot", teksti: "✦ Syvemmälle: asunnot datakeskusten lähellä", ohita: '[data-toiminto="syvemmalle"]' }
    ],
    // Erillisinä julkaistut moduulit: linkit niihin avataan valikon sisällä ("@peli" = sulje valikko).
    artifaktit: {
      "6Ysv21EKJiWU1UJGZB3qm3": "uutiset", "N4ws5iycz7EYiCC7ngbcGZ": "rahavirrat", "TPJAA9G5quTdzRPUNbP7nM": "sahko",
      "NwTr1GDe8pzZujTbKLGthQ": "lampo", "MaEKRkKd7bQoqcRArEdUtS": "vaikuta", "SUedd9kGwyFLxftiMyT5GY": "ulkomaat",
      "N1MyfHzYKDpN8ExBzAzo4i": "lupaukset", "NGDbkxeFTFsH5myAD6kS1M": "maa", "53wpxrTrG7APMjTqcLNCxi": "sanasto",
      "VpA8GUi18uw526wtWbZwVY": "kartta", "PJz5rK38L99AWzyR5aaatv": "@peli", "QANNqwBY2nsr9gr6ED5Kri": "@peli",
      "QWHN8vRignVHAEmpTBXmKi": "@peli"
    }
  };

  /* ---------- Sovitin: miten valikko löytää pelin osat (oletukset Lohikäärme-peleille) ---------- */
  var OLETUSSOVITIN = {
    pelinTila: function () { return typeof tila !== "undefined" ? tila : null; },          // { rooli, alue, valinnat }
    sisalto: function () { return typeof SISALTO !== "undefined" ? SISALTO : null; },      // { paatokset, simulaatio }
    laskeSimulaatio: function () { return typeof laske === "function" ? laske.apply(null, arguments) : null; },
    ilmoita: function (teksti) { if (typeof naytaIlmoitus === "function") naytaIlmoitus(teksti); else omaIlmoitus(teksti); },
    paasisalto: function () { return document.getElementById("sisalto") || document.querySelector("main"); },
    ylapalkki: function () { return document.querySelector(".ylapalkki") || document.querySelector("header"); },
    muuDialogiAuki: function () { var v = document.getElementById("vahvistus"); return !!(v && !v.hidden); },
    // Moduulin päätös-id → pelin päätös-id, jos pelissä sama päätös on eri nimellä JA vaihtoehdot ovat samat.
    paatosAliakset: {}
  };
  var S = OLETUSSOVITIN;

  var MODUULIT = {};
  var valikkoTila = { auki: false, valilehti: "tilanne", valittu: {}, siivous: [], palaaFokus: null };
  var el = {};
  var POHJA_CSS = "", POHJA_LISA_CSS = "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function liikeVahennetty() { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function edistynytPaalla() { return document.documentElement.dataset.tila === "edistynyt"; }
  function omaIlmoitus(teksti) {
    var e = document.getElementById("ev-ilmoitus");
    if (!e) {
      e = document.createElement("div"); e.id = "ev-ilmoitus"; e.className = "ev-ilmoitus";
      e.setAttribute("role", "status"); e.setAttribute("aria-live", "polite");
      document.body.appendChild(e);
    }
    e.textContent = teksti; e.hidden = false;
    clearTimeout(omaIlmoitus.ajastin);
    omaIlmoitus.ajastin = setTimeout(function () { e.hidden = true; }, 3200);
  }

  /* ---------- Yhteinen tietomoduulipohja (Shadow DOM -versio tietomoduulin pohjasta v1) ---------- */
  var POHJA_HTML = '<div class="sivu">' +
    '<header class="osio" id="ylaosa"></header>' +
    '<section class="valitsin kortti" id="valitsin" aria-labelledby="valitsin-otsikko"></section>' +
    '<div class="osio" id="osiot" tabindex="-1"></div>' +
    '<section class="oletukset kortti" id="oletukset" hidden></section>' +
    '<section class="lahteet kortti" id="lahteet" aria-labelledby="lahteet-otsikko"></section>' +
    '<footer class="alatunniste" id="alatunniste"></footer></div>';
  var ROOLIT = [
    { id: "asukas", nimi: "Paikallisasukas" }, { id: "yrittaja", nimi: "Yrittäjä" }, { id: "viljelija", nimi: "Maanviljelijä" },
    { id: "nuori", nimi: "Nuori" }, { id: "valtuutettu", nimi: "Kunnanvaltuutettu" }
  ];
  var ALUEET = [{ id: "maaseutu", nimi: "Maaseutu" }, { id: "pienkunta", nimi: "Pienkunta" }, { id: "kaupunki", nimi: "Kaupunki" }];
  var PAAT = {
    energia: "Energia", ymparisto: "Ympäristö", tyopaikat: "Työpaikat", liikenne: "Liikenne",
    maankaytto: "Maankäyttö", turvallisuus: "Turvallisuus", tulevaisuus: "Tulevaisuus"
  };
  var PAA_IKONI = {
    energia: '<path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="var(--red)"/>',
    ymparisto: '<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z" fill="var(--green)"/><path d="M5 19 14 10" stroke="var(--card)" stroke-width="1.6"/>',
    tyopaikat: '<path d="M4 7h10v4H4z" fill="var(--ink)"/><path d="M8 11h3v10H8z" fill="var(--chart-2)"/><path d="M14 8l5-3v6z" fill="var(--ink)"/>',
    liikenne: '<circle cx="12" cy="12" r="8" fill="none" stroke="var(--chart-2)" stroke-width="2.2"/><circle cx="12" cy="12" r="2.2" fill="var(--ink)"/><path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7" stroke="var(--chart-2)" stroke-width="1.3"/>',
    maankaytto: '<path d="M6 21V8h2V5h2v3h4V5h2v3h2v13z" fill="var(--ink-soft)"/><path d="M10 21v-5h4v5z" fill="var(--card)"/><path d="M2 21h20" stroke="var(--green)" stroke-width="2"/>',
    turvallisuus: '<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z" fill="var(--green)"/><path d="M12 5v14M7 10h10" stroke="var(--card)" stroke-width="1.8"/>',
    tulevaisuus: '<path d="M6 3h12M6 21h12" stroke="var(--ink)" stroke-width="2"/><path d="M7 3c0 6 10 6 10 9s-10 3-10 9" fill="none" stroke="var(--chart-2)" stroke-width="1.8"/><path d="M17 3c0 6-10 6-10 9s10 3 10 9" fill="none" stroke="var(--chart-2)" stroke-width="1.8"/><path d="M9.5 19h5l-2.5-3z" fill="var(--red)"/>'
  };
  var SYMBOLI = {
    hahmo: '<circle cx="12" cy="7" r="4" fill="currentColor"/><path d="M4 22c0-5 3.6-8 8-8s8 3 8 8z" fill="currentColor"/>',
    kolikko: '<circle cx="12" cy="12" r="9" fill="currentColor"/><circle cx="12" cy="12" r="6" fill="none" stroke="var(--card)" stroke-width="1.5"/>',
    rekka: '<path d="M2 7h12v9H2zM14 10h4l3 3v3h-7z" fill="currentColor"/><circle cx="6" cy="18" r="2" fill="currentColor"/><circle cx="17" cy="18" r="2" fill="currentColor"/>',
    puu: '<path d="M12 2 5 12h4l-3 5h12l-3-5h4z" fill="currentColor"/><path d="M11 17h2v5h-2z" fill="currentColor"/>',
    salama: '<path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor"/>',
    hurina: '<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8c1.5 1 2 2.5 2 4s-.5 3-2 4M18.5 5.5C21 7.5 22 9.5 22 12s-1 4.5-3.5 6.5" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    koti: '<path d="M3 11 12 3l9 8v10H3z" fill="currentColor"/><path d="M10 21v-6h4v6z" fill="var(--card)"/>',
    pisara: '<path d="M12 2C8 8 5 11.5 5 15a7 7 0 0 0 14 0c0-3.5-3-7-7-13z" fill="currentColor"/>'
  };
  var KULMA = '<svg class="kulma vy" viewBox="0 0 18 18" aria-hidden="true"><path d="M1 17V6a5 5 0 0 1 5-5h11" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="6" cy="6" r="1.6" fill="currentColor"/><path d="M3 11c2 0 3-1 3-3" fill="none" stroke="var(--green)" stroke-width="1"/></svg>' +
    '<svg class="kulma oy" viewBox="0 0 18 18" aria-hidden="true"><path d="M1 17V6a5 5 0 0 1 5-5h11" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="6" cy="6" r="1.6" fill="currentColor"/><path d="M3 11c2 0 3-1 3-3" fill="none" stroke="var(--green)" stroke-width="1"/></svg>';

  /* luoPohja(root, D, ctx) → APU: piirtää yläosan, roolivalitsimen, oletukset, lähteet ja alatunnisteen. */
  function luoPohja(root, D, ctx) {
    function $(id) { return root.getElementById(id); }
    function fmt(n, des) {
      if (n == null || isNaN(n)) return "–";
      return Number(n).toLocaleString("fi-FI", { minimumFractionDigits: des || 0, maximumFractionDigits: des || 0 });
    }
    function haarukka(a, b, des, yks) { var x = a === b ? fmt(a, des) : fmt(a, a === 0 ? 0 : des) + "–" + fmt(b, des); return yks ? x + " " + yks : x; }
    var lahdeNro = {};
    (D.lahteet || []).forEach(function (l, i) { lahdeNro[l.id] = i + 1; });
    function viite(ids) {
      return [].concat(ids).map(function (id) {
        var n = lahdeNro[id]; if (!n) { console.warn("Tuntematon lähde: " + id); return ""; }
        return '<sup class="viite"><a href="#lahde-' + esc(id) + '" aria-label="Lähde ' + n + '">[' + n + "]</a></sup>";
      }).join("");
    }
    function lahdeRivi(ids, etu) {
      return '<p class="lahdeRivi">' + esc(etu || "Lähde") + ": " + [].concat(ids).map(function (id) {
        var l = D.lahteet[lahdeNro[id] - 1]; return l ? '<a href="#lahde-' + esc(id) + '">' + esc(l.nimi) + "</a>" : "";
      }).join(" · ") + "</p>";
    }
    function kortti(sisalto, luokka, attr) { return '<div class="kortti ' + (luokka || "") + '" ' + (attr || "") + ">" + KULMA + sisalto + "</div>"; }
    function puolet(hyoty, haitta) {
      return '<div class="puolet"><div class="puoli hyoty"><span class="otsake"><span aria-hidden="true">✚ </span>Hyöty</span><p>' + hyoty + "</p></div>" +
        '<div class="puoli haitta"><span class="otsake"><span aria-hidden="true">✕ </span>Haitta</span><p>' + haitta + "</p></div></div>";
    }
    function pikto(nimi, ala, yla, yksikko, vari) {
      var t1 = Math.round(ala / yksikko), k = Math.round((yla == null ? ala : yla) / yksikko);
      if (ala > 0 && t1 === 0) t1 = 1; if (k < t1) k = t1;
      var s = "";
      for (var i = 0; i < k; i++) s += '<svg viewBox="0 0 24 24" aria-hidden="true" class="' + (i < t1 ? "" : "haalea") + '" style="color:' + (vari || "var(--chart-1)") + '">' + SYMBOLI[nimi] + "</svg>";
      return '<div class="pikto">' + s + "</div>";
    }
    function palkit(o) {
      var rivit = o.rivit, maks = Math.max.apply(null, rivit.map(function (r) { return r.arvo; })) || 1;
      var W = 640, rk = 34, nimiL = o.nimiLeveys || 200, H = rivit.length * rk + 10;
      var svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(o.otsikko) + '">';
      rivit.forEach(function (r, i) {
        var y = i * rk + 6, w = (W - nimiL - 110) * r.arvo / maks;
        svg += '<text x="0" y="' + (y + 17) + '" font-size="15" fill="var(--ink)" font-family="var(--f-body)">' + esc(r.nimi) + "</text>";
        svg += '<rect x="' + nimiL + '" y="' + (y + 4) + '" width="' + Math.max(w, 2) + '" height="18" rx="2" fill="' + (r.korostus ? "var(--chart-1)" : "var(--chart-muted)") + '"><title>' + esc(r.nimi + ": " + fmt(r.arvo, o.des) + " " + o.yksikko) + "</title></rect>";
        svg += '<text x="' + (nimiL + w + 8) + '" y="' + (y + 18) + '" font-size="14" fill="var(--ink)" font-family="var(--f-body)">' + esc(fmt(r.arvo, o.des) + " " + o.yksikko) + "</text>";
      });
      svg += "</svg>";
      return '<figure class="kaavio" style="margin:0"><h3>' + esc(o.otsikko) + "</h3>" + svg + "<figcaption>" + (o.selite ? esc(o.selite) + " " : "") + "</figcaption>" + (o.lahde ? lahdeRivi(o.lahde) : "") + "</figure>";
    }

    var kuuntelijat = [];
    var APU = { D: D, ROOLIT: ROOLIT, ALUEET: ALUEET, PAAT: PAAT, SYMBOLI: SYMBOLI, KULMA: KULMA,
      esc: esc, fmt: fmt, haarukka: haarukka, viite: viite, lahdeRivi: lahdeRivi, kortti: kortti, puolet: puolet,
      pikto: pikto, palkit: palkit, root: root, $: $,
      kunRooliMuuttuu: function (fn) { kuuntelijat.push(fn); } };

    var paa = (D.paat || [])[0];
    $("ylaosa").innerHTML =
      '<div class="rubriikki">' + (PAA_IKONI[paa] ? '<svg viewBox="0 0 24 24" aria-hidden="true">' + PAA_IKONI[paa] + "</svg>" : "") +
      "Lohikäärmeen pää · " + (D.paat || []).map(function (p) { return esc(PAAT[p] || p); }).join(" · ") + "</div>" +
      "<h1>" + esc(D.nimi) + '</h1><p class="ingressi">' + esc(D.ingressi) + "</p>";

    var tila2 = { rooli: ctx.rooliId || "asukas", alue: ctx.alueId || "maaseutu" };
    function piirraValitsin() {
      if (!D.rooliRivit || !D.alueRivit) { $("valitsin").hidden = true; return; }
      var r = ROOLIT.filter(function (x) { return x.id === tila2.rooli; })[0], a = ALUEET.filter(function (x) { return x.id === tila2.alue; })[0];
      $("valitsin").innerHTML = KULMA +
        '<h3 id="valitsin-otsikko">Mitä tämä tarkoittaa sinulle?</h3>' +
        '<div class="napit" role="group" aria-label="Rooli">' + ROOLIT.map(function (x) { return '<button type="button" class="nappi" id="rooli-' + x.id + '" data-rooli="' + x.id + '" aria-pressed="' + (x.id === tila2.rooli) + '">' + esc(x.nimi) + "</button>"; }).join("") + "</div>" +
        '<div class="napit" role="group" aria-label="Alue">' + ALUEET.map(function (x) { return '<button type="button" class="nappi" id="alue-' + x.id + '" data-alue="' + x.id + '" aria-pressed="' + (x.id === tila2.alue) + '">' + esc(x.nimi) + "</button>"; }).join("") + "</div>" +
        '<div class="kaaro" aria-live="polite"><div class="rivi"><span class="otsake">Sinulle: ' + esc(r.nimi) + "</span><p>" + esc(D.rooliRivit[r.id]) + '</p></div><div class="rivi"><span class="otsake">Täällä: ' + esc(a.nimi) + "</span><p>" + esc(D.alueRivit[a.id]) + "</p></div></div>";
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-rooli],[data-alue]"); if (!b) return;
      if (b.dataset.rooli) tila2.rooli = b.dataset.rooli;
      if (b.dataset.alue) tila2.alue = b.dataset.alue;
      piirraValitsin();
      var uusi = $(b.id); if (uusi) uusi.focus();
      kuuntelijat.forEach(function (fn) { try { fn(tila2); } catch (err) { console.error(err); } });
    });
    APU.tila = tila2;
    piirraValitsin();

    if (D.oletukset && D.oletukset.length) {
      var o = $("oletukset"); o.hidden = false;
      o.innerHTML = KULMA + '<h3>Pelin oletukset</h3><p class="pieni">Nämä eivät ole lähteistä vaan pelin tekemiä yksinkertaistuksia.</p><ul>' +
        D.oletukset.map(function (x) { return "<li>Pelin oletus: " + esc(x) + "</li>"; }).join("") + "</ul>";
    }
    $("lahteet").innerHTML = KULMA + '<h3 id="lahteet-otsikko">Lähteet</h3><ol>' +
      (D.lahteet || []).map(function (l) { return '<li id="lahde-' + esc(l.id) + '"><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.nimi) + "</a></li>"; }).join("") + "</ol>";
    if (D.paivitetty) {
      var pv = String(D.paivitetty).split("-");
      $("alatunniste").innerHTML = "<span>Tiedot koottu " + Number(pv[2]) + "." + Number(pv[1]) + "." + pv[0] + ". Tieto ja sen lähde näytetään aina rinnakkain.</span>";
    } else $("alatunniste").hidden = true;
    return APU;
  }

  /* ---------- Moduulin konteksti: mitä peli kertoo moduulille ---------- */
  function idListasta(lista, arvo) {
    var x = lista.filter(function (r) { return r.id === arvo || r.nimi === arvo; })[0];
    return x ? x.id : null;
  }
  function konteksti() {
    var tl = S.pelinTila() || {}, sis = S.sisalto() || {};
    var paatokset = Array.isArray(sis.paatokset) ? sis.paatokset : [];
    var valinnat = Array.isArray(tl.valinnat) ? tl.valinnat.slice() : [];
    return {
      rooli: tl.rooli || null, alue: tl.alue || null,
      rooliId: idListasta(ROOLIT, tl.rooli), alueId: idListasta(ALUEET, tl.alue),
      valinnat: valinnat,
      // valinta("maankaytto") → 0/1/2 (A/B/C) tai null. Vain jos pelissä on päätös tällä id:llä (tai aliaksella).
      valinta: function (paatosId) {
        var kohde = (S.paatosAliakset && S.paatosAliakset[paatosId]) || paatosId;
        for (var i = 0; i < paatokset.length; i++) {
          if (paatokset[i] && paatokset[i].id === kohde) return Number.isInteger(valinnat[i]) ? valinnat[i] : null;
        }
        return null;
      },
      paatokset: paatokset, simulaatio: sis.simulaatio || null, laske: S.laskeSimulaatio,
      pelattu: paatokset.length > 0 && valinnat.length >= paatokset.length && valinnat.every(function (v) { return v != null; }),
      avaaModuuli: avaaModuuli, naytaIlmoitus: S.ilmoita, liikeVahennetty: liikeVahennetty, esc: esc
    };
  }

  /* ---------- Moduulin kiinnitys omaan Shadow DOM -juureen ---------- */
  function siivoaModuuli() {
    valikkoTila.siivous.forEach(function (fn) { try { fn(); } catch (e) { console.error(e); } });
    valikkoTila.siivous = [];
    el.paikka.replaceChildren();
  }
  function kiinnitaModuuli(id) {
    siivoaModuuli();
    var m = MODUULIT[id];
    var isanta = document.createElement("div");
    isanta.className = "moduuli-isanta";
    isanta.dataset.moduuli = id;
    el.paikka.appendChild(isanta);
    if (!m) { isanta.innerHTML = '<p class="moduuli-virhe">' + esc(VALIKKO.tekstit.puuttuu) + "</p>"; return; }
    var root = isanta.attachShadow({ mode: "open" });
    root.innerHTML = "<style>" + POHJA_CSS + "\n" + (m.css || "") + "\n" + POHJA_LISA_CSS + "</style>" + (m.pohja ? POHJA_HTML : "") + (m.html || "");
    root.addEventListener("click", function (e) {
      var a = e.target.closest("a[href]");
      if (!a) return;
      var href = a.getAttribute("href");
      if (href.charAt(0) === "#" && href.length > 1) {
        var kohde = root.getElementById(decodeURIComponent(href.slice(1)));
        if (!kohde) return;
        e.preventDefault();
        kohde.scrollIntoView({ behavior: liikeVahennetty() ? "auto" : "smooth", block: "center" });
        kohde.classList.add("kohde");
        setTimeout(function () { kohde.classList.remove("kohde"); }, 2400);
        return;
      }
      if (a.hasAttribute("data-ulkoinen")) return;   // tarkoituksella erillinen sivu
      var osuma = href.match(/claude\.ai\/(?:code\/)?artifact\/([A-Za-z0-9]+)/);
      if (osuma && VALIKKO.artifaktit[osuma[1]]) {
        e.preventDefault();
        var kohdeId = VALIKKO.artifaktit[osuma[1]];
        if (kohdeId === "@peli") sulje(); else avaaModuuli(kohdeId);
      }
    });
    var ctx = konteksti();
    try {
      var APU = m.pohja ? luoPohja(root, m.data, ctx) : null;
      var siivous = m.alusta ? m.alusta(root, APU, ctx) : null;
      if (typeof siivous === "function") valikkoTila.siivous.push(siivous);
    } catch (e) {
      console.error("Moduuli " + id + " kaatui:", e);
      root.innerHTML = "<style>" + POHJA_CSS + '</style><p class="kortti" role="alert">' + esc(VALIKKO.tekstit.virhe) + "</p>";
    }
  }

  /* ---------- Välilehdet ja sirut ---------- */
  function piirraTabit() {
    el.tabs.setAttribute("aria-label", VALIKKO.tekstit.otsikko);
    el.tabs.innerHTML = VALIKKO.valilehdet.map(function (v) {
      var valittu = v.id === valikkoTila.valilehti;
      return '<button type="button" class="valikko-tab" role="tab" id="vtab-' + v.id + '" data-tab="' + v.id + '"' +
        ' aria-selected="' + valittu + '" aria-controls="valikko-paneeli" tabindex="' + (valittu ? 0 : -1) + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true">' + v.ikoni + "</svg><span>" + esc(v.nimi) + "</span></button>";
    }).join("");
  }
  function piirraSirut(v, valittu) {
    el.sirut.setAttribute("aria-label", VALIKKO.tekstit.sirutAria);
    el.sirut.hidden = v.moduulit.length < 2;
    el.sirut.innerHTML = v.moduulit.map(function (id) {
      var m = MODUULIT[id];
      return '<button type="button" class="ev-siru" data-moduuli="' + esc(id) + '" aria-pressed="' + (id === valittu) + '">' + esc(m ? m.lyhyt || m.nimi : id) + "</button>";
    }).join("");
  }
  function valitseValilehti(id, fokus) {
    var v = VALIKKO.valilehdet.filter(function (x) { return x.id === id; })[0] || VALIKKO.valilehdet[0];
    valikkoTila.valilehti = v.id;
    piirraTabit();
    document.getElementById("valikko-paneeli").setAttribute("aria-labelledby", "vtab-" + v.id);
    document.getElementById("valikko-kuvaus").textContent = v.kuvaus;
    var moduuli = valikkoTila.valittu[v.id] || v.moduulit[0];
    piirraSirut(v, moduuli);
    kiinnitaModuuli(moduuli);
    el.runko.scrollTop = 0;
    if (fokus) document.getElementById("vtab-" + v.id).focus();
  }
  function avaaModuuli(id) {
    var v = VALIKKO.valilehdet.filter(function (x) { return x.moduulit.indexOf(id) >= 0; })[0];
    if (!v) return;
    valikkoTila.valittu[v.id] = id;
    if (!valikkoTila.auki) { valikkoTila.valilehti = v.id; avaa(); return; }
    if (valikkoTila.valilehti !== v.id) { valitseValilehti(v.id); return; }
    piirraSirut(v, id);
    kiinnitaModuuli(id);
    el.runko.scrollTop = 0;
  }

  /* ---------- Avaus, sulkeminen ja sijoittelu ---------- */
  function asetaSijainti() {
    var yla = S.ylapalkki(), isa = el.valikko.parentElement;
    var sijoitettu = getComputedStyle(isa).position !== "static";
    if (sijoitettu && yla && isa.contains(yla)) {
      el.valikko.style.position = "absolute";
      el.valikko.style.top = (yla.offsetTop + yla.offsetHeight) + "px";
    } else {
      el.valikko.style.position = "fixed";
      el.valikko.style.top = (yla ? Math.max(0, yla.getBoundingClientRect().bottom) : 0) + "px";
    }
  }
  function asetaInert(arvo) {
    var p = S.paasisalto();
    if (p) p.inert = arvo;
    el.nauha.inert = arvo;
  }
  function avaa() {
    if (!edistynytPaalla() || !el.valikko) return;
    valikkoTila.auki = true;
    valikkoTila.palaaFokus = document.activeElement;
    asetaSijainti();
    el.valikko.hidden = false;
    asetaInert(true);
    valitseValilehti(valikkoTila.valilehti);
    document.getElementById("valikko-otsikko").focus({ preventScroll: true });
  }
  function sulje() {
    if (!valikkoTila.auki) return;
    valikkoTila.auki = false;
    siivoaModuuli();
    el.valikko.hidden = true;
    asetaInert(false);
    var f = valikkoTila.palaaFokus;
    if (f && document.contains(f) && !f.closest("[inert]") && !el.nauha.hidden) f.focus({ preventScroll: true });
    else if (!el.nauha.hidden) document.getElementById("avaa-valikko").focus({ preventScroll: true });
  }
  /* ---------- Pikanapit alku- ja loppunäytölle ---------- */
  // Peli piirtää näkymänsä itse, joten napit lisätään, kun näkymä vaihtuu (aloitus: [data-toiminto="aloita"], loppu: "uudelleen").
  function lisaaPikanapit() {
    var p = S.paasisalto();
    if (!p) return;
    var ankkuri = p.querySelector('[data-toiminto="aloita"], [data-toiminto="uudelleen"]');
    if (!ankkuri) return;
    var isa = ankkuri.parentElement;
    VALIKKO.pikanapit.forEach(function (n) {
      if (!MODUULIT[n.moduuli] || p.querySelector('[data-ev-avaa="' + n.moduuli + '"]') || (n.ohita && p.querySelector(n.ohita))) return;
      var napit = isa.querySelectorAll(":scope > button.nappi");
      var viimeinen = napit.length ? napit[napit.length - 1] : ankkuri;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "nappi nappi-toissijainen vain-edistynyt ev-pikanappi";
      b.dataset.evAvaa = n.moduuli;
      b.textContent = n.teksti;
      viimeinen.insertAdjacentElement("afterend", b);
    });
  }

  function paivitaTila() {
    var paalla = edistynytPaalla();
    el.nauha.hidden = !paalla;
    if (!paalla) sulje();
  }

  /* ---------- Käynnistys (kun sivu on ladattu) ---------- */
  function kaynnista() {
    S = Object.assign({}, OLETUSSOVITIN, window.EDISTYNYT_SOVITIN || {});
    var css1 = document.querySelector('script[type="text/css"][data-ev="pohja-css"]');
    var css2 = document.querySelector('script[type="text/css"][data-ev="pohja-lisa-css"]');
    POHJA_CSS = css1 ? css1.textContent : "";
    POHJA_LISA_CSS = css2 ? css2.textContent : "";
    el = {
      valikko: document.getElementById("edistynyt-valikko"), nauha: document.getElementById("edistynyt-nauha"),
      tabs: document.getElementById("valikko-tabs"), sirut: document.getElementById("valikko-sirut"),
      paikka: document.getElementById("moduuli-paikka"), runko: document.getElementById("valikko-runko")
    };
    if (!el.valikko || !el.nauha) { console.warn("Edistynyt valikko: merkintä puuttuu sivulta."); return; }
    document.getElementById("avaa-valikko-teksti").textContent = VALIKKO.tekstit.avaa;
    document.getElementById("valikko-otsikko").innerHTML = '<span class="tahti" aria-hidden="true">✦</span> ' + esc(VALIKKO.tekstit.otsikko);
    document.getElementById("sulje-valikko").textContent = VALIKKO.tekstit.sulje;
    document.getElementById("avaa-valikko").addEventListener("click", avaa);
    document.getElementById("sulje-valikko").addEventListener("click", sulje);
    el.tabs.addEventListener("click", function (e) {
      var b = e.target.closest("[data-tab]");
      if (b && b.dataset.tab !== valikkoTila.valilehti) valitseValilehti(b.dataset.tab, true);
    });
    el.tabs.addEventListener("keydown", function (e) {
      var ids = VALIKKO.valilehdet.map(function (v) { return v.id; });
      var i = ids.indexOf(valikkoTila.valilehti);
      if (e.key === "ArrowRight") i = (i + 1) % ids.length;
      else if (e.key === "ArrowLeft") i = (i - 1 + ids.length) % ids.length;
      else if (e.key === "Home") i = 0;
      else if (e.key === "End") i = ids.length - 1;
      else return;
      e.preventDefault();
      valitseValilehti(ids[i], true);
    });
    el.sirut.addEventListener("click", function (e) {
      var b = e.target.closest("[data-moduuli]");
      if (!b) return;
      avaaModuuli(b.dataset.moduuli);
      var uusi = el.sirut.querySelector('[data-moduuli="' + CSS.escape(b.dataset.moduuli) + '"]');
      if (uusi) uusi.focus();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && valikkoTila.auki && !S.muuDialogiAuki()) sulje();
    });
    window.addEventListener("resize", function () { if (valikkoTila.auki) asetaSijainti(); });
    new MutationObserver(paivitaTila).observe(document.documentElement, { attributes: true, attributeFilter: ["data-tila"] });
    paivitaTila();
    var paa = S.paasisalto();
    if (paa) {
      new MutationObserver(lisaaPikanapit).observe(paa, { childList: true });
      lisaaPikanapit();
      paa.addEventListener("click", function (e) {
        var b = e.target.closest("[data-ev-avaa]");
        if (b) avaaModuuli(b.dataset.evAvaa);
      });
    }
  }

  window.rekisteroiModuuli = function (m) { MODUULIT[m.id] = m; };
  window.EdistynytValikko = {
    versio: VERSIO, VALIKKO: VALIKKO, MODUULIT: MODUULIT, tila: valikkoTila,
    avaa: avaa, sulje: sulje, avaaModuuli: avaaModuuli, ilmoita: function (t) { S.ilmoita(t); }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kaynnista);
  else kaynnista();
})();
