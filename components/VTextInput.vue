<template lang="pug">
.w-full
  ValidationProvider(
    :rules='rules' 
    v-slot='{ errors }'
  )
    input.border-none.p-0.text-neutral-600.gap-1.border.bg-white.py-2.px-4.text-neutral-400.l-inline-start-center-nowrap.w-full(
      ref='input'
      class='placeholder:text-neutral-400 focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-200 rounded-[10px] border-[#E0E0E0]' 
      v-bind="{ autocomplete: 'off', ...$attrs }" 
      @input='handleInput' 
      @change='handleChange'
      @keydown.enter="$event.preventDefault(); handleEnter()"
    )
    small(v-show="!!errors[0]" class="default-input--message mt-1") {{ errors[0] }}

</template>
<script>
import { ValidationProvider } from "vee-validate"
export default {
  name: 'VTextInput',
  data() {
    return {}
  },
  components: { ValidationProvider },
  props: {
    rules: {
        type: String,
        default: () => "",
      },
  },
  watch: {},
  mounted() {},
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.$emit('input', value)
    },
    handleChange(event) {
      const value = event.target.value
      this.$emit('change', value)
    },
    handleEnter() {
      this.$emit('keydown-enter');
    },
  },
}
</script>
<style lang="postcss">
.default-input--message {
  @apply text-error-light-900 font-bold;
}
</style>
