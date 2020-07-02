<template>
 <div class="actuality-filter">
   <p>Mon fils d'actualité</p>
   <div class="wrapper-filter">
    <filter-post v-for="(items, index) in filterArray" :key="index"> {{ items.text }} </filter-post>
   </div>
</div>
</template>

<script>
import FilterPost from '../atoms/AfilterPost.vue';

export default {
  name: 'ActulalityFilter',
  data() {
    return {
      filterArray: [
        { text: 'Tous' },
        { text: 'Les nouveaux adhérents' },
        { text: 'Mes commerçants préférés' },
        { text: 'Les actualité de la région' },
      ],
    };
  },
  components: {
    FilterPost,
  },
};
</script>

<style lang="scss" scoped>
  .actuality-filter {
    p {
      font-size: 22px;
      font-weight: bold;
      font-family: nunitoBold;
      margin-bottom: 20px;
    }
    .wrapper-filter {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
