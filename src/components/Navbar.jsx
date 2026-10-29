
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#home" aria-label="Sreenish Hari home">
        sreenish<span>.</span>
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Tech Stack</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume ↗
        </a>
      </nav>

      <a className="navbar-contact" href="#contact">
        Let's Talk <span>↗</span>
      </a>
    </header>
  );
}

export default Navbar;
