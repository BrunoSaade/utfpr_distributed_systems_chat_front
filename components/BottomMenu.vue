<template lang="pug">
ul.bottom-menu
  li.p-4.rounded-lg
    VSvg.fill-white(
      src="/message_outline.svg"
      height="20"
      width="20"
    )
  li.p-4.rounded-lg.cursor-pointer(
      :class="selectedTab === 2 ? 'bg-secondary-100' : ''"
      @click="() => { setSelectedTab(2), handleLogout()}"
    )
    VSvg.fill-white(
      src="/logout.svg"
      height="20"
      width="20"
    )
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as mutation_types from "@/store/types/mutation-types"
export default {
  name: "BottoMenu",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      selectedTab: (state) => state.selectedTab
    }),
    ...mapGetters({}),
  },
  mounted() {},
  created() {},
  methods: {
    ...mapMutations({
      setSelectedTab: mutation_types.SET_SELECTED_TAB,
      mustShowChatMobile: mutation_types.SET_MUST_SHOW_CHAT_MOBILE
    }),
    handleLogout() {
      window.localStorage.clear()
      window.location.href = '/'
    }
  },
}
</script>

<style lang="postcss">
.bottom-menu {
  @apply l-inline-center-center w-full h-[60px] fixed bg-secondary-200 bottom-0 gap-8 z-50;
}
</style>
