import React from 'react';
import './App.css';

/** LinkedIn Icon */
const LinkedInIcon = () => (
    <svg
        className="social-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>LinkedIn</title>
        <path d="M19 0h-14C2.2381 0 0
      2.2381 0 5v14c0 2.7619 2.2381
      5 5 5h14c2.7619 0 5-2.2381
      5-5V5c0-2.7619-2.2381-5
      -5-5zM7.2812 19H4.4531V8.9531
      h2.8281zm-1.4062-11.6406c
      -.9033 0-1.6406-.7372-1.6406
      -1.6406 0-.9033.7372-1.6406
      1.6406-1.6406.9033 0
      1.6406.7372 1.6406 1.6406
      0 .9033-.7372 1.6406
      -1.6406 1.6406zm13.125
      11.6406h-2.8281v-5.373c0
      -1.2812-.0234-2.9297-1.7813
      -2.9297-1.7812 0-2.0547
      1.3906-2.0547 2.8281v5.4746
      h-2.8281V8.9531h2.7188v1.375
      h.0391c.3789-.7188 1.3008
      -1.4766 2.6797-1.4766
      2.8672 0 3.3906 1.8867
      3.3906 4.3398z"
        />
    </svg>
);

/** GitHub Icon */
const GitHubIcon = () => (
    <svg
        className="social-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>GitHub</title>
        <path d="M12 .297C5.373.297 0
      5.67 0 12.297c0 5.303
      3.438 9.8 8.205
      11.387.6.113.82-.258
      .82-.577v-2.234c-3.338.726
      -4.033-1.416-4.033-1.416
      -.546-1.387-1.333-1.757
      -1.333-1.757-1.089-.744
      .084-.729.084-.729
      1.205.084 1.839 1.236
      1.839 1.236 1.07 1.835
      2.807 1.304 3.492.997.108
      -.776.417-1.305.76
      -1.605-2.665-.305-5.466
      -1.332-5.466-5.93
      0-1.31.469-2.381
      1.236-3.221-.123-.304
      -.536-1.524.117-3.176
      0 0 1.008-.322
      3.301 1.23.958-.266
      1.983-.399 3.003-.405
      1.02.006 2.045.139
      3.004.405 2.291-1.552
      3.299-1.23 3.299-1.23.653
      1.652.24 2.872.117
      3.176.77.84 1.236
      1.911 1.236 3.221
      0 4.61-2.807 5.624
      -5.479 5.921.43.371.81
      1.102.81 2.221v3.293c0
      .319.216.694.82.576A12.041
      12.041 0 0024 12.297C24
      5.67 18.627.297 12
      .297z"
        />
    </svg>
);

/**
 * PhotoGallery with 2 columns on large screens, each card 250px tall.
 * Wider cards: "minmax(600px, 1fr)" in the CSS to ensure each card is at least 600px wide.
 */
function PhotoGallery() {
    const images = [
        '/gent-sint-p.jpeg',
        '/vw-train.jpeg',
        '/cat-in-a-jar.jpeg',
        '/antwerp-c.jpeg',
        '/abdij.jpeg',
        '/1898-de-post.jpeg',
        // Add or remove as needed
    ];

    return (
        <section className="photo-gallery-section">
            <h2>Photography</h2>
            <p>Now the cards are wider and shorter in height.</p>

            <div className="photo-grid">
                {images.map((src, idx) => (
                    <div className="photo-card" key={idx}>
                        <img
                            src={src}
                            alt={`photo-${idx}`}
                            className="photo-image"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

function App() {
    return (
        <div className="app-container">
            {/* Header */}
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
                    <p className="header-contact">
                        Gent, Belgium &nbsp;|&nbsp; +32 471 661 508 &nbsp;|&nbsp;{' '}
                        <a
                            className="contact-link"
                            href="mailto:miguelibrahim2002@gmail.com"
                        >
                            miguelibrahim2002@gmail.com
                        </a>
                    </p>
                </div>

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
            </header>

            {/* Main Content */}
            <main className="app-main">
                <PhotoGallery />
            </main>

            {/* Footer */}
            <footer className="app-footer">
                <p>&copy; {new Date().getFullYear()} Miguel Ibrahim. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
