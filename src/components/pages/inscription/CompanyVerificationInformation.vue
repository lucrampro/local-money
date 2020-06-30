<template>
  <ValidationObserver ref="observer">
    <div class="mt-10">
      <ValidationProvider name="siret" rules="required|min:6" v-slot="{ errors }">
        <m-input :errors="errors" name="siret" v-model="siret" exemple="362 521 879 00034">siret</m-input>
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
      siret: '',
    };
  },
  mixins: [FormInscriptionPages],
  watch: {
    siret(newVal) {
      this.$emit('updateForm', { siret: newVal });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
