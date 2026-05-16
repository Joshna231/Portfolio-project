import './Education.css';

export default function Education({ education, certifications }) {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2>Education &amp; Certifications</h2>
          <div className="section-divider" />
          <p>My academic background and credentials</p>
        </div>

        <div className="edu-grid">
          {/* Education */}
          <div>
            <h3 className="edu-sub-title">🎓 Education</h3>
            {education.map((edu, idx) => (
              <div key={edu.id} className="edu-card glass-card fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="edu-header">
                  <div>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                    <p className="edu-location">{edu.location}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="tag">{edu.duration}</span>
                    <span className="tag emerald">{edu.grade}</span>
                  </div>
                </div>
                <div className="edu-highlights">
                  {edu.highlights.map(h => (
                    <span key={h} className="tag violet">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="edu-sub-title">🏅 Certifications</h3>
            <div className="cert-list">
              {certifications.map((cert, idx) => (
                <a
                  key={cert.id}
                  href={cert.badge}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-card glass-card fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="cert-badge">🏅</div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} · {cert.year}</p>
                  </div>
                  <span className="cert-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
