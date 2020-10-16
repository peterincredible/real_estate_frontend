import React,{Fragment} from "react";
import {NavLink} from "react-router-dom";

function Footer(){
    return (
        <Fragment>
            <div className="row mx-0" style={{backgroundColor:"#353649"}}>
                <div className="col-md-10 offset-md-1 pt-3" style={{height:"400px"}}>
                    <div className="row">
                            <div className="col-sm-2">
                                <h5 style={{color:"#12c7b8"}}><b>P-State</b></h5>
                            </div>
                            <div className="col-sm-10 px-md-0  mt-2 mt-sm-0">
                                <div className=" footer-main-content">
                                    <div className="footer-contacts">
                                        <p className="text-white"><b>COMPANY</b></p>
                                        <ul>
                                            <li><NavLink to="">About us</NavLink></li>
                                            <li><NavLink to="">Offices</NavLink></li>
                                            <li><NavLink to="">Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="footer-info">
                                        <p className="text-white"><b>LEGAL</b></p>
                                        <ul>
                                            <li><NavLink to="">Documents</NavLink></li>
                                            <li><NavLink to="">How to buy a house</NavLink></li>
                                            <li><NavLink to="">Terms and Condition</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="footer-socials">
                                        <p className="text-white"><b>SOCIAL</b></p>
                                        <div className="d-flex justify-content-between">
                                            <NavLink to=""><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to=""><i className="fab fa-linkedin-in"></i></NavLink>
                                            <NavLink to=""><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to=""><i className="fab fa-youtube"></i></NavLink>
                                            <NavLink to=""><i className="fab fa-instagram"></i></NavLink>
                                        </div>
                                    </div>

                                </div>

                            </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;