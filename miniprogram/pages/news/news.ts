import { getNewsDoc } from "../../api/index";
import { Data, Method } from "./type";
import UrlService from "../../api/url";

Page<Data, Method>({
  data: {
    page: 1,
    docs: [],
    baseUrl: UrlService.baseUrl,
    listHeight: wx.getSystemInfoSync().screenHeight - wx.getMenuButtonBoundingClientRect().bottom, // navbar 高度
    stopLoadFlag: false, // 防止多次触发
    noData: false, // 是否无数据
  },
  onLoad(){
    this.getDocs();
  },
  getDocs(){
      getNewsDoc(this.data.page).then(res => {
          if(res.status && res.data.length > 0){
            let docs = this.data.page === 1 ? res.data : this.data.docs.concat(res.data);
              this.setData({
                docs: docs
              })
              this.data.stopLoadFlag = false;
              if(res.data.length === 0){
                  this.data.noData = true;
              }
              wx.stopPullDownRefresh()
          }
      })
  },
  onReachBottom(){
       // 防止多次触发
    if (this.data.stopLoadFlag) { return };
    // 无数据则停止
    if (this.data.noData) { return };
    this.data.stopLoadFlag = true;
    this.data.page++;
    this.getDocs();
  },
  onPullDownRefresh(){
      this.data.page = 1;
      this.data.noData = false;
      this.setData({
          docs: []
      })
      this.getDocs();
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
})
