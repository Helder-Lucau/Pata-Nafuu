import React from "react";


function EachHospitalCard({
    regionName,
    handleClick
    
    }){
        
        return(

        <div onClick={()=>handleClick(regionName)}>
        REGION:{regionName}

        </div>
        )

}
export default EachHospitalCard