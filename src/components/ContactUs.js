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
        <div className="">
            <h2 className="text-uppercase text-center">Share Your Thoughts and Inquiries. We're Here to Listen and Help</h2>
            <div>
                <form className="cnct_form">
                    <h3 className="text-uppercase">leave us a message</h3>
                    <div className="mb-3">
                        <label for="inputEmail4" className="form-label">Your Name (required)</label>
                        <input className="form-control" type="text" value={formInputs.name} onChange={handelChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="inputEmail4" className="form-label">Your Email (required)</label>
                        <input className="form-control" type="email" value={formInputs.email} onChange={handelChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input className="form-control" type="text" value={formInputs.subject} onChange={handelChange}/>
                    </div>
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={formInputs.message} onChange={handelChange}></textarea>
                      <label for="floatingTextarea" className="form-label">Message</label>
                    </div>
                    <div>
                        <button class="btn btn-primary cnct_btn" type="submit" onClick={handleClick}>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;