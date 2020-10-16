import React,{Fragment} from "react";
import Banner from "./banner";
import img_1 from "../img/developments/1.jpg";
import img_2 from "../img/developments/2.jpg";
import img_3 from "../img/developments/3.jpg";
import img_4 from "../img/developments/4.jpg";
import img_5 from "../img/developments/5.jpg";
import img_6 from "../img/developments/6.jpg";

function Development(){
    return (
        <Fragment>
            <Banner/>
            <div className="row mx-0 mx-md-auto " style={{backgroundColor:"#f2f3f4"}}>
                <div className="col-md-11  m-auto dh-container">
                    <div className="card dh-item my-3">
                        <img className="card-img-top" src={img_1} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p>3465 Elk City Road</p>
                            <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-mc">
                                <div>
                                    <span>from</span>
                                    <h5>-$145,000</h5>
                                </div>
                                <a href="#" className="btn btn-primary">SOLD OUT</a>
                            </div>
                        </div>
                    </div>
                    <div className="card dh-item my-3">
                        <img className="card-img-top" src={img_2} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p>3465 Elk City Road</p>
                            <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-mc">
                                <div>
                                    <span>from</span>
                                    <h5>-$145,000</h5>
                                </div>
                                <a href="#" className="btn btn-primary">SOLD OUT</a>
                            </div>
                        </div>
                    </div>
                    <div className="card dh-item my-3" >
                        <img className="card-img-top" src={img_3} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p>3465 Elk City Road</p>
                            <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-mc">
                                <div>
                                    <span>from</span>
                                    <h5>-$145,000</h5>
                                </div>
                                <a href="#" className="btn btn-primary">SOLD OUT</a>
                            </div>
                        </div>
                    </div>
                    <div className="card dh-item my-3">
                        <img className="card-img-top" src={img_4} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p>3465 Elk City Road</p>
                            <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-mc">
                                <div>
                                    <span>from</span>
                                    <h5>-$145,000</h5>
                                </div>
                                <a href="#" className="btn btn-primary">SOLD OUT</a>
                            </div>
                        </div>
                    </div>
                    <div className="card dh-item my-3">
                        <img className="card-img-top" src={img_5} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p>3465 Elk City Road</p>
                            <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-mc">
                                <div>
                                    <span>from</span>
                                    <h5>-$145,000</h5>
                                </div>
                                <a href="#" className="btn btn-primary">SOLD OUT</a>
                            </div>
                        </div>
                    </div>
                    <div className="card dh-item my-3">
                        <img className="card-img-top" src={img_6} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p>3465 Elk City Road</p>
                            <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-mc">
                                <div>
                                    <span>from</span>
                                    <h5>-$145,000</h5>
                                </div>
                                <a href="#" className="btn btn-primary">SOLD OUT</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 bg-white d-flex justify-content-center align-items-center" style={{height:"400px"}}>
                    <div className="row">
                        <div className="col-md-9 m-auto d-flex flex-column justify-content-center align-items-center">
                            <h3 className="text-center">Exciting New Opportunities Coming Soon</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam elementum enim ut auctor elemen-tum. Praesent et nulla 
                                eu massa egestas faucibus sed in leo.
                            </p>
                            <div className="suscribe-form-container">
                                <input type='text' placeholder="Leave us your email address"/>
                                <button>SUSCRIBE NOW</button>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Development;