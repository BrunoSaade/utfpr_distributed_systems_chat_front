<template lang="pug">
.chat-header
  .chat-header--back
    VSvg.fill-white(
      src="/chevron_left.svg"
      height="15"
      width="15"
    )
    p.text-s3(@click="handleBack" class="!mb-0") Back
  img(
    height="40",
    width="40",
    :src="`https://ui-avatars.com/api/?name=${chatName}&background=77cd2f&color=fff&rounded=true&size=50`",
    alt="altText"
  )
  p.text-white.text-s5(class="!mb-0") {{ chatName }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
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
  watch: {},
  created() {},
  methods: {
    ...mapMutations({
      setSelectedTab: mutation_types.SET_SELECTED_TAB,
      setMustShowChatMobile: mutation_types.SET_MUST_SHOW_CHAT_MOBILE,
    }),
    handleBack() {
      this.setMustShowChatMobile(false)
      this.setSelectedTab(0)
    }
  },
}
</script>

<style lang="postcss" scoped>
.chat-header {
  @apply l-inline-start-center bg-primary-700 w-full h-[60px] px-3 gap-2 sticky top-0;
}
.chat-header--back {
  @apply l-inline-start-center cursor-pointer text-white text-s4 md:hidden mr-2;
}
</style>
