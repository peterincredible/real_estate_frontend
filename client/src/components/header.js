import React,{Fragment} from "react";
import {NavLink} from "react-router-dom"

function Header(){
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light navbar-mod ">
                <NavLink className="navbar-brand navbar-brand-mod" to="/home" style={{color:"white"}}>P-state</NavLink>
                <button className="navbar-toggler"style={{color:"white",borderColor: "white"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse myshow" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navbar-nav-mod">
                        <li className="nav-item nav-item-mod">
                            <NavLink className="nav-link  nav-link-mod" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item nav-item-mod">
                            <NavLink className="nav-link nav-link-mod" to="/property">Property</NavLink>
                        </li>
                        <li className="nav-item nav-item-mod">
                            <NavLink className="nav-link nav-link-mod" to="/development">Developments</NavLink>
                        </li>
                        <li className="nav-item nav-item-mod">
                            <NavLink className="nav-link nav-link-mod" to="/news">News</NavLink>
                        </li>
                        <li className="nav-item nav-item-mod">
                            <NavLink className="nav-link nav-link-mod" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;