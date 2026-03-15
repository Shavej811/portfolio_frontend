import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const NAV_LINKS = [
  { label: 'About me',  to: '/' },
  { label: 'Skills',    to: '/resume' },
  { label: 'Portfolio', to: '/projects' },
];

const ShavejLogo = () => (
  <span className="shavej-logo" aria-label="Shavej">
    Shavej<span className="logo-dot">.</span>
  </span>
);

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">

        <Link to="/" className="header-brand" aria-label="Home">
          <ShavejLogo />
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${pathname === to ? 'nav-link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">
            CONTACT ME
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M8 3l4 4-4 4"/>
            </svg>
          </Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`mobile-nav-link ${pathname === to ? 'mobile-nav-link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="mobile-nav-cta">CONTACT ME</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;