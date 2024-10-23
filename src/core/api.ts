import axios from 'axios';
import { toast } from 'react-toastify';
import { useLoadingStore } from '../state/storeLoading';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    useLoadingStore.getState().startLoading();
    return config;
  },
  (error) => {
    setTimeout(() => useLoadingStore.getState().stopLoading(), 1000);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    if (response.data.error_code === 500) {
      setTimeout(() => useLoadingStore.getState().stopLoading(), 1000);
      toast.error('Ops! algo inesperado aconteceu');
      return response;
    }
    if (response.data.message) {
      toast.success(response.data.message);
    } else if (response.data.error_code) {
      toast.error(response.data.error_message);
    }

    setTimeout(() => useLoadingStore.getState().stopLoading(), 1000);
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 500) {
      setTimeout(() => useLoadingStore.getState().stopLoading(), 1000);
      toast.error('Ops! algo inesperado aconteceu');
    }

    setTimeout(() => useLoadingStore.getState().stopLoading(), 1000);
    toast.error(error.response.data.detail);
    return Promise.reject(error);
  },
);

export default api;
