Page({
    data: {
        itemList: [
            {title: "小程序githup地址",link: "https://github.com/wanting615/miniprogram-admin.git"},
            {title: "后台管理前端githup地址",link: "https://github.com/wanting615/mange-sys.git"},
            {title: "后台管理服务端githup地址",link: "https://github.com/wanting615/sever-ts.git"}
        ]
    },
    copyLink(e: Event){
        const link = e.currentTarget.dataset['link'] as string;
        wx.setClipboardData({
            data: link,
            success: (res)=> {
                console.log(res)
            }
        })
    }
})