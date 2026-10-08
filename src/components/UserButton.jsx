import { Button } from "antd";
import React from "react";

const UserButton = ({ label, type, onClick, htmlType }) => {
  return (
    <div>
      <Button type={type} onClick={onClick} htmlType={htmlType}>
        {label}
      </Button>
    </div>
  );
};

export default UserButton;
