// components/checkQueueOnSite/QueueBar/QueueBar.js
import pinyin from '../../../miniprogram_npm/js-pinyin/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 序号
    position:{
      type:Number,
      value:1
    },
    // 学生名字
    name:{
      type:String,
      value:'黄小饼'
    },
  },
  externalClasses:['bg-color'],
  attached:function(){
    this.setData({
      pinyin:pinyin.getFullChars(this.data.name)
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    pingyin:'', // 名字的拼音
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
