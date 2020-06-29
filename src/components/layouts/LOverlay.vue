<template>
  <div v-show="isActive" class="overlay">
    <div class="overlay__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>

.overlay {
  background: black;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  .overlay {
    z-index: 101;
  }
}
</style>
