<template>
  <div id="app" class="px-6 py-10">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$Api.addEventListener('session-user-login', (event) => {
      this.$store.dispatch('addToken', event.detail);
    });
  },
};

</script>

<style>

</style>
