import './About.css';

export default function About({ data }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-divider" />
          <p>Get to know me better</p>
        </div>

        <div className="about-grid">
          {/* Avatar Card */}
          <div className="about-avatar-wrap glass-card fade-in-up">
            <div className="avatar-circle">
              {data.name?.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <h3 className="avatar-name">{data.name}</h3>
            <p className="avatar-role">{data.title}</p>
            <div className="avatar-links">
              <a href={`mailto:${data.email}`} className="btn btn-primary" style={{fontSize:'0.82rem',padding:'8px 18px'}}>
                ✉️ Email Me
              </a>
            </div>
          </div>

          {/* Summary Card */}
          <div className="about-info fade-in-up" style={{animationDelay:'0.15s'}}>
            <p className="about-summary">{data.summary}</p>

            <div className="about-stats">
              <div className="stat-card glass-card">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-num">10+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-num">2</span>
                <span className="stat-label">AWS Certifications</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="achievements-list">
              <h4>Key Achievements</h4>
              <ul>
                {data.achievements?.map((ach, i) => (
                  <li key={i} className="achievement-item">{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
