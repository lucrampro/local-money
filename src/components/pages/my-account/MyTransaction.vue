<template>
  <div>
    <m-my-money boxShadow="none" background="#F5F5F5" :convertMoney="false"></m-my-money>
    <l-wrapper-block ref="lWrapperBlock" background="black">
      <template class="title" v-slot:title>Mes transactions :</template>
      <template v-slot:default>
        <div v-for="(transactionDay, index ) in userTrasactions" :key="index" class="transaction">
          <p  v-if="index == 0" class="transactionDay">{{ transactionDay.date }}</p>
          <m-card-transaction
            v-for="(transaction, index) in transactionDay.transaction"
            :key="index"
            :beneficiaryName="transaction.beneficiary_name"
            :emiterName="transaction.emiter_name"
            :date="transaction.date.date"
            :sum="transaction.transfered_money"
            :statusTransactionUser="transaction.status_transaction_user"
          ></m-card-transaction>

        </div>
      </template>
    </l-wrapper-block>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  mounted() {
    this.$Api.getMyTransaction().then((response) => response);
    console.log('toto', this.$anime);
    /**
     * @param { DOMElement } target
     * @ref OurAnimation.js
     */
    this.$anime.animationOnMounted(this.$refs.lWrapperBlock.$el.querySelectorAll('.transaction'));
  },
  methods: {
    addZero(i) {
      if (i < 10) {
        i = `0${i}`;
      }
      return i;
    },
    transformDate(date) {
      const d = new Date(date);
      const h = this.addZero(d.getHours());
      const m = this.addZero(d.getMinutes());
      return `${h}h${m}`;
    },
  },

  computed: {
    ...mapGetters([
      'transactions',
      'userToken',
      'compteType',
      'userInfomations',
      'solde',
      'transferId',
    ]),
    userTrasactions() {
      const transactions = JSON.parse(JSON.stringify(this.transactions));
      transactions.forEach((transactionDay) => transactionDay.transaction.forEach((transaction) => {
        const newDate = this.transformDate(transaction.date.date);
        transaction.date.date = newDate;
      }));
      return transactions;
    },
  },
};
</script>

<style lang="scss" scoped>

.transactionDay {
  font-weight: 600;
  font: 18px;
}
</style>
