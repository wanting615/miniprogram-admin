import UrlService from "../../api/url";
import { getDocTypeList } from "../../api/index";
import { data, method } from "../home/type";
import deviceUtil from "../../lin-ui/utils/device-util";

Page<data,method>({
  data: {
    docList: [],
    baseUrl: UrlService.baseUrl,
    capsuleBarHeight: deviceUtil.getNavigationBarHeight()
  },
  onLoad(){
    getDocTypeList().then(res => {
      console.log(res)
      if(res.status){
        this.setData({
          docList: res.data
        })
      }
    })
  },
  onShow() {
    console.log(111)
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  getListPage(e:Event){
    const id = e.currentTarget.dataset['id'];
    const text = e.currentTarget.dataset['text']
    wx.navigateTo({
      url: '../list/list',
      success: (res) => {
        res.eventChannel.emit('acceptDataFromOpenerPage', { id, text, type:'exercises'})
      }
    })
  }
})