<template lang="pug">
.home
  .home--section1
    p.text-s6.text-white Cadastre-se para bater-papo!
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
            placeholder="Digite seu email"
            rules="required"
          )
          label.text-white.mt-4.mb-1 Nome
          VTextInput#name.w-full(
            variant='primary' 
            v-model='name' 
            placeholder="Digite seu nome"
            rules="required|name"
          )
          label.text-white.mt-4.mb-1 Crie sua senha
          VTextInput#password.w-full(
            variant='primary' 
            v-model='password' 
            placeholder="Digite sua senha"
            type="password"
            rules="required"
          )
          label.text-white.mt-4.mb-1 Confirme sua senha
          VTextInput#confirmPassword.w-full(
            variant='primary' 
            v-model='confirmPassword' 
            placeholder="Confirme sua senha"
            type="password"
            rules="required"
          )
          VButton.mt-4(type="submit" variant="tertiary") Cadastrar
    p.text-s3.text-left.text-white.mt-4 Já é cadastrado? 
      NuxtLink.text-tertiary-200.underline(to="/") Faça o login!
  .home--section2
    .text-center.text-white
      p.text-s8 Adicione amigos e 
        | 
        br 
        | bata-papo :)
</template>

<script>
export default {  
  email: 'Index',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    handleSignup() {
      console.log("email")
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
