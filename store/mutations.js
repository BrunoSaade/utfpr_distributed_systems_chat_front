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
  [types.SET_EMAIL_ACCOUNT]: function (state, value) {
    state.account.email = value
  },
  [types.SET_NAME_ACCOUNT]: function (state, value) {
    state.account.name = value
  },
}
export default mutations 