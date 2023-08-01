// incharge of each Region Card


import React from "react";
import EachHospitalCard from "./EachHospitalCard";
function RegionCard({
    region,
    handleCardClick,
    hospitals,
    selectRegion,
    
}){
   
    // const filteredHospitals = selectRegion
    // ? hospitalsData.filter((hospitalData) => hospitalData.region === selectRegion)
    // : hospitalsData;

        
        return(

        <div onClick={()=>handleCardClick(region)} style={{ cursor: "pointer" }}>
        <div>
        <h3>Hospitals in {region}</h3>
               {selectRegion === region && (
                <ul>
                    {hospitals.map((hospital)=>(
                        <li key={hospital.name}>

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
        )
    
}
export default RegionCard