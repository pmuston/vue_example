<template>
  <div class="home">
    <Desserts />
  </div>
</template>

<script>
// @ is an alias to /src
import Desserts from "@/components/Desserts.vue";

export default {
  name: "Home",
  components: {
    Desserts
  },
  mounted() {
    console.log("mounted");
    this.$store.dispatch("desserts/desserts");
  }
};
</script>
