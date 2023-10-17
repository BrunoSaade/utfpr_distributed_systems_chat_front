<template lang="pug">
button(
  v-ripple
  :data-variant='variant' 
  :data-disabled='disabled' 
  :data-size='size' 
  :class="['button']" 
  v-bind='{ ...$attrs, ...$props }' 
  @click='handleClick'
)
  slot
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: () => false,
    },
    type: {
      type: String,
      validator: (value) => ['button', 'submit'].includes(value),
      default: 'button',
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) =>
        [
          'primary',
          'secondary',
          'tertiary',
          'success',
          'error',
          'outline_primary',
          'outline_secondary',
          'outline_tertiary',
          'outline_success',
          'outline_error',
        ].includes(value),
    },
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="postcss">
.button {
  @apply w-full cursor-pointer  gap-2 rounded-lg py-2 px-4  font-[700] l-inline-center-center-nowrap  small:h-[36px] medium:h-[46px];
}
.button[data-variant='primary'] {
  @apply bg-primary-500  text-white shadow-button  hover:bg-primary-400;
}
.button[data-variant='secondary'] {
  @apply bg-secondary-500   text-white shadow-button  hover:bg-secondary-400;
}
.button[data-variant='tertiary'] {
  @apply bg-tertiary-500  text-white shadow-button hover:bg-tertiary-400;
}
.button[data-variant='success'] {
  @apply bg-success-dark-500  text-white shadow-button hover:bg-success-dark-400;
}
.button[data-variant='error'] {
  @apply bg-error-dark-500  text-white shadow-button hover:bg-error-dark-400;
}
.button[data-variant='outline_primary'] {
  @apply border-[1.5px] border-primary-500 bg-white  text-primary-500 hover:bg-primary-50;
}
.button[data-variant='outline_secondary'] {
  @apply border-[1.5px] border-secondary-500 bg-white text-secondary-500  hover:bg-secondary-50;
}
.button[data-variant='outline_tertiary'] {
  @apply border-[1.5px] border-tertiary-500 bg-white text-tertiary-500 hover:bg-tertiary-50;
}
.button[data-variant='outline_success'] {
  @apply border-[1.5px] border-success-dark-500 bg-white text-success-dark-500 hover:bg-success-dark-50;
}
.button[data-variant='outline_error'] {
  @apply border-[1.5px] border-error-dark-500 bg-white text-error-dark-500 hover:bg-error-dark-50;
}
.button[data-disabled='true'] {
  @apply cursor-default border-none bg-neutral-300 text-neutral-400 shadow-button hover:bg-neutral-300;
}
</style>
