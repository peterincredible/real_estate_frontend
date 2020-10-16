import React,{Fragment} from "react";
import {NavLink} from "react-router-dom"
import Banner from "./banner";
import logo1 from "../img/about/1.jpg";
import team1 from "../img/team/1.jpg";
import team2 from "../img/team/2.jpg";
import team3 from "../img/team/3.jpg";
import team4 from "../img/team/4.jpg";

function About(){
    return (
        <Fragment>
            <Banner/>
            <div className='row mt-2 mx-0'>
                <div className='col-12 col-md-6'>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna.
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sollicitudin sem. Curabitur sollicitudin enim vel lacus vehicula, vitae sodales ipsum porta.
                        Vivamus eget 2orta nulla. Etiam elementum lacinia turpis, a tincidunt est dignissim sit amet
                    </p>
                </div>
                <div className='col-12 col-md-6'>
                       <div className="bg-img" style={{backgroundImage:`url(${logo1})`,minHeight:"200px",maxHeight:"auto"}} >

                       </div>
                </div>
            </div>
            <div className="row mx-0 mt-2">
                <div className="col-12">
                    <div className="review-container">
                            <div className="review-item">
                                <h2>2</h2>
                                <h5>Residential Developed</h5>
                            </div>
                            <div className="review-item">
                                <h2>167</h2>
                                <h5>Homes Builded</h5>
                            </div>
                            <div className="review-item">
                                <h2>25</h2>
                                <h5>Years of Experience</h5>
                            </div>
                            <div className="review-item">
                                <h2>0</h2>
                                <h5>Complains</h5>
                            </div>
                            <div className="review-item">
                                <h2>5</h2>
                                <h5>Offices</h5>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0" style={{backgroundColor:"#f2f3f4"}}>
                    <div className="col-12 d-lg-flex flex-row flex-wrap justify-content-between">
                            <div className="personel-container ">
                                <div className="personel-img-container">
                                    <img className="" src={team1}/>
                                    <NavLink to="#"><i class="fa fa-plus" aria-hidden="true"></i></NavLink>
                                </div>
                                <div className="personel-info">
                                    <h4>JANE DOE</h4>
                                    <p>General Manager</p>
                                    <p>Lorem ipsum dolor sit amet, consecte-tur adipiscing elit. Maecenas sed sollici-tudin sem</p>
                                </div>
                            </div>
                            <div className="personel-container">
                                <div className="personel-img-container">
                                    <img className="" src={team2}/>
                                    <NavLink to="#"><i class="fa fa-plus" aria-hidden="true"></i></NavLink>
                                </div>
                                <div className="personel-info">
                                    <h4>JANE DOE</h4>
                                    <p>General Manager</p>
                                    <p>Lorem ipsum dolor sit amet, consecte-tur adipiscing elit. Maecenas sed sollici-tudin sem</p>
                                </div>
                            </div>
                            <div className="personel-container">
                                <div className="personel-img-container">
                                    <img className="" src={team3}/>
                                    <NavLink to="#"><i class="fa fa-plus" aria-hidden="true"></i></NavLink>
                                </div>
                                <div className="personel-info">
                                    <h4>JANE DOE</h4>
                                    <p>General Manager</p>
                                    <p>Lorem ipsum dolor sit amet, consecte-tur adipiscing elit. Maecenas sed sollici-tudin sem</p>
                                </div>
                            </div>
                            <div className="personel-container">
                                <div className="personel-img-container">
                                    <img className="" src={team4}/>
                                    <NavLink to="#"><i class="fa fa-plus" aria-hidden="true"></i></NavLink>
                                </div>
                                <div className="personel-info">
                                    <h4>JANE DOE</h4>
                                    <p>General Manager</p>
                                    <p>Lorem ipsum dolor sit amet, consecte-tur adipiscing elit. Maecenas sed sollici-tudin sem</p>
                                </div>
                            </div>
                    </div>
            </div> 
            <div className="row mx-0">
                <div className="col-lg-6 my-3">
                    <h5>JOIN OUR TEAM</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Phasellus eget nibh nec nibh porta semper a nec turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className=" col-lg-6 my-3">
                    <h5>WORK REMOTE</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                        lacus vel facilisis. Praesent viverra non massa id condimentum. Morbi malesuada laoreet 
                        neque, id mattis neque ullamcorper eget. Vivamus aliquam tempus velit, sit amet scelerisque diam scelerisque 
                        ut. Donec venenatis dolor eu ante tincidunt varius.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default About;