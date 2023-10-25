<template lang="pug">
.chat-body-oll(class="flex-1 overflow-y-auto p-4")
  ChatMessage(message="Fala ai" :isFriendMessage="false")
  ChatMessage(message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, odio rhoncus porta tristique, velit libero convallis arcu, vel dapibus mi orci at velit. Suspendisse faucibus lorem vel tortor porttitor, nec eleifend sapien dapibus. Mauris condimentum gravida mi ac tincidunt. In semper elementum ligula. Donec suscipit tincidunt purus tempus consequat. In eget magna quis orci accumsan auctor. Duis vulputate cursus vehicula. Fusce malesuada ex vel eros facilisis auctor. Maecenas accumsan nisi vel nisi fermentum, quis egestas ipsum porttitor. Sed semper, ligula nec lobortis" :isFriendMessage="false")
  ChatMessage(message="Opa, tudo certo, e ai?" :isFriendMessage="true")
  ChatMessage(message="ola" :isFriendMessage="true")
  ChatMessage(message="Beleza" :isFriendMessage="false")
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name: "ChatBody",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat
    }),
  },
  created() {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
.chat-body {
  
}
</style>
