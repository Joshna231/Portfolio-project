const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for the public API
  methods: ['GET'],
}));
app.use(express.json());

// Load resume data
const resumeData = require('./data/resume.json');

// ─── Routes ────────────────────────────────────────────────────────────────

// Full resume
app.get('/api/resume', (req, res) => {
  res.json({ success: true, data: resumeData });
});

// Individual sections
app.get('/api/resume/skills',         (req, res) => res.json({ success: true, data: resumeData.skills }));
app.get('/api/resume/experience',     (req, res) => res.json({ success: true, data: resumeData.experience }));
app.get('/api/resume/education',      (req, res) => res.json({ success: true, data: resumeData.education }));
app.get('/api/resume/projects',       (req, res) => res.json({ success: true, data: resumeData.projects }));
app.get('/api/resume/certifications', (req, res) => res.json({ success: true, data: resumeData.certifications }));
app.get('/api/resume/achievements',   (req, res) => res.json({ success: true, data: resumeData.achievements }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Resume Portfolio API',
    version: '1.0.0',
    endpoints: [
      'GET /api/resume',
      'GET /api/resume/skills',
      'GET /api/resume/experience',
      'GET /api/resume/education',
      'GET /api/resume/projects',
      'GET /api/resume/certifications',
      'GET /api/resume/achievements',
    ],
  });
});

// ─── Start Server ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Resume API running at http://localhost:${PORT}`);
  console.log(`📄 Full resume:  http://localhost:${PORT}/api/resume`);
  console.log(`❤️  Health:       http://localhost:${PORT}/health\n`);
});
