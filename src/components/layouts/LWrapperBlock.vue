<template>
  <div class="wrapper--bloc" :style="{ 'box-shadow' : $props.boxShadow ,'background-color' : currentBackgroundColor  }">
    <p>
      <slot class="title" name="title"></slot>
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WrapperBlock',
  props: {
    backgroundColor: {
      default: 'white',
    },
    boxShadow: {
      default: '0px 0px 20px rgba(0, 0, 0, 0.10)',
    },
  },
  computed: {
    currentBackgroundColor() {
      return this.$styleGuild.find(this.$props.backgroundColor);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper--bloc {
  border-radius: 28px;
  padding: 40px 25px;
  margin: 10px 0px;

  .title {
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
