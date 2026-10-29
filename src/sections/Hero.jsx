
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="status-dot" />
          FULL-STACK & FLUTTER DEVELOPER
        </p>

        <p className="hero-greeting">Hi, I'm Sreenish Hari.</p>

        <h1>
          I build digital
          <br />
          experiences that
          <br />
          <span className="hero-highlight">move ideas forward.</span>
        </h1>

        <p className="hero-intro">
          I create modern web applications, Flutter mobile apps,
          and backend systems using Flutter, React, FastAPI and PostgreSQL.
        </p>

        <div className="hero-tags">
          <span>WEB DEVELOPMENT</span>
          <span>MOBILE APPS</span>
          <span>BACKEND APIS</span>
        </div>

    
<div className="hero-actions">
  <a className="button-primary" href="#projects">
    Explore Projects <span>↗</span>
  </a>

  <a
    className="button-secondary"
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
  >
    View Resume ↗
  </a>

  <a
    className="button-secondary github-button"
    href="https://github.com/Sreenu-123"
    target="_blank"
    rel="noreferrer"
    aria-label="Visit Sreenish Hari's GitHub profile"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="github-icon"
    >
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.13c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.67.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
    GitHub <span>↗</span>
  </a>
</div>


      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src="/images/profile.jpeg"
            alt="Sreenish Hari, Full-Stack and Flutter Developer"
          />
          <div className="hero-image-caption">
            <span className="caption-dot" />
            <div>
              <strong>Sreenish Hari</strong>
              <p>Developer · Building in public</p>
            </div>
          </div>
        </div>

        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        <div className="floating-label floating-label-top">
          <span>✳</span> Turning ideas into code
        </div>

        <div className="floating-label floating-label-bottom">
          <span>⌘</span> React · Flutter · Python
        </div>
      </div>
    </section>
  );
}

export default Hero;
