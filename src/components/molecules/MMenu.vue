<template>
  <l-overlay :isActive="true">
    <ul v-if="mode === 'menu-list'">
      <li v-for="(item, index) in menuList" :key="'part_of_menu_' + index" >{{item.text}}</li>
    </ul>
  </l-overlay>
</template>

<script>
export default {
  name: 'MMenu',
  data() {
    return {
      mode: 'menu-list',
      menuList: [
        {
          text: 'Acceuil',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Communauté',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Transaction',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Commerce',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Mon Profile',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Changer de profile',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Donner de mes nouvelles',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Mes Favoris',
          functionBind: this.switchPage(''),
        },
        {
          text: 'Déconnexion',
          functionBind: this.switchPage(''),
        },
      ],
    };
  },
  methods: {
    switchPage(pageName) {
      return pageName;
    },
  },
};
</script>
