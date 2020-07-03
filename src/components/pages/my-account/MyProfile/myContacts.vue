<template>
  <div>
    <l-wrapper-block backgroundColor="$gray-background">
      <div class="wrapperButton">
        <a-button @click.native="$router.push({ name : 'AddModifyContact'})" width="100%" >Ajouter nouveau un contact</a-button>
      </div>
      <m-contact-block contactName="cheik" />
    </l-wrapper-block>
  </div>
</template>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.wrapperButton {
  padding-bottom: 10px;
}
</style>
