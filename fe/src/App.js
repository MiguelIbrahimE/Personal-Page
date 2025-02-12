import React from 'react';
import './App.css';

/**
 * Simple inline SVG components for LinkedIn & GitHub icons
 * (No extra dependencies required)
 */
const LinkedInIcon = () => (
    <svg
        className="social-icon"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>LinkedIn</title>
        <path d="M19 0h-14c-2.761...Z" />
        {/*
      Replace the path data above with your preferred LinkedIn SVG path.
      This is shortened for brevity. Use a full icon path from a source like
      https://simpleicons.org/?q=linkedin
    */}
    </svg>
);

const GitHubIcon = () => (
    <svg
        className="social-icon"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12..." />
        {/*
      Replace the path data above with your preferred GitHub SVG path.
      This is shortened for brevity. Use a full icon path from a source like
      https://simpleicons.org/?q=github
    */}
    </svg>
);

/**
 * Experience Section
 * Lists work experience with role, company, location, and bullet points.
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
 * Lists educational background.
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
 * Displays major projects with descriptions and tech stacks.
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
 * Highlights skills in data engineering, AI, etc.
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
 * Lists languages with proficiency levels.
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
                        Gent, Belgium &nbsp;|&nbsp; +32 471 661 508 &nbsp;|&nbsp;
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
                {/* Removed PersonalInfo component to avoid duplication */}
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
