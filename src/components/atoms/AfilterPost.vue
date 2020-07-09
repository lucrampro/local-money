<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FilterPost',
};
</script>

<style lang="scss" scoped>
button {
  background-color: #189b73;
  margin: 2px;
  color: #fefefe;
  height: 30px;
  width: auto;
  border-radius: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  button {
    outline: none;
  }
}
</style>
