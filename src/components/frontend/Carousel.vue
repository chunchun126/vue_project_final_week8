<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="section section-hot">
      <div id="carouselExampleInterval" class="carousel slide text-center" data-ride="carousel">
        <div class="text-primary mt-4">
          <h4 class="hot-title mb-2">熱銷排行榜</h4>
          <p class="section-subtitle mb-0">暢銷款︱首購優選︱特價優惠</p>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="3000">
            <div class="row px-md-5 px-4 py-3">
              <div class="card col-md-4 rounded-0 border-0"
                v-for="item in hotSales1" :key="item.id">
                <span class="rankbadge badge badge-danger text-white">HOT</span>
                <router-link
                  :to="`/product/${item.id}`"
                  class="d-block item-img">
                  <div class="mask">
                    <div class="caption">More Detail</div>
                  </div>
                  <img :src="item.imageUrl" alt="熱賣商品圖片"
                    class="card-img-top rounded-0">
                </router-link>
                <div class="card-body p-2">
                  <h6 class="product-title mb-0">{{ item.title }}
                    <small class="badge rounded-0 ml-1 mb-2 bg-main border-0">
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
                  <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100"
                    @click.prevent="addToCart(item.id)">
                    <i class="fas fa-shopping-bag mr-1"></i>
                    <small>加入購物袋</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-interval="2000">
            <div class="row px-md-5 px-4 py-3">
              <div class="card col-md-4 rounded-0 border-0"
                v-for="item in hotSales2" :key="item.id">
                <span class="rankbadge badge badge-danger text-white">SALE</span>
                <router-link
                  :to="`/product/${item.id}`"
                  class="d-block item-img">
                  <div class="mask">
                    <div class="caption">More Detail</div>
                  </div>
                  <img :src="item.imageUrl" alt="熱賣商品圖片"
                    class="card-img-top rounded-0">
                </router-link>
                <div class="card-body p-2">
                  <h6 class="product-title mb-0">{{ item.title }}
                    <small class="badge rounded-0 ml-1 mb-2 bg-main border-0">
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
                  <a href="#" class="btn btn-outline-secondary btn-sm rounded-0 w-100"
                    @click.prevent="addToCart(item.id)">
                    <i class="fas fa-shopping-bag mr-1"></i>
                    <small>加入購物袋</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval"
          role="button" data-slide="prev">
          <span class="text-dark h4 mb-0">〈</span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval"
          role="button" data-slide="next">
          <span class="text-dark h4 mb-0">〉</span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      isLoading: false,
      hotSales1: [
        {
          id: 'nIn4LicrcYXlffbpWKcaMxNExMh8B6vq6bdj6AGHpwupGWwnxBseWgpCYHp6uIT9',
          title: '簡愛項鍊',
          category: 'Necklace',
          imageUrl: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          origin_price: 6000,
          price: 5000,
        },
        {
          id: 'yrdRk3MdVf1t7fLpU2npCDiAl4LIIkGnGAy7rmLBgp5wfhsmrhdvxCA6wePBKmiu',
          title: '深海藍寶鑽戒',
          category: 'Ring',
          imageUrl: 'https://images.unsplash.com/photo-1589674536249-62d7ea50d6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80,https://images.unsplash.com/photo-1586104180458-e42615276cda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80,https://images.unsplash.com/photo-1589674552723-19e476b514e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          origin_price: 4000,
          price: 3000,
        },
        {
          id: 'PEyUsOhVAf0d0NCqMW5OjtxjVAYZXW5bdNryAvBLRKvgW3gNO3dwO7XDgJIuk6KJ',
          title: '經典方形鑽戒',
          category: 'Ring',
          imageUrl: 'https://images.unsplash.com/photo-1586104195538-050b9f74f58e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          origin_price: 3000,
          price: 2000,
        },
      ],
      hotSales2: [
        {
          id: 'ex7DaebwGtjt4jguEb7MJE9zRwQwLITvfQZLbCazRXkiAwUK1tKYP0xfi3LMrHAO',
          title: '24K花冠戒指',
          category: 'Ring',
          imageUrl: 'https://images.unsplash.com/photo-1588444757697-5c26c2576d56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80,https://images.unsplash.com/photo-1588444757641-848a1ea4fa61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          origin_price: 6000,
          price: 5000,
        },
        {
          id: 't7w4J2pPKgNtsZEDoGRXdqRyQIvWdakFRXn2IxEbWLZIWECwqrEDEd9qoLggcM7m',
          title: '無限永恆戒指',
          category: 'Ring',
          imageUrl: 'https://images.unsplash.com/photo-1589674505081-080bfb716e6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          origin_price: 4000,
          price: 3000,
        },
        {
          id: 'iFwZBbc3I1dZfZ2sJ3romPWac7Jo0BYAh4QPKtgKntKuK3dvPp9dH4VwXs4Tx7Vc',
          title: '藍寶石方形鑽戒',
          category: 'Ring',
          imageUrl: 'https://images.unsplash.com/photo-1586104237516-5b7075e00d45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          origin_price: 3000,
          price: 2000,
        },
      ],
    };
  },
  methods: {
    // 加到購物車
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
          window.location.reload();
          this.isLoading = false;
        })
        .catch((error) => {
          this.$bus.$emit('message:push',
            error.response.data.errors[0],
            'danger');
          this.isLoading = false;
        });
    },
  },
};

</script>

<style lang="scss">
.rankbadge {
  position: absolute;
  top: 10px;
  left: 20px;
  border: none;
  z-index: 500;
  font-size: 14px;
}
@media (max-width: 768px) {
  .card:nth-child(odd) {
    display: none;
  }
}
.hot-title {
  font-size: 24px;
}

</style>
