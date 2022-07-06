import { getReadDoc, getPraises} from "../../../../api/index";
import { Doc } from "../../../../type/doc";
const app = getApp<IAppOption>();
Page<{node: string; praises: number, doc: Doc | null, isPraised: boolean},
{feedback: () => void,praise: () => void}>({
    data: {
        node: '',
        praises: 0,
        isPraised: false,
        doc: null
    },
    onLoad: function(){
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('sendDocDetailData',(data: {doc: Doc}) => {
            getReadDoc(data.doc.id, app.globalData.token!); //添加阅读量
            this.data.doc = data.doc;
            wx.setNavigationBarTitle({ // 设置标题
                title: data.doc.title
            })
            let result = app.towxml(data.doc.content,'markdown'); //设置内容

            if(app.globalData.userInfo.praises.includes(data.doc.id)){
                this.setData({
                    isPraised: true
                })
            }

            this.setData({
                node: result,
                praises: data.doc.praises || 0
            })
        })
    },
    praise: function(){
        if(this.data.isPraised){ return };
        getPraises(this.data.doc!.id, app.globalData.token).then(res => {
            if(res.status){
                let praises = this.data.praises = 1;
                this.setData({
                    praises: praises,
                    isPraised: true
                })
                app.globalData.userInfo.praises.unshift(this.data.doc!.id);
            }else{
                wx.showToast({
                    title: res.message,
                })
            }
        })
    },
    feedback: function(){
        wx.navigateTo({
            url: '../feedback/feedback',
            success: (res) => {
                res.eventChannel.emit('sendDocDetailData', { doc: this.data.doc })
            }
        })
    }
})