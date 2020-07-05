<template>
  <div v-show="isActive" class="overlay">
    <div class="overlayContent">
      <div @click="$emit('clickOutSide', true)" class="overlayBackground" ></div>
      <slot class="containt"></slot>
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

.overlayBackground {
  background: rgba(0, 0, 0, 0.479);
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  top: 0;
}
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  left: 0px;
  top: 0px;
  .overlayContent {
    position: absolute;
    margin: auto;
    display: block;
    z-index: 101;
    .containt {
      z-index: 0;
    }
  }
}
</style>
