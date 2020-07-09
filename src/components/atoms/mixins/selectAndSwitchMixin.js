export default {
  data() {
    return {
      model: this.$attrs.value || '',
    };
  },
  watch: {
    model(newVal) {
      this.$emit('input', newVal);
    },
    '$attrs.value': function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.model = newVal;
      }
    },
  },
};
