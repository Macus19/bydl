// pages/ceremonyScene/ceremonyScene.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 正在颁发的学院
    currentCollage: '商学院',
    // 博士生
    doctors: {
      signup: 2000, // 报名人数
      notAward: 1800, // 已颁人数
      awarded: 200 // 未颁人数
    },
    // 硕士生
    masters: {
      signup: 2000, // 报名人数
      notAward: 1800, // 已颁人数
      awarded: 200 // 未颁人数
    },
    //本科生
    bachelors: {
      signup: 2000, // 报名人数
      notAward: 1800, // 已颁人数
      awarded: 200 // 未颁人数
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 跳转到扫码后的典礼现场页面
   * @method turnToScanedCeremonyScene
   */
  turnToScanedCeremonyScene: function () {
    wx.navigateTo({
      url: '../scanedCeremonyScene/scanedCeremonyScene',
    })
  },
  /**
   * 跳转到查看现场队列页面
   * @method turnToScanedCeremonyScene
   */
  turnToCheckQueueOnSite:function(){
    wx.navigateTo({
      url: '../checkQueueOnSite/checkQueueOnSite',
    })
  }
})