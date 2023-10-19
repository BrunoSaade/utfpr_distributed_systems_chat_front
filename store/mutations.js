import * as types from "./types/mutation-types"

const mutations = {
  [types.SET_SELECTED_TAB]: function (state, value) {
    state.selectedTab = value
  },
  [types.SET_SELECTED_CHAT]: function (state, value) {
    state.selectedChat = value
  }
}
export default mutations 