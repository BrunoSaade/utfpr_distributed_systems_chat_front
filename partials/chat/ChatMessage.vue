<template lang="pug">
.chat-message(:class="isFriendMessage ? 'text-left' : 'text-right'")
  .chat-message-content(:class="isFriendMessage ? 'friend-message': 'user-message'")
    p.text-s3.mb-0 {{ message }}
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    message: {
      type: String,
      required: true
    },
    isFriendMessage: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
.chat-message {
  @apply my-2;
}
.chat-message-content {
  @apply p-2.5 inline-block max-w-[80%] m-2 max-h-full break-words;
}

.friend-message {
  @apply bg-secondary-300 text-white rounded-[15px] rounded-bl-none;
}

.user-message {
  @apply bg-white rounded-[15px] rounded-br-none text-left;
}
</style>
