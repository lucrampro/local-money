<template>
<span class="picto">
 <img class="picto__img" :src="currentPicto" alt="">
</span>
</template>

<script>

import pictoDefault from '@/assets/img/pictos/heart.svg';
import imgculture from '@/assets/img/pictos/culture.svg';
import imgrestauration from '@/assets/img/pictos/restauration.svg';
import imgparc from '@/assets/img/pictos/parc.svg';
import imgservice from '@/assets/img/pictos/service.svg';
import imglogement from '@/assets/img/pictos/logement.svg';
import imgassociation from '@/assets/img/pictos/association.svg';
import icommerce from '@/assets/img/pictos/commerce.svg';

export default {
  name: 'Apicto',
  data() {
    return {
      pictos: {
        default: pictoDefault,
        Culture: imgculture,
        'Commerces de proximités': icommerce,
        Restauration: imgrestauration,
        Parc: imgparc,
        Service: imgservice,
        'Logement/Hotel': imglogement,
        Association: imgassociation,
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
      if (this.pictos[this.$props.type]) {
        return this.pictos[this.$props.type];
      }
      return this.pictos.Association;
    },
    // currentBackgroundColor() {
    //   return this.$styleGuild.find(this.$props.background);
    // },
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
