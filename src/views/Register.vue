<template>
<ValidationObserver v-slot="{ valid }">
  <l-regitster @formSubmit="toTakeConnexionInformation">
      <template v-slot:header>
        <div class="flex flex-row-reverse">
          <a-button @click.native="$router.push({ path: 'inscription/acount-type' })">S’inscrire</a-button>
        </div>
        <p class="pt-4 text-4xl font-semibold">Connectez-vous</p>
      </template>
      <template v-slot:default>
      <div class="mt-10">
        <ValidationProvider name="mail" rules="email|required" v-slot="{ errors }">
          <m-input :errors="errors" v-model="mail" exemple="marie.jane@mail.com">
            Email
          </m-input>
        </ValidationProvider>
        <ValidationProvider name="mot de passe" rules="required|min:6" v-slot="{ errors }">
          <m-input type="password" v-model="password" :errors="errors" exemple="*********" class="mt-4">
            Mot de passe
          </m-input>
        </ValidationProvider>
      </div>
      </template>
      <div>
        <a-link class="block mx-auto mt-10 text-center">
          Mot de passe oublié ?
        </a-link>
      </div>
      <template v-slot:bottom>
        <div class="flex flex-row-reverse">
          <a-submit-button text="Valider" v-if="valid"/>
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
