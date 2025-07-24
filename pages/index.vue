<template>
  <div>
    <home1Dark/>
  </div>
</template>

<script>
import home1Dark from './homepage/home1-dark.vue';
export default {
  name: "xenovo",
  layout: "dark",
  head() {
    return {
      titleTemplate: "Xenovo",
    };
  },
  components:{
    home1Dark
  }

};
</script>

<style scoped></style>