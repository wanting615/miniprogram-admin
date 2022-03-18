/// <reference path="./types/index.d.ts" />

import { Doc } from "../miniprogram/type/doc";

export interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
  towxml?: any
}