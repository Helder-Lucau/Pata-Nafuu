import React from "react";

function DropDown(){

    return(
        <div>
        <select>
           <option value="placeHolder">Choose By Department</option>
           <option value="radiologyDepartment">Radiology Department</option>
            <option value ="paediatric Department">Paediatric Department</option>
            <option value="plasticSurgery">Plastic and Cosmetic Surgery</option>
            <option value= "cancerCare">Cancer Care</option>
            
        </select>
        </div>
    )
}

export default DropDown;