(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0e9cf88"],{2355:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container pt-md-5 mt-5"},[t._m(0),t.carts.length>0?a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-md-8 offset-md-2"},[a("div",{staticClass:"text-left"},[a("button",{staticClass:"btn btn-sm btn-secondary\n            rounded-0 border-bottom-0",staticStyle:{"font-size":"15px"},attrs:{type:"button"},on:{click:t.deleteAllCart}},[t._v("全部刪除 ")])]),a("div",{staticClass:"content p-3"},[t._l(t.carts,(function(s){return a("div",{key:s.id,staticClass:"row"},[a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"imageArea"},[a("router-link",{attrs:{to:"product/"+s.product.id}},[a("div",{staticClass:"overflowHidden"},[a("div",{staticClass:"rounded-0 item-img img-fluid",staticStyle:{height:"300px"},style:"background-image: url("+s.product.imageUrl[0]+")"})])]),a("a",{staticClass:"delete",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.deleteOneCart(s)}}},[t._v("✕")])],1)]),a("div",{staticClass:"col-md-5 d-flex flex-column justify-content-between"},[a("div",{staticClass:"cart-item-title mt-2"},[t._v(t._s(s.product.title)+" "),a("small",{staticClass:"badge rounded-0 ml-1 mb-2 bg-main border-0"},[t._v(" "+t._s(s.product.category)+" ")])]),t._m(1,!0),a("div",{staticClass:"addNumber"},[a("div",{staticClass:"d-flex mb-2 align-items-center"},[a("span",{staticClass:"w-25"},[t._v("數量")]),a("div",{staticClass:"input-group input-group-sm w-75"},[a("div",{staticClass:"input-group-prepend h-100"},[a("button",{staticClass:"lh0 btn btn-outline-secondary",attrs:{type:"button",disabled:s.quantity<=1},on:{click:function(a){return t.updateQuantity(s.product.id,s.quantity-1)}}},[t._v("-")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.quantity,expression:"item.quantity"}],staticClass:"h-100 form-control text-center bg-white",attrs:{type:"number",min:"1",disabled:""},domProps:{value:s.quantity},on:{change:function(a){return t.updateQuantity(s.product.id,s.quantity)},input:function(a){a.target.composing||t.$set(s,"quantity",a.target.value)}}}),a("div",{staticClass:"input-group-append h-100"},[a("button",{staticClass:"lh0 btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(a){return t.updateQuantity(s.product.id,s.quantity+1)}}},[t._v("+")])])])]),a("div",{staticClass:"d-flex"},[a("span",[t._v("價格")]),a("span",{staticClass:"ml-auto"},[t._v(" NT $ "+t._s(t._f("thousands")(s.product.price+"/"+s.product.unit))+" ")])])])]),t._m(2,!0)])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 offset-md-7"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group coupon"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control rounded-0",attrs:{type:"text",id:"coupon",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode},on:{input:function(s){s.target.composing||(t.couponCode=s.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v(" 套用優惠碼 ")])])])])]),t.coupon.enabled?a("div",{staticClass:"sale col-md-5 offset-md-7 d-flex text-primary"},[a("span",[t._v("優惠碼折扣")]),a("span",{staticClass:"ml-auto"},[t._v(" － NT $ "+t._s(t.coupon.percent))])]):t._e(),a("div",{staticClass:"col-md-5 offset-md-7 d-flex mt-3 align-items-center"},[a("span",{staticClass:"total"},[t._v("合計")]),t.coupon.enabled?a("div",{staticClass:"total-price ml-auto p-1",staticStyle:{border:"solid 1px"}},[t._v(" NT $ "+t._s(t._f("thousands")(t.cartTotal-t.coupon.percent))+" ")]):a("div",{staticClass:"total-price ml-auto p-1",staticStyle:{border:"solid 1px"}},[t._v(" NT $ "+t._s(t._f("thousands")(t.cartTotal))+" ")])])])],2),a("router-link",{staticClass:"btn btn-sm btn-primary rounded-0 mt-3 d-block btn-next",attrs:{to:"/orders"}},[t._v("下一步 ")])],1)]):a("div",{staticClass:"py-5"},[a("div",{staticClass:"text-center my-5"},[a("h6",{staticClass:"mb-3"},[t._v("購物袋中目前沒有產品。")]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/products"}},[t._v(" 選購去 ")])],1)])])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"step list-unstyled d-flex text-center\n      justify-content-center pb-5 text-primary"},[a("li",{staticClass:"pb-3"},[a("p",[t._v("購物袋")]),a("div",{staticClass:"step-line"}),a("div",{staticClass:"step-sign solid"})]),a("li",[a("p",{staticClass:"text-muted"},[t._v("填寫訂單")]),a("div",{staticClass:"step-line bg-secondary"}),a("div",{staticClass:"step-sign",staticStyle:{border:"solid 2px gray"}})]),a("li",[a("p",{staticClass:"text-muted"},[t._v("確認訂單")]),a("div",{staticClass:"step-line bg-secondary"}),a("div",{staticClass:"step-sign",staticStyle:{border:"solid 2px gray"}})]),a("li",[a("p",{staticClass:"text-muted"},[t._v("交易成功")]),a("div",{staticClass:"step-sign",staticStyle:{border:"solid 2px gray"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"text-primary my-3"},[a("p",{staticClass:"sale mb-2"},[t._v("全館歡慶10週年，輸入優惠碼，現折100元！")]),a("h6",{staticClass:"text-white badge rounded-0 bg-primary border-0"},[t._v(" 優惠碼：HAPPY10 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12"},[a("hr",{staticStyle:{"border-top":"1px solid black"}})])}],n=(a("99af"),a("4160"),a("159b"),{name:"Cart",data:function(){return{isLoading:!1,carts:[],cartTotal:0,status:{loadingItem:""},couponCode:"",coupon:{}}},created:function(){this.getCart()},methods:{getCart:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping");this.isLoading=!0,this.$http.get(s).then((function(s){t.carts=s.data.data,t.cartTotal=0,t.updateTotal(),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},updateTotal:function(){var t=this;this.carts.forEach((function(s){t.cartTotal+=s.product.price*s.quantity}))},updateQuantity:function(t,s){var a=this,i="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping");this.isLoading=!0;var e={product:t,quantity:s};this.$http.patch(i,e).then((function(){a.getCart(),a.isLoading=!1})).catch((function(){a.isLoading=!1}))},deleteAllCart:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping/all/product");this.$http.delete(s).then((function(){t.$bus.$emit("update-total"),t.getCart(),t.$bus.$emit("message:push","購物袋已全部刪除。","success"),t.isLoading=!1})).catch((function(){t.$bus.$emit("message:push","刪除失敗","danger"),t.isLoading=!1}))},deleteOneCart:function(t){var s=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping/").concat(t.product.id);this.$http.delete(a).then((function(){s.$bus.$emit("update-total"),s.getCart(),s.$bus.$emit("message:push","購物袋已成功刪除這項商品。","success"),s.isLoading=!1})).catch((function(){s.$bus.$emit("message:push","刪除失敗","danger"),s.isLoading=!1}))},addCoupon:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/coupon/search");this.isLoading=!0,this.$http.post(s,{code:this.couponCode}).then((function(s){t.coupon=s.data.data,t.$bus.$emit("message:push","加入優惠碼成功。","success"),t.isLoading=!1})).catch((function(){t.$bus.$emit("message:push","此優惠碼無效。","danger"),t.isLoading=!1}))}}}),c=n,o=(a("ed1e"),a("2877")),r=Object(o["a"])(c,i,e,!1,null,null,null);s["default"]=r.exports},6971:function(t,s,a){},"99af":function(t,s,a){"use strict";var i=a("23e7"),e=a("d039"),n=a("e8b5"),c=a("861d"),o=a("7b0b"),r=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),p=a("b622"),m=a("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",b=m>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=u("concat"),C=function(t){if(!c(t))return!1;var s=t[v];return void 0!==s?!!s:n(t)},y=!b||!g;i({target:"Array",proto:!0,forced:y},{concat:function(t){var s,a,i,e,n,c=o(this),u=l(c,0),p=0;for(s=-1,i=arguments.length;s<i;s++)if(n=-1===s?c:arguments[s],C(n)){if(e=r(n.length),p+e>h)throw TypeError(f);for(a=0;a<e;a++,p++)a in n&&d(u,p,n[a])}else{if(p>=h)throw TypeError(f);d(u,p++,n)}return u.length=p,u}})},ed1e:function(t,s,a){"use strict";var i=a("6971"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-f0e9cf88.4841a04a.js.map