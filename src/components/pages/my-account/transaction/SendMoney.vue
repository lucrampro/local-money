<template>
  <div>
      <p>Mon solde : {{solde}} MCL</p>
      <p>Je souhaite faire un envoie d’une valeur de</p>
      <o-transaction-input :errors="{}" name="sum_to_send" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['solde']),
  },
};
</script>
<style lang="scss" scoped>
</style>
