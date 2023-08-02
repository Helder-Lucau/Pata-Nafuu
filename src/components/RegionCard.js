// incharge of each Region Card


import React from "react";
import EachHospitalCard from "./EachHospitalCard";

function RegionCard({
    region,
    handleCardClick,
    hospitals,
    selectRegion,
    
}){
  const cardStyles = {
    cursor: "pointer",
    backgroundColor: "#f0f0f0" ,
    borderRadius: "8px", 
    boxShadow:  "0 0 10px rgba(0, 0, 0, 0.3)" ,
    padding: "16px", 
  };
     

        
        return(

        <div onClick={()=>handleCardClick(region)} >
        
          <div style={cardStyles}>
            <div className="card" style={{width: "400px", height:"100px", backgroundColor:"yellowgreen"}}>
              <div>
        <h3 style={{ paddingTop:"30px"}}>Hospitals in {region}</h3>
        </div>
          </div>
          </div>
        <div >
          <div style={{backgroundColor:"pink"}}>
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
        
        )
    
}
export default RegionCard