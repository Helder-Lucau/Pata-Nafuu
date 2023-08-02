// incharge of each Region Card


import React from "react";
import EachHospitalCard from "./EachHospitalCard";
function RegionCard({
    region,
    handleCardClick,
    hospitals,
    selectRegion,
    
}){
   

        
        return(

        <div onClick={()=>handleCardClick(region)} style={{ cursor: "pointer" }}>
        <div>
        <h3>Hospitals in {region}</h3>
        <div>
               {selectRegion === region && (
                <ul className="card-container" style={{display:"flex"}}> 
                    
                    {hospitals.map((hospital)=>(
                        <li key={hospital.name} style={{margin:"80px"}}>

                          <EachHospitalCard
                          name={hospital.name}
                          region={hospital.region}
                          department={hospital.department}
                          description={hospital.description}
                          image={hospital.image}
                          county={hospital.county}
                          type={hospital.type}
                          phoneno={hospital.phoneno}
                          email={hospital.emailaddress}
                          />
                        </li>
                    ))}
                    

                </ul>
               )}
               </div>
                </div>

        </div>
        )
    
}
export default RegionCard