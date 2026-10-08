import React from 'react'
import {Input} from 'antd'
const UserInput = ({
    name,
    value,
    onChange,
    placeholder,
    size
}) => {
  return (
    <div>
      <Input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      ></Input>
    </div>
  )
}

export default UserInput
