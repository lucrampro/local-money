<template>
  <div class="wrapperprofilPicture">
    <div class="profilPicture">
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapperprofilPicture {
  margin-right: 10px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: solid 1px #cecece;
  display: flex;
  align-items: center;
  justify-content: center;
  .profilPicture {
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
