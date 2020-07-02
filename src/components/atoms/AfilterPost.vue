<template>
  <div class="filter">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'FilterPost',
};
</script>

<style lang="scss" scoped>
.filter {
  background-color: #189b73;
  margin: 2px;
  color: #fefefe;
  height: 30px;
  width: auto;
  border-radius: 16.5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
}
</style>
