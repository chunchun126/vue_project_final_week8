(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd9be"],{"81b1":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"products"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"list-group list-group-flush",attrs:{id:"myList",role:"tablist"}},[a("a",{staticClass:"list-group-item list-group-item-action p-2 active",attrs:{"data-toggle":"list",href:"#all",role:"tab"},on:{click:function(s){return s.preventDefault(),t.getProducts(s)}}},[t._v("全部商品 "),a("small",{staticClass:"ml-1 text-muted"},[t._v("All")])]),a("a",{staticClass:"list-group-item list-group-item-action p-2",attrs:{"data-toggle":"list",href:"#Earrings",role:"tab"},on:{click:function(s){return s.preventDefault(),t.getEarrings(s)}}},[t._v("耳環 "),a("small",{staticClass:"ml-1 text-muted"},[t._v("Ring")])]),a("a",{staticClass:"list-group-item list-group-item-action p-2",attrs:{"data-toggle":"list",href:"#Rings",role:"tab"},on:{click:function(s){return s.preventDefault(),t.getRings(s)}}},[t._v("戒指 "),a("small",{staticClass:"ml-1 text-muted"},[t._v("Earring")])]),a("a",{staticClass:"list-group-item list-group-item-action p-2",attrs:{"data-toggle":"list",href:"#Necklaces",role:"tab"},on:{click:function(s){return s.preventDefault(),t.getNecklaces(s)}}},[t._v("項鍊 "),a("small",{staticClass:"ml-1 text-muted"},[t._v("Necklace")])])])]),a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active",attrs:{id:"all",role:"tabpanel"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.products,(function(s){return a("div",{key:s.id,staticClass:"col-md-4 mb-md-5 mb-3"},[a("div",{staticClass:"card rounded-0 border-0 text-center"},[a("a",{staticClass:"d-block item-img",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goPage(s)}}},[t._m(0,!0),a("img",{staticClass:"card-img-top rounded-0",attrs:{src:s.imageUrl}})]),a("div",{staticClass:"card-body p-2"},[a("h6",{staticClass:"font-weight-light product-title mb-0 mt-md-2"},[t._v(t._s(s.title)+" "),a("small",{staticClass:"badge rounded-0 ml-1 mb-2 bg-main border-0",staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(s.category)+" ")])]),a("p",{staticClass:"card-text origin-price mb-1 d-none d-md-block"},[t._v(" 定價 NT$"+t._s(t._f("thousands")(s.origin_price))+" ")]),a("p",{staticClass:"card-text price mb-0 mb-md-2"},[a("small",{staticClass:"mr-2"},[t._v("優惠價")]),a("span",[t._v("NT$"+t._s(t._f("thousands")(s.price)))])]),a("a",{staticClass:"btn btn-outline-secondary btn-sm rounded-0 w-100",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addToCart(s.id)}}},[a("i",{staticClass:"fas fa-shopping-bag mr-1"}),a("small",[t._v("加入購物袋")])])])])])})),0)])]),a("div",{staticClass:"tab-pane",attrs:{id:"Rings",role:"tabpanel"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.allRings,(function(s){return a("div",{key:s.id,staticClass:"col-md-4 mb-md-5 mb-3"},[a("div",{staticClass:"card rounded-0 border-0 text-center"},[a("a",{staticClass:"d-block item-img",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goPage(s)}}},[t._m(1,!0),a("img",{staticClass:"card-img-top rounded-0",attrs:{src:s.imageUrl}})]),a("div",{staticClass:"card-body p-2"},[a("h6",{staticClass:"font-weight-light product-title mb-0 mt-md-2"},[t._v(t._s(s.title)+" "),a("small",{staticClass:"badge rounded-0 ml-1 mb-2 bg-main border-0",staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(s.category)+" ")])]),a("p",{staticClass:"card-text origin-price mb-1 d-none d-md-block"},[t._v(" 定價 NT$"+t._s(t._f("thousands")(s.origin_price))+" ")]),a("p",{staticClass:"card-text price mb-0 mb-md-2"},[a("small",{staticClass:"mr-2"},[t._v("優惠價")]),a("span",[t._v("NT$"+t._s(t._f("thousands")(s.price)))])]),a("a",{staticClass:"btn btn-outline-secondary btn-sm rounded-0 w-100",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addToCart(s.id)}}},[a("i",{staticClass:"fas fa-shopping-bag mr-1"}),a("small",[t._v("加入購物袋")])])])])])})),0)])]),a("div",{staticClass:"tab-pane",attrs:{id:"Earrings",role:"tabpanel"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.allEarrings,(function(s){return a("div",{key:s.id,staticClass:"col-md-4 mb-md-5 mb-3"},[a("div",{staticClass:"card rounded-0 border-0 text-center"},[a("a",{staticClass:"d-block item-img",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goPage(s)}}},[t._m(2,!0),a("img",{staticClass:"card-img-top rounded-0",attrs:{src:s.imageUrl}})]),a("div",{staticClass:"card-body p-2"},[a("h6",{staticClass:"font-weight-light product-title mb-0 mt-md-2"},[t._v(t._s(s.title)+" "),a("small",{staticClass:"badge rounded-0 ml-1 mb-2 bg-main border-0",staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(s.category)+" ")])]),a("p",{staticClass:"card-text origin-price mb-1 d-none d-md-block"},[t._v(" 定價 NT$"+t._s(t._f("thousands")(s.origin_price))+" ")]),a("p",{staticClass:"card-text price mb-0 mb-md-2"},[a("small",{staticClass:"mr-2"},[t._v("優惠價")]),a("span",[t._v("NT$"+t._s(t._f("thousands")(s.price)))])]),a("a",{staticClass:"btn btn-outline-secondary btn-sm rounded-0 w-100",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addToCart(s.id)}}},[a("i",{staticClass:"fas fa-shopping-bag mr-1"}),a("small",[t._v("加入購物袋")])])])])])})),0)])]),a("div",{staticClass:"tab-pane",attrs:{id:"Necklaces",role:"tabpanel"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.allNecklaces,(function(s){return a("div",{key:s.id,staticClass:"col-md-4 mb-md-5 mb-3"},[a("div",{staticClass:"card rounded-0 border-0 text-center"},[a("a",{staticClass:"d-block item-img",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goPage(s)}}},[t._m(3,!0),a("img",{staticClass:"card-img-top rounded-0",attrs:{src:s.imageUrl}})]),a("div",{staticClass:"card-body p-2"},[a("h6",{staticClass:"font-weight-light product-title mb-0 mt-md-2"},[t._v(t._s(s.title)+" "),a("small",{staticClass:"badge rounded-0 ml-1 mb-2 bg-main border-0",staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(s.category)+" ")])]),a("p",{staticClass:"card-text origin-price mb-1 d-none d-md-block"},[t._v(" 定價 NT$"+t._s(t._f("thousands")(s.origin_price))+" ")]),a("p",{staticClass:"card-text price mb-0 mb-md-2"},[a("small",{staticClass:"mr-2"},[t._v("優惠價")]),a("span",[t._v("NT$"+t._s(t._f("thousands")(s.price)))])]),a("a",{staticClass:"btn btn-outline-secondary btn-sm rounded-0 w-100",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addToCart(s.id)}}},[a("i",{staticClass:"fas fa-shopping-bag mr-1"}),a("small",[t._v("加入購物袋")])])])])])})),0)])])])])])])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mask"},[a("div",{staticClass:"caption"},[t._v("More Detail")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mask"},[a("div",{staticClass:"caption"},[t._v("More Detail")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mask"},[a("div",{staticClass:"caption"},[t._v("More Detail")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mask"},[a("div",{staticClass:"caption"},[t._v("More Detail")])])}],c=(a("99af"),a("4160"),a("159b"),{components:{},data:function(){return{products:[],pagination:{},isLoading:!1,allRings:[],allEarrings:[],allNecklaces:[]}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/products?paged=40")).then((function(s){t.isLoading=!1,t.products=s.data.data,console.log("取所有產品列表 成功",s)})).catch((function(s){t.isLoading=!1,console.log(s.response)}))},goPage:function(t){console.log(this.$router),this.$router.push("/product/".concat(t.id))},addToCart:function(t){var s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping");this.isLoading=!0;var e={product:t,quantity:a};console.log(e),this.$http.post(i,e).then((function(t){s.isLoading=!1,s.$bus.$emit("update-total"),console.log("加到購物車 成功",t),alert("成功加到購物車。")})).catch((function(t){s.isLoading=!1,console.log(t.response),alert(t.response.data.errors[0])}))},getRings:function(){var t=this;this.products.forEach((function(s){"Ring"===s.category&&t.allRings.push(s)}))},getEarrings:function(){var t=this;this.products.forEach((function(s){"Earring"===s.category&&t.allEarrings.push(s)}))},getNecklaces:function(){var t=this;this.products.forEach((function(s){"Necklace"===s.category&&t.allNecklaces.push(s)}))}}}),r=c,n=a("2877"),l=Object(n["a"])(r,i,e,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0dd9be.a5dc8916.js.map