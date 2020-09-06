<template>
  <div class="sticky-top">
    <!-- 右上方小 icon -->
    <div class="bg-main">
      <div class="container">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-heart"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-user"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-shopping-bag"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-area">
      <!-- logo -->
      <h1 id="logo" class="text-center mb-0">
        <a href="#">
          <img src="@/assets/brand.png" alt="Bien-aimé 線上飾品商店" style="width: 168px">
        </a>
      </h1>
      <!-- 主要 Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light p-0 shadow-sm">
        <button class="navbar-toggler border-0 position-absolute"
          type="button" data-toggle="collapse"
          style="top: -60px; "
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mr-5">
              <router-link :to="{ name: '首頁' }"
              class="nav-bottom-hover nav-link">首頁</router-link>
            </li>
            <li class="nav-item mr-5 slidemenu">
              <div>
                <router-link :to="{ name: '最新款式' }"
                  class="nav-bottom-hover nav-link">最新款式
                </router-link>
              </div>
              <ul class="list-unstyled second text-center">
                <li class="mb-2">
                  <a href="#" class="text-primary">臻愛系列</a></li>
                <li class="mb-2">
                  <a href="#" class="text-primary">夏戀系列</a></li>
                <li><a href="#" class="text-primary">典藏系列</a></li>
              </ul>
            </li>
            <!-- <li class="nav-item mr-5">
              <router-link :to="{ name: '優惠專區' }"
              class="nav-bottom-hover nav-link">優惠專區</router-link>
            </li> -->
            <li class="nav-item">
              <router-link :to="{ name: '品牌介紹' }"
              class="nav-bottom-hover nav-link">品牌介紹</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="sass">
.second
  top: 40px
  left: -50%
  width: 200px
  position: absolute
  background: #fff
  padding: 20px
  opacity: 0
  transition: 0.7s
  font-size: 16px
  text-decoration: none
.slidemenu
  &:hover
    .second
      top: 54px
      opacity: 1
</style>
