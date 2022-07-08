import { loginUser,  sendWxUserInfo} from "../api/index";
// 登录
const login = () => {
  wx.login({
    success: res => {
      loginUser(res.code).then(res => {
        if(res.status){
          wx.setStorage({
              key: 'token',
              data: res.data.token
          });
          const app = getApp<IAppOption>();
          app.globalData.token = res.data.token;
          if(res.data.nickName){
            app.globalData.userInfo.nickName = res.data.nickName;
            app.globalData.userInfo.avatarUrl = res.data.avatarUrl;
            app.globalData.userInfo.views = res.data.views;
            app.globalData.userInfo.praises = res.data.praises;
          }
          if(res.data.token){
              app.globalData.isLogin = true;
          }
        }
      })
    },
  })
}

const updateUserInfo = (success:(nickName: string) => void) => {
  const app = getApp<IAppOption>();
  wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      lang: 'zh_CN',
      success: (res) => {
        if(app.globalData.token){
          sendWxUserInfo(app.globalData.token,res.userInfo.nickName, 
          res.userInfo.gender, res.userInfo.avatarUrl).then((res) => {
              if(res.status){ 
                  success(res.data.nickName);
              }
          });
        }
      },
      fail: (res) => {
      }
  })
}

export { login, updateUserInfo}