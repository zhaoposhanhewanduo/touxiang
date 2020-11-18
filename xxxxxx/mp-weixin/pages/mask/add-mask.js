(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/mask/add-mask"], {
    "4e9d": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("8f9e"),
        o = a.n(n);
      for (var s in n) "default" !== s && function (t) {
        a.d(e, t, (function () {
          return n[t]
        }))
      }(s);
      e["default"] = o.a
    },
    "706a": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("979f"),
        o = a("4e9d");
      for (var s in o) "default" !== s && function (t) {
        a.d(e, t, (function () {
          return o[t]
        }))
      }(s);
      a("a1d4");
      var i, r = a("f0c5"),
        c = Object(r["a"])(o["default"], n["b"], n["c"], !1, null, "78974771", null, !1, n["a"], i);
      e["default"] = c.exports
    },
    "8f9e": function (t, e, a) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = a("2f62");

        function o(t, e) {
          var a = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), a.push.apply(a, n)
          }
          return a
        }

        function s(t) {
          for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(a), !0).forEach((function (e) {
              i(t, e, a[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            }))
          }
          return t
        }

        function i(t, e, a) {
          return e in t ? Object.defineProperty(t, e, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = a, t
        }
        var r = function () {
            a.e("components/tui/footer").then(function () {
              return resolve(a("1bec"))
            }.bind(null, a)).catch(a.oe)
          },
          c = function () {
            a.e("components/add-tips").then(function () {
              return resolve(a("493a"))
            }.bind(null, a)).catch(a.oe)
          },
          l = null,
          h = null,
          d = function (t, e, a) {
            return Array.from(Array.from(Array(Math.ceil((e - t) / a)).keys()), (function (e) {
              return t + e * a
            }))
          },
          u = "PLUG-ADD-MYAPP-KEY",
          f = {
            components: {
              tuiFooter: r,
              addTips: c
            },
            data: function () {
              return {
                SHOW_TIP: !1,
                duration: 15,
                statusBarHeight: 0,
                windowHeight: 0,
                isAndroid: getApp().globalData.IS_ANDROID,
                modalName: null,
                savedCounts: 0,
                cansWidth: 270,
                cansHeight: 270,
                avatarPath: "/static/image/mask/avatar_mask.png",
                imgList: d(0, 29, 1),
                currentMaskId: -1,
                showBorder: !1,
                maskCenterX: wx.getSystemInfoSync().windowWidth / 2,
                maskCenterY: 250,
                cancelCenterX: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
                cancelCenterY: 200,
                handleCenterX: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
                handleCenterY: 300,
                maskSize: 100,
                scale: 1,
                rotate: 0,
                rotateY: 0,
                mask_center_x: wx.getSystemInfoSync().windowWidth / 2,
                mask_center_y: 250,
                cancel_center_x: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
                cancel_center_y: 200,
                handle_center_x: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
                handle_center_y: 300,
                scaleCurrent: 1,
                rotateCurrent: 0,
                touch_target: "",
                start_x: 0,
                start_y: 0
              }
            },
            computed: s(s({}, (0, n.mapState)({
              userInfo: "userInfo"
            })), {}, {
              maskPic: function () {
                return "/static/image/mask/" + this.currentMaskId + ".png"
              }
            }),
            onLoad: function (e) {
              this.windowHeight = getApp().globalData.windowHeight, getApp().globalData.userAvatarFilePath && (this.avatarPath = getApp().globalData.userAvatarFilePath);
              var a = this;
              wx.createInterstitialAd && (h = wx.createInterstitialAd({
                adUnitId: "adunit-2bf7cf186785bfda"
              }), h.onLoad((function () {})), h.onError((function (t) {
                console.log(t)
              })), h.onClose((function () {}))), wx.createRewardedVideoAd && (l = wx.createRewardedVideoAd({
                adUnitId: "adunit-9a8af70b40e15f29"
              }), l.onLoad((function () {
                a.rewardedVideoAdLoaded = !0
              })), l.onError((function (t) {
                a.rewardedVideoAdLoaded = !1
              })), l.onClose((function (e) {
                e && e.isEnded || void 0 === e ? (a.rewardedVideoAdAlreadyShow = !0, a.saveCans()) : (a.rewardedVideoAdAlreadyShow = !1, t.showToast({
                  title: "请完整观看哦"
                }))
              })))
            },
            onReady: function () {
              var e = t.getStorageSync(u);
              if (console.log("cache", e), !e) {
                this.statusBarHeight = t.getSystemInfoSync().statusBarHeight, console.log("this.statusBarHeight", this.statusBarHeight), this.SHOW_TIP = !0, console.log("SHOW_TIP", this.SHOW_TIP);
                var a = this;
                setTimeout((function () {
                  a.SHOW_TIP = !1
                }), 1e3 * a.duration)
              }
            },
            onShow: function () {
              console.log("onShow"), h && h.show().catch((function (t) {
                console.error(t)
              })), getApp().globalData.rapaintAfterCrop && (getApp().globalData.rapaintAfterCrop = !1, this.avatarPath = getApp().globalData.cropImageFilePath, this.paint())
            },
            onShareAppMessage: function () {
              return {
                title: "我换上了口罩头像，防止疫情蔓延，30款口罩、护目镜任你选！",
                desc: "防传染、戴口罩，从我做起！",
                imageUrl: "/static/image/mask/avatar_mask.png",
                path: "/pages/index/index",
                success: function (t) {
                  console.log(t)
                }
              }
            },
            methods: s(s({}, (0, n.mapMutations)(["saveLoginUserInfo"])), {}, {
              paint: function () {},
              showTips: function () {
                console.log("tips"), this.modalName = "tips"
              },
              touchAvatarBg: function () {
                this.showBorder = !1
              },
              touchStart: function (t) {
                console.log("e.target.id", t.target.id), "mask" == t.target.id ? (this.touch_target = "mask", this.showBorder = !0) : "handle" == t.target.id ? this.touch_target = "handle" : this.touch_target = "", "" != this.touch_target && (this.start_x = t.touches[0].clientX, this.start_y = t.touches[0].clientY)
              },
              touchEnd: function (t) {
                this.mask_center_x = this.maskCenterX, this.mask_center_y = this.maskCenterY, this.cancel_center_x = this.cancelCenterX, this.cancel_center_y = this.cancelCenterY, this.handle_center_x = this.handleCenterX, this.handle_center_y = this.handleCenterY, this.touch_target = "", this.scaleCurrent = this.scale, this.rotateCurrent = this.rotate
              },
              touchMove: function (t) {
                var e = t.touches[0].clientX,
                  a = t.touches[0].clientY,
                  n = e - this.start_x,
                  o = a - this.start_y;
                if ("mask" == this.touch_target && (this.maskCenterX = this.maskCenterX + n, this.maskCenterY = this.maskCenterY + o, this.cancelCenterX = this.cancelCenterX + n, this.cancelCenterY = this.cancelCenterY + o, this.handleCenterX = this.handleCenterX + n, this.handleCenterY = this.handleCenterY + o), "handle" == this.touch_target) {
                  this.handleCenterX = this.handleCenterX + n, this.handleCenterY = this.handleCenterY + o, this.cancelCenterX = 2 * this.maskCenterX - this.handleCenterX, this.cancelCenterY = 2 * this.maskCenterY - this.handleCenterY;
                  var s = this.handle_center_x - this.mask_center_x,
                    i = this.handle_center_y - this.mask_center_y,
                    r = this.handleCenterX - this.mask_center_x,
                    c = this.handleCenterY - this.mask_center_y,
                    l = Math.sqrt(s * s + i * i),
                    h = Math.sqrt(r * r + c * c),
                    d = Math.atan2(i, s) / Math.PI * 180,
                    u = Math.atan2(c, r) / Math.PI * 180;
                  this.scale = h / l * this.scaleCurrent, this.rotate = u - d + this.rotateCurrent
                }
                this.start_x = e, this.start_y = a
              },
              getUserInfoCallBack: function (e) {
                if (console.log("mpGetUserInfo", e), "getUserInfo:ok" === e.detail.errMsg) {
                  var a = e.detail.userInfo;
                  a.avatarUrl = a.avatarUrl.replace("132", "0"), getApp().globalData.userAvatarUrl = a.avatarUrl, t.showLoading({
                    title: "头像加载中..."
                  });
                  var n = this;
                  t.downloadFile({
                    url: a.avatarUrl,
                    success: function (e) {
                      t.hideLoading(), n.avatarPath = e.tempFilePath, getApp().globalData.userAvatarFilePath = e.tempFilePath
                    },
                    fail: function (e) {
                      console.log(e), t.hideLoading(), t.showModal({
                        title: "图片加载超时",
                        content: "检查网络，点击确定重新加载",
                        success: function (t) {
                          t.confirm ? n.downloadAvatarAndPaintAll(imageUrl) : t.cancel && console.log("用户点击取消")
                        }
                      })
                    }
                  })
                } else t.showModal({
                  title: "获取用户头像失败",
                  content: "用户信息仅用于创建新的图片，请放心使用",
                  showCancel: !1
                })
              },
              chooseImage: function () {
                var e = this;
                t.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function (t) {
                    var a = t.tempFilePaths[0];
                    e.imageCheck(a, e.loadRecImageOrStartToCrop)
                  }
                })
              },
              loadRecImageOrStartToCrop: function (e) {
                this.ownImageUsed = !0;
                var a = this;
                t.getImageInfo({
                  src: e,
                  success: function (n) {
                    var o = n.width,
                      s = n.height,
                      i = (o - s) / o.toFixed(3);
                    if (console.log("delta", i), -.02 <= i && i <= 0 || 0 < i && i <= .02) {
                      a.avatarPath = e, a.paint()
                    } else t.navigateTo({
                      url: "/pages/crop/crop?tempFilePath=" + e
                    })
                  }
                })
              },
              changeMask: function (t) {
                this.currentMaskId = t.target.dataset.maskId, this.showBorder = !0
              },
              draw: function () {
                var e = this.scale,
                  a = this.rotate,
                  n = this.mask_center_x,
                  o = this.mask_center_y,
                  s = this,
                  i = wx.createSelectorQuery();
                i.select("#avatar-bg").boundingClientRect(), i.exec((function (i) {
                  n -= i[0].left, o -= i[0].top;
                  var r = wx.createCanvasContext("cans-id-mask"),
                    c = (wx.getSystemInfoSync().windowWidth, 100 * e);
                  r.clearRect(0, 0, s.cansWidth, s.cansHeight), r.drawImage(s.avatarPath, 0, 0, s.cansWidth, s.cansHeight), r.translate(n, o), r.rotate(a * Math.PI / 180), s.isAndroid && 180 == s.rotateY && r.scale(-1, 1), r.drawImage(s.maskPic, -c / 2, -c / 2, c, c), r.draw(), l && s.rewardedVideoAdLoaded ? t.showModal({
                    title: "获取无限制使用",
                    content: "观看完视频可以自动保存哦",
                    success: function (t) {
                      if (t.confirm) console.log("用户点击确定"), l && (s.rewardedVideoAdAlreadyShow = !0, l.show().catch((function () {
                        l.load().then((function () {
                          l.show()
                        })).catch((function (t) {
                          console.log(t), console.log("激励视频 广告显示失败")
                        }))
                      })));
                      else if (t.cancel) return console.log("用户点击取消"), void s.saveCans()
                    }
                  }) : s.saveCans()
                }))
              },
              flipHorizontal: function () {
                this.rotateY = 0 == this.rotateY ? 180 : 0
              },
              saveCans: function () {
                var e = this;
                t.showLoading({
                  title: "保存...",
                  mask: !0
                }), t.canvasToTempFilePath({
                  x: 0,
                  y: 0,
                  height: this.cansWidth,
                  width: this.cansHeight,
                  destWidth: 3 * this.cansWidth,
                  destHeight: 3 * this.cansHeight,
                  canvasId: "cans-id-mask",
                  success: function (a) {
                    t.hideLoading(), getApp().globalData.maskAvatarSavedTempPath = a.tempFilePath, t.saveImageToPhotosAlbum({
                      filePath: a.tempFilePath,
                      success: function (a) {
                        0 == e.savedCounts ? e.modalName = "saveTip" : t.showToast({
                          title: "请至相册查看"
                        }), e.savedCounts++, t.vibrateShort({
                          success: function () {
                            console.log("vibrateShort")
                          }
                        })
                      },
                      fail: function (e) {
                        console.log(e), e.errMsg.indexOf("fail") && t.showModal({
                          title: "您需要授权相册权限",
                          success: function (e) {
                            e.confirm && t.openSetting({
                              success: function (t) {
                                console.log("相册授权成功")
                              },
                              fail: function (t) {
                                console.log(t)
                              }
                            })
                          }
                        })
                      }
                    })
                  },
                  fail: function (e) {
                    t.hideLoading()
                  }
                }, this)
              },
              showModal: function (t) {
                this.modalName = t.currentTarget.dataset.target
              },
              hideModal: function (t) {
                this.modalName = null
              },
              imageCheck: function (e, a) {
                if (getApp().globalData.enableSecurityCheck) {
                  t.compressImage({
                    src: e,
                    quality: 1,
                    success: function (n) {
                      var o = n.tempFilePath;
                      wx.getFileSystemManager().readFile({
                        filePath: o,
                        success: function (n) {
                          t.showLoading({
                            title: "加载中..."
                          }), wx.cloud.callFunction({
                            name: "contentCheck",
                            data: {
                              value: n.data
                            },
                            success: function (n) {
                              console.log("checkContent result", n), 87014 == n.result.errCode ? (t.showModal({
                                title: "请勿使用违法违规内容",
                                content: "图片含有违法违规内容",
                                showCancel: !1,
                                confirmText: "知道了"
                              }), console.log("bad")) : (console.log("good"), a(e))
                            },
                            fail: function (e) {
                              console.log(e), t.showModal({
                                title: "请重试",
                                content: "对不起，服务器开了小差",
                                showCancel: !1,
                                confirmText: "好的"
                              })
                            },
                            complete: function () {
                              t.hideLoading()
                            }
                          })
                        }
                      })
                    }
                  })
                } else a(e)
              }
            })
          };
        e.default = f
      }).call(this, a("543d")["default"])
    },
    "979f": function (t, e, a) {
      "use strict";
      var n;
      a.d(e, "b", (function () {
        return o
      })), a.d(e, "c", (function () {
        return s
      })), a.d(e, "a", (function () {
        return n
      }));
      var o = function () {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        s = []
    },
    "97fd": function (t, e, a) {
      "use strict";
      (function (t) {
        a("f47e");
        n(a("66fd"));
        var e = n(a("706a"));

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, a("543d")["createPage"])
    },
    a1d4: function (t, e, a) {
      "use strict";
      var n = a("e0cf"),
        o = a.n(n);
      o.a
    },
    e0cf: function (t, e, a) {}
  },
  [
    ["97fd", "common/runtime", "common/vendor"]
  ]
]);