<template>
  <l-regitster @formSubmit="toNextPage()">
    <template v-slot:header>
      <div class="flex">
        <span>
          <a-button v-if="previousPath" background="white" color="#189B73"  @click.native="toPreviousPage()" >></a-button>
        </span>
        <div>
          <p class="pt-4 text-2xl font-semibold">{{title}}</p>
          <p class="pt-1 pb-16 text-sm font-light font-semibold text-gray-600">{{subText}}</p>
        </div>
      </div>
    </template>
      <router-view :toNextPage="toNextPage" :initFormData="{...formDatas}" @updateForm="( formData ) => { updateForm(formData) }" @updateFormValid="(val) => {formValid = val}" />
    <template v-slot:bottom>
      <a-button v-if="currentNamePage !== 'AcountType'" type="submit" class="w-full" >Suviant</a-button>
      <a-button  v-if="currentNamePage === 'AcountType'" background="white" color="#189B73" class="w-full" @click.native="$router.push({ name: 'register' })" >Se connecter</a-button>
    </template>
  </l-regitster>
</template>

<script>
export default {
  name: 'inscription',
  data() {
    return {
      formDatas: {
        governanceId: 10,
      },
      submitted: false,
      formValid: false,
    };
  },
  methods: {
    formatForm(playloadForm) {
      playloadForm = JSON.parse(JSON.stringify(playloadForm));
      playloadForm.birthdate = playloadForm.birthdate.replace(/-/g, '/');
      return playloadForm;
    },
    toNextPage() {
      if (this.formValid) {
        if (!this.pageSubmited) {
          this.$router.push({ path: `${this.formDatas.type}-${this.nextPath}` });
          this.formValid = false;
        } else {
          this.$Api.register(this.formatForm(this.formDatas))
            .then(() => {
              this.$router.push({ name: 'Home' });
            });
        }
      }
    },
    toPreviousPage() {
      this.$router.push({ path: this.previousPath });
    },
    updateForm(curentFormData) {
      this.formDatas = {
        ...this.formDatas,
        ...curentFormData,
      };
    },
  },
  computed: {
    pageSubmited() {
      return this.$route.meta.submit;
    },
    nextPath() {
      return this.$route.meta.nextPath;
    },
    subText() {
      return this.$route.meta.subText;
    },
    currentNamePage() {
      return this.$route.name;
    },
    title() {
      return this.$route.meta.title;
    },
    previousPath() {
      return this.$route.meta.previousPath;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
