import Vue from 'vue';

// 在原型上建立一個新的 Vue 實例
Vue.prototype.$bus = new Vue();

// 參數使用方法
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式
