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
          <div >
            <div className="card" style={{width: "400px", height:"300px"}}>
        <h3 style={{ paddingTop:"130px"}}>Hospitals in {region}</h3>
          </div>
          </div>
        <div style={{backgroundColor:"purple"}}>
          <div>
               {selectRegion === region && (
                
                <ul className="card-container" style={{display:"flex"}} > 
                    
                    {hospitals.map((hospital)=>(
                        <li   key={hospital.name} style={{margin:"80px"}}>

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

        </div>
        
        )
    
}
export default RegionCard