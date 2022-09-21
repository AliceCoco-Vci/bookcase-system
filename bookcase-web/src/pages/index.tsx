import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import styles from './styles.less';
import { history } from 'umi';
import { postRequest } from '../utils/request'
import { putRequest } from '../utils/request'

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const submit = async (parmas: { name: string, passwd: string }) => {
    postRequest('/login', parmas).then(resp => {
      if (resp.status == 200) {
        var json = resp.data;
        if (json.status == 'success') {
          history.replace("/home")
          window.location.reload()
        } else {
          message.error('用户名或密码错误!');
        }
      } else {
        message.error('登录失败!');
      }
    }, resp => {
      message.error('找不到服务器QAQ!');
    });
  };

  return (
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

  );
}