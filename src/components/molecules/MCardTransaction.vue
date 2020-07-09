<template>
  <div  class="transaction">
    <a-picto  class="transactionElement--picto" :type="this.$props.categorie"/>
    <p class="transactionElement--name" >  {{transactionName}}</p>
    <p class="transactionElement--date">  {{$props.date}}</p>
    <p class="transactionElement--sum" :class="statusTransactionUser">  {{ fullTransactionValue }} </p>
  </div>
</template>

<script>

export default {
  name: 'MCardTransaction',
  mounted() {},
  props: {
    name: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    sum: {
      type: String,
      default: '',
    },
    beneficiaryName: {},
    emiterName: {},
    statusTransactionUser: {
      type: String,
      default: '',
    },
    categorie: {
      type: String,
      default: '',
    },
  },
  computed: {
    fullTransactionValue() {
      return this.statusTransactionUser === 'emiter' ? `- ${this.sum}` : `+ ${this.sum}`;
    },
    transactionName() {
      return this.statusTransactionUser === 'beneficiary' ? this.emiterName : this.beneficiaryName;
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: $gray-background;
  padding: 10px;
  max-width: 100%;
  border-radius: 20px;
  margin: 20px 0px;
  .transactionElement {
    &--picto {
      margin: auto;
      grid-area: 1 / 1 / 5 / 2
    }

    &--name {
      font-weight: bold;
      grid-area: 1 / 2 / 3 / 5;
      overflow: hidden;
      white-space: nowrap;
    }

    &--date {
      grid-area: 3 / 2 / 5 / 5;
      font-weight: 300;
      color: rgb(39, 39, 39);
    }

    &--sum {
      font-weight: bold;
      grid-area: 2 / 5 / 4 / 6;
      &.emiter {
        color: #D16228;
      }
      &.beneficiary {
        color: #189B73
      }
    }
  }
}
</style>
