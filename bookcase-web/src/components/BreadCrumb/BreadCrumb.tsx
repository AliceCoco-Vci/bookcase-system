/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-18 09:46:33
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-20 17:16:01
 * @FilePath: /bookcase-web/src/components/BreadCrumb/BreadCrumb.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import styles from './index.less';
import { Breadcrumb } from 'antd';

interface BreadCrumbProps {
    layer: Array<{
        label: string;
    }>;
}

//import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
//用法<BreadCrumb layer={[{label:'0'},{label:'1'},{label:'1'},{label:'1'},{label:'1'}]}/>
const BreadCrumb = ({ layer }: BreadCrumbProps) => {

    return (
        <Breadcrumb>
            {layer?.map((data: any) => (
                <Breadcrumb.Item
                    key={data.label as string}>
                    {data.label}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );

};

export default BreadCrumb;