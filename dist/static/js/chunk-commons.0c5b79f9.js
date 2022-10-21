(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{"1bba":function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.labelFormCustomerActive===t.getIndexForm?o("el-form",{ref:"customerInfo",staticClass:"customer-info-form pt-3",attrs:{id:"form-customer-info",model:t.customerInfo,rules:t.formCustomerRules,"auto-complete":"on","label-position":"left"},on:{validate:t.validateForm}},[o("el-form-item",{attrs:{prop:"fullname"}},[o("el-input",{ref:"fullname",staticClass:"form-input",attrs:{name:"fullname",type:"text",tabindex:"1"},model:{value:t.customerInfo.fullname,callback:function(e){t.$set(t.customerInfo,"fullname",e)},expression:"customerInfo.fullname"}}),o("label",{staticClass:"custom-placeholder"},[t._v(t._s(t.$t("book.formCustomerInfo.fullName"))+" "),o("span",{staticStyle:{color:"red"}},[t._v("*")])])],1),o("el-form-item",{attrs:{prop:"phoneNumber"}},[o("el-input",{ref:"phoneNumber",staticClass:"form-input",attrs:{name:"phoneNumber",type:"text",tabindex:"2"},model:{value:t.customerInfo.phoneNumber,callback:function(e){t.$set(t.customerInfo,"phoneNumber",e)},expression:"customerInfo.phoneNumber"}}),o("label",{staticClass:"custom-placeholder"},[t._v(t._s(t.$t("book.formCustomerInfo.phoneNumber"))+" "),o("span",{staticStyle:{color:"red"}},[t._v("*")])])],1),o("el-form-item",{attrs:{prop:"email"}},[o("el-input",{ref:"email",staticClass:"form-input",attrs:{name:"email",type:"text",tabindex:"3"},model:{value:t.customerInfo.email,callback:function(e){t.$set(t.customerInfo,"email",e)},expression:"customerInfo.email"}}),o("label",{staticClass:"custom-placeholder"},[t._v(t._s(t.$t("book.formCustomerInfo.email"))+" "),o("span",{staticStyle:{color:"red"}},[t._v("*")])])],1),o("el-form-item",{attrs:{prop:"sex"}},[o("label",{staticStyle:{"margin-right":"8px"}},[t._v(t._s(t.$t("book.formCustomerInfo.sex.label"))+" "),o("span",{staticStyle:{color:"red"}},[t._v("*")])]),o("el-radio-group",{attrs:{tabindex:"5"},model:{value:t.customerInfo.sex,callback:function(e){t.$set(t.customerInfo,"sex",e)},expression:"customerInfo.sex"}},[o("el-radio",{attrs:{label:1}},[t._v(t._s(t.$t("book.formCustomerInfo.sex.male")))]),o("el-radio",{attrs:{label:2}},[t._v(t._s(t.$t("book.formCustomerInfo.sex.female")))])],1)],1),"OrderPage"===t.$route.name||"CreateTrip"===t.$route.name?o("div",{staticClass:"row no-gutters",staticStyle:{gap:"16px"}},[o("div",{staticClass:"col"},[o("el-form-item",{attrs:{prop:"promotionCode"}},[o("el-input",{ref:"promotionCode",staticClass:"form-input",attrs:{name:"promotionCode",type:"text",tabindex:"6",disabled:!(!t.promotionResponse||t.promotionResponse.tripId!==t.tripId)},on:{change:t.handleValueChange},model:{value:t.customerInfo.promotionCode,callback:function(e){t.$set(t.customerInfo,"promotionCode",e)},expression:"customerInfo.promotionCode"}}),o("label",{staticClass:"custom-placeholder"},[t._v(t._s(t.$t("book.formCustomerInfo.promotionCode")))])],1)],1),o("div",{staticClass:"col-auto"},[!t.promotionResponse||t.promotionResponse&&t.promotionResponse.tripId!==t.tripId?o("el-button",{staticClass:"btn-confirm-promotion",attrs:{loading:t.loadingConfirmPromotion},on:{click:function(e){return t.confirmPromotion()}}},[t._v(" "+t._s(t.$t("book.formCustomerInfo.btnConfirm"))+" ")]):o("el-button",{staticClass:"btn-remove-promotion",attrs:{loading:t.loadingConfirmPromotion},on:{click:function(e){return t.removePromotion()}}},[t._v(" "+t._s(t.$t("book.formCustomerInfo.btnRemove"))+" ")])],1)]):t._e(),o("span",{staticClass:"text-note"},[t._v(t._s(t.promotionResponse&&t.promotionResponse.tripId===t.tripId&&t.promotionResponse.note?t.promotionResponse.note:""))]),t.$route.params.tripId&&t.$route.params.referralUser?o("el-form-item",{staticStyle:{"margin-block":"1rem"},attrs:{prop:"referralUser"}},[o("el-input",{ref:"referralUser",staticClass:"form-input",attrs:{name:"referralUser",type:"text",disabled:""},model:{value:t.customerInfo.referralUser,callback:function(e){t.$set(t.customerInfo,"referralUser",e)},expression:"customerInfo.referralUser"}}),o("label",{staticClass:"custom-placeholder"},[t._v(t._s(t.$t("book.formCustomerInfo.referralUser")))])],1):t._e(),o("el-form-item",["OrderPage"===t.$route.name||"CreateTrip"===t.$route.name?o("el-checkbox",{attrs:{value:t.fillAllCustomer},on:{change:t.handleFillAll}},[t._v(" "+t._s(t.$t("book.formCustomerInfo.btnFillAll"))+" ")]):t._e()],1)],1):t._e()},s=[],i=o("5530"),n=(o("a9e3"),o("ac1f"),o("00b4"),o("a434"),o("2f62")),a={props:{labelFormCustomerActive:{type:[Number,String,Array],default:1},value:{type:Array,default:null},tripId:{type:[Number,String,Array],default:0},passengerInfo:{type:Object,default:null}},data:function(){var t=this,e=function(e,o,r){o.length<=0?r(new Error(t.$t("message.book.validate.fullName"))):r()},o=function(e,o,r){var s=/(84|0[3|5|7|8|9])+([0-9]{8})\b/;o.length<=0||!s.test(o)?r(new Error(t.$t("message.book.validate.phoneNumber"))):r()},r=function(e,o,r){var s=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;o.length<=0||!s.test(o)?r(new Error(t.$t("message.book.validate.email"))):r()};return{formCustomerRules:{fullname:[{required:!0,trigger:["blur","change"],validator:e}],phoneNumber:[{required:!0,trigger:["blur","change"],validator:o}],email:[{required:!0,trigger:["blur","change"],validator:r}]},customerInfo:{ticketId:null,fullname:"",phoneNumber:"",email:"",sex:1,referralUser:this.$route.params.referralUser||"",promotionCode:""},sexLabel:{1:"MALE",2:"FEMALE"},loadingConfirmPromotion:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(n["c"])(["promotionResponse","userInfo","validate","fillAllCustomer","firstCustomerInfo"])),{},{getIndexForm:function(){return this.$vnode.key}}),watch:{fillAllCustomer:function(t){t?(this.validate.length>0&&this.$store.dispatch("trip/validateInfo",[]),this.getIndexForm>1&&(this.customerInfo.fullname=this.firstCustomerInfo.fullname,this.customerInfo.phoneNumber=this.firstCustomerInfo.phoneNumber,this.customerInfo.email=this.firstCustomerInfo.email,this.customerInfo.sex=this.firstCustomerInfo.sex)):this.getIndexForm>1&&(this.customerInfo.fullname="",this.customerInfo.phoneNumber="",this.customerInfo.email="",this.customerInfo.sex=1)},"customerInfo.fullname":function(t,e){t&&this.fillAllCustomer&&(this.firstCustomerInfo.fullname=t)},"customerInfo.phoneNumber":function(t,e){t&&this.fillAllCustomer&&(this.firstCustomerInfo.phoneNumber=t)},"customerInfo.email":function(t,e){t&&this.fillAllCustomer&&(this.firstCustomerInfo.email=t)},"customerInfo.sex":function(t,e){t&&this.fillAllCustomer&&(this.firstCustomerInfo.sex=t)},"customerInfo.promotionCode":function(t){this.firstCustomerInfo.promotionCode=t},"firstCustomerInfo.promotionCode":function(t){this.customerInfo.promotionCode=t}},mounted:function(){this.setDataCustomerInfo()},methods:{setDataCustomerInfo:function(){if(this.firstCustomerInfo&&this.firstCustomerInfo.promotionCode&&(this.customerInfo.promotionCode=this.firstCustomerInfo.promotionCode),1===this.getIndexForm){this.customerInfo.fullname=this.userInfo?this.userInfo.fullName:"",this.customerInfo.phoneNumber=this.userInfo?this.userInfo.phoneNumber:"",this.customerInfo.email=this.userInfo?this.userInfo.email:"";var t=this.customerInfo;this.$store.dispatch("trip/firstCustomerInfo",t)}else this.fillAllCustomer&&(this.customerInfo.fullname=this.firstCustomerInfo?this.firstCustomerInfo.fullname:"",this.customerInfo.phoneNumber=this.firstCustomerInfo?this.firstCustomerInfo.phoneNumber:"",this.customerInfo.email=this.firstCustomerInfo?this.firstCustomerInfo.email:"",this.customerInfo.sex=this.firstCustomerInfo?this.firstCustomerInfo.sex:"");this.passengerInfo&&(this.customerInfo.ticketId=this.passengerInfo.ticketId,this.customerInfo.fullname=this.passengerInfo.fullName,this.customerInfo.phoneNumber=this.passengerInfo.phoneNumber,this.customerInfo.email=this.passengerInfo.email,this.customerInfo.sex="MALE"===this.passengerInfo.sex?1:2)},validateForm:function(t,e,o){var r={field:t,valid:e,message:o,index:this.getIndexForm},s=this.validate;if(e){if(this.containsValidate(r,s)){var i=this.containsValidate(r,s),n=s.indexOf(i);n>-1&&s.splice(n,1)}}else this.containsValidate(r,s)||s.push(r);this.$store.dispatch("trip/validateInfo",s)},containsValidate:function(t,e){var o;for(o=0;o<e.length;o++)if(e[o].field===t.field&&e[o].index===t.index)return e[o];return null},handleFillAll:function(t){this.$store.dispatch("trip/fillAllCustomer",t)},handleValueChange:function(){},confirmPromotion:function(){var t=this;this.loadingConfirmPromotion=!0,this.$store.dispatch("promotion/getRespPromotion",{promotionCode:this.customerInfo.promotionCode,tripId:this.tripId}).then((function(e){t.loadingConfirmPromotion=!1,t.$message.success(t.$t("message.book.applyPromotion"))})).catch((function(e){t.loadingConfirmPromotion=!1,console.log(e),t.$message.error(e.message?e.message:t.$t("message.common.undefinedError"))}))},removePromotion:function(){this.customerInfo.promotionCode="",this.$store.dispatch("promotion/resetPromotionResp")}}},l=a,u=(o("d000"),o("6a07"),o("2877")),c=Object(u["a"])(l,r,s,!1,null,"16961556",null);e["a"]=c.exports},"4c16":function(t,e,o){},"66bf":function(t,e,o){"use strict";o("e45c")},"6a07":function(t,e,o){"use strict";o("9a1a")},"6cd6":function(t,e,o){},"79ec":function(t,e,o){},9358:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-100 box-search-trip"},[o("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleChangeTab},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[o("el-tab-pane",[o("span",{attrs:{slot:"label"},slot:"label"},[o("i",{staticClass:"icon-multi-user"},[o("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M8.34998 14.98999c1.5871 0 3.01208-.74658 3.948-1.90588C13.31311 13.8996 14.59961 14.39063 16 14.39063c1.39972 0 2.68567-.4906 3.70068-1.30536.93884 1.1579 2.36053 1.90472 3.94934 1.90472 2.79999 0 5.07996-2.28003 5.07996-5.08002s-2.27997-5.08002-5.07996-5.08002c-.90277 0-1.76837.24744-2.52271.68121C20.10187 3.7395 18.18994 2.54199 16 2.54199c-2.19116 0-4.10382 1.19879-5.12872 2.97211-.75317-.43384-1.61707-.68414-2.5213-.68414-2.79999 0-5.07996 2.28003-5.07996 5.08002S5.54999 14.98999 8.34998 14.98999zM23.65002 7.82996c1.14996 0 2.07996.93005 2.07996 2.08002 0 1.15002-.92999 2.08002-2.07996 2.08002-.99744 0-1.836-.7146-2.02631-1.67065.15784-.47742.25275-.98175.28339-1.50385C22.27466 8.21564 22.92969 7.82996 23.65002 7.82996zM16 5.54199c1.6123 0 2.9248 1.31201 2.9248 2.92432S17.6123 11.39063 16 11.39063s-2.92432-1.31201-2.92432-2.92432S14.3877 5.54199 16 5.54199zM8.34998 7.82996c.7207 0 1.37604.38593 1.74341.98633.0307.52148.12543 1.02533.28302 1.50226-.19.95648-1.02875 1.67145-2.02643 1.67145-1.14996 0-2.07996-.92999-2.07996-2.08002C6.27002 8.76001 7.20001 7.82996 8.34998 7.82996zM29.2002 17.28955c-1.48145-1.48291-3.45313-2.29932-5.5498-2.29932-1.33582 0-2.61566.34552-3.76404.97791C18.70105 15.42346 17.3877 15.11133 16 15.11133c-1.38757 0-2.70087.31213-3.88605.85681-1.14856-.63239-2.42841-.97791-3.76385-.97791-4.32861 0-7.8501 3.52148-7.8501 7.84961v2.83008c0 .82861.67139 1.5 1.5 1.5h4.65186v.78809c0 .82861.67139 1.5 1.5 1.5h15.69678c.82813 0 1.5-.67139 1.5-1.5v-.78809H30c.82813 0 1.5-.67139 1.5-1.5v-2.83008C31.5 20.74316 30.68359 18.77148 29.2002 17.28955zM3.5 22.83984c0-2.67432 2.17578-4.84961 4.8501-4.84961.28699 0 .5686.03064.84576.07916-1.51031 1.60724-2.45642 3.74353-2.5293 6.10052H3.5V22.83984zM22.34863 26.45801H9.65186v-1.99805c0-3.50049 2.84766-6.34863 6.34814-6.34863 3.50098 0 6.34863 2.84814 6.34863 6.34863V26.45801zM28.5 24.16992h-3.16608c-.07288-2.35706-1.01898-4.49335-2.52936-6.10059.27716-.04852.55872-.0791.84583-.0791 1.29492 0 2.5127.50439 3.42871 1.4209.91602.91553 1.4209 2.1333 1.4209 3.42871V24.16992z",fill:"0"===t.activeTab?"#ed196b":"#909399"}})])]),t._v("Tìm xe ghép")]),o("div",{staticClass:"row no-gutters align-items-center search-trip-wrapper"},[o("div",{staticClass:"col-md point",attrs:{id:"point-up"}},[o("select-point",{ref:"PointUp",staticClass:"w-100 select-point",attrs:{placeholder:"Điểm đi","prefix-icon":"icon-bus"},model:{value:t.requestFilter.startPoint,callback:function(e){t.$set(t.requestFilter,"startPoint",e)},expression:"requestFilter.startPoint"}})],1),o("div",{staticClass:"col-auto swap-section"},[o("span",{staticClass:"button-swap",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.swap()}}},[o("svg",{attrs:{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("g",{attrs:{filter:"url(#filter0_d)"}},[o("circle",{attrs:{cx:"32",cy:"30",r:"20",fill:"white"}})]),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.8333 25.4167C32.8333 24.2102 33.7102 23.3333 34.9167 23.3333C36.1231 23.3333 37 24.2102 37 25.4167V32.6208C35.7952 32.9793 34.9167 34.0954 34.9167 35.4167C34.9167 37.0275 36.2225 38.3333 37.8333 38.3333C39.4442 38.3333 40.75 37.0275 40.75 35.4167C40.75 34.0954 39.8715 32.9793 38.6667 32.6208V25.4167C38.6667 23.2897 37.0436 21.6667 34.9167 21.6667C32.7898 21.6667 31.1667 23.2898 31.1667 25.4167V34.5833C31.1667 35.7898 30.2898 36.6667 29.0833 36.6667C27.8769 36.6667 27 35.7898 27 34.5833V24.5118L27.6607 25.1726C27.9862 25.498 28.5138 25.498 28.8393 25.1726C29.1647 24.8471 29.1647 24.3195 28.8393 23.9941L26.756 21.9108C26.6052 21.76 26.3968 21.6667 26.1667 21.6667C26.0537 21.6667 25.9459 21.6891 25.8477 21.7299C25.7494 21.7706 25.6573 21.8308 25.5774 21.9107L23.4941 23.9941C23.1686 24.3195 23.1686 24.8471 23.4941 25.1726C23.8195 25.498 24.3472 25.498 24.6726 25.1726L25.3333 24.5118V34.5833C25.3333 36.7102 26.9564 38.3333 29.0833 38.3333C31.2102 38.3333 32.8333 36.7102 32.8333 34.5833V25.4167ZM37.8333 34.1667C37.143 34.1667 36.5833 34.7263 36.5833 35.4167C36.5833 36.107 37.143 36.6667 37.8333 36.6667C38.5237 36.6667 39.0833 36.107 39.0833 35.4167C39.0833 34.7263 38.5237 34.1667 37.8333 34.1667Z",fill:"#2D225E"}}),o("path",{attrs:{d:"M37.8334 34.1667C37.143 34.1667 36.5834 34.7263 36.5834 35.4167C36.5834 36.107 37.143 36.6667 37.8334 36.6667C38.5237 36.6667 39.0834 36.107 39.0834 35.4167C39.0834 34.7263 38.5237 34.1667 37.8334 34.1667Z",fill:"#50C694"}}),o("defs",[o("filter",{attrs:{id:"filter0_d",x:"0",y:"0",width:"64",height:"64",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[o("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),o("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),o("feOffset",{attrs:{dy:"2"}}),o("feGaussianBlur",{attrs:{stdDeviation:"6"}}),o("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),o("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}}),o("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}})],1)])])])]),o("div",{staticClass:"col-md point",attrs:{id:"point-down"}},[o("select-point",{ref:"PointDown",staticClass:"w-100 select-point",attrs:{placeholder:"Điểm đến","prefix-icon":"icon-local"},model:{value:t.requestFilter.endPoint,callback:function(e){t.$set(t.requestFilter,"endPoint",e)},expression:"requestFilter.endPoint"}})],1),o("div",{staticClass:"col-md"},[o("el-date-picker",{ref:"DatePicker",staticClass:"w-100 select-date",attrs:{id:"start-date","picker-options":t.datePickerOptions,placeholder:"Ngày đi",clearable:!1,"prefix-icon":"icon-date",format:"dd-MM-yyyy","value-format":"yyyy-MM-dd"},model:{value:t.requestFilter.startDate,callback:function(e){t.$set(t.requestFilter,"startDate",e)},expression:"requestFilter.startDate"}})],1),o("div",{staticClass:"col-auto search-trip-section"},[o("el-button",{staticClass:"btn-search-trip d-flex justify-content-center",attrs:{loading:t.loading.SEARCHTRIP},on:{click:function(e){return e.stopPropagation(),t.searchTrip()}}},[o("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V17C1 17.5523 1.44772 18 2 18H3.17071C3.58254 19.1652 4.69378 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H15.1707C15.5825 19.1652 16.6938 20 18 20C19.3062 20 20.4175 19.1652 20.8293 18H22C22.5523 18 23 17.5523 23 17V12C23 9.96761 22.4257 7.97606 21.3493 6.46901C20.2698 4.95773 18.7207 4 17 4H3ZM11 6H8V9H11V6ZM13 9V6H15.1915L15.8344 9H13ZM3 11V16H3.17071C3.58254 14.8348 4.69378 14 6 14C7.30622 14 8.41746 14.8348 8.82929 16H15.1707C15.5825 14.8348 16.6938 14 18 14C19.3062 14 20.4175 14.8348 20.8293 16H21V13.0002H17.5C17.0284 13.0002 16.621 12.6708 16.5222 12.2097L16.2629 11H3ZM3 6H6V9H3V6ZM18.3084 11.0002H20.9429C20.7938 9.70509 20.3597 8.52454 19.7218 7.63149C18.9937 6.61221 18.0995 6.09249 17.2393 6.01132L18.3084 11.0002Z",fill:"white"}})]),o("span",[t._v("Tìm chuyến")])])],1)])])],1)],1)},s=[],i=o("53ca"),n=o("5530"),a=(o("7db0"),o("d3b7"),o("a15b"),o("ac1f"),o("1276"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-autocomplete",{ref:"SelectPoint",staticClass:"w-100",attrs:{placeholder:t.placeholder,"fetch-suggestions":t.querySearch,"trigger-on-focus":!0,clearable:!1,"highlight-first-item":!1},on:{select:t.handleSelect,input:t.handleInput,focus:t.handleFocus},model:{value:t.searchPoint,callback:function(e){t.searchPoint=e},expression:"searchPoint"}},[o("div",{staticClass:"icon-prefix",attrs:{slot:"prefix"},slot:"prefix"},[o("div",{staticClass:"el-input__icon",class:t.prefixIcon,style:{height:t.iconSize+"px"}})])])}),l=[],u=o("1da1"),c=(o("96cf"),o("a9e3"),o("d81d"),o("4de4"),o("caad"),o("2532"),o("ed08")),m=o("2f62"),f={props:{value:{default:null,type:String},placeholder:{default:"",type:String},prefixIcon:{type:String,default:null},iconSize:{type:Number,default:32}},data:function(){return{searchPoint:""}},computed:Object(n["a"])({},Object(m["c"])(["listPoint"])),watch:{value:function(t){this.searchPoint=t}},mounted:function(){this.getListData(),this.value&&(this.searchPoint=this.value)},methods:{getListData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("system/getPoints");case 2:case"end":return e.stop()}}),e)})))()},querySearch:function(t,e){var o=this.listPoint.map((function(t){return{label:t.pointId,value:t.pointName}})),r=[];if(document.hasFocus())if(this.searchPoint!==this.value){var s=o.filter(this.createFilter(t));r=s}else r=o;e(r)},createFilter:function(t){return function(e){var o=Object(c["h"])(e.value?e.value.toLowerCase():""),r=Object(c["h"])(t.toLowerCase());return o.includes(r)}},handleSelect:function(t){this.$emit("input",t.value)},handleInput:function(t){},handleFocus:function(t){t.target.select()}}},p=f,d=(o("af0d"),o("2877")),h=Object(d["a"])(p,a,l,!1,null,"15ce5b78",null),C=h.exports,v={components:{SelectPoint:C},props:{value:{type:Boolean,default:!1}},data:function(){return{requestFilter:{startPoint:null,endPoint:null,startDate:this.$moment().format("YYYY-MM-DD"),endDate:""},bookFullTrip:{vehicle:null,startDate:this.$moment().add(1,"days").format("YYYY-MM-DD")},currentDate:this.$moment().format("YYYYMMDD"),datePickerOptions:{disabledDate:function(t){var e=new Date;return e.setDate(e.getDate()-1),t<=e}},activeTab:"0",loading:{SEARCHTRIP:!1}}},computed:Object(n["a"])(Object(n["a"])({setStatusReselectRoute:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},Object(m["c"])(["provinces","dateAndPoint","token","companyConfig","listPoint","searchTripQuery"])),{},{getDateAndPoint:function(){var t=this.dateAndPoint;return"string"===typeof t?t=JSON.parse(this.dateAndPoint):"object"===Object(i["a"])(t)&&(t=this.dateAndPoint),t}}),watch:{searchTripQuery:{handler:function(t,e){t&&(this.requestFilter.startPoint=this.listPoint.find((function(e){return e.pointId===t.startPoint})).pointName,this.requestFilter.endPoint=this.listPoint.find((function(e){return e.pointId===t.endPoint})).pointName,this.requestFilter.startDate=this.$moment(t.date).format("YYYY-MM-DD"))},immediate:!0,deep:!0},"requestFilter.endDate":function(t){var e=function(t){return new Date(t)};e(t).getDate()<e(this.requestFilter.startDate).getDate()&&(this.$message.error("Ngày về không được nhỏ hơn ngày đi"),this.requestFilter.endDate="")}},created:function(){},methods:{swap:function(){var t=this.requestFilter.startPoint;this.requestFilter.startPoint=this.requestFilter.endPoint,this.requestFilter.endPoint=t},searchTrip:function(){var t=this;this.$refs.PointUp.searchPoint?this.$refs.PointDown.searchPoint?(this.loading.SEARCHTRIP=!0,console.log(this.requestFilter),setTimeout((function(){var e={date:t.requestFilter.startDate.split("-").join(""),companyId:null,startPoint:t.listPoint.find((function(e){return e.pointName===t.requestFilter.startPoint})).pointId,endPoint:t.listPoint.find((function(e){return e.pointName===t.requestFilter.endPoint})).pointId,type:0,routeIds:null};t.$store.dispatch("system/getPointAndDate",e),t.$router.push({name:"OrderPage"}),t.loading.SEARCHTRIP=!1}),1e3)):this.$message.error("Vui lòng chọn điểm đến"):this.$message.error("Vui lòng chọn điểm đi")},compareDateAndNow:function(t){return t>=this.$moment().format("YYYY-MM-DD")},handleChangeTab:function(t,e){},handleBookFullTrip:function(){this.token?this.bookFullTrip.vehicle?this.$router.push({name:"CreateTrip",params:{bookFullTrip:this.bookFullTrip}}):this.$message.error("Vui lòng chọn loại phương tiện"):confirm("Vui lòng đăng nhập")&&this.$router.push({name:"Login"})}}},I=v,b=(o("66bf"),Object(d["a"])(I,r,s,!1,null,null,null));e["a"]=b.exports},"9a1a":function(t,e,o){},af0d:function(t,e,o){"use strict";o("4c16")},cca5:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"content"},[t._v(t._s(t.data))])},s=[],i=(o("a9e3"),{props:{expire:{type:Number,default:null}},data:function(){return{data:"",expireDefault:9e5,interval:""}},computed:{},watch:{expire:function(t){t&&this.startTimer(this.expire)}},mounted:function(){this.expire&&this.startTimer(this.expire)},methods:{startTimer:function(t){var e,o,r=this;function s(){var s=new Date,i=s.getTime(),n=(t-i)/1e3;e=0|Math.floor(n/60),o=0|Math.floor(n%60),e=e<10?"0"+e:e,o=o<10?"0"+o:o,r.data=e+":"+o,r.$emit("remaining",r.data),n<=0&&(r.data="00:00",r.$emit("pay-expire",r.data),clearInterval(this.interval))}s(),this.interval=setInterval(s,1e3)}}}),n=i,a=(o("d1d5"),o("2877")),l=Object(a["a"])(n,r,s,!1,null,"47e89c95",null);e["a"]=l.exports},d000:function(t,e,o){"use strict";o("6cd6")},d1d5:function(t,e,o){"use strict";o("79ec")},e45c:function(t,e,o){}}]);