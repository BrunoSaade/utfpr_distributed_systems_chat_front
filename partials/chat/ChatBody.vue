<template lang="pug">
.chat-body-oll(
  class="flex-1 overflow-y-auto p-4" 
  ref="chatBody"
  @scroll="handleScroll"
)
  transition-group(name="slide-up")
    div(v-for="(message, index) in messages" :key="'date-' + index")
      template(v-if="shouldDisplayDate(index)")
        .l-inline-center-center
          .chat-message-date {{ formatDate(message.createdAt) }}
      ChatMessage(
        :message="message" 
        :isFriendMessage="isFriendMessage(message.senderId)"
      )
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as action_types from "@/store/types/action-types";
export default {
  name: "ChatBody",
  props: {
    messages: {
      type: Array,
    }
  },
  data() {
    return {
      isLoading: false,
      pagination: {
        take: 0, 
        skip: 0, 
      },
      isTemporaryChat: false,
    }
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat,
      userId: (state) => state.account.id,
      temporaryChats: (state) => state.temporaryChats,
    }),
  },
  created() {
    this.initializeChat()
  },
  watch: {
    selectedChat() {
      this.initializeChat()
    },
    messages() {
      this.scrollToBottom()
    }
  },
  methods: {
    ...mapActions({
      getFindAllMessages: action_types.GET_FIND_ALL_MESSAGES,
    }),
    isFriendMessage(recipientId) {
      return recipientId !== this.userId;
    },
    shouldDisplayDate(index) {
      if (index === 0) return true
      const currentDate = new Date(this.messages[index].createdAt).toLocaleDateString()
      const previousDate = new Date(this.messages[index - 1].createdAt).toLocaleDateString()
      return currentDate !== previousDate
    },
    formatDate(timestamp) {
      const messageDate = new Date(timestamp);
      const currentDate = new Date();
      
      if (this.isSameDay(messageDate, currentDate)) {
        return 'Today'
      }

      const yesterday = new Date(currentDate)
      yesterday.setDate(yesterday.getDate() - 1)

      if (this.isSameDay(messageDate, yesterday)) {
        return 'Yesterday'
      }

      return messageDate.toLocaleDateString();
    },
    isSameDay(date1, date2) {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear() &&
        date1.getHours() >= 0 && date1.getHours() < 24 &&
        date2.getHours() >= 0 && date2.getHours() < 24
      );
    },
    initializeChat() {
      const isTemporaryChat = this.temporaryChats.some(temporaryChat =>
        temporaryChat.id === this.selectedChat.id
      );
      if (!isTemporaryChat) {
        this.getFindAllMessages({pagination: this.pagination});
      }
    },
    scrollToBottom() {
      const chatBody = this.$refs.chatBody;
      this.$nextTick(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      });
    },
    async handleScroll() {
      const chatBody = this.$refs.chatBody;

      // console.log(chatBody.scrollTop )
      // Se o usuário estiver perto do topo e não estiver carregando
      if (chatBody.scrollTop === 100 && !this.isLoading) {
        this.isLoading = true;
        // Chame a API para buscar mais mensagens
        // Adicione as novas mensagens ao início da lista
        // this.messages = [...newMessages, ...this.messages];
        this.isLoading = false;
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.chat-body {
}
.chat-message-date {
  @apply text-center text-s1 my-2 text-primary-100 bg-primary-700 px-3 py-1 rounded-full;
}
</style>
