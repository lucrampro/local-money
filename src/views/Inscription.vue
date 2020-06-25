// <template>
  <l-regitster @formSubmit="toNextPage()">
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <a-button @click.native="$router.push({ name: 'register' })" >Se connecter</a-button>
      </div>
      <p class="pt-4 text-4xl font-semibold">Inscrivez-vous</p>
    </template>
      <router-view @updateForm="( formData ) => { updateForm(formData) }" @updateFormValid="(val) => {formValid = val}" />
    <template v-slot:bottom>
      <div class="flex flex-row justify-between">
        <a-button  @click.native="toPreviousPage()" >Precedent</a-button>
        <a-submit-button v-show="formValid" text="Suviant"> </a-submit-button>
      </div>
    </template>
  </l-regitster>
</template>

<script>
export default {
  name: 'inscription',
  data() {
    return {
      formDatas: {
      },
      submitted: false,
      formValid: false,
    };
  },
  methods: {
    toNextPage() {
      if (this.formValid) {
        this.$router.push({ path: this.nextPath });
        this.formValid = false;
      }
    },
    toPreviousPage() {
      this.$router.push({ path: this.previousPath });
    },
    updateForm(curentFormData) {
      console.log(curentFormData);
      this.formDatas = {
        ...this.formDatas,
        ...curentFormData,
      };
    },
  },
  computed: {
    nextPath() {
      return this.$route.meta.nextPath;
    },
    previousPath() {
      return this.$route.meta.previousPath;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
