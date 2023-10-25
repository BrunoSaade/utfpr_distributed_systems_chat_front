import axios from 'axios';

const apiBaseUrl = 'http://localhost:8080';

const api = axios.create({
  baseURL: apiBaseUrl,
});

const endpoints = {
  signIn: '/auth/sign-in',
  register: '/auth/register',
  me: 'auth/me'
};

export default {
  register: (body) => {
    return api.post(endpoints.register, body);
  },
  signIn: (body) => {
    return api.post(endpoints.signIn, body);
  },
  me: (body) => {
    return api.post(endpoints.me, body)
  }
};
