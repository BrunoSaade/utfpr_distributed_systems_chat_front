import Vue from "vue";
import * as types from "./types/mutation-types"

const mutations = {
  [types.SET_SELECTED_TAB]: function (state, value) {
    state.selectedTab = value
  },
  [types.SET_SELECTED_CHAT]: function (state, value) {
    state.selectedChat = value
  },
  [types.SET_CHAT]: function (state, value) {
    if (!state.chats.some(chat => chat.id === value.id)) {
      state.chats.push(value);
    }
    this.commit(types.SET_SELECTED_CHAT, value)
    this.commit(types.SET_SELECTED_TAB, 0)
  },
  [types.SET_CHATS]: function (state, value) {
    state.chats = value
  },
  [types.SET_EMAIL_SIGNIN]: function (state, value) {
    state.auth.signin.email = value
  },
  [types.SET_PASSWORD_SIGNIN]: function (state, value) {
    state.auth.signin.password = value
  },
  [types.SET_EMAIL_SIGNUP]: function (state, value) {
    state.auth.signup.email = value
  },
  [types.SET_NAME_SIGNUP]: function (state, value) {
    state.auth.signup.name = value
  },
  [types.SET_PASSWORD_SIGNUP]: function (state, value) {
    state.auth.signup.password = value
  },
  [types.SET_CONFIRM_PASSWORD_SIGNUP]: function (state, value) {
    state.auth.signup.confirmPassword = value
  },
  [types.SET_ID_ACCOUNT]: function (state, value) {
    state.account.id = value
  },
  [types.SET_EMAIL_ACCOUNT]: function (state, value) {
    state.account.email = value
  },
  [types.SET_NAME_ACCOUNT]: function (state, value) {
    state.account.name = value
  },
  [types.SET_CREATED_AT_ACCOUNT]: function (state, value) {
    state.account.createdAt = value
  },
  [types.SET_UPDATED_AT_ACCOUNT]: function (state, value) {
    state.account.updatedAt = value
  },
  [types.SET_MUST_SHOW_CHAT_MOBILE]: function (state, value) {
    state.mustShowChatMobile = value
  },
  [types.SET_MESSAGES]: function (state, { chatId, messages }) {
    Vue.set(state.messages, chatId, messages);
  },
  [types.SET_USER_EMAIL_TO_FIND]: function (state, value) {
    state.userEmailToFind = value
  },
  [types.SET_TEMPORARY_CHATS]: function (state, value) {
    state.temporaryChats = value
  },
}
export default mutations 