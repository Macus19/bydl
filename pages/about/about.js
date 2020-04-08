// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   // 流程提示
   processTip: {
     title:'流程',
     tipList: [
       '点击报名参加',
       '填写个人信息',
       '登录',
       '扫码',
       '等候颁发证书'
     ]
    },
    attentionTip: {
      title: '注意事项',
      tipList :[
        '请确保个人信息的准确性，在截止日期前可登录后进行修改，以最终结果为主',
        '毕业典礼为学生自主选择参加与否',
        '已扫码的同学除非特殊情况，请于等候队列等待',
        '有特殊情况请及时告知辅导员',
        '初始密码为身份证后六位',
        '毕业典礼报名截止时间为*月*日；信息修改截止时间为 * 月 * 日'
      ]
    }
  
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
   * 返回至上一页
   * @method turnBackPage
   */
  turnBackPage:function(){
    wx.navigateBack({
      delta:1
    })
  }
})