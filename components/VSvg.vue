<template lang="pug">
InlineSvg(:src="src" :width="width" :height="height")
</template>

<script>
import InlineSvg from 'vue-inline-svg'
export default {
  components: {
    InlineSvg,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
}
</script>
