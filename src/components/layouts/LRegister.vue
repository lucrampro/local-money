<template>
  <div class="register__inscription">

    <div class="wrapper--connexion">
      <!-- SLOT HEADER -->
      <slot name="header"></slot>
      <form v-on:submit.prevent="submit()">
        <!-- SLOT DEFAULT -->
        <div class="main">
          <slot></slot>
        </div>
        <!-- SLOT BOTTOM -->
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
  min-height: 100vh;
  background: url("../../assets/img/background-register.png");
  padding-top: 25vh;
  .main {
    min-height: 40vh;
  }
  .wrapper--connexion {
    min-height: 75vh;
    height: 100%;
    background: #f5f5f5;
    border-radius: 35px 35px 0px 0px;
    padding: 30px 32px;
  }
}
</style>
