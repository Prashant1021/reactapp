import React from "react";
import { Avatar, Dropdown, Menu, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
import { LogOut } from "../../utils/Storage";
import profilePicture from "../../image/profile.jpeg"

const UserHeader = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log("event", e);
    if (Number(e.key) === 2) {
      LogOut();
      navigate("/");
        // Display logout notification
        notification.success({
          message: 'Logged Out Successfully',
          description: 'You have been successfully logged out.',
          duration:1, // Duration in seconds for the notification to be displayed
          placement: "top"
        });
    } else {
      navigate("/user/profile");
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex justify-between items-center">
      <div>
        <Dropdown overlay={menu} placement="bottom" arrow>
          <Avatar
            style={{ backgroundColor: "#1677ff",
            width: "40px", // Set width
              height: "40px", // Set height
              fontSize: "24px", // Set font size of the icon
           }}
            // icon={<UserAddOutlined />}
            src={profilePicture}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default UserHeader;
const items = [
  {
    key: "1",
    label: "Profile",
  },
  {
    key: "2",
    label: "Logout",
  },
];
