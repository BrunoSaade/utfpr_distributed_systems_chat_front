<template lang="pug">
.chat(class="bg-primary-800 relative flex flex-col")
  ChatHeader(:chat="selectedChat")
  ChatBody
  ChatInputMessage(@click="handleSendMessage")
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import SocketService from '../../services/socket'
import * as action_types from "@/store/types/action-types"
import * as mutation_types from "@/store/types/mutation-types"
export default {
  name: "Chat",
  props: {},
  data() {
    return {
      socket_connection: null,
    }
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat,
      messages: (state) => state.messages,
    }),
  },
  created() {
    this.socket_connection = SocketService.createConnection()
    this.socket_connection.on('receiveNewMessage', (response) => {
      this.setResponseMessage(response)
    })
  },
  mounted() {},
  beforeDestroy() {
    this.socket_connection.disconnect()
  },
  methods: {
    ...mapActions({
      sendMessageSocket: action_types.SEND_MESSAGE_SOCKET
    }),
    ...mapMutations({
      setMessages: mutation_types.SET_MESSAGES
    }),
    setResponseMessage(response) {
      const newMessages = [...this.messages, response] 
      this.setMessages(newMessages)
    },
    handleSendMessage(value) {
      this.sendMessageSocket({content: value, chatId: this.selectedChat.id})
    }
  },
}
</script>

<style lang="postcss" scoped>
.chat {
  @apply flex h-screen;
}
</style>
  