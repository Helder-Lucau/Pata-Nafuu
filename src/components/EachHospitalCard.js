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
    <div className="card " >
        <div className="card " style={{width:"700px" , height:"500px"}} >
        <img src={image}  className="card-img"  alt={name} style={{height: "600px"}} />

        <div className="card-img-overlay">
        <h3 className="card-title">Name : {name}</h3>
        <p className="card-text">Region : {region} </p>
        <p className="card-text">Department : {department} </p>
        <p className="card-text"> Description : {description} </p>
       
        <p className="card-text">County: {county} </p>
        <p className="card-text">Type : {type} </p>
        <p className="card-text">Phone Number : {phoneno} </p>
        <p className="card-text">Email Address : {email} </p>
        </div>
        </div>
        </div>
        )

}
export default EachHospitalCard