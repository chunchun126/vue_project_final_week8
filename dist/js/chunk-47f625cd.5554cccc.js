(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47f625cd"],{"057f":function(t,e,a){var n=a("fc6a"),r=a("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):r(n(t))}},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination pagination-sm justify-content-end"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,n){return a("li",{key:n,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},r=[],i={data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{getPages:function(t){this.$emit("emit-pages",t)}}},o=i,s=a("2877"),c=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=c.exports},"3f2d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"container-fluid mt-5"},[a("table",{staticClass:"table table-striped table-hover"},[t._m(0),a("tbody",t._l(t.storages,(function(e,n){return a("tr",{key:e.id},[a("td",[t._v(" "+t._s(n+1)+" ")]),a("td",[a("img",{staticClass:"img-fluid",attrs:{src:e.path,width:"100px"}})]),a("td",[a("div",{staticClass:"btn-group"},[t._m(1,!0),a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.openModal(e)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])])})),0)]),a("pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getData}})],1),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除該筆資料 (刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteData}},[t._v(" 確認刪除 ")])])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("圖片縮圖")]),a("th",{attrs:{scope:"col"}},[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-pen"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除資料")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(a("99af"),a("5530")),o=a("1799"),s={name:"Storages",components:{Pagination:o["a"]},data:function(){return{storages:{},pagination:{},tempData:{},isLoading:!1}},created:function(){this.getData()},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/storage?page=").concat(e);this.$http.get(a).then((function(e){console.log("取得所有檔案 成功",e),t.isLoading=!1,t.storages=e.data.data,t.pagination=e.data.meta.pagination})).catch((function(e){t.isLoading=!1,console.log("取得所有檔案 失敗",e)}))},openModal:function(t){$("#deleteModal").modal("show"),this.tempData=Object(i["a"])({},t)},deleteData:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/admin/storage").concat(this.tempData.id);this.$http.delete(e).then((function(e){t.isLoading=!1,$("#deleteModal").modal("hide"),console.log("刪除指定檔案 成功",e),t.getData()})).catch((function(e){t.isLoading=!1,$("#deleteModal").modal("hide"),console.log("刪除指定檔案 失敗",e)}))}}},c=s,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=u.exports},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var n=a("428f"),r=a("5135"),i=a("e538"),o=a("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||o(e,t,{value:i.f(t)})}},a4d3:function(t,e,a){"use strict";var n=a("23e7"),r=a("da84"),i=a("d066"),o=a("c430"),s=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),f=a("5135"),d=a("e8b5"),p=a("861d"),b=a("825a"),g=a("7b0b"),h=a("fc6a"),v=a("c04e"),m=a("5c6c"),y=a("7c73"),O=a("df75"),w=a("241c"),_=a("057f"),j=a("7418"),C=a("06cf"),P=a("9bf2"),D=a("d1e7"),S=a("9112"),k=a("6eeb"),x=a("5692"),E=a("f772"),L=a("d012"),$=a("90e3"),M=a("b622"),N=a("e538"),J=a("746f"),F=a("d44e"),T=a("69f3"),I=a("b727").forEach,Q=E("hidden"),W="Symbol",q="prototype",z=M("toPrimitive"),A=T.set,B=T.getterFor(W),G=Object[q],H=r.Symbol,K=i("JSON","stringify"),R=C.f,U=P.f,V=_.f,X=D.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),at=x("wks"),nt=r.QObject,rt=!nt||!nt[q]||!nt[q].findChild,it=s&&u((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,a){var n=R(G,e);n&&delete G[e],U(t,e,a),n&&t!==G&&U(G,e,n)}:U,ot=function(t,e){var a=Y[t]=y(H[q]);return A(a,{type:W,tag:t,description:e}),s||(a.description=e),a},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,a){t===G&&ct(Z,e,a),b(t);var n=v(e,!0);return b(a),f(Y,n)?(a.enumerable?(f(t,Q)&&t[Q][n]&&(t[Q][n]=!1),a=y(a,{enumerable:m(0,!1)})):(f(t,Q)||U(t,Q,m(1,{})),t[Q][n]=!0),it(t,n,a)):U(t,n,a)},lt=function(t,e){b(t);var a=h(e),n=O(a).concat(bt(a));return I(n,(function(e){s&&!ft.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=v(t,!0),a=X.call(this,e);return!(this===G&&f(Y,e)&&!f(Z,e))&&(!(a||!f(this,e)||!f(Y,e)||f(this,Q)&&this[Q][e])||a)},dt=function(t,e){var a=h(t),n=v(e,!0);if(a!==G||!f(Y,n)||f(Z,n)){var r=R(a,n);return!r||!f(Y,n)||f(a,Q)&&a[Q][n]||(r.enumerable=!0),r}},pt=function(t){var e=V(h(t)),a=[];return I(e,(function(t){f(Y,t)||f(L,t)||a.push(t)})),a},bt=function(t){var e=t===G,a=V(e?Z:h(t)),n=[];return I(a,(function(t){!f(Y,t)||e&&!f(G,t)||n.push(Y[t])})),n};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),a=function(t){this===G&&a.call(Z,t),f(this,Q)&&f(this[Q],e)&&(this[Q][e]=!1),it(this,e,m(1,t))};return s&&rt&&it(G,e,{configurable:!0,set:a}),ot(e,t)},k(H[q],"toString",(function(){return B(this).tag})),k(H,"withoutSetter",(function(t){return ot($(t),t)})),D.f=ft,P.f=ct,C.f=dt,w.f=_.f=pt,j.f=bt,N.f=function(t){return ot(M(t),t)},s&&(U(H[q],"description",{configurable:!0,get:function(){return B(this).description}}),o||k(G,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),I(O(at),(function(t){J(t)})),n({target:W,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var a=H(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(g(t))}}),K){var gt=!c||u((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,a){var n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),r[1]=e,K.apply(null,r)}})}H[q][z]||S(H[q],z,H[q].valueOf),F(H,W),L[Q]=!0},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),i=a("56ef"),o=a("fc6a"),s=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=o(t),r=s.f,l=i(n),u={},f=0;while(l.length>f)a=r(n,e=l[f++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),i=a("fc6a"),o=a("06cf").f,s=a("83ab"),c=r((function(){o(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,a){var n=a("b622");e.f=n}}]);
//# sourceMappingURL=chunk-47f625cd.5554cccc.js.map