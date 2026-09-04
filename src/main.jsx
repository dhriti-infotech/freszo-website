import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowRight,
  Check,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import './styles.css';

import logo from './assets/FORMAT-PNG.png';
import periPeri from './assets/peri-peri-makhana.jpeg';
import pudina from './assets/pudina-makhana.jpeg';
import redChilli from './assets/red-chilli-2.jpeg';
import coriander from './assets/coriander-1.jpeg';
import turmeric from './assets/turmeric.jpeg';
import makhana from './assets/makhana-pack.jpeg';
import creamOnion from './assets/cream-onion-makhana.jpeg';
import himalayanPinkSalt from './assets/himalayan-pink-salt-makhana.jpeg';

const WHATSAPP_NUMBERS = ['918340279077', '916200895416'];
const PRIMARY_WHATSAPP_NUMBER = WHATSAPP_NUMBERS[0];
const whatsappMessage = encodeURIComponent(
  'Hello Freszo! I would like to know more about your products.'
);
const whatsappUrl = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const products = [
  {
    name: 'Peri-Peri Makhana',
    category: 'Flavoured Makhana',
    image: periPeri,
    accent: 'red',
    description: 'Light, crunchy makhana with a bold peri-peri kick.',
    tag: 'Signature',
  },
  {
    name: 'Pudina Makhana',
    category: 'Flavoured Makhana',
    image: pudina,
    accent: 'green',
    description: 'Refreshing mint flavour paired with naturally light crunch.',
    tag: 'Fresh Pick',
  },
  {
    name: 'Red Chilli Powder',
    category: 'Indian Spices',
    image: redChilli,
    accent: 'maroon',
    description: 'A vibrant, aromatic chilli powder for everyday cooking.',
    tag: 'Kitchen Essential',
  },
  {
    name: 'Coriander Powder',
    category: 'Indian Spices',
    image: coriander,
    accent: 'forest',
    description: 'Fragrant coriander powder crafted for rich, authentic flavour.',
    tag: 'Everyday Favourite',
  },
  {
    name: 'Turmeric Powder',
    category: 'Indian Spices',
    image: turmeric,
    accent: 'gold',
    description: 'Golden turmeric with an earthy aroma and fine texture.',
    tag: 'Pantry Staple',
  },
  // {
  //   name: 'Premium Makhana',
  //   category: 'Makhana',
  //   image: makhana,
  //   accent: 'navy',
  //   description: 'Premium fox nuts — roasted, crunchy and made for mindful snacking.',
  //   tag: 'Premium',
  // },
  {
    name: 'Cream & Onion Makhana',
    category: 'Flavoured Makhana',
    image: creamOnion,
    accent: 'plum',
    description: 'Creamy, savoury and delightfully crunchy for a rich everyday snack.',
    tag: 'New Variety',
  },
  {
    name: 'Himalayan Pink Salt Makhana',
    category: 'Flavoured Makhana',
    image: himalayanPinkSalt,
    accent: 'pink',
    description: 'Lightly seasoned makhana with Himalayan pink salt and a clean, savoury finish.',
    tag: 'New Variety',
  },
];

const founders = [
  { role: 'Co-Founder', name: 'Founder Name', index: '01' },
  { role: 'Co-Founder', name: 'Founder Name', index: '02' },
  { role: 'Co-Founder', name: 'Founder Name', index: '03' },
];

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-3.37-3.37A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function useReveal() {
  React.useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeProduct, setActiveProduct] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [heroProductIndex, setHeroProductIndex] = React.useState(0);
  const [heroPaused, setHeroPaused] = React.useState(false);

  const heroProduct = products[heroProductIndex];

  useReveal();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

      setScrolled(scrollY > 24);
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (heroPaused) return undefined;

    const interval = window.setInterval(() => {
      setHeroProductIndex((current) => (current + 1) % products.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [heroPaused]);

  React.useEffect(() => {
    document.body.style.overflow = activeProduct ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProduct]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .hero-carousel-image {
          animation: freszoHeroProductIn 700ms cubic-bezier(.22,.61,.36,1) both;
        }

        .hero-carousel-controls {
          position: absolute;
          left: 50%;
          bottom: -28px;
          transform: translateX(-50%);
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border: 1px solid rgba(38, 39, 31, .10);
          border-radius: 999px;
          background: rgba(255, 255, 255, .88);
          box-shadow: 0 12px 30px rgba(45, 36, 23, .10);
          backdrop-filter: blur(12px);
        }

        .hero-carousel-arrow {
          width: 30px;
          height: 30px;
          border: 0;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #1e563f;
          color: #fff;
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease;
        }

        .hero-carousel-arrow:hover {
          transform: scale(1.08);
          background: #174532;
        }

        .hero-carousel-arrow .arrow-prev {
          transform: rotate(180deg);
        }

        .hero-carousel-dots {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .hero-carousel-dot {
          width: 6px;
          height: 6px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: rgba(38, 39, 31, .22);
          cursor: pointer;
          transition: width 220ms ease, background 220ms ease, transform 220ms ease;
        }

        .hero-carousel-dot.active {
          width: 18px;
          background: #b84a32;
        }

        .hero-carousel-dot:hover {
          transform: scale(1.2);
        }

        @keyframes freszoHeroProductIn {
          0% { opacity: 0; transform: scale(.94) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-carousel-controls {
            bottom: -22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-carousel-image {
            animation: none;
          }
        }
      `}</style>

      <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="top-strip" aria-label="Freszo highlights">
        <div className="top-strip-track">
          <span><Leaf size={14} /> BIHAR BORN · NATURE'S FRESH</span>
          <span><Sparkles size={14} /> PREMIUM MAKHANA & INDIAN SPICES</span>
          <span><Check size={14} /> QUALITY FOCUSED · BEAUTIFULLY PACKED</span>
          <span><Leaf size={14} /> FROM BIHAR TO YOUR TABLE</span>
          <span><Sparkles size={14} /> PREMIUM MAKHANA & INDIAN SPICES</span>
        </div>
      </div>

      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-inner">
          <button type="button" className="brand" onClick={() => scrollTo('home')} aria-label="Freszo home">
            <img src={logo} alt="Freszo Nature's Fresh" />
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button type="button" onClick={() => scrollTo('home')}>Home</button>
            <button type="button" onClick={() => scrollTo('story')}>Our Story</button>
            <button type="button" onClick={() => scrollTo('products')}>Products</button>
            <button type="button" onClick={() => scrollTo('quality')}>Quality</button>
            <button type="button" onClick={() => scrollTo('founders')}>Founders</button>
            <button type="button" className="nav-contact" onClick={() => scrollTo('contact')}>
              Contact Us <ArrowRight size={15} />
            </button>
          </nav>

          <button type="button" className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero hero-reference-style">
          <div className="hero-wash hero-wash-one" />
          <div className="hero-wash hero-wash-two" />
          <div className="hero-dots" />

          <div className="hero-copy" data-reveal="left">
            <div className="hero-outline-label">
              <Leaf size={13} />
              <span>BIHAR BORN · PREMIUM FOOD BRAND</span>
            </div>

            <h1>
              Nature's goodness,
              <br />
              <em>made iconic.</em>
            </h1>

            <p className="hero-description">
              Premium makhana and authentic Indian spices, thoughtfully processed and beautifully packed from the heart of Bihar.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-btn" onClick={() => scrollTo('products')}>
                Explore Products <ArrowRight size={18} />
              </button>
              <a className="hero-outline-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> Talk to Freszo
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={15} /> Bihar, India</span>
              <span><Check size={15} /> Quality focused</span>
            </div>
          </div>

          <div className="hero-visual hero-reference-visual" data-reveal="right">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-orbit orbit-three" />

            <span className="hero-dot dot-one" />
            <span className="hero-dot dot-two" />
            <span className="hero-dot dot-three" />

            <div
              className="hero-product-circle"
              onMouseEnter={() => setHeroPaused(true)}
              onMouseLeave={() => setHeroPaused(false)}
              onFocus={() => setHeroPaused(true)}
              onBlur={() => setHeroPaused(false)}
            >
              <img
                key={heroProduct.name}
                className="hero-carousel-image"
                src={heroProduct.image}
                alt={`Freszo ${heroProduct.name}`}
              />
            </div>

            <div className="hero-floating-badge badge-top">
              <Sparkles size={15} />
              <span><strong>{heroProduct.tag}</strong><small>{heroProduct.name}</small></span>
            </div>

            <div className="hero-floating-badge badge-bottom">
              <Check size={15} />
              <span><strong>Premium Quality</strong><small>{heroProduct.category}</small></span>
            </div>

            <div className="hero-carousel-controls" aria-label="Hero product carousel controls">
              <button
                type="button"
                className="hero-carousel-arrow"
                onClick={() => setHeroProductIndex((current) => (current - 1 + products.length) % products.length)}
                aria-label="Previous product"
              >
                <ArrowRight size={17} className="arrow-prev" />
              </button>

              <div className="hero-carousel-dots" role="tablist" aria-label="Select hero product">
                {products.map((product, index) => (
                  <button
                    key={product.name}
                    type="button"
                    role="tab"
                    aria-selected={heroProductIndex === index}
                    aria-label={`Show ${product.name}`}
                    className={`hero-carousel-dot ${heroProductIndex === index ? 'active' : ''}`}
                    onClick={() => setHeroProductIndex(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="hero-carousel-arrow"
                onClick={() => setHeroProductIndex((current) => (current + 1) % products.length)}
                aria-label="Next product"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <button type="button" className="scroll-cue" onClick={() => scrollTo('story')} aria-label="Scroll to our story">
            <span>Discover Freszo</span><ArrowDown size={16} />
          </button>
        </section>

        <section className="marquee" aria-label="Freszo categories">
          <div className="marquee-track">
            {['MAKHANA', 'INDIAN SPICES', 'BIHAR', "NATURE'S FRESH", 'MAKHANA', 'INDIAN SPICES', 'BIHAR', "NATURE'S FRESH"].map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <span>{item}</span><i>✦</i>
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="brand-values" aria-label="Freszo brand values">
          <div className="brand-value" data-reveal="up"><span>01</span><strong>Bihar Born</strong><small>Rooted in the land of makhana</small></div>
          <div className="brand-value" data-reveal="up" style={{ '--delay': '80ms' }}><span>02</span><strong>Premium Makhana</strong><small>Light, crunchy & thoughtfully packed</small></div>
          <div className="brand-value" data-reveal="up" style={{ '--delay': '160ms' }}><span>03</span><strong>Indian Spices</strong><small>Everyday flavour with character</small></div>
          <div className="brand-value" data-reveal="up" style={{ '--delay': '240ms' }}><span>04</span><strong>Nature's Fresh</strong><small>Simple, considered food products</small></div>
        </section>

        <section id="story" className="story section">
          <div className="story-image" data-reveal="left">
            <div className="image-overline">FROM THE HEART OF BIHAR</div>
            <img src={makhana} alt="Freszo premium makhana" />
            <div className="story-badge"><span>EST.</span><strong>BIHAR</strong><span>INDIA</span></div>
            <div className="story-index">02 / 06</div>
          </div>

          <div className="story-copy" data-reveal="right">
            <div className="section-kicker">The Freszo philosophy</div>
            <h2>Rooted in Bihar.<br /><em>Made for everywhere.</em></h2>
            <p>
              Freszo is a Bihar-born food startup built around a simple belief: everyday food can be wholesome, authentic and premium at the same time.
            </p>
            <p>
              We bring together carefully selected makhana and familiar Indian spices, using thoughtful processing and packaging to preserve the character of the ingredients.
            </p>

            <div className="story-points">
              <div><span>01</span><b>Source with care</b><small>We value ingredient quality from the very beginning.</small></div>
              <div><span>02</span><b>Craft with purpose</b><small>Clean, considered processing for everyday goodness.</small></div>
              <div><span>03</span><b>Pack with pride</b><small>A premium Freszo experience, every time.</small></div>
            </div>
          </div>
        </section>

        <section id="products" className="products section">
          <div className="section-heading" data-reveal="up">
            <div>
              <div className="section-kicker">Our collection</div>
              <h2>Good food deserves<br /><em>good ingredients.</em></h2>
            </div>
            <p>Discover our growing range of premium makhana and Indian spices, created for modern kitchens and mindful snacking.</p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article
                className={`product-card ${product.accent}`}
                key={product.name}
                onClick={() => setActiveProduct(product)}
                data-reveal="up"
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>
                  <span className="view-product">Discover <ArrowRight size={15} /></span>
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

        <section id="quality" className="quality section">
          <div className="quality-intro" data-reveal="left">
            <div className="section-kicker">Why Freszo</div>
            <h2>Simple ingredients.<br /><em>Serious standards.</em></h2>
            <p>We are building Freszo around the details that matter — ingredient selection, clean presentation and consistent quality.</p>
            <button type="button" className="text-link" onClick={() => scrollTo('contact')}>Talk to Freszo <ArrowRight size={16} /></button>
          </div>

          <div className="quality-grid">
            <div className="quality-card" data-reveal="up"><span className="quality-number">01</span><div className="quality-icon"><Leaf /></div><h3>Nature inspired</h3><p>Products designed around the natural character of makhana and Indian spices.</p></div>
            <div className="quality-card" data-reveal="up" style={{ '--delay': '100ms' }}><span className="quality-number">02</span><div className="quality-icon"><Sparkles /></div><h3>Premium presentation</h3><p>Thoughtful packaging that makes everyday pantry staples feel special.</p></div>
            <div className="quality-card" data-reveal="up" style={{ '--delay': '200ms' }}><span className="quality-number">03</span><div className="quality-icon"><Check /></div><h3>Quality focused</h3><p>Careful sourcing and processing with consistency at the center.</p></div>
          </div>
        </section>

        <section id="founders" className="founders section">
          <div className="section-heading centered" data-reveal="up">
            <div>
              <div className="section-kicker">The people behind Freszo</div>
              <h2>Built by <em>three believers.</em></h2>
            </div>
            <p>A placeholder founder section ready for your real profiles, photographs and bios.</p>
          </div>

          <div className="founder-grid">
            {founders.map((founder, index) => (
              <article className="founder-card" key={founder.index} data-reveal="up" style={{ '--delay': `${index * 90}ms` }}>
                <div className="founder-photo"><span>{founder.index}</span><div className="founder-silhouette" /></div>
                <small>{founder.role}</small>
                <h3>{founder.name}</h3>
                <p>Short introduction about the founder, their role and what they bring to Freszo.</p>
                <div className="founder-line" />
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-panel" data-reveal="up">
            <div className="contact-copy">
              <div className="section-kicker">Let's connect</div>
              <h2>Bring Freszo<br /><em>to your table.</em></h2>
              <p>Interested in our products, distribution, partnerships or simply want to say hello? We'd love to hear from you.</p>

              <div className="contact-list">
                <a href={`https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                  <span><small>WhatsApp</small>+91 83402 79077</span>
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBERS[1]}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                  <span><small>WhatsApp</small>+91 62008 95416</span>
                </a>
                <a href="mailto:hello@freszo.in"><Mail size={20} /><span><small>Email</small>hello@freszo.in</span></a>
                <div className="contact-address">
                  <MapPin size={20} />
                  <span><small>Company Address</small>Vill- Sirsiya, Block - Forbesganj, District - Araria, Pin- 854318, Bihar, India</span>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <div className="cta-logo"><img src={logo} alt="Freszo" /></div>
              <span className="cta-overline">START A CONVERSATION</span>
              <h3>Have a question?</h3>
              <p>Start a conversation with us on WhatsApp.</p>
              <div className="cta-phone-list">
                <a href={`https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">+91 83402 79077</a>
                <a href={`https://wa.me/${WHATSAPP_NUMBERS[1]}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">+91 62008 95416</a>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-btn">Message us <MessageCircle size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <div className="floating-contact" aria-label="Quick contact">
        <a
          className="floating-contact-btn whatsapp-float"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Freszo on WhatsApp"
        >
          <MessageCircle size={22} />
          <span className="floating-tooltip">WhatsApp</span>
        </a>

        <div className="floating-phone-stack">
          <a
            className="floating-contact-btn phone-float"
            href="tel:+918340279077"
            aria-label="Call Freszo at +91 83402 79077"
          >
            <Phone size={21} />
            <span className="floating-tooltip">+91 83402 79077</span>
          </a>
          <a
            className="floating-contact-btn phone-float secondary-phone"
            href="tel:+916200895416"
            aria-label="Call Freszo at +91 62008 95416"
          >
            <Phone size={18} />
            <span className="floating-tooltip">+91 62008 95416</span>
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <img src={logo} alt="Freszo Nature's Fresh" />
            <p>Premium makhana & Indian spices.<br />Nature's fresh, from Bihar.</p><address>Vill- Sirsiya, Block - Forbesganj, District - Araria,<br />Pin- 854318, Bihar, India</address>
          </div>

          <div className="footer-nav">
            <button type="button" onClick={() => scrollTo('story')}>Our Story</button>
            <button type="button" onClick={() => scrollTo('products')}>Products</button>
            <button type="button" onClick={() => scrollTo('quality')}>Quality</button>
            <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
          </div>

          <div className="footer-social">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Freszo. All rights reserved.</span>
          <span>Made with care in Bihar, India.</span>
          <span className="developer-credit">Designed &amp; Developed by <strong>Dhriti Infotech</strong>, Hi-Tech City, Hyderabad, India.</span>
        </div>
      </footer>

      {activeProduct && (
        <div className="modal-backdrop" onClick={() => setActiveProduct(null)}>
          <div className="product-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setActiveProduct(null)} aria-label="Close product details"><X /></button>
            <img src={activeProduct.image} alt={activeProduct.name} />
            <div>
              <small>{activeProduct.category}</small>
              <h2>{activeProduct.name}</h2>
              <p>{activeProduct.description}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-btn">Enquire on WhatsApp <MessageCircle size={18} /></a>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
