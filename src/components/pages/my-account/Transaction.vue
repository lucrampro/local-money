<template>
<div>
  <a-switch-button name="switch__page__transaction" v-model="mode" :leftText="switchButton.leftText" :rightText="switchButton.rightText" />
  <router-view/>
</div>

</template>
<script>
export default {
  data() {
    return {
      mode: this.$route.name,
      switchButton: {
        leftText: {
          text: 'Envoyer',
          value: 'ConvertMoney',
        },
        rightText: {
          text: 'Convertir',
          value: 'SendMoney',
        },
      },
    };
  },
  watch: {
    mode(newPageName) {
      this.$router.push({ name: newPageName });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
