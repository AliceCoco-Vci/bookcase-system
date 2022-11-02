import { Button, Form, Input, Modal, DatePicker, Switch, InputNumber, AutoComplete, message } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
import { history } from 'umi';
import API from '@/utils/request'
import styles from './styles.less'

interface Values {
    title: string;
    author: string;
    startDay: string;
    price: number;
    press: string;
    purchaseWay: string;
    info: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}

const options = [
    { value: '海棠' },
    { value: '北美' },
    { value: '旭儒' },
];

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Create a new book record"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Form.Item
                    name="title"
                    label="书名"
                    rules={[{ required: true, message: 'Please input the title of the book!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="author" label="作者">
                    <Input />
                </Form.Item>
                <Form.Item
                    name="startDay"
                    label="购买日期"
                >
                    <DatePicker
                        defaultValue={moment()}
                        showTime
                        format="YYYY-MM-DD HH:mm"
                        style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="价格"
                    rules={[{ required: true, message: 'Please input the price!' }]}
                >
                    <InputNumber prefix="￥" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="press" label="出版社">
                    <AutoComplete
                        style={{ width: '100%' }}
                        options={options}
                        filterOption={(inputValue, option) =>
                            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Form.Item>
                <Form.Item name="purchaseWay" label="购买方式">
                    <Input />
                </Form.Item>

                <Form.Item
                    name="info"
                    label="备注"
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const InputPage = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values: Values) => {
        API.BookInput({
            ...values,
            startDay: moment(values.startDay).set('second', 0).set('millisecond', 0).valueOf(),
        }).then(resp => {
            if (resp.status == 'success') {
                message.info('录入成功!');
                setVisible(false);
            } else {
                message.error('网络错误QAQ请稍后再试~');
            }
        });

    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                New Book
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default InputPage;