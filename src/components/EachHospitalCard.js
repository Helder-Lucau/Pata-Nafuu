import React from "react";


function EachHospitalCard({name,
     region, 
     department, 
     description,
     image, 
     county,
     type,
    phoneno,
    email,

    
    
    }){
        
        return(

        <div >
        <p>Name : {name}</p>
        <p>Region : {region} </p>
        <p>Department : {department} </p>
        <p> Description : {description} </p>
        <img src={image}  alt={name}/>
        <p>County: {county} </p>
        <p>Type : {type} </p>
        <p>Phone Number : {phoneno} </p>
        <p>Email Address : {email} </p>

        </div>
        )

}
export default EachHospitalCard