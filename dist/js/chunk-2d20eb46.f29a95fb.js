(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20eb46"],{b101:function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("navbar"),a.checkSuccesss?n("router-view",{attrs:{token:a.token}}):a._e()],1)},s=[],r=(n("ac1f"),n("5319"),function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a._v("後台管理系統")]),a._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"產品"}}},[a._v("產品列表")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"訂單"}}},[a._v("訂單列表")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"優惠券"}}},[a._v("優惠券列表")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:{name:"圖片儲存"}}},[a._v("圖片儲存列表")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/"}},[a._v("回前台")])],1)])])])}),c=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"Navbar"},o=i,l=n("2877"),u=Object(l["a"])(o,r,c,!1,null,null,null),v=u.exports,h={name:"Dashboard",components:{Navbar:v},data:function(){return{token:"",checkSuccesss:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var a=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token);var t="".concat("https://course-ec-api.hexschool.io/api","/auth/check");this.$http.post(t,{api_token:this.token}).then((function(t){a.checkSuccesss=!0,a.$bus.$emit("message:push","驗證成功 ".concat(t.data.message),"successs")})).catch((function(){a.$router.push("/login")}))}}},k=h,p=Object(l["a"])(k,e,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d20eb46.f29a95fb.js.map