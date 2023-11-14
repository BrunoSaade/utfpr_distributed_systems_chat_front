<template lang="pug">
.sidebar
  ul.l-stack-start-center.gap-4
    li.p-4.rounded-lg.cursor-pointer(
      :class="getSelectedTab === 0 ? 'bg-secondary-100' : ''"
      @click="setSelectedTab(0)"
    )
      VSvg.fill-white(
        src="/message_outline.svg"
        height="30"
        width="30"
      )
    li.p-4.rounded-lg.cursor-pointer(
      :class="getSelectedTab === 1 ? 'bg-secondary-100' : ''"
      @click="setSelectedTab(1)"
    )
      VSvg.fill-white(
        src="/contact.svg"
        height="30"
        width="30"
      )
  .p-4.rounded-lg.cursor-pointer(
      :class="getSelectedTab === 2 ? 'bg-secondary-100' : ''"
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
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
export default {
  name: "Sidebar",
  props: {},
  data() {
    return {}
  },
  watch: {
    setSelectedTab(value) {

    },
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      getSelectedTab: getter_types.GET_SELECTED_TAB,
    }),
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
}
</script>

<style lang="postcss">
.sidebar {
  @apply l-stack-between-center h-screen w-full bg-secondary-200 py-10;
}
</style>
