/* =====================================================================
   VELHOKYTKIN (Edistynyt tila) – osa Edistynyt valikko -pakettia
   Asennetaan vain peleihin, joissa ei ole omaa #velho-kytkin-painiketta.
   Tila tallentuu selaimeen avaimella "lohikaarme-edistynyt-tila" (sama kuin
   pelin omassa kytkimessä) ja näkyy <html data-tila="edistynyt"> -attribuuttina,
   jota velhoteema (CSS) ja Edistynyt valikko seuraavat.
   ===================================================================== */
(function () {
  "use strict";
  var AVAIN = "lohikaarme-edistynyt-tila";
  var TEKSTIT = {
    nimi: "Edistynyt tila",
    paalla: "✦ Edistynyt tila päällä. Edistynyt valikko avautuu yläpalkin alta.",
    pois: "Edistynyt tila pois päältä."
  };

  function lataa() { try { return window.localStorage.getItem(AVAIN) === "1"; } catch (e) { return false; } }
  function tallenna(p) { try { window.localStorage.setItem(AVAIN, p ? "1" : "0"); } catch (e) { /* toimii ilman tallennusta */ } }
  function ilmoita(teksti) {
    if (typeof naytaIlmoitus === "function") naytaIlmoitus(teksti);
    else if (window.EdistynytValikko && window.EdistynytValikko.ilmoita) window.EdistynytValikko.ilmoita(teksti);
  }

  // Asetetaan teema heti, ettei sivu välähdä väärissä väreissä.
  if (lataa()) document.documentElement.dataset.tila = "edistynyt";

  function kaynnista() {
    var kytkin = document.getElementById("velho-kytkin");
    if (!kytkin) return;
    function aseta(paalla) {
      if (paalla) document.documentElement.dataset.tila = "edistynyt";
      else delete document.documentElement.dataset.tila;
      kytkin.setAttribute("aria-checked", String(paalla));
      // Pelin omat ominaisuudet voivat lukea tila.edistynyt (jos pelissä on tila-olio).
      try { if (typeof tila !== "undefined" && tila && typeof tila === "object") tila.edistynyt = paalla; } catch (e) { /* ei tila-oliota */ }
    }
    kytkin.setAttribute("aria-label", TEKSTIT.nimi);
    kytkin.title = TEKSTIT.nimi;
    kytkin.addEventListener("click", function () {
      var paalla = document.documentElement.dataset.tila !== "edistynyt";
      aseta(paalla);
      tallenna(paalla);
      ilmoita(paalla ? TEKSTIT.paalla : TEKSTIT.pois);
      kytkin.classList.remove("taikoo");
      if (paalla) { void kytkin.offsetWidth; kytkin.classList.add("taikoo"); }
    });
    aseta(lataa());
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kaynnista);
  else kaynnista();
})();
