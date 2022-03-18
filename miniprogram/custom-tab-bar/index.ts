// custom-tab-bar/index.ts
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#fc490b",
        list: [
            {
                pagePath:"/pages/home/home",
                text:"首页",
                iconPath:"../images/icons/home.png",
                selectedIconPath:"../images/icons/home_fill.png"
            },
            {
                pagePath:"/pages/exercises/index",
                text:"习题",
                iconPath:"../images/icons/edit.png",
                selectedIconPath:"../images/icons/edit_fill.png"
            },
            {
                pagePath:"/pages/exercises/index",
                text:"消息",
                iconPath:"../images/icons/news.png",
                selectedIconPath:"../images/icons/news_fill.png"
            },
            {
                pagePath:"/pages/exercises/index",
                text:"我的",
                iconPath:"../images/icons/my.png",
                selectedIconPath:"../images/icons/my_fill.png"
            }
        ]
    },
    methods: {
        switchTab(e: any) {
          const data = e.currentTarget.dataset;
          const url = data.path ;
          wx.switchTab({url})
        }
      }
})