import api from '../../services/OlhoVivoAPI';

export const getLines = async () => {
  try {
    const response = await api.get('Linha/Buscar');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
