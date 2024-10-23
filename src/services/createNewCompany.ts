import api from '../core/api';
import { Company } from '../core/types';

const createNewCompany = async (request: Company) => {
  try {
    const { data } = await api.post('/add/empresas', request);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default createNewCompany;
