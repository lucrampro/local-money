<template>
  <div class="home">
    <HeaderInformation/>
    <m-my-money></m-my-money>
    <l-wrapper-block>
      <template v-slot:title > Mes dernieres transaction</template>
      <m-card-transaction v-for="(transaction, index) in lastTrasacton" :key="index" :name="`utilisateur ${transaction.id}`" :date="transaction.date" :sum="transaction.transfered_money" />
      <template v-slot:bottom ><a-link class="link" @click.native="$router.push({name : 'MyTransaction'})">Voir touts mes transaction</a-link> </template>
    </l-wrapper-block>
    <l-wrapper-block>
      <template v-slot:title >Mes commerçants préférés</template>
      <m-card-post>
        <template v-slot:header > Boulangerie marcel</template>
        <template v-slot:main > Pour tous les gourmands et gourmandes, aujourd'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c'est la recette spéciale d'Albert</template>
      </m-card-post>
      <m-card-post>
        <template v-slot:header > Boulangerie marcel</template>
        <template v-slot:main > Pour tous les gourmands et gourmandes, aujourd'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c'est la recette spéciale d'Albert</template>
      </m-card-post>
    </l-wrapper-block>

  </div>
</template>
<script>
import { mapGetters } from 'vuex';

import HeaderInformation from '../../molecules/MHeaderInformation.vue';

export default {
  name: 'Home',
  components: {
    HeaderInformation,
  },
  created() {
    this.$Api.getMyTransaction()
      .then((response) => response);
  },
  computed: {
    ...mapGetters([
      'transactions',
    ]),
    lastTrasacton() {
      const lastTransaction = [];
      this.transactions.forEach((transactionsGroup) => {
        if (lastTransaction.length < 4) {
          transactionsGroup.transaction.forEach((transaction) => {
            if (lastTransaction.length < 4) {
              lastTransaction.push({ ...transaction, date: transactionsGroup.date });
            }
          });
        }
      });
      return lastTransaction;
    },
  },
};
</script>

<style lang="scss" scoped>

::v-deep .picto {
  margin-right: 10px ;
}

.home {
  padding: 60px 10px;
}
.link {
  margin: 3 auto;
  display: block;
  text-align: center;
}
</style>
