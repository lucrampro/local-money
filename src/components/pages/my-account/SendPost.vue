<template>
  <div>
    <p>Laisser de mes nouvelles</p>
    <l-form-myacount @formSubmit="getCompanyPost()">
      <m-textarea v-model="companyPost" :errors="{}" name="sendPost">Votre message</m-textarea>
      <template v-slot:bottom>
        <a-button :onload="formOnload" type="submit" width="100%">Poster ce message</a-button>
      </template>
    </l-form-myacount>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SendPOst',
  data() {
    return {
      companyPost: '',
      formOnload: false,
    };
  },
  computed: {
    ...mapGetters([
      'userId',
    ]),
  },
  mounted() {
    this.$Api.getDetails();
  },
  methods: {
    getCompanyPost() {
      this.formOnload = true;
      if (this.formOnload) {
        this.$Api.putPost(
          {
            title: 'title',
            content: this.companyPost,
          },
        ).then(() => {
          this.formOnload = false;
          this.$store.dispatch('setConfirmPageMessage', 'Votre poste à bien été fait');
          this.$router.push({ name: 'Confirmation' });
        }).catch(() => {
          this.formOnload = false;
        });
      }
    },
  },
};

</script>

<style lang="scss" scoped>
::v-deep .MInput {
  textarea {
    height: 278px;
  }
}
</style>
