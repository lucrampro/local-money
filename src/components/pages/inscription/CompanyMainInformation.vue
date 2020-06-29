<template>
  <ValidationObserver ref="observer">
    <div class="mt-10">
      <ValidationProvider name="Nom" rules="required|min:3" v-slot="{ errors }">
        <m-input :errors="errors" name="first_name" v-model="firstName" exemple="Uzumaki">Nom</m-input>
      </ValidationProvider>
      <ValidationProvider name="prenom" rules="required|min:3" v-slot="{ errors }">
        <m-input v-model="lastName" name="last_name" :errors="errors" exemple="naruto" class="mt-4">Prenom</m-input>
      </ValidationProvider>
    </div>
  </ValidationObserver>
</template>
<script>

import FormInscriptionPages from './insrcriptionMixin';

export default {
  name: 'InformationName',
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  mixins: [FormInscriptionPages],
  watch: {
    model(oldVal, newVal) {
      this.$emit('input', newVal);
    },
    firstName(newVal) {
      this.$emit('updateForm', { firstName: newVal });
    },
    lastName(newVal) {
      this.$emit('updateForm', { lastName: newVal });
    },
  },
};
</script>
