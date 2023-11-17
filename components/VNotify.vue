<template lang="pug">
notifications.notify-container.mt-2(class='md:mr-2' :duration='5000' :max='2' :speed='500' :position="screens.md ? 'top right' : 'top center'")
  template(slot='body' slot-scope='{ item, close }')
    .notify(@click='() => {handleChatRedirect(item), close()}')
      .l-inline-end-start
        button.notify--close(@click='() => { handleCallAndRemove(item), close()}')
          VSvg.fill-white.stroke-white(src='/close.svg' width='12' height='12')
      .l-inline-start-center.gap-2.mb-2
        div(v-if="item.type !== 'message'" :class='`notify--flag ${item.type}`')
        .notify--title {{ item.title }}
      .notify--message(:class="item.type !== 'message' ? 'pl-5' : ''") {{ item.text }}

</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import responsive from '~/mixins/responsive'
export default {
  name: 'VNotify',
  components: {},
  mixins: [responsive],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      getChatById: getter_types.GET_CHAT_BY_ID,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapMutations({
      setSelectedChat: mutation_types.SET_SELECTED_CHAT,
    }),
    handleCallAndRemove(item) {
      if (item.data.callAndRemove) {
        item.data.callAndRemove()
      }
    },
    handleChatRedirect(item) {
      const chatId = item.data.chatId
      const foundChat = this.getChatById(chatId)
      this.setSelectedChat(foundChat)
    }
  },
}
</script>
<style lang="postcss" scoped>
.notify-container {
  width: 417px !important;
  @media screen and (max-width: theme('screens.md')) {
    width: 312px !important;
  }
}
.notify {
  background: #363636;
  width: 100%;
  min-height: 24px;
  @apply text-white py-3 px-4 rounded-xl w-full cursor-pointer
    mb-2 select-none;
}
.notify--flag {
  width: 12px;
  height: 12px;
  @apply rounded-full;
}
.notify--close {
  font-size: 10px;
}
.notify--title {
  @apply font-bold text-s2;
}
.notify--message {
  @apply text-s2;
}
.success {
  @apply bg-success-dark-500;
}
.info {
  @apply bg-info-500;
}
.warn {
  @apply bg-warn-500;
}
.error {
  @apply bg-error-dark-500;
}
</style>
