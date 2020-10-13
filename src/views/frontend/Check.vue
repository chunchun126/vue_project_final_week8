<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container pt-5  mt-5 mt-md-0">
      <ul class="step list-unstyled d-flex text-center
        justify-content-center pb-5 text-primary">
        <li>
          <p>購物袋</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p>填寫訂單</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p>確認訂單</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p class="text-muted">交易成功</p>
          <div class="step-sign" style="border: solid 2px gray"></div>
        </li>
      </ul>
      <div class="row mb-5 recip">
        <div class="col-md-8 offset-md-2">
          <div class="content p-3 text-muted bg-main">
            <h6 class="text-center mb-3">訂單明細</h6>
            <div v-for="item in order.products" :key="item.id"
              class="row justify-content-center">
              <div class="col-md-10 content border-bottom-0">
                <div class="row p-3 bg-white">
                  <div class="col-md-6">
                    <img class="img-fluid"
                      alt="購買商品圖片"
                      :src="item.product.imageUrl[0]">
                  </div>
                  <div class="col-md-6">
                    <table class="table table-sm text-muted">
                      <tbody>
                        <tr>
                          <th class="border-top-0">品名</th>
                          <td class="text-right border-top-0">{{ item.product.title }}</td>
                        </tr>
                        <tr>
                          <th>數量</th>
                          <td class="text-right">{{ item.quantity }}</td>
                        </tr>
                        <tr>
                          <th>小計</th>
                          <td class="text-right"
                            v-if="item.product.price">
                            NT $ {{ item.product.price | thousands }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-10 content bg-white">
                <div class="d-flex px-3 pt-1">
                  <span>總價</span>
                  <span class="ml-auto"
                    v-if="order.amount">
                    NT $ {{ order.amount | thousands }}
                  </span>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-10 offset-md-1">
                <table class="table table-borderless table-sm text-muted">
                  <tr>
                    <th width="170px">收件人姓名</th>
                    <td>{{ user.name }}</td>
                  </tr>
                  <tr>
                    <th width="170px">收件人電話</th>
                    <td>{{ user.tel }}</td>
                  </tr>
                  <tr>
                    <th width="170px">電子信箱</th>
                    <td>{{ user.email }}</td>
                  </tr>
                  <tr>
                    <th width="170px">收件人地址</th>
                    <td>{{ user.address }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="row mt-3">
              <div class="col-6">
                <router-link to="/orders"
                  class="btn btn-sm btn-outline-primary rounded-0 d-block btn-next">回上一步
                </router-link>
              </div>
              <div class="col-6">
                <router-link to="/success"
                  class="btn btn-sm btn-primary rounded-0 d-block btn-next">確定付款
                </router-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Check',
  data() {
    return {
      isLoading: false,
      orders: [],
      order: {
        products: [],
      },
      user: {},
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    // 取全部訂單
    getOrders() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.get(url).then((res) => {
        this.orders = res.data.data;
        this.order = {
          ...res.data.data[0],
        };
        this.getOrder(this.order.id);
        this.$bus.$emit('update-total');
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },

    // 取單一訂單
    getOrder(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${id}`;
      this.$http.get(url).then((res) => {
        this.user = res.data.data.user;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
  },
};
</script>

<style lang="scss">
.recip {
  color: rgb(167, 167, 167);
}
</style>
