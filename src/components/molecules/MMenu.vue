<template>
  <l-overlay :isActive="isActive">
    <div class="container">
      <span @click="$emit('updataState', false)" class="closeButton">X</span>
      <ul class="menuNav" v-if="mode === 'menu-list'">
        <li v-for="(item, index) in menuList" :key="'part_of_menu_' + index" @click="item.functionBind">{{item.text}}</li>
      </ul>
    </div>
  </l-overlay>
</template>

<script>
export default {
  name: 'MMenu',
  props: {
    isActive: {
      default: false,
    },
    currentPageName: {
      type: String,
    },
  },
  data() {
    return {
      mode: 'menu-list',
      menuList: [
        {
          text: 'Acceuil',
          functionBind: () => { this.switchPage('Home'); },
        },
        {
          text: 'Communauté',
          functionBind: () => { this.switchPage('Community'); },
        },
        {
          text: 'Faire une Transaction',
          functionBind: () => { this.switchPage('SendMoney'); },
        },
        {
          text: 'Mes transaction',
          functionBind: () => { this.switchPage('MyTransaction'); },
        },
        {
          text: 'Commerce',
          functionBind: () => { this.switchPage('Commerce'); },
        },
        {
          text: 'Mon Profile',
          functionBind: () => { this.switchPage(''); },
        },
        {
          text: 'Changer de profile',
          functionBind: () => { this.switchPage(''); },
        },
        {
          text: 'Donner de mes nouvelles',
          functionBind: () => { this.switchPage(''); },
        },
        {
          text: 'Mes Favoris',
          functionBind: () => { this.switchPage(''); },
        },
        {
          text: 'Déconnexion',
          functionBind: () => { this.$store.dispatch('reset'); this.switchPage('Register'); },
        },
      ],
    };
  },
  methods: {
    switchPage(pageName) {
      if (this.currentPageName !== pageName) {
        this.$router.push({ name: pageName });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  position: relative;
  height: 100vh;
  width: 300px;
  float: right;
  background: white;
  display: flex;
}
.closeButton {
  position: absolute;
  font-size: 32px;
  right: 20px;
  top: 20px;
}

.menuNav {
  height: 100%;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  margin: auto;
  li {
    display: table;
    margin: auto;
  }
}
</style>
