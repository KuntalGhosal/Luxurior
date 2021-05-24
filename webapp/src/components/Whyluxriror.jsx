import React from 'react';
import {Carousel} from "react-bootstrap";
import Oneimg from "../assets/20210519_151847_0000.png";
import Threeimg from "../assets/roberto-nickson-tleCJiDOri0-unsplash (1).jpg";
import Fourimg from "../assets/residential.jpg32.jpg";
import Fiveimg from "../assets/pexels-cadeau-maestro-1170412.jpg";
import '../components/Header.css';
import Whyluxuriorcard from "../components/Whyluxuriorcard";
export default function  () {
    return (
      <>
        <div>
          <Whyluxuriorcard
          image={Oneimg}
          h1="Luxurior"
          p="Where luxury is an affordable feat"
          />
          <Whyluxuriorcard
           image={Threeimg}
           h1="Luxurior"
           listone="Luxurior is a design house that offers a new and inspirational approach to interior design. An endeavour to deliver fine living to answer the inner callings of those who desire to live artistically and surrounded by grace and elegance 
           "
           listtwo="In luxurior we help our clients to navigate all the modern day designs and help creating their homes. We are more than just designers, we are trusted partners who understand your requirements 
           "/>
          <Whyluxuriorcard
           image={Fourimg}
           h1="Why luxurior?I’D say why not"
           p="We ensure individual’s personal preferences are evaluated during initial discussions and project brief reflects your requirements.
           "
           listone="Our main focus is to cut out the middleman and interact one-on-one with the customers and pass on savings to the customers. 
           "
           listtwo="Moreover our company’s main aim is to prioritise the customer satisfaction.
           "/>
          <Whyluxuriorcard
           image={Fiveimg}
           h1="We are different.."
           p="We strive to create exquisite interiors and design spaces which offer peaceful and relaxing environment.
           "
           listone="We include our clients at every point of the home interiors project to ensure clients settle only for the best.
           "/>
        </div>
        </>
    )
}
 