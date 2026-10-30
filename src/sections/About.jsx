import '../styles/About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-eyebrow">GET TO KNOW ME</p>

          <h2>
            A little about <span>me.</span>
          </h2>

          <p className="about-intro">
            I'm Sreenish Hari, a Computer Science Engineering
            student and developer passionate about building
            meaningful digital experiences.
          </p>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              Turning ideas into <span>reality.</span>
            </h3>

            <p>
              I enjoy exploring how technology can solve
              real-world problems. My development journey
              revolves around web applications, mobile
              development, and backend systems.
            </p>

            <p>
              I work with technologies like React, Flutter,
              FastAPI, and PostgreSQL, building projects
              that help me improve my technical and
              problem-solving skills.
            </p>

            <p>
              I'm always curious to learn, experiment with
              new ideas, and become a better developer
              through hands-on experience.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight-card">
              <span className="about-highlight-icon">⌘</span>
              <h4>Web Development</h4>
              <p>Building modern and responsive web experiences.</p>
            </div>

            <div className="about-highlight-card">
              <span className="about-highlight-icon">◈</span>
              <h4>Mobile Development</h4>
              <p>Creating applications with Flutter and Dart.</p>
            </div>

            <div className="about-highlight-card">
              <span className="about-highlight-icon">⌁</span>
              <h4>Backend Development</h4>
              <p>Working with APIs, databases, and server-side logic.</p>
            </div>

            <div className="about-highlight-card">
              <span className="about-highlight-icon">✳</span>
              <h4>Continuous Learning</h4>
              <p>Exploring new technologies and improving every day.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;