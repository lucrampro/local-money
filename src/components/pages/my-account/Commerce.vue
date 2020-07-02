<template>
  <div>
    <ActualityFilter :filters="filtersArray">
      <template> Les entreprises du réseaux  </template>
    </ActualityFilter>
    <l-wrapper-block>
      <m-card-post>
        <template v-slot:header> toto </template>
        <template v-slot:main> toto </template>
        <template> </template>
      </m-card-post>
    </l-wrapper-block>
  </div>
</template>

<script>
import ActualityFilter from '../../molecules/MActualityFilter.vue';

export default {
  name: 'Commerce',
  components: {
    ActualityFilter,
  },
  data() {
    return {
      filtersArray: [
        { text: 'Tous' },
        { text: 'Fournisseurs' },
        { text: 'Commerçants' },
        { text: 'Favoris' },
      ],
      companyList: [],
    };
  },
  mounted() {
    this.$Api.getCompanyList().then((response) => { this.companyList = response; });
  },
};
</script>
