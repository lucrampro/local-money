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
          value: 'SendMoney',
        },
        rightText: {
          text: 'Convertir',
          value: 'ConvertMoney',
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

::v-deep .buttonSwitch {
  margin: 0 auto;
}

</style>
