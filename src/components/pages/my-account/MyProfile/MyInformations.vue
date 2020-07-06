<template>
  <l-wrapper-block backgroundColor="$gray-background">
    <a-button>Modifier mes informations</a-button>
    <div class="contactInformation">
      <ul v-for="(info, index) in myInformation" :key="index">
        <li>{{info.title}}</li>
        <li>{{info.firstInfo}}</li>
        <li>{{info.secondInfo}}</li>
      </ul>
    </div>
  </l-wrapper-block>
</template>

<script>
export default {
  name: 'myInformation',
  data() {
    return {
      myInformation: [
        {
          title: 'Contact',
          firstInfo: '0678567974',
          secondInfo: 'samantha.poitier@gmail.com',
        },
        {
          title: 'Adresse',
          firstInfo: '345 allee de la tortue',
          secondInfo: '24000, Allex',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contactInformation {
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
}
</style>
