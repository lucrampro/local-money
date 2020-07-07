<template>
  <div>
    <div class="containerButton">
      <a-button width="100%" type="submit" @click.native="$emit('updateForm', { type: 'company' }); toNextPage();" class="w-full company">Entreprise</a-button>
    </div>
    <div class="containerButton">
      <a-button width="100%" type="submit" @click.native="$emit('updateForm', { type: 'particular' }); toNextPage()" class="w-full particular" background="#DE6B48">Particulier</a-button>
    </div>

    <select v-model="selected">
      <option disabled value="">Votre gouvernance</option>
      <option v-for="(gouvernance, index) in this.gouvernanceList" :key="index" :value="gouvernance.id">{{gouvernance.governance_name}}</option>
    </select>

  </div>
</template>

<script>

export default {
  name: 'TypeOfAccount',
  data() {
    return {
      gouvernanceList: [],
    };
  },
  props: {
    toNextPage: {
      type: Function,
    },
  },
  mounted() {
    this.$emit('updateFormValid', true);
    this.$Api.get('/governances')
      .then((gouvernanceList) => {
        this.gouvernanceList = gouvernanceList;
      });
  },
};
</script>

<style lang="scss" scoped>
.containerButton {
  padding: 10px 0px;
}
</style>
