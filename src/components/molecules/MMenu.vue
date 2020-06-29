<template>
  <ul v-if="mode === 'menu-list'">
    <li></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      mode: 'menu-list',
      menuList: [
        {
          text: 'Acceuil',
          functionBind: this.switchPage(''),
        },
      ],
    };
  },
  methods: {
    switchPage(pageName) {

    },
  },
};
</script>
