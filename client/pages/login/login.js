// client/pages/login/login.js
var util = require("../../utils/util.js");
var ga = require('../../utils/ga.js');
var HitBuilders = ga.HitBuilders;
// 获取全局跟踪器
var t = getApp().getTracker();

Page({
  data: {
    loginBtnTxt: "登录",
    loginBtnBgBgColor: "#ff9900",
    btnLoading: false,
    disabled: false,
    inputUserName: '',
    inputPassword: '',
  },

  logoClick:function(){
    t.send(new HitBuilders.EventBuilder()
      .setCategory('logo')
      .setAction('click')
      .setLabel('') // 可选
      .setValue(1).build()); // 可选
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    t.send(new HitBuilders.ScreenViewBuilder()
      .setCustomDimension(1, "181111")
      .build()
    );
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
    // 后续的所有匹配数据都会使用这个屏幕名称。
    t.setScreenName('login page');
    t.send(new HitBuilders.ScreenViewBuilder().build());
    // t.send(Hit) 上报数据
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  formSubmit: function (e) {
    var param = e.detail.value;
    this.mysubmit(param);
  },
  mysubmit: function (param) {
    t.send(new HitBuilders.EventBuilder()
      .setCategory('login')
      .setAction('click')
      .setLabel('') // 可选
      .setValue(1).build()); // 可选
    // var flag = this.checkUserName(param) && this.checkPassword(param)
    // if (flag) {
    //   this.setLoginData1();
    //   this.checkUserInfo(param);
    // }
  },
  setLoginData1: function () {
    this.setData({
      loginBtnTxt: "登录中",
      disabled: !this.data.disabled,
      loginBtnBgBgColor: "#999",
      btnLoading: !this.data.btnLoading
    });
  },
  setLoginData2: function () {
    this.setData({
      loginBtnTxt: "登录",
      disabled: !this.data.disabled,
      loginBtnBgBgColor: "#ff9900",
      btnLoading: !this.data.btnLoading
    });
  },
  checkUserName: function (param) {
    var email = util.regexConfig().email;
    var phone = util.regexConfig().phone;
    var inputUserName = param.username.trim();
    if (email.test(inputUserName) || phone.test(inputUserName)) {
      return true;
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的邮箱或者手机号码'
      });
      return false;
    }
  },
  checkPassword: function (param) {
    var userName = param.username.trim();
    var password = param.password.trim();
    if (password.length <= 0) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入密码'
      });
      return false;
    } else {
      return true;
    }
  },
  checkUserInfo: function (param) {
    var username = param.username.trim();
    var password = param.password.trim();
    var that = this;
    if ((username == 'admin@163.com' || username == '18500334462') && password == '000000') {
      setTimeout(function () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500
        });
        that.setLoginData2();
        that.redirectTo(param);
      }, 2000);
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '用户名或密码有误，请重新输入'
      });
      this.setLoginData2();
    }
  },
  redirectTo: function (param) {
    //需要将param转换为字符串
    param = JSON.stringify(param);
    wx.redirectTo({
      url: '../main/index?param=' + param//参数只能是字符串形式，不能为json对象
    })
  }

})