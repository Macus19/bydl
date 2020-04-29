// pages/mine/mine.js
import Dialog from '@vant/weapp/dialog/dialog'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 学生名
    name:'黄小饼',
    // 学号
    studentId: 2017100000
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
   * 跳转至关于毕业典礼页面
   * @method turnToAboutPage
   */
  turnToAboutPage:function(){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  /**
   * 退出登录跳转至首页
   * @method turnToIndexPage
   */
  turnToIndexPage:function(){
    Dialog.confirm({
      title:'确定要退出吗？',
      message:'将会返回登录页面'
    }).then(()=>{
      wx.reLaunch({
        url: '../index/index',
      })
    })
  }
})