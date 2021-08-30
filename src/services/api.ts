import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quick-dates.herokuapp.com',
});

export default api;
