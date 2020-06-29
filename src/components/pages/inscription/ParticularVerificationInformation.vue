<template>
  <ValidationObserver ref="observer">
    <div class="mt-10">
      <ValidationProvider name="Ville" rules="required|min:3" v-slot="{ errors }">
        <m-input :errors="errors" name="city" type="tel" v-model="city" maxlength="30" exemple="Paris">Ville</m-input>
      </ValidationProvider>
      <ValidationProvider name="code postal" rules="required|min:3" v-slot="{ errors }">
        <m-input :errors="errors" name="zipCode" type="tel" v-model="zipCode" maxlength="5" exemple="75000">Code postal</m-input>
      </ValidationProvider>
      <ValidationProvider name="address" rules="required|min:6" v-slot="{ errors }">
        <m-input :errors="errors" name="first_name" v-model="address" exemple="27 Bis Rue du Progrès">Address</m-input>
      </ValidationProvider>
    </div>
  </ValidationObserver>
</template>
<script>

import FormInscriptionPages from './insrcriptionMixin';

export default {
  name: 'InformationContact',
  data() {
    return {
      city: '',
      address: '',
      zipCode: '',
    };
  },
  mixins: [FormInscriptionPages],
  watch: {
    city(newVal) {
      this.$emit('updateForm', { city: newVal });
    },
    address(newVal) {
      this.$emit('updateForm', { address: newVal });
    },
    zipCode(newVal) {
      this.$emit('updateForm', { zipCode: newVal });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
