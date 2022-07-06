/// <reference path="./types/index.d.ts" />
declare global{
    interface IAppOption {
        globalData: {
            navInfo?: {
                navHeight: number; //导航栏高度
                navTop: number; // 导航栏距离顶部距离
                capsuleHeight: number;//胶囊高度
                capsuleWidth: number; //胶囊宽度
            };
            userInfo: UserInfo,
            userCode?: string; // 用户code
            token?: string;// 用户token
            isLogin?: boolean;// 是否登录
        }
        userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
        towxml?: any
            
    }
}

export interface UserInfo{
    nickName: string; // 用户名
    avatarUrl: string; // 用户头像
    views: number[]; // 阅读记录
    praises: number[]; //点赞记录
}