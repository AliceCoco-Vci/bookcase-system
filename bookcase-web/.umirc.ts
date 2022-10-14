/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-08-26 10:20:27
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-14 17:19:23
 * @FilePath: /bookcase-web/.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'npm',
  title: 'Bookcase',
  //favicon: `${BASE_URL}titleIcon.png`,
  routes: [
    { exact: true, path: '/', redirect: '/home' },
    { exact: true, path: '/login', component: '@/pages/login/login', title: 'Login' },
    {
      path: '/',
      component: '@/layouts/components/header-menu/index',
      routes: [
        {
          exact: true,
          path: '/home',
          component: '@/pages/home/home',
          title: 'Home'
        },
        {
          path: '/',
          component: '@/layouts/components/sider-menu/index',
          routes: [
            {
              exact: true,
              path: '/bookcase',
              component: '@/pages/bookcase/bookcase',
              //access:'bookcase',
              title: 'Bookcase',
            },
            {
              exact: true,
              path: '/bookcase/analysis',
              component: '@/pages/bookcase/analysis/analysis',
              //access:'bookcase',
              title: 'Analysis',
            },
            {
              exact: true,
              path: '/bookcase/input',
              component: '@/pages/bookcase/input/input',
              //access:'bookcase',
              title: 'Analysis',
            },
          ],
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

