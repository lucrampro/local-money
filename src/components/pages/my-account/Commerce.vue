<template>
  <div>
    <ActualityFilter :filters="filtersArray">
    <template> Les entreprises du réseaux  </template>
    </ActualityFilter>
    <l-wrapper-block>
      <m-card-post v-for="(company, index) in companyList" :key="index"  >
        <template v-slot:header> {{ company.company_name }} </template>
        <template v-slot:main> Deescription: {{ company.category }} de {{ company.first_name }}</template>
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
    this.getCompanyList();
  },
  methods: {
    getCompanyList() {
      this.$Api.getCompanyList().then((response) => { this.companyList = response; });
    },
  },
};
</script>
