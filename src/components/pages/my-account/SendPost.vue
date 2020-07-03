<template>
  <div>
    Laisser de mes nouvelles
    <l-form-myacount @formSubmit="getCompanyPost()">
      <m-textarea v-model="companyPost" :errors="{}" name="sendPost">Votre message</m-textarea>
      <template v-slot:bottom>
        <a-button type="submit" width="100%">Poster ce message</a-button>
      </template>
    </l-form-myacount>
  </div>
</template>

<script>
export default {
  name: 'SendPOst',
  data() {
    return {
      companyPost: '',
    };
  },
  mounted() {
    // this.$Api.putPost(
    //   {
    //     title: 'test depuis le front',
    //     content: 'ces un test du front',
    //   },
    // );
  },
  methods: {
    getCompanyPost() {
      // fetch('http://localhost/api/posts/create', {
      //   method: 'POST',
      //   headers: new Headers(
      //     {
      //       Autorization: `Bearer ${this.$Api.token}`,
      //       // 'Content-Type': 'application/json',
      //     },
      //   ),
      //   mode: 'cors',
      //   cache: 'default',
      //   'Content-Type': 'application/json',
      //   body: JSON.stringify(
      //     {
      //       title: 'test depuis le front',
      //       content: 'ces un test du front',
      //     },
      //   ),
      // });
      this.$Api.putPost(
        {
          title: 'test depuis le front',
          content: 'ces un test du front',
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
