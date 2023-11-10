export default [
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  { path: '/', redirect: '/add_chart' },
  { name: '智能分析', path: '/add_chart', icon: 'BarChartOutlined', component: './AddChart' },
  {
    path: '/admin',
    name: '管理员页面',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
