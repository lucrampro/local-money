<template>
  <ValidationObserver ref="observer">
    <div>
      <m-input :errors="{}" name="benefit_name">Nom du bénéficiaire</m-input>
      <m-input :errors="{}" name="bank_number">Carte banquaire</m-input>
      <m-input :errors="{}" name="ccv">Ccv</m-input>
    </div>
  </ValidationObserver>
</template>

<script>

import formMixin from '@/mixins/formMixin';

export default {
  mixins: [formMixin],
};
</script>
