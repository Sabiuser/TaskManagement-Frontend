import React from 'react'
import { Table } from 'antd'
const UserTable = ({userData,columns}) => {

  console.log("userData in table:", userData);
  console.log("columns in table:", columns);
  return (
    <div>
      <Table dataSource={userData} columns={columns} rowKey='id'></Table>
    </div>
  )
}

export default UserTable
