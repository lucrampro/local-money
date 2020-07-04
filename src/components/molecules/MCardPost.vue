<template>
  <div class="cardPost">
    <div class="cardPost__header">
      <slot name="header"></slot>
    </div>
    <div class="cardPost__main">
      <slot name="main"></slot>
    </div>
    <div class="cardPost__footer">
        <a-like @click.native="onLikeClic" :isLiked="like"/>
        <p>{{likes}}</p>
    </div>
  </div>
</template>

<script>
import Alike from '../atoms/ALike.vue';

export default {
  name: 'CardPost',
  data() {
    return {
      like: this.$props.isLiked,
      likes: this.$props.Numberlikes,
      idPost: this.$props.idOfPost,
    };
  },
  components: {
    'a-like': Alike,
  },
  methods: {
    onLikeClic() {
      this.like = !this.like;
      if (this.like === true) {
        this.likes += 1;
        this.$Api.putLike(this.idPost);
      } else {
        this.likes -= 1;
        this.$Api.putDislike(this.idPost);
      }
    },
  },
  props: {
    Numberlikes: {
      default: 6,
    },
    idOfPost: {
      Type: String,
      default: '',
    },
    isLiked: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
  .cardPost {
    position: relative;
    background-color: #F5F5F5;
    color: black;
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
      .cardPost__main__like {
        height: 40px;
        width: 40px;
        background-color: #fefefe;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
</style>
