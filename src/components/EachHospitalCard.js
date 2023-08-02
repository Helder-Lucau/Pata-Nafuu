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
        const textStyle={
            color:'black',
            fontSize:'16px',
            fontWeight:'700'

}
        
        
        
        return(
    // <div className="card " >
    //     <div className="card " style={{width:"600px" , height:"470px"}} >
    //     <img src={image}  className="card-img"  alt={name} style={{height: "600px"}} />

    //     <div className="card-img-overlay" style={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} >
    //     <h3 className="card-title" style={textstyle}>Name :<span style={{fontSize:"20px", fontWeight:"bolder"}}> {name} </span></h3>
    //     <p className="card-text" style={textstyle} >Region : {region} </p>
    //     <p className="card-text" style={textstyle} >Department : {department} </p>
    //     <p className="card-text" style={textstyle} > Description : {description} </p>
       
    //     <p className="card-text" style={textstyle} >County: {county} </p>
    //     <p className="card-text" style={textstyle} >Type : {type} </p>
    //     <p className="card-text" style={textstyle} >Phone Number : {phoneno} </p>
    //     <p className="card-text" style={textstyle} >Email Address : {email} </p>
    //     </div>
    //     </div>
    //     </div>

    <div className="card" style={{ display: "flex" }}>
    <div style={{ flex: 1 }}>
      <img src={image} className="card-img" alt={name} style={{ height: "350px" , width:"400px"}} />
    </div>
    <div className="card" style={{ width: "600px", height: "470px" }}>
      {/* <div className="card-img-overlay" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}> */}
        <h3 className="card-title" style={textStyle}>
          Name: <span style={{ fontSize: "20px", fontWeight: "bolder" }}>{name}</span>
        </h3>
        <p className="card-text" style={textStyle}>
          Region: {region}
        </p>
        <p className="card-text" style={textStyle}>
          Department: {department}
        </p>
        <p className="card-text" style={textStyle}>
          Description: {description}
        </p>
        <p className="card-text" style={textStyle}>
          County: {county}
        </p>
        <p className="card-text" style={textStyle}>
          Type: {type}
        </p>
        <p className="card-text" style={textStyle}>
          Phone Number: {phoneno}
        </p>
        <p className="card-text" style={textStyle}>
          Email Address: {email}
        </p>
      {/* </div> */}
    </div>
  </div>
         )

}
export default EachHospitalCard