import api from '../core/api';
import { Official } from '../core/types';

const createNewOfficial = async (request: Official) => {
  try {
    const { data } = await api.post('/add/funcionarios', request);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default createNewOfficial;
