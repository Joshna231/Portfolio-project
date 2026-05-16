import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const fetchResume = () => api.get('/api/resume').then(r => r.data.data);
export default api;
