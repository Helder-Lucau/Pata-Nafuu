import React, { useState } from "react";

function ContactUs(){

    const inputs = {
        name:"",
        email:"",
        subject:"",
        message:""
    }

    const [formInputs, setFormInputs] = useState(inputs)

    function handelChange(event){
        setFormInputs(event.target.value)
    }

    const handleClick = (e) => (e.preventDefault())

    return(
        <div className="row justify-content-center">
            <div class="w-75 p-3 ">
                <h3>Share Your Thoughts and Inquiries. We're Here to Listen and Help</h3>
                <form className="row g-3">
                        <div className="col-md-6 ">
                            <label for="inputEmail4" className="form-label fs-3">Name</label>
                            <input className="form-control" type="text" value={formInputs.name} onChange={handelChange}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label fs-3">Email</label>
                            <input className="form-control" type="email" value={formInputs.email} onChange={handelChange}/>
                        </div>
                    <div className="col-12">
                        <label className="form-label fs-3">Subject</label>
                        <input className="form-control" type="text" value={formInputs.subject} onChange={handelChange}/>
                    </div>
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={formInputs.message} onChange={handelChange}></textarea>
                      <label for="floatingTextarea" className="form-label fs-5">Message</label>
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit" onClick={handleClick}>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;