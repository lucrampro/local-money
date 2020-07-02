<template>
  <div>
    Laisser de mes nouvelles
    <l-transaction-form>
      <m-textarea>Votre message</m-textarea>
      <template v-slot:bottom>
        <a-button width="100%">Poster ce message</a-button>
      </template>
    </l-transaction-form>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .MInput {
  textarea {
    height: 278px;
  }
}
</style>
