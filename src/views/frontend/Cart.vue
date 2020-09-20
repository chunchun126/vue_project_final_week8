<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container pt-5">
      <ul class="step list-unstyled d-flex text-center
        justify-content-center pb-5 text-primary">
        <li>
          <p>購物袋</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p class="text-muted">填寫訂單</p>
          <div class="step-line bg-secondary"></div>
          <div class="step-sign" style="border: solid 2px gray"></div>
        </li>
        <li>
          <p class="text-muted">確認訂單</p>
          <div class="step-line bg-secondary"></div>
          <div class="step-sign" style="border: solid 2px gray"></div>
        </li>
        <li>
          <p class="text-muted">交易成功</p>
          <div class="step-sign" style="border: solid 2px gray"></div>
        </li>
      </ul>
      <div v-if="carts.length > 0" class="row mb-5">
        <div class="col-md-8 offset-md-2">
          <div class="text-left">
            <button type="button" class="btn btn-sm btn-secondary
              rounded-0 border-bottom-0"
              style="font-size: 8px"
              @click="deleteAllCart">全部刪除
            </button>
          </div>
          <div class="content p-3">
            <div class="row" v-for="item in carts" :key="item.id">
              <div class="col-md-7">
                <div class="imageArea">
                  <router-link :to="`product/${item.product.id}`">
                    <div class="overflowHidden">
                      <div class="rounded-0 item-img img-fluid"
                        style="height: 300px"
                        :style="`background-image: url(${item.product.imageUrl[0]})`"></div>
                    </div>
                  </router-link>
                  <a href="#" class="delete"
                    @click.prevent="deleteOneCart(item)">✕</a>
                </div>
              </div>
              <div class="col-md-5 d-flex flex-column justify-content-between">
                <div class="h5 mt-2 pb-1"
                  style="border-bottom: 1px solid">{{ item.product.title }}
                  <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                    style="font-size: 10px">
                    {{ item.product.category }}
                  </small>
                </div>
                <div class="text-white">
                  <small class="text-white badge rounded-0 ml-1 mb-2 bg-primary border-0"
                    style="font-size: 10px">
                    優惠商品。
                  </small>
                </div>
                <div class="addNumber">
                  <div class="d-flex mb-2 align-items-center">
                    <span class="w-25">數量</span>
                    <div class="input-group input-group-sm w-75">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary rounded-0"
                          type="button"
                          :disabled="item.quantity <= 1"
                          @click="updateQuantity(item.product.id, item.quantity - 1)">
                          <i class="fas fa-minus align-middle"></i>
                        </button>
                      </div>
                      <input type="number"
                        class="form-control text-center bg-white"
                        min="1"
                        v-model="item.quantity"
                        @change="updateQuantity(item.product.id, item.quantity)" disabled>
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary rounded-0"
                          type="button"
                          @click="updateQuantity(item.product.id, item.quantity + 1)">
                          <i class="fas fa-plus align-middle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <span>價格</span>
                    <span class="ml-auto">
                      NT $ {{ item.product.price+'/'+item.product.unit | thousands }}
                    </span>
                  </div>
              </div>
              </div>
              <div class="col-12">
                <hr style="border-top: 1px solid black">
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 offset-md-7">
                <div class="form-group">
                  <div class="input-group">
                    <input type="text"
                      v-model="couponCode"
                      class="form-control input-style" id="coupon"
                      placeholder="請輸入優惠碼">
                    <div class="input-group-append">
                      <button class="btn btn-primary input-style"
                        type="button"
                        @click="addCoupon">
                        套用優惠碼
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 offset-md-7 d-flex text-primary"
                v-if="coupon.enabled">
                <span>優惠碼折扣</span>
                <span class="ml-auto"> － NT $ {{ coupon.percent }}</span>
              </div>
              <div class="col-md-5 offset-md-7 d-flex mt-3">
                <span class="pt-1">合計</span>
                <div class="ml-auto px-2 pt-1"
                  v-if="coupon.enabled"
                  style="border: solid 1px;font-size: 22px">
                  NT $ {{ cartTotal - coupon.percent | thousands }}
                </div>
                <div class="ml-auto px-2 pt-1"
                  v-else
                  style="border: solid 1px;font-size: 22px">
                  NT $ {{ cartTotal | thousands }}
                </div>
              </div>
            </div>
          </div>
          <router-link :to="`/orders`"
            class="btn btn-sm btn-primary rounded-0 mt-3 d-block btn-next">下一步
          </router-link>
        </div>
      </div>
      <div v-else class="py-5">
        <div class="text-center my-5">
          <h6 class="mb-3">購物袋中目前沒有產品。</h6>
          <router-link to="/products"
            class="btn btn-primary">
            選購去
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      isLoading: false,
      carts: [], // 陣列建議屬性名稱加上複數 s
      cartTotal: 0,
      status: {
        loadingItem: '', // loadingItem 給預設值，需預先定義，不然會出錯
      },
      couponCode: '',
      coupon: {},
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    // 加到購物車（post）
    addToCart(id, quantity = 1) { // 需代入 商品 id 及 商品數量（因為 api 文件上為 required）
      // quantity=1 參數預設值給 1（因為最少會加入 1 個產品，不會加 0 個）
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      const cart = {
        product: id, // id 透過參數的方式代入
        quantity, // quantity: quantity 的簡寫，數量也是透過參數的方式代入
      };
      this.$http.post(url, cart) // （網址, 要傳送的物件）
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },

    // 取出購物車的內容（get）
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.carts = res.data.data;

          // 購物清單的總計會出現無限累加的現象，
          // 最簡單的解決方法為「每次進行累加時，就清空 this.cartTotal = 0」
          this.cartTotal = 0;
          // 執行 updateTotal 累加總金額
          this.updateTotal();
        })
        .catch(() => {
          this.isLoading = false;
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
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.patch(url, cart)
        .then(() => {
          this.isLoading = false;
          // 跑完之後要重新取得購物車資料
          this.getCart();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },

    // 清空購物車
    deleteAllCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.$bus.$emit('update-total');
          this.getCart();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },

    // 刪除單一筆購物車品項
    deleteOneCart(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${item.product.id}`;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.$bus.$emit('update-total');
          this.getCart();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },

    // 搜尋優惠券
    addCoupon() {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.isLoading = true;
      this.$http.post(url, { code: this.couponCode })
        .then((res) => {
          this.isLoading = false;
          this.coupon = res.data.data;
        })
        .catch(() => {
          this.isLoading = false;
          alert('此優惠碼無效');
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
