<template>
  <div>
    <label :for="name" class="px-1 text-sm text-gray-600">{{placeholder}}</label>
    <input :id="name" ref="input" :name="name" :maxlength="maxlength" :rules="rules" :placeholder="exemple" v-model="model" :type="type" class="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
    <span class="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">{{errors[0]}}</span>
  </div>
</template>

<script>
export default {
  name: 'MInput',
  data() {
    return {
      model: this.$attrs.value || '',
    };
  },
  props: {
    exemple: String,
    mask: {
      default: false,
    },
    rules: {
      type: String,
      default: '',
    },
    errors: {
      default: [],
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    maxlength: {
      type: String,
      default: '50',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  watch: {
    model(newVal, oldVal) {
      if (newVal > oldVal) {
        if (this.mask && this.mask[newVal.length] && this.mask[newVal.length] !== '#') {
          console.log(this.mask, newVal.length, this.mask[newVal.length]);
          this.model += this.mask[newVal.length];
        }
      }
      this.$emit('input', newVal);
    },
  },
  computed: {
    placeholder() {
      return this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text;
    },

  },
};
</script>

<style lang="scss" scoped>
</style>
