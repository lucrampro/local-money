<template>
 <div class="actuality-filter">
   <p>
     <slot></slot>
   </p>
   <div class="wrapper-filter">
    <a-filter-post v-for="(items, index) in $props.filters" :key="index"> {{ items.text }} </a-filter-post>
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
        { text: 'Les actualitées de la région' },
      ],
    };
  },
  components: {
    'a-filter-post': FilterPost,
  },
  props: {
    filters: {
      default: [
        { text: 'Tous' },
        { text: 'Les nouveaux adhérents' },
        { text: 'Mes commerçants préférés' },
        { text: 'Les actualité de la région' },
      ],
    },
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
