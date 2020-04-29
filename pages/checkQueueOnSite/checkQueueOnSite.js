// pages/checkQueueOnSite/checkQueueOnSite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInQueue:false,
    myNumber:18,
    myPosition:'1组1号',
    // 当前位置
    currentPosition:'*组*位',
    // 准备位置
    readyPosition:'*组*位',
    // 当前组
    currentNumber:'1-8组',
    // 准备组
    readyNumber:'9-22组',
    // 当前上台的队列
    currentList:[
      {
        position:1,
        name:'黄小饼',
      },
      {
        position:1,
        name:'黄小饼',
      },
      {
        position:1,
        name:'黄小饼',
      },
      {
        position:1,
        name:'黄小饼',
      },
      {
        position:1,
        name:'黄小饼',
      },
      {
        position:1,
        name:'黄小饼',
      },
      {
        position:1,
        name:'黄小饼',
      },
      {
        position:1,
        name:'黄小饼',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let isInQueue = options.isInQueue
    this.setData({
      isInQueue:isInQueue
    })
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

  }
})