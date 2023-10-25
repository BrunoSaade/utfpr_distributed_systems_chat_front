<template lang="pug">
.chat(class="bg-primary-800 relative flex flex-col")
  ChatHeader(:chat="selectedChat")
  ChatBody
  ChatInputMessage
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name: "Chat",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat
    }),
  },
  created() {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
.chat {
  @apply flex h-screen;
}
</style>
  