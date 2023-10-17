<template lang="pug">
.home
  .home--section1
    p.text-s6.text-white Welcome, log in!
    VForm#login(
      @submit="handleSignin" 
      name="signin",
      maxWidth="342px",
    )
      template
        fieldset.home--inputs
          label.text-white.mb-1 E-mail
          VTextInput#name.w-full(
            variant='primary'
            v-model='name' 
            placeholdr="Type your e-mail"
            rules="required|email"
          )
          label.text-white.mt-4.mb-1 Password
          VTextInput#password.w-full(
            variant='primary' 
            v-model='password' 
            placeholdr="Type you password"
            rules="required"
            type="password"
          )
          VButton.mt-4(type="submit" variant="tertiary") Login
    p.text-s3.text-left.text-white.mt-4 New here? 
      NuxtLink.text-tertiary-200.underline(to="/signup/") Sign up now
  .home--section2
    .text-center.text-white
      p.text-s8 Add friends and
        | 
        br 
        | chat :)
</template>

<script>
export default {  
  name: 'Index',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      name: '',
      password: '',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    handleSignin() {
      this.$router.push('/main/chat/')
    },
  },
}
</script>
<style lang="postcss">
.home {
  @apply flex h-screen flex-nowrap;
}
.home--section1 {
  @apply w-full overflow-y-auto py-8 px-2 l-stack-center-center bg-primary-800 lg:w-5/12;
}
.home--section2 {
  @apply hidden w-0 gap-8 bg-secondary-200 lg:w-7/12 lg:p-4 lg:l-stack-center-center;
}
.home--inputs {
  @apply l-stack-center-start-nowrap w-[300px];
}
</style>
