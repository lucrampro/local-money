export default {
  props: {
    isSelected: {
      type: Boolean,
    },
  },
  computed: {
    fill() {
      return this.isSelected ? '#F5F5F5' : '#B8B8B8';
    },
  },
};
