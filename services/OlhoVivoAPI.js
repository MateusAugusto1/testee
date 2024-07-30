import axios from 'axios';
import { OLHO_VIVO_API_KEY } from '/config';

const api = axios.create({
  baseURL: 'http://api.olhovivo.sptrans.com.br/v2.1/',
});

api.interceptors.request.use(async config => {
  config.headers['api-key'] = OLHO_VIVO_API_KEY;
  return config;
});

export default api;
