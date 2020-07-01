<template>
<div>
  <a-switch-button name="switch__page__transaction" v-model="mode" :leftText="switchButton.leftText" :rightText="switchButton.rightText" />
  <l-wrapper-block boxShadow="none" backgroundColor="$gray-background">
    <template>
      <a-button v-if="previousName" @click.native="$router.push({ name : previousName})" background="white" color="$primary-color">></a-button>
      <router-view :nextPath="nextPath" />
    </template>
    <template v-slot:bottom >
      <div class="buttonWrapper">
        <a-button @click.native="$router.push({ name : nextName})" width="100%">Suivant</a-button>
      </div>
    </template>
  </l-wrapper-block>
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
  computed: {
    nextName() {
      return this.$route.meta.nextName;
    },
    previousName() {
      return this.$route.meta.previousName;
    },
  },
};
</script>
<style lang="scss" scoped>

::v-deep .buttonSwitch {
  margin: 0 auto;
}

.buttonWrapper {
  padding-top: 90px;
  padding-bottom: 20px;
}

</style>
