(function(e){function t(t){for(var c,a,u=t[0],o=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(c=!1)}c&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},r={app:0},i=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-179ece4a":"a5ce67ed","chunk-194550b2":"efb74ca8","chunk-25ce31d4":"1bac81ee","chunk-2fd0d603":"7698ac10","chunk-371336c5":"27892b82","chunk-5300f228":"4a7450a6","chunk-740cb9e7":"5f025c4b","chunk-43f6ca90":"f3621190","chunk-486305b2":"a7d3a817","chunk-4ebb92be":"614c5b8c","chunk-4f5b289a":"f9bd9125","chunk-558850f2":"c6057b15","chunk-582f2f79":"94eb457c","chunk-5b2731d1":"2cbed3c7","chunk-71dcfbc8":"d3ea14a6","chunk-74914995":"a9200b63","chunk-7f77309c":"0e88f8fe","chunk-7facc850":"d589756c","chunk-8398481a":"ef9fe5ab","chunk-9a6f6914":"ee7f51d3","chunk-c6e15da2":"19936f3f","chunk-2d213ddf":"ada481b3","chunk-fea5bb26":"b0668e79"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-179ece4a":1,"chunk-194550b2":1,"chunk-25ce31d4":1,"chunk-2fd0d603":1,"chunk-371336c5":1,"chunk-5300f228":1,"chunk-740cb9e7":1,"chunk-43f6ca90":1,"chunk-486305b2":1,"chunk-4ebb92be":1,"chunk-4f5b289a":1,"chunk-558850f2":1,"chunk-582f2f79":1,"chunk-5b2731d1":1,"chunk-71dcfbc8":1,"chunk-74914995":1,"chunk-7f77309c":1,"chunk-7facc850":1,"chunk-8398481a":1,"chunk-9a6f6914":1,"chunk-c6e15da2":1,"chunk-fea5bb26":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-179ece4a":"93dc5d08","chunk-194550b2":"cb48f795","chunk-25ce31d4":"1f127ab6","chunk-2fd0d603":"389986d4","chunk-371336c5":"439a4164","chunk-5300f228":"0c14bfbe","chunk-740cb9e7":"994a62fa","chunk-43f6ca90":"30d0c31b","chunk-486305b2":"fb57bd56","chunk-4ebb92be":"fb7c241e","chunk-4f5b289a":"3d5b4fa6","chunk-558850f2":"6bb7602a","chunk-582f2f79":"ab6a260b","chunk-5b2731d1":"50be7085","chunk-71dcfbc8":"0db8efb6","chunk-74914995":"0a5b14e1","chunk-7f77309c":"e659686a","chunk-7facc850":"438cbf63","chunk-8398481a":"566d4c13","chunk-9a6f6914":"ade1f273","chunk-c6e15da2":"2dcbc16b","chunk-2d213ddf":"31d6cfe0","chunk-fea5bb26":"087bf86c"}[e]+".css",r=o.p+c,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===c||s===r))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===c||s===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=c,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var i=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",f.name="ChunkLoadError",f.type=c,f.request=a,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("64a9")},"069c":function(e,t,n){},1355:function(e,t,n){},"1d68":function(e,t,n){"use strict";n("069c")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var c=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Footer")],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),u=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("footer",{staticClass:"footer"},[n("div",{staticClass:"clearfix"}),e._m(0),n("div",{staticClass:"service-intro"},[n("div",{staticClass:"servece-type"},e._l(e.guideArr,(function(t,c){return n("div",{key:c,staticClass:"servece-type-info"},[n("ul",e._l(t,(function(t,c){return n("li",{key:c},[e._v(e._s(t))])})),0)])})),0),n("div",{staticClass:"clearfix"}),n("div",{staticClass:"friend-link"},[n("div",{staticClass:"friend-link-item"},[n("ul",e._l(e.moreLink,(function(t,c){return n("li",{key:c},[n("span",{class:[e.linkItemClass,{"link-last-item":9===c}]},[e._v(e._s(t))])])})),0)])]),n("div",{staticClass:"clearfix"}),e._m(1)])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-row"},[n("div",{staticClass:"footer-icon"},[n("span",{staticClass:"footer-icon-text"},[e._v("全球精选，尽在团物")])]),n("div",{staticClass:"footer-icon"},[n("span",{staticClass:"footer-icon-text"},[e._v("产地直批，便宜到家")])]),n("div",{staticClass:"footer-icon"},[n("span",{staticClass:"footer-icon-text"},[e._v("品质保证，严格审核")])]),n("div",{staticClass:"footer-icon"},[n("span",{staticClass:"footer-icon-text"},[e._v("急速到货，贴心物流")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"COPYRIGHT"},[n("p",[e._v("COPYRIGHT © 2021-2022 by 广州团物贸易有限公司 出版所有")])])}],s={name:"Footer",data:function(){return{linkItemClass:"link-item",guideArr:[["新手指南","用户注册","购物流程","会员等级"],["配送方式","上门自提","配送运费","配送范围","配送时间"],["支付方式","支付方式/发票说明","充值说明/储值卡说明","优惠代购/礼品卡说明"],["售后服务","售后政策","退款说明","取消订单","投诉与建议"]],moreLink:["加入团物","联系我们","关于团物","帮助中心","团物微信"]}}},f=s,d=(n("9c46"),n("2877")),h=Object(d["a"])(f,o,l,!1,null,"72b76092",null),m=h.exports;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={components:{Footer:m},name:"App",created:function(){sessionStorage.getItem("user")?this.saveUser(Object.assign({},JSON.parse(sessionStorage.getItem("user")))):sessionStorage.getItem("sell")?this.saveSell(Object.assign({},JSON.parse(sessionStorage.getItem("sell")))):sessionStorage.getItem("admin")&&this.saveAdmin(Object.assign({},JSON.parse(sessionStorage.getItem("admin"))))},methods:b({},Object(u["d"])("user",["saveUser","saveSell","saveAdmin"]))},v=k,g=(n("034f"),Object(d["a"])(v,a,r,!1,null,null,null)),y=g.exports,O=n("8c4f");c["default"].use(O["a"]);var C=[{path:"/",component:function(){return n.e("chunk-179ece4a").then(n.bind(null,"bb51"))},redirect:{name:"home"},children:[{name:"home",path:"home",meta:{title:"商城首页"},component:function(){return Promise.all([n.e("chunk-371336c5"),n.e("chunk-740cb9e7")]).then(n.bind(null,"f4a9"))}},{path:"kind/:id",name:"category",meta:{title:"分类商品"},component:function(){return n.e("chunk-371336c5").then(n.bind(null,"cb61"))}},{path:"searchOrder",name:"searchOrder",meta:{title:"搜索结果"},component:function(){return n.e("chunk-371336c5").then(n.bind(null,"cb61"))}},{path:"commodity/:id",name:"commodity",meta:{title:"商品信息"},component:function(){return n.e("chunk-4ebb92be").then(n.bind(null,"5a37"))}},{path:"cart",name:"cart",meta:{title:"购物车",requiresAuth:!0},component:function(){return n.e("chunk-25ce31d4").then(n.bind(null,"8c6e"))}},{path:"account",name:"account",meta:{title:"我的账户",requiresAuth:!0},component:function(){return n.e("chunk-558850f2").then(n.bind(null,"77be"))}},{path:"check",name:"check",meta:{title:"结算",requiresAuth:!0},component:function(){return n.e("chunk-74914995").then(n.bind(null,"7cb4"))}},{path:"order",name:"order",meta:{title:"我的订单",requiresAuth:!0},component:function(){return n.e("chunk-486305b2").then(n.bind(null,"cf2a"))}}]},{path:"/login",name:"login",meta:{title:"登录"},component:function(){return n.e("chunk-7facc850").then(n.bind(null,"444a"))}},{path:"/register",name:"register",meta:{title:"注册"},component:function(){return n.e("chunk-5b2731d1").then(n.bind(null,"c77a"))}},{path:"/sellRegister",name:"sellRegister",meta:{title:"商家注册"},component:function(){return n.e("chunk-7f77309c").then(n.bind(null,"d2f3"))}},{path:"/shop",component:function(){return n.e("chunk-43f6ca90").then(n.bind(null,"c5dc"))},children:[{path:"shopId/:id",name:"shop",meta:{title:"商家系统"},component:function(){return Promise.all([n.e("chunk-371336c5"),n.e("chunk-5300f228")]).then(n.bind(null,"809a"))}},{path:"info",name:"sellInfo",meta:{title:"商家系统"},component:function(){return n.e("chunk-c6e15da2").then(n.bind(null,"e23d"))}},{path:"order",name:"sellOrder",meta:{title:"我的订单"},component:function(){return n.e("chunk-9a6f6914").then(n.bind(null,"f7cca"))}},{path:"commodity/:id",name:"shopCommodity",meta:{title:"商品详情"},component:function(){return n.e("chunk-4ebb92be").then(n.bind(null,"5a37"))}}]},{path:"/admin",redirect:{name:"userAudit"},meta:{title:"管理员系统"},component:function(){return n.e("chunk-2fd0d603").then(n.bind(null,"6966"))},children:[{path:"bargain",name:"bargain",meta:{title:"交易管理"},component:function(){return n.e("chunk-582f2f79").then(n.bind(null,"bb5f"))}},{path:"audit/commodity",name:"commodityAudit",meta:{title:"商品审核"},component:function(){return n.e("chunk-4f5b289a").then(n.bind(null,"1ba3"))}},{path:"audit/user",name:"userAudit",meta:{title:"用户审核"},component:function(){return n.e("chunk-71dcfbc8").then(n.bind(null,"ff28"))}},{path:"recharge",name:"recharge",meta:{title:"充值管理"},component:function(){return n.e("chunk-8398481a").then(n.bind(null,"0f96"))}},{path:"sellRate",name:"sellRate",meta:{title:"商家等级管理"},component:function(){return n.e("chunk-194550b2").then(n.bind(null,"dc03"))}}]}],_=new O["a"]({routes:C});_.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?sessionStorage.getItem("user")||sessionStorage.getItem("sell")||sessionStorage.getItem("admin")?n():n({path:"/login",query:{redirect:e.fullPath}}):n()})),_.afterEach((function(e){document.title=e.meta.title}));var w=_,S={user:null,sell:null,admin:null},j={saveUser:function(e,t){e.user=t},deleteUser:function(e){e.user=null},saveSell:function(e,t){e.sell=t},deleteSell:function(e){e.sell=null},saveAdmin:function(e,t){e.admin=t},deleteAdmin:function(e){e.admin=null}},I={namespaced:!0,state:S,mutations:j},P=(n("20d6"),n("7514"),n("7f7f"),{items:[],payItems:[]}),x={getItems:function(e,t){e.items=t},pushProductToCart:function(e,t){var n=t.id,c=t.commodityId,a=t.photoOne,r=t.name,i=t.price,u=t.quantity;u||(u=1),e.items.push({id:n,commodityId:c,photoOne:a,name:r,price:i,quantity:u})},incrementItemQuantity:function(e,t){var n=t.id,c=t.quantity,a=e.items.find((function(e){return e.id==n}));a.quantity+=c},reduceItemQuantity:function(e,t){var n=t.id,c=t.quantity,a=e.items.find((function(e){return e.id==n}));a.quantity-=c},setCartItems:function(e){e.items=[]},deleteCartItem:function(e,t){console.log(t);for(var n=function(n){var c=e.items.findIndex((function(e){return e.id===t[n].id}));c>-1&&e.items.splice(c,1)},c=0;c<t.length;c++)n(c)},getPayItems:function(e,t){e.payItems=t}},A={itemsCount:function(e){return e.items.length},totalPrice:function(e){return e.payItems.reduce((function(e,t){return e+t.price*t.discount*t.quantity}),0).toFixed(2)}},E={namespaced:!0,state:P,mutations:x,getters:A};c["default"].use(u["a"]);var q=new u["a"].Store({state:{waitCheck:[],soldOut:[],evaluation:[]},mutations:{getWaitCheck:function(e,t){e.waitCheck=t},addWaitCheck:function(e,t){e.waitCheck.unshift(t)},deleteWaitCheck:function(e,t){e.waitCheck.splice(t,1)},getSoldOut:function(e,t){e.soldOut=t},addSoldOut:function(e,t){e.soldOut.unshift(t)},deleteSoldOut:function(e,t){e.soldOut.splice(t,1)},getEvaluation:function(e,t){e.evaluation=t},addEvaluation:function(e,t){e.evaluation.unshift(t)}},actions:{},modules:{user:I,cart:E}}),T=n("5c96"),$=n.n(T),F=(n("0fae"),n("2106")),L=n.n(F),N=n("bc3a"),R=n.n(N),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"messageBox"},[n("h2",[e._v(e._s(e.title))]),n("div",[n("div",{staticClass:"ok",on:{click:e.handleOk}},[e._v(e._s(e.ok))]),e.cancel?n("div",{staticClass:"cancel",on:{click:e.handleCancel}},[e._v(e._s(e.cancel))]):e._e()])])},D=[],M={name:"MessageBox",props:[""],data:function(){return{title:"",ok:"",cancel:""}}},U=M,J=(n("1d68"),Object(d["a"])(U,B,D,!1,null,"490e862d",null)),H=J.exports,W={install:function(e){e.prototype.$msgBox=W,W.show=function(){var t={title:"",ok:"确定",cancel:"",handleOk:function(){},handleCancel:function(){}},n=e.extend(H);return function(e){for(var c in e)t[c]=e[c];var a=new n({el:document.createElement("div"),data:function(){return{title:t.title,ok:t.ok,cancel:t.cancel}},methods:{handleOk:function(){t.handleOk.call(this),document.body.removeChild(a.$el)},handleCancel:function(){t.handleCancel.call(this),document.body.removeChild(a.$el)}}});document.body.appendChild(a.$el)}}()}},G=W,Q=(n("a481"),/(\d{3})(?=\d)/g);function Y(e,t){return e=parseFloat(e),t=parseFloat(t),t?e*t:e}function K(e,t,n){if(e=parseFloat(e),!isFinite(e)||!e&&0!==e)return"";t=null!=t?t:"￥",n=null!=n?n:2;var c=Math.abs(e).toFixed(n),a=n?c.slice(0,-1-n):c,r=a.length%3,i=r>0?a.slice(0,r)+(a.length>3?",":""):"",u=n?c.slice(-1-n):"",o=e<0?"-":"";return o+t+i+a.slice(r).replace(Q,"$1,")+u}c["default"].config.productionTip=!1,c["default"].use($.a),c["default"].use(G),c["default"].use(L.a,R.a),R.a.defaults.baseURL="/api",c["default"].prototype.HOST="/api",c["default"].filter("currency",K),c["default"].filter("factPrice",Y),new c["default"]({router:w,store:q,render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,n){},"9c46":function(e,t,n){"use strict";n("1355")}});