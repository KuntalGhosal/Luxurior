import React from "react";
import Logo from "../assets/nawazproject.png";
function Lastdetails(){
    return(
        <div className="lastone">
            <div className="address">
                <ul>
                    <li>Luxurior</li>
                    <li>Bangalore</li>
                    <li>Kolkata</li>
                    <li>India</li>
                </ul>
            </div>
            <div className="emage">
                <img src={Logo} alt=""/>
            </div>
        </div>
    )
}
export default Lastdetails;