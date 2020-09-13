<template>
  <div class="index">
    <!-- Navbar 元件 -->
    <navbar/>
    <router-view :products="products" :pagination="pagination" />
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
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取所有產品列表
    getProducts() {
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?paged=33`)
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          console.log('取所有產品列表 成功', res);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
