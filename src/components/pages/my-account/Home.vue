<template>
  <div class="home">
    <HeaderInformation/>
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
.home {
  padding: 60px 10px;
}
</style>
