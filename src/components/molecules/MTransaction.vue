<template>
  <div class="transaction">
    <img class="transaction__picto" src="../../assets/img/navbar/commerce-orange.png" alt />
    <div class="transaction__name" ><slot name="transaction_name"></slot></div>
    <div class="transaction__date"><slot name="transaction_date"></slot></div>
    <div class="transaction__sum"><slot name="transaction_sum"></slot></div>
  </div>
</template>

<script>
import ApictoTransaction from '@/components/atoms/APictoTransaction.vue';

export default {
  name: 'MTransaction',
  components: [{ 'a-picto-transaction': ApictoTransaction }],
  data() {
    return {
    };
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

  &__picto {
     grid-area: 2 / 1 / 4 / 2;
  }

  &__name {
    grid-area: 1 / 2 / 3 / 5;
  }

  &__date {
    grid-area: 3 / 2 / 5 / 5;
  }

  &__sum {
    grid-area: 2 / 5 / 4 / 6;
  }

  padding: 10px;
  background: #ffffff;
  max-width: 100%;
}
</style>
