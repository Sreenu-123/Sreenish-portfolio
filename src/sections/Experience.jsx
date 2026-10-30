import '../styles/Experience.css';

const journey = [
  {
    id: '01',
    type: 'EDUCATION',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'Undergraduate Degree',
    period: 'Currently Pursuing',
    description:
      'Developing a foundation in computer science, software development, programming, and problem-solving.',
  },
  {
    id: '02',
    type: 'INDEPENDENT DEVELOPMENT',
    title: 'Personal Projects & Development',
    organization: 'Self-Directed Learning',
    period: 'Ongoing',
    description:
      'Building practical experience through web applications, mobile development, backend APIs, and database integration.',
  },
];

const focusAreas = [
  'React & JavaScript',
  'Flutter & Dart',
  'FastAPI & Python',
  'PostgreSQL',
  'REST API Development',
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <p className="section-eyebrow">THE JOURNEY</p>

          <h2>
            Learning. Building.
            <span> Growing.</span>
          </h2>

          <p className="experience-description">
            Every project, every challenge, and every new
            skill is part of my journey as a developer.
          </p>
        </div>

        <div className="experience-layout">

          {/* LEFT: TIMELINE */}

          <div className="experience-timeline">
            {journey.map((item) => (
              <article
                className="experience-card"
                key={item.id}
              >
                <div className="experience-marker">
                  <span>{item.id}</span>
                </div>

                <div className="experience-card-content">
                  <div className="experience-card-top">
                    <span className="experience-type">
                      {item.type}
                    </span>

                    <span className="experience-period">
                      {item.period}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p className="experience-organization">
                    {item.organization}
                  </p>

                  <p className="experience-card-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT: CURRENT FOCUS */}

          <aside className="experience-focus">
            <div className="focus-top">
              <span className="focus-icon">✳</span>
              <span className="focus-label">CURRENT FOCUS</span>
            </div>

            <h3>
              Turning curiosity into
              <span> real-world projects.</span>
            </h3>

            <p className="focus-description">
              I enjoy learning by building. My current
              focus is strengthening my development skills
              and creating practical applications.
            </p>

            <div className="focus-divider" />

            <p className="focus-subtitle">
              TECHNOLOGIES I WORK WITH
            </p>

            <div className="focus-tags">
              {focusAreas.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="focus-bottom">
              <span className="focus-status-dot" />
              <span>Always learning. Always building.</span>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

export default Experience;