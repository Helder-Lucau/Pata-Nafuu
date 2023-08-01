import React, { useState,useEffect } from "react";
import EachHospitalCard from "./EachHospitalCard";

function HospitalCards(){
  
     const [hospitals, setHospitals]= useState([])
    useEffect(()=>{
        fetch("https://hospital-server-ovpz.onrender.com/hospitalsData")
        .then((response) => response.json())
        .then((data)=>{
            setHospitals(data);
        })
},[])
    return(
        
        <div >
            <ul>
          { hospitals.map((hospitaldata)=>(
           <li key={hospitaldata.id}><EachHospitalCard
              name={hospitaldata.name}
              region={hospitaldata.region}
              department={hospitaldata.department}
              description={hospitaldata.description}
              image={hospitaldata.image}
              county={hospitaldata.county}
              type={hospitaldata.type}
              phoneno={hospitaldata.phoneno}
              email={hospitaldata.emailaddress}

           />
           </li>
          ))}
           </ul>
        </div>
    )
    
}

export default HospitalCards;