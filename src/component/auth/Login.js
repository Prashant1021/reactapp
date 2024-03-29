import { Button, Card, Form, Input, notification } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Admin,auth } from "../../utils/items";
import { LeftCircleFilled } from "@ant-design/icons";

const Login = () => {
  const data = auth?.[0];
  const navigate = useNavigate();
  const onFinish = (values) => {
    const userType = data?.type?.[0]?.user;
    if (values?.user_name === userType && userType === "prashant10") {  //username
      navigate("/");
      notification.success({ 
        message: "Login successfully!",
        description: 'You have been successfully logged in',
        duration: 1,
        placement: "top"

       });
      localStorage.setItem("token", JSON.stringify(data));
    } else if (values?.user_name === "admin") {
      const admindata = Admin?.map((item) => {
        return { ...item, name: values.user_name };
      });
      notification.success({ 
        message: "Login successfully!",
        description: 'You have been successfully logged in',
        duration: 0.1
     });
      localStorage.setItem("token", JSON.stringify(admindata?.[0]));
      navigate("/admin");
    } else {
      notification.info({
        message: "Invalid username or password",
        placement: "top",
        duration: 0.8
      });
    }
  };
  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-80 bg-white">
        <div>
        <div>
            <LeftCircleFilled onClick={() => navigate(-1)} />
          </div>  
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Login</h3>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name={"user_name"}
              label={"User Name"}
              rules={[
                {
                  required: "true",

                  message: "The input  Valid username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name={"password"}
              label={"Password"}
              rules={[
                {
                  required: "true",
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <div className="flex justify-between">
              <Button htmlType="submit" style={{backgroundColor:"cyan"}}>Login</Button>
              <Button onClick={() => navigate("/")} style={{backgroundColor:"cyan"}}>Back Home</Button>
            </div>
          </Form>
          <div >
            Don't have an account? <Link to="/auth/signup" style={{color:"#04E082"}}>Sign Up</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Login;
