import { updateUserInfo } from "./../../utils/user";

const app = getApp<IAppOption>();
Page({
  data: {
    isLogin: app.globalData.isLogin,
    nickName: app.globalData.userInfo.nickName ? app.globalData.userInfo.nickName : '未设置昵称',
    itemList: [
        {title: '我的足迹',icon: '../../images/icon/history.png', url: "./history/history"},
        {title: '我的收藏',icon: '../../images/icon/collect.png', url: "./praise/praise"},
        {title: '我的反馈',icon: '../../images/icon/write.png'}
    ],
    bottomList: [
        {title: '敲一夜代码', icon: '../../images/icon/my.png',url: "./githup/githup"},
        {title: '流两行老泪', icon: '../../images/icon/set.png'},
        {title: '用三种语言', icon: '../../images/icon/tag.png'},
        {title: '唯四肢受罪', icon: '../../images/icon/feedback.png'},
        {title: '待五更鸡鸣', icon: '../../images/icon/praise.png'},
        {title: '遇骤雨初歇', icon: '../../images/icon/classify.png'}
    ]
  },
  // 事件处理函数
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
            selected: 3
        })
    }
  },
  getUserProfile() {
    updateUserInfo((nickName: string) => {
        this.setData({
            nickName
        })
    });
  },
  goPage(e: Event){
      const url = e.currentTarget.dataset["url"] as string;
      if(!url) { return }
      wx.navigateTo({
        url
    })
  }
})
