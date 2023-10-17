import * as types from "./types/mutation-types"

const mutations = {
  [types.SET_SELECTED_TAB]: function (state, value) {
    state.selectedTab = value
  }
}
export default mutations 