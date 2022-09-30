/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-30 16:11:32
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-09-30 16:11:50
 * @FilePath: /bookcase-web/src/utils/login-confirm.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'react';
import { history } from 'umi';
import { Modal } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import type { ModalFuncProps } from 'antd/lib/modal';

let loginInstance: { destroy: () => void; update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void; } | null = null;

const LoginConfirm = () => {
  const { location, push } = history;
  // 防止多次唤起
  if (loginInstance) { return; }
  loginInstance = Modal.confirm({
    title: '登录过期，请重新登录',
    icon: createElement(InfoCircleOutlined),
    okText: '立即登录',
    onOk: () => push({ pathname: '/login', query: { redirect: location.pathname }}),
    afterClose() {
      loginInstance = null;
    },
  });
};

export default LoginConfirm;