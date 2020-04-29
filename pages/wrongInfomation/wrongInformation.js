// pages/wrongInfomation/wrongInformation.js
import Dialog from '@vant/weapp/dialog/dialog'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 有误项数组，元素为id-title-value对象
    wrongInfoArray: [
      {
        title:'姓名',
        value:''
      }
    ]
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
   * 根据add和del按钮来增删选项卡
   * @param {*} e 
   * @method changeBarNum
   */
  changeBarNum: function (e) {
    let num = e.detail
    if (num > 0) {
      let current = {
        title:'姓名',
        value:''
      }
      let wrongInfoArray = this.data.wrongInfoArray
      wrongInfoArray.push(current)
      this.setData({
        wrongInfoArray
      })
      console.log(this.data.wrongInfoArray)
    }
    // 如果点击删除按钮，将相应的wronginfo中的对象删除
    else if (num < 0) {
      let idx = e.currentTarget.dataset.idx
      let wrongInfoArray = this.data.wrongInfoArray
      wrongInfoArray.splice(idx,1)
      this.setData({
        wrongInfoArray
      })
      this.selectAllComponents
      console.log(this.data.wrongInfoArray)
    }
  },
  /**
   * 获得当前的错误选项键值对
   * @param {*} e 
   */
  getWrongInfo: function (e) {
    // 当前的有误项填写的键值对
    let wrongInfo = e.detail
    // 当前选项卡的索引
    let idx = e.currentTarget.dataset.idx
    // 检测是不是修改已经存在的选项卡（不是添加
    // let isExisted = this.data.wrongInfoArray.findIndex((item) => {
    //   return 
    // })
    // console.log(isExisted)
      let wrongInfoArray = this.data.wrongInfoArray
      wrongInfoArray[idx] = wrongInfo
      this.setData({
        wrongInfoArray
      })
    console.log(this.data.wrongInfoArray)
  },
  /**
   * 提交错误信息
   * @method submitWrong
   */
  submitWrong: function () {
    Dialog.alert({
      message: '提交成功',
      confirmButtonText: '知道了',
      showCancelButton: false
    })
  }
})