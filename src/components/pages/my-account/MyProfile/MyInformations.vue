<template>
  <m-card-post>
    <template v-slot:main>
      <a-button>Modifier mes informations</a-button>
      <ul>
        <li>Mes informations</li>
        <li v-for="(items, index) in myInformation" :key="index">{{index}}: {{items}}</li>
      </ul>
    </template>
  </m-card-post>
</template>

<script>
export default {
  name: 'myInformation',
  data() {
    return {
      myInformation: [
      ],
    };
  },
  mounted() {
    this.$Api.getUserInfo(this.$Api.token)
      .then((response) => {
        this.myInformation = response;
        console.log('je suis myInformation', this.myInformation);
      });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    li {
      font-weight: 400;
      &:first-child {
        margin: 15px 0px;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
</style>
