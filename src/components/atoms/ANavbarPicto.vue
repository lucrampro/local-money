<template>
  <img :class="{ 'picto__is--selected' : isSelected }" class="picto" :src="currentImg" alt="">
</template>

<script>
export default {
  name: 'NavbarPicto',
  computed: {
    currentImg() {
      return this.$props.isSelected ? this.$props.imgs.selected : this.$props.imgs.default;
    },
  },
  props: {
    imgs: {
      required: true,
      type: Object,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.picto {
  height: 40px;
  &.picto__is--selected {
    background: $secondary-color;
  }
}
</style>
