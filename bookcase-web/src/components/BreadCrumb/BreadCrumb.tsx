/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-18 09:46:33
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-01 14:05:56
 * @FilePath: /bookcase-web/src/components/BreadCrumb/BreadCrumb.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Link } from 'umi';
import styles from './index.less';
import { Breadcrumb } from 'antd';
import { LineOutlined } from '@ant-design/icons'
interface BreadCrumbProps {
    layer: Array<{
        label: string;
        url: string;
    }>;
}

const BreadCrumb = ({ layer }: BreadCrumbProps) => {
    return (
        <Breadcrumb separator={<LineOutlined style={{ width: 100, color: '#7eb79d' }} />}>
            {layer?.map((data: any) => (
                <Breadcrumb.Item
                    key={data.label as string}>
                    <Link to={data.url}>{data.label}</Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default BreadCrumb;