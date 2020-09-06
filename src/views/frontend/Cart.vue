<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container pt-5">
      <ul class="step list-unstyled d-flex text-center
        justify-content-center pb-5 text-primary">
        <li>
          <p>購物車</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p>填寫訂單</p>
          <div class="step-line"></div>
          <div class="step-sign"></div>
        </li>
        <li>
          <p>確認訂單</p>
          <div class="step-line"></div>
          <div class="step-sign"></div>
        </li>
        <li>
          <p>交易成功</p>
          <div class="step-sign"></div>
        </li>
      </ul>
      <div class="row mb-5">
        <div class="col-md-8 offset-2">
          <div class="content p-3">
            <div class="row">
              <div class="col-md-6">
                <div class="imageArea">
                  <img class="img-fluid"
                    src="https://images.unsplash.com/photo-1598560917682-2577f42feff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                  <a href="" class="delete">✕</a>
                </div>
              </div>
              <div class="col-md-6">
                <h1 class="h5 mt-2">深海藍寶鑽戒</h1>
                <div class="d-flex mb-2">
                  <span class="w-25">數量</span>
                  <div class="input-group input-group-sm w-75">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-secondary rounded-0 align-middle"
                        type="button" id="button-addon1">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <input type="text" class="form-control text-center input-style" placeholder="1"
                      aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary rounded-0"
                        type="button" id="button-addon2">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <span>小計</span>
                  <span class="ml-auto">NT $ 11,200</span>
                </div>
              </div>
              <div class="col-12">
                <hr style="border-top: 1px solid black">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 offset-md-6">
                <div class="form-group d-flex mb-0">
                  <label for="coupon" class="col-sm-6 col-form-label pl-0">優惠碼</label>
                  <input type="text" class="form-control input-style" id="coupon">
                </div>
              </div>
              <div class="col-md-6 offset-md-6 d-flex">
                <span>優惠碼折扣</span>
                <span class="ml-auto"> － NT $ 1000</span>
              </div>
              <div class="col-12 d-flex">
                <div class="ml-auto" style="border-bottom: solid 1px">合計  NT $ 22,400</div>
              </div>
            </div>
          </div>
          <router-link :to="`/orders`"
            class="btn btn-sm btn-primary rounded-0 mt-3 d-block">下一步
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      carts: [], // 陣列建議屬性名稱加上複數 s
      cartTotal: 0,
      status: {
        loadingItem: '', // loadingItem 給預設值，需預先定義，不然會出錯
      },
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    // 加到購物車（post）
    addToCart(id, quantity = 1) { // 需代入 商品 id 及 商品數量（因為 api 文件上為 required）
      // quantity=1 參數預設值給 1（因為最少會加入 1 個產品，不會加 0 個）
      // 宣告新增某一筆購物車資料的 api
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      // 還沒取得資料時的讀取效果
      this.isLoading = true;
      const cart = {
        product: id, // id 透過參數的方式代入
        quantity, // quantity: quantity 的簡寫，數量也是透過參數的方式代入
      };
      // console.log(cart);  // 比對傳回來的值是否和文件一樣
      // AJAX
      this.$http.post(url, cart) // （網址, 要傳送的物件）
        // 成功
        .then((res) => {
          this.isLoading = false; // 移除 loading 效果
          console.log(res);
        })
        // 失敗
        .catch((error) => {
          this.isLoading = false; // 移除 loading 效果
          console.log(error.response); // 回傳錯誤的訊息
        });
    },

    // 取出購物車的內容（get）
    getCart() {
      // 宣告取得購物車列表 api
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      // 還沒取得資料時的讀取效果
      this.isLoading = true;
      // AJAX
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false; // 移除 loading 效果
          console.log('取出購物車的內容 成功', res);
          this.carts = res.data.data;

          // 購物清單的總計會出現無限累加的現象，
          // 最簡單的解決方法為「每次進行累加時，就清空 this.cartTotal = 0」
          this.cartTotal = 0;
          // 執行 updateTotal 累加總金額
          this.updateTotal();
        })
        // 失敗
        .catch((error) => {
          this.isLoading = false; // 移除 loading 效果
          console.log('取出購物車的內容 失敗', error.response); // 回傳錯誤的訊息
        });
    },

    // 總金額加總 拉出來寫成一個方法，這樣不論是增加或刪減才不會出錯
    updateTotal() {
      // 購物車金額加總
      this.carts.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },

    // 更新購物車商品的數量
    updateQuantity(id, quantity) {
      // 宣告更新某一筆購物車資料 api
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      // 還沒取得資料時的讀取效果
      this.isLoading = true;
      const cart = {
        product: id,
        quantity,
      };
      // AJAX
      this.$http.patch(url, cart)
        .then((res) => {
          this.isLoading = false; // 移除讀取效果
          console.log(res);
          // 跑完之後要重新取得購物車資料
          this.getCart();
        })
        // 失敗
        .catch((error) => {
          this.isLoading = false; // 移除 loading 效果
          console.log(error.response); // 回傳錯誤的訊息
        });
    },
  },
};
</script>

<style lang="scss">
.delete {
  display: block;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 28px;
  height: 28px;
  background: #7f7f7f;
  color: #fff;
  border-radius: 50%;
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  padding-top: 2px;
  padding-left: 1px;
  &:hover {
    color: #000;
    text-decoration: none;
  }
}
</style>
