<template>
  <div  class="register__inscription">
    <div class="wrapper--connexion" >
      <slot name="header"></slot>
    <form v-on:submit.prevent="submit()" >
      <div class="main">
        <slot></slot>
      </div>
        <slot name="bottom"></slot>
    </form>
    </div>
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
  height: 100vh;
  background: url('../../assets/img/background-register.png');
  padding-top: 25vh;
  .wrapper--connexion{
    height: 100%;
    background: #F5F5F5;
    border-radius: 35px 35px 0px 0px;
    padding: 30px 32px;
  }
}
</style>
