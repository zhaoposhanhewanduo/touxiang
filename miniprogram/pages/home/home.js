Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    navList: [
      // {
      //   "title": "头像加口罩",
      //   "imgurl": 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/kouzhan/avatar_mask.png',
      //   "mes": "冬天再次来临，带上口罩保护自己，不给祖国添麻烦！"
      // },
      {
        "title": "头像加V",
        "imgurl": 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/v/v5.png',
        "mes": "头像一键加V认证，让你秒变大V！"
      },
      {
        "title": "头像加国旗",
        "imgurl": 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/guoqi/2.png',
        "mes": "喜迎国庆，为祖国71周年庆生！"
      },
      {
        "title": "定制情侣头像一键制作",
        "imgurl": 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/qinglv.png',
        "mes": "制作专属情侣头像，保证独一无二"
      },
      {
        "title": "头像加口号",
        "imgurl": 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/laba.png',
        "mes": "每天满满正能量"
      },
      {
        "title": "头像加帽子",
        "imgurl": 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/maozi/maozi10.png',
        "mes": "给我来顶圣诞帽吧..."
      },
    ]
  },
  onLoad: function (options) {
    console.log("page ---onLoad---");
    wx.cloud.downloadFile({
      fileID: 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/bg/bg.png', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        // http://tmp/wx493604e48412fd6b.o6zAJs4RlB3A_idYlKCUd6JIcXXU.JeUb6Qv6gFygad9bfad922be7c379b614f5a700a9be8.png
      },
      fail: console.error
    })
  },
  // 点击列表跳转到详情操作页面
  btnclick: function () {
    wx.navigateTo({
      url: '../photo/photo'
    })
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})