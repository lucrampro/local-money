<template>
  <div class="wrapper--bloc">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WrapperBloc',
};
</script>

<style>
.wrapper--bloc {
  border-radius: 28px;
  padding: 10px 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.10);
}
</style>
