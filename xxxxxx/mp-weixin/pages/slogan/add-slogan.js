(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/slogan/add-slogan"],{1769:function(t,e,n){"use strict";n.r(e);var o=n("3273"),a=n("d515");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("6d0c");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"14b42eb8",null,!1,o["a"],s);e["default"]=r.exports},2369:function(t,e,n){"use strict";(function(t){n("f47e");o(n("66fd"));var e=o(n("1769"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},3273:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"6d0c":function(t,e,n){"use strict";var o=n("bf93"),a=n.n(o);a.a},bf93:function(t,e,n){},ca2b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){n.e("components/add-tips").then(function(){return resolve(n("493a"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/tui/footer").then(function(){return resolve(n("1bec"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/tui/icon").then(function(){return resolve(n("e3ed"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/tui/button").then(function(){return resolve(n("e281"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/tui/list-cell").then(function(){return resolve(n("6eb5"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/tui/dropdown-list").then(function(){return resolve(n("f3cb"))}.bind(null,n)).catch(n.oe)},f={components:{tuiFooter:r,tuiButton:h,tuiListCell:u,tuiDropdownList:d,tuiIcon:l,addTips:c},data:function(){return{windowHeight:0,cansWidth:270,cansHeight:270,cansBgColor:"#FFD314",cornerBgColor:"#C12928",cornerBgBoarderColor:"#FFFFFF",r:40,boarderWidth:15,wishText:"武汉加油",dropdownlistData:[{name:"武汉加油",color:"#000",icon:"attestation",size:20},{name:"中国加油",color:"#000",icon:"attestation",size:20},{name:"加油2020",color:"#000",icon:"attestation",size:20},{name:"奋斗2020",color:"#000",icon:"attestation",size:20},{name:"努力2020",color:"#000",icon:"attestation",size:20},{name:"不动如山",color:"#000",icon:"attestation",size:20},{name:"拒绝聚会",color:"#000",icon:"attestation",size:20},{name:"拒绝野味",color:"#000",icon:"attestation",size:20}],dropdownShow:!1,avatarPath:"/static/image/mask/avatar_mask.png",happinessPathList:["/static/image/h0.png","/static/image/h1.png","/static/image/h2.png","/static/image/h3.png","/static/image/h4.png"],happinessIndex:0,copyright:" Copyright © 2016-2020 人文之窗公众号",modalName:null,lastTime:0,x:0,y:0,z:0,lastX:0,lastY:0,lastZ:0,lastChangeTime:0,showGentleMessage:!1,savedCounts:0,freeCount:1,ownImageUsed:!1,showQuestion:!1,envId:"happiness-production-yy81s",collectionName:"ad_config",docId:"add_happiness_rwzc",statusBarHeight:0,SHOW_TIP:!1,duration:20}},computed:i(i({},(0,o.mapState)({userInfo:"userInfo"})),{},{happinessPath:function(){return this.happinessPathList[this.happinessIndex]},cornerX:function(){return Math.ceil(.7*this.cansWidth)},cornerY:function(){return Math.ceil(.7*this.cansHeight)}}),onLoad:function(e){this.windowHeight=getApp().globalData.windowHeight,getApp().globalData.userAvatarFilePath&&(this.avatarPath=getApp().globalData.userAvatarFilePath),this.ctx=t.createCanvasContext("cans-id-happines",this),this.paint()},onReady:function(){console.log("onReady");var e=t.getStorageSync(getApp().globalData.STORAGE_KEY);if(console.log("cache",e),!e){this.statusBarHeight=getApp().globalData.statusBarHeight,this.SHOW_TIP=!0,console.log("SHOW_TIP",this.SHOW_TIP);var n=this;setTimeout((function(){n.SHOW_TIP=!1}),1e3*n.duration)}},onShow:function(){console.log("onshow"),getApp().globalData.rapaintAfterCrop&&(getApp().globalData.rapaintAfterCrop=!1,this.avatarPath=getApp().globalData.cropImageFilePath,this.paint())},onHide:function(){},onShareAppMessage:function(){return{title:"武汉加油，中国加油！",desc:"武汉加油，中国加油，加油2020，不动如山，拒绝聚会，拒绝野味。",path:"/pages/index/index",success:function(t){console.log(t)}}},methods:i(i({},(0,o.mapMutations)(["saveLoginUserInfo"])),{},{dropDownList:function(t){-1!==t&&(this.wishText=this.dropdownlistData[t].name,this.paint()),this.dropdownShow=!this.dropdownShow},paint:function(e,n){e||(e=this.avatarPath),n||(n=this.happinessPath),this.drawCansBgImg(e),this.drawTextBg(),this.drawDefaultText(),t.vibrateShort({success:function(){console.log("vibrateShort")}})},drawCansBgImg:function(t){this.ctx.drawImage(t,0,0,this.cansWidth,this.cansHeight),this.ctx.draw(!1)},drawTextBg:function(){this._drawCircleWithBoarder(this.cornerBgBoarderColor,this.cornerBgColor,this.cornerX,this.cornerY,this.r,this.boarderWidth)},drawHappiness:function(t){this.ctx.drawImage(t,this.cornerX+5,this.cornerY+7,.25*this.cansWidth,.25*this.cansHeight),this.ctx.draw(!0)},drawDefaultText:function(){var e={text:this.wishText,sLeft:.05,sTop:.93,fontSize:60,color:"white",bold:!0,lineHeight:12};this._drawText(e),t.vibrateShort({success:function(){console.log("vibrateShort")}})},_drawCircleWithBoarder:function(t,e,n,o,a,i){this.ctx.save(),this.ctx.rect(0,190,270,80),this.ctx.setFillStyle("#d81e06"),this.ctx.fill(),this.ctx.draw(!0)},_drawText:function(t){var e;if(e="center"==t.sLeft?.5*this.cansWidth-t.fontSize*t.text.length/2:t.sLeft*this.cansWidth,this.ctx.save(),t.bold&&(this.ctx.font="normal bold ".concat(t.fontSize,"px edu-lishu")),this.ctx.setFillStyle(t.color),this.ctx.setFontSize(t.fontSize),t.text instanceof Array){t.lineHeight||(t.lineHeight=t.fontSize+2),console.log("我是数组",t.text);for(var n=0;n<t.text.length;n++)this.ctx.fillText(t.text[n],e,t.sTop*this.cansHeight+t.lineHeight*n)}else console.log("绘制字符",t.text),this.ctx.fillText(t.text,e,t.sTop*this.cansHeight);this.ctx.draw(!0),this.ctx.restore()},downloadAvatarAndPaintAll:function(e){t.showLoading({title:"加载中..."});var n=this;t.downloadFile({url:e,success:function(e){t.hideLoading(),n.avatarPath=e.tempFilePath,getApp().globalData.userAvatarFilePath=e.tempFilePath,n.paint()},fail:function(o){console.log(o),t.hideLoading(),t.showModal({title:"图片加载超时",content:"检查网络，点击确定重新加载",success:function(t){t.confirm?n.downloadAvatarAndPaintAll(e):t.cancel&&console.log("用户点击取消")}})}})},getUserInfoCallBack:function(e){if(console.log("mpGetUserInfo",e),"getUserInfo:ok"===e.detail.errMsg){this.ownImageUsed=!0;var n=e.detail.userInfo;console.log(n),n.avatarUrl=n.avatarUrl.replace("132","0"),getApp().globalData.userAvatarUrl=n.avatarUrl,this.downloadAvatarAndPaintAll(n.avatarUrl),this.saveLoginUserInfo(n)}else t.showModal({title:"获取用户头像失败",content:"用户信息仅用于创建新的图片，请放心使用",showCancel:!1})},chooseImage:function(){var e=this;t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var n=t.tempFilePaths[0];e.imageCheck(n,e.loadRecImageOrStartToCrop)}})},loadRecImageOrStartToCrop:function(e){this.ownImageUsed=!0;var n=this;t.getImageInfo({src:e,success:function(o){var a=o.width,i=o.height,s=(a-i)/a.toFixed(3);if(console.log("delta",s),-.02<=s&&s<=0||0<s&&s<=.02){n.avatarPath=e,n.paint()}else t.navigateTo({url:"/pages/crop/crop?tempFilePath="+e})}})},changeHappiness:function(t){this.happinessIndex=parseInt(t.currentTarget.dataset.target,10),this.paint()},nextHappiness:function(){this.happinessIndex=(this.happinessIndex+1)%5,this.paint()},checkAdBeforeSave:function(){this.saveCans()},saveCans:function(){console.log("保存...");var e=this;t.showLoading({title:"保存...",mask:!0}),t.canvasToTempFilePath({x:0,y:0,width:1.5*this.cansWidth,height:1.5*this.cansHeight,destWidth:3*this.cansWidth,destHeight:3*this.cansHeight,canvasId:"cans-id-happines",success:function(n){t.hideLoading(),t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(n){t.showToast({title:"请至相册查看"}),t.vibrateShort({success:function(){console.log("vibrateShort")}}),e.savedCounts++,console.log("保存成功")},fail:function(e){console.log(e),e.errMsg.indexOf("fail")&&t.showModal({title:"您需要授权相册权限",success:function(e){e.confirm&&t.openSetting({success:function(t){console.log("相册授权成功")},fail:function(t){console.log(t)}})}})}})},fail:function(e){t.hideLoading()}},this)},showModal:function(t){console.log(t.currentTarget.dataset),this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},toSharePage:function(){t.switchTab({url:"/pages/share/share"}),this.hideModal()},imageCheck:function(e,n){if(getApp().globalData.enableSecurityCheck){t.compressImage({src:e,quality:1,success:function(o){var a=o.tempFilePath;wx.getFileSystemManager().readFile({filePath:a,success:function(o){console.log(o.data),t.showLoading({title:"加载中..."}),wx.cloud.callFunction({name:"contentCheck",data:{value:o.data},success:function(o){console.log("checkContent result",o),87014==o.result.errCode?(t.showModal({title:"请勿使用违法违规内容",content:"图片含有违法违规内容",showCancel:!1,confirmText:"知道了"}),console.log("bad")):(console.log("good"),n(e))},fail:function(e){console.log(e),t.showModal({title:"请重试",content:"对不起，服务器开了小差",showCancel:!1,confirmText:"好的"})},complete:function(){t.hideLoading()}})}})}})}else n(e)},onClickFab:function(e){var n=e.index;switch(n){case-1:break;case 0:t.switchTab({url:"/pages/happiness/add-mask"});break;case 1:t.switchTab({url:"/pages/about/about"});break;default:break}}})};e.default=f}).call(this,n("543d")["default"])},d515:function(t,e,n){"use strict";n.r(e);var o=n("ca2b"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a}},[["2369","common/runtime","common/vendor"]]]);