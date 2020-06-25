<template>
  <input type="submit" :text="text" class="px-8 py-2 text-lg text-white bg-orange-500 border-0 rounded focus:outline-none hover:bg-orange-600">
</template>

<script>
export default {
  name: 'ASubmitButton',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
