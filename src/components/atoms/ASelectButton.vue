<template>
  <button type="button" class="ASelectButton" :class="{'selected': selected}"><slot></slot></button>
</template>

<script>
export default {
  props: {
    mode: {},
    value: {},
  },
  computed: {
    selected() {
      return this.mode === this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.ASelectButton {
  color: $primary-color;
  background: white;
  border: solid $primary-color 3px;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 30px;
  &.selected {
    color: white;
    background: $primary-color;
  }
}
</style>
