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
            <div className="cnct_can">
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
                <div>
                    <div>
                        <h3 className="text-uppercase">address</h3>
                        <p><a className="link-dark" href="https://www.google.com/maps/place/Greenhouse+Mall/@-1.299932,36.7828357,17.17z/data=!4m9!1m2!2m1!1sngong+road!3m5!1s0x182f109987d40207:0x35c35ad0b10f9d1e!8m2!3d-1.300497!4d36.781778!16s%2Fg%2F11c1q9kt8_?entry=ttu" target="blank"><i class="fa-solid fa-location-dot"></i>Ngong Road</a></p>
                        <p><i class="fa-solid fa-phone"></i> +254 134 765 890/ +254 784 000 555</p>
                        <p><a className="link-dark" href="https://mail.google.com/mail/u/0/#inbox"><i class="fa-regular fa-envelope"></i> patanafuu@gmail.com</a></p>
                    </div>
                    <div className="cnct_icon">
                        <p class="fs-3"><a className="link-dark" href="https://www.instagram.com/" target="blank"><i class="fa-brands fa-instagram"></i></a></p>
                        <p class="fs-3"><a className="link-dark" href="https://www.facebook.com/" target="blank"><i class="fa-brands fa-facebook"></i></a></p>
                        <p class="fs-3"><a className="link-dark" href="https://www.linkedin.com/login" target="blank"><i class="fa-brands fa-linkedin"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;