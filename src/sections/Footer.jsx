
import '../styles/Footer.css';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            sreenish<span>.</span>
          </a>

          <p className="footer-tagline">
            Building ideas into digital experiences.
          </p>

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sreenish Hari.
            All rights reserved.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/Sreenu-123"
              target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>

            <a href="https://www.instagram.com/sree.eenu__/"
              target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>

            <a href="mailto:sreenishhari123@gmail.com">
              Email ↗
            </a>
          </div>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;