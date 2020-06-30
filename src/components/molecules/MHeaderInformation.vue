<template>
  <div class="header-information">
    <div class="wrapper--profile-photo">
      <div class="profile-photo">
        <p>{{ $props.name[0] }}</p>
      </div>
    </div>
    <div class="welcome-message">
      <h1>Bonjour <span class="name">{{ $props.name }}</span></h1>
      <p>Bienvenue sur votre espace 😁 !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderInformation',
  props: {
    name: {
      type: String,
      default: 'Elisa',
    },
  },
};
</script>

<style lang="scss" scoped>
  .header-information {
    display: flex;
    align-items: center;
    .wrapper--profile-photo {
      margin-right: 10px;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: solid 1px #CECECE;
      display: flex;
      align-items: center;
      justify-content: center;
      .profile-photo {
        background-color: #D16228;
        border-radius: 50%;
        height: 90%;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          color: #fefefe;
          font-size: 40px;
          font-weight: normal;
        }
      }
    }
    .welcome-message {
      h1 {
        font-size: 32px;
        .name {
          font-weight: bold;
        }
      }
    }
  }
</style>
