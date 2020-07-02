<template>
  <div class="cardPost">
    <div class="cardPost__header">
      <slot name="header"></slot>
    </div>
    <div class="cardPost__main">
      <slot name="main"></slot>
    </div>
    <div class="cardPost__footer">
        <div class="cardPost__main__like"></div>
        <p>{{ $props.numberLikes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    numberLikes: {
      type: Number,
      default: 12,
    },
  },
};
</script>

<style lang="scss">
  .cardPost {
    position: relative;
    background-color: #31a481;
    color: #fefefe;
    border-radius: 45px;
    margin-top: 10px;
    padding: 25px 25px;
    &__header {
      font-weight: bold;
      margin-bottom: 15px;
      display: flex;
      text-transform: uppercase;
    }
    &__footer {
      margin-top: 20px;
      display: flex;
      align-items: center;
      min-width: 100px;
      font-weight: bold;
      font-size: 22px;
      &__like {
        height: 40px;
        width: 40px;
        background-color: #fefefe;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
</style>
