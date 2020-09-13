<template>
  <div class="bg-main footer">
    <footer class="container">
      <div class="d-flex justify-content-between">
        <ul class="nav">
          <li class="nav-item">
            <router-link :to="`/`"
              class="nav-link footer-text pt-3">
              回到首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/products`"
              class="nav-link footer-text pt-3">
              所有產品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/about`"
              class="nav-link footer-text pt-3">
              關於我們
            </router-link>
          </li>
        </ul>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link footer-icon pb-0 pt-3" href="https://www.facebook.com/hexschool/" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link footer-icon pb-0 pt-3" href="https://github.com/chunchun126" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link footer-icon pb-0 pt-3"
              href="mailto:sherry750711@hotmail.com" target="_blank">
              <i class="fas fa-envelope-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="d-md-flex justify-content-between copyright">
        <p class="mb-0">Bien-aimé Copyright © 2020 Online Shop All rights reserved.</p>
        <p>圖片僅為練習使用，無商業用途。</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>
