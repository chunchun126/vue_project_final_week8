<template>
  <div class="wrapper">
    <loading :active.sync="isLoading"></loading>
    <Navbar/>
    <router-view :products="products" v-if="getSuccesss"/>
    <div class="push"></div>
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
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      getSuccesss: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取所有產品列表
    getProducts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?paged=33`)
        .then((res) => {
          this.getSuccesss = true;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss">
</style>
