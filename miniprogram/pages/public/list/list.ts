import { Doc } from "../../../type/doc";
import { getDocByType } from "../../../api/index";
import{ Data, Method} from "./type";
Page<Data, Method>({
  data: {
    id: 0,
    page: 1,
    list: []
  },
  onLoad: function(){
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage',  (data: {text: string, id: number, type: string}) => {
      wx.setNavigationBarTitle({
        title: data.text
      })
      this.data.id = data.id;
      this.getDocs(data.id,data.type);
    })
  },
  //请求点
  getDocs(id: number, type: string){
    const contentType = type === 'home' ? '知识点' : '问答题';
    getDocByType(id,contentType, this.data.page).then(res => {
        console.log(res)
      let list  = this.data.list.concat(res.data);
      this.setData({
        list: list
      })
    })
  },
  goDetailPage(e: Event){
    const index = Number(e.currentTarget.dataset['index']);
    const doc: Doc  = this.data.list[index];
    wx.navigateTo({
      url: './doc-detail/docDetail',
      success: (res) => {
        res.eventChannel.emit('sendDocDetailData',{doc})
      }
    })
  }
})