<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-0 mt-md-4">
      <div class="row">
        <!-- 商品分類 -->
        <div class="col-3 d-none d-lg-block">
          <div class="sticky-top"
            style="top: 105px">
            <div class="list-group list-group-flush">
              <a v-for="(item, index) in category.list" :key="index"
                class="list-group-item list-group-item-action p-2 cursor"
                :class="{'active':categoryIndex === index}"
                @click.prevent="categoryData(item, index)">
                <p v-if="item === '全部產品'" class="p-0 m-0">
                  全部產品<small class="ml-2 text-muted">All
                  </small>
                </p>
                <p v-if="item === 'Earring'" class="p-0 m-0">
                  耳環<small class="ml-2 text-muted">{{ item }}
                  </small>
                </p>
                <p v-if="item === 'Necklace'" class="p-0 m-0">
                  項鍊<small class="ml-2 text-muted">{{ item }}
                  </small>
                </p>
                <p v-if="item === 'Ring'" class="p-0 m-0">
                  戒指<small class="ml-2 text-muted">{{ item }}
                  </small>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div id="options" class="col d-lg-none sticky-top px-3 p bg-main">
          <select class="form-control my-3"
            @change="categoryData($event.target.value)" v-if="category.list">
            <option :value="item" v-for="(item, index) in category.list"
              :key="index">{{ item }}
            </option>
          </select>
        </div>
        <!-- 商品列表 -->
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane active" id="all" role="tabpanel">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 mb-3 mb-md-4"
                    v-for="item in category.data" :key="item.id">
                    <div class="card rounded-0 border-0 text-center">
                      <a href="#" @click.prevent="goPage(item)" class="d-block item-hover">
                        <div class="mask">
                          <div class="caption">查看更多</div>
                        </div>
                        <div class="overflowHidden">
                          <div class="rounded-0 item-img img-fluid"
                            style="height: 250px"
                            :style="`background-image: url(${item.imageUrl})`"></div>
                        </div>
                      </a>
                      <div class="card-body p-2">
                        <h6 class="product-title mb-0">{{ item.title }}
                          <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                            style="font-size: 14px">
                            {{ item.category }}
                          </small>
                        </h6>
                        <p class="card-text text-muted origin-price mb-2 d-none d-md-block">
                          定價 NT${{ item.origin_price | thousands }}
                        </p>
                        <p class="card-text price mb-2">
                          <small class="mr-2">優惠價</small>
                          <span class="h6">NT${{ item.price | thousands }}</span>
                        </p>
                        <a href="#" class="addBtn btn btn-outline-secondary btn-sm rounded-0 w-100"
                          @click.prevent="addToCart(item.id)">
                          <i class="fas fa-shopping-bag mr-1"></i>
                          <small>加入購物袋</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      hexAPI: {
        data: [],
      },
      products: [],
      pagination: {},
      isLoading: false,
      category: {
        list: ['全部產品'],
        data: [],
      },
      categoryIndex: 0,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取所有產品列表
    getProducts() {
      const vm = this;
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?paged=40`)
        .then((res) => {
          vm.hexAPI.data = res.data.data;
          vm.pagination = res.data.meta.pagination;
          vm.category.data = vm.hexAPI.data;
          vm.hexAPI.data.map((item) => vm.category.list.push(item.category));
          vm.category.list = [...(new Set(vm.category.list))];
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    // 到單一產品細節頁面
    goPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    // 加到購物袋
    addToCart(item, quantity = 1) { // 需代入 商品 id 及 商品數量（因為 api 文件上為 required）
      // quantity=1 參數預設值給 1（因為最少會加入 1 個產品，不會加 0 個）
      // 宣告新增某一筆購物袋資料的 api
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      // 還沒取得資料時的讀取效果
      this.isLoading = true;
      const cart = {
        product: item, // id 透過參數的方式代入
        quantity, // quantity: quantity 的簡寫，數量也是透過參數的方式代入
      };
      this.$http.post(url, cart)
        .then(() => {
          this.$bus.$emit('update-total');
          this.$bus.$emit('message:push',
            '成功加到購物袋。',
            'success');
          this.isLoading = false;
        })
        .catch((error) => {
          this.$bus.$emit('message:push',
            error.response.data.errors[0],
            'danger');
          this.isLoading = false;
        });
    },
    categoryData(categoryName, index = 0) {
      const vm = this;
      vm.categoryIndex = index;
      vm.category.data = [];
      if (categoryName === '全部產品') {
        vm.category.data = vm.hexAPI.data;
      } else {
        vm.category.data = vm.hexAPI.data.filter((item) => item.category === categoryName);
      }
    },
  },
};
</script>

<style lang="scss">
.cursor {
  cursor: pointer;
}
.list-group-flush {
  p {
    font-size: 20px;
  }
}
#options {
  z-index: 999;
  top: 55px;
}

</style>
