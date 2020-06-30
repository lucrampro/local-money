<template>
  <div class="home">
    <HeaderInformation/>
    <m-card-post>
      <template v-slot:header> <a-picto/> BOULANGERIE MARCEL </template>
      <template v-slot:main> Pour tous les gourmands et gourmandes, aujourd'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c'est la recette spéciale d'Albert </template>
    </m-card-post>
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
