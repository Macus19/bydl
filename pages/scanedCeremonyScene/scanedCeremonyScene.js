// pages/scanedCeremonyScene/scanedCeremonyScene.js
import Dialog from '@vant/weapp/dialog/dialog'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 学生名
    username: '黄小饼',
    // 学号
    studentId: '20171000000',
    // 当前位置
    myPosition: '1组1位',
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
   * 退出当前队列
   * @method  quitQueue
   */
  quitQueue:function(){
    Dialog.confirm({
      title:'确定退出队列？',
      message:'退出后排队请再次扫码'
    }).then(()=>{
      wx.navigateBack({
        delta:1
      })
    })
  }
})