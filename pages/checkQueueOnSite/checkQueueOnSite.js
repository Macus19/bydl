// pages/checkQueueOnSite/checkQueueOnSite.js
import {
  fetch
} from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 1,
    isInQueue:false,
    // 我的位置
    pos: {
      group: '',
      position: ''
    },
    // 当前位置
    currentPosition:'*组*位',
    // 准备位置
    readyPosition:'*组*位',
    // 当前组
    currentNumber:'1-8组',
    // 准备组
    readyNumber:'9-22组',
    // 正在颁发队列
    currentList:[
      {
        position:1,
        name:12
      }
    ],
    beginGroup: '',
    endGroup: '',
    interval: '',
    // 当前准备的队列
    waitingList:[
      {
        position:1,
        username:'黄小饼',
      },
      {
        position:1,
        username:'黄小饼',
      },
      {
        position:1,
        username:'黄小饼',
      },
      {
        position:1,
        username:'黄小饼',
      },
      {
        position:1,
        username:'黄小饼',
      },
      {
        position:1,
        username:'黄小饼',
      },
      {
        position:1,
        username:'黄小饼',
      },
      {
        position:1,
        username:'黄小饼',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStudentQueue()
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
      let group = this.flatten(res.data.queue)
      let currentList = []
      group.forEach((item) => {
        if (item.group === this.data.currentNumber) {
          currentList.push(item)
        }
      })
      this.setData({
        beginGroup: group[0].group,
        endGroup: group[group.length-1].group,
        group: group,
        currentList: currentList
      })
    })
  },
  /**
   * 二维数组扁平化
   * @param arr 一个二维数组
   * @returns arr 扁平后的一维数组
   */
  flatten: function (arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
  },
  /**
   * 主持人请求队列（有分页）
   */
  getMatserStudentList: function () {
    fetch({
      url: '/user/queue_host',
      method: 'GET',
      data: {
        college_id: this.cuurentCollege,
        page: this.currentPage
      },
      header: {
        token: getApp().globalData.userInfo.token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then((res) => {
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
      let group = this.flatten(res.data.queue)
      let currentList = []
      group.forEach((item) => {
        if (item.group === this.data.currentNumber) {
          currentList.push(item)
        }
      })
      this.setData({
        currentPage: this.data.currentPage +1,
        beginGroup: group[0].group,
        endGroup: group[group.length-1].group,
        group: this.data.group.concat(group),
        currentList: currentList
      })
    })
  }
})