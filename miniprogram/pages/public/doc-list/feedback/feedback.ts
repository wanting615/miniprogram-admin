import { Doc } from "../../../../type/doc";
import { Data, Method } from "./feedback.type";
import { feedBack } from "../../../../api/index";

Page<Data, Method>({
    data: {
        doc: null
    },
    onLoad() {
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('sendDocDetailData', (data: {doc: Doc}) => {
            this.setData({
                doc: data.doc
            })
            wx.setNavigationBarTitle({
                title: data.doc.title
            })
        })
    },
    formSubmit(e){
        const app = getApp();
        if(!e.detail.value.info){
            wx.showToast({
                title: '内容不能为空哦!',
                icon: 'error',
                duration: 2000
            })
            return;
        }

        feedBack(app.globalData.token,e.detail.value.docId, e.detail.value.info, e.detail.value.autor).then(res => {
        })
    }
})