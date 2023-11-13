<template lang="pug">
.chat-body-oll(class="flex-1 overflow-y-auto p-4" ref="chatBody")
  ChatMessage(
    v-for="(message, index) in messages" 
    :key="index"
    :message="message.content" 
    :isFriendMessage="isFriendMessage(message.senderId)"
  )
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import SocketService from '../../services/socket'
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import * as action_types from "@/store/types/action-types"
export default {
  name: "ChatBody",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat,
      messages: (state) => state.messages,
      userId: (state) => state.account.id
    }),
  },
  created() {},
  mounted() {
    this.getFindAllMessages()
    // this.createSocketConnection()
  },
  watch: {
    messages(){
      const chatBody = this.$refs.chatBody;
      this.$nextTick(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      });
    }
  },
  methods: {
    ...mapActions({
      getFindAllMessages: action_types.GET_FIND_ALL_MESSAGES,
      // createSocketConnection: action_types.CREATE_SOCKET_CONNECTION,
      sendMessageSocket: action_types.SEND_MESSAGE_SOCKET
    }),
    isFriendMessage(recipientId) {
      return recipientId != this.userId
    }
  },
}
</script>

<style lang="postcss" scoped>
.chat-body {
  
}
</style>
