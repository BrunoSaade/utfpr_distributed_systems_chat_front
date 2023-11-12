import axios from 'axios';

const apiBaseUrl = 'http://localhost:8080';

const api = axios.create({
  baseURL: apiBaseUrl,
});

const endpoints = {
  signIn: '/auth/sign-in',
  register: '/auth/register',
  me: '/auth/me',
  findAllChats: '/chats/',
  findAllMessages: '/messages/',
};

export default {
  register: (body) => {
    return api.post(endpoints.register, body);
  },
  signIn: (body) => {
    return api.post(endpoints.signIn, body);
  },
  me: (token) => {
    return api.get(endpoints.me, {headers: {'Authorization': 'Bearer ' + token}})
  },
  findAllChats: (token) => {
    return api.get(endpoints.findAllChats, {headers: {'Authorization': 'Bearer ' + token}}) 
  },
  findAllMessages: (token, chatId) => {
    return api.get(endpoints.findAllMessages + chatId, {headers: {'Authorization': 'Bearer ' + token}})  
  }
};
