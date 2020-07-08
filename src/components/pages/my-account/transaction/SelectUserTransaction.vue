<template>
  <div>
    <p>Montant à envoyer {{transfered_money || 0}} MCL</p>
    <div>
      <ValidationProvider
        name="Identifiant du bénéficiaire"
        rules="required|min:2"
        v-slot="{ errors }"
      >
      <p class="by">par : </p>
        <div class="selectModeSend">
          <a-select-button :mode="currentMode" @click.native="switchMode('id')" value="id">Identifiant</a-select-button>
          <a-select-button :mode="currentMode" @click.native="switchMode('contact')" value="contact">Contact</a-select-button>
        </div>
        <m-input
          v-if="currentMode === 'id'"
          :errors="errors"
          name="zipCode"
          type="tel"
          v-model="beneficiaryAccountNumber"
          maxlength="5"
          exemple="AC14FG"
        >Identifiant du bénéficiaire</m-input>
        <div v-else>
          <m-contact-block v-for="(contact, key) in contacts" :remove="false" :type="contact.type" :name="contact.name" :lastName="contact.lastName" :firstName="contact.firstName" @click.native="sendTransaction(contact)" :key="'contact_'+key" />
        </div>

      </ValidationProvider>
    </div>
  </div>
</template>

<script>
import formMixin from '@/mixins/formMixin';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentMode: 'id',
      beneficiaryAccountNumber: null,
    };
  },
  mounted() {
    this.$Api.getContacts();
  },
  computed: {
    ...mapGetters([
      'contacts',
    ]),
  },
  watch: {
    beneficiaryAccountNumber(newVal) {
      this.$emit('updateForm', { beneficiaryAccountNumber: newVal });
    },
  },
  methods: {
    switchMode(value) {
      this.beneficiaryAccountNumber = '';
      this.currentMode = value;
    },
    sendTransaction(contact) {
      const fullName = contact.name ? `${contact.name}` : `${contact.lastName} ${contact.firstName}`;
      this.beneficiaryAccountNumber = contact.account_number;
      this.$emit('updateForm', { beneficiaryAccountNumber: contact.account_number, fullName });
      this.$emit('submitForm', true);
    },
  },
  mixins: [formMixin],
};
</script>

<style lang="scss" scoped>
.by {
  margin-top: 10px ;
  font-weight: 800;
}
.selectModeSend {
  margin-top: 10px;
  width: 265px;
  :nth-child(even) {
    margin-left: 20px;
  }
}
</style>
