(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e840659"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination pagination-sm justify-content-end"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:t.pages.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],n={name:"Pagination",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{getPages:function(t){this.$emit("emit-pages",t)}}},c=n,r=e("2877"),o=Object(r["a"])(c,i,s,!1,null,null,null);a["a"]=o.exports},efd9:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container-fluid mt-5"},[e("table",{staticClass:"table table-striped table-hover"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",t._l(a.products,(function(a,i){return e("li",{key:i},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",[t._v(" "+t._s(a.payment)+" ")]),e("td",{staticClass:"text-right",staticStyle:{"margin-right":"100px"}},[t._v(" "+t._s(t._f("thousands")(a.amount))+" ")]),e("td",[e("div",{staticClass:"custom-control custom-switch text-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:a.id},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var i=a.paid,s=e.target,n=!!s.checked;if(Array.isArray(i)){var c=null,r=t._i(i,c);s.checked?r<0&&t.$set(a,"paid",i.concat([c])):r>-1&&t.$set(a,"paid",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-success"},[t._v(" 已付款 ")]):t._e(),a.paid?t._e():e("span",{staticClass:"text-muted"},[t._v(" 尚未付款 ")])])])])])})),0):t._e()]),e("pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getOrders}})],1)],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",{staticClass:"text-right"},[t._v("應付金額")]),e("th",{staticClass:"text-center"},[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),c={name:"Orders",components:{Pagination:n["a"]},data:function(){return{orders:{user:{}},pagination:{},isLoading:!1}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.isLoading=!1,t.orders=a.data.data,t.pagination=a.data.meta.pagination})).catch((function(){t.isLoading=!1}))},setOrderPaid:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){a.getOrders()}))}}},r=c,o=e("2877"),d=Object(o["a"])(r,i,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7e840659.acae0a0b.js.map