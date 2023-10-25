<template lang="pug">
.chat-header
  img(
    height="40",
    width="40",
    :src="`https://ui-avatars.com/api/?name=${chatName}&background=77cd2f&color=fff&rounded=true&size=50`",
    alt="altText"
  )
  p.text-white.text-s5(class="!mb-0") {{ chatName }}
</template>

<script>
export default {
  name: "ChatHeader",
  props: {
    chat: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {}
  },
  computed: {
    chatName() {
      return this.chat?.name
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
.chat-header {
  @apply l-inline-start-center bg-primary-700 w-full h-[60px] px-3 gap-2 sticky top-0;
}
</style>
