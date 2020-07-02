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
        color: this.$styleGuild.find(this.$props.color),
        background: this.$styleGuild.find(this.$props.background),
        width: this.$styleGuild.find(this.$props.width),
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
    width: {
      type: String,
      default: '',
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
  margin: 5px 0px;
  &:focus {
   outline : none,
  }
}

</style>
