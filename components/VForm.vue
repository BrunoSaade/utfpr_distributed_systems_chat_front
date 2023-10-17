<template lang="pug">
.default-form(:style='maxWidths')
  ValidationObserver(v-slot='{ handleSubmit, invalid, errors }')
    form(@submit.prevent='handleSubmit(onSubmit)')
      slot(:invalid="invalid" , :errors="errors")
</template>

<script>
import container from "~/mixins/container"
import { ValidationObserver } from "vee-validate"
export default {
  name: "VForm",
  components: { ValidationObserver },
  mixins: [container],
  props: {
    maxWidth: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    onSubmit() {
      this.$emit("submit")
    },
  },
}
</script>

<style lang="postcss" scoped>
</style>
