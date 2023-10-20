<template lang="pug">
.chat-body
  ChatHeader(:chat="selectedChat")
  p ola hauhaua
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name: "ChatBody",
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
.chat-body {
  @apply bg-primary-800 flex-grow;
}
</style>
