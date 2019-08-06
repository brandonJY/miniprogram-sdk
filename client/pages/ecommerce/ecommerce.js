// client/pages/ecommerce/ecommerce.js
var ga = require('../../utils/ga.js');
var HitBuilders = ga.HitBuilders;
var Product = ga.Product;
var ProductAction = ga.ProductAction;
var Promotion = ga.Promotion;
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  search: function(){
    var product = new Product()
      .setId("P12345")
      .setName("Android Warhol T-Shirt")
      .setCategory("Apparel/T-Shirts")
      .setBrand("Google")
      .setVariant("Black")
      .setPosition(1)
      .setCustomDimension(1, "Member");
    var productAction = new ProductAction(ProductAction.ACTION_CLICK)
      .setProductActionList("Search Results");
    var builder = new HitBuilders.ScreenViewBuilder()
      .addProduct(product)
      .setProductAction(productAction);

    var t = getApp().getTracker();
    t.setScreenName("searchResults");
    t.send(builder.build());
  },
  addToCart: function(){
    var product = new Product()
      .setId("P12345"); 
    var productAction = new ProductAction(ProductAction.ACTION_ADD);
    var builder = new HitBuilders.ScreenViewBuilder()
      .addProduct(product)
      .setProductAction(productAction);

    var t = getApp().getTracker();
    t.setScreenName("transaction");
    t.send(builder.build());    
  }
})