/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-10 16:56:32
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-02 18:12:38
 * @FilePath: /bookcase-web/src/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import styles from './index.less';
import { history } from 'umi';
import API from '@/utils/request'
import { setToken, setUserInfo } from '@/utils/localstorage';
import FloatWord from '@/components/FloatWord/FloatWord';

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const submit = async (parmas: { name: string, passwd: string }) => {
    setSubmitting(true)
    API.Login({ ...parmas, }).then(resp => {
      if (resp.status == "success") {
        setToken(resp.token);
        setUserInfo(resp.data);
        console.log("auth",resp.data)
        history.push("/home")
      } else if (resp.status == "error") {
        message.error(resp.msg);
      } else if (resp.status == "504") {
        message.error('找不到服务器QAQ!');
      }
    });
    setSubmitting(false)
  };

  return (
    <div className={styles.container}>
      <div><FloatWord /></div>
      <div className={styles.login_container}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ username: "AliceCoco", password: "123456", remember: true }}
          onFinish={submit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }} style={{ marginTop: 60 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}