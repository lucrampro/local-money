<template>
  <l-wrapper-block backgroundColor="$gray-background">
    <a-button>Modifier mes informations</a-button>
    <div class="contactInformation">
      <ul>
        <li>Toto</li>
        <li>0652320475</li>
        <li>toto@toto.com</li>
      </ul>
    </div>
  </l-wrapper-block>
</template>

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
