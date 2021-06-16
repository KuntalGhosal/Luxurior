import React, { useEffect } from 'react';
import '../components/Header.css';
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        Aos.init({duration:1000});
       },[]);
    return (
        <>
            <div data-aos="fade-flip" className="about">
                OUR APPROACH
            </div>
            <div data-aos="fade-flip" className="Gandu">
                "We are proud that at all times we act with honesty and integrity to serve the interests of each client and achieve beyond what they imagined was possible."
            </div>
            <div data-aos="fade-up" className="aftergandu">
            </div>
            <div data-aos="fade-flip" className="Gandu">
                "Moreover we are passionate about interior design. Recognising that every client, every home and every room is unique, and that location influences certain aspects of the design, every project is approached as a blank canvas with renewed passion, enthusiasm and excitement. Trust in our expertise has seen Luxrior transform the interiors of listed buildings, country estates, hotels, penthouses and luxury
                apartments and many high-end commercial properties."
            </div>
            <div data-aos="fade-up" className="afterganduone">
            </div>
            <div data-aos="fade-flip" className="Gandu">
                <li>We are trusted by private clients, as well as property developers and our supply network who confidently recommend Luxurior for their most prestigious projects. Our innovative design approach and meticulous attention to detail has gained recognition and established Luxurior as market-leading luxury interior designers. Above all else, the return of existing clients and the number of recommendations and referrals we receive confirms the reputation we have established. Our business is built more on reputation than any other form of marketing or advertising .
            </li>
            </div>
        </>
    )
}
