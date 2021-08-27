import React, { useState } from 'react';

const DropDown = () => {
  const [dropdown, setDropdown] = useState('Bihar');

  const dropdownHandler = (event) => {
    setDropdown(event.target.value);
  };

  return (
    <div>
      Select state to know capital city : <select value={dropdown} onChange={dropdownHandler}>
        <option style={{ backgroundColor: 'blue' }} value="Patna">
          Bihar
        </option>
        <option style={{ backgroundColor: 'orange' }} value="Lucknow">
          Uttar Pradesh
        </option>
        <option style={{ backgroundColor: 'red' }} value="Ranchi">
          Jharkhand
        </option>
      </select>
      <h4>Capital of state is : {dropdown} </h4>
    </div>
  );
};

export default DropDown;
