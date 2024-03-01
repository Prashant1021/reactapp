import React from "react";
import SmartPhones from "./SmartPhones";
import Accessories from "./Accessories";
import Carousel from "./Carousel";

const DashBoard = () => {
  return (
    <div>
      <Carousel />
      <SmartPhones />
      <Accessories />
    </div>
  );
};

export default DashBoard;
