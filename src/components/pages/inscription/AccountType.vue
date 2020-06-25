<template>
  <ValidationObserver ref="observer">
    <div>
      <ValidationProvider name="Nom" rules="required" v-slot="{ errors }">
        <m-radio v-model="value" :label="label" :inputs="mokeData" />
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
      value: null,
      label: 'type d\'inscription',
      mokeData: [
        {
          name: 'Entreprise',
          value: 0,
        },
        {
          name: 'Particulier',
          value: 1,
        },
      ],
    };
  },
  mounted() {
    this.$watch(() => this.$refs.observer.flags.valid, (val) => { this.$emit('updateFormValid', val); });
  },
  mixins: [FormInscriptionPages],
  watch: {
    value(newVal) {
      this.$emit('updateForm', { 'insrciption-type': newVal });
    },
    model(newVal) {
      this.$emit('input', newVal);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
