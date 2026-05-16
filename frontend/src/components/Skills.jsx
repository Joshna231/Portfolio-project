import './Skills.css';

const CATEGORY_COLORS = {
  frontend: 'sky',
  backend:  'violet',
  database: 'emerald',
  devops:   'amber',
  tools:    'sky',
};

const CATEGORY_ICONS = {
  frontend: '🎨',
  backend:  '⚙️',
  database: '🗄️',
  devops:   '☁️',
  tools:    '🛠️',
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2>Skills &amp; Technologies</h2>
          <div className="section-divider" />
          <p>My technical stack at a glance</p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={category}
              className="skill-category glass-card fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-category-header">
                <span className="skill-icon">{CATEGORY_ICONS[category] || '💡'}</span>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              </div>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className={`tag ${CATEGORY_COLORS[category] || ''}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
