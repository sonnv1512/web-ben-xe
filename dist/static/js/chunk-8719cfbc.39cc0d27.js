(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8719cfbc"],{"2f2d":function(e,t,s){},"4c6e":function(e,t,s){"use strict";s("c881")},"87de":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signup-container"},[s("el-form",{ref:"signupForm",staticClass:"signup-form",attrs:{model:e.signupForm,rules:e.signupRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v(e._s(e.$t("signup.title")))])]),s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{ref:"username",staticClass:"form-input",attrs:{name:"username",type:"text",tabindex:"1"},model:{value:e.signupForm.username,callback:function(t){e.$set(e.signupForm,"username","string"===typeof t?t.trim():t)},expression:"signupForm.username"}}),s("label",{staticClass:"custom-placeholder"},[e._v(e._s(e.$t("signup.userName")))])],1),s("el-form-item",{attrs:{prop:"fullname"}},[s("el-input",{ref:"fullname",staticClass:"form-input",attrs:{name:"fullname",type:"text",tabindex:"2"},model:{value:e.signupForm.fullname,callback:function(t){e.$set(e.signupForm,"fullname",t)},expression:"signupForm.fullname"}}),s("label",{staticClass:"custom-placeholder"},[e._v(e._s(e.$t("signup.fullName")))])],1),s("el-form-item",{attrs:{prop:"email"}},[s("el-input",{ref:"email",staticClass:"form-input",attrs:{name:"email",type:"text",tabindex:"3"},model:{value:e.signupForm.email,callback:function(t){e.$set(e.signupForm,"email","string"===typeof t?t.trim():t)},expression:"signupForm.email"}}),s("label",{staticClass:"custom-placeholder"},[e._v(e._s(e.$t("signup.email")))])],1),s("el-form-item",{attrs:{prop:"phoneNumber"}},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col",staticStyle:{"padding-right":"8px"}},[s("el-input",{ref:"phoneNumber",staticClass:"form-input",attrs:{name:"phoneNumber",type:"number",tabindex:"4"},model:{value:e.signupForm.phoneNumber,callback:function(t){e.$set(e.signupForm,"phoneNumber","string"===typeof t?t.trim():t)},expression:"signupForm.phoneNumber"}}),s("label",{staticClass:"custom-placeholder"},[e._v(e._s(e.$t("signup.phoneNumber")))])],1),s("div",{staticClass:"col-auto"},[s("el-button",{attrs:{id:"btn-send-otp-code",loading:e.loadingSend},on:{click:e.sendOtp}},[s("span",[e._v(e._s(e.$t("signup.btnSend")))]),s("i",{staticClass:"el-icon-s-promotion"})])],1)])]),s("el-form-item",{attrs:{prop:"otp"}},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col",staticStyle:{"padding-right":"8px"}},[s("el-input",{ref:"otp",staticClass:"form-input",attrs:{name:"otp",type:"number",tabindex:"4",disabled:!e.isSendOtp},model:{value:e.signupForm.otp,callback:function(t){e.$set(e.signupForm,"otp","string"===typeof t?t.trim():t)},expression:"signupForm.otp"}}),s("label",{staticClass:"custom-placeholder"},[e._v(e._s(e.$t("signup.otp")))])],1),s("div",{staticClass:"col-auto d-flex align-items-center"},[e.isConfirmOtp?s("span",{staticClass:"checkmark"},[s("div",{staticClass:"checkmark_circle"}),s("div",{staticClass:"checkmark_stem"}),s("div",{staticClass:"checkmark_kick"})]):s("el-button",{staticClass:"btn-verify-otp",attrs:{type:"primary",loading:e.loadingConfirm,disabled:!e.isSendOtp},on:{click:e.verifyOtp}},[s("span",[e._v(e._s(e.$t("signup.btnVerify")))]),s("svg",{staticStyle:{fill:"white"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"}})])])],1)])]),s("el-form-item",{staticClass:"mb-0",attrs:{prop:"password"}},[s("el-input",{key:e.passwordType,ref:"password",staticClass:"form-input",attrs:{type:e.passwordType,name:"password",tabindex:"5","auto-complete":"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSignup(t)}},model:{value:e.signupForm.password,callback:function(t){e.$set(e.signupForm,"password",t)},expression:"signupForm.password"}}),s("label",{staticClass:"custom-placeholder"},[e._v(e._s(e.$t("signup.password")))]),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),s("div",{staticClass:"row no-gutters align-items-center mt-4"},[s("div",{staticClass:"col-auto"},[s("el-button",{staticClass:"btn-sign-in",attrs:{loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleSignup(t)}}},[e._v(" "+e._s(e.$t("signup.btnSignup"))+" "),s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M5.40995 21.75C4.28995 21.75 3.57995 21.37 3.12995 20.92C2.24995 20.04 1.62995 18.17 3.60995 14.2L4.47995 12.47C4.58995 12.24 4.58995 11.76 4.47995 11.53L3.60995 9.80002C1.61995 5.83002 2.24995 3.95002 3.12995 3.08002C3.99995 2.20002 5.87995 1.57002 9.83995 3.56002L18.3999 7.84002C20.5299 8.90002 21.6999 10.38 21.6999 12C21.6999 13.62 20.5299 15.1 18.4099 16.16L9.84995 20.44C7.90995 21.41 6.46995 21.75 5.40995 21.75ZM5.40995 3.75002C4.86995 3.75002 4.44995 3.88002 4.18995 4.14002C3.45995 4.86002 3.74995 6.73002 4.94995 9.12002L5.81995 10.86C6.13995 11.51 6.13995 12.49 5.81995 13.14L4.94995 14.87C3.74995 17.27 3.45995 19.13 4.18995 19.85C4.90995 20.58 6.77995 20.29 9.17995 19.09L17.7399 14.81C19.3099 14.03 20.1999 13 20.1999 11.99C20.1999 10.98 19.2999 9.95002 17.7299 9.17002L9.16995 4.90002C7.64995 4.14002 6.33995 3.75002 5.40995 3.75002Z",fill:"white"}}),s("path",{attrs:{d:"M10.8399 12.75H5.43994C5.02994 12.75 4.68994 12.41 4.68994 12C4.68994 11.59 5.02994 11.25 5.43994 11.25H10.8399C11.2499 11.25 11.5899 11.59 11.5899 12C11.5899 12.41 11.2499 12.75 10.8399 12.75Z",fill:"white"}})])])],1),s("div",{staticClass:"col text-right"},[s("div",{staticClass:"have-account"},[s("span",[e._v(e._s(e.$t("signup.haveAccount.label"))+" ")]),s("a",{staticClass:"btn-login-now",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v(e._s(e.$t("signup.haveAccount.btnLogin")))])])])])],1)],1)},i=[],a=(s("ac1f"),s("00b4"),s("4d63"),s("2c3e"),s("25f0"),s("2591")),r={data:function(){var e=this,t=function(t,s,n){s.length<6||s.length>20?n(new Error(e.$t("message.signup.limitUsername"))):n()},s=function(t,s,n){s.length<6?n(new Error(e.$t("message.signup.limitPassword"))):n()},n=function(t,s,n){var i=/(?:(?![0-9A-Z_a-z\xC0-\xC3\xC8-\xCA\xCC\xCD\xD2-\xD5\xD9\xDA\xDD\xE0-\xE3\xE8-\xEA\xEC\xED\xF2-\xF5\xF9\xFA\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0-\u1EBD\u1EC0-\u1EF9])[\s\S])/;s.length<=0||!i.test(s)?n(new Error(e.$t("message.signup.fullNameCorrect"))):n()},i=function(t,s,n){var i=/(0[3|5|7|8|9])+([0-9]{8})\b/;s.length<=0||!i.test(s)?n(new Error(e.$t("message.signup.phoneNumberCorrect"))):n()},a=function(t,s,n){var i=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;s.length<=0||!i.test(s)?n(new Error(e.$t("message.signup.emailCorrect"))):n()},r=function(t,s,n){s.length<=0?n(new Error(e.$t("message.signup.otpIncorrect"))):n()};return{signupForm:{username:"",fullname:"",email:"",phoneNumber:"",password:"",otp:""},signupRules:{username:[{required:!0,trigger:["blur","change"],validator:t}],fullname:[{required:!0,trigger:["blur","change"],validator:n}],phoneNumber:[{required:!0,trigger:["blur","change"],validator:i}],email:[{required:!0,trigger:["blur","change"],validator:a}],password:[{required:!0,trigger:["blur","change"],validator:s}],otp:[{required:!0,trigger:["blur","change"],validator:r}]},passwordType:"password",loading:!1,loadingSend:!1,loadingConfirm:!1,isSendOtp:!1,isConfirmOtp:!1}},created:function(){this.renderRecaptcha()},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleSignup:function(){var e=this;this.$refs.signupForm.validate((function(t){return t?e.isConfirmOtp?(e.loading=!0,void e.$store.dispatch("user/signup",e.signupForm).then((function(){e.$message.success(e.$t("message.signup.signupSuccessful")),e.$router.push({name:"Login"}),e.loading=!1})).catch((function(t){e.loading=!1,console.log(t),e.$message.error(t.message?t.message:e.$t("message.common.undefinedError"))}))):(e.$message.error(e.$t("message.signup.confirmOtpError")),!1):(console.log("error submit!!"),!1)}))},handleLogin:function(){window.location.href="/".concat(this.$i18n.locale,"/login")},renderRecaptcha:function(){setTimeout((function(){window.recaptchaVerifier=new a["a"].auth.RecaptchaVerifier("btn-send-otp-code",{size:"invisible",callback:function(e){},"expired-callback":function(){}})}),1e3)},sendOtp:function(){var e=this,t=new RegExp(/(0[3|5|7|8|9])+([0-9]{8})\b/);if(this.signupForm.phoneNumber&&t.test(this.signupForm.phoneNumber)){e.loadingSend=!0;var s="+84",n=this.signupForm.phoneNumber.substring(1),i=s+n,r=window.recaptchaVerifier;a["a"].auth().signInWithPhoneNumber(i,r).then((function(t){window.confirmationResult=t,e.$message.success(e.$t("message.signup.sendOtpSuccess")),e.loadingSend=!1,e.isSendOtp=!0})).catch((function(t){console.log(t),e.$message.error(e.$t("message.signup.sendOtpError")),e.loadingSend=!1,window.grecaptcha.reset(),e.isSendOtp=!1}))}else e.$message.error(e.$t("message.signup.phoneNumberCorrect"))},verifyOtp:function(){var e=this;if(this.signupForm.otp){e.loadingConfirm=!0;var t=e.signupForm.otp;window.confirmationResult.confirm(t).then((function(t){e.loadingConfirm=!1,e.isConfirmOtp=!0})).catch((function(t){console.log(t),e.$message.error(e.$t("message.signup.confirmOtpError")),e.loadingConfirm=!1,e.isConfirmOtp=!1}))}else e.$message.error(e.$t("message.signup.otpIncorrect"))}}},o=r,l=(s("4c6e"),s("c467"),s("2877")),u=Object(l["a"])(o,n,i,!1,null,"e8ceb386",null);t["default"]=u.exports},c467:function(e,t,s){"use strict";s("2f2d")},c881:function(e,t,s){}}]);