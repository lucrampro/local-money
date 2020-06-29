<template>
  <div class="navbar">
    <a-navbar-picto v-for="(pageIcon, index) in navPages" :key="'icone_nave_' + index"
    @click.native="switchPage(pageIcon.pageNameBind)"
    :isSelected="currentPageName === pageIcon.pageNameBind"
    :imgs="{
      default: pageIcon.defaultImage,
      selected:  pageIcon.selectedImage,
    }" />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navPages: {
      required: true,
      type: Array,
    },
    currentPageName: {
      type: String,
    },
  },
  methods: {
    switchPage(pageName) {
      console.log(pageName);
      this.$router.push({ name: pageName });
    },
  },
};
</script>

<style lang='scss' scoped>
.navbar {
  height: 100px;
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
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
