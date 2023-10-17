<template lang="pug">
.home
  .home--section1
    p.text-s6.text-white Bem vindo, faça seu login!
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
            placeholdr="Digite seu email"
            rules="required|email"
          )
          label.text-white.mt-4.mb-1 Senha
          VTextInput#password.w-full(
            variant='primary' 
            v-model='password' 
            placeholdr="Digite sua senha"
            rules="required"
          )
          VButton.mt-4(type="submit" variant="tertiary") Entrar
    p.text-s3.text-left.text-white.mt-4 Novo por aqui? 
      NuxtLink.text-tertiary-200.underline(to="/signup/") Cadastre-se agora
  .home--section2
    .text-center.text-white
      p.text-s8 Adicione amigos e 
        | 
        br 
        | bata-papo :)
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
