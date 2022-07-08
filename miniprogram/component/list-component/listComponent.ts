import { Doc } from "../../type/doc";
Component({
    properties: {
        list: {
            type: Array,
            value: []
        },
        noData: {
            type: Boolean,
            value: false
        },
        idText: {
            type: String,
            value: ''
        }
    },
    methods: {
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
    }
})
