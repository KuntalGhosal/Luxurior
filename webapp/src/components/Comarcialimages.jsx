import React from 'react';
import "../components/Header.css";
import Cardtwo from "./Cardtwo";
import Library from "../assets/pexels-cottonbro-6333727.jpg"
import Office  from '../assets/pexels-devon-rockola-776984.jpg'
import Hotel from '../assets/pexels-emre-can-2079291.jpg'

export default function Comarcialimages() {
    return (
        <div>
             <div className="resimgall">
            <h1>Commercial Space designs</h1>
                <h5>Best Commercial designs for your needs</h5>
                </div>
                <div className="allcardtwo">
                     <Cardtwo
                     imglinktwo={Hotel}
                     heading="Hotels and cafe"
                     watch="/hotelandcafe"
                     />
                      <Cardtwo
                     imglinktwo={Library}
                     heading="Library"
                     watch="/library"
                     />
                      <Cardtwo
                     imglinktwo={Office}
                     heading="Office"
                     watch="/office"
                     />
                        
                </div>
        </div>
    )
}
