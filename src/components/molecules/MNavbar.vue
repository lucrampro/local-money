<template>
  <div class="navbar flex flex-wrap items-center justify-center">
    <a-navbar-picto :imgs="{
      default: 'navbar/commerce-orange.png',
      selected: 'navbar/commerce-white.png',
    }" />
    <a-navbar-picto :isSelected="true" :imgs="{
      default: 'navbar/commerce-orange.png',
      selected: 'navbar/communauté-white.png',
    }"/>
    <a-navbar-picto :imgs="{
      default: 'navbar/commerce-orange.png',
      selected: 'navbar/commerce-white.png',
    }" />
    <a-navbar-picto :imgs="{
      default: 'navbar/commerce-orange.png',
      selected: 'navbar/commerce-white.png',
    }" />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentSelection: 'Commerce',
    };
  },
};
</script>

<style lang='scss' scoped>
  .navbar {
  height: 70px;
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  .wrapper--links {
    font-size: 11px;
    color: #de6b48;
    height: 38px;
    width: 85px;
    border-radius: 8px;
    * {
      pointer-events: none;
    }
  }
}
</style>
