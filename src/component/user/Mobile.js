import React from 'react'
import UserItems from "./UserItems";
import { mobileData } from '../categoryData/MobileData';
const Mobile = () => {
    const rowsData = [];
  for (let i = 0; i < mobileData.length; i += 4) {
    rowsData.push(mobileData.slice(i, i + 4));
  }
  return (
    <div>
       <div className="ml-14">
      {/* Render the title at the top */}
      {/* <h2>Smart Phones</h2> */}
      <div className="text-xl font-bold p-2">Mobile</div>

      {/* Map over the rowsData and render UserItems for each row */}
      {rowsData.map((rowData, index) => (
        <UserItems key={index} data={rowData} />
      ))}
    </div>
    </div>
  )
}

export default Mobile
