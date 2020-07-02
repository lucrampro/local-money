<template>
  <div class="navBarre">
    <a-navbar-picto
    v-for="(pageIcon, index) in navPages"
    :key="'icone_nave_' + index"
    @click.native="pageIcon.functionBind()"
    :isSelected="currentPageName === pageIcon.pageNameBind"
    :imgs="{
      default: pageIcon.defaultImage,
      selected:  pageIcon.selectedImage,
    }" />
  </div>
</template>

<script>
export default {
  name: 'Navbarre',
  props: {
    navPages: {
      required: true,
      type: Array,
    },
    currentPageName: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped>
.navBarre {
  height: 100px;
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
