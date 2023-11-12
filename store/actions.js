import ApiService from '../services/api';
import {
  POST_SIGNUP,
  POST_SIGNIN,
} from './types/action-types'
import * as mutation_types from "@/store/types/mutation-types"

const actions = {
  [POST_SIGNUP]: async function ({ commit, state }) {
    try {
      const body = {
        name: state.auth.signup.name,
        email: state.auth.signup.email,
        password: state.auth.signup.password,
      };
      const response = await ApiService.register(body);
      window.localStorage.setItem('token', response.data.data.accessToken)
      return response;
    } catch (error) {
      throw error;
    }
  },
  [POST_SIGNIN]: async function ({ commit, state }) {
    try {
      const body = {
        email: state.auth.signin.email,
        password: state.auth.signin.password,
      };
      const response = await ApiService.signIn(body);
      window.localStorage.setItem('token', response.data.data.accessToken)
      setTimeout(() => {
        this.$router.push('/main/chat/')
      }, 2000)
      // chamar auth/me
      return response;
    } catch (error) {
      throw error; 
    }
  },
};

export default actions