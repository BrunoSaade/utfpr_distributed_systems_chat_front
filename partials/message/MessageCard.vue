<template lang="pug">
.message-card
  .message-card--info
    img(
      height="40",
      width="40",
      :src="`https://ui-avatars.com/api/?name=${chatName}&background=${isSelectedChat ? '77cd2f' : '66007f'}&color=fff&rounded=true&size=50`"
      alt="altText"
    )
    p.text-s5.mb-0(
      :class="{'text-secondary-200' : isSelectedChat}"
    ) {{ chatName }}
  .border-l-1.pl-4
    VSvg(
      :class="isSelectedChat ? 'fill-secondary-200' : 'fill-tertiary-800'"
      :src="isSelectedChat ? '/message.svg' : '/arrow_right.svg'"
      height="30"
      width="30"
    )
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
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
    ...mapState({
      selectedChat: (state) => state.selectedChat
    }),
    chatName() {
      return this.chat?.name
    },
    isSelectedChat() {
      return this.selectedChat.id === this.chat.id
    }
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="postcss">
.message-card {
  @apply w-full h-16 rounded-xl l-inline-between-center px-5 cursor-pointer bg-white;
}
.message-card--info {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
  @apply l-inline-start-center gap-3;
}
</style>
