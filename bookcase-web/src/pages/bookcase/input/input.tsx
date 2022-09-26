import { Button, Form, Input, Modal, DatePicker, Switch, InputNumber, AutoComplete, message } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import moment from 'moment';
import { history } from 'umi';
import API from '@/utils/request'
import styles from './styles.less'

interface Values {
    title: string;
    description: string;
    modifier: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}

const onChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
    if (dates) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
        console.log('Clear');
    }
};

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
    const [delivery, setDelivery] = useState(true);
    const deliverySwitch = () => {
        setDelivery(!delivery)
    }
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
                    name="date"
                    label="购买日期-收货日期"
                >
                    <DatePicker.RangePicker
                        ranges={{ Today: [moment(), moment()], }}
                        defaultValue={[moment(), moment()]}
                        showTime
                        format="YYYY/MM/DD HH:mm:ss"
                        onChange={onChange}
                        disabled={[false, delivery]}
                    />
                    <Switch
                        size="small"
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        style={{ marginLeft: '20px' }}
                        onClick={deliverySwitch}
                    />
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
                <Form.Item name="way" label="购买方式">
                    <Input />
                </Form.Item>

                <Form.Item
                    name="intro"
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

    const onCreate = (values: string[]) => {
        API.BOOK_INPUT({ ...values }).then(resp => {
            if (resp.status == 'success') {  
                    message.info('录入成功!');
                    setVisible(false);           
            } else {
                message.error('2网络错误QAQ请稍后再试~');
            }
        }, resp => {
            message.error('找不到服务器QAQ!');
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