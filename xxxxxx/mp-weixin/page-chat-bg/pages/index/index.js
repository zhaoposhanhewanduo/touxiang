(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page-chat-bg/pages/index/index"],{"23df":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=null,a={components:{},data:function(){return{windowHeight:getApp().globalData.windowHeight,statusBarHeight:0,rewardedVideoAdLoaded:!1,imageList:[]}},onLoad:function(){wx.createInterstitialAd&&(n=wx.createInterstitialAd({adUnitId:"adunit-be801ba020f6edeb"}),n.onLoad((function(){})),n.onError((function(t){console.log(t)})),n.onClose((function(){})));for(var t=1;t<24;t++)this.imageList.push({url:"/page-chat-bg/static/image/"+t+".jpg",index:t})},onShareAppMessage:function(){return{title:"我换上了口罩头像，防止疫情蔓延，30款口罩、护目镜任你选！",desc:"防传染、戴口罩，从我做起！",imageUrl:"/static/image/mask/avatar_mask.png",path:"/pages/index/index",success:function(t){console.log(t)}}},methods:{toDownload:function(e){console.log(e);var n=e.currentTarget.dataset.imagename;t.navigateTo({url:"/page-chat-bg/pages/download/download?imageName="+n})}}};e.default=a}).call(this,n("543d")["default"])},"2afc":function(t,e,n){"use strict";n.r(e);var a=n("23df"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"43a2":function(t,e,n){"use strict";var a=n("4a89"),o=n.n(a);o.a},"4a89":function(t,e,n){},"96f2":function(t,e,n){"use strict";(function(t){n("f47e");a(n("66fd"));var e=a(n("e51b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ad2d:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},e51b:function(t,e,n){"use strict";n.r(e);var a=n("ad2d"),o=n("2afc");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("43a2");var r,u=n("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"7eb47a24",null,!1,a["a"],r);e["default"]=c.exports}},[["96f2","common/runtime","common/vendor"]]]);