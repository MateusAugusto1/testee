import api from '../../services/OlhoVivoAPI';

export const getVehicles = async () => {
  try {
    const response = await api.get('Posicao');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
