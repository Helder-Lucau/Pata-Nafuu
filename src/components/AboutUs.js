import React from "react";
import firstImage from"./Images/gabe-pierce-htEGTleSCZk-unsplash.jpg"
import secondImage from"./Images/pexels-total-shape-2383010.jpg"
import thirdImage from"./Images/pexels-ketut-subiyanto-4546132.jpg"
import whoWeAreImage from "./Images/pexels-photo-4021775.jpeg"
import progressImage from "./Images/pexels-alex-green-5691859.jpg"
import qualityImage from "./Images/pexels-william-fortunato-6393165.jpg"

function AboutUs(){
    return(
        <div className="d-flex flex-column mb-3">
            <div>
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                          <img src={firstImage} class="d-block w-100 crsl_img" alt="..."/>
                          <div class="carousel-caption d-none d-md-block">
                                <h5 className="crsl_hd">Finding Joy in Small Moments</h5>
                                <p className="crsl_txt">Amidst life's bustling symphony, remember to pause and listen to the melody of small moments. In these whispers, you'll find the harmony of joy.</p>
                          </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={secondImage} class="d-block w-100 crsl_img" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5 className="crsl_hd">Resilience and Healing</h5>
                                <p className="crsl_txt">In the face of adversity, your strength shines brightest. Just like a wound that heals, your spirit too can mend and grow stronger. Embrace each challenge as a step toward your brighter days.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={thirdImage} class="d-block w-100 crsl_img" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                              <h5 className="crsl_hd">Hope and Renewal</h5>
                              <p className="crsl_txt">Just as the sun rises after the darkest night, hope rekindles within you. Let it be the beacon that guides you through challenges, lighting the way to a brighter tomorrow.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="">
                <div>
                    <h2 className="text-uppercase text-center fs-2">Transforming Patient Access to Specialised Healthcare Services</h2>
                    <p className="text-uppercase text-center">Pata-Nafuu strives to simplify finding the right medical facilities, services, and treatments across Kenya.</p>
                </div>
                <div className="card">
                    <img className="image" src={whoWeAreImage}/>
                    <div className="">
                        <h3 className="text-uppercase">Who we are</h3>
                        <p>Pata-Nafuu is a pioneering online healthcare platform committed to enhancing medical accessibility across Kenya. We specialize in connecting users with hospitals within their region, focusing on the granularity of counties. Our user-friendly interface empowers individuals to easily locate medical facilities, services, and specialties available near them. By amalgamating advanced technology with a comprehensive database of hospitals, we facilitate informed healthcare decisions. Pata-Nafuu's innovative approach fosters seamless navigation through the intricate healthcare landscape, enabling users to make well-informed choices about their medical needs. Rooted in the ethos of improving healthcare convenience, transparency, and efficiency, Pata-Nafuu is dedicated to ensuring that quality medical care is never out of reach for any Kenyan, regardless of their location.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="">
                        <h3 className="text-uppercase">Our journey and milestone</h3>
                        <p>Since 2018, we've rapidly grown, achieving numerous milestones such as the Best Healthtech Company in Kenya (Afya Startup Awards 2022) and the Digital Innovation Award (Bumrungrad International Hospital 2021). We've been featured in numerous local and global media publications.</p>
                        <p>Soon we'll be expanding our services to other counties and get into remote areas of Kenya, there after we'll be available in East Africa and even the whole of Africa</p>
                        <p>Stay tuned for our upcoming achievements.</p>
                    </div>
                    <div className="">
                        <img className="image" src={progressImage} />
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
                <div className="card">
                    <img className="image" src={qualityImage} />
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

