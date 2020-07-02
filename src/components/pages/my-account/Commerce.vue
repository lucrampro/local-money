<template>
  <div>
    <ActualityFilter :filters="filtersArray"/>
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
    };
  },
};
</script>
