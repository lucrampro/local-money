<template>
  <button :style="buttonStyle" :type="type" class="px-8 py-2 text-lg text-white border-0 focus:outline-none">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AButton',
  computed: {
    buttonStyle() {
      return {
        color: this.$props.color,
        background: this.$props.background,
      };
    },
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: '#fefefe',
    },
    background: {
      type: String,
      default: '#189b73',
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: #189B73;
  border-radius: 15px;
  width: 100%;
  height: 44px;
}
</style>
