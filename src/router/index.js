import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // 前台
  {
    path: '/',
    component: () => import('../views/frontend/layout/Index.vue'),
    children: [
      {
        name: '首頁',
        path: '/',
        component: () => import('../views/frontend/Home.vue'),
      },
      {
        name: '所有產品',
        path: 'products',
        component: () => import('../views/frontend/Products.vue'),
      },
      { // 動態路由
        path: 'product/:id',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        // 購物車
        path: 'cart',
        component: () => import('../views/frontend/Cart.vue'),
      },
      {
        // 填寫訂單
        path: 'orders',
        component: () => import('../views/frontend/Orders.vue'),
      },
      {
        // 確認訂單
        path: 'check',
        component: () => import('../views/frontend/Check.vue'),
      },
      {
        // 交易成功
        path: 'success',
        component: () => import('../views/frontend/Success.vue'),
      },
      {
        // 品牌介紹
        name: '品牌介紹',
        path: 'about',
        component: () => import('../views/frontend/About.vue'),
      },
    ],
  },
  { // 登入
    path: '/login',
    component: () => import('../views/frontend/Login.vue'),
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        name: '產品',
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        name: '訂單',
        path: 'orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        name: '優惠券',
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        name: '圖片儲存',
        path: 'storages',
        component: () => import('../views/backend/Storages.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
