import React,{Fragment} from "react";
import Banner from "./banner";
import {Link} from "react-router-dom";
import img1 from "../img/property/property_1.jpg"

function Property(){
    return (
        <Fragment>
            <Banner/>
            <div className="row pt-5 mx-0"  style={{backgroundColor:"rgb(242, 243, 244)"}}>
                <div className='col-md-9 m-auto'>
                        <h4 style={{borderLeft:`10px solid #12c7b8`}}><b className="pl-2">PROPERTY GRID</b></h4>
                        <div className="property-container mt-5">
                                <div className="property-house">
                                    <img  className="house-img"src={img1} alt="cant view image"/>
                                    <div className="house-content">
                                        <h5 style={{color:"#12c7b8"}}>&#36; 289.0/month</h5>
                                        <Link to="#" className="house-title">Home in Merrick Way</Link>
                                        <p><i class="fas fa-map-marker-alt" style={{color:"#12c7b8"}}></i><span className="pl-2">3 Middle Winchendon Rd, Rindge, NH 03461</span></p>
                                        <div className="house-features">
                                                <div className="house-feature">
                                                    <p className="faint-dark">Lot Size</p>
                                                    <i className="far fa-object-group faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>2561 sqft</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Beds</p>
                                                    <i className="fas fa-bed faint-dark"></i>
                                                    <span className="ml-2"style={{color:"#30304e"}}> 3</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Baths</p>
                                                    <i className="fas fa-bath faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>3</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Garage</p>
                                                    <i className="fas fa-car faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>1</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="property-house">
                                    <img  className="house-img"src={img1} alt="cant view image"/>
                                    <div className="house-content">
                                        <h5 style={{color:"#12c7b8"}}>&#36; 289.0/month</h5>
                                        <Link to="#" className="house-title">Home in Merrick Way</Link>
                                        <p><i class="fas fa-map-marker-alt" style={{color:"#12c7b8"}}></i><span className="pl-2">3 Middle Winchendon Rd, Rindge, NH 03461</span></p>
                                        <div className="house-features">
                                                <div className="house-feature">
                                                    <p className="faint-dark">Lot Size</p>
                                                    <i className="far fa-object-group faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>2561 sqft</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Beds</p>
                                                    <i className="fas fa-bed faint-dark"></i>
                                                    <span className="ml-2"style={{color:"#30304e"}}> 3</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Baths</p>
                                                    <i className="fas fa-bath faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>3</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Garage</p>
                                                    <i className="fas fa-car faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>1</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="property-house">
                                    <img  className="house-img"src={img1} alt="cant view image"/>
                                    <div className="house-content">
                                        <h5 style={{color:"#12c7b8"}}>&#36; 289.0/month</h5>
                                        <Link to="#" className="house-title">Home in Merrick Way</Link>
                                        <p><i class="fas fa-map-marker-alt" style={{color:"#12c7b8"}}></i><span className="pl-2">3 Middle Winchendon Rd, Rindge, NH 03461</span></p>
                                        <div className="house-features">
                                                <div className="house-feature">
                                                    <p className="faint-dark">Lot Size</p>
                                                    <i className="far fa-object-group faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>2561 sqft</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Beds</p>
                                                    <i className="fas fa-bed faint-dark"></i>
                                                    <span className="ml-2"style={{color:"#30304e"}}> 3</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Baths</p>
                                                    <i className="fas fa-bath faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>3</span>
                                                </div>
                                                <div className="house-feature">
                                                    <p className="faint-dark">Garage</p>
                                                    <i className="fas fa-car faint-dark"></i>
                                                    <span className="ml-2" style={{color:"#30304e"}}>1</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                </div>
                <div className="col-sm-11 col-md-11 col-lg-8 m-auto d-flex justify-content-center py-5">
                    <Link to="#" style={{backgroundColor:"#12c7b8",color:"#fff",padding:"0.7rem 0.7rem",fontWeight:700,textDecoration:"none"}}>LOAD MORE</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Property;