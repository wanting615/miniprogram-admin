import UrlService from "../../api/url";
import { getDocTypeList } from "../../api/index";
import { Data, Method } from "./type";
// import deviceUtil from "../../lin-ui/utils/device-util.js";

Page<Data,Method>({
    onShareAppMessage(){

    },
    data: {
        docList: [],
        baseUrl: UrlService.baseUrl,
        // capsuleBarHeight: deviceUtil.getNavigationBarHeight(),
        background: ["../../images/home/swiper1.jpg","../../images/home/swiper2.jpg"],
        customViewHeight: 0
    },
    onLoad(){
        wx.getSystemInfo({
            success: (res) => {
                console.log(res)
                this.setData({
                    customViewHeight: res.statusBarHeight
                })
            }
        })
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
        url: '../public/list/list',
        success: (res) => {
            res.eventChannel.emit('acceptDataFromOpenerPage', { id, text, type: 'home'})
        }
        })
    }
})