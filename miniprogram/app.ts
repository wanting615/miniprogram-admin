import { getUserInfo } from "./api/index";
import { login} from "./utils/user";

// app.ts
App<IAppOption>({
  globalData: {
      isLogin: false,
      userInfo: {
          nickName: '',
          avatarUrl: '',
          views: [],
          praises: []
      }
  },
  towxml: require("./lib/towxml/index"),
  onLaunch() {
    wx.getStorage({
        key: 'token',
        success: (res) => {
            this.globalData.token = res.data as string; 
            this.globalData.isLogin = true;
            getUserInfo(this.globalData.token).then(res => {
                this.globalData.userInfo = res.data;
            });
        },
        fail: () => {
            login()
        }
    })
  },
})