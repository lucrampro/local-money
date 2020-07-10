<template>
  <ValidationObserver ref="observer">
    <div>
      <p>Mon solde : {{solde}} MCL</p>
      <p>Je souhaite acquérir :</p>
      <div class="fieldConvert">
        <ValidationProvider v-slot="{errors}" name=" " :rules="rules">
          <o-transaction-input
            v-model="transferedMoney"
            :label="label"
            :errors="errors"
            name="sum_to_send"
          />
        </ValidationProvider>
        <a-button
          class="convertButton"
          @click.native="switchMode()"
          background="white"
          :hasSecondaryBackground="false"
          v-if="compteType === 'company'"
        >
          <a-icone-conver />
        </a-button>
      </div>
      <div v-if="transferedMoney" class="bottom">
        <p v-if="mode === 'vers-local'">en euro {{transferedMoney}} €</p>
        <p v-else>en monnaie locale {{transferedMoney}} mlc</p>
      </div>
    </div>
  </ValidationObserver>
</template>
<script>

import { mapGetters } from 'vuex';
import formMixin from '@/mixins/formMixin';
import AiconvertArrow from '@/components/atoms/Icones/AiconeConvert.vue';

export default {
  data() {
    return {
      mode: 'vers-local',
      transferedMoney: '',
    };
  },
  components: {
    'a-icone-conver': AiconvertArrow,
  },

  watch: {
    mode(newVal) {
      this.$router.push({ params: { to: newVal } });
    },
    transferedMoney(newVal) {
      this.$emit('updateForm', { transferedMoney: newVal });
    },
  },
  mounted() {
    this.$router.push({ params: { to: this.mode } });
  },
  methods: {
    switchMode() {
      this.mode = this.mode === 'vers-local' ? 'vers-euro' : 'vers-local';
    },
  },
  computed: {
    ...mapGetters(['solde', 'userInfomations']),
    label() {
      return this.mode === 'vers-local' ? 'MLC' : '€';
    },
    rules() {
      return `required|min_value:1${this.mode === 'vers-euro' ? `|max_value:${this.solde}` : ''}`;
    },
    compteType() {
      return this.userInfomations.type;
    },
  },
  mixins: [formMixin],
};
</script>
<style lang="scss" scoped>
.fieldConvert {
  display: flex;
  justify-content: space-between;
}
.bottom {
  position: relative;
  bottom: -20px;
}
.convertButton {
  width: auto;
  margin-left: 30px;
  margin-top: 30px;
}
</style>
