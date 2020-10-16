import React from "react";
import GoogleMapReact from 'google-map-react';
import location_img from "../img/icons/location.png";
const LocationPin = ({text}) => {  
    return(
       <div>
         <i className="fas fa-map-pin fa-3x text-danger"></i>     
         {text} 
        </div> 
     )
 }

function Mymap(){
    const location = {
        address: '',
        lat: 6.859,
        lng: 3.625
      }
    let defaultProps = {
        center: {
          lat: 6.850,
          lng: 3.650
        },
        zoom: 11
      };
    return (
                <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDXuquNJB4M9984B1vwphFbBv-9zHnmA38" }}
                        defaultCenter={defaultProps.center}
                        center={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        >
                             <LocationPin lat={location.lat} lng={location.lng} text={location.address}/>
                               
             </GoogleMapReact>
    )
}

export default Mymap;