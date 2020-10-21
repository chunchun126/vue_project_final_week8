(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49cc8728"],{"057f":function(t,e,r){var a=r("fc6a"),s=r("241c").f,n={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return s(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==n.call(t)?i(t):s(a(t))}},"35cf":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container pt-md-5 mt-5"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),r("div",{staticClass:"mb-5 row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[r("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("validation-provider",{staticClass:"form-group",attrs:{rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"name"}},[t._v("收件人姓名 "),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control input-style",class:s,attrs:{type:"text",id:"name",placeholder:"請輸入收件人姓名",name:"收件人姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),r("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("validation-provider",{staticClass:"form-group",attrs:{rules:"required|min:8",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"tel"}},[t._v("電話 "),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control input-style",class:s,attrs:{type:"tel",id:"tel",placeholder:"請輸入收件人電話",name:"電話"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),r("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("validation-provider",{staticClass:"form-group",attrs:{rules:"required|email",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"email"}},[t._v("Email "),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control input-style",class:s,attrs:{type:"email",id:"email",placeholder:"請輸入收件人Email",name:"信箱"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),r("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"payment"}},[t._v("購買方式 "),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control input-style",attrs:{id:"payment",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方式")]),r("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),r("option",{attrs:{value:"ATM"}},[t._v("ATM")]),r("option",{attrs:{value:"CVS"}},[t._v("CVS")]),r("option",{attrs:{value:"Barcode"}},[t._v("Barcode")]),r("option",{attrs:{value:"Credit"}},[t._v("Credit")]),r("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),r("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])])])])]),r("div",{staticClass:"form-group"},[r("validation-provider",{staticClass:"form-group",attrs:{rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"address"}},[t._v("地址 "),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control input-style",class:s,attrs:{type:"text",id:"address",placeholder:"請輸入地址",name:"地址"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),r("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"message"}},[t._v("留言")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control input-style",attrs:{id:"message",placeholder:"有什麼想告訴我們的嗎？",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("router-link",{staticClass:"btn btn-sm btn-outline-primary rounded-0 d-block btn-next",attrs:{to:"/cart"}},[t._v("回上一步 ")])],1),r("div",{staticClass:"col-6"},[r("button",{staticClass:"btn btn-sm btn-primary rounded-0 btn-block btn-next",attrs:{type:"submit",disabled:a}},[t._v("送出訂單 ")])])])])]}}])})],1)])],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"step list-unstyled d-flex text-center\n    justify-content-center pb-5 text-primary"},[r("li",{staticClass:"pb-3"},[r("p",[t._v("購物袋")]),r("div",{staticClass:"step-line"}),r("div",{staticClass:"step-sign solid"})]),r("li",[r("p",[t._v("填寫訂單")]),r("div",{staticClass:"step-line bg-secondary"}),r("div",{staticClass:"step-sign solid"})]),r("li",[r("p",{staticClass:"text-muted"},[t._v("確認訂單")]),r("div",{staticClass:"step-line bg-secondary"}),r("div",{staticClass:"step-sign",staticStyle:{border:"solid 2px gray"}})]),r("li",[r("p",{staticClass:"text-muted"},[t._v("交易成功")]),r("div",{staticClass:"step-sign",staticStyle:{border:"solid 2px gray"}})])])}],n=(r("99af"),r("5530")),o={name:"Orders",data:function(){return{form:{name:"",email:"",tel:"",address:"",payment:"",message:""},coupon:{},isLoading:!1}},methods:{createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("8997512c-2d60-40a2-b4a3-5240bcc586d0","/ec/orders"),r=Object(n["a"])({},this.form);this.$http.post(e,r).then((function(e){t.$router.push("/check");var r=e.data.data.id;t.$bus.$emit("form",r),t.isLoading=!1})).catch((function(){t.$bus.$emit("message:push","出現錯誤","danger"),t.isLoading=!1}))}}},i=o,c=r("2877"),l=Object(c["a"])(i,a,s,!1,null,null,null);e["default"]=l.exports},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var a=r("428f"),s=r("5135"),n=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});s(e,t)||o(e,t,{value:n.f(t)})}},"99af":function(t,e,r){"use strict";var a=r("23e7"),s=r("d039"),n=r("e8b5"),o=r("861d"),i=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),f=r("1dde"),d=r("b622"),p=r("2d00"),m=d("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=f("concat"),h=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:n(t)},C=!g||!y;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,r,a,s,n,o=i(this),f=u(o,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?o:arguments[e],h(n)){if(s=c(n.length),d+s>v)throw TypeError(b);for(r=0;r<s;r++,d++)r in n&&l(f,d,n[r])}else{if(d>=v)throw TypeError(b);l(f,d++,n)}return f.length=d,f}})},a4d3:function(t,e,r){"use strict";var a=r("23e7"),s=r("da84"),n=r("d066"),o=r("c430"),i=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),f=r("5135"),d=r("e8b5"),p=r("861d"),m=r("825a"),v=r("7b0b"),b=r("fc6a"),g=r("c04e"),y=r("5c6c"),h=r("7c73"),C=r("df75"),w=r("241c"),O=r("057f"),_=r("7418"),x=r("06cf"),j=r("9bf2"),P=r("d1e7"),S=r("9112"),k=r("6eeb"),$=r("5692"),E=r("f772"),N=r("d012"),A=r("90e3"),D=r("b622"),T=r("e538"),L=r("746f"),q=r("d44e"),M=r("69f3"),J=r("b727").forEach,W=E("hidden"),B="Symbol",F="prototype",G=D("toPrimitive"),V=M.set,I=M.getterFor(B),Q=Object[F],z=s.Symbol,H=n("JSON","stringify"),K=x.f,R=j.f,U=O.f,X=P.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),at=s.QObject,st=!at||!at[F]||!at[F].findChild,nt=i&&u((function(){return 7!=h(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=K(Q,e);a&&delete Q[e],R(t,e,r),a&&t!==Q&&R(Q,e,a)}:R,ot=function(t,e){var r=Y[t]=h(z[F]);return V(r,{type:B,tag:t,description:e}),i||(r.description=e),r},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,r){t===Q&&ct(Z,e,r),m(t);var a=g(e,!0);return m(r),f(Y,a)?(r.enumerable?(f(t,W)&&t[W][a]&&(t[W][a]=!1),r=h(r,{enumerable:y(0,!1)})):(f(t,W)||R(t,W,y(1,{})),t[W][a]=!0),nt(t,a,r)):R(t,a,r)},lt=function(t,e){m(t);var r=b(e),a=C(r).concat(mt(r));return J(a,(function(e){i&&!ft.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?h(t):lt(h(t),e)},ft=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===Q&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,W)&&this[W][e])||r)},dt=function(t,e){var r=b(t),a=g(e,!0);if(r!==Q||!f(Y,a)||f(Z,a)){var s=K(r,a);return!s||!f(Y,a)||f(r,W)&&r[W][a]||(s.enumerable=!0),s}},pt=function(t){var e=U(b(t)),r=[];return J(e,(function(t){f(Y,t)||f(N,t)||r.push(t)})),r},mt=function(t){var e=t===Q,r=U(e?Z:b(t)),a=[];return J(r,(function(t){!f(Y,t)||e&&!f(Q,t)||a.push(Y[t])})),a};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===Q&&r.call(Z,t),f(this,W)&&f(this[W],e)&&(this[W][e]=!1),nt(this,e,y(1,t))};return i&&st&&nt(Q,e,{configurable:!0,set:r}),ot(e,t)},k(z[F],"toString",(function(){return I(this).tag})),k(z,"withoutSetter",(function(t){return ot(A(t),t)})),P.f=ft,j.f=ct,x.f=dt,w.f=O.f=pt,_.f=mt,T.f=function(t){return ot(D(t),t)},i&&(R(z[F],"description",{configurable:!0,get:function(){return I(this).description}}),o||k(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),J(C(rt),(function(t){L(t)})),a({target:B,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!i},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),a({target:"Object",stat:!0,forced:u((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),H){var vt=!c||u((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));a({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var a,s=[t],n=1;while(arguments.length>n)s.push(arguments[n++]);if(a=e,(p(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!it(e))return e}),s[1]=e,H.apply(null,s)}})}z[F][G]||S(z[F],G,z[F].valueOf),q(z,B),N[W]=!0},dbb4:function(t,e,r){var a=r("23e7"),s=r("83ab"),n=r("56ef"),o=r("fc6a"),i=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,r,a=o(t),s=i.f,l=n(a),u={},f=0;while(l.length>f)r=s(a,e=l[f++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var a=r("23e7"),s=r("d039"),n=r("fc6a"),o=r("06cf").f,i=r("83ab"),c=s((function(){o(1)})),l=!i||c;a({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o(n(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a}}]);
//# sourceMappingURL=chunk-49cc8728.71a66c0c.js.map