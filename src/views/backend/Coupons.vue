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
      <Pagination :pages="pagination" @emit-pages="getCoupons"/>
      <!-- coupon Modal -->
      <div
        id="couponModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5
                id="exampleModalLabel"
                class="modal-title"
              >
                建立優惠券
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  v-model="tempCoupon.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                >
              </div>
              <div class="form-group">
                <label for="coupon_code">優惠碼</label>
                <input
                  id="coupon_code"
                  v-model="tempCoupon.code"
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠碼"
                >
              </div>
              <div class="form-group">
                <label for="due_date">到期日</label>
                <input
                  id="due_date"
                  v-model="due_date"
                  type="date"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="due_time">到期時間</label>
                <input
                  id="due_time"
                  v-model="due_time"
                  type="time"
                  step="1"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="price">折扣百分比</label>
                <input
                  id="price"
                  v-model="tempCoupon.percent"
                  type="number"
                  class="form-control"
                  placeholder="請輸入折扣數量"
                >
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="enabled"
                    v-model="tempCoupon.enabled"
                    class="form-check-input"
                    type="checkbox"
                    :value="tempCoupon.enabled"
                  >
                  <label
                    class="form-check-label"
                    for="enabled"
                  >是否啟用</label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                關閉
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateCoupons"
              >
                {{ status === 'new' ? '新增優惠卷' : '更新優惠券' }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- dele coupon Modal 元件 觸發外元件方法 deleCoupon -->
      <DeleCouponModal ref="DeleCouponModal" :temp-coupon="tempCoupon"
        @dele-coupon="deleCoupon"/>
    </div>
  </div>
</template>

<script>
/* global $ */
import DeleCouponModal from '@/components/backend/DeleCouponModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Coupons',
  components: {
    DeleCouponModal,
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      coupons: {},
      newDeadline: '',
      pagination: {},
      tempCoupon: { // 暫存區 避免改到原始資料
        title: '',
        code: '',
        percent: 80,
        enabled: false,
        deadline_at: 0,
      },
      due_date: '',
      due_time: '',
      status: '',
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
          this.coupons = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    // 開啟 Modal [ok]
    openCouponModal(status, item) {
      this.status = status;

      switch (status) {
        case 'new': // 新增（不須物件拷貝）
          this.tempCoupon = {}; // 給新的參考路徑
          $('#couponModal').modal('show');
          break;
        // 由於 const 與 let 宣告環境較特別，故需要在 case 外層宣告一個 {} 確保作用域
        case 'edit': {
          this.tempCoupon = { ...item };
          // 使用 split 切割相關時間戳
          const dedlineAt = this.tempCoupon.deadline.datetime.split(' ');
          [this.due_date, this.due_time] = dedlineAt; // 日期
          $('#couponModal').modal('show');
          break;
        }
        case 'dele':
          this.tempCoupon = { ...item }; // 物件拷貝
          $('#deleCouponModal').modal('show');
          break;
        default:
          break;
      }
    },
    // 更新優惠券 或 新增優惠券
    updateCoupons() {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      let httpMethod = '';
      let status = '新增成功囉，好棒ヽ(＾Д＾)ﾉ ';
      if (this.status === 'new') {
        httpMethod = 'post';
      } else {
        api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
        status = '更新成功囉，好棒ヽ(＾Д＾)ﾉ ';
        httpMethod = 'patch';
      }
      // 針對日期做組合重新寫入到物件中
      // 日期格式 Y-m-d H:i:s，例如：「2020-06-16 09:31:18」
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`;

      this.$http[httpMethod](api, this.tempCoupon)
        .then(() => {
          $('#couponModal').modal('hide');
          // 更新畫面
          this.getCoupons();
          this.$bus.$emit('message:push',
            status,
            'success');
          this.isLoading = false;
        })
        .catch(() => {
          $('#couponModal').modal('hide');
          this.$bus.$emit('message:push',
            '出現錯誤惹，好糗Σ( ° △ °|||)︴',
            'danger');
          this.isLoading = false;
        });
    },
    // 切換是否啟用
    updateCouponsEnabled(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${item.id}`;
      this.$http.patch(api, item)
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    // 刪除優惠券
    deleCoupon() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
      this.$http.delete(api)
        .then(() => {
          $('#deleCouponModal').modal('hide');
          // 刪除完 要再跑一次 getCoupons 更新畫面
          this.getCoupons();
          this.$bus.$emit('message:push',
            '刪除成功囉，好棒ヽ(＾Д＾)ﾉ',
            'success');
          this.isLoading = false;
        })
        .catch(() => {
          $('#deleCouponModal').modal('hide');
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>

</style>
