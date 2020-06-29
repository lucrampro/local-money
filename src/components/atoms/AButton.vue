<template>
  <button :style="buttonStyle" :type="type">
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
  padding: 12px 20px;
  border: 30px;
  color: white;
  background: $primary-color;
  display: table;
  border-radius: 15px;
  &:focus {
   outline : none,
  }
}

</style>
