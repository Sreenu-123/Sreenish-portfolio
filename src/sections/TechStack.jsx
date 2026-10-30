
import '../styles/TechStack.css';

const techRows = [
  {
    direction: 'left',
    speed: '32s',
    technologies: [
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Git',
      'PostgreSQL',
    ],
  },
  {
    direction: 'right',
    speed: '38s',
    technologies: [
      'Flutter',
      'Dart',
      'FastAPI',
      'REST APIs',
      'Clean Architecture',
      'State Management',
      'GitHub',
    ],
  },
  {
    direction: 'left',
    speed: '35s',
    technologies: [
      'VS Code',
      'React.js',
      'Flutter App Development',
      'Python',
      'PostgreSQL',
      'JavaScript',
      'FastAPI',
    ],
  },
];

function TechStack() {
  return (
    <section className="tech-section" id="skills">
      <div className="tech-container">

        {/* Section Heading */}
        <div className="tech-heading">
          <p className="section-eyebrow">MY TOOLKIT</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p className="tech-description">
            A collection of technologies, tools, and
            concepts I use while building digital products.
          </p>
        </div>

        {/* Scrolling Technology Rows */}
        <div className="tech-marquee">

          {techRows.map((row, index) => (
            <div
              className={`tech-marquee-row ${row.direction}`}
              key={index}
            >
              <div
                className="tech-marquee-track"
                style={{
                  '--scroll-speed': row.speed,
                }}
              >
                {[0, 1].map((copy) => (
                  <div
                    className="tech-marquee-group"
                    key={copy}
                    aria-hidden={copy === 1}
                  >
                    {row.technologies.map((technology, i) => (
                      <span
                        className="tech-pill"
                        key={`${technology}-${i}`}
                      >
                        {technology}
                        <span className="tech-pill-dot" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        <p className="tech-footer">
          Always exploring. Always building. Always learning.
        </p>

      </div>
    </section>
  );
}

export default TechStack;
