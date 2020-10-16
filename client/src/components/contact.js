import React,{Fragment} from "react";
import Banner from "./banner";
import Mymap from "./mymap";
import Chat_img from "../img/icons/chat.png";
import envelop_img from "../img/icons/envelope.png";
import headphone_img from "../img/icons/headphone.png";
import location_img from "../img/icons/location.png";
import profile_img from "../img/icons/profile.png";

function Contact(){
    return (
        <Fragment>
            <Banner/>
            <div className="row mx-0" >
                <div className="col-12">
                    <div className="row " style={{backgroundColor:"rgb(242, 243, 244)"}}>
                        <div className="col-lg-10  col-md-11 m-auto" >
                            <div className="row my-3 justify-content-around">
                                <div className="col-lg-5 col-md-5 py-4 mx-2 mx-md-0" style={{backgroundColor:"#fff"}}>
                                    <h4 style={{color:"#212529"}}>OFFICES</h4>
                                    <div className="contact-info ">
                                        <img src={location_img} alt="#"/>
                                        <p>1385 Cedar Street, Black Rock,<br/> Arkansas, 72415</p>
                                    </div>
                                    <div className="contact-info">
                                        <img src={headphone_img} alt="#"/>
                                        <p>870-878-6345  <br/> 870-515-8691</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5  py-4 mt-3 mt-md-0 mx-2 mx-md-0" style={{backgroundColor:"#fff"}}>
                                        <h4>QUICK HELLO</h4>
                                        <form className="mt-5">
                                            <div className="contact-ic">
                                                <img src={profile_img} alt="#"/>
                                                <input type="text" placeholder="Full Name"/>
                                            </div>
                                            <div className="contact-ic">
                                                <img src={envelop_img} alt="#"/>
                                                <input type="text" placeholder="Email Address"/>
                                            </div>
                                            <div className="contact-ic">
                                                <img src={Chat_img} alt="#"/>
                                                <textarea placeholder="Hi"/>
                                            </div>
                                            <div className="contact-submit">
                                                <input type="submit" value="SEND"/>
                                            </div>
                                        </form>
                                </div>
                            </div>
                        </div>
                       
                </div>
                    <div className="row">
                        <div className="col-12 px-0">
                            <div className="map" style={{height:"500px"}}>
                                <Mymap/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
    )
}

export default Contact;