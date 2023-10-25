<template lang="pug">
.message-list
  MessageCard(
    v-ripple
    v-for="chat in chats" 
    :key="chat.id" 
    :chat="chat"
    @click.native="handleOpenChat(chat)"
  )
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
export default {
  name: "MessageList",
  props: {},
  data() {
    return {}
  },
  mounted() {},
  created() {},
  computed: {
    ...mapState({
      chats: (state) => state.chats
    }),
    ...mapGetters({
      getSelectedChat: getter_types.GET_SELECTED_CHAT,
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedChat: mutation_types.SET_SELECTED_CHAT,
      mustShowChatMobile: mutation_types.SET_MUST_SHOW_CHAT_MOBILE
    }),
    handleOpenChat(chat) {
      this.setSelectedChat(chat)
      this.mustShowChatMobile(true)
    }
  },
}
</script>

<style lang="postcss">
.message-list {
  @apply l-stack-center-center w-full gap-3;
}
</style>
