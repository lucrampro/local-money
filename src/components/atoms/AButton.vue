<template>
  <button class="aButton" :style="buttonStyle" :type="type">
    <span v-if="!onload">
      <slot></slot>
    </span>
    <span>
      <svg
      v-if="onload"
      width="40px"
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
        xml:space="preserve"
      >
        <path
          fill="#fff"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </span>
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
    onload: {
      default: false,
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
    outline: none;
  }
  svg {
    margin: auto;
    margin: -9px auto;
  }
}
</style>
