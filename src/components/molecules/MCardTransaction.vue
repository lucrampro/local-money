<template>
  <div  class="transaction">
    <a-picto  class="transaction__picto" type="default"/>
    <p class="transaction__name" >  {{$props.name}}</p>
    <p class="transaction__date">  {{$props.date}}</p>
    <p class="transaction__sum">  {{$props.sum}}</p>
  </div>
</template>

<script>

export default {
  name: 'MCardTransaction',
  props: {
    name: {
      type: String,
      default: 'Cheik',
    },
    date: {
      type: String,
      default: 'Ven 22',
    },
    sum: {
      type: String,
      default: '6MCl',
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
  margin: 5px 0px;

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
