<template>
  <div id="wrapper">
    <Header />
      <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
@import "~/assets/css/reset.css";
  @import "~/assets/css/style.css";
</style>
