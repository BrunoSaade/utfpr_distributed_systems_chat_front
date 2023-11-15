<template lang="pug">
.sidebar-component
  MessageList
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
export default {
  name: "SidebarComponent",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  created() {},
  methods: {},
}
</script>

<style lang="postcss">
.sidebar-component {
  @apply l-stack-start-center gap-2 w-full bg-primary-600 p-4 pb-20;
}
</style>
