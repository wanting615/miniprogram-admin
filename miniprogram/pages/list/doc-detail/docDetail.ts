import { Doc } from "../../../type/doc";
const app = getApp();
Page<{node: any},{}>({
    data: {
        node: {}
    },
    onLoad: function(){
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('sendDocDetailData',(data: {doc: Doc}) => {
            console.log(data)
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