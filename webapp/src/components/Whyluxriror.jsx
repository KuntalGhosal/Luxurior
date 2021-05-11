import React from 'react';
import {Carousel} from "react-bootstrap";
import Oneimg from "../assets/roberto-nickson-tleCJiDOri0-unsplash (1).jpg";
import Threeimg from "../assets/Screenshot_20210406-194947__01 (1).jpg";
import Fourimg from "../assets/naomi-hebert-MP0bgaS_d1c-unsplash (1).jpg";
import Fiveimg from "../assets/Screenshot_20210406-195119__01 (1).jpg";
import '../components/Header.css';
export default function  () {
    return (
        <div className="carousalall">
            <Carousel>
            <Carousel.Item>
    <img
      className="d-block w-100"
      src={Oneimg}
    />
    <Carousel.Caption>
      <h1 className="h1heading">Luxurior</h1>
      <p id="pheading">where luxury is an affordable feat </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Fiveimg}
    />
    <Carousel.Caption>
      <h1 className="h1heading">Luxurior</h1>
      <p id="pheading"><li>Luxurior is a design house that offers a new and inspirational approach to interior design. An endeavour to deliver fine living to answer the inner callings of those who desire to live artistically and surrounded by grace and elegance</li></p>
      <p id="pheading"><li>In luxurior we help our clients to navigate all the modern day designs and help creating their homes. We are more than just designers, we are trusted partners who understand your requirements </li></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Threeimg}
    />
    <Carousel.Caption>
      <h1 className="h1heading">Why luxurior?I’D say why not</h1>
      <p id="pheading"><li>We ensure individual’s personal preferences are evaluated during initial discussions and project brief reflects your requirements.</li></p>
      <p id="pheading"><li>Our main focus is to cut out the middleman and interact one-on-one with the customers and pass on savings to the customers.</li></p>
      <p id="pheading"><li>Moreover our company’s main aim is to prioritise the customer satisfaction.</li></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Fourimg}
    />
    <Carousel.Caption>
      <h1 className="h1heading">We are different..</h1>
      <p id="pheading"><li>We strive to create exquisite interiors and design spaces which offer peaceful and relaxing environment.</li></p>
      <p id="pheading"><li>We include our clients at every point of the home interiors project to ensure clients settle only for the best.</li></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
