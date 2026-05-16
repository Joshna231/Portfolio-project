import './Contact.css';

export default function Contact({ data }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-divider" />
          <p>I'd love to hear from you</p>
        </div>

        <div className="contact-wrapper">
          {/* Info */}
          <div className="contact-info fade-in-up">
            <h3>Let's Work Together</h3>
            <p className="contact-text">
              Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open!
            </p>
            <div className="contact-items">
              <a href={`mailto:${data.email}`} className="contact-item glass-card">
                <span className="contact-item-icon">✉️</span>
                <div>
                  <p className="contact-item-label">Email</p>
                  <p className="contact-item-value">{data.email}</p>
                </div>
              </a>
              <a href={`tel:${data.phone}`} className="contact-item glass-card">
                <span className="contact-item-icon">📱</span>
                <div>
                  <p className="contact-item-label">Phone</p>
                  <p className="contact-item-value">{data.phone}</p>
                </div>
              </a>
              <div className="contact-item glass-card">
                <span className="contact-item-icon">📍</span>
                <div>
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value">{data.location}</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={data.github}   target="_blank" rel="noreferrer" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 .77 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <div className="contact-cta glass-card fade-in-up" style={{animationDelay:'0.15s'}}>
            <div className="cta-decoration">
              <span>💼</span>
            </div>
            <h3>Open to Opportunities</h3>
            <p>Currently available for full-time roles, freelance projects, and interesting collaborations.</p>
            <a href={`mailto:${data.email}`} className="btn btn-primary cta-btn">
              Send Message ✉️
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Built with ❤️ by <strong>{data.name}</strong> · React + Node.js</p>
        <p className="footer-sub">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </section>
  );
}
