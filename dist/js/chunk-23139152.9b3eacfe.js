(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23139152"],{2355:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container pt-5"},[t._m(0),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-md-8 offset-2"},[t._m(1),a("router-link",{staticClass:"btn btn-sm btn-primary rounded-0 mt-3 d-block",attrs:{to:"/orders"}},[t._v("下一步 ")])],1)])])],1)},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"step list-unstyled d-flex text-center\n      justify-content-center pb-5 text-primary"},[a("li",[a("p",[t._v("購物車")]),a("div",{staticClass:"step-line"}),a("div",{staticClass:"step-sign solid"})]),a("li",[a("p",[t._v("填寫訂單")]),a("div",{staticClass:"step-line"}),a("div",{staticClass:"step-sign"})]),a("li",[a("p",[t._v("確認訂單")]),a("div",{staticClass:"step-line"}),a("div",{staticClass:"step-sign"})]),a("li",[a("p",[t._v("交易成功")]),a("div",{staticClass:"step-sign"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content p-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"imageArea"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://images.unsplash.com/photo-1598560917682-2577f42feff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}}),a("a",{staticClass:"delete",attrs:{href:""}},[t._v("✕")])])]),a("div",{staticClass:"col-md-6"},[a("h1",{staticClass:"h5 mt-2"},[t._v("深海藍寶鑽戒")]),a("div",{staticClass:"d-flex mb-2"},[a("span",{staticClass:"w-25"},[t._v("數量")]),a("div",{staticClass:"input-group input-group-sm w-75"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-secondary rounded-0 align-middle",attrs:{type:"button",id:"button-addon1"}},[a("i",{staticClass:"fas fa-minus"})])]),a("input",{staticClass:"form-control text-center input-style",attrs:{type:"text",placeholder:"1","aria-label":"Example text with button addon","aria-describedby":"button-addon1"}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary rounded-0",attrs:{type:"button",id:"button-addon2"}},[a("i",{staticClass:"fas fa-plus"})])])])]),a("div",{staticClass:"d-flex"},[a("span",[t._v("小計")]),a("span",{staticClass:"ml-auto"},[t._v("NT $ 11,200")])])]),a("div",{staticClass:"col-12"},[a("hr",{staticStyle:{"border-top":"1px solid black"}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-6"},[a("div",{staticClass:"form-group d-flex mb-0"},[a("label",{staticClass:"col-sm-6 col-form-label pl-0",attrs:{for:"coupon"}},[t._v("優惠碼")]),a("input",{staticClass:"form-control input-style",attrs:{type:"text",id:"coupon"}})])]),a("div",{staticClass:"col-md-6 offset-md-6 d-flex"},[a("span",[t._v("優惠碼折扣")]),a("span",{staticClass:"ml-auto"},[t._v(" － NT $ 1000")])]),a("div",{staticClass:"col-12 d-flex"},[a("div",{staticClass:"ml-auto",staticStyle:{"border-bottom":"solid 1px"}},[t._v("合計 NT $ 22,400")])])])])}],c=(a("99af"),a("4160"),a("159b"),{data:function(){return{isLoading:!1,carts:[],cartTotal:0,status:{loadingItem:""}}},created:function(){this.getCart()},methods:{addToCart:function(t){var s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping");this.isLoading=!0;var o={product:t,quantity:a};this.$http.post(i,o).then((function(t){s.isLoading=!1,console.log(t)})).catch((function(t){s.isLoading=!1,console.log(t.response)}))},getCart:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping");this.isLoading=!0,this.$http.get(s).then((function(s){t.isLoading=!1,console.log("取出購物車的內容 成功",s),t.carts=s.data.data,t.cartTotal=0,t.updateTotal()})).catch((function(s){t.isLoading=!1,console.log("取出購物車的內容 失敗",s.response)}))},updateTotal:function(){var t=this;this.carts.forEach((function(s){t.cartTotal+=s.product.price*s.quantity}))},updateQuantity:function(t,s){var a=this,i="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping");this.isLoading=!0;var o={product:t,quantity:s};this.$http.patch(i,o).then((function(t){a.isLoading=!1,console.log(t),a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t.response)}))}}}),n=c,e=(a("ed1e"),a("2877")),l=Object(e["a"])(n,i,o,!1,null,null,null);s["default"]=l.exports},6971:function(t,s,a){},ed1e:function(t,s,a){"use strict";var i=a("6971"),o=a.n(i);o.a}}]);
//# sourceMappingURL=chunk-23139152.9b3eacfe.js.map