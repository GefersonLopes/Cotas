import api from '../core/api';

const findOfficials = async (id: number) => {
  try {
    const { data } = await api.get(`/get/funcionarios/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default findOfficials;
