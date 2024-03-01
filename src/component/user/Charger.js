import React from 'react'
import UserItems from './UserItems'
import { ChargerData } from '../categoryData/ChargerData';

const Charger = () => {
    const rowsData = [];
    for (let i = 0; i < ChargerData.length; i += 4) {
      rowsData.push(ChargerData.slice(i, i + 4));
    }
  
    return (
      <div className="ml-14">
        {/* Render the title at the top */}
        {/* <h2>Smart Phones</h2> */}
        <div className="text-xl font-bold p-2">charger</div>
  
        {/* Map over the rowsData and render UserItems for each row */}
        {rowsData.map((rowData, index) => (
          <UserItems key={index} data={rowData} />
        ))}
      </div>
    );
}

export default Charger
