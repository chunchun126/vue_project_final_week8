(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707b68ba"],{4510:function(t,s,a){"use strict";var e=a("55f0"),i=a.n(e);i.a},"55f0":function(t,s,a){},aa92:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg-main",staticStyle:{height:"100vh"}},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container py-4"},[a("form",{staticClass:"formLogin needs-validation",attrs:{novalidate:""},on:{submit:function(s){return s.preventDefault(),t.logIn(s)}}},[a("h1",{staticClass:"loginTitle h4 text-center mb-3"},[t._v("請先登入")]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"InputEmail1",placeholder:"Email address",required:""},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("請輸入信箱")])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"InputPassword1",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("請輸入密碼")])]),a("button",{staticClass:"btn btn-primary btn-sm btn-block mb-3",attrs:{type:"submit"}},[t._v("登入")])])])],1)},i=[],o=(a("99af"),{data:function(){return{user:{email:"",password:""},isLoading:!1}},methods:{logIn:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/auth/login");this.$http.post(s,this.user).then((function(s){t.$bus.$emit("message:push","登入成功","success"),t.isLoading=!1;var a=s.data.expired,e=s.data.token;document.cookie="myToken=".concat(e,";expires=").concat(new Date(1e3*a),";"),console.log("寫入 token ".concat(e)),t.$router.push("/admin/products")})).catch((function(s){t.isLoading=!1,console.log(s.response),t.$router.push("/login")}))}}}),n=o,r=(a("4510"),a("2877")),c=Object(r["a"])(n,e,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-707b68ba.64e9bb7f.js.map