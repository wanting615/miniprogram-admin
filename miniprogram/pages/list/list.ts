import httpService from "../../utils/http";
Page({
  data: {
    id: 0,
    test: {}
  },
  onLoad: function(){
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage',  (data: {text: string, id: string}) => {
      wx.setNavigationBarTitle({
        title: data.text
      })
    })
    httpService({
      url: 'http://localhost:3000/shop/3269'
    }).then(res => {
      console.log(res)
    })
  }
})