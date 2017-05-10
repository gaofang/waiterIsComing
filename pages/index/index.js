//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    menu: [
      {
        cuisineName: '主食',
        list: [
          {
            name: '韭菜猪肉饺子',
            price: 14
          },
          {
            name: '白菜猪肉饺子',
            price: 15
          },
          {
            name: '香菇猪肉饺子',
            price: 16
          },
          {
            name: '牛肉猪肉饺子',
            price: 17
          },
          {
            name: '羊肉猪肉饺子',
            price: 18
          }
        ]
      },
      {
        cuisineName: '肉菜',
        list: [
          {
            name: '肉菜1',
            price: 14
          },
          {
            name: '肉菜2',
            price: 15
          },
          {
            name: '肉菜3',
            price: 16
          },
          {
            name: '肉菜4',
            price: 17
          },
          {
            name: '肉菜5',
            price: 18
          },
          {
            name: '肉菜6',
            price: 19
          },
          {
            name: '肉菜1',
            price: 20
          }
        ]
      },
      {
        cuisineName: '素菜',
        list: [
          {
            name: '这是一盘素菜1',
            price: 14
          },
          {
            name: '这是一盘素菜1',
            price: 15
          },
          {
            name: '这是一盘素菜1',
            price: 16
          },
          {
            name: '这是一盘素菜1',
            price: 17
          },
          {
            name: '这是一盘素菜1',
            price: 18
          },
          {
            name: '这是一盘素菜1',
            price: 19
          },
          {
            name: '这是一盘素菜1',
            price: 20
          }
        ]
      }
    ],
    subMenu: null,
    activeIdx: 0
  },
  //事件处理函数
  chooseClass: function(e) {
    this.setData({
      subMenu: this.data.menu[e.currentTarget.dataset.index].list,
      activeIdx: e.currentTarget.dataset.index
    })
  },
  onLoad: function () {
    console.log(this.data.menu[0].list);
    var that = this
    //调用应用实例的方法获取全局数据
    this.setData({
      subMenu: this.data.menu[0].list
    })
  }
})
