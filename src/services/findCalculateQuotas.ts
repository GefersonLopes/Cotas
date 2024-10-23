import api from '../core/api';

const findCalculateQuotas = async (empresa_id: number) => {
  try {
    const { data } = await api.get(`/get/calculo-cotas/${empresa_id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default findCalculateQuotas;
