import React, { useState,useEffect } from "react";
import RegionCard from "./RegionCard";

function HospitalCards(){
  
     const [hospitalsData, setHospitalsData]= useState([])
     const [selectRegion, setSelectRegion]=useState(null)

    useEffect(()=>{
        fetch("https://hospital-server-ovpz.onrender.com/hospitalsData")
        .then((response) => response.json())
        .then((data)=>{
            console.log( data); 
            setHospitalsData(data);
            console.log ("data fetched")
        })
        
},[])

 const handleCardClick=(region)=>{
 setSelectRegion(region)
 }

 const groupHospitalsByRegion = (data) => {
    const groupedHospitals = {};
    data.forEach((hospital) => {
      if (!groupedHospitals[hospital.region]) {
        groupedHospitals[hospital.region] = [];
      }
      groupedHospitals[hospital.region].push(hospital);
    });
    return groupedHospitals;
  };
  const groupedHospitals = groupHospitalsByRegion(hospitalsData);

 

    return(
        <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px", 
         
         }}
        >
            
            
                {/* rendering individual cards for each region */}
                
                {Object.keys(groupedHospitals).map((region)=>(
                    <RegionCard
                    key={region}
                    region={region}
                    handleCardClick={handleCardClick}
                    hospitalsData={hospitalsData}
                    selectRegion={selectRegion}
                    hospitals={groupedHospitals[region]}
                    />
                ))}
                </div>
                


            
            
        
    )
}

export default HospitalCards;