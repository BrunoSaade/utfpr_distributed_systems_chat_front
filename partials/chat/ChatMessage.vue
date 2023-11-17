<template lang="pug">
.chat-message(:class="isFriendMessage ? 'text-left' : 'text-right'")
  .chat-message-content(:class="isFriendMessage ? 'friend-message': 'user-message'")
    p.text-s3.mb-0(:class="isFriendMessage ? '' : 'mr-5'") {{ message.content }}
    p.text-s1.mb-0.text-right(:class="isFriendMessage ? '!text-primary-50' : '!text-primary-200'") {{ getMessageSentTime }}
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    message: {
      type: Object,
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
  computed: {
    getMessageSentTime() {
      const utcDate = new Date(this.message.createdAt);
      const options = { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", hour12: false };

      const brazilianTimeFormat = new Intl.DateTimeFormat("default", options);
      const formattedTime = brazilianTimeFormat.format(utcDate);

      return formattedTime;
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
.chat-message {
  @apply my-2;
}
.chat-message-content {
  @apply px-2.5 py-1.5 inline-block max-w-[80%] m-1 max-h-full break-words;
}

.friend-message {
  @apply bg-secondary-300 text-white rounded-[15px] rounded-bl-none;
}

.user-message {
  @apply bg-white rounded-[15px] rounded-br-none text-left;
}
</style>
