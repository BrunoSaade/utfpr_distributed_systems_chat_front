import * as types from "./types/getter-types"

const getters = {
  [types.GET_CHAT_BY_ID]: (state) => (id) => {
    return state.chats.find(chat => chat.id === id)
  },
}
export default getters