import '../styles/Projects.css';

const projects = [
  {
    number: '01',
    name: 'Paisa Tracker',
    category: 'FULL-STACK WEB APP',
    status: 'Live',
    description:
      'A personal finance tracker with user authentication, transaction management, and persistent database storage.',
    stack: ['React', 'FastAPI', 'PostgreSQL'],
    image: '/images/paisa-tracker.png',
    link: 'https://paisa-tracker-1-r0qe.onrender.com',
    linkLabel: 'View Live Project',
  },
  {
    number: '02',
    name: 'FitNovaX',
    category: 'FITNESS MOBILE APP',
    status: 'In Development',
    description:
      'A gamified fitness app focused on workout planning, nutrition tracking, progress monitoring, and fitness goals.',
    stack: ['Flutter', 'Dart', 'FastAPI'],
    image: '/images/fitnovax.png',
    link: null,
    linkLabel: null,
  },
  {
    number: '03',
    name: 'ASHWA AI',
    category: 'AI-POWERED MOBILE APP',
    status: 'In Development',
    description:
      'An equestrian training app exploring pose estimation and computer vision to support horse-riding technique feedback.',
    stack: ['Flutter', 'FastAPI', 'OpenCV', 'YOLO'],
    image: '/images/ashwa-ai.png',
    link: null,
    linkLabel: null,
  },
  {
    number: '04',
    name: 'IRONVAULT',
    category: 'GYM WEBSITE',
    status: 'Live',
    description:
      'A premium, responsive gym website built with React, Vite and CSS, featuring a bold dark aesthetic and neon-lime accents.',
    stack: ['React', 'Vite', 'CSS'],
    image: '/images/ironvault.png',
    link: 'https://ironvault-gym-website.vercel.app',
    linkLabel: 'View Live Project',
  },
  {
    number: '05',
    name: 'SplitMate',
    category: 'EXPENSE SHARING MOBILE APP',
    status: 'In Development',
    description:
      'An expense-sharing app that helps users manage groups, track shared expenses, calculate balances, and manage settlements.',
    stack: ['Flutter', 'Dart'],
    image: '/images/splitmate.png',
    link: null,
    linkLabel: null,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-eyebrow">SELECTED WORK</p>

          <h2>
            Projects I've <span>built.</span>
          </h2>

          <p className="section-description">
            A selection of applications and ideas I'm building,
            learning from, and improving.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {projects.map((project) => {
            const isMobileApp =
              project.category.includes('MOBILE APP');

            return (
              <article
                className="project-card"
                key={project.number}
              >
                {/* Project Preview Image */}
                {project.image && (
                  <div
                    className={`project-image ${
                      isMobileApp ? 'project-image-mobile' : ''
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} project preview`}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Number and Status */}
                <div className="project-card-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span
                    className={`project-status ${
                      project.status === 'Live'
                        ? 'status-live'
                        : 'status-progress'
                    }`}
                  >
                    <span className="project-status-dot" />
                    {project.status}
                  </span>
                </div>

                {/* Project Details */}
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <div className="project-card-footer">
                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkLabel} <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-coming-soon">
                      Currently building
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;