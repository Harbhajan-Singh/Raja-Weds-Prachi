const E = (id) => document.getElementById(id);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v)), ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- romantic hearts drifting down ---------- */
const cv = E('petals'), cx = cv.getContext('2d'); let W, H, P = [];
const COLS = ['#C8192E', '#D92B3A', '#B5122A', '#E8606A', '#F2A0A4', '#FF4D6D', '#E14B4F', '#C9184A'];
const LEAF = ['#C8192E', '#E8606A', '#F2A0A4', '#FF758F', '#B5122A', '#D92B3A'];
function size() { const d = devicePixelRatio || 1; W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0); }
function mk(y, leaf) { return { leaf: !!leaf, x: Math.random() * W, y: y ?? -20 - Math.random() * H * 0.5, r: 4.5 + Math.random() * 5, vy: 0.35 + Math.random() * 0.55, vx: -0.25 + Math.random() * 0.5, a: Math.random() * 6.28, va: -0.025 + Math.random() * 0.05, c: (leaf ? LEAF : COLS)[(Math.random() * (leaf ? LEAF : COLS).length) | 0], s: Math.random() * 6.28 }; }
function burst(leaf, x, y) { if (reduce) return; for (let i = 0; i < 34; i++) { const p = mk((y ?? H * 0.38) + Math.random() * 60, leaf); p.r *= leaf ? 1.4 : 1; p.x = (x ?? W / 2) + (Math.random() - 0.5) * 160; p.vy = -1.4 - Math.random() * 2; p.vx = (Math.random() - 0.5) * 4; P.push(p); } }
size(); addEventListener('resize', size);
if (!reduce) {
  for (let i = 0; i < 18; i++) P.push(mk(Math.random() * H));
  (function loop() {
    cx.clearRect(0, 0, W, H);
    for (const p of P) {
      p.s += 0.02; p.x += p.vx + Math.sin(p.s) * 0.35; p.vy = Math.min(p.vy + 0.03, 1); p.y += p.vy; p.a += p.va; if (p.y > H + 20) Object.assign(p, mk(undefined, false));
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.scale(1, 0.75 + 0.25 * Math.abs(Math.sin(p.s * 1.3))); cx.globalAlpha = 0.88; cx.fillStyle = p.c; cx.beginPath();
      const s = p.r * 1.35;
      cx.moveTo(0, s * 0.7);
      cx.bezierCurveTo(-s * 0.95, s * 0.25, -s * 0.95, -s * 0.75, 0, -s * 0.38);
      cx.bezierCurveTo(s * 0.95, -s * 0.75, s * 0.95, s * 0.25, 0, s * 0.7);
      cx.fill(); cx.restore();
    }
    if (P.length > 50) P.splice(18, P.length - 50);
    requestAnimationFrame(loop);
  })();
}

/* ---------- envelope: Blender frames on a canvas, drag the knot ---------- */
const gate = E('gate'), knot = E('knot'), stage = E('envStage'), ec = E('envCanvas'), ex = ec.getContext('2d');
const NFR = 96, UNWIND = 30, frames = new Array(NFR);
let cur = -1, unwrapped = false, drag = null, loaded = 0, raf = 0;
function draw(i) {
  i = clamp(Math.round(i), 0, NFR - 1);
  while (i > 0 && !frames[i]) i--;
  if (i === cur || !frames[i]) return;
  cur = i; ex.clearRect(0, 0, ec.width, ec.height); ex.drawImage(frames[i], 0, 0, ec.width, ec.height);
}
for (let i = 0; i < NFR; i++) {
  const im = new Image(); im.decoding = 'async';
  im.onload = () => { frames[i] = im; if (i === 0) draw(0); if (++loaded === NFR) stage.classList.add('ready'); };
  im.src = `/v5/assets/env/f_${String(i).padStart(4, '0')}.webp`;
}
setTimeout(() => stage.classList.add('ready'), 4000);
function play(from, to, fps, onFrame, done) {
  cancelAnimationFrame(raf); const t0 = performance.now();
  const step = (t) => {
    const f = from + ((t - t0) / 1000) * fps * Math.sign(to - from);
    const reached = to > from ? f >= to : f <= to;
    draw(reached ? to : f); onFrame && onFrame(reached ? to : f);
    reached ? done && done() : (raf = requestAnimationFrame(step));
  };
  raf = requestAnimationFrame(step);
}
function finishGate(instant) {
  document.body.classList.remove('locked'); window.scrollTo(0, 0);
  if (instant) { gate.hidden = true; return; }
  gate.classList.add('done'); setTimeout(() => (gate.hidden = true), 1100);
}
function unwrap() {
  if (unwrapped) return; unwrapped = true; drag = null;
  audioWant();
  gate.classList.remove('pulling'); gate.classList.add('unwrapped', 'opening');
  let b = false;
  play(Math.max(cur, 0), NFR - 1, 34, (f) => {
    if (!b && f > 58) { b = true; const r = ec.getBoundingClientRect(); burst(true, r.left + r.width / 2, r.top + r.height * 0.42); }
  }, () => setTimeout(finishGate, 600));
}
knot.addEventListener('pointerdown', (e) => { if (unwrapped) return; audioWant(); knot.setPointerCapture(e.pointerId); cancelAnimationFrame(raf); drag = { x: e.clientX, y: e.clientY }; gate.classList.add('pulling'); });
knot.addEventListener('pointermove', (e) => {
  if (!drag || unwrapped) return;
  const p = clamp(Math.hypot(e.clientX - drag.x, e.clientY - drag.y) / 120, 0, 1);
  draw(p * UNWIND); if (p >= 1) unwrap();
});
const release = () => { if (!drag || unwrapped) return; drag = null; gate.classList.remove('pulling'); play(cur, 0, 60); };
knot.addEventListener('pointerup', release); knot.addEventListener('pointercancel', release);
knot.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); unwrap(); } });
E('open-btn').onclick = unwrap;
E('skip-btn').onclick = () => { audioWant(); unwrapped = true; cancelAnimationFrame(raf); finishGate(true); };
if (new URLSearchParams(location.search).has('nointro')) { unwrapped = true; finishGate(true); }

/* ---------- hero: doors open, couple walks in, courtyard settles into an arch under the shloka ---------- */
const hero = E('hero'), dl = E('doorL'), dr = E('doorR'), court = E('court'), halo = E('halo'), walk = E('walk'), fade = E('fade'), box = E('box'), fw = E('fwrap'), frame = E('frame'), mantra = E('mantra'), sig = E('sig');
const WALK_AX = 0.64; // where the couple (not the lehenga) sits across the cut-out
function onScroll() {
  const total = hero.offsetHeight - innerHeight, p = clamp(-hero.getBoundingClientRect().top / total, 0, 1);
  const t = ease(clamp((p - 0.04) / 0.34, 0, 1));
  dl.style.transform = `translateX(${-t * 101}%)`; dr.style.transform = `translateX(${t * 101}%)`;
  court.style.transform = `scale(${1.14 - 0.14 * t})`;
  halo.style.opacity = 1 - clamp((p - 0.02) / 0.18, 0, 1);
  const u = ease(clamp((p - 0.22) / 0.28, 0, 1));
  walk.style.opacity = u; walk.style.transform = `translate(-${WALK_AX * 100}%,${(1 - u) * 30}px) scale(${0.9 + 0.1 * u})`;
  const k = ease(clamp((p - 0.55) / 0.22, 0, 1)), mob = innerWidth <= 760;
  /* the arch hugs the couple: top just above their heads, bottom just below their feet (no water) */
  const bw = box.offsetWidth, bh = box.offsetHeight, cwH = Math.max(bw / 1.5, bh), wf = Math.max(0.2, 1 - parseFloat(getComputedStyle(walk).bottom) / cwH), hf = wf - walk.offsetHeight / cwH;
  const feet = 0.6 + (wf - 0.6) * cwH / bh, head = 0.6 + (hf - 0.6) * cwH / bh;
  const Tt = Math.max(2, (head - 0.07) * 100), Bt = Math.max(0, (1 - feet - 0.015) * 100);
  const T = (mob ? Math.max(Tt, 38) : Tt) * k, S = (mob ? 7 : 25) * k, B = Bt * k, R = k * 700, r = k * 12;
  const sc = 1 - (mob ? 0.08 : 0.14) * k, ty = (mob ? -8 : -3) * k;
  const tf = `translateY(${ty}%) scale(${sc})`;
  box.style.clipPath = k > 0 ? `inset(${T}% ${S}% ${B}% ${S}% round ${R}px ${R}px ${r}px ${r}px)` : 'none';
  box.style.transform = fw.style.transform = tf;
  Object.assign(frame.style, { top: T + '%', bottom: B + '%', left: S + '%', right: S + '%', borderRadius: `${R}px ${R}px ${r}px ${r}px` });
  fw.style.opacity = k;
  const q = clamp((k - 0.45) / 0.55, 0, 1);
  mantra.style.opacity = sig.style.opacity = q;
  mantra.style.transform = `translateY(${(1 - q) * -14}px)`; sig.style.transform = `translateY(${(1 - q) * 14}px)`;
  fade.style.opacity = clamp((p - 0.95) / 0.05, 0, 1);
}
if (hero) { addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll(); }

/* ---------- reveals ---------- */
const els = $$('.r,.wipe');
els.forEach((el) => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pre'); requestAnimationFrame(() => el.classList.add('rv')); } });
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { (e.target._el || e.target).classList.remove('pre'); io.unobserve(e.target); } }), { threshold: 0.2 });
els.forEach((el) => { if (el.classList.contains('wipe')) { el.parentElement._el = el; io.observe(el.parentElement); } else io.observe(el); });

/* ---------- countdown to the wedding festivities ---------- */
const GROUP = (document.querySelector('meta[name=vk-group]') || {}).content || 'all';
const CD = {
  all: ['2026-11-28T19:00:00+05:30', '2026-12-06T06:00:00+05:30'],
  wedding: ['2026-12-05T18:00:00+05:30', '2026-12-06T06:00:00+05:30'],
  sangeet: ['2026-12-03T19:00:00+05:30', '2026-12-04T02:00:00+05:30']
}[GROUP] || ['2026-12-05T18:00:00+05:30', '2026-12-06T06:00:00+05:30'];
const AT = new Date(CD[0]), END = new Date(CD[1]), pad = (n) => String(n).padStart(2, '0');
const cdBox = document.querySelector('.countdown');
function tick() {
  const now = new Date();
  if (now >= END) { cdBox.classList.add('ended'); E('cd-label').textContent = 'With gratitude'; E('cd-title').textContent = 'Thank you for celebrating with us'; E('cd-foot').textContent = 'Your presence was our blessing.'; return; }
  if (now >= AT) { cdBox.classList.add('ended'); E('cd-label').textContent = 'Today, we celebrate'; E('cd-title').textContent = 'The celebrations have begun'; E('cd-foot').textContent = 'May this day be full of blessings.'; return; }
  let ms = AT - now; const d = Math.floor(ms / 864e5); ms -= d * 864e5; const h = Math.floor(ms / 36e5); ms -= h * 36e5; const m = Math.floor(ms / 6e4); ms -= m * 6e4;
  E('cd-d').textContent = pad(d); E('cd-h').textContent = pad(h); E('cd-m').textContent = pad(m); E('cd-s').textContent = pad(Math.floor(ms / 1e3));
}
tick(); setInterval(tick, 1000);

/* ---------- calendar links ---------- */
$$('.cal').forEach((a) => { a.href = 'https://calendar.google.com/calendar/render?' + new URLSearchParams({ action: 'TEMPLATE', text: a.dataset.t, dates: a.dataset.d, location: a.dataset.l, details: a.dataset.x }); });

/* ---------- RSVP: Kiran's form, our backend ---------- */
const rsvpForm = E('rsvp-form');
if (rsvpForm) {
  let g = 2; const t0 = Date.now();
  if (E('g-minus')) E('g-minus').onclick = () => { g = Math.max(1, g - 1); E('g-count').textContent = g; };
  if (E('g-plus')) E('g-plus').onclick = () => { g = Math.min(20, g + 1); E('g-count').textContent = g; };
  const EVS = $$('.ev[data-ev]').map((r) => r.dataset.ev); /* only this guest group's events exist on the page */
  const yes = (k) => { const el = document.querySelector(`input[name=${k}]:checked`); return el ? el.id.endsWith('-y') : false; };
  $$('.yn input').forEach((i) => i.addEventListener('change', () => { if (E('guests')) E('guests').hidden = EVS.every((k) => !yes(k)); }));
  rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = E('r-err'), btn = E('r-send'), say = (t) => { if (err) { err.textContent = t; err.hidden = !t; } };
    const name = E('r-name') ? E('r-name').value.trim() : '', phone = E('r-phone') ? E('r-phone').value.trim() : '';
    if (name.length < 2) { say('Please tell us your name.'); if (E('r-name')) E('r-name').focus(); return; }
    if (phone.replace(/\D/g, '').length < 8) { say('Please enter a phone number we can reach you on.'); if (E('r-phone')) E('r-phone').focus(); return; }
    const answers = {}; EVS.forEach((k) => (answers[k] = yes(k) ? 'yes' : 'no'));
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    say('');
    try {
      const res = await fetch('/api/rsvp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, phone, group: GROUP, answers, guests: g, note: E('r-note') ? E('r-note').value.trim() : '', website: E('r-hp') ? E('r-hp').value : '', t: Date.now() - t0 }) });
      if (!res.ok) throw new Error('bad');
      rsvpForm.hidden = true; const f = name.split(' ')[0].replace(/[<>&"]/g, '');
      if (E('r-msg')) E('r-msg').textContent = Object.values(answers).some((v) => v === 'yes') ? `We can't wait to celebrate with you, ${f}.` : `We'll miss you, ${f}. Thank you for your blessings.`;
      if (E('r-thanks')) E('r-thanks').hidden = false;
    } catch (_) { if (btn) { btn.disabled = false; btn.textContent = 'Send our blessing'; } say('Sorry, that did not go through. Please try again in a moment.'); }
  });
}

/* ---------- sound: one song for the whole invitation (loops) ---------- */
var soundBtn = E('sound'), MAIN = (document.querySelector('meta[name=vk-music]') || {}).content;
var LEVEL = 0.55, ac = null, bus = null, song = null, started = false, wantAudio = false;
var on = true; try { on = sessionStorage.getItem('vk-sound') !== '0'; } catch (e) {}
function ui(v) {
  soundBtn.classList.toggle('on', v); soundBtn.classList.toggle('off', !v); soundBtn.setAttribute('aria-pressed', v);
  soundBtn.setAttribute('aria-label', v ? 'Sound on. Tap to turn music off.' : 'Sound off. Tap to turn music on.');
}
function begin() {
  if (started || !on || !wantAudio || !MAIN) return;
  if (!ac) {
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    ac = new C(); bus = ac.createGain(); bus.connect(ac.destination);
    const el = new Audio(); el.loop = true; el.src = MAIN;
    song = ac.createGain(); song.gain.value = 0; ac.createMediaElementSource(el).connect(song); song.connect(bus); song.el = el;
  }
  ac.resume().then(() => {
    if (started || ac.state !== 'running') return;
    started = true; ui(true); playSong();
  }).catch(() => {});
}
function playSong() {
  const t = ac.currentTime; song.gain.cancelScheduledValues(t); song.gain.setValueAtTime(song.gain.value, t); song.gain.linearRampToValueAtTime(LEVEL, t + 2);
  song.el.play().catch(() => {});
}
function audioWant() { wantAudio = true; begin(); }
['pointerup', 'touchend', 'click', 'keydown'].forEach((ev) => document.addEventListener(ev, function f() { if (started) return document.removeEventListener(ev, f, true); begin(); }, true));
function setSound(v) {
  on = v; ui(v); try { sessionStorage.setItem('vk-sound', v ? '1' : '0'); } catch (e) {}
  if (!started) { wantAudio = true; v && begin(); return; }
  bus.gain.cancelScheduledValues(ac.currentTime); bus.gain.linearRampToValueAtTime(v ? 1 : 0, ac.currentTime + 0.7);
  if (v) { ac.resume(); playSong(); } else setTimeout(() => !on && song.el.pause(), 800);
}
soundBtn.addEventListener('click', () => setSound(!(started && on)));
document.addEventListener('visibilitychange', () => { if (!ac || !started) return; document.hidden ? ac.suspend() : on && ac.resume(); });
