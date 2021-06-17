import React from 'react';
import Cardtwo from './Cardtwo';
import '../components/Header.css';
import Whiteback from '../assets/re.jpg';
import Blueback from "../assets/residential.jpg12.jpg";
import Woodenback from "../assets/residential.jpg17.jpg" ;
import Oldback from "../assets/residential.jpg56.jpg";

export default function Recidancialimages() {
    return (
        <div>
            <div className="resimgall">
            <h1>Residential Space designs</h1>
                <h5>Best home designs for your needs</h5>
                </div>
            <div className="allcardtwo">
            <Cardtwo
            imglinktwo={Whiteback}
            heading="White Straight Room"
            watch="/whiteroom"/>
            <Cardtwo
            imglinktwo={Blueback}
            heading="Blue Straight Room"
            watch="/blueroom"/>
            <Cardtwo
            imglinktwo={Woodenback}
            heading="Wooden Straight Room"
            watch="/woodenroom"/>
            <Cardtwo
            imglinktwo={Oldback}
            heading="Like Old Straight Room"
            watch="/likeoldroom"/>
            </div>
        </div>
    )
}
