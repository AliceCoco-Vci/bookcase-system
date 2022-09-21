import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import styles from './styles.less';
import { history } from 'umi';
import {postRequest} from '../utils/request'
import {putRequest} from '../utils/request'

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const submit = async (parmas: { name: string, passwd: string }) => {
        postRequest('/login', parmas).then(resp=> {
          if (resp.status == 200) {
            //成功
            var json = resp.data;
            if (json.status == 'success') {
              history.push('/home',0)
            } else {
              message.error('1登陆失败!');
            }
          } else {
            //失败
            message.error('2登录失败!');
          }
        },resp=> {
          message.error('找不到服务器⊙﹏⊙∥!');
        });
  };

  return (
    <div className={styles.login_container}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
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

  );
}