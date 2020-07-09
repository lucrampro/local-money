<template>
  <div class="community">
    <p class="title">Mon fil d'actualité</p>
    <l-wrapper-block v-if="userInfomations.type === 'company'">
      <p>Donnez des nouvelles de votre activité<br> au près des autres adhérents </p>
      <a-button  width="100%" @click.native="$router.push({ name : 'SendPost'})" class="buttonGiveNew">Donner de vos nouvelles</a-button>
    </l-wrapper-block>
    <!-- <actuality-filter> <template> Mon fils d'actualité </template> </actuality-filter> -->
    <!-- HERE IS PLACE FOR INPUT TO COMPANY SEND POST  -->
     <l-wrapper-block ref="lWrapperBlock">
      <m-card-post v-for="(items, index) in companyPosts" :key="index" :Numberlikes="items.likes" :idOfPost="items.post_id" :isLiked="items.liked" >
        <template v-slot:header > {{ items.title }} </template>
        <template v-slot:main > {{ items.content }} </template>
      </m-card-post>
    </l-wrapper-block>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import ActualityFilter from '../../molecules/MActualityFilter.vue';

export default {
  name: 'Community',
  data() {
    return {
      companyPost: this.companyPosts || [],
    };
  },
  components: {
    // ActualityFilter,
  },
  created() {
    this.setCompanyArray();
  },
  mounted() {
    this.$anime.animationOnMounted(this.$refs.lWrapperBlock.$el.querySelectorAll('.cardPost'));
  },
  methods: {
    setCompanyArray() {
      this.$Api.getCompanyPost().then((response) => { this.companyPost = response; });
    },
  },
  computed: {
    ...mapGetters([
      'companyPosts',
      'userInfomations',
    ]),
  },
};
</script>

<style lang="scss" scoped>

.title {
  @include title;
  padding-left: 30px;
}

.buttonGiveNew {
  margin: 0 auto;
  display: table;
}
</style>
