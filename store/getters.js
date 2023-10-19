import * as types from "./types/getter-types"

const getters = {
  [types.GET_SELECTED_TAB]: (state, getters) => {
    return state?.selectedTab
  },
  [types.GET_SELECTED_CHAT]: (state, getters) => {
    return state?.selectedChat
  },
}
export default getters