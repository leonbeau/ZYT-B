export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: '系统首页',
                icon: 'smile',
                component: './Welcome',
                authority: ['user', 'admin'],
              },
              {
                path: '/admin',
                name: '媒体信息',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: '二级页面',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: '企业信息',
                icon: 'table',
                path: '/user-list',
                component: './UserList',
                authority: ['admin'],
              },
              {
                name: '知识库',
                icon: 'table',
                path: '/student',
                component: './Student',
                authority: ['user'],
              },
              {
                name: '系统管理',
                icon: 'table',
                path: '/teacher',
                component: './Teacher',
                authority: ['admin'],
              },
              {
                name: '课程管理(总)',
                icon: 'table',
                path: '/course',
                component: './Course',
                authority: ['user'],
              },
              {
                name: '课程管理(我的)',
                icon: 'table',
                path: '/my-course',
                component: './MyCourse',
                authority: ['admin'],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
