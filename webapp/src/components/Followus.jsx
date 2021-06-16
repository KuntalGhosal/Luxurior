import React from 'react';
import Facebook from "../assets/icons8-facebook-24 (white).png";
import Instagram from "../assets/icons8-instagram-48(white).png";
import Twitter from "../assets/icons8-twitter-24(white).png";

export default function Followus() {
    return (
        <div className="followpage">
            <div className="site">
            <p>Follow us on</p>
            <div className="sitelogos">
                <a href="https://www.facebook.com/Luxurior-official-108063794765465"> <img src={Facebook} alt=""/></a>
                <a href="https://www.instagram.com/luxu_rior/"><img src={Instagram} alt=""/></a>
                <a href="https://twitter.com/Luxurior1?s=09"><img href="" src={Twitter} alt=""/></a>
            </div>
            </div>
            <div>
                <p>Thank you for visiting our site</p>
            </div>
            
        </div>
    )
}
