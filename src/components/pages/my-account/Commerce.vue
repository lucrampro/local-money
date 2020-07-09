<template>
  <div>
    <!-- <ActualityFilter :filters="filtersArray">
      <template>  </template>
    </ActualityFilter> -->
    <p class="title">Les entreprises du réseaux </p>
    <l-wrapper-block ref="lWrapperBlock">
      <m-card-post :hasFooter="false" v-for="(company, index) in companiesList" :key="index"  >
        <template v-slot:header>  <APicto :type="company.category" />  {{ company.company_name }} </template>
        <template v-slot:main> Deescription: {{ company.category }} de {{ company.first_name }}</template>
      </m-card-post>
    </l-wrapper-block>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import APicto from '../../atoms/APicto.vue';
// import ActualityFilter from '../../molecules/MActualityFilter.vue';

export default {
  name: 'Commerce',
  components: {
    // ActualityFilter,
    APicto,
  },
  computed: {
    ...mapGetters([
      'companiesList',
    ]),
  },
  data() {
    return {
      filtersArray: [
        { text: 'Tous' },
        { text: 'Fournisseurs' },
        { text: 'Commerçants' },
        { text: 'Favoris' },
      ],
    };
  },
  mounted() {
    this.$Api.getCompanyList().then(() => { });
    this.$anime.animationOnMounted(this.$refs.lWrapperBlock.$el.querySelectorAll('.cardPost'));
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding-left: 30px;
  @include title;
}
</style>
