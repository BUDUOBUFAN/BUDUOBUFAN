Page({
  data:{
    //轮播图数组
    swiperList:[]
  },
  onLoad:function(options){
    // 1 发送异步请求获取轮播图数据
    var reqTask = wx.request({
      url: 'https://dcdn.it120.cc/2019/12/29/8396f65d-d615-46d8-b2e5-aa41820b9fe5.png',
      success: (result) => {
        console.log(result);
      }
    });
      
  },
})