<template>
  <div class="sticky-top">
    <div class="nav-bg">
      <div class="container">
        <nav id="navbar"
          class="navbar navbar-expand-lg navbar-light py-0 py-md-2">
          <!-- logo -->
          <div class="logo">
            <router-link :to="{ name: '首頁' }"
              class="navbar-brand font-weight-bold text-primary logo-text">
              Bien-aimé
            </router-link>
          </div>
          <button class="navbar-toggler btn btn-sm border-0" type="button"
          data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item" @click="toggler">
                <router-link
                  :to="{ name: '所有產品' }"
                  class="nav-bottom-hover nav-link px-md-3">所有產品
                </router-link>
                <hr class="nav-line">
              </li>
              <li class="nav-item" @click="toggler">
                <router-link :to="{ name: '品牌介紹' }"
                class="nav-bottom-hover nav-link px-md-3">品牌介紹</router-link>
                <hr class="nav-line">
              </li>
            </ul>
            <!-- 右上方小 icon -->
            <ul class="nav form-inline my-2 my-lg-0">
              <li class="nav-item"
                @click="toggler">
                <router-link :to="{ name: '首頁' }" class="nav-link pl-0 pl-md-2">
                  <i class="fas fa-home"></i>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">
                  <i class="fas fa-user"></i>
                </router-link>
              </li>
              <li class="nav-item" @click="toggler">
                <router-link to="/cart" class="nav-link">
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
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */

// 導覽列往下滑
$(window).scroll(() => {
  if ($(window).scrollTop() > 0) {
    $('.nav-bg').addClass('bg-main');
  } else if ($(window).scrollTop() <= 0) {
    $('.nav-bg').removeClass('bg-main');
  }
});

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
  beforeDestroy() {
    // 清除監聽事件
    // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on的設定)
    this.$bus.$off('update-total');
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url)
        .then((res) => {
          this.cartTotal = res.data.data.length;
        })
        .catch((error) => {
          this.$bus.$emit('message:push',
            error.response.data.errors[0],
            'danger');
        });
    },
    toggler() {
      $('.navbar-toggler').trigger('click');
    },
  },
};
</script>

<style lang="scss">
.nav-bg {
  transition: 0.5s;
}
.logo-text {
  font-size: 30px;
  font-family: 'Noto Serif', serif;
}
.nav-link {
  font-weight: 400;
}
@media (max-width: 767px) {
  .logo-text {
    font-size: 26px;
  }
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
