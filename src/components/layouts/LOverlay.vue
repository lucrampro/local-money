<template>
  <div v-show="isActive" class="overlay">
    <div class="overlayContent">
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
<style lang="scss">

.overlay {
  background: rgba(0, 0, 0, 0.479);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  .overlayContent {
    z-index: 101;
  }
}
</style>
