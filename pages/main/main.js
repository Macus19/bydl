//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图的展示图片列表
    swiperImageList: [
      '/images/main/banner.png',
      '/images/main/banner.png',
      '/images/main/banner.png'
    ],
    // 轮播图中当前展示图片的索引
    currentSwiperIndex: 0
  },
  onLoad: function () {
  },
  /**
   * 轮播图播放时切换当前对应高亮指示点
   * @method swiperChange
   * @param {object}e 当前触发的事件
   */
  swiperChange: function(e){
    this.setData({
      currentSwiperIndex: e.detail.current
    })
  },
  /**
   * 跳转至报名页面
   * @method turnToSignUpPage
   */
  turnToSignUpPage:function(){
    wx.navigateTo({
      url: '../signup/signup',
    })
  },
    /**
   * 跳转至我的页面
   * @method turnToMinePage
   */
  turnToMinePage: function(){
    wx.navigateTo({
      url: '../mine/mine',
    })
  },
  /**
   * 跳转至典礼现场页面
   * @method turnToCeremonyScenePage
   */
  turnToCeremonyScenePage:function(){
    wx.navigateTo({
      url: '../ceremonyScene/ceremonyScene',
    })
  }
})
