<template>
  <img :src="currentImg" alt="">
</template>

<script>
export default {
  name: 'NavbarPicto',
  methods: {
    /**
     * @param {props, string} src
     * @returns {string} path of imgs..
     */
    getImgUrl(src) {
      const path = require(`../../assets/img/${src}`); //eslint-disable-line
      return path;
    },
  },
  computed: {
    currentImg() {
      return this.getImgUrl(this.$props.isSelected ? this.$props.imgs.selected : this.$props.imgs.default);
    },
  },
  props: {
    imgs: {
      required: true,
      default: {
        default: 'navbar/commerce-orange.png',
        selected: 'navbar/commerce-white.png',
      },
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>

</style>
