import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'npm',
  title: 'Bookcase',
  //favicon: `${BASE_URL}titleIcon.png`,
  routes: [
    { exact: true, path: '/', redirect: '/login' },
    { exact: true, path: '/login', component: '@/pages/index', title: 'Login' },
    { exact: true, path: '/home', component: '@/pages/home/home', title: 'Home' },
    {
      path: '/bookcase',
      routes: [
        {
          exact: true,
          path: '/bookcase',
          component: '@/pages/bookcase/bookcase',
          title: 'Bookcase',
        },
        {
          exact: true,
          path: '/bookcase/analysis',
          component: '@/pages/bookcase/analysis/analysis',
          title: 'Analysis',
        },
        {
          exact: true,
          path: '/bookcase/input',
          component: '@/pages/bookcase/input/input',
          title: 'Analysis',
        },
      ],
    },
  ],
  proxy: {
    ['/api'!]: {
      target: 'http://localhost:8091',
      changeOrigin: true,
      pathRewrite: { ['^/api']: '/api' },
    }
  }
});

