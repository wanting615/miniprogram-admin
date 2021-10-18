Page({
  data: {
    navItems:[{
      text: 'Html',
      id: 1,
      imgSrc: '/images/home/html.png'
    }, {
      text: 'Css',
      id: 2,
      imgSrc: '/images/home/css.png'
    }, {
      text: 'Js',
      id: 3,
      imgSrc: '/images/home/javascript.png'
    }, {
      text: 'Ts',
      id: 4,
      imgSrc: '/images/home/typescript.png'
    }, {
      text: 'Node',
      id: 5,
      imgSrc: '/images/home/node.png'
    }, {
      text: 'Network',
      id: 6,
      imgSrc: '/images/home/network.png'
    }, {
      text: '其它',
      id: 7,
      imgSrc: '/images/home/other.png'
    }]
  },
  getListPage(e:Event){
    const id = e.currentTarget.dataset['id'];
    const text = e.currentTarget.dataset['text']
    wx.navigateTo({
      url: '../list/list',
      success: (res) => {
        res.eventChannel.emit('acceptDataFromOpenerPage', { id, text})
      }
    })
  }
})