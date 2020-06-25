const FormInscriptionPages = {
  created() {
    const { initFormData } = this;
    /* eslint-disable */
    for (const playloadKey in initFormData) {
      this[playloadKey] = initFormData[`${playloadKey}`]
      
      console.log( this[playloadKey] , initFormData[`${playloadKey}`])
    }
    /* eslint-enable */
  },
  mounted() {
    this.$watch(() => this.$refs.observer.flags.valid, (val) => { this.$emit('updateFormValid', val); });
    if (this.$refs.observer.flags.valid) {
      this.$emit('updateFormValid', true);
    }
  },
  props: {
    initFormData: {
      type: Object,
      default: {},
    },
  },
};

export default FormInscriptionPages;
