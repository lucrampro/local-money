<template>
  <div class="headerInformation">
    <a-user-picture size="20px">{{ $props.name[0] }}</a-user-picture>
    <div class="welcomeMessage">
      <h1><slot name="mainText"></slot></h1>
      <p><slot name="subText"></slot></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderInformation',
  props: {
    name: {
      type: String,
      default: '?',
    },
  },
};
</script>

<style lang="scss" scoped>
  .headerInformation {
    display: flex;
    align-items: center;
    .wrapperProfilePicture {
      margin-right: 10px;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: solid 1px #CECECE;
      display: flex;
      align-items: center;
      justify-content: center;
      .profilePicture {
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
    .welcomeMessage {
      h1 {
        font-size: 32px;
        .name {
          font-weight: regular;
        }
      }
    }
  }
</style>
