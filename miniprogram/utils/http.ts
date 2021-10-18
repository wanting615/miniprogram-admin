interface Options{
  url: string;
  params?: {
    [p in keyof any]: any
  },
  method?: 'GET' | 'POST' | 'PUT' | "HEAD" | 'DELETE',
}

const httpService = (option: Options) => {
  return new Promise((resolve,reject) => {
    wx.request({
      header: { 'content-type': 'application/json'},
      url: option.url,
      data: option.params || {},
      method: option.method || 'GET',
      success: (res) => {
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