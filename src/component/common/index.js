import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, message } from "antd";
import React from "react";

export const FormItem = (props) => {
  return (
    <Form.Item
      {...props}
      name={props.name}
      label={props?.label}
      rules={props.localrules}
    >
      {props.children}
    </Form.Item>
  );
};

export const AntdInput = (props) => {
  const tempRule = [
    {
      required: props.required,

      message: `Please Enter ${props.label}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  return (
    <FormItem {...props} localrules={localrules}>
      <Input onClick={props.onClick} 
      onChange={props.onChange} 
      type={props.type}
      />
    </FormItem>
  );
};

export const SaveButton = (props) => {
  return (
    <Button
      className="bg-green-300 "
      htmlType={props.type}
      onClick={props.onClick}
      onChange={props.onChange}
      loading={props.loading}
    >
      {props.name}
    </Button>
  );
};

export const EditButton = (props) => {
  return (
    <Button
      className="bg-green-300 "
      htmlType={props.type}
      onClick={props.onClick}
      onChange={props.onChange}
    >
      Edit
    </Button>
  );
};

export const AntdUploder = (props) => {
  const [loading, setLoading] = React.useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const [imageUrl, setImageUrl] = React.useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const tempRule = [
    {
      required: props.required,

      message: `Please Enter ${props.label}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  return (
    <Form.Item {...props} localrules={localrules}>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        //   beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100%",
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </Form.Item>
  );
};
