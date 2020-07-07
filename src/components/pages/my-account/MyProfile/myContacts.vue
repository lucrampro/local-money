<template>
  <div>
    <l-wrapper-block backgroundColor="$gray-background">
      <div class="wrapperButton">
        <a-button @click.native="$router.push({ name : 'AddModifyContact', params: { type: 'ajouter' } })" width="100%" >Ajouter nouveau un contact</a-button>
      </div>
      <m-contact-block v-for="(contact, key) in contacts" :key="'contact'+key" :contactName="contact.name" @clickRemove="nextPage(contact)" />
    </l-wrapper-block>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    nextPage(contact) {
      this.$router.push({ name: 'AddModifyContact', params: { type: 'modifier', id: contact.account_id }, query: { id: contact.account_id, name: contact.name } }).then((res) => {
        this.$router.push({ path: res.fullPath });
      });
    },
  },
  mounted() {
    this.$Api.getContacts()
      .then((res) => {
        console.log(res);
      });
    this.contacts = this.$store.getters.contacts;
  },
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.wrapperButton {
  padding-bottom: 10px;
}
</style>
