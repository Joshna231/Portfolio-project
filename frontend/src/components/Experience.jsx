import './Experience.css';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <div className="section-divider" />
          <p>My professional journey so far</p>
        </div>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="timeline-item fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Dot + line */}
              <div className="timeline-line">
                <div className="timeline-dot" />
              </div>

              {/* Card */}
              <div className="timeline-card glass-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} • {exp.location}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="tag">{exp.duration}</span>
                    <span className="tag emerald">{exp.type}</span>
                  </div>
                </div>
                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>
                      <span className="bullet">▹</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
