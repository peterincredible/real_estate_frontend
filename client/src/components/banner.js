import React,{Fragment} from "react";
import {NavLink,withRouter} from "react-router-dom";
import about_img from "../img/page-top-bg/1.jpg"
import property_img from "../img/page-top-bg/2.jpg"
import developement_img from "../img/page-top-bg/3.jpg"
import other_img from "../img/page-top-bg/4.jpg"

function Banner(props){

    let page_img;
    let banner = {
        page:"",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris congue."
    }
    if (props.location.pathname.slice(1) == "about"){
        page_img = about_img;
        banner.page = "About Us";
    }
    else if(props.location.pathname.slice(1) == "property"){
        page_img = property_img;
        banner.page = "Property Page";
    }
    else if(props.location.pathname.slice(1) == "development"){
        page_img = developement_img;
        banner.page = "Our Developments";
    }
    else if(props.location.pathname.slice(1) == "news"){
        page_img = other_img;
        banner.page = "News";
    }
    else{
        page_img = other_img;
        banner.page = "Contact";
    }
    return (
        <Fragment>
            <div className="banner-panel" style={{backgroundImage:`url(${page_img})`}}>
                <div className="media-connect">
                        <NavLink to=""><i className="fab fa-facebook-f"></i></NavLink>
                        <NavLink to=""><i className="fab fa-linkedin-in"></i></NavLink>
                        <NavLink to=""><i className="fab fa-twitter"></i></NavLink>
                        <NavLink to=""><i className="fab fa-youtube"></i></NavLink>
                        <NavLink to=""><i className="fab fa-instagram"></i></NavLink>
                </div>
                <div className="banner-content">
                    <h2 className="text-white text-center text-lg-left">{banner.page}</h2>
                    <p className="text-white text-center text-lg-left">{banner.text}</p>
                </div>
           </div>
        </Fragment>
    )
}
export default withRouter(Banner);