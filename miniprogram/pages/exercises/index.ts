import UrlService from "../../api/url";
import { getDocTypeList } from "../../api/index";
import { Data, Method } from "./type";

Page<Data,Method>({
  data: {
    docList: [],
    baseUrl: UrlService.baseUrl,
  },
  onLoad(){
    getDocTypeList().then(res => {
      if(res.status){
        const data = res.data.filter(item => item.contentTypes[1])
        this.setData({
          docList: data
        })
      }
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
            selected: 1
        })
    }
  },
  getListPage(e:Event){
    const id = e.currentTarget.dataset['id'];
    const text = e.currentTarget.dataset['text']
    wx.navigateTo({
      url: '../public/doc-list/doc-list',
      success: (res) => {
        res.eventChannel.emit('acceptDataFromOpenerPage', { id, text, type:'exercises'})
      }
    })
  }
})