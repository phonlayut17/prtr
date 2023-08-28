import React, { useState } from 'react';
import { Row, Col, Button, Form, Input, Select, DatePicker, Radio, InputNumber, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import type { SpaceSize } from 'antd/es/space';
import { User } from '../../model/User';
import { addUser, deleteUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import locale from 'antd/es/date-picker/locale/th_TH';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
};

function UserFormComponent(props: any) {
  const [form] = Form.useForm();

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
    dispatch(addUser({
      ...values,
      id: props.data.length + 1,
      prefix: values.prefix,
      firstname: values.firstname,
      lastname: values.lastname,
      birthday: values.birthday,
      region: values.region,
      citizen: values.nationalId1 + values.nationalId2 + values.nationalId3 + values.nationalId4 + values.nationalId5,
      nationalId1: values.nationalId1,
      nationalId2: values.nationalId2,
      nationalId3: values.nationalId3,
      nationalId4: values.nationalId4,
      nationalId5: values.nationalId5,
      gender: values.gender,
      prefixNum: values.prefixNum,
      telephone: values.telephone,
      passport: values.passport,
      salary: values.salary
    }));
    props.update();
  };

  function deleteById(id: any) {
    dispatch(deleteUser(id));
    props.update();
  }

  const resetData = () => {
    form.resetFields();
  };

  const { t } = useTranslation();

  const [size] = useState<SpaceSize | [SpaceSize, SpaceSize]>('small');

  return (
    <Col>
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
            <Form.Item name="birthday" label="วันเกิด" rules={[{ required: true }]}>
              <DatePicker format="YYYY-MM-DD" locale={locale} />
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
          <Col span={8}>
            <Form.Item name="gender" label="เพศ" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="male">ผู้ชาย</Radio>
                <Radio value="female">ผู้หญิง</Radio>
                <Radio value="not-specified">ไม่ระบุ</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={16}>

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
            <Form.Item>
              <Space size={size}>
                <Button htmlType="button" onClick={resetData}>
                  ล้างข้อมูล
                </Button>
                <Button type="primary" htmlType="submit">
                  ส่งข้อมูล
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default UserFormComponent;

