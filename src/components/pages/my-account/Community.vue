<template>
  <div class="community">
    <actuality-filter/>
    <!-- HERE IS PLACE FOR INPUT TO COMPANY SEND POST  -->
     <l-wrapper-block>
      <m-card-post v-for="(items, index) in companyPost" :key="index">
        <template v-slot:header > {{ items.title }} </template>
        <template v-slot:main > {{ items.content }} </template>
      </m-card-post>

    </l-wrapper-block>
  </div>
</template>

<script>
import ActualityFilter from '../../molecules/MActualityFilter.vue';

export default {
  name: 'Community',
  data() {
    return {
      companyPost: [
        {
          company: 'Grotte Benjamin',
          post: 'Pour tous les gourmands et gourmandes, aujourd\'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c\'est la recette spéciale d\'Albert',
        },
        {
          company: 'Pizzeria Lucien',
          post: 'Pour tous les gourmands et gourmandes, aujourd\'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c\'est la recette spéciale d\'Albert',
        },
        {
          company: 'Boite de Nuit Cheik',
          post: 'Pour tous les gourmands et gourmandes, aujourd\'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c\'est la recette spéciale d\'Albert',
        },
        {
          company: 'Cours de dessin Dona',
          post: 'Pour tous les gourmands et gourmandes, aujourd\'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c\'est la recette spéciale d\'Albert',
        },
        {
          company: 'Coiffeuse Louise',
          post: 'Pour tous les gourmands et gourmandes, aujourd\'hui il y a des chouquettes fourrées à la crème chantilly vanillée, profitez en c\'est la recette spéciale d\'Albert',
        },
      ],
    };
  },
  components: {
    ActualityFilter,
  },
  mounted() {
    this.setCompanyArray();
  },
  methods: {
    setCompanyArray() {
      this.$Api.getCompanyPost().then((response) => { this.companyPost = response; });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
