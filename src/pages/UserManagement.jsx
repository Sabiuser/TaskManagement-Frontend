import React, { useState, useEffect } from "react";
import UserInput from "../components/UserInput";
import UserButton from "../components/UserButton";
import UserTable from "../components/UserTable";
import UserGrid from "../components/UserGrid";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosInstance from "../api/axiosInstance";

const UserManagement = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [users, setUsers] = useState([]);

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //   },
  //   {
  //     title: "Username",
  //     dataIndex: "username",
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //   },
  //   {
  //     title: "Phone",
  //     dataIndex: "phone",
  //   },
  //   {
  //     title:"Actions",
  //     render:(value,record)=>(
  //       <div className="flex gap-3">
  //       <EditIcon className="cursor-pointer text-blue-600"></EditIcon>
  //       <DeleteIcon className="cursor-pointer text-red-500"></DeleteIcon>
  //       </div>
  //     )
  //   }
  // ];

const columns = [
  {
    headerName: "Task Name",
    field: "taskName",
    flex:1
  },
  {
    headerName: "Priority",
    field: "priority",
    flex:1
  },
  {
    headerName: "Due Date",
    field: "dueDate",
    flex:1
  },
  {
    headerName: "Actions",
    cellRenderer: (params) => (
      <div className="flex gap-3 p-1">
        <EditIcon className="cursor-pointer text-blue-600" />
        <DeleteIcon className="cursor-pointer text-red-500" />
      </div>
    ),
  },
];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    console.log(form);
  };

  useEffect(() => {
    // axios
    //   .get("https://localhost:7103/api/Task")
    axiosInstance.get("/Task")
      .then((response) => {
        console.log(response?.data)
        setUsers(response?.data);
      });
  }, []);

  return (
    <div>
      {/* <h1 className="text-4xl font-bold text-center">
        User Management
      </h1> */}

      {/* <form
        onSubmit={handleClick}
        className="flex flex-col p-6 gap-4 justify-center items-center w-full md:max-w-[600px] mx-auto bg-pink-300 shadow-md rounded-lg space-y-4"
      >
        <UserInput
          name="name"
          value={form.name}
          placeholder="Enter a name"
          onChange={handleChange}
          size="middle"
        />

        <UserInput
          name="email"
          value={form.email}
          placeholder="Enter an email"
          onChange={handleChange}
          size="middle"
        />

        <UserButton
          label="Add Form"
          type="primary"
          htmlType="submit"
        />
      </form> */}

      <UserGrid
         rowData={users}
         columnDefs={columns}
         className="min-h-screen w-full flex  justify-center items-center"
      />
    </div>
  );
};

export default UserManagement;
