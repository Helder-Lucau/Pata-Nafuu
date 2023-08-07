import React from "react";

function FilterData({ onChange }) {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
    <h3 style={{paddingLeft:"1500px"}}>Filter Hospitals By Department</h3>
    <select onChange={handleSelectChange} style={{marginLeft:"1600px", fontSize:"17px", backgroundColor:"#10BBE5"}}>
       
      <option value="">All Departments</option>
      <option value="Radiology Department">Radiology Department</option>
      <option value="Paediatric Department">Paediatric Department</option>
      <option value="Cancer Care">Cancer Care</option>
    </select>
    </div>
  );
}

export default FilterData;