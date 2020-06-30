<template>
 <img :src="img" alt="">
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    img: {},
  },
};
</script>
