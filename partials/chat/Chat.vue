<template lang="pug">
.chat(class="bg-primary-800 relative flex flex-col")
  ChatHeader(:chat="selectedChat")
  ChatBody(:messages="currentChatMessages")
  ChatInputMessage(@click="handleSendMessage")
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as action_types from "@/store/types/action-types"
import * as mutation_types from "@/store/types/mutation-types"
import socket from '../../services/socket';
export default {
  name: "Chat",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat,
      messages: (state) => state.messages,
      temporaryChats: (state) => state.temporaryChats,
    }),
    currentChatMessages() {
      return this.messages[this.selectedChat.id]
    },
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions({}),
    ...mapMutations({
      setMessages: mutation_types.SET_MESSAGES
    }),
    handleSendMessage(value) {
      if (socket) {
        const chatId = this.selectedChat.id;

        const isTemporaryChat = this.temporaryChats.some(temporaryChat => temporaryChat.id === chatId);
        
        if (isTemporaryChat) {
          const recipientId = this.selectedChat.recipient.id
          socket.emit('createNewChat', { msgContent: value, recipientId: recipientId })
        } else {
          socket.emit('sendNewMessage', { content: value, chatId: chatId });
        }
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.chat {
  @apply flex h-screen;
}
</style>
  