<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-7">
          <img :src="selectPic" class="img-fluid">
          <div class="row mt-3">
            <img v-for="(img, key) in tempProduct.imageUrl"
              :key="tempProduct.id + key" :src="img"
              @click="selectPic = img"
              class="img-fluid view-change">
          </div>
        </div>
        <div class="col-md-4 offset-md-1">
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
          <h5 class="font-weight-light mb-0 mt-2">{{ tempProduct.title }}
            <small class="badge rounded-0 ml-1 mb-2 border border-dark bg-main">
              {{ tempProduct.category }}
            </small>
          </h5>
          <hr class="mt-0" style="border-top: 1px solid rgba(0, 0, 0, 0.5);">
          <p class="card-text origin-price mb-3">
            定價 NT${{ tempProduct.origin_price | thousands }}
          </p>
          <h5 class="card-text mb-3 text-primary">
            <small class="mr-2">優惠價</small>
            <span>NT${{ tempProduct.price | thousands }}</span>
          </h5>
          <button type="button" class="btn btn-primary btn-sm rounded-0 w-100"
            @click="addToCart(tempProduct.id, tempProduct.num)">
            <i class="fas fa-shopping-bag mr-1"></i>
            <small>加入購物袋</small>
          </button>
          <div class="detail mt-4">
            <div class="mb-2">
              <i class="fas fa-gem" style="width: 30px"></i>
              <span class="mb-1">材料：{{ tempProduct.options.material }}</span>
            </div>
            <div>
              <i class="fas fa-ruler" style="width: 30px"></i>
              <span class="mb-1">尺寸：{{ tempProduct.options.size }}</span>
            </div>
            <hr class="" style="border-top: 1px solid rgba(0, 0, 0, 0.5);">
            <div class="mb-3">
              <i class="fas fa-stream" style="width: 30px"></i>
              <span>產品描述：</span>
            </div>
            <p>{{ tempProduct.description }}</p>
          </div>
        </div>
      </div>
      <!-- 相關產品 -->
      <section class="section section-hot">
        <div id="carouselExampleInterval" class="carousel slide text-center pt-4"
          data-ride="carousel">
          <div class="text-muted">
            <h4>相關項目</h4>
            <p class="section-subtitle font-weight-lighter mb-1">查看了此商品的顧客還查看了</p>
            <hr class="mt-0" style="border-top: 1px solid rgba(0, 0, 0, 0.5);width: 250px">
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <div class="d-flex p-3">
                <div class="card mr-4 rounded-0 border-0" style="width: 18rem;">
                  <a href="#" @click.prevent="goPage(item)" class="d-block item-img">
                    <div class="mask">
                      <div class="caption">More Detail</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1589674536249-62d7ea50d6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                      class="card-img-top rounded-0">
                  </a>
                  <div class="card-body p-2 mt-2">
                    <h6 class="font-weight-light">深海藍寶鑽戒
                      <small class="badge rounded-0 ml-1 mb-2">白K金</small>
                      <p class="card-text origin-price">定價 NT $ 13,200</p>
                      <p class="card-text price">優惠價 NT $ 11,200</p>
                    </h6>
                    <a href="#" class="btn btn-outline-primary btn-sm rounded-0 w-100">
                      <i class="fas fa-shopping-bag mr-1"></i>
                      <small>加入購物袋</small>
                    </a>
                  </div>
                </div>
                <div class="card mr-4 rounded-0 border-0" style="width: 18rem;">
                  <a href="#" @click.prevent="goPage(item)" class="d-block item-img">
                    <div class="mask">
                      <div class="caption">More Detail</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1589674505081-080bfb716e6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="card-img-top rounded-0">
                  </a>
                  <div class="card-body p-2 mt-2">
                    <h6 class="font-weight-light">深海藍寶鑽戒
                      <small class="badge rounded-0 ml-1 mb-2">白K金</small>
                      <p class="card-text origin-price">定價 NT $ 13,200</p>
                      <p class="card-text price">優惠價 NT $ 11,200</p>
                    </h6>
                    <a href="#" class="btn btn-outline-primary btn-sm rounded-0 w-100">
                      <i class="fas fa-shopping-bag mr-1"></i>
                      <small>加入購物袋</small>
                    </a>
                  </div>
                </div>
                <div class="card mr-4 rounded-0 border-0" style="width: 18rem;">
                  <a href="#" @click.prevent="goPage(item)" class="d-block item-img">
                    <div class="mask">
                      <div class="caption">More Detail</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1595370239057-4f721a8bb505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="card-img-top rounded-0">
                  </a>
                  <div class="card-body p-2 mt-2">
                    <h6 class="font-weight-light">深海藍寶鑽戒
                      <small class="badge rounded-0 ml-1 mb-2">白K金</small>
                      <p class="card-text origin-price">定價 NT $ 13,200</p>
                      <p class="card-text price">優惠價 NT $ 11,200</p>
                    </h6>
                    <a href="#" class="btn btn-outline-primary btn-sm rounded-0 w-100">
                      <i class="fas fa-shopping-bag mr-1"></i>
                      <small>加入購物袋</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <div class="d-flex p-3">
                <div class="card mr-4 rounded-0 border-0" style="width: 18rem;">
                  <img src="https://images.unsplash.com/photo-1589674536249-62d7ea50d6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    class="card-img-top rounded-0">
                  <div class="card-body p-2">
                    <h5 class="card-title">BLUE RING</h5>
                    <h6 class="font-weight-light">深海藍寶鑽戒
                      <small class="badge rounded-0 ml-1 mb-2">白K金</small>
                    </h6>
                    <p class="card-text origin-price">定價 NT $ 13,200</p>
                    <p class="card-text price">優惠價 NT $ 11,200</p>
                    <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100">加入購物車</a>
                  </div>
                </div>
                <div class="card mr-4 rounded-0 border-0" style="width: 18rem;">
                  <img src="https://images.unsplash.com/photo-1589674536249-62d7ea50d6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    class="card-img-top rounded-0">
                  <div class="card-body p-2">
                    <h5 class="card-title">BLUE RING</h5>
                    <h6 class="font-weight-light">深海藍寶鑽戒
                      <small class="badge rounded-0 ml-1 mb-2">白K金</small>
                    </h6>
                    <p class="card-text origin-price">定價 NT $ 13,200</p>
                    <p class="card-text price">優惠價 NT $ 11,200</p>
                    <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100">加入購物車</a>
                  </div>
                </div>
                <div class="card rounded-0 border-0" style="width: 18rem;">
                  <img src="https://images.unsplash.com/photo-1589674536249-62d7ea50d6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    class="card-img-top rounded-0">
                  <div class="card-body p-2">
                    <h5 class="card-title">BLUE RING</h5>
                    <h6 class="font-weight-light">深海藍寶鑽戒
                      <small class="badge rounded-0 ml-1 mb-2">白K金</small>
                    </h6>
                    <p class="card-text origin-price">定價 NT $ 13,200</p>
                    <p class="card-text price">優惠價 NT $ 11,200</p>
                    <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100">加入購物車</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleInterval"
            role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleInterval"
            role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存取單一筆資料
      tempProduct: {},
      selectPic: '',
      status: {
        loadingItem: '', // loadingItem 給預設值，需預先定義，不然會出錯
      },
      isLoading: false,
      carts: [],
    };
  },
  created() {
    this.getDetailed();
  },
  methods: {
    // 取單一產品詳細資訊
    getDetailed() {
      // this.$router 呼叫方法
      const { id } = this.$route.params; // 需使用解構
      // 點擊時將 id 帶入 loadingItem
      this.status.loadingItem = id;
      // 宣告取得單一產品的 api
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      // AJAX
      this.$http.get(url).then((res) => {
        // 將回傳資料放暫存區（因為會做數量的增減）
        // this.tempProduct = res.data.data;
        // 直接預設 num = 1
        // this.tempProduct.num = 1;
        // 以上兩行的進階寫法
        this.tempProduct = {
          ...res.data.data,
          num: 1,
        };
        this.selectPic = res.data.data.imageUrl;
        console.log('取單一產品 成功', res.data.data);
        // 取得詳細資訊後 將 loadingItem 清空（loading 效果即消失）
        this.status.loadingItem = '';
      })
        .catch((error) => {
          console.log('取單一產品 失敗', error);
        });
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

<style lang="scss">
.view-change {
  width: 30%;
  cursor: pointer;
  margin-left: 2.5%;
}
</style>
