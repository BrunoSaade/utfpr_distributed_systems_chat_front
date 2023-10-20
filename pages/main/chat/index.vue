<template lang="pug">
.chat
  .chat-section
    component(
      :is="screens.md ? 'Sidebar' : 'BottomMenu'",
    )
    SidebarComponent
    ChatBody(v-if="screens.md &&  !!Object.keys(selectedChat).length")
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import responsive from "@/mixins/responsive"
export default {  
  name: 'Index',
  components: {},
  mixins: [responsive],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat
    }),
  },
  watch: {},
  mounted() {
    if(this.screens.md){
      console.log(8)
    }
  },
  created() {},
  methods: {
    handleSignin() {
      console.log("name")
    },
  },
}
</script>
<style lang="postcss">
.chat {
  @apply l-inline-start;
}
.chat-section {
  @apply l-inline-start flex-1 bg-primary-800;
}
</style>
  