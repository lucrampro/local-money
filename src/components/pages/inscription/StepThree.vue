<template>
  <ValidationObserver ref="observer">
    <div class="mt-10">
      <ValidationProvider v-for="items in validationProvider" :key="items.name" :name="item.name" :rules="item.rules" v-slot="{ errors }">
        <m-input :errors="errors" :type="items.type" v-model="items.model" :maxlength="items.length" :mask='items.mask' :exemple="items.exemple">Age</m-input>
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
      validationProvider: [
        {
          name: 'age',
          rules: 'required|min:10|majority',
          slot: errors,
          error: errors,
          type:'date',
          model: birthDay,
          mask: '',
          length: '8',
          exemple: '30/09/1998',
          text: 'Age',
        },
        {
          name: 'Nom',
          rules: 'required|min:3',
          slot: errors,
          error: errors,
          type:'tel',
          model: phoneNumber,
          mask: '## ## ## ## ##',
          length: '',
          exemple: '06 21 48 37 99',
          text: 'Téléphone',
        },
        {
          name: 'mail',
          rules: 'email|required',
          slot: errors,
          error: errors,
          type:'mail',
          model: '',
          mask: '',
          length: '14',
          exemple: 'marie.jane@mail.com',
          text: 'Email',
        },
      ],
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
