<template lang="pug">
.chat
  component(
    :is="screens.md ? 'Sidebar' : 'BottomMenu'",
  )  
  SidebarComponent
</template>

<script>
import responsive from "@/mixins/responsive"
export default {  
  name: 'Index',
  components: {},
  mixins: [responsive],
  props: {},
  data() {
    return {}
  },
  computed: {},
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
  @apply w-full h-screen overflow-y-auto l-inline-start-center bg-primary-800;
}
</style>
  