<template>
  <div>
    <!-- Navbar 元件 -->
    <navbar/>
    <!-- 在 router-view 上使用 props 將外層元件的資料 傳送到內層 -->
    <router-view :token="token" v-if="checkSuccesss"/>
  </div>
</template>

<script>
import Navbar from '@/components/backend/Navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
  },
  data() {
    return {
      token: '',
      checkSuccesss: false,
    };
  },
  created() {
    // 執行登入驗證
    this.checkLogin();
  },
  methods: {
    // 確認登入狀態
    checkLogin() {
      // 從 cookie 取出 token 並存入 data 裡
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // 將 Token 加到 Headers（需要驗證的 api 需帶上這一串，預設代入 token）
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`;
      this.$http.post(api, { api_token: this.token })
        .then((res) => {
          this.checkSuccesss = true;
          // Toast 訊息
          this.$bus.$emit('message:push',
            `驗證成功 ${res.data.message}`, // 後端回傳的錯誤訊息
            'successs'); // 狀態
        })
        .catch(() => {
          // 驗證失敗就切換到 login
          this.$router.push('/login');
        });
    },
  },
};
</script>
