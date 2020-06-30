<template>
  <div class="wrapper--bloc">
    <p>
      <slot name="title"></slot>
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WrapperBloc',
  props: {

  },
};
</script>

<style lang="scss" scoped>
.wrapper--bloc {
  border-radius: 28px;
  padding: 40px 25px;
  margin: 10px 0px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.10);
  p {
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
