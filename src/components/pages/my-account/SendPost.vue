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
      'userFirstName',
      'userId',
    ]),
  },
  mounted() {
  },
  methods: {
    getCompanyPost() {
      this.formOnload = true;
      this.$Api.putPost(
        {
          title: 'title',
          content: this.companyPost,
        },
      );
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
