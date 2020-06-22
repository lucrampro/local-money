<template>
  <a class="mr-5 underline cursor-pointer hover:text-gray-900">
    <slot name="default"></slot>
  </a>
</template>

<script>
export default {
  name: 'a-link',
  computed: {
    placeholder() {
      console.warn();
      return this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
