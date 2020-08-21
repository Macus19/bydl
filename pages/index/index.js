// pages/login/login.js
import { fetch } from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 学号icon地址
    studentIdIconSrc: '/images/index/studentId-no.png',
    // 密码icon地址
    passwordIconSrc: '/images/index/password-no.png',
    // 学号
    studentId: '',
    // 密码
    password: '',
    // 按钮是否为激活状态
    isButtonActivate: false,
    // 是否显示清除按钮
    isShowClearButton: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // fetch({
    //   url: '/admin/index/index',
    //   method:'POST',
    //   data:{
    //     token:'login',
    //     type:'A002',
    //     data:{
    //       username:'2003123123',
    //       password:'123456'
    //     }
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 获得学号
   * @method getStudentId
   * @param {Object} e 当前触发的事件
   */
  getStudentId: function(e) {
    // 当前输入框内的值赋给studentId
    this.setData({
      studentId: e.detail.value
    })
    // 判断studentId是否为空字符串，不是的话将icon变成深色
    if (this.data.studentId !== '') {
      this.setData({
        studentIdIconSrc: '/images/index/studentId-ok.png'
      })
      this.activateButton()
      // 是的话，将icon变为浅色
    } else {
      this.setData({
        studentIdIconSrc: '/images/index/studentId-no.png'
      })
      this.unactivateButton()
    }
  },
  /**
   * 获得密码
   * @method getPassword
   * @param {Object} e 当前触发的事件
   */
  getPassword: function(e) {
    // 当前输入框内的值赋给password
    this.setData({
      password: e.detail.value
    })
    // 判断studentId是否为空字符串，不是的话将icon变成深色
    if (this.data.password !== '') {
      this.setData({
        passwordIconSrc: '/images/index/password-ok.png',
        isShowClearButton: true
      })
      this.activateButton()
      // 是的话，将icon变为浅色
    } else {
      this.setData({
        passwordIconSrc: '/images/index/password-no.png',
        isShowClearButton: false
      })
      this.unactivateButton()
    }
  },
  /**
   * 激活登录按钮，颜色变深
   * @method activateButton
   */
  activateButton: function() {
    this.setData({
      isButtonActivate: true
    })
  },
  /**
   * 不激活登录按钮，颜色变浅
   * @method activateButton
   */
  unactivateButton: function() {
    if (this.data.studentId == '' && this.data.password == '') {
      this.setData({
        isButtonActivate: false
      })
    }
  },
  /**
   * 清除密码输入框内的值
   * @method clearPasswordInput
   */
  clearPasswordInput:function(){
    this.setData({
      password: '',
      passwordIconSrc: '/images/index/password-no.png',
      isShowClearButton: false
    })
    this.unactivateButton()    
  },
  /**
   * 跳转至主页面
   * @method turnToMainPage
   */
  login: function(){
    // 如果按钮为激活状态
    if(this.data.isButtonActivate){
      wx.login({
        success:(res)=>{
          console.log(res.code)
          if(res.code){
            fetch({
              url:'/user/wx_login',
              method:'POST',
              data:{
                code:res.code,
                number:this.data.studentId,
                password:this.data.password
              },
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then((res)=>{
              console.log(res)
              getApp().globalData.userInfo = res.data
              wx.navigateTo({
                url: '../main/main',
              })
            })
          }
        }
      })
    }
  },
  /**
   * 跳转至关于毕业典礼页面
   * @method turnToAboutPage
   */
  turnToAboutPage:function(){
    wx.navigateTo({
      url: '../about/about',
    })
  }
})