import { baseUrl } from './config'
import Toast from '../miniprogram_npm/@vant/weapp/toast/toast'

function fetch(options){
  if(options.load === 1){
    wx.showLoading({
      title: '加载中',
    })
  }
  return new Promise((resolve,reject)=>{
    if(Object.prototype.toString.call(options.data) === '[object string]'){
      let obj = JSON.parse(options.data)
      options.data = JSON.stringify(obj)
    }
    wx.request({
      url: `${baseUrl}${options.url}`,
      method:options.method,
      header:options.header||{},
      data:options.data,
      success:function(res){
        options.load === 1 ? wx.hideLoading() : ''
        if(res.data.status === 200){
          resolve(res.data)
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
          reject(res.data)
        }
      },
      fail:function(res){
        reject(res.data)
        options.load == 1 ? wx.hideLoading() : ''
        wx.showToast({
          title: '网络连接超时',
          icon:'none',
          duration:1500
        })
      }
    })
  })
}

module.exports = {
  fetch
}