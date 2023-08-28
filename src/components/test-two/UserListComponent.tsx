import React, { useState } from 'react';
import { Table, Col, Row, Button, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { deleteUser, deleteAllUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import UserFormModalComponent from './UserFormModalComponent';

const UserListComponent = (props: any) => {
  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [userEdited, setUserEdited] = useState({});
  const columns = [
    { title: 'ชื่อ', dataIndex: 'firstname', key: 'firstname' },
    { title: 'เพศ', dataIndex: 'gender', key: 'gender' },
    { title: 'หมายเลขโทรศัพท์มือถือ', dataIndex: 'telephone', key: 'telephone' },
    { title: 'สัญชาติ', dataIndex: 'region', key: 'region' },
    {
      title: 'จัดการ',
      dataIndex: 'manage',
      key: 'manage',
      render: (_: any, user: { id: number; }) => (
        <Row>
          <Button onClick={() => searchDataById(user.id)}>แก้ไข</Button>
          <Button onClick={() => deleteById(user.id)}>ลบ</Button>
        </Row>
      ),
    },
  ];

  const checkAll = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  function deleteAll() {
    if (checked) {
      dispatch(deleteAllUser());
    }
  }

  function updateList() {
    const result = localStorage.getItem('persons');
    if (result) {
      props.setData(JSON.parse(result));
    }
  }

  function addData(data: any) {
    console.log(data);
    if (Array.isArray(data)) {
      props.setData((prevList: any) => [...prevList, ...data]);
    } else {
      const array = Object.entries(data).map(([key, value]) => ({ key, value }));
      console.log('array ' + array);
      props.setData((prevList: any) => [...prevList, ...array]);
    }
  }

  const searchDataById = async (userId: number) => {
    const foundUser = props.data.find((user: { id: number; }) => user.id === userId);
    if (foundUser) {
      const bd = convertDate(foundUser.birthday);
      const User = {
        id: foundUser.id,
        prefix: foundUser.prefix,
        firstname: foundUser.firstname,
        lastname: foundUser.lastname,
        birthday: bd,
        region: foundUser.region,
        citizen: foundUser.citizen,
        gender: foundUser.gender,
        telephone: foundUser.telephone,
        passport: foundUser.passport,
        salary: foundUser.salary,
        nationalId1: foundUser.nationalId1,
        nationalId2: foundUser.nationalId2,
        nationalId3: foundUser.nationalId3,
        nationalId4: foundUser.nationalId4,
        nationalId5: foundUser.nationalId5,
        prefixNum: foundUser.prefixNum
      };
      setUserEdited(User);
      setIsModalOpen(true);
    }
  };

  const convertDate = (inputDate: string | number | Date) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const deleteById = (userId: number) => {
    const index = props.data.findIndex((user: { id: number; }) => user.id === userId);
    if (index !== -1) {
      const list = [...props.data];
      list.splice(index, 1);
      props.setData(list);
      dispatch(deleteUser(props.data));
    }
    console.log('id' + userId);

  };

  return (
    <Col>
      <Row>
        <Checkbox onChange={checkAll}>เลือกทั้งหมด</Checkbox>
        <Button onClick={deleteAll}>ลบข้อมูล</Button>
      </Row>
      <Table dataSource={props.data} columns={columns} />
      <UserFormModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userEdited={userEdited} updateList={updateList} deleteById={deleteById} addData={addData} />
    </Col>
  );
}

export default UserListComponent;
