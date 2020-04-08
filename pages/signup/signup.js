// pages/signup/signup.js
import Dialog from '@vant/weapp/dialog/dialog'
import { wuxDialog } from 'wux-weapp'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 当前登陆的学生的信息
    studentInfo: {
      name: '黄小饼', // 姓名
      educationBackground: '本科', // 学历
      collage: '商学院',  //  学院
      majaoAndClass: '电子商务1701班',  // 专业班级
      studentID: '201710000000',  // 学号
      degreeOne: '管理学学位',  // 学位一
      degreeTwo: '无',  // 学位二
      nationality: '中国'  // 国籍
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
   * 点击确认报名
   * @method confirmSignup
   */
  confirmSignup: function(){
    Dialog.confirm({
      title: '确定要报名吗？',
      message: '报名后无法取消！',
      }).then(()=>{
        Dialog.alert({
          message: '报名成功',
          confirmButtonText: '知道了',
          showCancelButton: false
        })
      })
  },
  /**
   * 跳转到信息有误页面
   * @method turnToWrongInfoPage
   */
  turnToWrongInfoPage:function(){
    wx.navigateTo({
      url: '../wrongInfomation/wrongInformation',
    })
  },
  /**
   * 跳转到关于毕业典礼页面
   * @method turnToAboutPage
   */
  turnToAboutPage:function(){
    wx.navigateTo({
      url: '../about/about',
    })
  }
})