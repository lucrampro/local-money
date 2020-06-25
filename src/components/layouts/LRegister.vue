<template>
  <div  class="register__inscription">
    <header class="header" >
      <slot name="header"></slot>
    </header>
    <form v-on:submit.prevent="submit()" >
      <div class="main">
        <slot></slot>
      </div>
      <div class="bottom">
        <slot name="bottom"></slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LRegister',
  methods: {
    submit() {
      this.$emit('formSubmit');
    },
  },
};
</script>

<style lang="scss" scoped>
.register__inscription {
  min-height: 80vh;
}
header {
  height: 20vh;
}
.main {
  min-height: 50vh;
}
.bottom {
  height: 14vh;
}
</style>
