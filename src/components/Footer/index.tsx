import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <Link to="/" className="footer-brand" aria-label="Home">
            <span className="footer-logo">Shavej<span className="footer-logo-dot">.</span></span>
          </Link>
          <p className="footer-tagline">React &amp; React Native Developer</p>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">© {currentYear} Shavej Chaudhary. All rights reserved.</p>

          <nav className="footer-links" aria-label="Footer links">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            <Link to="/contact" className="footer-link">Contact</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;