import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/shavej_banner.png';
import './home.css';
import ProjectsOverview from './Projects/ProjectsOverview';
import SkillsOverview from './Skills/SkillsOverview';
import ContactOverview from './Contact/ContactOverview';

const NAV_LINKS = [
  { label: 'About me', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Portfolio', to: '/projects' },
];

function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.anim').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="home-root">

      {/* ══ SPLIT HERO ══ */}
      <section className="home-hero">

        {/* ── LEFT: Light panel ── */}
        <div className="hero-left">
          <div className="hero-left-inner">
            <p className="hero-greeting anim">Hi, I am</p>
            <h1 className="hero-name anim">
              Shavej<br /> <span className="hero-name-accent">CHAUDHARY</span>
            </h1>
            <p className="hero-role anim">React &amp; React Native Developer</p>

            <nav className="hero-socials anim" aria-label="Social links">
              <a href="mailto:shavej@email.com" aria-label="Email" className="hero-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hero-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hero-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </nav>
          </div>

          <span className="hero-watermark" aria-hidden="true">SC</span>
        </div>

        <div className="hero-right">

            {/* Texture + rule overlays */}
            <div className="hero-right-scan"></div>
            <div className="hero-right-rule"></div>

            {/* Available badge — top right */}
            <div className="hero-right-badge">
              <span className="hero-right-badge-dot"></span>
              Available for work
            </div>

            {/* Stat card — bottom left */}
            <div className="hero-right-stat">
              <span className="hero-right-stat-num">3+</span>
              <span className="hero-right-stat-label">Years Experience</span>
            </div>

            {/* Photo */}
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src={banner}
                alt="Shavej Chaudhary"
              />
            </div>

            {/* Watermark */}
            {/* <span className="hero-right-mark" aria-hidden="true">SC</span> */}

          </div>
      </section>

      {/* ══ ABOUT STRIP ══ */}
      <section className="home-strip">
        <div className="strip-inner">
          <p className="strip-label anim">IT SERVICES</p>
          <p className="strip-text anim">
            Skilled React &amp; React Native developer building fast, reliable cross-platform
            products with clean code and a sharp eye for UI/UX. Committed to performance,
            scalability, and seamless user-centred solutions.
          </p>
        </div>
        {/* Services row */}
        <div className="strip-services anim">
          {[
            { icon: '◈', title: 'Design', desc: 'Clean, modern UI/UX tailored to your brand and users.' },
            { icon: '◉', title: 'Development', desc: 'React & React Native apps built for speed and scale.' },
            { icon: '◎', title: 'Maintenance', desc: 'Ongoing support, updates, and performance tuning.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="service-card">
              <span className="service-icon" aria-hidden="true">{icon}</span>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <SkillsOverview />
      <ProjectsOverview />
      <ContactOverview />
    </div>
  );
}

export default Home;