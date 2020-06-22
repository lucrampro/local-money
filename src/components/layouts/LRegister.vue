<template>
  <div class="register__inscription">
    <header class="header" >
      <slot name="header"></slot>
    </header>
    <div class="main">
      <slot></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LRegister',
};
</script>

<style lang="scss" scoped>
.register__inscription {
  min-height: 80vh;
}
header {
  height: 20vh;
}
.main {
  min-height: 50vh;
}
.bottom {
  height: 14vh;
}
</style>
