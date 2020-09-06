<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container py-4">
      <!-- 送出表單只需要在 form 標籤上 綁上 submit 方法
      不需要在按鈕上也加上 click 方法 因為會導致重複送出 token 存取兩次而出錯 -->
      <form class="formLogin needs-validation" @submit.prevent="logIn" novalidate>
        <h1 class="loginTitle h4 text-center mb-3">請先登入</h1>
        <div class="form-group">
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            id="InputEmail1"
            placeholder="Email address"
            required
          />
          <div class="invalid-feedback">請輸入信箱</div>
        </div>
        <div class="form-group">
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="Password"
            id="InputPassword1"
            required
          />
          <div class="invalid-feedback">請輸入密碼</div>
        </div>
        <button
          type="submit"
          class="btn btn-primary btn-sm btn-block mb-3"
        >登入</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 將資料 return 帶出來
    return {
      // 將資料用物件的形式包起來
      user: {
        email: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    // 登入
    logIn() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/auth/login`;
      this.$http.post(api, this.user)
        // 成功
        .then((res) => {
          this.$bus.$emit('message:push',
            '登入成功',
            'success');
          this.isLoading = false;
          const { expired } = res.data;
          const { token } = res.data;
          // 寫入 cookie token // expires 設置有效時間
          document.cookie = `myToken=${token};expires=${new Date(expired * 1000)};`;
          console.log(`寫入 token ${token}`);
          // 轉址到後台
          this.$router.push('/admin/products');
        })
        // 失敗
        .catch((error) => {
          this.isLoading = false;
          console.log(error.response);
          // 轉址到 login 頁
          this.$router.push('/login');
        });
    },
  },
};
</script>

<style lang="scss">
.formLogin {
  width: 340px;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
  input {
    text-align: center;
    transition: 0.5s;
    border: 3px solid white;
    background: rgba(white, .2);
    &:hover {
      background: rgba(white, .4);
    }
    &:focus {
      transform: scale(1.1);
    }
  }
}
@media (max-width: 768px) {
  .formLogin {
      width: 100%;
  }
}
.formCheck {
  width: 22px;
  height: 22px;
}
</style>
