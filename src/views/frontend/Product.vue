<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-7">
          <img :src="selectPic" class="img-fluid">
          <div class="row my-3">
            <img v-for="(img, key) in tempProduct.imageUrl"
              :key="tempProduct.id + key" :src="img"
              @click="selectPic = img"
              class="img-fluid view-change">
          </div>
        </div>
        <div class="col-md-4 offset-md-1">
          <h5 class="font-weight-light mb-0 mt-2">{{ tempProduct.title }}
            <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                    style="font-size: 10px">
              {{ tempProduct.category }}
            </small>
          </h5>
          <hr class="mt-0" style="border-top: 1px solid rgba(0, 0, 0, 0.5);">
          <p class="card-text origin-price mb-3 text-muted"
            v-if="tempProduct.origin_price">
            定價 NT${{ tempProduct.origin_price | thousands }}
          </p>
          <h5 class="card-text mb-3 text-primary">
            <small class="mr-2">優惠價</small>
            <span v-if="tempProduct.price">NT${{ tempProduct.price | thousands }}</span>
          </h5>
          <button type="button" class="btn btn-primary btn-sm rounded-0 w-100"
            @click="addToCart(tempProduct.id, tempProduct.num)">
            <i class="fas fa-shopping-bag mr-1"></i>
            <small>加入購物袋</small>
          </button>
          <div class="detail mt-4" v-if="tempProduct.options">
            <div class="mb-2">
              <i class="fas fa-gem" style="width: 30px"></i>
              <span class="mb-1">材料：</span>
              <br>
              <span style="margin-left: 30px">{{ tempProduct.options.material }}</span>
            </div>
            <div>
              <i class="fas fa-ruler" style="width: 30px"></i>
              <span class="mb-1">尺寸：</span>
              <br>
              <span style="margin-left: 30px">{{ tempProduct.options.size }}</span>
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
          <div class="text-primary">
            <h5>相關項目</h5>
            <p class="section-subtitle font-weight-lighter mb-0">查看了此商品的顧客還查看了</p>
          </div>
          <div class="row p-3">
            <div class="card col-md-4 rounded-0 border-0"
              v-for="item in relatedProducts" :key="item.id">
              <a href="#" @click.prevent="goPage(item)" class="d-block item-hover">
                <div class="mask">
                  <div class="caption">查看更多</div>
                </div>
                <div class="overflowHidden">
                  <div class="card-img-top rounded-0 item-img img-fluid"
                    style="height: 300px"
                    :style="`background-image: url(${item.imageUrl[0]})`"></div>
                </div>
              </a>
              <div class="card-body p-2">
                <h6 class="font-weight-light product-title mb-0">{{ item.title }}
                  <small class="badge rounded-0 ml-1 mb-2 bg-main border-0"
                    style="font-size: 10px">
                    {{ item.category }}
                  </small>
                </h6>
                <p class="card-text origin-price mb-1 text-muted"
                  v-if="item.origin_price">
                  定價 NT${{ item.origin_price | thousands }}
                </p>
                <p class="card-text price mb-1">
                  <small class="mr-2">優惠價</small>
                  <span v-if="item.price">NT${{ item.price | thousands }}</span>
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
      </section>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      tempProduct: {},
      relatedProducts: [],
      selectPic: '',
      isLoading: false,
      carts: [],
    };
  },
  props: ['products'],
  created() {
    this.getDetailed();
  },
  methods: {
    // 取單一產品詳細資訊
    getDetailed() {
      this.isLoading = true;
      this.relatedProducts = [];
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(url).then((res) => {
        this.tempProduct = {
          ...res.data.data,
          num: 1,
        };
        this.selectPic = res.data.data.imageUrl;
        this.products.forEach((product) => {
          if (product.category === this.tempProduct.category
            && product.id !== this.tempProduct.id) {
            this.relatedProducts.push(product);
          }
        });
        // 只取三個相關產品
        if (this.relatedProducts.length > 3) {
          this.relatedProducts.splice(3);
        }
        this.isLoading = false;
      })
        .catch(() => {
          this.isLoading = false;
        });
    },
    // 加到購物袋
    addToCart(item, quantity = 1) { // 需代入 商品 id 及 商品數量（因為 api 文件上為 required）
      // quantity=1 參數預設值給 1（因為最少會加入 1 個產品，不會加 0 個）
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      const cart = {
        product: item, // id 透過參數的方式代入
        quantity, // quantity: quantity 的簡寫，數量也是透過參數的方式代入
      };
      this.$http.post(url, cart)
        .then(() => {
          this.$bus.$emit('message:push',
            '成功加到購物袋。',
            'success');
          this.getDetailed();
          this.$bus.$emit('update-total');
          this.isLoading = false;
        })
        .catch((error) => {
          this.$bus.$emit('message:push',
            error.response.data.errors[0],
            'danger');
          this.isLoading = false;
        });
    },
    // 到單一產品細節頁面
    goPage(item) {
      this.$router.push(`/product/${item.id}`);
      this.getDetailed();
    },
  },
};
</script>

<style lang="css">
.view-change {
  width: 30%;
  cursor: pointer;
  margin-left: 2.5%;
}
</style>
