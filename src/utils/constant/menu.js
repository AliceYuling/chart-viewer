export const menu = [
  {
    id: 'home',
    name :'首页',
    path: '/'
  },
  {
    id: 'd3',
    name: 'd3 图表',
    children: [
      {
        id: 'bar-chart',
        name: '直方图',
        path: '/bar-chart'
      },
      {
        id: 'line-chart',
        name: '折线图',
        path: '/line-chart'
      }
    ]
  },
  {
    id: 'svg',
    name: 'svg 图形',
    children: [
      {
        id: 'svg-icon',
        name: 'svg图标',
        path: '/svg-icon'
      },
      {
        id: 'svg-map',
        name: 'svg地图',
        path: '/svg-map'
      }
    ]
  }
]