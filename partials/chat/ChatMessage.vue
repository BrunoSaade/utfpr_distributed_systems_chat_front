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
  padding: 10px;
  display: inline-block;
  max-width: 80%;
  margin: 5px;
  max-height: 100%;
  word-wrap: break-word;
}

.friend-message {
  background-color: #DCF8C6; /* Cor de fundo das mensagens do usuário */
  border-radius: 15px 15px 15px 0;
}

.user-message {
  background-color: #E5E5EA; /* Cor de fundo das mensagens do amigo (exemplo) */
  text-align: left;
  border-radius: 15px 15px 0 15px;
}
</style>
