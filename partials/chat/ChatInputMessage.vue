<template lang="pug">
.chat-input-message
  .l-inline-center-center-nowrap.gap-2
    VTextInput#name.w-full(
      variant='primary'
      v-model='message' 
      @keydown-enter="handleMessage"
      rules=""
    )
    VButton(
      type="button" 
      variant="tertiary" 
      size="small" 
      @click="handleMessage" 
      class="!w-[100px]"
    ) Send
</template>

<script>
export default {
  name: "ChatInputMessage",
  props: {},
  data() {
    return {
      message: '',
    }
  },
  computed: {},
  created() {},
  methods: {
    handleMessage() {
      if(this.message.trim() !== '') {
        this.$emit('click', this.message)
        this.message = ''
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.chat-input-message {
  @apply bg-primary-700 py-2 px-4 sticky bottom-0;
}
</style>
