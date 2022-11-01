/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-30 15:59:37
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-01 13:44:52
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

const whiteList = ['/home', '/home/page1','/home/page2','/login', '/']; // 允许直接访问的白名单列表

export function onRouteChange({ location }: FcProps) {
    const token = getToken();
    if (!whiteList.includes(location.pathname) && !token) {
        history.replace('/login');
        message.error('请先登录～')
    }
}

export function rootContainer(container: JSX.Element) {
    return (
        <ConfigProvider locale={zhCN}>
            {container}
        </ConfigProvider>
    );
}