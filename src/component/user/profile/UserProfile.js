import { Button, Card, Form, } from "antd";

import React from "react";


import { AntdInput, AntdUploder, SaveButton } from "../../common";




const UserProfile = () => {

  const handelOnfinish = (value) => {
    console.log("value", value);
  };

  return (
    <div>
      <Card className="m-16 bg-slate-400 text-center">
      <Form layout="vertical" onFinish={handelOnfinish}>
        <div className="flex justify-between">
          <div className="grid gap-x-2 md:grid-cols-12 grid-flow-row">
            <div className="md:col-span-4">
              <AntdInput name="name" label="First Name" required />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="last_name" label="Last Name" required />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="email" label="Email" required />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="contact" label="contact" required />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="address" label="Address" required />
            </div>

            <div className="md:col-span-4 gap-2 flex">
              <div>
                <SaveButton type="submit" name="Save"/>
              </div>

              <Button className="bg-green-300">Edit</Button>
            </div>
          </div>

          <div className="w-[10%] justify-end flex">
            <AntdUploder name="photo" />
          </div>
        </div>
      </Form>
      </Card>
    </div>
  );
};

export default UserProfile;
