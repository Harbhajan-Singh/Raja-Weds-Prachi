"use client";

import Script from "next/script";

export default function SangeetView() {
  return (
    <>
      <meta name="vk-music" content="/v5/assets/audio/m.mp3" />
      <meta name="vk-group" content="sangeet" />

      <canvas id="petals" aria-hidden="true"></canvas>

      <div className="gate" id="gate" role="dialog" aria-modal="true" aria-label="Invitation">
        <div className="garland" aria-hidden="true">
          <img className="w" src="/v5/assets/img/band_wide.webp" alt="" />
          <img className="n" src="/v5/assets/img/band_narrow.webp" alt="" />
        </div>
        <p className="deva">॥ श्री गणेशाय नमः ॥</p>
        <p className="sub">With the blessings of Shri Ganesh Ji</p>
        <div className="env-stage" id="envStage">
          <canvas id="envCanvas" width="760" height="836" aria-label="Envelope tied with a sacred red thread"></canvas>
          <div id="knot" tabIndex="0" role="button" aria-label="Pull the thread to open"></div>
          <div className="env-loading" id="envLoading"><span></span></div>
        </div>
        <p className="hint">Pull the thread to open</p>
        <div className="acts">
          <button className="btn" id="open-btn" type="button">Open the invitation</button>
          <button className="skip" id="skip-btn" type="button">Skip</button>
        </div>
      </div>

      <button id="sound" className="sound off" aria-pressed="false" aria-label="Sound off. Tap to turn music on.">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
          <g className="waves">
            <path d="M16 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18.6 6a8.6 8.6 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </g>
          <path className="mute" d="M16 9l6 6M22 9l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      <header className="bar gutter">
        <div className="in">
          <a className="mono" href="/wedding" aria-label="Raja and Prachi, back to invitation">
            <span className="script">R<i>&amp;</i>P</span>
          </a>
          <nav aria-label="Sections">
            <a href="/wedding#blessings">Wedding</a>
            <a href="#w-sangeet">Sangeet</a>
            <a href="#where">Venues</a>
          </nav>
        </div>
      </header>

      <section className="countdown gutter" aria-labelledby="cd-title">
        <img className="diya" src="/v5/assets/img/diya.webp" alt="" />
        <p className="label" id="cd-label">Until the Sangeet begins</p>
        <h2 className="heading" id="cd-title">Music, Beats &amp; Celebrations</h2>
        <div className="rule" aria-hidden="true"><i></i></div>
        <div className="tiles" id="tiles" role="timer">
          <div className="tile"><b id="cd-d">--</b><span>Days</span></div>
          <div className="tile"><b id="cd-h">--</b><span>Hours</span></div>
          <div className="tile"><b id="cd-m">--</b><span>Minutes</span></div>
          <div className="tile"><b id="cd-s">--</b><span>Seconds</span></div>
        </div>
        <p className="foot" id="cd-foot">Countdown to Ladies Sangeet night in Ludhiana</p>
        <div className="join" id="celebrations">
          <p className="label">Join us for</p>
          <h2 className="heading">Ladies Sangeet</h2>
          <div className="rule" aria-hidden="true"><i></i></div>
        </div>
      </section>

      <section className="sc cl" id="w-sangeet" aria-label="Ladies Sangeet" style={{ "--fx": ".72" }}>
        <div className="sc-art" aria-hidden="false">
          <div className="sc-box">
            <img className="bg" src="/v5/assets/bg/b1.webp" alt="Traditional musical baithak with dholaks and harmonium" loading="lazy" />
          </div>
        </div>
        <div className="scw">
          <article className="card r">
            <p className="label">Thursday · 3 December 2026</p>
            <h3 className="ttl">Ladies Sangeet</h3>
            <p className="note2">Music, dhol beats, laughter and memorable dance performances.</p>
            <ul>
              <li><span>Sangeet &amp; Dhol</span><b>Evening 7:00 pm</b></li>
            </ul>
            <p className="venue">Venue · At Our Residence</p>
            <div className="links">
              <a
                className="tlink cal"
                data-ev="sangeet"
                data-t="Ladies Sangeet · Raja &amp; Prachi"
                data-d="20261203T133000Z/20261203T173000Z"
                data-x="Ladies Sangeet for Raja &amp; Prachi at Our Residence"
                data-l="At Our Residence, Ludhiana"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Add to calendar
              </a>
              <a
                className="tlink"
                href="https://maps.google.com/?q=30.888012,75.772102"
                target="_blank"
                rel="noopener"
              >
                Directions
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="venue-s gutter" id="where">
        <p className="label">Finding your way</p>
        <h2 className="heading">The Venue</h2>
        <div className="rule" aria-hidden="true"><i></i></div>
        <div className="vgrid one">
          <div className="vcard r">
            <div className="vframe">
              <img src="/v5/assets/art/courtyard.webp" alt="Our Residence at Daljit Nagar" loading="lazy" />
            </div>
            <p className="label d">3 December 2026</p>
            <h3>Our Residence</h3>
            <p className="p">52-C St. No. 4, Daljit Nagar, Near Palm Court Hotel, Ferozpur Road, Ludhiana</p>
            <a
              className="btn"
              href="https://maps.google.com/?q=30.888012,75.772102"
              target="_blank"
              rel="noopener"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>

      <footer className="gutter">
        <img className="diya" src="/v5/assets/img/diya.webp" alt="" />
        <p className="deva">॥ श्री गणेशाय नमः ॥</p>
        <p className="pres">Your presence is our blessing.</p>
        <p className="names script">Raja <i>&amp;</i> Prachi</p>
        <p className="label d">Thursday, 3 December 2026 · Ludhiana</p>
        <div className="help">
          <p className="label">Warmly welcoming you</p>
          <ul>
            <li>Mrs. Sudesh Tandon</li>
            <li>Mrs. Seema &amp; Mr. Kamal Arora</li>
            <li>Tandon &amp; Arora Family</li>
          </ul>
        </div>
        <img className="peacock l" src="/v5/assets/art/peacock.webp" alt="" />
        <img className="peacock r" src="/v5/assets/art/peacock.webp" alt="" />
      </footer>

      <Script src="/v5/js/main.js?v=9" strategy="afterInteractive" />
    </>
  );
}
