<template>
  <div class="mContactBlock">
    <span>Marcel Duchamp</span>
    <img src="@/assets/img/pictos/default.png" alt="" srcset="">
  </div>
</template>

<script>

export default {
  name: 'MContactBlock',

};

</script>

<style lang="scss" scoped>
.mContactBlock {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: white;
  border-radius: 10px;
}
</style>
