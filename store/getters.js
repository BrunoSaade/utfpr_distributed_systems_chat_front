import * as types from "./types/getter-types"

const getters = {
  [types.GET_SELECTED_TAB]: (state, getters) => {
    return state?.selectedTab
  }
}
export default getters