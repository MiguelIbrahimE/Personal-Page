import React from 'react';
import './App.css';

/**
 * LinkedIn Icon (fully included)
 * Source: https://simpleicons.org/icons/linkedin.svg
 */
const LinkedInIcon = () => (
    <svg
        className="social-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>LinkedIn</title>
        <path d="M19 0h-14c-2.7619 0-5 2.2381-5 5v14c0
             2.7619 2.2381 5 5 5h14c2.7619 0 5-2.2381
             5-5v-14c0-2.7619-2.2381-5-5-5zm-11.75
             19h-2.5v-10.5h2.5zm-1.25-12c-.8284 0-1.5-.6716-1.5-1.5s.6716
             -1.5 1.5-1.5 1.5.6716 1.5
             1.5-.6716 1.5-1.5 1.5zm13
             12h-2.5v-5.6c0-.9678-.7822-1.75
             -1.75-1.75s-1.75.7822-1.75
             1.75v5.6h-2.5v-10.5h2.5v1.3828c.6575-.8281
             1.655-1.3828 2.75-1.3828 1.933 0
             3.5 1.567 3.5 3.5z" />
    </svg>
);

/**
 * GitHub Icon (fully included)
 * Source: https://simpleicons.org/icons/github.svg
 */
const GitHubIcon = () => (
    <svg
        className="social-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12
             12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82
             -.577v-2.234c-3.338.726-4.033-1.416
             -4.033-1.416-.546-1.387-1.333-1.757-1.333
             -1.757-1.089-.744.084-.729.084-.729
             1.205.084 1.839 1.236 1.839
             1.236 1.07 1.835 2.807 1.304
             3.492.997.108-.776.417-1.305.76
             -1.605-2.665-.305-5.466-1.332
             -5.466-5.93 0-1.31.469
             -2.381 1.236-3.221-.123-.304
             -.536-1.524.117-3.176 0 0 1.008
             -.322 3.301 1.23.958-.266
             1.983-.399 3.003-.405
             1.02.006 2.045.139 3.004.405
             2.291-1.552 3.299-1.23 3.299
             -1.23.653 1.652.24 2.872.117
             3.176.77.84 1.236 1.911 1.236
             3.221 0 4.61-2.807 5.624
             -5.479 5.921.43.371.81 1.102.81
             2.221v3.293c0 .319.216.694.82.576a12.042
             12.042 0 0 0 8.205-11.385c0
             -6.627-5.373-12-12-12z" />
    </svg>
);

/**
 * Experience Section
 */
function Experience() {
    return (
        <section className="experience">
            <h2>Experience</h2>

            <div className="job">
                <h3>Data Engineer Intern, Kapernikov</h3>
                <p className="job-dates">Feb 2025 — Present | Brussels</p>
                <ul>
                    <li>
                        Containerized compilation and execution of a custom C++/CMake-based
                        AI classification model using Docker.
                    </li>
                    <li>
                        Integrated the AI model into a Python-based Dagster data pipeline,
                        enabling real-time analytics for 10+ TB PointCloud datasets.
                    </li>
                    <li>
                        Implemented CI/CD best practices and automated testing frameworks,
                        reducing runtime errors for high-volume data applications.
                    </li>
                    <li>
                        Worked with data scientists and engineers to align the AI model
                        with business requirements.
                    </li>
                </ul>
            </div>

            <div className="job">
                <h3>Data Analytics, Ardeh Medics</h3>
                <p className="job-dates">Jan 2023 — Aug 2024 | Beirut</p>
                <ul>
                    <li>
                        Collected and processed clinical data to improve accessibility
                        and documentation.
                    </li>
                    <li>
                        Used R, MySQL, JSON, JavaScript to transform and upload data to
                        an existing website.
                    </li>
                </ul>
            </div>

            <div className="job">
                <h3>Research Intern, UNESCO | CISH</h3>
                <p className="job-dates">Jun 2021 — Jun 2022 | Jbeil</p>
                <ul>
                    <li>
                        Contributed as a research assistant for “AI and its effects on
                        humanity”.
                    </li>
                    <li>
                        Designed and maintained the project’s website and digital content.
                    </li>
                </ul>
            </div>

            <div className="job">
                <h3>Information Technology Trainer, Geek Express</h3>
                <p className="job-dates">Nov 2022 — Jun 2023 | Beirut</p>
                <ul>
                    <li>Managed game development curriculum material and student training.</li>
                </ul>
            </div>
        </section>
    );
}

/**
 * Education Section
 */
function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="edu-item">
                <h3>Lebanese American University</h3>
                <p className="edu-dates">
                    Sep 2020 — Jul 2023 | Bachelor of Science in Computer Science
                </p>
                <p>Graduated with a focus on Artificial Intelligence.</p>
            </div>
        </section>
    );
}

/**
 * Projects Section
 */
function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-item">
                <h3>Prometheus – Echo</h3>
                <p className="project-dates">Sep 2024 — Present | Gent</p>
                <p>
                    Echo is a SaaS application that helps individuals and large
                    companies maintain code quality and generate various documentation
                    (user manuals, code docs, etc.).
                </p>
                <p>
                    <strong>Tech Stack:</strong> Node.js, React.tsx, Docker, API, GitHub,
                    Code Documentation, SaaS, Postgres
                </p>
            </div>

            <div className="project-item">
                <h3>PlayLink – Group of 9 Project</h3>
                <p className="project-dates">Sep 2023 — Jun 2024 | Gent</p>
                <p>
                    PlayLink is a cross-platform application offering customizable
                    games for groups, featuring a drag-and-drop interface (Blockly)
                    for game customization.
                </p>
                <p>
                    <strong>Tech Stack:</strong> Django, Docker, Linux, React.tsx,
                    User Manuals, Jest, CSS, HTML, GitHub, Jira
                </p>
            </div>
        </section>
    );
}

/**
 * Skills Section
 */
function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <p>
                Data Engineering & Processing – Software Development – Machine
                Learning & A.I – Documentation & Research
            </p>
        </section>
    );
}

/**
 * Languages Section
 */
function Languages() {
    return (
        <section className="languages">
            <h2>Languages</h2>
            <ul>
                <li><strong>English</strong> (Fluent)</li>
                <li><strong>Arabic</strong> (Native)</li>
                <li><strong>Chinese</strong> (Native)</li>
                <li><strong>French</strong> (Intermediate)</li>
                <li><strong>Dutch</strong> (Basic)</li>
                <li><strong>Spanish</strong> (Intermediate)</li>
            </ul>
        </section>
    );
}

/**
 * Main App Component
 */
function App() {
    return (
        <div className="app-container">
            {/* Header: Picture on left, Name/Position/Contact/Icons on right */}
            <header className="app-header">
                <div className="header-left">
                    <img
                        src="/Migo_pic.jpeg"
                        alt="Miguel"
                        className="profile-pic"
                    />
                </div>

                <div className="header-right">
                    <h1 className="header-name">MIGUEL IBRAHIM</h1>
                    <p className="header-position">Data Engineer | Kapernikov</p>

                    {/* Location / Phone / Email */}
                    <p className="header-contact">
                        Gent, Belgium &nbsp;|&nbsp; +32 471 661 508 &nbsp;|&nbsp;{' '}
                        <a
                            className="contact-link"
                            href="mailto:miguelibrahim2002@gmail.com"
                        >
                            miguelibrahim2002@gmail.com
                        </a>
                    </p>

                    {/* Social icons */}
                    <div className="header-icons">
                        <a
                            href="https://www.linkedin.com/in/miguel-ibrahim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-link"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="https://github.com/MiguelIbrahimE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-link"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="app-main">
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Languages />
            </main>

            {/* Footer */}
            <footer className="app-footer">
                <p>&copy; {new Date().getFullYear()} Miguel Ibrahim. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
