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
          value: 'MyContact',
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
      if (newPageName === 'MyContact' || newPageName === 'MyInformation') {
        this.$router.push({ name: newPageName });
      }
    },
  },
};
</script>
