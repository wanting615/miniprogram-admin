// pages/my/history/history.ts
import { formatTime } from "../../../utils/common";
import { getPraised } from "../../../api/index";
import { Data, Method } from "./type"
const app = getApp<IAppOption>()
Page<Data,Method>({
    data: {
        page: 1, // 当前页数
        stopLoadFlag: false, // 防止多次触发
        noData: false, // 是否无数据
        list: [], // 数据列表
        listHeight: wx.getSystemInfoSync().screenHeight - wx.getMenuButtonBoundingClientRect().bottom, // navbar 高度
    },

    onLoad() {
        this.getDocs();
    },
    getDocs(){
        if(!app.globalData.token) { return };
        wx.showLoading({ title: "数据加载中~~~" });
        getPraised(app.globalData.token, this.data.page).then(res => {
            if(res.status){
                res.data.history.forEach(item => {
                    item.creatAt = formatTime(item.creatAt)
                })
                let list = this.data.list.concat(res.data.history);
                this.data.stopLoadFlag = false;
                this.setData({
                    list: list
                })
                if (res.data.pages ===0 || this.data.page === res.data.pages) {
                    this.setData({
                        noData: true
                    })
                }
            }
            wx.hideLoading();
        })
    },
    loadmore() {
        // 防止多次触发
        if (this.data.stopLoadFlag) { return };
        // 无数据则停止
        if (this.data.noData) { return };
        this.data.stopLoadFlag = true;
        this.data.page++;
        this.getDocs();
      }
})