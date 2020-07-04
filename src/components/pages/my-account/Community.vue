<template>
  <div class="community">
    <actuality-filter> <template> Mon fils d'actualité </template> </actuality-filter>
    <!-- HERE IS PLACE FOR INPUT TO COMPANY SEND POST  -->
     <l-wrapper-block>
      <m-card-post v-for="(items, index) in companyPosts" :key="index" :Numberlikes="items.likes" :idOfPost="items.post_id" :isLiked="items.liked" >
        <template v-slot:header > {{ items.title }} </template>
        <template v-slot:main > {{ items.content }} </template>
      </m-card-post>
    </l-wrapper-block>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActualityFilter from '../../molecules/MActualityFilter.vue';

export default {
  name: 'Community',
  data() {
    return {
      companyPost: this.companyPosts || [],
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
  computed: {
    ...mapGetters([
      'companyPosts',
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>
