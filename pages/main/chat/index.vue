<template lang="pug">
.flex.h-screen.bg-primary-800
  aside(class="md:w-1/12 bg-gray-200")
    component(:is="screens.md ? 'Sidebar' : 'BottomMenu'")
  aside(v-if="!mustShowChat" class="md:w-4/12 w-full overflow-y-auto bg-primary-600")
    SidebarComponent
  main(
    v-if="(screens.md && !!Object.keys(selectedChat).length && selectedTab === 0) || mustShowChat" 
    class="md:w-7/12 w-full"
  )
    Chat
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as action_types from "@/store/types/action-types"
import responsive from "@/mixins/responsive"
import socket from '../../../services/socket';
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
      selectedChat: (state) => state.selectedChat,
      selectedTab: (state) => state.selectedTab,
      mustShowChatMobile: (state) => state.mustShowChatMobile
    }),
    mustShowChat() {
      return !this.screens.md && 
              Object.keys(this.selectedChat).length && 
              this.selectedTab === 0 &&
              this.mustShowChatMobile
    }
  },
  watch: {},
  mounted() {},
  async created() {
    socket.init()
    await this.getMe()
    await this.getFindAllChats()
  },
  beforeDestroy() {
    socket.disconnect()
  },
  methods: {
    ...mapActions({
      getFindAllChats: action_types.GET_FIND_ALL_CHATS,
      getMe: action_types.GET_ME,
    })
  },
}
</script>
<style lang="postcss">
</style>
  