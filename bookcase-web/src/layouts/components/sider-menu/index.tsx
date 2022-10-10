/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-10 16:25:32
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-10 17:25:19
 * @FilePath: /bookcase-web/src/layouts/components/sider-menu/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { history,Outlet } from 'umi';
import 'antd/dist/antd.css';
import {
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import styles from './index.less'

const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const siderItems: MenuItem[] = [
    getItem('Analysis', '/bookcase/analysis', <PieChartOutlined />),
    getItem('Input', '/bookcase/Input', <DesktopOutlined />),
    // getItem('Option 3', '3', <ContainerOutlined />),

    // getItem('Navigation One', 'sub1', <MailOutlined />, [
    //   getItem('Option 5', '5'),
    //   getItem('Option 6', '6'),
    //   getItem('Option 7', '7'),
    //   getItem('Option 8', '8'),
    // ]),

    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),

    //   getItem('Submenu', 'sub3', null, [
    //     getItem('Option 11', '11'), getItem('Option 12', '12')
    //   ]),
    // ]),
];

export default function Layout1() {
    let temp = location.pathname
    if (temp == '/') temp = '/home'
    const [currentSider, setcurrentSider] = useState(temp)
    const [collapsed, setCollapsed] = useState(true)

    const onClick2: MenuProps['onClick'] = e => {
        setcurrentSider(e.key)
        history.push(e.key)
    };

    return (
        <Layout style={{ minWidth: '100vh', minHeight: 'calc(100vh - 4.3rem)', overflowX: 'auto' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={styles.logo2} />
                <Menu
                    selectedKeys={[currentSider]}
                    onClick={onClick2}
                    mode="inline"
                    theme="dark"
                    items={siderItems}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: styles.trigger,
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
