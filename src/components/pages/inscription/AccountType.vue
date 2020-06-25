<template>
  <ValidationObserver ref="observer">
    <div>
      <ValidationProvider name="Nom" rules="required" v-slot="{ errors }">
        <m-radio v-model="insrciptionType" :label="label" :inputs="mokeData" />
        {{errors[0]}}
      </ValidationProvider>
    </div>
  </ValidationObserver>
</template>

<script>

import FormInscriptionPages from './insrcriptionMixin';

export default {
  name: 'TypeOfAccount',
  data() {
    return {
      insrciptionType: null,
      label: 'type d\'inscription',
      mokeData: [
        {
          name: 'Entreprise',
          value: 1,
        },
        {
          name: 'Particulier',
          value: 2,
        },
      ],
    };
  },
  mixins: [FormInscriptionPages],
  watch: {
    insrciptionType(newVal) {
      this.$emit('updateForm', { insrciptionType: newVal });
    },
    model(newVal) {
      this.$emit('input', newVal);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
