<template lang="pug">
.contact-list
  p.text-white.place-self-start.mb-0.text-s6 Friends
  ContactCard(
    v-ripple
    v-for="(chat, index) in chats" 
    :key="index" 
    :chat="chat"
    @click.native="handleOpenChat(chat)"
  )
</template>

<script>
export default {
  name: "ContactList",
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
.contact-list {
  @apply l-stack-center-center w-full gap-3;
}
</style>
