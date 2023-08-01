import React, { useState,useEffect } from "react";
import EachHospitalCard from "./EachHospitalCard";

function HospitalCards(){
  
     const [hospitalsData, setHospitalsData]= useState([])
    useEffect(()=>{
        fetch("https://hospital-server-ovpz.onrender.com/hospitalsData")
        .then((response) => response.json())
        .then((data)=>{
            console.log( data); 
            setHospitalsData(data);
            console.log ("data fetched")
        })
        
},[])
    return(
        
        <div >
            <ul>
          { hospitalsData.map((hospitalData)=>(
           <li key={hospitalData.id}><EachHospitalCard
              name={hospitalData.name}
              region={hospitalData.region}
              department={hospitalData.department}
              description={hospitalData.description}
              image={hospitalData.image}
              county={hospitalData.county}
              type={hospitalData.type}
              phoneno={hospitalData.phoneno}
              email={hospitalData.emailaddress}

           />
           </li>
          ))}
           </ul>
        </div>
    )
    
}

export default HospitalCards;