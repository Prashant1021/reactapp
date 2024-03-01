import React from "react";
import UserItems from "./UserItems";
import { smartPhoneData } from "../../utils/items";


const SmartPhones = () => {
 const rowsData = [];
  for (let i = 0; i < smartPhoneData.length; i += 4) {
    rowsData.push(smartPhoneData.slice(i, i + 4));
  }

  return (
    <div className="ml-14">
      {/* Render the title at the top */}
      {/* <h2>Smart Phones</h2> */}
      <div className="text-xl font-bold p-2">Smart Phones</div>

      {/* Map over the rowsData and render UserItems for each row */}
      {rowsData.map((rowData, index) => (
        <UserItems key={index} data={rowData} />
      ))}
    </div>
  );
};

export default SmartPhones;
