import React,{Fragment} from "react"
import logo1 from "../img/slider/1.jpg";
import logo2 from "../img/slider/2.jpg";
import logo3 from "../img/slider/3.jpg";
import intro1 from "../img/intro/1.jpg";
import intro2 from "../img/intro/2.jpg";
import other_img1 from "../img/others/other_img_1.jpg"
import { NavLink } from "react-router-dom";

function Home(){
    return (
        <Fragment>
           <div className="carousel-panel">
                <div className="btn-container">
                    <button className="prev"><i className="fas fa-chevron-left"></i></button>
                    <button className="next"><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className="media-connect">
                        <NavLink to=""><i className="fab fa-facebook-f"></i></NavLink>
                        <NavLink to=""><i className="fab fa-linkedin-in"></i></NavLink>
                        <NavLink to=""><i className="fab fa-twitter"></i></NavLink>
                        <NavLink to=""><i className="fab fa-youtube"></i></NavLink>
                        <NavLink to=""><i className="fab fa-instagram"></i></NavLink>
                </div>
                <div className="apartment-items">
                        <div className="apartment-item">
                             <p><b>3 BEDROOMS VERSION</b></p>
                             <p>Available from March 2019</p>
                             <h5>&#x20A6;145,000</h5>
                        </div>

                        <div className="apartment-item">
                             <p><b>4 BEDROOMS VERSION + PRIVATE POOL</b></p>
                             <p>Available from March 2019</p>
                             <h5>&#x20A6;145,000</h5>
                        </div>
                        <div className="apartment-item">
                            <p><b>6 BEDROOMS VERSION + PRIVATE POOL</b></p>
                            <p>Available from March 2019</p>
                             <h5>&#x20A6;145,000</h5>
                        </div>
                </div>

                <div className="carousel-container">
                    <div className="carousel-items">
                        <div className="carousel-img" style={{backgroundImage:`url(${logo1})`}}></div>
                        <div className="carousel-content">
                            <h1 className=" text-center show">Three modern homes for modern thinking people</h1>
                        </div>
                    </div>
                    <div className="carousel-items">
                        <div className="carousel-img" style={{backgroundImage:`url(${logo2})`}}>
                        </div>
                        <div className="carousel-content">
                            <h1 className="text-center">4 modern homes for modern thinking people</h1>
                        </div>
                    </div>
                    <div className="carousel-items">
                        <div className="carousel-img" style={{backgroundImage:`url(${logo3})`}}></div>
                        <div className="carousel-content">
                            <h1 className="text-center">6 modern homes for modern thinking people</h1>
                        </div>
                    </div>
                </div>
           </div>
           <div className="row mt-md-2 mx-0">
               <div className="col-12 col-md-10 offset-md-1">
                   <div className="features-container">
                        <div className="features-icon">
                            <i className="fas fa-money-check-alt fa-2x"></i>
                            <p>Easy Buying</p>
                        </div>
                        <div className="features-icon">
                            <i className="fas fa-key fa-2x"></i> 
                            <p>Ready to Move</p>
                        </div>
                        <div className="features-icon">
                            <i className="fas fa-map-pin fa-2x"></i>
                            <p>Great Location</p>
                        </div>
                        <div className="features-icon">
                            <i className="fas fa-street-view fa-2x"></i>
                            <p>Community Pool</p>
                        </div>
                        <div className="features-icon">
                            <i className="fas fa-tree fa-2x"></i>
                            <p>30% Park</p>
                        </div>
                        <div className="features-icon">
                            <i className="fas fa-sun fa-2x"></i>
                            <p>Sunny Location</p>
                        </div>
                        <div className="features-icon">
                            <i className="fas fa-parking fa-2x"></i>
                            <p>Parking Spaces</p>
                        </div>
                        <div className="features-icon">
                            <i className="fas fa-warehouse fa-2x"></i>
                            <p>Garage Included</p>
                        </div>
                   </div>
               </div> 
           </div>
           <div className="row mt-2 mx-0">
               <div className="col-12 col-lg-10 offset-lg-1">
                   <div className="row mx-0"><h3 style={{borderLeft:`10px solid #12c7b8`}}><b className="pl-2">OUR HOUSES</b></h3></div>
                   <div className="row mt-5">
                       <div className="col-lg-6">
                           <div className="house-container">
                                <div className="house-title"><b>MODERN VILLA 1 </b></div>
                                <img src={intro1} alt={"sorry browser can't display "}/>
                           </div>
                       </div>
                       <div className="col-lg-6 mt-3 mt-lg-0">
                           <div className="house-content">
                                <p>
                                    Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posu-ere iaculis leo. Sed a lectus risus. Morbi
                                    eros sapien, inter-dum ut sollicitudin eget, porttitor nec elit. Fusce dignis-sim velit sit 
                                    amet ligula dapibus fringilla. Cras fermentum consequat ornare. Etiam tempus ex nec nibh eleifend, nec tempus 
                                    ipsum finibus.
                                </p>
                                <NavLink to="" className="info-btn">MORE INFO</NavLink>
                           </div>
                       </div>
                   </div>
                   <div className="row mt-5">
                       <div className="col-lg-6 order-lg-1">
                           <div className="house-container">
                                <div className="house-title"><b>MODERN VILLA 1 </b></div>
                                <img src={intro2} alt={"sorry browser can't display "}/>
                           </div>
                       </div>
                       <div className="col-lg-6 mt-3 mt-lg-0 order-lg-0">
                           <div className="house-content">
                                <p>
                                    Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posu-ere iaculis leo. Sed a lectus risus. Morbi
                                    eros sapien, inter-dum ut sollicitudin eget, porttitor nec elit. Fusce dignis-sim velit sit 
                                    amet ligula dapibus fringilla. Cras fermentum consequat ornare. Etiam tempus ex nec nibh eleifend, nec tempus 
                                    ipsum finibus.
                                </p>
                                <NavLink to="" className="info-btn">MORE INFO</NavLink>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <div className="row mx-0 mt-3">
                <div className="col-12 call-panel px-0" style={{backgroundImage:`url(${other_img1})`}}>
                        <h3 className="text-white text-center">Ask our top consultants for an personalized offer today.</h3>
                        <NavLink to={""} className="call-info">CALL 800-1-5141</NavLink>
                </div>
            </div>
            <div className="row mx-0" style={{backgroundColor:"#f2f3f4"}}>
                <div className="col-12 mt-5">
                    <h3 style={{borderLeft:`10px solid #12c7b8`}}><b className="pl-2">FEATURES</b></h3>
                </div>
                <div className="col-12 py-5" >
                    <div className="feature-carousel-container">
                        <div className="f-btn-container">
                            <button className="f-prev"><i className="fas fa-chevron-left"></i></button>
                            <button className="f-next"><i className="fas fa-chevron-right"></i></button>
                        </div>
                        <div className="feature-slider">
                            <div className="feature-slide">
                                    <i className="fas fa-money-check-alt fa-2x"></i>
                                    <h5 className="text-center mt-4">ECON-FRIENDLY HOMES</h5>
                                    <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipi-scing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum 
                                    suspendisse ultrices gravida. 
                                    </p>

                            </div>
                            <div className="feature-slide">
                                    <i className="fas fa-parking fa-2x"></i>
                                    <h5 className="text-center mt-4">ECON-FRIENDLY HOMES</h5>
                                    <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipi-scing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum 
                                    suspendisse ultrices gravida. 
                                    </p>
                            </div>
                            <div className="feature-slide">
                                    <i className="fas fa-street-view fa-2x"></i>
                                    <h5 className="text-center mt-4">ECON-FRIENDLY HOMES</h5>
                                    <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipi-scing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum 
                                    suspendisse ultrices gravida. 
                                    </p>
                            </div>
                            <div className="feature-slide">
                                    <i className="fas fa-sun fa-2x"></i>
                                    <h5 className="text-center mt-4">ECON-FRIENDLY HOMES</h5>
                                    <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipi-scing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum 
                                    suspendisse ultrices gravida. 
                                    </p>
                            </div>
                            <div className="feature-slide">
                                    <i className="fas fa-parking fa-2x"></i>
                                    <h5 className="text-center mt-4">ECON-FRIENDLY HOMES</h5>
                                    <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipi-scing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum 
                                    suspendisse ultrices gravida. 
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;