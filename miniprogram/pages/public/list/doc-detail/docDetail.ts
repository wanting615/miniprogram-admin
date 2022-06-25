import { getReadDoc } from "../../../../api/index";
import { Doc } from "../../../../type/doc";
const app = getApp();
Page<{node: string},{}>({
    data: {
        node: ''
    },
    onLoad: function(){
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('sendDocDetailData',(data: {doc: Doc}) => {
            getReadDoc(data.doc.id); //添加阅读量
            wx.setNavigationBarTitle({
                title: data.doc.title
            })
            let result = app.towxml(data.doc.content,'markdown')
            this.setData({
                node: result
            })
        })
    }
})