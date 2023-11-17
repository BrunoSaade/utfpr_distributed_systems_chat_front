<template lang="pug">
.sidebar
  ul.l-stack-start-center.gap-4
    li.p-4.rounded-lg
      VSvg.fill-white(
        src="/message_outline.svg"
        height="30"
        width="30"
      )
  .p-4.rounded-lg.cursor-pointer(
      :class="selectedTab === 2 ? 'bg-secondary-100' : ''"
      @click="() => { setSelectedTab(2), handleLogout()}"
    )
    VSvg(
      class="fill-white"
      src="/logout.svg"
      height="30"
      width="30"
    )
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as mutation_types from "@/store/types/mutation-types"
export default {
  name: "Sidebar",
  props: {},
  data() {
    return {}
  },
  watch: {},
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
    }),
    handleLogout() {
      window.localStorage.clear()
      window.location.href = '/'
    }
  },
}// ola
</script>

<style lang="postcss">
.sidebar {
  @apply l-stack-between-center h-screen w-full bg-secondary-200 py-10;
}
</style>
