<template>
  <div class="MInput">
    <label :for="name" class="px-1 text-sm text-gray-600">{{placeholder}}</label>
    <input :id="name" ref="input" :name="name" :maxlength="maxlength" :rules="rules" :placeholder="exemple" v-model="model" :type="type" >
    <span class="errorMessage">{{errors[0]}}</span>
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
          this.model += this.mask[newVal.length];
        }
      }
      // console.log();
      if (this.type === 'tel' && /\D/.test(newVal)) {
        this.model.slice(1);
        this.model = this.model.slice(0, this.model.length - 1);
        return;
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
input {
  background: #FFFFFF;
  height: 50px;
  border: 2px solid #9ebab1b6;
  padding: 0px 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}
.errorMessage {
  color: #ff3b3b;
}
</style>
