<template>
  <div class="wrapperProfilePicture">
    <div class="profilePicture">
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapperProfilePicture {
  margin-right: 10px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: solid 1px #cecece;
  display: flex;
  align-items: center;
  justify-content: center;
  .profilePicture {
    background-color: #d16228;
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
</style>
