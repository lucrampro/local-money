<template>
  <div class="card--post">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
        <div class="like"></div>
        <p>{{ $props.numberLikes }}</p>
    </footer>
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
  .card--post {
    position: relative;
    background-color: #31a481;
    color: #fefefe;
    border-radius: 45px;
    min-height: 260px;
    margin-top: 10px;
    padding: 25px 25px;
    header {
      font-weight: bold;
      margin-bottom: 15px;
      display: flex;
      text-transform: uppercase;
    }
    footer {
      margin-top: 20px;
      display: flex;
      align-items: center;
      min-width: 100px;
      font-weight: bold;
      font-size: 22px;
      .like {
        height: 40px;
        width: 40px;
        background-color: #fefefe;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
</style>
