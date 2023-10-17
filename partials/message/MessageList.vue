<template lang="pug">
.message-list
  p.text-white.place-self-start.mb-0.text-s6 Chats
  MessageCard(
    v-ripple
    v-for="(chat, index) in chats" 
    :key="index" 
    :chat="chat"
    @click.native="handleOpenChat(chat)"
  )
</template>

<script>
export default {
  name: "MessageList",
  props: {},
  data() {
    return {
      chats: [
        {
          name: "Bruno Saade"
        },
        {
          name: "Rafael Saade"
        },
        {
          name: "José Matta"
        },
      ]
    }
  },
  mounted() {},
  created() {},
  methods: {
    handleOpenChat(chat) {
      console.log(chat)
    }
  },
}
</script>

<style lang="postcss">
.message-list {
  @apply l-stack-center-center w-full gap-3;
}
</style>
