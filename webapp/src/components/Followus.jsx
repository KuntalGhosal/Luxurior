import React from 'react';
import Facebook from "../assets/icons8-facebook-26.png";
import Instagram from "../assets/icons8-instagram-26.png";
import Whatsapp from "../assets/icons8-whatsapp-64.png";

export default function Followus() {
    return (
        <div className="followpage">
            <div className="site">
            <p>Follow us on</p>
            <div className="sitelogos">
                <img src={Facebook} />
                <img src={Instagram} />
                <img src={Whatsapp} />
            </div>
            </div>
            <div>
                <p>Thank you for visiting our site</p>
            </div>
            
        </div>
    )
}
