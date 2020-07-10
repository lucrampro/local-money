<template>
  <div class="confirmPage">
    <img class="logo" src="@/assets/logo.png" alt="">
    <p class="confirmText" v-html="confirmPageMessage"></p>
    <div class="wrapperButton">
      <a-button @click.native="$router.push({ name : 'Home'})" width="100%">Suivant</a-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'confirmPageMessage',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.confirmPage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: $primary-color;

  .logo {
    align-self: center;
    width: 41px;
    top: 35px;
    position: relative;
  }

  .confirmText {
    margin: 200px auto;
    display: block;
  }
  .wrapperButton {
    width: 70%;
    margin: 0 auto;
    padding: 0 0px;
  }
}
</style>
