/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-11-01 11:28:48
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-01 13:59:16
 * @FilePath: /bookcase-web/src/layouts/components/mid-menu/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Outlet } from 'umi';
import 'antd/dist/antd.css';
import { LineOutlined } from '@ant-design/icons';
import styles from './index.less'

const MidItems = [
    { label: '首页', url: '/home' },
    { label: '预售信息', url: '/home/page1' },
    { label: '出版社信息', url: '/home/page2', key: false }
]

export default function Layout() {
    return (
        <>
            <div className={styles.container}>
                {MidItems?.map((data: any) => (
                    <div key={data.label as string}>
                        {location.pathname == data.url ?
                            <a className={styles.middileMenu_B} href={data.url}>{data.label}</a>
                            : <a className={styles.middileMenu} href={data.url}>{data.label}</a>
                        }
                        {data.key == false ? '' : <LineOutlined style={{ width: 100, color: '#7eb79d' }} />}
                    </div>
                ))}
            </div>
            <Outlet />
        </>
    );
}
