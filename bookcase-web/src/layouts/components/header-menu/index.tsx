import { history, Link, Outlet } from 'umi';
import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import {
    HomeOutlined,
    BookOutlined,
    SettingOutlined,
    CodeSandboxOutlined,
    LogoutOutlined,
    UserOutlined,
    DownOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Divider, Dropdown } from 'antd';
import styles from './index.less'
import { getToken, getUserInfo, removeToken, removeUserInfo } from '@/utils/localstorage';
import API from '@/utils/request'

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
        label: 'Administrator',
        key: 'SubMenu',
        icon: <SettingOutlined />,
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

const logout = () => {
    removeToken();
    removeUserInfo();
    history.replace("/")
};

const AvatarMenu = () => {
    return (
        <Menu className={styles.menu}
            items={[
                {
                    key: 'account',
                    //icon: <UserOutlined />,
                    disabled: true,
                    label: (<Link to="/"><UserOutlined />&nbsp;我的账户</Link>)
                },
                {
                    key: 'logout',
                    //icon: <LogoutOutlined />,
                    label: (<div onClick={logout}><LogoutOutlined />&nbsp;退出</div>)
                }
            ]}
        />

    );
};

export default function Layout() {
    let temp = location.pathname
    if (temp == '/' || temp.includes('/home')) temp = '/home'
    const [currentHeader, setcurrentHeader] = useState(temp.includes('/bookcase') ? '/bookcase' : temp)
    const [auth, setAuth] = useState(1)//1:未登录，仅home权限；2:不同用户，home、bookcase权限；3:管理员，所有权限

    const getAuth = async () => {
        if (getToken()) {
            setAuth(JSON.parse(getUserInfo() as string).authority)
        }
    };

    useEffect(() => {
        getAuth();
    }, []);

    const onClick: MenuProps['onClick'] = e => {
        setcurrentHeader(e.key)
    };

    window.addEventListener('popstate', function () {
        let temp = location.pathname
        setcurrentHeader(temp.includes('/bookcase') ? '/bookcase' : temp)
        console.log('temp', temp)
    })
    return (
        <div className={styles.navs} >
            <div className={styles.head}>
                <div className={styles.logo}>
                    <CodeSandboxOutlined />COCO
                </div>
                <Divider type="vertical" className={styles.divider}></Divider>
                <Menu
                    className={styles.headMenu}
                    onClick={onClick}
                    selectedKeys={[currentHeader]}
                    mode="horizontal"
                    items={headerItems?.slice(0, auth)} />
                <div className={styles.head_right} >
                    {getToken()
                        ? <Dropdown overlay={<AvatarMenu />} trigger={['hover']} >
                            <div className={styles.avater}>
                                <div className={styles.usrname}>{JSON.parse(getUserInfo() as string).username}</div>
                                <DownOutlined />
                            </div>
                        </Dropdown>
                        : <div className={styles.loginlink}>
                            <Link to='/login'>登录</Link>
                        </div>
                    }
                </div>
            </div>
            <Outlet />
        </div>
    );
}
