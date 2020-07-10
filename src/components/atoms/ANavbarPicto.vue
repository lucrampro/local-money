<template>
  <span class="pictoWrapper" :class="{ 'selected' : isSelected }">
    <component :isSelected="isSelected" :is="componentId"></component>
    <span class="pageName" :class="{hidden: !isSelected}">{{pageName}}</span>
  </span>
</template>

<script>
export default {
  name: 'NavbarPicto',
  computed: {
    currentImg() {
      return this.$props.isSelected
        ? this.$props.imgs.selected
        : this.$props.imgs.default;
    },
  },
  props: {
    pageName: {
      type: String,
    },
    componentId: {
      type: String,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
span svg {
  margin: auto;
}
img {
  margin: auto;
}
span {
  color: white;
}
.pictoWrapper {
  transition: all 360.713ms ease 0ms;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  &::after {
    display: block;
    content: '';
    position: absolute;
    margin: auto;
    top: -10px;
    left: -18px;
    width: 50px;
    height: 30px;
  }
}
.pageName {
  &.hidden {
    opacity: 0;
    font-size: 1px;
  }
}
.selected {
  background: $secondary-color;
  padding: 6px 20px 0px 20px;
  border-radius: 10px;
}
</style>
