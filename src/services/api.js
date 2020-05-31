import axios from 'axios';

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'https://github.com/'
    : 'http://localhost:3333';

const api = axios.create({
  baseURL,
});

export default api;
