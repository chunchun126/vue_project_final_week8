<template>
  <div id="app">
    <Toast />
    <loading :active.sync="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import Toast from '@/components/Toasts.vue';

export default {
  name: 'App',
  components: {
    Toast,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    // 測試安裝 Vue axios
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then(() => {
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
      });
  },
};
</script>

<style lang="scss">
@import '@/assets/all';
</style>
