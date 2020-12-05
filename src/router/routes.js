// import pageImporter from './page-importer'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Gaming.vue'),
        children: [
          { path: '', component: () => import('pages/gaming/Match.vue') }
        ]
      },
      // ...pageImporter.getRouters()
      {
        path: '/auth',
        component: () => import('pages/Auth.vue')
      },
      { path: '/gaming', component: () => import('pages/MainBet.vue') },
      {
        path: '/user',
        component: () => import('pages/User.vue'),
        children: [
          { path: '', component: () => import('pages/user/Summary.vue') },
          {
            path: '/user/finance',
            component: () => import('pages/user/Finance.vue'),
            children: [
              { path: '', component: () => import('pages/user/finance/Deposit.vue') },
              { path: '/user/finance/withdraw', component: () => import('pages/user/finance/withdraw.vue') },
            ]
          },
          {
            path: '/user/settings',
            component: () => import('pages/user/Settings.vue'),
            children: [
              { path: '', component: () => import('pages/user/settings/UserInfo.vue') },
            ]
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
