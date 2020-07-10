<template>
  <div class="mContactBlock">
    <div>
      <p>{{fullName || name}} <br><span class="type">{{type === 'company' ? 'Entreprise' : 'Particulier'}}</span></p>
      <p class="id">Identifiant: {{ $props.id }} </p>
    </div>
    <a-icone-remove v-if="remove" @click.native="$emit('clickRemove')"/>
  </div>
</template>

<script>

import AIconeRemove from '@/components/atoms/Icones/AIconeRemove.vue';

export default {
  name: 'MContactBlock',
  props: {
    type: {},
    name: {},
    firstName: {},
    lastName: {},
    remove: {
      default: true,
    },
    id: {},
  },
  components: {
    'a-icone-remove': AIconeRemove,
  },
  computed: {
    fullName() {
      return this.firstName && this.lastName ? `${this.firstName} ${this.lastName}` : this.name;
    },
  },
};

</script>

<style lang="scss" scoped>
.mContactBlock {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: white;
  border-radius: 10px;
  margin: 10px 0px;
  line-height: 25px;
  div {
    display: flex;
    flex-direction: column;
  }
}

.type {
  font-size: 14px;
  color: $secondary-color;
}

.id {
  font-size: 14px;
  color: $primary-color;
}
svg {
  margin: auto 0;
}
</style>
