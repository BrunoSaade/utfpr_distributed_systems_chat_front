import axios from 'axios';
import Vue from 'vue';
import notify from "../mixins/notify"

const apiBaseUrl = 'http://localhost:8080';

const api = axios.create({
  baseURL: apiBaseUrl,
  headers:{ 
    "ngrok-skip-browser-warning":"any"
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error;
    console.log(response)
    if (response.status === 401 && config.url.includes('auth')) {
      window.localStorage.clear()
      window.location.href = '/'        
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

const endpoints = {
  signIn: '/auth/sign-in',
  register: '/auth/register',
  me: '/auth/me',
  findAllChats: '/chats/',
  findAllMessages: '/messages/',
  findContact: '/users/',
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
  findAllMessages: (token, chatId, pagination) => {
    return api.get(
      endpoints.findAllMessages + chatId, 
      {
        headers: {'Authorization': 'Bearer ' + token},
        params: pagination
      },
    )  
  },
  findContact: (token, userEmail) => {
    return api.get(endpoints.findContact + userEmail, {headers: {'Authorization': 'Bearer ' + token}})  
  },
};
