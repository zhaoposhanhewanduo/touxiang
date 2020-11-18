(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"3a8f":function(t,a,n){"use strict";n.r(a);var e=n("ff21"),u=n("9b2a");for(var r in u)"default"!==r&&function(t){n.d(a,t,(function(){return u[t]}))}(r);var o,c=n("f0c5"),i=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);a["default"]=i.exports},"9b2a":function(t,a,n){"use strict";n.r(a);var e=n("af32"),u=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=u.a},af32:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,n=this.bgImage,e="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(e="".concat(e,"background-image:url(").concat(n,");")),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var a="/"+__wxConfig.pages[0];return t.redirectTo({url:a})}t.navigateBack({delta:1})}}};a.default=n}).call(this,n("543d")["default"])},ff21:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return u})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var u=function(){var t=this,a=t.$createElement;t._self._c},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3a8f"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);
