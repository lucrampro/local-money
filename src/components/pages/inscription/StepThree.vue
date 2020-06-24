<template>
  <ValidationObserver ref="observer">
    <div class="mt-10">
      <ValidationProvider name="age" rules="required|min:10" v-slot="{ errors }">
        <m-input :errors="errors" type="" v-model="birthDay" mask="##/##/##" maxlength="10" exemple="30/09/1998">Age</m-input>
      </ValidationProvider>
      <ValidationProvider name="Nom" rules="required|min:3" v-slot="{ errors }">
        <m-input :errors="errors" type="tel" v-model="phoneNumber" mask="## ## ## ## ##" maxlength="14" exemple="06 21 48 37 99">Téléphone</m-input>
      </ValidationProvider>
      <ValidationProvider name="mail" rules="email|required" v-slot="{ errors }">
        <m-input :errors="errors" v-model="mail" exemple="marie.jane@mail.com">
          Email
        </m-input>
      </ValidationProvider>
    </div>
  </ValidationObserver>
</template>
<script>
export default {
  name: 'StepOne',
  data() {
    return {
      birthDay: '',
      phoneNumber: '',
      mail: '',
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
