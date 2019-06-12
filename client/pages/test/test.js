// client/pages/test/test.js
var ga = require('../../utils/ga.js');
var HitBuilders = ga.HitBuilders;
var t = getApp().getTracker();
Page({

  /**
   * 页面的初始数据
   */

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
    t.setScreenName('test page');
    t.send(new HitBuilders.ScreenViewBuilder().build());
    // t.send(new HitBuilders.ScreenViewBuilder()
    //   .setCustomDimension(1, "121121")
    //   .build()
    // );
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

  register: function() {
    t.send(new HitBuilders.EventBuilder()
      .setCategory('login')
      .setAction('click'))
  },

  header: function () {
    t.send(new HitBuilders.EventBuilder()
      .setCategory('header')
      .setAction('click'))
  },

  login: function () {
    wx.login({
      success(res) {
        wx.showToast({
          title: 'login success',
          icon: 'success',
          duration: 2000
        })
        t.send(new HitBuilders.EventBuilder()
          .setCategory('login')
          .setAction('success'));
        if (res.code) {
          console.log(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    
  },

  change_password: function () {
    t.send(new HitBuilders.EventBuilder()
      .setCategory('change password')
      .setAction('success'))
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }
})