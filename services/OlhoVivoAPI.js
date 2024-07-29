// services/OlhoVivoAPI.js
import axios from 'axios';
import { OLHO_VIVO_API_KEY } from '/config.js';

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

export const getVehicles = async () => {
    try {
        await login();
        const response = await api.get('Posicao');
        console.log('Get vehicles response:', response.data);
        return response;
    } catch (error) {
        console.error('Get vehicles error:', error);
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

export const getStops = async () => {
    try {
        await login();
        const response = await api.get('Parada/Buscar');
        console.log('Get stops response:', response.data);
        return response;
    } catch (error) {
        console.error('Get stops error:', error);
    }
};

export const getArrivalPredictions = async (stopId) => {
    try {
        await login();
        const response = await api.get(`Previsao/Parada?codigoParada=${stopId}`);
        console.log('Get arrival predictions response:', response.data);
        return response;
    } catch (error) {
        console.error('Get arrival predictions error:', error);
    }
};

export default api;
