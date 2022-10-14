/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-30 15:59:37
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-14 17:21:12
 * @FilePath: /bookcase-web/src/app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import moment from 'moment';
import { history } from 'umi';
import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { getMenu, getToken } from '@/utils/localstorage';
import type { FcProps } from '@/type/umi';
moment.locale('zh-cn');

const whiteList = ['/login']; // 允许直接访问的白名单列表

export function onRouteChange({ location }: FcProps) {
    const token = getToken();
    if (!whiteList.includes(location.pathname) && !token) {
        history.push({
            pathname: '/login',
            query: { redirect: location.pathname },
        });
    }
}

export function rootContainer(container: JSX.Element) {
    return (
        <ConfigProvider locale={zhCN}>
            {container}
        </ConfigProvider>
    );
}

// export async function getInitialState(): InitialState {
//     const PermissionList = getMenu()?JSON.parse(getMenu()||''):''
  
//     function lookForAllId(data = [], arr = []) {
//       for (let item of data) {
//           arr.push(item.key)
//           if (item.children && item.children.length) 
//               lookForAllId(item.children, arr)
//       }
//       return arr
//     }
//     console.log('所有权限的key值',lookForAllId(PermissionList));
  
//     const initState = {
//       settings: {},
//       menuItem: lookForAllId(PermissionList) || [],
//     };
  
//     return initState;
//   }

//   export const layout: RunTimeLayoutConfig = () => {
//     return {
//       // 自定义 403 页面
//       unAccessible: <div>'unAccessible'</div>,
//       // 自定义 404 页面
//       noFound: <div>'noFound'</div>,
//     };
//   };