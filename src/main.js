import Vue from 'vue';
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

// 驗證套件
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
// 規則檔案（ex: email...）
import * as rules from 'vee-validate/dist/rules';
// 語系檔案
import zhTW from 'vee-validate/dist/locale/zh_TW.json';

// bootstrap
import 'bootstrap';
// jquery
import jquery from 'jquery';
// AXIOS
import axios from 'axios';
import VueAxios from 'vue-axios';
// loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// 千分號
import thousandsFilter from './assets/js/thousands';

// bus
import './bus';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// 元件，全域註冊
Vue.component('Loading', Loading);
Vue.filter('thousands', thousandsFilter);
// 驗證套件
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);

window.$ = jquery;
// 加入到原型內
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.prototype.aos = AOS;

new Vue({
  created() {
    AOS.init({
      duration: 600,
    });
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
