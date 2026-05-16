import './Projects.css';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="section-divider" />
          <p>Things I've built that I'm proud of</p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="project-card glass-card fade-in-up"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {/* Header */}
              <div className="project-header">
                <div className="project-icon">🚀</div>
                <div className="project-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" title="GitHub" className="project-link-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" title="Live Demo" className="project-link-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-name">{proj.name}</h3>
              <p className="project-desc">{proj.description}</p>

              {/* Highlights */}
              <ul className="project-highlights">
                {proj.highlights.map((h, i) => (
                  <li key={i}><span className="bullet">▹</span>{h}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="project-tech">
                {proj.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
