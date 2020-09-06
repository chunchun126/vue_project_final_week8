<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <!-- banner -->
    <header>
      <div class="container">
        <div class="banner"></div>
      </div>
    </header>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-5"
            v-for="item in products" :key="item.id">
            <div class="card rounded-0 border-0 text-center">
              <a href="#" @click.prevent="goPage(item)" class="d-block item-img">
                <div class="mask">
                  <div class="caption">More Detail</div>
                </div>
                <img :src="item.imageUrl"
                  class="card-img-top rounded-0">
              </a>
              <div class="card-body p-2">
                <!-- 愛心checkbox -->
                <div class="fav-group text-primary">
                  <label class="ui-checked-display">
                    <input type="checkbox" class="ui-checkbox">
                    <i class="material-icons ui-show">
                      favorite
                    </i>
                    <i class="material-icons ui-hidden">
                      favorite_border
                    </i>
                  </label>
                </div>
                <!-- <h5 class="card-title mb-2 eng-title h5">{{ item.content }}</h5> -->
                <h6 class="font-weight-light product-title mb-0 mt-2">{{ item.title }}
                  <small class="badge rounded-0 ml-1 mb-2 border border-dark">
                    {{ item.category }}
                  </small>
                </h6>
                <p class="card-text origin-price mb-1">定價 NT${{ item.origin_price | thousands }}</p>
                <p class="card-text price">
                  <small class="mr-2">優惠價</small>
                  <span>NT${{ item.price | thousands }}</span>
                </p>
                <a href="#" class="btn btn-outline-primary btn-sm rounded-0 w-100"
                  @click.prevent="addToCart(item.id)">
                  <i class="fas fa-shopping-bag mr-1"></i>
                  <small>加入購物袋</small>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取所有產品列表
    getProducts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          console.log('取所有產品列表 成功', res);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
        });
    },
    // 到單一產品細節頁面
    goPage(item) {
      console.log(this.$router);
      // 方法 $router.push 切換頁面
      this.$router.push(`/product/${item.id}`);
    },
    // 加到購物車
    addToCart(item, quantity = 1) { // 需代入 商品 id 及 商品數量（因為 api 文件上為 required）
      // quantity=1 參數預設值給 1（因為最少會加入 1 個產品，不會加 0 個）
      // 宣告新增某一筆購物車資料的 api
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      // 還沒取得資料時的讀取效果
      this.isLoading = true;
      const cart = {
        product: item, // id 透過參數的方式代入
        quantity, // quantity: quantity 的簡寫，數量也是透過參數的方式代入
      };
      console.log(cart); // 比對傳回來的值是否和文件一樣
      // AJAX
      this.$http.post(url, cart) // （網址, 要傳送的物件）
        // 成功
        .then((res) => {
          this.isLoading = false; // 移除 loading 效果
          console.log('加到購物車 成功', res);
          alert('成功加到購物車。');
          this.$router.push('/cart');
        })
        // 失敗
        .catch((error) => {
          this.isLoading = false; // 移除 loading 效果
          console.log(error.response); // 回傳錯誤的訊息
          alert(error.response.data.errors[0]);
          this.$router.push('/cart');
        });
    },
  },
};
</script>
