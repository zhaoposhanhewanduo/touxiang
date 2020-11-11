Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    // 图片的宽度
    cansWidth: 300,
    cansHeight: 300,
    // 头像图片路径
    avatarPath: "cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/kouzhan/avatar_mask.png",
    iconUrl:[],

  },
  onShow: function (options) {
    const _this = this
    const ctx = wx.createCanvasContext('myCanvas')
    // 获取默认图片
    wx.cloud.downloadFile({
      fileID: 'cloud://kaifa-9gh6z1r846d2dcd4.6b61-kaifa-9gh6z1r846d2dcd4-1304172747/kouzhan/avatar_mask.png', // 文件 ID
      success: res => {
        // 返回临时文件路径
        ctx.drawImage(res.tempFilePath, 0, 0, 150, 150)
        ctx.draw()
      },
    })
    this.getIcon()
  },

  // 获取数据库ICON数据
  getIcon(){
    const _this = this
    const db = wx.cloud.database()
    db.collection('kouzhao').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      let list = []
      res.data.map(item=>{
        list.push(item)
        this.setData({
          iconUrl : list
        })
      })
    })
  }
})