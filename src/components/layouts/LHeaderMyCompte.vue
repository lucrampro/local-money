<template>
  <div class="lHeaderMyCompte">
    <a-user-picture>{{$props.name[0]}}</a-user-picture>
    <img class="logo" src="/logo.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'lHeaderMyCompte',
  props: {
    name: {
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.lHeaderMyCompte {
  padding: 20px;
  display: flex;
  position: relative;
  .logo {
    display: block;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

::v-deep .wrapperprofilPicture {
  transform: scale(0.7);
}
</style>
