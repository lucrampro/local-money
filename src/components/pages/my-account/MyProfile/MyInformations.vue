<template>
  <m-card-post :hasFooter="false">
    <template v-slot:main>
      <!-- <a-button>Modifier mes informations</a-button> -->
      <h2 class="title">Mes informations</h2>

          <div class="wrapperInformation">
            <h3>Identifiant de transaction</h3>
            <p>{{accountNumber}}</p>
          </div>

          <div class="wrapperInformation">
            <h3>Contact</h3>
            <p>{{userInfomations.number_phone}}</p>
            <p>{{userInfomations.mail}}</p>
          <div>

          <div class="wrapperInformation">
            <h3>Adresse</h3>
            <p>{{userInfomations.address}}</p>
            <p>{{userInfomations.city}}</p>
            <p>{{userInfomations.postal_code}}</p>
          </div>

          <div v-if="userInfomations.description" class="wrapperInformation">
            <h3>Description</h3>
            <p>{{userInfomations.description}}</p>
          </div>

        </div>
      </div>
    </template>
  </m-card-post>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'myInformation',
  data() {
    return {

      myInformation: [
        {
          title: 'Contact',
        },
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
  computed: {
    ...mapGetters([
      'userInfomations',
      'accountNumber',
    ]),
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.title {
  // @include title;
  padding: 20px 0px;
}
  ul {
    list-style: none;
    li {
      font-weight: 400;
    }
  }

p {
  margin: 4px 0px;
}

.wrapperInformation {
  padding-top: 10px;
}
</style>
