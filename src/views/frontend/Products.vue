<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-2">
          <!-- List group -->
          <div class="list-group list-group-flush" id="myList" role="tablist">
            <a class="list-group-item list-group-item-action p-2 active"
              data-toggle="list" href="#all" role="tab"
              @click.prevent="getProducts">全部商品
              <small class="ml-1 text-muted">All</small>
            </a>
            <a class="list-group-item list-group-item-action p-2"
              data-toggle="list" href="#Earrings" role="tab"
              @click.prevent="getEarrings">耳環
              <small class="ml-1 text-muted">Ring</small>
            </a>
            <a class="list-group-item list-group-item-action p-2"
              data-toggle="list" href="#Rings" role="tab"
              @click.prevent="getRings">戒指
              <small class="ml-1 text-muted">Earring</small>
            </a>
            <a class="list-group-item list-group-item-action p-2"
              data-toggle="list" href="#Necklaces" role="tab"
              @click.prevent="getNecklaces">項鍊
              <small class="ml-1 text-muted">Necklace</small>
            </a>
          </div>
        </div>
        <div class="col-md-10">
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active" id="all" role="tabpanel">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 mb-md-5 mb-3"
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
                        <h6 class="font-weight-light product-title mb-0 mt-md-2">{{ item.title }}
                          <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                            style="font-size: 10px">
                            {{ item.category }}
                          </small>
                        </h6>
                        <p class="card-text origin-price mb-1 d-none d-md-block">
                          定價 NT${{ item.origin_price | thousands }}
                        </p>
                        <p class="card-text price mb-0 mb-md-2">
                          <small class="mr-2">優惠價</small>
                          <span>NT${{ item.price | thousands }}</span>
                        </p>
                        <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100"
                          @click.prevent="addToCart(item.id)">
                          <i class="fas fa-shopping-bag mr-1"></i>
                          <small>加入購物袋</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <pagination :pages="pagination" @emit-pages="getProducts"/> -->
              </div>
            </div>
            <div class="tab-pane" id="Rings" role="tabpanel">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 mb-md-5 mb-3"
                    v-for="item in allRings" :key="item.id">
                    <div class="card rounded-0 border-0 text-center">
                      <a href="#" @click.prevent="goPage(item)" class="d-block item-img">
                        <div class="mask">
                          <div class="caption">More Detail</div>
                        </div>
                        <img :src="item.imageUrl"
                          class="card-img-top rounded-0">
                      </a>
                      <div class="card-body p-2">
                        <h6 class="font-weight-light product-title mb-0 mt-md-2">{{ item.title }}
                          <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                            style="font-size: 10px">
                            {{ item.category }}
                          </small>
                        </h6>
                        <p class="card-text origin-price mb-1 d-none d-md-block">
                          定價 NT${{ item.origin_price | thousands }}
                        </p>
                        <p class="card-text price mb-0 mb-md-2">
                          <small class="mr-2">優惠價</small>
                          <span>NT${{ item.price | thousands }}</span>
                        </p>
                        <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100"
                          @click.prevent="addToCart(item.id)">
                          <i class="fas fa-shopping-bag mr-1"></i>
                          <small>加入購物袋</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <pagination :pages="pagination" @emit-pages="getRings"/> -->
              </div>
            </div>
            <div class="tab-pane" id="Earrings" role="tabpanel">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 mb-md-5 mb-3"
                    v-for="item in allEarrings" :key="item.id">
                    <div class="card rounded-0 border-0 text-center">
                      <a href="#" @click.prevent="goPage(item)" class="d-block item-img">
                        <div class="mask">
                          <div class="caption">More Detail</div>
                        </div>
                        <img :src="item.imageUrl"
                          class="card-img-top rounded-0">
                      </a>
                      <div class="card-body p-2">
                        <h6 class="font-weight-light product-title mb-0 mt-md-2">{{ item.title }}
                          <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                            style="font-size: 10px">
                            {{ item.category }}
                          </small>
                        </h6>
                        <p class="card-text origin-price mb-1 d-none d-md-block">
                          定價 NT${{ item.origin_price | thousands }}
                        </p>
                        <p class="card-text price mb-0 mb-md-2">
                          <small class="mr-2">優惠價</small>
                          <span>NT${{ item.price | thousands }}</span>
                        </p>
                        <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100"
                          @click.prevent="addToCart(item.id)">
                          <i class="fas fa-shopping-bag mr-1"></i>
                          <small>加入購物袋</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <pagination :pages="pagination" @emit-pages="getRings"/> -->
              </div>
            </div>
            <div class="tab-pane" id="Necklaces" role="tabpanel">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 mb-md-5 mb-3"
                    v-for="item in allNecklaces" :key="item.id">
                    <div class="card rounded-0 border-0 text-center">
                      <a href="#" @click.prevent="goPage(item)" class="d-block item-img">
                        <div class="mask">
                          <div class="caption">More Detail</div>
                        </div>
                        <img :src="item.imageUrl"
                          class="card-img-top rounded-0">
                      </a>
                      <div class="card-body p-2">
                        <h6 class="font-weight-light product-title mb-0 mt-md-2">{{ item.title }}
                          <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                            style="font-size: 10px">
                            {{ item.category }}
                          </small>
                        </h6>
                        <p class="card-text origin-price mb-1 d-none d-md-block">
                          定價 NT${{ item.origin_price | thousands }}
                        </p>
                        <p class="card-text price mb-0 mb-md-2">
                          <small class="mr-2">優惠價</small>
                          <span>NT${{ item.price | thousands }}</span>
                        </p>
                        <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100"
                          @click.prevent="addToCart(item.id)">
                          <i class="fas fa-shopping-bag mr-1"></i>
                          <small>加入購物袋</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <pagination :pages="pagination" @emit-pages="getNecklaces"/> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    // Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      allRings: [],
      allEarrings: [],
      allNecklaces: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取所有產品列表
    getProducts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?paged=40`)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          // this.pagination = res.data.meta.pagination;
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
      this.$http.post(url, cart) // （網址, 要傳送的物件）
        .then((res) => {
          this.isLoading = false; // 移除 loading 效果
          this.$bus.$emit('update-total');
          console.log('加到購物車 成功', res);
          alert('成功加到購物車。');
        })
        .catch((error) => {
          this.isLoading = false; // 移除 loading 效果
          console.log(error.response); // 回傳錯誤的訊息
          alert(error.response.data.errors[0]);
        });
    },

    // 取所有 'Ring'
    getRings() {
      this.products.forEach((product) => {
        if (product.category === 'Ring') {
          this.allRings.push(product);
        }
      });
    },
    // 取所有 'Earring'
    getEarrings() {
      this.products.forEach((product) => {
        if (product.category === 'Earring') {
          this.allEarrings.push(product);
        }
      });
    },
    // 取所有 'Necklace'
    getNecklaces() {
      this.products.forEach((product) => {
        if (product.category === 'Necklace') {
          this.allNecklaces.push(product);
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>
