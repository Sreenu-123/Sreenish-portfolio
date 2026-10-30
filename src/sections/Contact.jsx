
import '../styles/Contact.css';

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <div className="contact-content">
                    <p className="section-eyebrow">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Let's build something
                        <span> great.</span>
                    </h2>

                    <p className="contact-description">
                        Have a project idea, an opportunity, or just
                        want to connect? Feel free to reach out.
                        I'm always open to meaningful conversations.
                    </p>

                    <div className="contact-actions">
                        <a
                            href="mailto:sreenishhari123@gmail.com"
                            className="contact-button"
                        >
                            <span>Let's Talk</span>
                            <span>↗</span>
                        </a>

                        <a
                            href="https://github.com/Sreenu-123"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-secondary"
                        >
                            GitHub ↗
                        </a>
                        <a
                            href="https://www.instagram.com/sree.eenu__/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-secondary"
                        >
                            Instagram ↗
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-secondary"
                        >
                            View Resume ↗
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <span className="contact-card-icon">✳</span>

                    <p className="contact-card-label">
                        HAVE AN IDEA?
                    </p>

                    <h3>
                        Let's turn it into
                        <span> something real.</span>
                    </h3>

                    <p>
                        I'm interested in opportunities to learn,
                        collaborate, and build useful digital products.
                    </p>

                    <div className="contact-availability">
                        <span className="contact-status-dot" />
                        Open to opportunities
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;