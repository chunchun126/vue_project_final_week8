<template>
  <div>
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
              @click="updateCoupon"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      due_date: '',
      due_time: '',
    };
  },
  props: ['tempCoupon'],
  methods: {
    updateCoupon() {
      const newDeadline = `${this.due_date} ${this.due_time}`;
      this.$emit('emit-update-coupon', newDeadline);
      console.log('內元件', newDeadline);
    },
  },
};
</script>

<style>
</style>
