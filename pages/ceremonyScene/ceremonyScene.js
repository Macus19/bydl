// pages/ceremonyScene/ceremonyScene.js
import Dialog from '@vant/weapp/dialog/dialog'
import {
  fetch
} from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInQueue: false,
    pos: {},
    studentInfo: {},
    // 正在颁发的学院
    currentCollage: '商学院',
    // 博士生
    doctor: {
      total: 2000, // 报名人数
      complete: 1800, // 已颁人数
      left: 200 // 未颁人数
    },
    // 硕士生
    master: {
      total: 2000, // 报名人数
      complete: 1800, // 已颁人数
      left: 200 // 未颁人数
    },
    //本科生
    bachelor: {
      total: 2000, // 报名人数
      complete: 1800, // 已颁人数
      left: 200 // 未颁人数
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
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
    this.getCeremonyInfo()
    this.getStudentQueue()
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
   * 获取当前队列信息（普通学生）
   */
  getStudentQueue:function(){
    fetch({
      url:'/user/queue',
      method:'GET',
      header: {
        token: getApp().globalData.userInfo.token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then((res)=>{
      if (res.data.pos) {
        this.setData({
          isInQueue: true
        })
      }
      this.setData({
        currentNumber: res.data.current,
        pos: res.data.pos,
        interval: res.data.interval
      })
    })
  },
  /**
   * 获取典礼现场信息
   */
  getCeremonyInfo: function () {
    fetch({
      url: '/user/ceremony_info',
      method: 'GET',
      header: {
        token: getApp().globalData.userInfo.token
      }
    }).then((res) => {
      this.setData({
        bachelor: res.data.undergraduate,
        master: res.data.master,
        doctor: res.data.doctor
      })
    })
  },
  /**
   * 跳转到扫码后的典礼现场页面
   * @method turnToScanedCeremonyScene
   */
  turnToScanedCeremonyScene: function () {
    wx.scanCode({
      complete: (res) => {
        console.log(res)
        let content = res.result
        console.log(res.result)
        fetch({
          url: '/user/sign_in',
          method: 'POST',
          data: {
            content: content
          },
          header: {
            token: getApp().globalData.userInfo.token,
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res) => {
          wx.showToast({
            title: res.msg,
          })
          wx.navigateTo({
            url: '../checkQueueOnSite/checkQueueOnSite',
          })
        })
      },
    })
    // wx.navigateTo({
    //   url: '../scanedCeremonyScene/scanedCeremonyScene',
    // })
  },
  /**
   * 跳转到查看现场队列页面
   * @method turnToScanedCeremonyScene
   */
  turnToCheckQueueOnSite: function () {
    wx.navigateTo({
      url: '../checkQueueOnSite/checkQueueOnSite',
    })
  },
  /**
   * 跳转至我的页面
   * @method turnToMinePage
   */
  turnToMinePage: function () {
    console.log(1)
    wx.navigateTo({
      url: '../mine/mine',
    })
  },
    /**
   * 获取小程序用户信息
   */
  getUserInfo: function () {
    fetch({
      url: '/user/personal_info',
      mathod: 'GET',
      header: {
        token: getApp().globalData.userInfo.token
      }
    }).then((res) => {
      this.setData({
        studentInfo: res.data
      })
    })
  },
  /**
   * 退出当前队列
   */
  removeQueue: function () {
    Dialog.confirm({
      title: '确定要报名吗？',
      message: '报名后无法取消！',
    }).then(() => {
      fetch({
        url: '/user/remove_sign_in',
        method: 'POST',
        header: {
          token: getApp().globalData.userInfo.token
        }.then((res) => {
          wx.showToast({
            title: '已退出队列！',
          })
        })
      })
    })
  }
})