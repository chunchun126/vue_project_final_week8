<template>
  <div class="footer bg-main">
    <footer class="container">
      <div class="d-flex justify-content-between">
        <ul class="nav d-none d-md-flex">
          <li class="nav-item">
            <router-link to="/"
              class="nav-link footer-text pt-3">
              回到首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products"
              class="nav-link footer-text pt-3">
              所有產品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about"
              class="nav-link footer-text pt-3">
              關於我們
            </router-link>
          </li>
        </ul>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link footer-icon" href="https://www.facebook.com/hexschool/" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link footer-icon" href="https://github.com/chunchun126" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link footer-icon"
              href="mailto:sherry750711@hotmail.com" target="_blank">
              <i class="fas fa-envelope-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="d-md-flex justify-content-between copyright">
        <p class="mb-2">Bien-aimé Copyright © 2020 Online Shop All rights reserved.</p>
        <p class="d-none d-md-block">圖片僅為練習使用，無商業用途。</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.footer-text {
  color: rgba(black, 0.5);
  font-size: 15px;
  line-height: initial;
  &:hover {
    color: rgba(black, 0.7);
  }
}
.footer-icon {
  color: rgba(black, 0.5);
  font-size: 30px;
  line-height: initial;
  &:hover {
    color: rgba(black, 0.7);
  }
}
.copyright {
  font-size: 14px;
  color: rgba(black, 0.4);
  padding-left: 16px;
}
@media (max-width: 767px) {
  .footer-icon {
    font-size: 44px;
    padding: 10px 16px !important;
  }
}
</style>
