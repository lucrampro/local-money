<template>
<ValidationObserver>
  <l-regitster @formSubmit="submitForm">
      <template v-slot:header>
        <p class="pt-4 text-2xl font-semibold">Bienvenue sur NeyMo !</p>
        <p>Connectez vous pour continuer </p>
      </template>
      <template v-slot:default>
      <div class="mt-10">
        <ValidationProvider name="mail" rules="email|required" v-slot="{ errors }">
          <m-input :errors="errors" name="mail" v-model="mail" exemple="marie.jane@mail.com">
            Email
          </m-input>
        </ValidationProvider>
        <ValidationProvider name="mot de passe" rules="required|min:6" v-slot="{ errors }">
          <m-input type="password" name="password" v-model="password" :errors="errors" exemple="*********" class="mt-4">
            Mot de passe
          </m-input>
        </ValidationProvider>
      </div>
        <div class="flex justify-center my-2 mt-8">
          <a-button type="submit">Se connecter</a-button>
        </div>
      <div>
        <a-link class="block mx-auto my-2 mb-10 text-center">
          Mot de passe oublié ?
        </a-link>
      </div>
        <div class="flex justify-center my-2">
          <a-button color="#189B73" background="#fefefe" @click.native="$router.push({ path: 'inscription/acount-type' })">S’inscrire</a-button>
        </div>
      </template>
  </l-regitster>
</ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      mail: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      console.log(`je suis ${this.mail} et mon mdp est ${this.password}`);
      // fonction send data to the back
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
