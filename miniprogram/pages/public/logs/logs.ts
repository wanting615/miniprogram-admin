// logs.ts
// const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          timeStamp: log
        }
      }),
    })
  },
})
