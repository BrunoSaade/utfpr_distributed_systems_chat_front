import ApiService from '../services/api';
import SocketService from '../services/socket'
import * as types from "@/store/types/action-types"
import * as mutation_types from "@/store/types/mutation-types"

const actions = {
  [types.POST_SIGNUP]: async function ({ dispatch, commit, state }) {
    try {
      const body = {
        name: state.auth.signup.name,
        email: state.auth.signup.email,
        password: state.auth.signup.password,
      };
      const response = await ApiService.register(body);
      window.localStorage.setItem('token', response.data.data.accessToken)

      await dispatch(types.GET_ME)
      await dispatch(types.GET_FIND_ALL_CHATS)
      
      return response;
    } catch (error) {
      throw error;
    }
  },
  [types.POST_SIGNIN]: async function ({ dispatch, commit, state }) {
    try {
      const body = {
        email: state.auth.signin.email,
        password: state.auth.signin.password,
      };
      const response = await ApiService.signIn(body);
      window.localStorage.setItem('token', response.data.data.accessToken)
      await dispatch(types.GET_ME)
      await dispatch(types.GET_FIND_ALL_CHATS)
      this.$router.push('/main/chat/')
      return response;
    } catch (error) {
      throw error; 
    }
  },
  [types.GET_ME]: async function ({dispatch, commit, state}) {
    try {
      const token = window.localStorage.getItem('token')
      const response = await ApiService.me(token)
      const account = response.data.data

      commit(mutation_types.SET_ID_ACCOUNT, account.id)
      commit(mutation_types.SET_NAME_ACCOUNT, account.name)
      commit(mutation_types.SET_EMAIL_ACCOUNT, account.email)
      commit(mutation_types.SET_CREATED_AT_ACCOUNT, account.createdAt)
      commit(mutation_types.SET_UPDATED_AT_ACCOUNT, account.updatedAt)
      
    } catch (error) {
      throw error
    }
  },
  [types.GET_FIND_ALL_CHATS]: async function ({commit, state}) {
    try {
      const token = window.localStorage.getItem('token')
      const response = await ApiService.findAllChats(token)

      commit(mutation_types.SET_CHATS, response.data.data.list)

      return response
    } catch (error) {
      throw error
    }
  },
  [types.GET_FIND_ALL_MESSAGES]: async function ({commit, state}, {pagination}) {
    try {
      const chatId = state.selectedChat.id

      const token = window.localStorage.getItem('token')
      const response = await ApiService.findAllMessages(token, chatId, pagination)
      const reversedMessages = response.data.data.list.reverse();

      commit(mutation_types.SET_MESSAGES, {
        chatId: chatId, 
        messages: reversedMessages
      })
      return response
    } catch (error) {
      throw error
    }
  },
  [types.GET_FIND_CONTACT]: async function ({commit, state}) {
    try {
      const userEmail = state.userEmailToFind
      const token = window.localStorage.getItem('token')
      const response = await ApiService.findContact(token, userEmail)
      const foundedContact = response.data.data

      const temporaryChat = {
        recipient: {
          id: foundedContact.id,
          name: foundedContact.name,
          email: foundedContact.email,
          createdAt: foundedContact.createdAt,
          updatedAt: foundedContact.updatedAt,
        },
        id: foundedContact.email+":"+state.account.email,
        read: false,
        lastMessage: '',
        createdAt: null,
        updatedAt: null,
      }

      const newTemporaryChats = [...state.temporaryChats, temporaryChat]
      commit(mutation_types.SET_TEMPORARY_CHATS, newTemporaryChats)
      return response
    } catch (error) {
      throw error
    }
  },
};

export default actions