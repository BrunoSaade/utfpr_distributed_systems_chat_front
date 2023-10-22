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
}
export default mutations 