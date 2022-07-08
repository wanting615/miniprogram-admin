import UrlService from "../../api/url";
import { getDocTypeList } from "../../api/index";
import { Data, Method } from "./type";

Page<Data,Method>({
    onShareAppMessage(){

    },
    data: {
        docList: [],
        baseUrl: UrlService.baseUrl,
        background: ["https://wanting615.com.cn/swiper1.jpg","https://wanting615.com.cn/swiper2.jpg"],
        customViewHeight: 0 //胶囊高度
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
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    getListPage(e:Event){
        const id = e.currentTarget.dataset['id'];
        const text = e.currentTarget.dataset['text']
        wx.navigateTo({
        url: '../public/doc-list/doc-list',
        success: (res) => {
            res.eventChannel.emit('acceptDataFromOpenerPage', { id, text, type: 'home'})
        }
        })
    }
})