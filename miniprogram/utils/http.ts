interface Options{
  params?: {
    [p in keyof any]: any
  },
  method?: 'GET' | 'POST' | 'PUT' | "HEAD" | 'DELETE',
}

const httpService = <T>(url: string ,option?: Options): Promise<T> => {
  option = option || {};
  return new Promise((resolve,reject) => {
    wx.request({
      header: { 'content-type': 'application/json'},
      url: url,
      data: option!.params || {},
      method: option!.method || 'GET',
      success: (res: any) => {
        if(res.statusCode === 200){
          resolve(res.data)
        }else{
          console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);
        }
      },
      fail: () => {
        console.log("index.js wx.request CheckCallUser fail");
        reject('请求异常');
      }
    })
  })
}

export default httpService;