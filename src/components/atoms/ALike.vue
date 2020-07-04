<template>
  <div class="likeHeart">
    <svg>
      <path :style="currentState" xmlns="http://www.w3.org/2000/svg" d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58   c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0   c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Like',
  data() {
    return {
      state: {
        isLiked: {
          fill: '#D7443E',
          strokeWidth: '0px',
        },
        isDisLiked: {
          strokeWidth: '20px',
          // fill: '#31a581',
        },
      },
    };
  },
  computed: {
    currentState() {
      return this.$props.isLiked ? this.state.isLiked : this.state.isDisLiked;
    },
  },
  props: {
    isLiked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  width: 60px;
  height: 60px;
  padding-left: 5px;
  path {
    transform: scale(0.1);
    stroke: black;
    stroke-width: 20px;
    fill: none;
  }
}
</style>
