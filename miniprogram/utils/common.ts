// 计算顶部返回按钮高度
export function getCapsuleInfo (): Promise<{
    navHeight: number;
    navTop: number;
    capsuleHeight: number;
    capsuleWidth: number;
}>{
    const menuClient = wx.getMenuButtonBoundingClientRect();
    return new Promise((resolve) => {
        wx.getSystemInfo({
            success: (res) => {
                // 胶囊总高度 = (菜单栏顶部距离 - 状态栏高度) * 2 + 菜单栏高度 + 状态栏高度
                resolve({
                    navHeight: (menuClient.top - res.statusBarHeight) * 2 + res.statusBarHeight + menuClient.height,
                    navTop: menuClient.top,
                    capsuleHeight: menuClient.height,
                    capsuleWidth: res.windowWidth - menuClient.right + menuClient.width
                })
            }
        })
    })
}

// 时间格式话
export const formatTime = (dateStr: string) => {
    const date =  new Date(dateStr);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    //   const hour = date.getHours()
    //   const minute = date.getMinutes()
    //   const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') 
}

const formatNumber = (n: number) => {
    const s = n.toString()
    return s[1] ? s : '0' + s
}
  