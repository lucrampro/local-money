<template>
  <ValidationObserver ref="observer">
    <div>
        <p>Mon solde : {{solde}} MCL</p>
        <p>Je souhaite faire un envoie d’une valeur de</p>
        <o-transaction-input v-model="transferedMoney" :errors="{}" name="sum_to_send" />
    </div>
  </ValidationObserver>
</template>
<script>
import { mapGetters } from 'vuex';
import formMixin from '@/mixins/formMixin';

export default {
  data() {
    return {
      transferedMoney: '',
    };
  },
  watch: {
    transferedMoney(newVal) {
      this.$emit('updateForm', { transferedMoney: newVal });
    },
  },
  computed: {
    ...mapGetters(['solde']),
  },
  mixins: [formMixin],
};
</script>
<style lang="scss" scoped>
</style>
