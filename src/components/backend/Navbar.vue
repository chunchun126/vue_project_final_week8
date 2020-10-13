<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">後台管理系統</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            class="nav-item nav-link"
            :to="{ name: '產品' }">產品列表</router-link>
          <router-link
            class="nav-item nav-link"
            :to="{ name: '訂單' }">訂單列表</router-link>
          <router-link
            class="nav-item nav-link"
            :to="{ name: '優惠券' }">優惠券列表</router-link>
          <router-link
            class="nav-item nav-link"
            :to="{ name: '圖片儲存' }">圖片儲存列表</router-link>
          <router-link
            class="nav-item nav-link"
            to="/">回前台</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>

</style>
