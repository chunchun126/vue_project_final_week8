<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid mt-4">
      <!-- 新增優惠券按鈕 -->
      <div class="text-right mb-3">
        <button
          type="button"
          class="btn btn-outline-success btn-sm"
          @click="openCouponModal('new')">
          <i class="fas fa-plus mr-2"></i>新增優惠券
        </button>
      </div>
      <!-- 表單列表 -->
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">名稱</th>
            <th scope="col">折扣百分比</th>
            <th scope="col">到期日</th>
            <th scope="col">是否啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in coupons" :key="item.id">
            <td>{{ i+1 }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ item.deadline.datetime }}</td>
            <td>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input"
                  :id="item.id"
                  v-model="item.enabled"
                  @change="updateCouponsEnabled(item)">
                <label class="custom-control-label"
                  :for="item.id">
                  <strong v-if="item.enabled" class="text-success">啟用中</strong>
                  <span v-else class="text-muted">尚未啟用</span>
                </label>
              </div>
            </td>
            <td class="text-center">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="openCouponModal('edit', item)">
                  <i class="fas fa-pen"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openCouponModal('dele', item)"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- pagination 元件 -->
      <pagination :pages="pagination" @emit-pages="getCoupons"/>
      <!-- coupon Modal 元件 -->
      <coupon-modal ref="CouponModal" :temp-coupon="tempCoupon"
        @emit-update-coupon="updateCoupons"/>
      <!-- dele coupon Modal 元件 觸發外元件方法 deleCoupon -->
      <dele-coupon-modal ref="DeleCouponModal" :temp-coupon="tempCoupon"
        @dele-coupon="deleCoupon"/>
    </div>
  </div>
</template>

<script>
/* global $ */
import CouponModal from '@/components/backend/CouponModal.vue';
import DeleCouponModal from '@/components/backend/DeleCouponModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Coupons',
  components: {
    CouponModal,
    DeleCouponModal,
    Pagination,
  },
  props: ['token'],
  data() {
    return {
      isLoading: false,
      isNew: false,
      coupons: {},
      newDeadline: '',
      pagination: {},
      tempCoupon: { // 暫存區 避免改到原始資料
        title: '',
        code: '',
        percent: 80,
        enabled: false,
        deadline_at: '',
      },
    };
  },
  created() {
    this.getCoupons();
  },
  methods: {
    // 取得所有優惠券列表
    getCoupons(nowPage = 1) { // 預設參數
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${nowPage}`;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          console.log('取優惠券 成功', res);
          this.coupons = res.data.data;
          this.pagination = res.data.meta.pagination;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log('取優惠券 失敗', error.response);
        });
    },
    // 開啟 Modal [ok]
    openCouponModal(isNew, item) {
      switch (isNew) {
        case 'new': // 新增（不須物件拷貝）
          this.tempCoupon = {}; // 給新的參考路徑
          this.isNew = true;
          $('#couponModal').modal('show');
          // console.log('新增 Coupon');
          break;
        case 'edit': // 編輯
          this.tempCoupon = { ...item };
          $('#couponModal').modal('show');
          break;
        case 'dele': // 刪除
          this.tempCoupon = { ...item }; // 物件拷貝
          $('#deleCouponModal').modal('show');
          break;
        default:
          break;
      }
    },
    // 更新優惠券 或 新增優惠券
    updateCoupons(newDeadline) {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      let httpMethod = 'post';
      // 判斷如果不是新增 就切換成 更新 api
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
        httpMethod = 'patch';
      }
      // 日期格式為字串「2020-06-16 09:31:18」 重新組合再寫入物件中
      this.tempCoupon.deadline_at = newDeadline;
      console.log('外元件', newDeadline);

      this.$http[httpMethod](api, this.tempCoupon)
        .then((res) => {
          this.isLoading = false;
          $('#couponModal').modal('hide');
          console.log('更新優惠券 成功', res);

          // 成功發送後 再重新執行一次 getCoupons 取所有優惠券列表
          // 更新畫面
          this.getCoupons();
        })
        .catch((error) => {
          this.isLoading = false;
          $('#couponModal').modal('hide');
          console.log('更新優惠券 失敗', error.response);
        });
    },
    // 切換是否啟用
    updateCouponsEnabled(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${item.id}`;
      this.$http.patch(api, item)
        .then((res) => {
          this.isLoading = false;
          console.log('更新優惠券 成功', res);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log('更新優惠券 失敗', error.response);
        });
    },
    // 刪除優惠券
    deleCoupon() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false;
          $('#deleCouponModal').modal('hide');
          console.log('刪除優惠券 成功', res);
          // 刪除完 要再跑一次 getCoupons 更新畫面
          this.getCoupons();
        })
        .catch((error) => {
          this.isLoading = false;
          $('#deleCouponModal').modal('hide');
          console.log('刪除優惠券 失敗', error.response);
        });
    },
  },
};
</script>

<style>

</style>
