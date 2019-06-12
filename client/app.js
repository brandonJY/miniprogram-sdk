//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var ga = require('././utils/ga.js');
var GoogleAnalytics = ga.GoogleAnalytics;

App({
  // GA tracking
  tracker: null,
  getTracker: function() {
    if (!this.tracker) {
      // 初始化GoogleAnalytics Tracker
      this.tracker = GoogleAnalytics.getInstance(this)
        .setAppName('eShop')
        .setAppVersion('v1.0')
        .newTracker('UA-128787697-2'); //用你的 Tracking ID 代替
      
      //使用自己的合法域名做跟踪数据转发
      // this.tracker.setTrackerServer("https://sienna.website");
    }
    return this.tracker;
  },
  onLaunch: function() {
    qcloud.setLoginUrl(config.service.loginUrl)
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
            }
          })
        }
      }
    })
  }
})