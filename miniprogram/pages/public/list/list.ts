import { Doc } from "../../../type/doc";
import { getDocByType } from "../../../api/index";
import { Data, Method } from "./type";
import { formatTime } from "../../../utils/common";

Page<Data, Method>({
  data: {
    id: 0, // 文档类型
    idText: '',
    type: '知识点',
    page: 1, // 当前页数
    stopLoadFlag: false, // 防止多次触发
    noData: false, // 是否无数据
    list: [], // 数据列表
    listHeight: wx.getSystemInfoSync().screenHeight - wx.getMenuButtonBoundingClientRect().bottom, // navbar 高度
  },
  onLoad: function () {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', (data: { text: string, id: number, type: string }) => {
      wx.setNavigationBarTitle({
        title: data.text
      })
      this.setData({
        idText: data.text
      })
      this.data.id = data.id;
      this.data.type = data.type === 'home' ? '知识点' : '问答题';
      this.getDocs();
    })
  },
  //请求点
  getDocs() {
    wx.showLoading({ title: "数据加载中~~~" });
    getDocByType(this.data.id, this.data.type, this.data.page).then(res => {
      res.data.forEach(item => {
        item.creatAt = formatTime(item.creatAt)
      })
      console.log(res.data)
      let list = this.data.list.concat(res.data);
      wx.hideLoading();
      this.data.stopLoadFlag = false;
      this.setData({
        list: list
      })
      if (this.data.page === res.pages) {
        console.log(this.data.page, res.pages)
        this.setData({
          noData: true
        })
      }
    })
  },
  goDetailPage(e: Event) {
    const index = Number(e.currentTarget.dataset['index']);
    const doc: Doc = this.data.list[index];
    wx.navigateTo({
      url: './doc-detail/docDetail',
      success: (res) => {
        res.eventChannel.emit('sendDocDetailData', { doc })
      }
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