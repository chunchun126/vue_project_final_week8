<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid mt-5">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>下單時間</th>
            <th>購買款項</th>
            <th>付款方式</th>
            <th class="text-right">應付金額</th>
            <th class="text-center">是否付款</th>
          </tr>
        </thead>
        <tbody v-if="orders.length">
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.created.datetime }}</td>
            <td>
              <ul>
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }}
                  數量：{{ product.quantity }} {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td>
              {{ item.payment }}
            </td>
            <td class="text-right" style="margin-right: 100px">
              {{ item.amount | thousands }}
            </td>
            <td>
              <div class="custom-control custom-switch text-center">
                <input type="checkbox" class="custom-control-input"
                  :id="item.id"
                  v-model="item.paid"
                  @change="setOrderPaid(item)">
                <label class="custom-control-label"
                  :for="item.id">
                  <strong v-if="item.paid" class="text-success">
                    已付款
                  </strong>
                  <span v-if="!item.paid" class="text-muted">
                    尚未付款
                  </span>
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- pagination 元件 -->
      <pagination :pages="pagination" @emit-pages="getOrders"/>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Orders',
  components: {
    Pagination,
  },
  props: ['token'],
  data() {
    return {
      orders: {
        user: {},
      },
      pagination: {},
      isLoading: false,
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    // 取得所有訂單列表
    getOrders(nowPage = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${nowPage}`;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          console.log('取訂單 成功', res);
          this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log('取訂單 失敗', error.response);
        });
    },
    // 設定訂單為 已付款/尚未付款
    setOrderPaid(item) { // 將回傳的訂單資料代入參數
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
      // 如果尚未付款 則切換 api
      if (!item.paid) {
        api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
      }
      this.$http.patch(api, item.id)
        .then((res) => {
          console.log('設定付款狀態 成功', res);
          // 修改完後必須 重新 取得所有訂單
          this.getOrders();
        })
        .catch((error) => {
          console.log('設定付款狀態 失敗', error.response);
        });
    },
  },
};
</script>

<style>

</style>
