<template>
  <div class="sticky-top">
    <!-- 右上方小 icon -->
    <div class="nav-top py-3 bg-main">
      <div class="container">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-heart"></i></a>
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
        <!-- logo -->
        <h1 class="logo text-center mb-0">
          <router-link :to="{ name: '首頁' }">
            <img src="@/assets/brand.png" alt="Bien-aimé 線上飾品商店"
              class="logoWidth_L">
          </router-link>
        </h1>
      </div>
    </div>
    <div class="nav-area">
      <!-- 主要 Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light p-0 mb-3">
        <button class="navbar-toggler border-0 position-absolute"
          type="button" data-toggle="collapse"
          style="-80px"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link :to="{ name: '首頁' }"
              class="nav-bottom-hover nav-link px-4">首頁</router-link>
              <hr class="nav-line">
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: '所有產品' }"
                class="nav-bottom-hover nav-link px-4">所有產品
              </router-link>
              <hr class="nav-line">
            </li>
            <li class="nav-item">
              <router-link :to="{ name: '品牌介紹' }"
              class="nav-bottom-hover nav-link px-4">品牌介紹</router-link>
              <hr class="nav-line">
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
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
          console.log('取出購物車的內容 成功', res);
          this.cartTotal = res.data.data.length;
        })
        // 失敗
        .catch((error) => {
          console.log('取出購物車的內容 失敗', error.response);
        });
    },
  },
};

// 導覽列往下滑變小
$(window).scroll(() => {
  if ($(window).scrollTop() <= 0) {
    $('.nav-top').addClass('py-3');
    $('.logo img').addClass('logoWidth_L');
    $('.logo img').removeClass('logoWidth_S');
    $('.navbar-toggler').get(0).style.top = '-70px';
  } else {
    $('.nav-top').removeClass('py-3');
    $('.logo img').removeClass('logoWidth_L');
    $('.logo img').addClass('logoWidth_S');
    $('.navbar-toggler').get(0).style.top = '-50px';
  }
});

</script>

<style lang="scss">
.logo {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 767px) {
  .logo {
    position: absolute;
    top: -10px;
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
  margin-top: 0;
  margin-bottom: 0;
  border-top: 3px solid #49110a;
  width: 0%;
  transition: ease 0.5s;
}

</style>
