import api from '../core/api';
import { Official } from '../core/types';

const calculateQuotas = async (request: Official) => {
  try {
    const { data } = await api.post('/get/calculadora_cotas', request);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default calculateQuotas;
