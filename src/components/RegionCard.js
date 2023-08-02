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
    marginLeft: "55px",
    
    
  };

  

        
        return(

        <div  >

        
              <div style={cardStyles}>
                 <div onClick={()=>handleCardClick(region)} className="card" style={{width: "400px", height:"300px", backgroundColor:"#87CEEB"}}>
                     <h4 style={{ paddingTop:"130px"}}>Hospitals in {region}</h4>
                 </div>
               </div>

        
            <div style={{backgroundColor:"#B0E0E6"}}>
               {selectRegion === region && (
                
                   <ul className="card-container" style={{display:"flex", flexWrap: "wrap",marginLeft:"150px"}} > 
                     
                         {hospitals.map((hospital)=>(
                            <li   key={hospital.name}  style={{ margin: "20px", flex: "0 0 400px" ,listStyle:"none"}}>
                                     
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