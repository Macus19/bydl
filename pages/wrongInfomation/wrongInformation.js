// pages/wrongInfomation/wrongInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前选项卡个数
    barNum:1,
    // 有误项数组，元素为title-value对象
    wrongInfoArray: []
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
  changeBarNum:function(e){
    let num = e.detail
    let currentItemIndex = e.currentTarget.dataset.id
    console.log(currentItemIndex)
    this.setData({
      barNum: parseInt(this.data.barNum)+parseInt(num)
    })
    // 如果点击删除按钮，将相应的wronginfo中的对象删除
    if(num<0){
      this.data.wrongInfoArray.splice(currentItemIndex,1)
    }
    console.log(this.data.wrongInfoArray)
  },
  /**
   * 获得当前的错误选项键值对
   * @param {*} e 
   */
  getWrongInfo:function(e){
    // 当前的有误项填写的键值对
    let wrongInfo = e.detail
    // 当前选项卡的索引
    let index = e.currentTarget.dataset.id
    // 检测是不是修改已经存在的选项卡（不是添加
    let isExisted = this.data.wrongInfoArray.findIndex((item)=>{
      return item.index == index
    })
    // 如果是新添加的选项，push进数组
    if(isExisted == -1){
      this.data.wrongInfoArray.push({index,wrongInfo})
    }else{
      // 如果不是，修改对应选项
      this.data.wrongInfoArray[index] = {index,wrongInfo}
    }
    console.log(this.data.wrongInfoArray)
  }
})