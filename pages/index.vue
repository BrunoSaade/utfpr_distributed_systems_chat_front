<template lang="pug">
.home
  VNotify 
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
            v-model='email' 
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import * as action_types from "@/store/types/action-types"
import notify from "~/mixins/notify"
export default {  
  name: 'Index',
  components: {},
  mixins: [notify],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      authSignin: (state) => state.auth.signin,
    }),
    email: {
      get() {
        return this.authSignin?.email
      },
      set(value) {
        this.setEmailSignin(value)
      },
    },
    password: {
      get() {
        return this.authSignin?.password
      },
      set(value) {
        this.setPasswordSignin(value)
      },
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapActions({
      postSignin: action_types.POST_SIGNIN,
    }),
    ...mapMutations({
      setEmailSignin: mutation_types.SET_EMAIL_SIGNIN,
      setPasswordSignin: mutation_types.SET_PASSWORD_SIGNIN,
    }),
    async handleSignin() {
      try {
        await this.postSignin()
        this.$notifySuccess({
          title: 'Success',
          text: 'Logged :)',
        })
      } catch (error) {
        console.log("iuahuaha", error.response.data.message)
        this.$notifyError({
          title: 'Error',
          text: error.response.data.message,
        })
      }
      // this.$router.push('/main/chat/')
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
