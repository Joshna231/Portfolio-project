import { useEffect, useState } from 'react';
import './index.css';
import { fetchResume } from './api';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Education  from './components/Education';
import Contact    from './components/Contact';

export default function App() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    fetchResume()
      .then(data => { setResume(data); setLoading(false); })
      .catch(err => {
        console.error('API error:', err);
        setError('Could not connect to the backend API. Make sure the server is running on port 5000.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader" />
        <p className="loader-text">Loading resume data…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-wrapper">
        <h2>⚠️ API Connection Error</h2>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar     name={resume.name} />
      <Hero       data={resume} />
      <About      data={resume} />
      <Skills     skills={resume.skills} />
      <Experience experience={resume.experience} />
      <Projects   projects={resume.projects} />
      <Education  education={resume.education} certifications={resume.certifications} />
      <Contact    data={resume} />
    </>
  );
}
