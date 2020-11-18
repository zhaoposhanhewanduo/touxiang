(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/add-tips"],{"0aa4":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return u})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var u=function(){var t=this,a=t.$createElement;t._self._c},r=[]},"121c":function(t,a,n){"use strict";n.r(a);var e=n("a9aa"),u=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=u.a},"35cd":function(t,a,n){"use strict";var e=n("a5da"),u=n.n(e);u.a},"493a":function(t,a,n){"use strict";n.r(a);var e=n("0aa4"),u=n("121c");for(var r in u)"default"!==r&&function(t){n.d(a,t,(function(){return u[t]}))}(r);n("35cd");var c,i=n("f0c5"),o=Object(i["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);a["default"]=o.exports},a5da:function(t,a,n){},a9aa:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n="PLUG-ADD-MYAPP-KEY",e={name:"add-tips",data:function(){return{SHOW_TOP:!0,SHOW_MODAL:!1}},props:{text:{type:String,default:"点击「添加小程序」，下次访问更便捷 >"},duration:{type:Number,default:5},statusBarHeight:{type:Number,default:0}},methods:{showModal:function(){this.SHOW_MODAL=!0,this.SHOW_TOP=!1},okHandler:function(){this.SHOW_MODAL=!1,t.setStorage({key:n,data:+new Date})}}};a.default=e}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/add-tips-create-component',
    {
        'components/add-tips-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("493a"))
        })
    },
    [['components/add-tips-create-component']]
]);
