<template>
  <a class="Alink">
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
.Alink {
  text-decoration: underline;
  color: rgb(58, 58, 58);
}
</style>
