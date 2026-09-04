import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react';

import './styles.css';

import logo from './assets/logo.jpeg';
import periPeri from './assets/peri-peri-makhana.jpeg';
import pudina from './assets/pudina-makhana.jpeg';
import redChilli from './assets/red-chilli-2.jpeg';
import coriander from './assets/coriander-1.jpeg';
import turmeric from './assets/turmeric.jpeg';
import makhana from './assets/makhana-pack.jpeg';

/* -------------------------------------------------------------------------- */
/* WhatsApp Configuration                                                     */
/* -------------------------------------------------------------------------- */

// International format without "+" or spaces.
const WHATSAPP_NUMBER = '916200895416';

const whatsappMessage = encodeURIComponent(
  'Hello Freszo! I would like to know more about your products.'
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

/* -------------------------------------------------------------------------- */
/* Product Data                                                               */
/* -------------------------------------------------------------------------- */

const products = [
  {
    name: 'Peri-Peri Makhana',
    category: 'Flavoured Makhana',
    image: periPeri,
    accent: 'red',
    description:
      'Light, crunchy makhana with a bold peri-peri kick.',
  },
  {
    name: 'Pudina Makhana',
    category: 'Flavoured Makhana',
    image: pudina,
    accent: 'green',
    description:
      'Refreshing mint flavour paired with naturally light crunch.',
  },
  {
    name: 'Red Chilli Powder',
    category: 'Indian Spices',
    image: redChilli,
    accent: 'maroon',
    description:
      'A vibrant, aromatic chilli powder for everyday cooking.',
  },
  {
    name: 'Coriander Powder',
    category: 'Indian Spices',
    image: coriander,
    accent: 'forest',
    description:
      'Fragrant coriander powder crafted for rich, authentic flavour.',
  },
  {
    name: 'Turmeric Powder',
    category: 'Indian Spices',
    image: turmeric,
    accent: 'gold',
    description:
      'Golden turmeric with an earthy aroma and fine texture.',
  },
  {
    name: 'Premium Makhana',
    category: 'Makhana',
    image: makhana,
    accent: 'navy',
    description:
      'Premium fox nuts — roasted, crunchy and made for mindful snacking.',
  },
];

/* -------------------------------------------------------------------------- */
/* Instagram Icon                                                             */
/* -------------------------------------------------------------------------- */

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
      />

      <path d="M16 11.37a4 4 0 1 1-3.37-3.37A4 4 0 0 1 16 11.37z" />

      <line
        x1="17.5"
        x2="17.51"
        y1="6.5"
        y2="6.5"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Application                                                           */
/* -------------------------------------------------------------------------- */

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeProduct, setActiveProduct] = React.useState(null);

  /* ------------------------------------------------------------------------ */
  /* Navigation                                                               */
  /* ------------------------------------------------------------------------ */

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  /* ------------------------------------------------------------------------ */
  /* Render                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <div className="site-shell">
      {/* ================================================================== */}
      {/* NAVBAR                                                             */}
      {/* ================================================================== */}

      <header className="navbar">
        <div className="nav-inner">
          {/* Logo */}
          <button
            type="button"
            className="brand"
            onClick={() => scrollTo('home')}
            aria-label="Freszo home"
          >
            <img
              src={logo}
              alt="Freszo Nature's Fresh"
            />
          </button>

          {/* Desktop / Mobile Navigation */}
          <nav
            className={
              menuOpen
                ? 'nav-links open'
                : 'nav-links'
            }
          >
            <button
              type="button"
              onClick={() => scrollTo('home')}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollTo('story')}
            >
              Our Story
            </button>

            <button
              type="button"
              onClick={() => scrollTo('products')}
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => scrollTo('quality')}
            >
              Quality
            </button>

            <button
              type="button"
              onClick={() => scrollTo('founders')}
            >
              Founders
            </button>

            <button
              type="button"
              className="nav-contact"
              onClick={() => scrollTo('contact')}
            >
              Contact Us
              <ArrowRight size={15} />
            </button>
          </nav>

          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>
      </header>

      <main>
        {/* ================================================================ */}
        {/* HERO                                                             */}
        {/* ================================================================ */}

        <section
          id="home"
          className="hero"
        >
          <div className="hero-glow" />

          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              Bihar born. Naturally better.
            </div>

            <h1>
              Nature's goodness,
              <br />
              <em>packed fresh.</em>
            </h1>

            <p>
              Premium makhana and authentic Indian spices,
              thoughtfully processed and beautifully packed
              from the heart of Bihar.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="primary-btn"
                onClick={() => scrollTo('products')}
              >
                Explore Products
                <ArrowRight size={18} />
              </button>

              <a
                className="whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="hero-trust">
              <span>
                <Check size={15} />
                Quality focused
              </span>

              <span>
                <Leaf size={15} />
                Nature inspired
              </span>

              <span>
                <Sparkles size={15} />
                Premium range
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-ring ring-one" />
            <div className="hero-ring ring-two" />
            <div className="hero-card-back" />

            <img
              src={periPeri}
              alt="Freszo Peri-Peri Makhana"
            />

            <div className="floating-note">
              <Leaf size={18} />

              <div>
                <strong>Nature's Fresh</strong>
                <small>From Bihar to your table</small>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* MARQUEE                                                          */}
        {/* ================================================================ */}

        <section className="marquee">
          <div>
            <span>MAKHANA</span>
            <i>✦</i>

            <span>INDIAN SPICES</span>
            <i>✦</i>

            <span>BIHAR</span>
            <i>✦</i>

            <span>NATURE'S FRESH</span>
            <i>✦</i>

            <span>MAKHANA</span>
            <i>✦</i>

            <span>INDIAN SPICES</span>
          </div>
        </section>

        {/* ================================================================ */}
        {/* OUR STORY                                                         */}
        {/* ================================================================ */}

        <section
          id="story"
          className="story section"
        >
          <div className="story-image">
            <img
              src={makhana}
              alt="Freszo premium makhana"
            />

            <div className="story-badge">
              <span>EST.</span>
              <strong>BIHAR</strong>
              <span>INDIA</span>
            </div>
          </div>

          <div className="story-copy">
            <div className="section-kicker">
              The Freszo philosophy
            </div>

            <h2>
              Rooted in Bihar.
              <br />
              <em>Made for everywhere.</em>
            </h2>

            <p>
              Freszo is a Bihar-born food startup built
              around a simple belief: everyday food can be
              wholesome, authentic and premium at the same
              time.
            </p>

            <p>
              We bring together carefully selected makhana
              and familiar Indian spices, using thoughtful
              processing and packaging to preserve the
              character of the ingredients.
            </p>

            <div className="story-points">
              <div>
                <span>01</span>

                <b>Source with care</b>

                <small>
                  We value ingredient quality from the very
                  beginning.
                </small>
              </div>

              <div>
                <span>02</span>

                <b>Craft with purpose</b>

                <small>
                  Clean, considered processing for everyday
                  goodness.
                </small>
              </div>

              <div>
                <span>03</span>

                <b>Pack with pride</b>

                <small>
                  A premium Freszo experience, every time.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* PRODUCTS                                                          */}
        {/* ================================================================ */}

        <section
          id="products"
          className="products section"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                Our collection
              </div>

              <h2>
                Good food deserves
                <br />
                <em>good ingredients.</em>
              </h2>
            </div>

            <p>
              Discover our growing range of premium makhana
              and Indian spices, created for modern kitchens
              and mindful snacking.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article
                className={`product-card ${product.accent}`}
                key={product.name}
                onClick={() => setActiveProduct(product)}
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="view-product">
                    View
                    <ArrowRight size={15} />
                  </span>
                </div>

                <div className="product-info">
                  <small>{product.category}</small>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* QUALITY                                                           */}
        {/* ================================================================ */}

        <section
          id="quality"
          className="quality section"
        >
          <div className="quality-intro">
            <div className="section-kicker">
              Why Freszo
            </div>

            <h2>
              Simple ingredients.
              <br />
              <em>Serious standards.</em>
            </h2>

            <p>
              We are building Freszo around the details
              that matter — ingredient selection, clean
              presentation and consistent quality.
            </p>
          </div>

          <div className="quality-grid">
            <div className="quality-card">
              <div className="quality-icon">
                <Leaf />
              </div>

              <h3>Nature inspired</h3>

              <p>
                Products designed around the natural
                character of makhana and Indian spices.
              </p>
            </div>

            <div className="quality-card">
              <div className="quality-icon">
                <Sparkles />
              </div>

              <h3>Premium presentation</h3>

              <p>
                Thoughtful packaging that makes everyday
                pantry staples feel special.
              </p>
            </div>

            <div className="quality-card">
              <div className="quality-icon">
                <Check />
              </div>

              <h3>Quality focused</h3>

              <p>
                Careful sourcing and processing with
                consistency at the center.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* FOUNDERS                                                          */}
        {/* ================================================================ */}

        <section
          id="founders"
          className="founders section"
        >
          <div className="section-heading centered">
            <div>
              <div className="section-kicker">
                The people behind Freszo
              </div>

              <h2>
                Built by <em>three believers.</em>
              </h2>
            </div>

            <p>
              A placeholder founder section ready for your
              real profiles, photographs and bios.
            </p>
          </div>

          <div className="founder-grid">
            {[
              'Co-Founder',
              'Co-Founder',
              'Co-Founder',
            ].map((role, index) => (
              <article
                className="founder-card"
                key={index}
              >
                <div className="founder-photo">
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <small>{role}</small>

                <h3>Founder Name</h3>

                <p>
                  Short introduction about the founder,
                  their role and what they bring to Freszo.
                </p>

                <div className="founder-line" />
              </article>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* CONTACT                                                           */}
        {/* ================================================================ */}

        <section
          id="contact"
          className="contact section"
        >
          <div className="contact-panel">
            <div className="contact-copy">
              <div className="section-kicker">
                Let's connect
              </div>

              <h2>
                Bring Freszo
                <br />
                <em>to your table.</em>
              </h2>

              <p>
                Interested in our products, distribution,
                partnerships or simply want to say hello?
                We'd love to hear from you.
              </p>

              <div className="contact-list">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={20} />

                  <span>
                    <small>WhatsApp</small>
                    Chat with Freszo
                  </span>
                </a>

                {/* Email */}
                <a href="mailto:hello@freszo.in">
                  <Mail size={20} />

                  <span>
                    <small>Email</small>
                    hello@freszo.in
                  </span>
                </a>

                {/* Location */}
                <div>
                  <MapPin size={20} />

                  <span>
                    <small>Based in</small>
                    Bihar, India
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <div className="cta-logo">
                <img
                  src={logo}
                  alt="Freszo"
                />
              </div>

              <h3>Have a question?</h3>

              <p>
                Start a conversation with us on WhatsApp.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                Message us
                <MessageCircle size={18} />
              </a>

              <small className="number-note">
                Replace the WhatsApp number in{' '}
                <code>src/main.jsx</code> before launch.
              </small>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================== */}
      {/* FOOTER                                                             */}
      {/* ================================================================== */}

      <footer className="footer">
        <div className="footer-inner">
          {/* Footer Brand */}
          <div>
            <img
              src={logo}
              alt="Freszo Nature's Fresh"
            />

            <p>
              Premium makhana & Indian spices.
              <br />
              Nature's fresh, from Bihar.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="footer-nav">
            <button
              type="button"
              onClick={() => scrollTo('story')}
            >
              Our Story
            </button>

            <button
              type="button"
              onClick={() => scrollTo('products')}
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => scrollTo('quality')}
            >
              Quality
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Freszo. All rights reserved.
          </span>

          <span>
            Made with care in Bihar, India.
          </span>

          <span className="developer-credit">
            Designed &amp; Developed by{' '}
            <strong>Dhriti Infotech</strong>, Hi-Tech City, Hyderabad, India.
          </span>
        </div>
      </footer>

      {/* ================================================================== */}
      {/* PRODUCT MODAL                                                      */}
      {/* ================================================================== */}

      {activeProduct && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveProduct(null)}
              aria-label="Close product details"
            >
              <X />
            </button>

            <img
              src={activeProduct.image}
              alt={activeProduct.name}
            />

            <div>
              <small>
                {activeProduct.category}
              </small>

              <h2>{activeProduct.name}</h2>

              <p>
                {activeProduct.description}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                Enquire on WhatsApp
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* React Root                                                                */
/* -------------------------------------------------------------------------- */

createRoot(
  document.getElementById('root')
).render(
  <App />
);