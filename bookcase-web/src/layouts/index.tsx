import { history, Link, Outlet } from 'umi';
import 'antd/dist/antd.css';
import {
  HomeOutlined,
  BookOutlined,
  SettingOutlined,
  CodeSandboxOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Divider, Dropdown, Button } from 'antd';
import React, { useEffect, useState } from 'react';
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

const headerItems: MenuProps['items'] = [
  {
    label: (
      <Link to="/home">
        Home
      </Link>
    ),
    key: '/home',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <Link to="/bookcase">
        Bookcase
      </Link>
    ),
    key: '/bookcase',
    icon: <BookOutlined />,
  },
  {
    label: 'None',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    disabled: true,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
];
const siderItems: MenuItem[] = [
  getItem('Analysis', '/bookcase/analysis', <PieChartOutlined />),
  getItem('Input', '/bookcase/Input', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'), getItem('Option 12', '12')
    ]),
  ]),
];

const loginout = () => {
  history.replace("/")
  window.location.reload()
};

const AvatarMenu = () => {
  return (
    <Menu className={styles.menu}
      items={[
        {
          key: 'account',
          icon: <UserOutlined />,
          //disabled: true,
          label: (<Link to="/">我的账户</Link>)
        },
        {
          key: 'logout',
          icon: <LogoutOutlined />,
          label: (<div onClick={loginout}>退出</div>)
        }
      ]}
    />

  );
};

export default function Layout1() {
  let temp = location.pathname
  if (temp == '/') temp = '/home'
  const [currentHeader, setcurrentHeader] = useState(temp.includes('/bookcase') ? '/bookcase' : temp)
  const [currentSider, setcurrentSider] = useState(temp)
  const [collapsed, setCollapsed] = useState(true)
  const [usrName, setUsrName] = useState('AliceCoco')

  const onClick: MenuProps['onClick'] = e => {
    setcurrentSider('')
    setcurrentHeader(e.key)
  };
  const onClick2: MenuProps['onClick'] = e => {
    setcurrentHeader('/bookcase')
    setcurrentSider(e.key)
    history.push(e.key)
  };

  window.addEventListener('popstate', function () {
    let temp = location.pathname
    setcurrentHeader(temp.includes('/bookcase') ? '/bookcase' : temp)
    console.log('temp', temp)
  })

  return (
    <>
      {location.pathname == '/login' || location.pathname == '/'
        ? <Outlet />
        : <div className={styles.navs} >
          <div className={styles.head}>
            <div className={styles.logo}>
              <CodeSandboxOutlined />ALICECOCO
            </div>
            <Divider type="vertical" className={styles.divider}></Divider>
            <Menu
              className={styles.headMenu}
              style={{ minWidth: '900px' }}
              onClick={onClick}
              selectedKeys={[currentHeader]}
              mode="horizontal"
              items={headerItems} />
            <div className={styles.head_right} >
              <Dropdown overlay={<AvatarMenu />} trigger={['hover']} >
                <div className={styles.avater}>
                  <div className={styles.usrname}>{usrName}</div>
                  <DownOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
          {location.pathname.includes('/bookcase')
            ? <Layout style={{ minWidth: '100vh', minHeight: 'calc(100vh - 4.3rem)', overflowX: 'auto' }}>
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
            : <Outlet />
          }
        </div>
      }
    </>
  );
}
