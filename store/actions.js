import ApiService from '../services/api';
import {
  POST_SIGNUP,
} from './types/action-types'

const actions = {
  [POST_SIGNUP]: async function ({ commit, state }) {
    try {
      console.log(state.auth.signup)
      const body = {
        name: state.auth.signup.name,
        email: state.auth.signup.email,
        password: state.auth.signup.password,
      };
      const response = await ApiService.register(body);
      window.localStorage.setItem('token', response.data.data.accessToken)
      return response;
    } catch (error) {
      throw error; // Rejeitar a promessa para propagar o erro
    }
  },
};

export default actions