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
export default {
  name: 'InformationName',
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  mounted() {
    this.$watch(() => this.$refs.observer.flags.valid, (val) => { this.$emit('updateFormValid', val); });
  },
  watch: {
    model(oldVal, newVal) {
      this.$emit('input', newVal);
    },
  },
  computed: {
    ObserverValid() {
      return this.$refs.observer.flags.valid;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
