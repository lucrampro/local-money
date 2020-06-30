<template>
<span class="picto" :style="{ backgroundColor : currentBackgroundColor }">
 <img class="picto__img" :src="currentPicto" alt="">
</span>
</template>

<script>

import pictoDefault from '@/assets/img/pictos/default.png';

export default {
  name: 'Apicto',
  data() {
    return {
      pictos: {
        default: pictoDefault,
      },
    };
  },

  props: {
    type: {
      type: String,
      default: 'default',
    },
    background: {
      default: '#F7D08A',
    },
  },

  computed: {
    currentPicto() {
      return this.pictos[this.$props.type];
    },
    currentBackgroundColor() {
      return this.$styleGuild.find(this.$props.background);
    },
  },

};

</script>
<style lang="scss" scoped>
.picto {
  padding: 6px;
  border-radius: 4px;
  &__img {
    min-height: 29px;
  }
}
</style>
