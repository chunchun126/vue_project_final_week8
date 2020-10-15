<template>
  <div class="container pt-md-5 mt-5">
    <loading :active.sync="isLoading"></loading>
    <ul class="step list-unstyled d-flex text-center
      justify-content-center pb-5 text-primary">
      <li class="pb-3">
        <p>購物袋</p>
        <div class="step-line"></div>
        <div class="step-sign solid"></div>
      </li>
      <li>
        <p>填寫訂單</p>
        <div class="step-line bg-secondary"></div>
        <div class="step-sign solid"></div>
      </li>
      <li>
        <p class="text-muted">確認訂單</p>
        <div class="step-line bg-secondary"></div>
        <div class="step-sign" style="border: solid 2px gray"></div>
      </li>
      <li>
        <p class="text-muted">交易成功</p>
        <div class="step-sign" style="border: solid 2px gray"></div>
      </li>
    </ul>
    <div class="mb-5 row justify-content-center">
      <div class="col-md-8">
        <!-- validation-observer 驗證整體表單 -->
        <validation-observer v-slot="{ invalid }">
          <!-- 表單送出改為使用 form submit 的方法 -->
          <form @submit.prevent="createOrder" class="text-left">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <validation-provider
                    rules="required"
                    class="form-group"
                    tag="div"
                    v-slot="{ errors, classes }"
                  >
                    <label for="name">收件人姓名
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control input-style"
                      id="name"
                      v-model="form.name"
                      placeholder="請輸入收件人姓名"
                      name="收件人姓名"
                      :class="classes"
                    />
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <validation-provider
                    rules="required|min:8"
                    class="form-group"
                    tag="div"
                    v-slot="{ errors, classes }"
                  >
                    <label for="tel">電話
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      class="form-control input-style"
                      id="tel"
                      v-model="form.tel"
                      placeholder="請輸入收件人電話"
                      name="電話"
                      :class="classes"/>
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <validation-provider
                    rules="required|email"
                    class="form-group"
                    tag="div"
                    v-slot="{ errors, classes }"
                  >
                    <label for="email">Email
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      class="form-control input-style"
                      id="email"
                      v-model="form.email"
                      placeholder="請輸入收件人Email"
                      name="信箱"
                      :class="classes"/>
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="payment">購買方式
                    <span class="text-danger">*</span>
                  </label>
                  <select id="payment" v-model="form.payment"
                    class="form-control input-style" required>
                    <option value disabled>請選擇付款方式</option>
                    <option value="WebATM">WebATM</option>
                    <option value="ATM">ATM</option>
                    <option value="CVS">CVS</option>
                    <option value="Barcode">Barcode</option>
                    <option value="Credit">Credit</option>
                    <option value="ApplePay">ApplePay</option>
                    <option value="GooglePay">GooglePay</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <validation-provider
                rules="required"
                class="form-group"
                tag="div"
                v-slot="{ errors, classes }"
              >
                <label for="address">地址
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control input-style"
                  id="address"
                  v-model="form.address"
                  placeholder="請輸入地址"
                  name="地址"
                  :class="classes"
                />
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="message">留言</label>
              <textarea id="message" v-model="form.message"
                class="form-control input-style"
                placeholder="有什麼想告訴我們的嗎？"
                cols="30" rows="3"></textarea>
            </div>
            <!-- 送出表單使用 submit 的方法，如果驗證未通過則 disabled 該按鈕 -->
            <div class="row">
              <div class="col-6">
                <router-link to="/cart"
                  class="btn btn-sm btn-outline-primary rounded-0 d-block btn-next">回上一步
                </router-link>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-sm btn-primary rounded-0 btn-block btn-next"
                  :disabled="invalid">送出訂單
                </button>
              </div>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data() {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      coupon: {},
      isLoading: false,
    };
  },
  methods: {
    // 新增優惠券
    addCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/coupon/search`;
      this.$http.post(url, { code: this.coupon_code }).then((response) => {
        this.coupon = response.data.data;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },

    // 建立一筆訂單
    createOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };
      this.$http.post(api, order)
        .then((res) => {
          this.$router.push('/check');
          const { id } = res.data.data;
          this.$bus.$emit('form', id);
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss">
</style>
