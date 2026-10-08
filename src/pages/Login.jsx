import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;
const Login = () => {
  const navigate = useNavigate();
    const onFinish = async(values) => {
        console.log("VALUES:", values);
      try{
        console.log("API URL:", `${API_URL}/Auth/login`);
        const response = await axios.post(`${API_URL}/Auth/login`,{
          userEmail:values?.userEmail,
          password:values?.password
        })

        const{token,refreshToken} = response.data;
        localStorage.setItem("token",token);
        localStorage.setItem("refreshToken",refreshToken);
           await Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome back!"
        });
         console.log('Login Details',response.data);
         navigate("/tasks")

        
      }catch(error){
          console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);
    console.log("Message",error.message);
      await Swal.fire({
           icon: "error",
            title: "Login Failed",
            text: "Invalid email or password"
        });
  };
}
  return (
    <div className='min-h-screen w-full flex  justify-center items-center '>
        <div className=' shadow-lg rounded-lg p-10 w-full max-w-[450px] '>
       <Form
      name="login"
      initialValues={{ remember: true }}
      className="w-full max-w-[380px] mx-auto "
      onFinish={onFinish}
    >
      <Form.Item
        name="userEmail"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
         <div className="mt-6 text-center">
              or  <a href="" className="text-blue-700 hover:text-blue-700">Register now!</a>
            </div>
      </Form.Item>
   
    </Form>
    </div>
    </div>
  )
}

export default Login
