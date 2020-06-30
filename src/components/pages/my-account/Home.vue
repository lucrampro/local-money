<template>
  <div class="home">
    <HeaderInformation/>
    <m-my-money></m-my-money>
  </div>
</template>

<script>
import HeaderInformation from '../../molecules/MHeaderInformation.vue';

export default {
  name: 'Home',
  components: {
    HeaderInformation,
  },
};
</script>

<style lang="scss" scoped>

::v-deep .picto {
  margin-right: 10px ;
}

.home {
  padding: 60px 10px;
}
</style>
