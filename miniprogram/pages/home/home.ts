import UrlService from "../../api/url";
import { getDocTypeList } from "../../api/index";
import { Data, Method } from "./type";
import deviceUtil from "../../lin-ui/utils/device-util";

Page<Data,Method>({
  data: {
    docList: [],
    baseUrl: UrlService.baseUrl,
    capsuleBarHeight: deviceUtil.getNavigationBarHeight()
  },
  onLoad(){
    getDocTypeList().then(res => {
      if(res.status){
        this.setData({
          docList: res.data
        })
      }
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  getListPage(e:Event){
      console.log(123)
    const id = e.currentTarget.dataset['id'];
    const text = e.currentTarget.dataset['text']
    wx.navigateTo({
      url: '../list/list',
      success: (res) => {
        res.eventChannel.emit('acceptDataFromOpenerPage', { id, text, type: 'home'})
      }
    })
  }
})