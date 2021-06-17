import React from "react";
import Logo from "../assets/1_20210519_150523_0000__01.png";
function Lastdetails(){
    return(
        <div className="lastone">
            <div className="address">
                <ul>
                    {/* <li>Luxurior</li> */}
                    <li>Bangalore</li>
                    <li>Kolkata</li>
                    <li>Assam</li>
                </ul>
            </div>
            <div className="emage">
                <img src={Logo} alt=""/>
            </div>
        </div>
    )
}
export default Lastdetails;