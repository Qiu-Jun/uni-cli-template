const pages = [
  'pages/index/index',
  'pages/mine/index'
]

export default defineAppConfig({
  pages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#1996f9',
    list: [
      {
        iconPath: './assets/images/music.png',
        selectedIconPath: './assets/images/music.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: './assets/images/music.png',
        selectedIconPath: './assets/images/music.png',
        pagePath: 'pages/mine/index',
        text: '个人中心',
      },
    ],
  }
})
