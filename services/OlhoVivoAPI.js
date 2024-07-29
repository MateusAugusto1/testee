import axios from 'axios';
import { OLHO_VIVO_API_KEY } from '../config.js';

const api = axios.create({
    baseURL: 'http://api.olhovivo.sptrans.com.br/v2.1/',
});

export const login = async () => {
    try {
        const response = await api.post('Login/Autenticar', null, {
            params: { token: OLHO_VIVO_API_KEY }
        });
        console.log('Login response:', response.data);
    } catch (error) {
        console.error('Login error:', error);
    }
};

export const getLines = async () => {
    try {
        await login();
        const response = await api.get('Linha/Buscar');
        console.log('Get lines response:', response.data);
        return response;
    } catch (error) {
        console.error('Get lines error:', error);
    }
};

export default api;
