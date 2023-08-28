import React, { useEffect } from 'react';
import { Modal, Form, Row, Col, Select, Input, Radio, DatePicker, InputNumber, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';
import { useDispatch } from 'react-redux';
import User from '../../model/User';
import ConfigProvider from 'antd/lib/config-provider';

function UserFormModalComponent(props: any) {
    const { t } = useTranslation();
    const layout = {
        labelCol: { span: 12 },
    };
    const [form] = Form.useForm();
    const { Option } = Select;
    const selectGender = (value: string) => {
        console.log(value);
    };
    const selectRegion = (value: string) => {
        console.log(value);
    };
    const selectPrefixNum = (value: string) => {
        console.log(value);
    };
    const dispatch = useDispatch();
    const saveData = (values: User) => {
        console.log('in + ' + props.userEdited.id);
        props.deleteById(props.userEdited.id);
        props.addData(values);
        props.updateList();
        props.setIsModalOpen(false);
    };
    const cancel = () => {
        props.setIsModalOpen(false);
    };
    useEffect(() => {
        if (props.userEdited) {
            form.setFieldsValue(props.userEdited);
        }
    }, [props.userEdited]);
    return (
        <Modal open={props.isModalOpen} footer={null} bodyStyle={{ height: 500, width: 1000 }} width={1200}>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={saveData}
            >
                <Row>
                    <Col span={6}>
                        <Form.Item name="prefix" label="คำนำหน้าชื่อ" rules={[{ required: true }]}>
                            <Select
                                placeholder={t('select')}
                                onChange={selectGender}
                                allowClear
                            >
                                <Option value="1">{t('mr')}</Option>
                                <Option value="2">{t('mrs')}</Option>
                                <Option value="3">{t('miss')}</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item name="firstname" label="ชื่อจริง" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item name="lastname" label="นามสกุล" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Form.Item
                            name="birthday"
                            label="วันเกิด"
                            rules={[{ required: true }]}
                        >
                            <ConfigProvider locale={locale}>
                                <DatePicker defaultValue={dayjs(props.userEdited.birthday, 'YYYY-MM-DD')} />
                            </ConfigProvider>;
                        </Form.Item>

                    </Col>
                    <Col span={9}>
                        <Form.Item name="region" label="สัญชาติ" rules={[{ required: true }]}>
                            <Select
                                placeholder={t('select')}
                                onChange={selectRegion}
                                allowClear
                            >
                                <Option value="1">ไทย</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={9}>

                    </Col>
                </Row>
                <Row gutter={2}>
                    <Col span={6}>
                        <Form.Item name="nationalId1" label="เลขบัตรประชาชน" rules={[{ required: true }]}>
                            <Input maxLength={1} />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item name="nationalId2" label="" rules={[{ required: true }]}>
                            <Input maxLength={4} />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item name="nationalId3" label="" rules={[{ required: true }]}>
                            <Input maxLength={5} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name="nationalId4" label="" rules={[{ required: true }]}>
                            <Input maxLength={2} />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item name="nationalId5" label="" rules={[{ required: true }]}>
                            <Input maxLength={1} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Form.Item name="gender" label="เพศ" rules={[{ required: true }]}>
                            <Radio.Group>
                                <Radio value="male">ผู้ชาย</Radio>
                                <Radio value="female">ผู้หญิง</Radio>
                                <Radio value="not-specified">ไม่ระบุ</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="id" label="" rules={[{ required: true }]} hidden={true}>
                            <Input maxLength={5} value={props.userEdited.id} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={2}>
                    <Col span={8}>
                        <Form.Item name="prefixNum" label="หมายเลขโทรศัพท์มือถือ" rules={[{ required: true }]}>
                            <Select
                                placeholder={t('select')}
                                onChange={selectPrefixNum}
                                allowClear
                            >
                                <Option value="1">+66</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name="telephone" label="" rules={[{ required: true }]}>
                            <Input maxLength={10} />
                        </Form.Item>
                    </Col>
                    <Col span={10}>

                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item name="passport" label="หนังสือเดินทาง" rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={14}>

                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item name="salary" label="เงินเดือนที่คาดหวัง" rules={[{ required: true }]}>
                            <InputNumber />
                        </Form.Item>
                    </Col>
                    <Col span={14}>
                    </Col>
                </Row>
                <Row>
                    <Button key="back" onClick={cancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </Modal>
    );
}

export default UserFormModalComponent;