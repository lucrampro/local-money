<template>
  <ValidationObserver ref="observer">
    <div class="mt-10">
      <ValidationProvider name="siret" rules="required|min:16|max:16" v-slot="{ errors }">
        <m-input
          :errors="errors"
          name="siret"
          type="tel"
          mask="### ### ### ####"
          maxlength="16"
          v-model="siret"
          exemple="362 521 879 00034"
        >siret</m-input>
      </ValidationProvider>
      <ValidationProvider name="description" rules="required|min:10|max:250" v-slot="{errors}">
        <div>
          <m-textarea
            v-model="description"
            maxlength="250"
            :errors="errors"
            name="sendPost"
          >la description de votre entreprise</m-textarea>
        </div>
      </ValidationProvider>
      <div>
        <!-- <p class="provider__description">
          Dans le but de commercer avec d'autres entreprises,
          vous pouvez avoir le statut de fournisseur, afin de gagner en visibilité au près des autres adhérents entreprises.
        </p> -->
      </div>
      <section class="provider__field" >
        <label for>Fournisseur</label>
        <input type="checkbox" value="1" name="provider" v-model="provider" />
      </section>
    </div>
  </ValidationObserver>
</template>
<script>
import FormMixin from '@/mixins/formMixin';

export default {
  name: 'InformationContact',
  data() {
    return {
      siret: '',
      description: '',
      provider: '',
    };
  },
  mixins: [FormMixin],
  watch: {
    provider(provider) {
      this.$emit('updateForm', { provider });
    },
    description(newVal) {
      this.$emit('updateForm', { description: newVal });
    },
    siret(newVal) {
      this.$emit('updateForm', { siret: newVal });
    },
  },
};

</script>

<style lang="scss" scoped>
.provider__description {
  font-size: 18px;
  color: $secondary-color;
  padding: 20px 10px;
}

.provider__field {
  display: flex;
  align-items: center;
  label {
    @include labelInput;
    font-size: 19px;
  }
  input {
    margin-left: 5px;;
  }
}
</style>
