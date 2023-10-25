<template lang="pug">
.flex.h-screen.bg-primary-800
  aside(class="md:w-1/12 bg-gray-200")
    component(:is="screens.md ? 'Sidebar' : 'BottomMenu'")
  aside(class="md:w-3/12 w-full overflow-y-auto bg-primary-600")
    SidebarComponent
  main(
    v-if="screens.md && !!Object.keys(selectedChat).length && selectedTab === 0" 
    class="w-8/12"
  )
    Chat
</template>


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
      selectedChat: (state) => state.selectedChat,
      selectedTab: (state) => state.selectedTab
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>
<style lang="postcss">
</style>
  