<template>
  <ValidationObserver ref="observer">
    <div class="mt-10">
      <ValidationProvider name="age" rules="required|min:10|majority" v-slot="{ errors }">
        <m-input :errors="errors" name="date_of_birth" type="date" v-model="birthDay" maxlength="8" exemple="30/09/1998">Age</m-input>
      </ValidationProvider>
      <ValidationProvider name="numéro de téléphone" rules="required|min:3" v-slot="{ errors }">
        <m-input :errors="errors" name="tel" type="tel" v-model="phoneNumber" mask="## ## ## ## ##" maxlength="14" exemple="06 21 48 37 99">Téléphone</m-input>
      </ValidationProvider>
      <ValidationProvider name="mail" rules="email|required" v-slot="{ errors }">
        <m-input :errors="errors" name="mail" v-model="mail" type="mail" exemple="marie.jane@mail.com">
          Email
        </m-input>
      </ValidationProvider>
    </div>
  </ValidationObserver>
</template>
<script>
export default {
  name: 'InformationContact',
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
