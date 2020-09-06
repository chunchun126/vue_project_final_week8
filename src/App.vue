<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
      .then((res) => {
        this.isLoading = false;
        console.log(res);
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error.response);
      });
  },
};
</script>

<style lang="scss">
@import '@/assets/all';

</style>
