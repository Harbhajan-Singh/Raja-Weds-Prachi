"use client";

import Script from "next/script";

export default function WeddingView() {
  return (
    <>
      <meta name="vk-music" content="/v5/assets/audio/m.mp3" />
      <meta name="vk-group" content="wedding" />

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
          <a className="mono" href="#hero" aria-label="Raja and Prachi, back to top">
            <span className="script">R<i>&amp;</i>P</span>
          </a>
          <nav aria-label="Sections">
            <a href="#blessings">Invitation</a>
            <a href="#celebrations">Celebrations</a>
            <a href="#w-sangeet">Sangeet</a>
            <a href="#where">Venues</a>
            <a href="#moments">Moments</a>
          </nav>
        </div>
      </header>

      <div className="hero" id="hero">
        <div className="stage" id="stage">
          <div className="box" id="box">
            <div className="court" id="court">
              <div className="cwrap">
                <img className="cimg" src="/v5/assets/art/courtyard.webp" alt="A painted haveli courtyard lit with diyas" />
                <div className="walk" id="walk">
                  <img src="/v5/assets/couple/walk.webp" alt="Raja and Prachi walking into the courtyard hand in hand" />
                </div>
              </div>
            </div>
            <div className="door l" id="doorL"><img src="/v5/assets/art/door-l.webp" alt="" /></div>
            <div className="door r" id="doorR"><img src="/v5/assets/art/door-r.webp" alt="" /></div>
            <div className="garland" aria-hidden="true">
              <img className="w" src="/v5/assets/img/band_wide.webp" alt="" />
              <img className="n" src="/v5/assets/img/band_narrow.webp" alt="" />
            </div>
          </div>
          <div className="fwrap" id="fwrap" aria-hidden="true"><div className="frame" id="frame"></div></div>
          <div className="halo" id="halo">
            <p className="deva">॥ श्री गणेशाय नमः ॥</p>
            <p className="names script">Raja <i>&amp;</i> Prachi</p>
            <p className="label date" data-greet-date>Saturday, 5 December 2026 · Ludhiana</p>
            <p className="cue">Scroll to enter</p>
          </div>
          <div className="mantra" id="mantra">
            <p className="om-top">ॐ</p>
            <p className="shloka">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
            </p>
          </div>
          <div className="sig" id="sig">
            <h1 className="names script" style={{ margin: "0" }}>Raja <i>&amp;</i> Prachi</h1>
            <p className="label date">Saturday, 5 December 2026 · Ludhiana</p>
          </div>
          <div className="stage-fade" id="fade"></div>
        </div>
      </div>

      <section className="garden" id="blessings">
        <div className="garden-bg"><img src="/v5/assets/img/garden.webp" alt="" /></div>
        <div className="garden-in gutter">
          <div className="panel">
            <p className="om r">ॐ</p>
            <p className="label r" style={{ marginTop: "22px" }}>With the divine blessings of</p>
            <p className="big r">Shri Ganesh Ji</p>
            <div className="rule" aria-hidden="true"><i></i></div>
            <p className="label r" style={{ marginTop: "26px" }}>And the heavenly blessings of beloved Father</p>
            <p className="big r">Late Sh. Chandermohan Tandon</p>
            <p className="note r">whose love and guidance illuminate every step of our journey</p>
          </div>
          <div className="panel">
            <p className="invite r">The Tandon &amp; Arora Families warmly invite you to celebrate the holy union of</p>
            <div className="pair">
              <div>
                <p className="label">The groom</p>
                <div className="who"><span className="script wipe">Raja Tandon</span></div>
                <p className="of">Son of Mrs. Sudesh Tandon &amp; Late Sh. Chandermohan Tandon</p>
              </div>
              <span className="and" aria-hidden="true">&amp;</span>
              <div>
                <p className="label">The bride</p>
                <div className="who"><span className="script wipe">Prachi Arora</span></div>
                <p className="of">Daughter of Mrs. Seema Arora &amp; Mr. Kamal Arora</p>
              </div>
            </div>
            <p className="presence r">Your presence and blessings are our greatest gift.</p>
          </div>
        </div>
      </section>

      <section className="countdown gutter" aria-labelledby="cd-title">
        <img className="diya" src="/v5/assets/img/diya.webp" alt="" />
        <p className="label" id="cd-label">Until the auspicious celebrations begin</p>
        <h2 className="heading" id="cd-title">The diyas are being lit</h2>
        <div className="rule" aria-hidden="true"><i></i></div>
        <div className="tiles" id="tiles" role="timer">
          <div className="tile"><b id="cd-d">--</b><span>Days</span></div>
          <div className="tile"><b id="cd-h">--</b><span>Hours</span></div>
          <div className="tile"><b id="cd-m">--</b><span>Minutes</span></div>
          <div className="tile"><b id="cd-s">--</b><span>Seconds</span></div>
        </div>
        <p className="foot" id="cd-foot">The countdown to our wedding festivities in Ludhiana</p>
        <div className="join" id="celebrations">
          <p className="label">Join us for</p>
          <h2 className="heading">The Celebrations</h2>
          <div className="rule" aria-hidden="true"><i></i></div>
        </div>
      </section>

      {/* 1. SATSANG */}
      <section className="sc cl" id="w-satsang" aria-label="Satsang" style={{ "--fx": ".45" }}>
        <div className="sc-art" aria-hidden="false">
          <div className="sc-box">
            <img className="bg" src="/v5/assets/bg/b1.webp" alt="A serene lit courtyard in the evening" loading="lazy" />
          </div>
        </div>
        <div className="scw">
          <article className="card r">
            <p className="label">Saturday · 28 November 2026</p>
            <h3 className="ttl">Shri Satsang</h3>
            <p className="note2">Commencing our celebrations with divine grace and heartfelt prayers.</p>
            <ul>
              <li><span>Satsang</span><b>7:00 pm Onwards</b></li>
            </ul>
            <p className="venue">Venue · 52-C St. No. 4, Daljit Nagar, Near Palm Court Hotel, Ferozpur Road, Ludhiana</p>
            <div className="links">
              <a
                className="tlink cal"
                data-ev="satsang"
                data-t="Satsang · Raja &amp; Prachi Wedding"
                data-d="20261128T133000Z/20261128T163000Z"
                data-x="Divine Satsang seeking blessings for Raja &amp; Prachi"
                data-l="52-C St. No. 4, Daljit Nagar, Near Palm Court Hotel, Ferozpur Road, Ludhiana"
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

      {/* 2. ENGAGEMENT */}
      <section className="sc cl" id="w-engagement" aria-label="Engagement" style={{ "--fx": ".72" }}>
        <div className="sc-art" aria-hidden="false">
          <div className="sc-box">
            <img className="bg" src="/v5/assets/bg/b3.webp" alt="Grand evening ballroom with chandeliers and fairy lights" loading="lazy" />
            <img
              className="couple"
              src="/v5/assets/couple/dip.webp"
              alt="Raja dipping Prachi in dance"
              style={{ "--cx": ".72", "--cb": "13%", "--ch": "58%", "--ax": ".49" }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="scw">
          <article className="card l">
            <p className="label">Tuesday · 1 December 2026</p>
            <h3 className="ttl">Engagement Ceremony</h3>
            <p className="note2">An enchanting evening of exchanging rings, promises, and laughter.</p>
            <ul>
              <li><span>Ring Ceremony</span><b>8:00 pm Onwards</b></li>
              <li><span>Dinner</span><b>8:30 pm</b></li>
            </ul>
            <p className="venue">Venue · Whistling Woods Resort, Ferozpur Road, Ludhiana</p>
            <div className="links">
              <a
                className="tlink cal"
                data-ev="engagement"
                data-t="Engagement Ceremony · Raja &amp; Prachi"
                data-d="20261201T143000Z/20261201T180000Z"
                data-x="Engagement Ceremony of Raja &amp; Prachi at Whistling Woods Resort"
                data-l="Whistling Woods Resort, Ferozpur Road, Ludhiana"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Add to calendar
              </a>
              <a
                className="tlink"
                href="https://www.google.com/maps/dir/?api=1&destination=Whistling+Woods+Resort+Ferozepur+Road+Ludhiana"
                target="_blank"
                rel="noopener"
              >
                Directions
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 3. LADIES SANGEET (INTEGRATED) */}
      <section className="sc cr" id="w-sangeet" aria-label="Ladies Sangeet" style={{ "--fx": ".4" }}>
        <div className="sc-art" aria-hidden="false">
          <div className="sc-box">
            <img className="bg" src="/v5/assets/bg/b1.webp" alt="Traditional musical baithak with dholaks and harmonium" loading="lazy" />
          </div>
        </div>
        <div className="scw">
          <article className="card r">
            <p className="label">Thursday · 3 December 2026</p>
            <h3 className="ttl">Ladies Sangeet</h3>
            <p className="note2">Dhol, dhamaka, songs, and lively dance performances with family and friends.</p>
            <ul>
              <li><span>Music &amp; Dance</span><b>Evening 7:00 pm</b></li>
            </ul>
            <p className="venue">Venue · At Our Residence</p>
            <div className="links">
              <a
                className="tlink cal"
                data-ev="sangeet"
                data-t="Ladies Sangeet · Raja &amp; Prachi"
                data-d="20261203T133000Z/20261203T173000Z"
                data-x="Ladies Sangeet night for Raja &amp; Prachi. Venue: At Our Residence"
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

      {/* 4. HALDI CEREMONY */}
      <section className="sc cl" id="w-haldi" aria-label="Haldi Ceremony" style={{ "--fx": ".5" }}>
        <div className="sc-art" aria-hidden="false">
          <div className="sc-box">
            <img className="bg" src="/v5/assets/bg/b2.webp" alt="Vibrant yellow marigold and lotus uruli decor for Haldi" loading="lazy" />
          </div>
        </div>
        <div className="scw">
          <article className="card l">
            <p className="label">Friday · 4 December 2026</p>
            <h3 className="ttl">Haldi Ceremony</h3>
            <p className="note2">Dousing the bride and groom in auspicious turmeric, love, and sunshine.</p>
            <ul>
              <li><span>Haldi Rasam</span><b>11:00 am Onwards</b></li>
            </ul>
            <p className="venue">Venue · At Our Residence</p>
            <div className="links">
              <a
                className="tlink cal"
                data-ev="haldi"
                data-t="Haldi Ceremony · Raja &amp; Prachi"
                data-d="20261204T053000Z/20261204T083000Z"
                data-x="Haldi Ceremony for Raja &amp; Prachi at Our Residence"
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

      {/* 5. THE WEDDING */}
      <section className="sc cr" id="w-wedding" aria-label="Wedding" style={{ "--fx": ".32" }}>
        <div className="sc-art" aria-hidden="false">
          <div className="sc-box">
            <img className="bg" src="/v5/assets/bg/b4.webp" alt="A painted mandap draped in garlands at golden hour" loading="lazy" />
            <img
              className="couple"
              src="/v5/assets/couple/back.webp"
              alt="Raja and Prachi standing beneath the mandap"
              style={{ "--cx": ".31", "--cb": "27%", "--ch": "38%", "--ax": ".5" }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="scw">
          <article className="card r">
            <p className="label">Saturday · 5 December 2026</p>
            <h3 className="ttl">The Wedding</h3>
            <p className="note2">Two hearts, seven sacred vows, and a lifetime of love under the stars.</p>
            <ul>
              <li><span>Sehra Bandhi</span><b>6:00 pm (At Residence)</b></li>
              <li><span>Departure of Barat</span><b>7:00 pm (To Whistling Woods)</b></li>
              <li><span>Milni &amp; Dinner</span><b>8:00 pm</b></li>
            </ul>
            <p className="venue">Venue · Whistling Woods Resort, Ferozpur Road, Ludhiana</p>
            <div className="links">
              <a
                className="tlink cal"
                data-ev="wedding"
                data-t="Wedding · Raja &amp; Prachi"
                data-d="20261205T123000Z/20261205T203000Z"
                data-x="Sehra Bandhi 6 pm · Departure of Barat 7 pm · Dinner at Whistling Woods Resort"
                data-l="Whistling Woods Resort, Ferozpur Road, Ludhiana"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Add to calendar
              </a>
              <a
                className="tlink"
                href="https://www.google.com/maps/dir/?api=1&destination=Whistling+Woods+Resort+Ferozepur+Road+Ludhiana"
                target="_blank"
                rel="noopener"
              >
                Directions
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* VENUES */}
      <section className="venue-s gutter" id="where">
        <p className="label">Finding your way</p>
        <h2 className="heading">The Venues</h2>
        <div className="rule" aria-hidden="true"><i></i></div>
        <div className="vgrid">
          <div className="vcard r">
            <div className="vframe">
              <img src="/v5/assets/art/map-utsav.webp" alt="Whistling Woods Resort lit up at night" loading="lazy" />
            </div>
            <p className="label d">1 &amp; 5 December 2026</p>
            <h3>Whistling Woods Resort</h3>
            <p className="p">Ferozpur Road, Ludhiana, Punjab</p>
            <p className="note" style={{ fontSize: "0.88rem", opacity: 0.8, margin: "6px 0 16px" }}>
              Hosting Engagement (1 Dec) &amp; The Wedding (5 Dec)
            </p>
            <a
              className="btn"
              href="https://www.google.com/maps/dir/?api=1&destination=Whistling+Woods+Resort+Ferozepur+Road+Ludhiana"
              target="_blank"
              rel="noopener"
            >
              Get directions
            </a>
          </div>

          <div className="vcard r">
            <div className="vframe">
              <img src="/v5/assets/art/courtyard.webp" alt="Residence at Daljit Nagar" loading="lazy" />
            </div>
            <p className="label d">28 Nov, 3, 4 &amp; 5 Dec 2026</p>
            <h3>Our Residence</h3>
            <p className="p">52-C St. No. 4, Daljit Nagar, Near Palm Court Hotel, Ferozpur Road, Ludhiana</p>
            <p className="note" style={{ fontSize: "0.88rem", opacity: 0.8, margin: "6px 0 16px" }}>
              Hosting Satsang, Ladies Sangeet, Haldi &amp; Sehra Bandhi
            </p>
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

      {/* MOMENTS */}
      <section className="moments gutter" id="moments">
        <p className="label">Looking out from the haveli</p>
        <h2 className="heading">Our Moments</h2>
        <div className="rule" aria-hidden="true"><i></i></div>
        <div className="gallery">
          <div className="arches">
            <figure className="win r">
              <div className="ph">
                <img src="/v5/assets/photos/moment1.webp" style={{ objectPosition: "50% 30%" }} alt="Raja and Prachi" loading="lazy" />
              </div>
              <img className="fr" src="/v5/assets/art/arch-frame.webp" alt="" loading="lazy" />
            </figure>
            <figure className="win r">
              <div className="ph">
                <img src="/v5/assets/photos/moment2.webp" style={{ objectPosition: "50% 50%" }} alt="Raja and Prachi" loading="lazy" />
              </div>
              <img className="fr" src="/v5/assets/art/arch-frame.webp" alt="" loading="lazy" />
            </figure>
            <figure className="win r">
              <div className="ph">
                <img src="/v5/assets/photos/moment3.webp" style={{ objectPosition: "50% 30%" }} alt="Raja and Prachi" loading="lazy" />
              </div>
              <img className="fr" src="/v5/assets/art/arch-frame.webp" alt="" loading="lazy" />
            </figure>
            <figure className="win r">
              <div className="ph">
                <img src="/v5/assets/photos/moment4.webp" style={{ objectPosition: "50% 30%" }} alt="Raja and Prachi" loading="lazy" />
              </div>
              <img className="fr" src="/v5/assets/art/arch-frame.webp" alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      <footer className="gutter">
        <img className="diya" src="/v5/assets/img/diya.webp" alt="" />
        <p className="deva">॥ श्री गणेशाय नमः ॥</p>
        <p className="pres">Your presence is our blessing.</p>
        <p className="names script">Raja <i>&amp;</i> Prachi</p>
        <p className="label d">Saturday, 5 December 2026 · Ludhiana</p>
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
        <div
          className="credit"
          style={{
            position: "absolute",
            bottom: "22px",
            left: "0",
            right: "0",
            zIndex: 10,
            textAlign: "center",
            fontSize: "13.5px",
            letterSpacing: "0.04em",
            color: "var(--soft, #6E5A44)",
          }}
        >
          <span>Design &amp; Developed By </span>
          <a
            href="https://digitaldarzee.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--green, #224229)",
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Digital Darzee
          </a>
        </div>
      </footer>

      <Script src="/v5/js/main.js?v=9" strategy="afterInteractive" />
    </>
  );
}
