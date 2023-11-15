<template lang="pug">
.home
  VNotify
  .home--section1
    p.text-s6.text-white Sign up to chat!
    VForm#login(
      @submit="handleSignup" 
      name="signup",
      maxWidth="342px",
    )
      template
        fieldset.home--inputs
          label.text-white.mb-1 E-mail
          VTextInput#email.w-full(
            variant='primary' 
            v-model='email' 
            placeholder="Type your email"
            autocomplete="off"
            rules="required|email"
          )
          label.text-white.mt-4.mb-1 Name
          VTextInput#name.w-full(
            variant='primary' 
            v-model='name' 
            placeholder="Type your name"
            rules="required|name"
          )
          label.text-white.mt-4.mb-1 Create your password
          VTextInput#password.w-full(
            variant='primary' 
            v-model='password' 
            placeholder="Type your password"
            type="password"
            rules="required"
          )
          label.text-white.mt-4.mb-1 Confirm your password
          VTextInput#confirmPassword.w-full(
            variant='primary' 
            v-model='confirmPassword' 
            placeholder="Confirm your password"
            type="password"
            rules="required"
          )
          VButton.mt-4(type="submit" variant="tertiary") Sign up
    p.text-s3.text-left.text-white.mt-4 Already signed up?? 
      NuxtLink.text-tertiary-200.underline(to="/") Login!
  .home--section2
    .text-center.text-white
      p.text-s8 Add friends and
        | 
        br 
        | chat :)
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
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
      authSignup: (state) => state.auth.signup,
    }),
    email: {
      get() {
        return this.authSignup?.email
      },
      set(value) {
        this.setSignupEmail(value)
      },
    },
    name: {
      get() {
        return this.authSignup?.name
      },
      set(value) {
        this.setSignupName(value)
      },
    },
    password: {
      get() {
        return this.authSignup?.password
      },
      set(value) {
        this.setSignupPassword(value)
      },
    },
    confirmPassword: {
      get() {
        return this.authSignup?.confirmPassword
      },
      set(value) {
        this.setSignupConfirmPassword(value)
      },
    },
  },
  watch: {},
  mounted() {
    this.resetFields()
  },
  created() {},
  methods: {
    ...mapActions({
      postSignup: action_types.POST_SIGNUP,
    }),
    ...mapMutations({
      setSignupEmail: mutation_types.SET_EMAIL_SIGNUP,
      setSignupName: mutation_types.SET_NAME_SIGNUP,
      setSignupPassword: mutation_types.SET_PASSWORD_SIGNUP,
      setSignupConfirmPassword: mutation_types.SET_CONFIRM_PASSWORD_SIGNUP,
    }),
    resetFields() {
      this.setSignupEmail('')
      this.setSignupName('')
      this.setSignupPassword('')
      this.setSignupConfirmPassword('')
    },
    isPasswordsEquals() {
      return this.password === this.confirmPassword
    },
    async handleSignup() {
      if (!this.isPasswordsEquals()) {
        this.$notifyWarn({
          title: 'Atention',
          text: 'Passwords must be equals',
        })
      } else {
        try {
          await this.postSignup()
          this.$notifySuccess({
            title: 'Success',
            text: 'Account created :)',
          })
          this.$router.push('/')
        } catch (error) {
          this.$notifyError({
            title: 'Error',
            text: error.response.data.message,
          })
        }
      }
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
  @apply !l-stack-center-start w-[300px];
}
</style>
