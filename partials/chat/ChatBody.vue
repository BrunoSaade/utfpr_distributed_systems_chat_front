<template lang="pug">
.chat-body-oll(
  class="flex-1 overflow-y-auto p-4" 
  ref="chatBody"
  @scroll="handleScroll"
)
  transition-group(name="slide-up")
    ChatMessage(
      v-for="(message, index) in messages" 
      :key="index + message"
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
    return {
      isLoading: false,
      pagination: {
        taken: 10, 
        skipped: 10, 
        total: 29, 
      },
    }
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat,
      messages: (state) => state.messages,
      userId: (state) => state.account.id
    }),
  },
  async created() {
    await this.getFindAllMessages({pagination: this.pagination})
  },
  mounted() {},
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
    }),
    isFriendMessage(recipientId) {
      return recipientId != this.userId
    },
    async handleScroll() {
      const chatBody = this.$refs.chatBody;
      // Se o usuário estiver perto do topo e não estiver carregando
      if (chatBody.scrollTop === 0 && !this.isLoading) {
        console.log("scrool")
        this.isLoading = true;
        // Chame a API para buscar mais mensagens
        // const newMessages = await this.fetchMoreMessages();
        // Adicione as novas mensagens ao início da lista
        // this.messages = [...newMessages, ...this.messages];
        this.isLoading = false;
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.chat-body {
  
}
</style>
