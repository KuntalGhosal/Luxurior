import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Alltimefooter() {
    useEffect(() => {
        Aos.init({ duration: 5000 });
      }, []);
    return (
        <div className="fixedbutton">
            <button data-aos="fade-flix"> <span> Book free online Consultation </span></button>
       </div>
        
    )
}
