(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d7ab5f6"],{"0357":function(t,e,i){"use strict";i("1dd9")},"08f3":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a}));var s={CANCELED:0,NEW:1,BOOKED:2,BOUGHT:3,ON_THE_TRIP:4,COMPLETED:5},a={TRIP:1,ROUTE:2,VEHICLE:3,COMPANY:4,KBUS:5}},"1dd9":function(t,e,i){},"1ea6":function(t,e,i){"use strict";i("f209")},3917:function(t,e,i){"use strict";i("4148")},4148:function(t,e,i){},"507a":function(t,e,i){},"881e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"payment-page-wrapper w-100"},[i("step-book-ticket"),i("div",{staticClass:"payment-wrapper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"body"},[i("booked-tickets")],1)])])],1)},a=[],n=i("9341"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"booked-tickets-wrapper",attrs:{"element-loading-spinner":"el-icon-kbus-loading"}},[t.ticketsBooked.length>0?i("div",{staticClass:"row no-gutters info-trip"},[i("div",{staticClass:"col-md-6 text-center",attrs:{id:"route-info"}},[i("div",{staticClass:"col-md point",attrs:{id:"start-point"}},[i("span",{staticClass:"time"},[t._v(t._s(t.formatStartTime))]),i("span",{staticClass:"date"},[t._v(t._s(t.formatStartDate))]),t.ticketsBooked.length>0&&t.ticketsBooked[0].pointUp?i("span",{staticClass:"point-name"},[t._v(t._s(t.ticketsBooked[0].pointUp.name))]):t._e(),t.ticketsBooked.length>0&&t.ticketsBooked[0].pointUp?i("span",{staticClass:"point-address"},[t._v(t._s(t.ticketsBooked[0].pointUp.address))]):t._e(),!t.ticketsBooked[0].pointUp&&t.getPointManual?i("span",{staticClass:"point-name"},[t._v(t._s(t.getPointManual[0].name))]):t._e(),!t.ticketsBooked[0].pointUp&&t.getPointManual?i("span",{staticClass:"point-address"},[t._v(t._s(t.getPointManual[0].address))]):t._e()]),i("div",{staticClass:"col-auto",attrs:{id:"distance"}},[i("div",{staticClass:"text"},[i("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.15691 0.70942C3.31741 0.934126 3.26536 1.2464 3.04066 1.40691L1.29066 2.65691C1.06595 2.81741 0.753677 2.76536 0.593172 2.54066C0.432668 2.31595 0.484713 2.00368 0.70942 1.84317L2.45942 0.593172C2.68413 0.432668 2.9964 0.484713 3.15691 0.70942ZM8.84317 0.70942C9.00368 0.484713 9.31595 0.432668 9.54066 0.593172L11.2907 1.84317C11.5154 2.00368 11.5674 2.31595 11.4069 2.54066C11.2464 2.76536 10.9341 2.81741 10.7094 2.65691L8.95942 1.40691C8.73471 1.2464 8.68267 0.934126 8.84317 0.70942ZM0.916696 6.50005C0.916696 3.69258 3.19257 1.41671 6.00004 1.41671C8.80748 1.41671 11.0834 3.69258 11.0834 6.50005C11.0834 9.30749 8.80748 11.5834 6.00004 11.5834C3.19257 11.5834 0.916696 9.30749 0.916696 6.50005ZM6.00004 2.41671C3.74486 2.41671 1.9167 4.24487 1.9167 6.50005C1.9167 8.75521 3.74486 10.5834 6.00004 10.5834C8.2552 10.5834 10.0834 8.75521 10.0834 6.50005C10.0834 4.24487 8.2552 2.41671 6.00004 2.41671ZM5.93994 3.33843C6.21609 3.33846 6.43992 3.56234 6.43989 3.83848L6.43961 6.38354L8.23622 8.18015C8.43148 8.37541 8.43148 8.69199 8.23622 8.88725C8.04096 9.08252 7.72437 9.08252 7.52911 8.88725L5.58604 6.94418C5.49225 6.8504 5.43957 6.7232 5.43959 6.59057L5.43989 3.83837C5.43992 3.56223 5.6638 3.3384 5.93994 3.33843Z",fill:"white"}})]),i("span",{staticClass:"text"},[t._v(t._s(t.formatDistanceTime.hours)+" giờ "+t._s(t.formatDistanceTime.minutes)+"p")])]),i("svg",{attrs:{width:"60",height:"20",viewBox:"0 0 60 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.5002 3.33334C22.0581 3.33334 21.6342 3.50894 21.3217 3.8215C21.0091 4.13406 20.8335 4.55798 20.8335 5.00001V14.1667C20.8335 14.6269 21.2066 15 21.6668 15H22.6424C22.9856 15.971 23.9116 16.6667 25.0002 16.6667C26.0887 16.6667 27.0147 15.971 27.3579 15H32.6424C32.9856 15.971 33.9116 16.6667 35.0002 16.6667C36.0887 16.6667 37.0147 15.971 37.3579 15H38.3335C38.7937 15 39.1668 14.6269 39.1668 14.1667V10C39.1668 8.30635 38.6883 6.64673 37.7912 5.39086C36.8916 4.13145 35.6007 3.33334 34.1668 3.33334H22.5002ZM29.1668 5.00001H26.6668V7.50001H29.1668V5.00001ZM30.8335 7.50001V5.00001H32.6597L33.1955 7.50001H30.8335ZM22.5002 9.16668V13.3333H22.6424C22.9856 12.3623 23.9116 11.6667 25.0002 11.6667C26.0887 11.6667 27.0147 12.3623 27.3579 13.3333H32.6424C32.9856 12.3623 33.9116 11.6667 35.0002 11.6667C36.0887 11.6667 37.0147 12.3623 37.3579 13.3333H37.5002V10.8335H34.5835C34.1905 10.8335 33.851 10.559 33.7686 10.1748L33.5526 9.16668H22.5002ZM22.5002 5.00001H25.0002V7.50001H22.5002V5.00001ZM35.2571 9.16685H37.4526C37.3284 8.08758 36.9666 7.10379 36.435 6.35959C35.8283 5.51019 35.0831 5.07708 34.3663 5.00944L35.2571 9.16685Z",fill:"#2D225E"}}),i("rect",{attrs:{x:"12",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"6",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"56",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"50",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"44",y:"9",width:"4",height:"1",fill:"#2D225E"}})])]),i("div",{staticClass:"col-md point",attrs:{id:"end-point"}},[i("span",{staticClass:"time"},[t._v(t._s(t.formatEndTime))]),i("span",{staticClass:"date"},[t._v(t._s(t.formatEndDate))]),t.ticketsBooked.length>0&&t.ticketsBooked[0].pointDown?i("span",{staticClass:"point-name"},[t._v(t._s(t.ticketsBooked[0].pointDown.name))]):t._e(),t.ticketsBooked.length>0&&t.ticketsBooked[0].pointDown?i("span",{staticClass:"point-address"},[t._v(t._s(t.ticketsBooked[0].pointDown.address))]):t._e(),!t.ticketsBooked[0].pointDown&&t.getPointManual?i("span",{staticClass:"point-name"},[t._v(t._s(t.getPointManual[t.getPointManual.length-1].name))]):t._e(),!t.ticketsBooked[0].pointDown&&t.getPointManual?i("span",{staticClass:"point-address"},[t._v(t._s(t.getPointManual[t.getPointManual.length-1].address))]):t._e()])]),i("div",{staticClass:"col-md",attrs:{id:"number-customer"}},[i("label",{staticClass:"total-customer d-block"},[t._v(t._s(t.$t("payment.numberCustomer.quantity"))+" "+t._s(t.ticketsBooked.length))]),i("span",{attrs:{id:"number-male"}},[t._v(t._s(t.countMale)+" "+t._s(t.$t("payment.numberCustomer.male"))+" ")]),i("span",{attrs:{id:"number-female"}},[t._v(t._s(t.countFemale)+" "+t._s(t.$t("payment.numberCustomer.female")))])]),i("div",{staticClass:"col-md",attrs:{id:"wait-to-pay"}},[t.hasTicketsBooked?i("div",{attrs:{id:"countdown"}},[i("span",{staticClass:"text-title mr-2"},[t._v(t._s(t.$t("payment.countdown"))+": ")]),i("time-countdown",{ref:"TimeCountdown",attrs:{expire:t.timeExpire},on:{"pay-expire":t.payExpire}})],1):t._e()])]):t._e(),t.ticketsBooked.length>0?i("div",{staticClass:"w-100 list-passengers-info"},[t._l(t.passengersInfo,(function(e,s){return[i("div",{key:s,staticClass:"wrapper"},[i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v("HK"+t._s(s+1))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.fullName")))]),i("label",{staticClass:"text-content"},[t._v(t._s(e.fullName))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.phoneNumber")))]),i("label",{staticClass:"text-content"},[t._v(t._s(e.phoneNumber))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.email")))]),i("label",{staticClass:"text-content"},[t._v(t._s(e.email))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.sex")))]),"MALE"===e.sex?i("label",{staticClass:"text-content"},[t._v("Nam")]):t._e(),"FEMALE"===e.sex?i("label",{staticClass:"text-content"},[t._v("Nữ")]):t._e()]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.price")))]),i("label",{staticClass:"text-content"},[t._v(t._s(t.numeral(e.totalPrice).format("0,0"))+"đ")])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.promotion")))]),i("label",{staticClass:"text-content"},[t._v(t._s(t.numeral(e.discountMoney).format("0,0"))+"đ")])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.discount")))]),i("label",{staticClass:"text-content"},[t._v(t._s(t.numeral(e.discountPrice).format("0,0"))+"đ")])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title",style:{color:t.getColorTicketStatus(e.ticketStatus)}},[t._v(t._s(t.getLabelTicketStatus(e.ticketStatus)))])])])]}))],2):t._e(),i("div",{staticClass:"price-and-discount"},[i("div",{staticClass:"text-title"},[i("label",{staticClass:"price"},[t._v(t._s(t.$t("payment.priceSection.price")))]),i("label",{staticClass:"discount"},[t._v(t._s(t.$t("payment.priceSection.discount")))]),i("label",{staticClass:"discount"},[t._v(t._s(t.$t("payment.priceSection.remain")))])]),i("div",{staticClass:"text-content"},[i("label",{staticClass:"price"},[t._v(t._s(t.numeral(t.totalPrice-t.discountMoney).format("0,0"))+"đ")]),i("label",{staticClass:"discount"},[t._v(t._s(t.numeral(t.discountPriceNow).format("0,0"))+"đ")]),i("label",{staticClass:"discount"},[t._v(t._s(t.numeral(t.totalPrice-t.discountPriceNow-t.discountMoney).format("0,0"))+"đ")])])]),i("div",{staticClass:"description"},[t._l(t.$t("payment.description"),(function(e,s){return[i("span",{key:s},[t._v(t._s(e))])]}))],2),i("div",{staticClass:"pay"},[t.hasTicketsBooked&&!t.isPayExpire?i("el-button",{staticClass:"btn-pay",class:[t.ticketsBooked&&t.ticketsBooked.length<=0||t.isPayExpire?"disabled":""],attrs:{loading:t.loadingPay,disabled:t.ticketsBooked&&t.ticketsBooked.length<=0||t.isPayExpire},on:{click:t.handlePayTicket}},[t._v(" Thanh toán ")]):t._e(),i("div",{staticClass:"w-100 text-center mt-3"},[t.hasTicketsBooked&&!t.isPayExpire||t.hasTicketsPaid?i("el-button",{staticClass:"w-100",staticStyle:{"border-radius":"8px"},attrs:{loading:t.loadingCancelTicket},on:{click:function(e){return e.preventDefault(),t.handleCancelTicket(e)}}},[t._v(" Hủy vé ")]):t._e()],1)],1)])},c=[],r=i("5530"),l=(i("d3b7"),i("159b"),i("4de4"),i("d81d"),i("ed08")),d=i("2f62"),u=i("cca5"),h=i("08f3"),p={components:{TimeCountdown:u["a"]},data:function(){return{ticketsBooked:[],loading:!1,loadingPay:!1,isPayExpire:!1,loadingCancelTicket:!1,loadingCancelPerTicket:null}},computed:Object(r["a"])(Object(r["a"])({},Object(d["c"])(["paymeResponse","userInfo","systemConfig"])),{},{formatStartTime:function(){return this.ticketsBooked.length>0?this.$moment.utc(this.ticketsBooked[0].trip.runTime).format("HH:mm"):0},formatStartDate:function(){var t="";return this.ticketsBooked.length>0&&(t=this.$moment.utc(this.ticketsBooked[0].trip.runTime).format("DD/MM/YYYY")),t},formatDistanceTime:function(){var t="";if(this.ticketsBooked.length>0){var e=Object(l["f"])(this.ticketsBooked[0].trip.finishTime);t=e}return t},formatEndTime:function(){var t="";if(this.ticketsBooked.length>0){var e=new Date(this.ticketsBooked[0].trip.runTime),i=e.getTime(),s=new Date(i+this.ticketsBooked[0].trip.finishTime),a=Object(l["f"])(s);t=a.hours+":"+a.minutes}return t},formatEndDate:function(){var t="";if(this.ticketsBooked.length>0){var e=new Date(this.ticketsBooked[0].trip.runTime),i=e.getTime(),s=new Date(i+this.ticketsBooked[0].trip.finishTime);t=this.$moment.utc(s).format("DD/MM/YYYY")}return t},countMale:function(){var t=0;return this.ticketsBooked.forEach((function(e,i){"MALE"===e.sex&&t++})),t},countFemale:function(){var t=0;return this.ticketsBooked.forEach((function(e,i){"FEMALE"===e.sex&&t++})),t},totalPrice:function(){var t=0;return this.ticketsAvailable.length>0&&this.ticketsAvailable.forEach((function(e,i){t+=e.basePrice})),t},discountMoney:function(){var t=0;return this.ticketsAvailable.length>0&&this.ticketsAvailable.forEach((function(e,i){t+=e.discountMoney})),t},ticketsAvailable:function(){var t=[];return this.ticketsBooked.length>0&&(t=this.ticketsBooked.filter((function(t){return 0!==t.status}))),t},discountPriceNow:function(){var t=0;if(this.ticketsAvailable.length>0){var e=this.ticketsAvailable[0].basePrice,i=this.ticketsAvailable[0].priceEstimate;t=(e-i)*this.ticketsAvailable.length}return t},discountPriceMax:function(){var t=0;if(this.ticketsAvailable.length>0){if(!this.ticketsAvailable[0].trip.route||!this.ticketsAvailable[0].trip.vehicle)return 0;var e=parseInt((this.ticketsAvailable[0].trip.route.distance*this.ticketsAvailable[0].trip.vehicle.pricePerKm+this.ticketsAvailable[0].trip.planTrip.additionMoney)*(1+this.ticketsAvailable[0].trip.route.profit)),i=this.ticketsAvailable[0].trip.vehicle.totalSeat,s=parseInt(e/i),a=this.ticketsAvailable[0].basePrice;0===a&&(t=parseInt(e/i*60/100)),t=(a-s)*this.ticketsAvailable.length}return t},timeExpire:function(){var t="";return this.ticketsBooked.length>0&&(t=new Date(this.ticketsBooked[0].createdAt).getTime()+this.systemConfigData.ticketHolderTime),t},passengersInfo:function(){var t=[];return this.ticketsBooked.length>0&&this.ticketsBooked.forEach((function(e,i){t.push({ticketStatus:e.status,ticketId:e.id,fullName:e.fullName,phoneNumber:e.phoneNumber,email:e.email,sex:e.sex,totalPrice:e.basePrice,discountPrice:e.basePrice-e.priceEstimate,discountMoney:e.discountMoney})})),t},hasTicketsBooked:function(){var t=this.passengersInfo.filter((function(t,e){return 1===t.ticketStatus||2===t.ticketStatus}));return t.length>0},hasTicketsPaid:function(){var t=this.passengersInfo.filter((function(t,e){return 3===t.ticketStatus}));return t.length>0},getPointManual:function(){var t=null;return this.ticketsBooked.length>0&&(t=JSON.parse(this.ticketsBooked[0].trip.pointManual)),t},systemConfigData:function(){var t=null;return this.systemConfig&&(t=JSON.parse(this.systemConfig.data)),t}}),watch:{},mounted:function(){this.getListTicketsBooked()},methods:{getLabelTicketStatus:function(t){var e="";switch(!0){case t===h["b"].CANCELED:e="Đã hủy";break;case t===h["b"].NEW&&!this.isPayExpire:e="Chờ thanh toán";break;case t===h["b"].BOOKED&&!this.isPayExpire:e="Chờ thanh toán";break;case(t===h["b"].NEW||t===h["b"].BOOKED)&&this.isPayExpire:e="Hết hạn thanh toán";break;case t===h["b"].BOUGHT:e="Đã thanh toán";break;case t===h["b"].ON_THE_TRIP:e="Đã lên xe";break;case t===h["b"].COMPLETED:e="Đã hoàn thành";break}return e},getColorTicketStatus:function(t){var e="";switch(!0){case t===h["b"].CANCELED:e="red";break;case t===h["b"].NEW&&!this.isPayExpire:e="#F39B13";break;case t===h["b"].BOOKED&&!this.isPayExpire:e="#F39B13";break;case(t===h["b"].NEW||t===h["b"].BOOKED)&&this.isPayExpire:e="red";break;case t===h["b"].BOUGHT:e="#ED196B";break;case t===h["b"].ON_THE_TRIP:e="#0091FE";break;case t===h["b"].COMPLETED:e="#50C694";break}return e},getListTicketsBooked:function(){var t=this;this.loading=!0,this.$store.dispatch("ticket/getTicketsByTicketCode",{ticketCode:this.$route.query.ticket}).then((function(e){t.ticketsBooked=e,t.loading=!1})).catch((function(e){console.log(e),t.loading=!1,t.$message.error(e.message?e.message:"Đã có lỗi xảy ra")}))},handlePayTicket:function(){var t=this,e=this.ticketsBooked.filter((function(t){return 0!==t.status})),i=e.map((function(t){return t.id}));this.loadingPay=!0,this.$store.dispatch("payme/getPaymeResponse",{ticketIds:i}).then((function(e){window.location.href=t.paymeResponse.data.url,t.loadingPay=!1})).catch((function(e){t.$message.error(e.message?e.message:"Đã có lỗi xảy ra"),console.log(e),t.loadingPay=!1}))},payExpire:function(t){this.$message.error("Đã hết thời gian thanh toán"),this.isPayExpire=!0},handleCancelTicket:function(){var t=this,e=this.ticketsBooked.filter((function(t,e){return 0!==t.status})),i=e.map((function(t,e){return t.id})),s="",a=new Date(this.ticketsBooked[0].trip.runTime),n=new Date,o=a.getTime()-252e5,c=n.getTime(),r=o-432e5;c>r?s="Bạn chắc chắn muốn hủy vé?\n\nHủy vé sau 12 tiếng so với giờ xuất bến: Không được hoàn tiền vé":c<r&&(s="Bạn chắc chắn muốn hủy vé?\n\nHủy vé trước 12 tiếng so với giờ xuất bến: Được hoàn 100% tiền vé"),confirm(s)&&(this.loadingCancelTicket=!0,this.$store.dispatch("ticket/cancelTicket",{ticketIds:i}).then((function(e){t.loadingCancelTicket=!1,t.getListTicketsBooked()})).catch((function(e){console.log(e),t.loadingCancelTicket=!1,t.$message.error("Đã có lỗi xảy ra")})))},handleCancelPerTicket:function(t){var e=this,i="",s=new Date(this.ticketsBooked[0].trip.runTime),a=new Date,n=s.getTime()-252e5,o=a.getTime(),c=n-432e5;if(o>c?i="Bạn chắc chắn muốn hủy vé?\n\nHủy vé sau 12 tiếng so với giờ xuất bến: Không được hoàn tiền vé":o<c&&(i="Bạn chắc chắn muốn hủy vé?\n\nHủy vé trước 12 tiếng so với giờ xuất bến: Được hoàn 100% tiền vé"),confirm(i)){var r=[];r.push(t),this.loadingCancelPerTicket=t,this.$store.dispatch("ticket/cancelTicket",{ticketIds:r}).then((function(t){e.loadingCancelTicket=!1,e.getListTicketsBooked()})).catch((function(t){console.log(t),e.loadingCancelPerTicket=!1,e.$message.error("Đã có lỗi xảy ra")}))}}}},k=p,m=(i("3917"),i("2877")),v=Object(m["a"])(k,o,c,!1,null,"42682a34",null),f=v.exports,C={components:{StepBookTicket:n["a"],BookedTickets:f},data:function(){return{}}},g=C,_=(i("0357"),Object(m["a"])(g,s,a,!1,null,"72ee5e22",null));e["default"]=_.exports},9341:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box-step-to-book-ticket"},[i("div",{staticClass:"container"},[i("div",{staticClass:"w-100"},[i("div",{staticClass:"row no-gutters process-booking"},[i("div",{staticClass:"col-md",attrs:{id:"select-trip"}},[t._m(0),i("div",{staticClass:"route-info"},[i("div",{staticClass:"route"},[i("div",{staticClass:"province-name"},[t.searchTripQuery?[i("span",{attrs:{id:"start-point"}},[t._v(t._s(t.listPoint.find((function(e){return e.pointId===t.searchTripQuery.startPoint})).pointName))]),i("span",[t._v(" - ")]),i("span",{attrs:{id:"end-point"}},[t._v(t._s(t.listPoint.find((function(e){return e.pointId===t.searchTripQuery.endPoint})).pointName))])]:t._e()],2),"payment"!==t.$route.name?i("a",{style:{"padding-left":t.searchTripQuery?"8px":""},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.reselectRoute=!0}}},[t._v("Chọn lại")]):t._e()]),i("div",{staticClass:"date"},[i("p",[t._v(t._s(t.searchTripQuery?t.$moment(t.searchTripQuery.startDate).format("DD/MM/YYYY"):""))])])])]),t._m(1),i("div",{staticClass:"col-md",attrs:{id:"booking"}},[i("div",{staticClass:"title",class:["pay"===t.$route.name?"active":""]},[i("span",{staticClass:"text-step"},[t._v("3. ")]),i("span",{staticClass:"text-title"},[t._v("Tiến hành thanh toán")])])])])])]),i("el-dialog",{attrs:{visible:t.reselectRoute,width:"74%"},on:{"update:visible":function(e){t.reselectRoute=e}}},[i("search-trip",{model:{value:t.reselectRoute,callback:function(e){t.reselectRoute=e},expression:"reselectRoute"}})],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title active"},[i("span",{staticClass:"text-step"},[t._v("1. ")]),i("span",{staticClass:"text-title"},[t._v("Chọn chuyến")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md",attrs:{id:"select-trip-and-enter-info"}},[i("div",{staticClass:"title active"},[i("span",{staticClass:"text-step"},[t._v("2. ")]),i("span",{staticClass:"text-title"},[t._v("Chọn chuyến và nhập thông tin")])])])}],n=i("53ca"),o=i("5530"),c=(i("7db0"),i("d3b7"),i("9358")),r=i("2f62"),l={name:"StepBookTicket",components:{SearchTrip:c["a"]},data:function(){return{reselectRoute:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(r["c"])(["provinces","dateAndPoint","searchTripQuery","listPoint"])),{},{getDateAndPoint:function(){var t=this.dateAndPoint;return"string"===typeof t?t=JSON.parse(this.dateAndPoint):"object"===Object(n["a"])(t)&&(t=this.dateAndPoint),t},mapStartPoint:function(){var t=this,e=this.getDateAndPoint?this.provinces.find((function(e,i){return e.id===t.getDateAndPoint.from})):null;return e}}),methods:{}},d=l,u=(i("c8c6"),i("1ea6"),i("2877")),h=Object(u["a"])(d,s,a,!1,null,"681e51e3",null);e["a"]=h.exports},c8c6:function(t,e,i){"use strict";i("507a")},f209:function(t,e,i){}}]);