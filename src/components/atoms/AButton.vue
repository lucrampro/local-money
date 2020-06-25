<template>
  <button :type="type" class="px-8 py-2 text-lg text-white bg-orange-500 border-0 rounded focus:outline-none hover:bg-orange-600">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
