<template lang="pug">
.message-card
  .message-card--info
    img(
      height="40",
      width="40",
      :src="`https://ui-avatars.com/api/?name=${chatName}&background=66007f&color=fff&rounded=true&size=50`",
      alt="altText"
    )
    p.text-s5.mb-0 {{ chatName }}
  .border-l-1.pl-4
    VSvg(
      class="fill-tertiary-800"
      src="/arrow_right.svg"
      height="30"
      width="30"
    )
</template>

<script>
export default {
  name: "MessageCard",
  props: {
    chat: {
      type: Object
    }
  },
  data() {
    return {
      name: 'Bruno Saade'
    }
  },
  computed: {
    chatName() {
      return this.chat?.name
    },
  },
  created() {},
  methods: {},
}
</script>

<style lang="postcss">
.message-card {
  @apply w-full bg-white h-16 rounded-xl l-inline-between-center px-5 cursor-pointer;
}
.message-card--info {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
  @apply l-inline-start-center gap-3;
}
</style>
