import React from 'react'
import {Link} from "react-router-dom"

function Footerdetails() {
    return (
        <div className="allptwo">
            
                
                    <p className="whypone"><Link id="navletters" to="/about">About Us</Link></p>
                    <p className="whypone"><Link id="navletters" to="/recidancialimages">Residential</Link></p>
                    <p className="whypone"><Link id="navletters" to="/comarcialimages">Commercial</Link></p>
                    <p className="whypone"><Link id="navletters" to="/designgallary">Design Gallary</Link></p>
                    <p className="whypone"><Link id="navletters" to="/whyluxriror">Why Luxurior?</Link></p>
                    <p className="whypone"><Link id="navletters" to="/ourservices">Our services</Link></p>
                    <p className="whypone"><Link id="navletters" to="/contactus">Contact Us</Link></p>
                
            

        </div>
    )
}

export default Footerdetails
