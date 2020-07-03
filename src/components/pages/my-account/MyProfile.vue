<template>
  <div>
   <a-switch-button
      name="switch__page__transaction"
      v-model="mode"
      :leftText="switchButton.leftText"
      :rightText="switchButton.rightText"
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: this.$route.name,
      switchButton: {
        leftText: {
          text: 'Mes contacts',
          value: 'myContacts',
        },
        rightText: {
          text: 'Mes informations',
          value: 'MyInformation',
        },
      },
    };
  },

  watch: {
    mode(newPageName) {
      if (newPageName === 'myContacts' || newPageName === 'MyInformation') {
        this.$router.push({ name: newPageName });
      }
    },
    $route(to) {
      this.mode = to.name;
    },
  },
};
</script>
