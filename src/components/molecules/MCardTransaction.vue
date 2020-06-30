<template>
  <div  class="transaction">
    <a-picto  class="transaction__picto" type="default"/>
    <div class="transaction__name" ><slot name="transaction_name"></slot></div>
    <div class="transaction__date"><slot name="transaction_date"></slot></div>
    <div class="transaction__sum"><slot name="transaction_sum"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'MCardTransaction',
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

  &__picto {
    margin: auto;
    grid-area: 1 / 1 / 5 / 2
  }

  &__name {
    font-weight: bold;
    grid-area: 1 / 2 / 3 / 5;
  }

  &__date {
    grid-area: 3 / 2 / 5 / 5;
  }

  &__sum {
    font-weight: bold;
    grid-area: 2 / 5 / 4 / 6;
  }
}
</style>
