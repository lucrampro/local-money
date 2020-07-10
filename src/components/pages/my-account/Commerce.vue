<template>
  <div>
    <a-ctuality-filter :filters="filtersArray">
      <template>  </template>
    </a-ctuality-filter>
    <p class="title">Les entreprises du réseaux </p>
    <l-wrapper-block ref="lWrapperBlock">
      <m-card-post :hasFooter="false" v-for="(company, index) in companiesList" :key="index"  >
        <template v-slot:header>  <APicto :type="company.category" />  {{ company.company_name }} </template>
        <template v-slot:main>
          <p><strong>Description :</strong> {{ company.description }}</p>
          <p class="identifiant"><strong>Identifiant du commercent</strong> : {{ company.account_number }}</p>
          <p class="adresse"><strong>adresse</strong> : {{ company.address }}, {{company.city}} {{company.zip_code}}</p>

          </template>
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
  padding: 20px;
  padding-left: 30px;
  @include title;
}
p {
  margin: 10px 0px;
}
/deep/ .wrapper-filter {
  padding-left: 20px ;
  overflow: scroll ;
}
</style>
