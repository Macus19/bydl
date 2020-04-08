// components/wrongInformation/ChangeBar/ChangeBar.js
Component({
  /**
   * 组件生命周期
   */
  lifetimes:{
    ready: function(){
      this.setData({
        ['wrongObj.title']: this.data.wrongList[this.data.wrongTitleIndex],
        ['wrongObj.value']: ''
      })
      this.triggerEvent('changeWrongInfo',this.data.wrongObj)
      console.log(this.data.isFirstOne)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否第一个选项卡
    isFirstOne:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 有误项索引
    wrongTitleIndex: 0,
    // 有误项列表
    wrongList: [
      '姓名',
      '学历',
      '学院',
      '专业班级',
      '学号',
      '学位一',
      '学位二',
      '国籍',
    ],
    // 当前项是否显示picker
    isPicker: false,
    // 当前选项值的索引
    currentItemIndex: 0,
    // 当前选项列表
    currentItemList: [],
    objectArray: [
      [],
      ['本科', '硕士'],
      ['信息学院', '别的学院'],
      [],
      [],
      ['工学学位'],
      ['理学学位'],
      []
    ],
    // 错误项键值对
    wrongObj: {
      title: '',
      value: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 改变修改栏目名
     * @param e {object} 当前事件
     * @method  changeTitle
     */
    changeTitle: function (e) {
      this.setData({
        wrongTitleIndex: e.detail.value,
        ['wrongObj.title']: this.data.wrongList[e.detail.value],
      })
      this.triggerEvent('changeWrongInfo',this.data.wrongObj)
      this.isShowPicker()
    },
    /**
     * 改变选项值
     * @param e {object} 当前事件
     * @method  changeValue
     */
    changeValue: function (e) {
      if (this.data.isPicker) {
        this.setData({
          currentItemIndex: e.detail.value,
          ['wrongObj.value']: this.data.currentItemList[e.detail.value]
        })
        this.triggerEvent('changeWrongInfo',this.data.wrongObj)
        console.log(this.data.wrongObj)
      }
    },
    /**
     * 判断是否显示picker
     * @method isShowPicker
     */
    isShowPicker: function () {
      // 如果当前选项对应的列表为空，不显示picker，显示input
      if (this.data.objectArray[this.data.wrongTitleIndex].length == 0) {
        this.setData({
          isPicker: false,
          // 清空当前值
          ['wrongObj.value']:''
        })
        this.triggerEvent('changeWrongInfo',this.data.wrongObj)
        return
      } else {
        this.setData({
          isPicker: true,
        })
      }
      this.chooseList()
    },
    /**
     * 选择当前需要显示的列表
     * @method chooseList
     */
    chooseList: function () {
      if (this.data.isPicker) {
        // 先更改当前选项值的列表
        this.setData({
          currentItemList: this.data.objectArray[this.data.wrongTitleIndex],
        })
        // 默认选中第一个
        this.setData({
          ['wrongObj.value']: this.data.currentItemList[0]
        })
        this.triggerEvent('changeWrongInfo',this.data.wrongObj)
      }
    },
    /**
     * 增加一个填写选项
     * @method addOneBar
     */
    addOneBar: function () {
      let num = 1
      this.triggerEvent('changeBarNum', num)
    },

    /**
     * 删除一个填写选项
     * @method deleteOneBar
     */
    deleteOneBar: function () {
      let num = -1
      this.triggerEvent('changeBarNum', num)
    },
    /**
     * 如果是输入框，就直接将value设为用户输入
     * @param {*} e 
     * @method getInput
     */
    getInput: function (e) {
      this.setData({
        ['wrongObj.value']: e.detail.value
      })
      console.log(this.data.wrongObj)
      this.triggerEvent('changeWrongInfo',this.data.wrongObj)
    }
  },
})