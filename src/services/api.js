import axios from 'axios';

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'https://viridi-api.herokuapp.com'
    : 'https://viridi-api.herokuapp.com';

const api = axios.create({
  baseURL,
});

export default api;
