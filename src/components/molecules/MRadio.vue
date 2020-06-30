<template>
  <div>
    {{label}}
    <span class="Mradio" v-for="(item, index) in inputs" :key="index">
        <label>
        <input  v-model="model" :id="index" :value="item.value" type="radio" class="w-5 h-5 text-gray-600 form-radio" checked><span class="ml-2 text-gray-700">{{item.name}}</span>
      </label>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Mradio',
  data() {
    return {
      model: this.$attrs.value || '',
    };
  },
  props: {
    exemple: String,
    label: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    inputs: {
      default: [],
    },
    name: {
      type: String,
      default: '',
    },
    maxlength: {
      type: String,
      default: '20',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  watch: {
    model(newVal) {
      this.$emit('input', newVal);
    },
  },
  computed: {
    placeholder() {
      console.warn();
      return this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text;
    },
  },
};
</script>

<style lang="scss" scoped>
.Mradio {
  display: flex;
  label {
    align-items: center;
    margin-top: 3px;
    display: inline-flex;
  }
}
</style>
