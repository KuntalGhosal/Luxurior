import React, { useState } from 'react';
import '../components/Header.css'
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";
import Logo from "../assets/nawazproject.png";
import Cardone from "../components/Cardone";
import Wlone from "../assets/icons8-24-7-open-sign-24.png"
import Wltwo from "../assets/icons8-alphabetical-sorting-26.png"
import Wlthree from "../assets/icons8-best-seller-64.png"
import Wlfour from "../assets/icons8-shield-80.png"
import Wlfive from "../assets/icons8-delivery-time-64.png"
import Cardtwo from "../components/Cardtwo";
import Bone from "../assets/armin-djuhic-mcL2f-J74GY-unsplash.jpg";
import Btwo from "../assets/aaina-sharma-J8iOJZEPFQ4-unsplash.jpg";
import Bthree from "../assets/connor-wang-MNz7IGrcEl0-unsplash.jpg";
import Lastdetails from "../components/Lastdetails";
import Followus from './Followus';
// import Followus from "../components/Followus"

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <div  id="totalnav">
            <Navbar expand="lg" style={{position:'sticky',marginBottom:'0.1%'}}>
  <Navbar.Brand id="logo" href=""><img src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link id="navletters" href="">About Us</Nav.Link>
      <Nav.Link id="navletters" href="">Residential</Nav.Link>
      <Nav.Link id="navletters" href="">Commercial </Nav.Link >
      <Nav.Link id="navletters" href="">Why Luxurior? </Nav.Link>
      <Nav.Link id="navletters" href="">Design Gallary</Nav.Link>
      <Nav.Link id="navletters" href="">Our Services</Nav.Link >
      <Nav.Link id="navletters" href="">Contact Us</Nav.Link>
      <Nav.Link id="buttonnav" href="">Get Free Estimate</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
<div className="backimg">
    <p>Luxurior</p>
    <span>design & decoratian</span>
  </div>
  <div className="aftbackimgtwo">Why Luxurior?</div>
<div className="allcard">
  <Cardone
  imglink={Wlone}
  something="on time delivery"
  />
  <Cardone
  imglink={Wltwo}
  something="customar satisfaction"
  />
  <Cardone
  imglink={Wlthree}
  something="best designs"
  />
</div>
<div className="allcard">
  <Cardone
 imglink={Wlfour}
 something="exchange policy"
  />
  <Cardone
 imglink={Wlfive}
 something="support"
  />
</div>
  <div className="afterbackimg">
    <p className="a">Complete interior design service</p>
    <p className="b">Luxurior is a luxury interior design studio that creates timeless interiors individually tailored to your lifestyle, personal tastes and the unique character of your home. From the initial consultation to visual concepts and completion our highly skilled design team, led by Founder and Creative Director, meticulously plan and design every detail to finesse your home to perfection.
      As a boutique interior design studio based in Bangalore and Kolkata, exemplary service and the personal involvement of hand selected team set new standards of luxury and refinement. Whether you are looking for a Residential or Comarcial, customised lighting or a complete home renovation, trust Luxurior to exceed every expectation.
       Luxurior is a long established independent interior design and architectural design company. We have earned a first-class reputation for service, precision interior design and project management expertise that works around the lifestyle demands of you, our client.</p>
  </div>
  <div className="backimgone"></div>
  <div className="afterbackimg">
    <p className="a">Bespoke Joinery</p>
    <p className="b">We offer and include high end bespoke joinery designed by Luxurior to meet our clients requirements and needs. This includes smaller pieces such as coffee tables, side boards and radiator covers to larger pieces such as wardrobes, walk in wardrobes, bookcases, media units, dining tables, bathrooms and complete kitchens... tailored and made to fit the space perfectly.we make you Residential space comfort and elegant.</p>
  </div>
<div className="backimgtwo"></div>
{/* <div className="aftbackimgtwo">Why Luxurior?</div>
<div className="allcard">
  <Cardone
  imglink={Wlone}
  something="on time delivery"
  />
  <Cardone
  imglink={Wltwo}
  something="customar satisfaction"
  />
  <Cardone
  imglink={Wlthree}
  something="best designs"
  />
</div>
<div className="allcard">
  <Cardone
 imglink={Wlfour}
 something="exchange policy"
  />
  <Cardone
 imglink={Wlfive}
 something="support"
  />
</div> */}

<div className="aftcard">
  Designs by Luxurior
</div>
<div className="allcardtwo">
  <Cardtwo
  imglinktwo={Bone}
  heading="Comarcial"
  watch=""
  />
  <Cardtwo
  imglinktwo={Btwo}
  heading="residencial"
  watch=""
  />
  <Cardtwo
  imglinktwo={Bthree}
  heading="news letter"
  watch=""
  />
</div>
<Followus/>
<Lastdetails/>
        </>
   );
}

export default Header;
