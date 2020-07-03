<template>
  <div class="navBar">
    <div class="navBar__visiblePart">
      <a-navbar-picto
        v-for="(pageIcon, index) in navPages"
        :key="'icone_nave_' + index"
        @click.native="pageIcon.functionBind()"
        :pageName="pageIcon.pageName"
        :isSelected="currentPageName === pageIcon.pageNameBind"
        :componentId="pageIcon.componentId"
      />
    </div>
    <ul class="navBar__hiddenPart">
      <li
        v-for="(pageIcon, index) in navPages"
        :key="'icone_nave_hidden_' + index"
        @click.native="pageIcon.functionBind()"
        :isSelected="currentPageName === pageIcon.pageNameBind"
      >
       {{ pageIcon.pageNameBind}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navPages: {
      required: true,
      type: Array,
    },
    navPagesSecondary: {},
    currentPageName: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped>
.navBar {
  height: 60vh;
  min-height: 520px;
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  &__visiblePart {
    padding-top: 22px;
    padding-bottom: 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__hiddenPart {
    background: white;
    width: 90vw;
    margin: auto;
    height: 100%;
    border-radius: 30px;
    padding: 20px;
    padding-top: 5vh;
  }
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
