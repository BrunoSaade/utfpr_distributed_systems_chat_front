import axios from 'axios';

const apiBaseUrl = 'http://localhost:8080';

const api = axios.create({
  baseURL: apiBaseUrl,
});

const endpoints = {
  signIn: '/auth/signin',
  register: '/auth/register', // Corrigido o nome da rota
};

export default {
  register: (body) => {
    return api.post(endpoints.register, body);
  },
};
