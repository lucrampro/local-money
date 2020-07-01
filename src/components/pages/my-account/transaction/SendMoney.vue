<template>
  <div>
    <l-wrapper-block boxShadow="none" backgroundColor="$gray-background">
      <p>Mon solde : {{solde}} MCL</p>
      <p>Je souhaite faire un envoie d’une valeur de</p>
      <o-transaction-input />
      <div class="buttonWrapper">
        <a-button width="100%">Suivant</a-button>
      </div>
    </l-wrapper-block>
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

.buttonWrapper {
  padding-top: 90px;
  padding-bottom: 20px;
}
</style>
