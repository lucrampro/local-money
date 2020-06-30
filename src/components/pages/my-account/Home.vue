<template>
  <div class="home">
    <HeaderInformation/>
    <m-my-money></m-my-money>
    <l-wrapper-block>
      <template v-slot:title > Mes dernieres transaction</template>
      <m-card-transaction />
      <m-card-transaction/>
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
import HeaderInformation from '../../molecules/MHeaderInformation.vue';

export default {
  name: 'Home',
  components: {
    HeaderInformation,
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
</style>
