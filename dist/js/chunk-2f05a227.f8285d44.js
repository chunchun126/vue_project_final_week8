(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f05a227"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(r(t))}},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),a=n("7dd0"),o="String Iterator",c=i.set,s=i.getterFor(o);a(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),a=n("9bdd"),o=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,f,d,l,v,p=i(t),g="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,y=void 0!==b,m=u(p),x=0;if(y&&(b=r(b,h>2?arguments[2]:void 0,2)),void 0==m||g==Array&&o(m))for(e=c(p.length),n=new g(e);e>x;x++)v=y?b(p[x],x):p[x],s(n,x,v);else for(d=m.call(p),l=d.next,n=new g;!(f=l.call(d)).done;x++)v=y?a(d,b,[f.value,x],!0):f.value,s(n,x,v);return n.length=x,n}},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),c=n("19aa"),s=n("2266"),u=n("7dd0"),f=n("2626"),d=n("83ab"),l=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var f=t((function(t,r){c(t,f,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&s(r,t[u],t,n)})),v=g(e),h=function(t,e,n){var r,i,a=v(t),o=b(t,e);return o?o.value=n:(a.last=o={index:i=l(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),d?a.size++:t.size++,"F"!==i&&(a.index[i]=o)),t},b=function(t,e){var n,r=v(t),i=l(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return a(f.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=b(e,t);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),a(f.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),d&&r(f.prototype,"size",{get:function(){return v(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=g(e),a=g(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("f183"),s=n("2266"),u=n("19aa"),f=n("861d"),d=n("d039"),l=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),b=g?"set":"add",y=i[t],m=y&&y.prototype,x=y,w={},S=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof y||!(h||m.forEach&&!d((function(){(new y).entries().next()})))))x=n.getConstructor(e,t,g,b),c.REQUIRED=!0;else if(a(t,!0)){var C=new x,_=C[b](h?{}:-0,1)!=C,O=d((function(){C.has(1)})),k=l((function(t){new y(t)})),j=!h&&d((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(x=e((function(e,n){u(e,x,t);var r=p(new y,e,x);return void 0!=n&&s(n,r[b],r,g),r})),x.prototype=m,m.constructor=x),(O||j)&&(S("delete"),S("has"),g&&S("get")),(j||_)&&S(b),h&&m.clear&&delete m.clear}return w[t]=x,r({global:!0,forced:x!=y},w),v(x,t),h||n.setStrong(x,t,g),x}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&i(t,o),t}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},"81b1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("div",{staticClass:"container mt-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2 d-none d-lg-block"},[n("div",{},[n("div",{staticClass:"list-group list-group-flush"},t._l(t.category.list,(function(e,r){return n("a",{key:r,staticClass:"list-group-item list-group-item-action p-2 cursor",class:{active:t.categoryIndex===r},on:{click:function(n){return n.preventDefault(),t.categoryData(e,r)}}},["全部產品"===e?n("p",{staticClass:"p-0 m-0"},[t._v(" 全部產品"),n("small",{staticClass:"ml-2 text-muted"},[t._v("All ")])]):t._e(),"Earring"===e?n("p",{staticClass:"p-0 m-0"},[t._v(" 耳環"),n("small",{staticClass:"ml-2 text-muted"},[t._v(t._s(e)+" ")])]):t._e(),"Necklace"===e?n("p",{staticClass:"p-0 m-0"},[t._v(" 項鍊"),n("small",{staticClass:"ml-2 text-muted"},[t._v(t._s(e)+" ")])]):t._e(),"Ring"===e?n("p",{staticClass:"p-0 m-0"},[t._v(" 戒指"),n("small",{staticClass:"ml-2 text-muted"},[t._v(t._s(e)+" ")])]):t._e()])})),0)])]),n("div",{staticClass:"col-md-10"},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"tab-pane active",attrs:{id:"all",role:"tabpanel"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.category.data,(function(e){return n("div",{key:e.id,staticClass:"col-md-4 mb-3 mb-md-4"},[n("div",{staticClass:"card rounded-0 border-0 text-center"},[n("a",{staticClass:"d-block item-hover",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.goPage(e)}}},[t._m(0,!0),n("div",{staticClass:"overflowHidden"},[n("div",{staticClass:"rounded-0 item-img img-fluid",staticStyle:{height:"250px"},style:"background-image: url("+e.imageUrl+")"})])]),n("div",{staticClass:"card-body p-2"},[n("h6",{staticClass:"font-weight-light product-title mb-0"},[t._v(t._s(e.title)+" "),n("small",{staticClass:"badge rounded-0 ml-1 mb-2 bg-main border-0",staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(e.category)+" ")])]),n("p",{staticClass:"card-text text-muted origin-price mb-1 d-none d-md-block"},[t._v(" 定價 NT$"+t._s(t._f("thousands")(e.origin_price))+" ")]),n("p",{staticClass:"card-text price mb-0 mb-md-1"},[n("small",{staticClass:"mr-2"},[t._v("優惠價")]),n("span",{staticClass:"h5"},[t._v("NT$"+t._s(t._f("thousands")(e.price)))])]),n("a",{staticClass:"btn btn-outline-secondary btn-sm rounded-0 w-100",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.addToCart(e.id)}}},[n("i",{staticClass:"fas fa-shopping-bag mr-1"}),n("small",[t._v("加入購物袋")])])])])])})),0)])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mask"},[n("div",{staticClass:"caption"},[t._v("查看更多")])])}],a=(n("99af"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("6b75"));function o(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return o(t)||c(t)||Object(s["a"])(t)||u()}var d={name:"Products",data:function(){return{hexAPI:{data:[]},products:[],pagination:{},isLoading:!1,category:{list:["全部產品"],data:[]},categoryIndex:0}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/products?paged=40")).then((function(n){t.isLoading=!1,e.hexAPI.data=n.data.data,e.pagination=n.data.meta.pagination,e.category.data=e.hexAPI.data,e.hexAPI.data.map((function(t){return e.category.list.push(t.category)})),e.category.list=f(new Set(e.category.list))})).catch((function(){t.isLoading=!1}))},goPage:function(t){this.$router.push("/product/".concat(t.id))},addToCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/shopping");this.isLoading=!0;var i={product:t,quantity:n};this.$http.post(r,i).then((function(){e.isLoading=!1,e.$bus.$emit("update-total"),alert("成功加到購物車。")})).catch((function(t){e.isLoading=!1,alert(t.response.data.errors[0])}))},categoryData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this;n.categoryIndex=e,n.category.data=[],"全部產品"===t?n.category.data=n.hexAPI.data:n.hexAPI.data.map((function(e){e.category===t&&n.category.data.push(e)}))}}},l=d,v=(n("b60a"),n("2877")),p=Object(v["a"])(l,r,i,!1,null,null,null);e["default"]=p.exports},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),d=n("5135"),l=n("e8b5"),v=n("861d"),p=n("825a"),g=n("7b0b"),h=n("fc6a"),b=n("c04e"),y=n("5c6c"),m=n("7c73"),x=n("df75"),w=n("241c"),S=n("057f"),C=n("7418"),_=n("06cf"),O=n("9bf2"),k=n("d1e7"),j=n("9112"),A=n("6eeb"),E=n("5692"),P=n("f772"),I=n("d012"),D=n("90e3"),z=n("b622"),$=n("e538"),F=n("746f"),L=n("d44e"),N=n("69f3"),R=n("b727").forEach,T=P("hidden"),U="Symbol",J="prototype",Q=z("toPrimitive"),M=N.set,W=N.getterFor(U),K=Object[J],q=i.Symbol,H=a("JSON","stringify"),B=_.f,G=O.f,V=S.f,X=k.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=i.QObject,it=!rt||!rt[J]||!rt[J].findChild,at=c&&f((function(){return 7!=m(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=B(K,e);r&&delete K[e],G(t,e,n),r&&t!==K&&G(K,e,r)}:G,ot=function(t,e){var n=Y[t]=m(q[J]);return M(n,{type:U,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===K&&st(Z,e,n),p(t);var r=b(e,!0);return p(n),d(Y,r)?(n.enumerable?(d(t,T)&&t[T][r]&&(t[T][r]=!1),n=m(n,{enumerable:y(0,!1)})):(d(t,T)||G(t,T,y(1,{})),t[T][r]=!0),at(t,r,n)):G(t,r,n)},ut=function(t,e){p(t);var n=h(e),r=x(n).concat(pt(n));return R(r,(function(e){c&&!dt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},dt=function(t){var e=b(t,!0),n=X.call(this,e);return!(this===K&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,T)&&this[T][e])||n)},lt=function(t,e){var n=h(t),r=b(e,!0);if(n!==K||!d(Y,r)||d(Z,r)){var i=B(n,r);return!i||!d(Y,r)||d(n,T)&&n[T][r]||(i.enumerable=!0),i}},vt=function(t){var e=V(h(t)),n=[];return R(e,(function(t){d(Y,t)||d(I,t)||n.push(t)})),n},pt=function(t){var e=t===K,n=V(e?Z:h(t)),r=[];return R(n,(function(t){!d(Y,t)||e&&!d(K,t)||r.push(Y[t])})),r};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),n=function(t){this===K&&n.call(Z,t),d(this,T)&&d(this[T],e)&&(this[T][e]=!1),at(this,e,y(1,t))};return c&&it&&at(K,e,{configurable:!0,set:n}),ot(e,t)},A(q[J],"toString",(function(){return W(this).tag})),A(q,"withoutSetter",(function(t){return ot(D(t),t)})),k.f=dt,O.f=st,_.f=lt,w.f=S.f=vt,C.f=pt,$.f=function(t){return ot(z(t),t)},c&&(G(q[J],"description",{configurable:!0,get:function(){return W(this).description}}),o||A(K,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),R(x(nt),(function(t){F(t)})),r({target:U,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(g(t))}}),H){var gt=!s||f((function(){var t=q();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(r=e,(v(e)||void 0!==t)&&!ct(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,H.apply(null,i)}})}q[J][Q]||j(q[J],Q,q[J].valueOf),L(q,U),I[T]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&i(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b60a:function(t,e,n){"use strict";var r=n("bdc6"),i=n.n(r);i.a},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bdc6:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),o=n("ae40"),c=a("map"),s=o("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("e260"),o=n("9112"),c=n("b622"),s=c("iterator"),u=c("toStringTag"),f=a.values;for(var d in i){var l=r[d],v=l&&l.prototype;if(v){if(v[s]!==f)try{o(v,s,f)}catch(g){v[s]=f}if(v[u]||o(v,u,d),i[d])for(var p in a)if(v[p]!==a[p])try{o(v,p,a[p])}catch(g){v[p]=a[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),o=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),f=a.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new f(t):void 0===t?f():f(t);return""===t&&(d[e]=!0),e};u(l,f);var v=l.prototype=f.prototype;v.constructor=l;var p=v.toString,g="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(o(d,t))return"";var n=g?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:l})}},e538:function(t,e,n){var r=n("b622");e.f=r},f183:function(t,e,n){var r=n("d012"),i=n("861d"),a=n("5135"),o=n("9bf2").f,c=n("90e3"),s=n("bb2f"),u=c("meta"),f=0,d=Object.isExtensible||function(){return!0},l=function(t){o(t,u,{value:{objectID:"O"+ ++f,weakData:{}}})},v=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,u)){if(!d(t))return"F";if(!e)return"E";l(t)}return t[u].objectID},p=function(t,e){if(!a(t,u)){if(!d(t))return!0;if(!e)return!1;l(t)}return t[u].weakData},g=function(t){return s&&h.REQUIRED&&d(t)&&!a(t,u)&&l(t),t},h=t.exports={REQUIRED:!1,fastKey:v,getWeakData:p,onFreeze:g};r[u]=!0},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),a=n("e8b5"),o=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),f=n("b622"),d=n("1dde"),l=n("ae40"),v=d("slice"),p=l("slice",{ACCESSORS:!0,0:0,1:2}),g=f("species"),h=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var n,r,f,d=s(this),l=c(d.length),v=o(t,l),p=o(void 0===e?l:e,l);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(d,v,p);for(r=new(void 0===n?Array:n)(b(p-v,0)),f=0;v<p;v++,f++)v in d&&u(r,f,d[v]);return r.length=f,r}})}}]);
//# sourceMappingURL=chunk-2f05a227.f8285d44.js.map