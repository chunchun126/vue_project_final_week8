<template>
  <div class="index">
    <!-- Navbar 元件 -->
    <navbar/>
    <router-view/>
    <!-- footer 元件 -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/frontend/Navbar.vue';
import Footer from '@/components/frontend/Footer.vue';

export default {
  name: 'Index',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
