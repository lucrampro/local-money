// <template>
  <l-regitster @formSubmit="toNextPage()">
    <template v-slot:header>
      <div class="flex flex-row-reverse">
        <a-button @click.native="$router.push({ name: 'register' })" >Se connecter</a-button>
      </div>
      <p class="pt-4 text-4xl font-semibold">Inscrivez-vous</p>
    </template>
      <router-view @updateFormValid="(val) => {formValid = val}" />
    <template v-slot:bottom>
      <div class="flex flex-row justify-between">
        <span  @click.native="toPreviousPage()">
          <a-button >Precedent</a-button>
        </span>
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
