// Edistynyt valikko -paketin testi asennetulle pelille (Playwright, esiasennettu Chromium).
// Käyttö: node testaa.js PELI.html [--kuvat hakemisto] [--moduulit kartta,uutiset]
// PELI.html voi olla julkaistava tiedosto ilman <!doctype>-pohjaa; testi lisää pohjan itse.
// Tarkistaa 390/1200 px × vaalea/tumma: jokainen moduuli latautuu, ei konsolivirheitä, ei vaaka- tai sivuvieritystä,
// Esc sulkee, kytkin pois sulkee valikon, peli toimii valikon avaamisen jälkeen, muokkaustilan vienti (LAHDE_HTML) säilyttää valikon.
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path'); const os = require('os');
const args = process.argv.slice(2);
const lippu = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const peli = path.resolve(args[0] || '');
if (!args[0] || !fs.existsSync(peli)) { console.error('Anna testattava pelitiedosto.'); process.exit(2); }
const KUVAT = path.resolve(lippu('--kuvat') || path.join(path.dirname(peli), 'ev-kuvat'));
const valitut = (lippu('--moduulit') || '').split(',').filter(Boolean);

(async () => {
  fs.mkdirSync(KUVAT, { recursive: true });
  let s = fs.readFileSync(peli, 'utf8');
  if (!/^<!doctype/i.test(s.trim())) s = '<!doctype html><html lang="fi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>\n' + s + '\n</body></html>';
  const testi = path.join(os.tmpdir(), 'ev-testi-' + process.pid + '.html'); fs.writeFileSync(testi, s);
  const b = await chromium.launch(); let ongelmia = 0;
  const ok = (ehto, viesti) => { if (!ehto) ongelmia++; console.log((ehto ? 'OK   ' : 'FAIL ') + viesti); };

  for (const scheme of ['light', 'dark']) for (const w of [390, 1200]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 860 }, colorScheme: scheme });
    await ctx.addInitScript(() => { try { localStorage.setItem('lohikaarme-edistynyt-tila', '1'); } catch (e) {} });
    const pg = await ctx.newPage(); let virheet = [];
    pg.on('pageerror', e => virheet.push('pageerror: ' + e.message));
    pg.on('console', m => { if (m.type() === 'error' && !/net::|Failed to load resource/.test(m.text())) virheet.push(m.text()); });
    await pg.goto('file://' + testi); await pg.waitForTimeout(400);
    const tag = `${scheme} ${w}px`;
    ok(await pg.evaluate(() => document.documentElement.dataset.tila === 'edistynyt' && !document.getElementById('edistynyt-nauha').hidden), `${tag} edistynyt tila ja nauha näkyvissä`);
    await pg.click('#avaa-valikko'); await pg.waitForTimeout(300);
    const ids = valitut.length ? valitut : await pg.evaluate(() => EdistynytValikko.VALIKKO.valilehdet.flatMap(v => v.moduulit));
    for (const id of ids) {
      virheet = [];
      await pg.evaluate(id => EdistynytValikko.avaaModuuli(id), id); await pg.waitForTimeout(600);
      const t = await pg.evaluate(() => {
        const runko = document.getElementById('valikko-runko'); const isanta = document.querySelector('.moduuli-isanta');
        const root = isanta && isanta.shadowRoot; const laite = document.querySelector('.laite') || document.body;
        return { ladattu: !!root && root.children.length > 1, kaatui: !!(root && root.querySelector('[role=alert]')),
          vaaka: runko.scrollWidth > runko.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth,
          sivuVierii: document.scrollingElement.scrollHeight > innerHeight + 1 || laite.scrollHeight > laite.clientHeight + 1 };
      });
      await pg.screenshot({ path: path.join(KUVAT, `${id}-${scheme}-${w}.png`) });
      ok(t.ladattu && !t.kaatui && !t.vaaka && !t.sivuVierii && !virheet.length, `${tag} ${id} ${JSON.stringify(t)} ${virheet.join(' | ')}`);
    }
    // Lähdeviite vierittää moduulin sisällä eikä muuta osoitetta
    const osoite = pg.url();
    await pg.evaluate(() => { const r = document.querySelector('.moduuli-isanta').shadowRoot; const a = r && r.querySelector('sup.viite a, a[href^="#lahde-"]'); if (a) a.click(); });
    await pg.waitForTimeout(400);
    ok(pg.url() === osoite, `${tag} lähdelinkki ei muuta osoitetta`);
    await pg.keyboard.press('Escape'); await pg.waitForTimeout(200);
    ok(await pg.evaluate(() => document.getElementById('edistynyt-valikko').hidden), `${tag} Esc sulkee valikon`);
    if (scheme === 'light' && w === 390) {
      // Peli: aloita, valitse, avaa valikko, sulje → näkymä ennallaan
      if (await pg.$('[data-toiminto=aloita]')) {
        virheet = [];
        await pg.click('[data-toiminto=aloita]'); await pg.waitForTimeout(200);
        if (await pg.$('[data-toiminto=rooli]')) await pg.click('[data-toiminto=rooli]');
        await pg.waitForTimeout(200);
        if (await pg.$('[data-toiminto=alue]')) await pg.click('[data-toiminto=alue]');
        await pg.waitForTimeout(200);
        if (await pg.$('[data-toiminto=valitse]')) await pg.click('[data-toiminto=valitse]');
        await pg.waitForTimeout(300);
        const ennen = await pg.evaluate(() => (document.getElementById('sisalto') || document.querySelector('main')).innerHTML.length);
        await pg.click('#avaa-valikko'); await pg.waitForTimeout(300); await pg.keyboard.press('Escape'); await pg.waitForTimeout(200);
        const jalkeen = await pg.evaluate(() => (document.getElementById('sisalto') || document.querySelector('main')).innerHTML.length);
        ok(ennen === jalkeen && !virheet.length, `${tag} peli jatkuu valikon jälkeen ennallaan ${virheet.join(' | ')}`);
      }
      // Kytkin pois → nauha ja valikko piiloon
      await pg.click('#avaa-valikko'); await pg.waitForTimeout(200);
      await pg.click('#velho-kytkin'); await pg.waitForTimeout(300);
      ok(await pg.evaluate(() => document.getElementById('edistynyt-valikko').hidden && document.getElementById('edistynyt-nauha').hidden && document.documentElement.dataset.tila !== 'edistynyt'), `${tag} kytkin pois sulkee valikon ja piilottaa nauhan`);
      // Muokkaustilan vienti (jos pelissä on)
      const vienti = await pg.evaluate(() => typeof LAHDE_HTML === 'string' ? (LAHDE_HTML.includes('data-ev="valikko"') && LAHDE_HTML.includes('id="edistynyt-valikko"')) : null);
      if (vienti !== null) ok(vienti, `${tag} muokkaustilan LAHDE_HTML sisältää valikon`);
    }
    await ctx.close();
  }
  await b.close(); fs.unlinkSync(testi);
  console.log(ongelmia ? `\n${ongelmia} ongelmaa` : '\nKaikki kunnossa'); process.exit(ongelmia ? 1 : 0);
})();
