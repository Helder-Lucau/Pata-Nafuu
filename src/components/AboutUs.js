import React from "react";
import whoWeAreImage from "../images/pexels-photo-4021775.jpeg"
import progressImage from "../images/pexels-alex-green-5691859.jpg"
import qualityImage from "../images/pexels-william-fortunato-6393165.jpg"
import '../style/About.css'; 

function AboutUs(){
    return(
        <div>
            <div className="">
                <div className="mt-5">
                    <h2 className="text-uppercase text-center fs-2">Transforming Patient Access to Specialised Healthcare Services</h2>
                    <p className="text-uppercase text-center">Pata-Nafuu strives to simplify finding the right medical facilities, services, and treatments across Kenya.</p>
                </div>
                <div className="card_aboutus">
                    <img className="image" src={whoWeAreImage} alt="..."/>
                    <div className="">
                        <h3 className="text-uppercase">Who we are</h3>
                        <p>Pata-Nafuu is a pioneering online healthcare platform committed to enhancing medical accessibility across Kenya. We specialize in connecting users with hospitals within their region, focusing on the granularity of counties. Our user-friendly interface empowers individuals to easily locate medical facilities, services, and specialties available near them. By amalgamating advanced technology with a comprehensive database of hospitals, we facilitate informed healthcare decisions. Pata-Nafuu's innovative approach fosters seamless navigation through the intricate healthcare landscape, enabling users to make well-informed choices about their medical needs. Rooted in the ethos of improving healthcare convenience, transparency, and efficiency, Pata-Nafuu is dedicated to ensuring that quality medical care is never out of reach for any Kenyan, regardless of their location.</p>
                    </div>
                </div>
                <div className="card_aboutus">
                    <div className="">
                        <h3 className="text-uppercase">Our journey and milestone</h3>
                        <p>Since 2018, we've rapidly grown, achieving numerous milestones such as the Best Healthtech Company in Kenya (Afya Startup Awards 2022) and the Digital Innovation Award (Bumrungrad International Hospital 2021). We've been featured in numerous local and global media publications.</p>
                        <p>Soon we'll be expanding our services to other counties and get into remote areas of Kenya, there after we'll be available in East Africa and even the whole of Africa</p>
                        <p>Stay tuned for our upcoming achievements.</p>
                    </div>
                    <div className="">
                        <img className="image" src={progressImage} alt="..." />
                    </div>
                </div>
                <div className="qualities">
                    <div className="can">
                        <div className="">
                            <h3 className="text-uppercase">Our Mission</h3>
                            <p className="text-break">To transform the way patients worldwide access healthcare services</p>
                        </div>
                    </div>
                    <div className="can">
                        <div className="">
                            <h3 className="text-uppercase">Our Vision</h3>
                            <p>To create a seamless patient journey, enabling access to the required healthcare services swiftly, regardless of health concerns.</p>
                        </div>
                    </div>
                    <div className="can">
                        <div className="">
                            <h3 className="text-uppercase">Our Core Values</h3>
                            <p>PATIENTS are at the heart of everything we do.</p>
                        </div>
                    </div>
                </div>
                <div className="card_aboutus">
                    <img className="image" src={qualityImage} alt="..."/>
                    <div>
                        <h3 className="text-uppercase">Our Quality And Safety Policy(Missions)</h3>
                        <ul>
                            <li>We strive for excellence in health care through the provision of expert, compassionate and ethical care to all our clients.</li>
                            <li>We believe in the provision of accessible, cost effective, evidence-based, and efficient care that meets or exceeds the expectations of our clients.</li>
                            <li>We strive to provide an enabling and collaborative work environment that motivates, energises and recognises the contributions of individuals and teams.</li>
                            <li>Through leadership in research and education, we aspire to improve the health of the people of Kenya, East Africa and beyond.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;

