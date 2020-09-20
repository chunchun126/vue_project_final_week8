<template>
  <div class="sticky-top">
    <div class="nav-top bg-main py-1 mb-md-4">
      <div class="container d-flex justify-content-md-between
        justify-content-end align-items-center">
        <!-- logo -->
        <h1 class="logo">
          <router-link :to="{ name: '首頁' }">
            <img src="@/assets/brand.png" alt="Bien-aimé 線上飾品商店"
              class="logoWidth_L">
          </router-link>
        </h1>
        <div class="flex-grow-1 ml-4 d-none d-md-block">
          <nav class="navbar navbar-expand-lg navbar-light p-0">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link
                    :to="{ name: '所有產品' }"
                    class="nav-bottom-hover nav-link px-3">所有產品
                  </router-link>
                  <hr class="nav-line">
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: '品牌介紹' }"
                  class="nav-bottom-hover nav-link px-3">品牌介紹</router-link>
                  <hr class="nav-line">
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <!-- 右上方小 icon -->
        <ul class="nav">
          <li class="nav-item">
            <router-link :to="{ name: '首頁' }" class="nav-link d-none d-md-block">
              <i class="fas fa-home"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/login`" class="nav-link">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/cart`" class="nav-link">
              <i class="fas fa-shopping-bag"></i>
              <span class="badge badge-danger text-white badge-pill border-0 position-absolute"
                style="transform: translateX(-10px) translateY(13px);font-size: 8px"
                v-show="cartTotal >= 1">
                  {{ cartTotal }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <nav id="nav"
      class="navbar navbar-expand-lg navbar-light d-block d-md-none"
        style="top: -70px">
      <button class="navbar-toggler border-0 px-0 mb-2" type="button"
        data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav-area collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :to="{ name: '所有產品' }"
              class="nav-bottom-hover nav-link px-3">所有產品
            </router-link>
            <hr class="nav-line">
          </li>
          <li class="nav-item">
            <router-link :to="{ name: '品牌介紹' }"
            class="nav-bottom-hover nav-link px-3">品牌介紹</router-link>
            <hr class="nav-line">
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Navbar',
  data() {
    return {
      cartTotal: 0,
    };
  },
  created() {
    this.getCart();
    // 同步更新購物車數量
    this.$bus.$on('update-total', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url)
        .then((res) => {
          this.cartTotal = res.data.data.length;
        });
    },
  },
};

// 導覽列往下滑變小
$(window).scroll(() => {
  if ($(window).scrollTop() <= 0) {
    $('.nav-top').addClass('py-1');
    $('.logo img').addClass('logoWidth_L');
    $('.logo img').removeClass('logoWidth_S');
    $('#nav').get(0).style.top = '-70px';
  } else {
    $('.nav-top').removeClass('py-1');
    $('.logo img').removeClass('logoWidth_L');
    $('.logo img').addClass('logoWidth_S');
    $('#nav').get(0).style.top = '-65px';
  }
});

</script>

<style lang="scss">
// * {
//   border: solid 1px;
// }
h1 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// .logo {
//   position: absolute;
//   top: 0px;
//   left: 50%;
//   transform: translateX(-50%);
// }
@media (max-width: 767px) {
  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.logoWidth_L {
  width: 180px;
}
.logoWidth_S {
  width: 130px;
}
.nav-top, .logo img {
  transition: 0.5s;
}
.nav-item:hover {
  .nav-line {
    width: 100%;
  }
  .nav-top {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.nav-line {
  position: absolute;
  margin-top: 0;
  margin-bottom: 0;
  border-top: 3px solid #49110a;
  width: 0%;
  transition: ease 0.5s;
}
.nav-area {
  background-color: rgba(#fff, 0.9);
}

</style>
