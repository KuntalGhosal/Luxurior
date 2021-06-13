import React, { useState } from 'react';
import '../components/Header.css'
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import Logo from "../assets/1_20210519_150523_0000__01.png";
import { Link } from "react-router-dom";

export default function Navigation() {

  const [rssStyle,setResStyle]=useState(false);
  const [comStyle,setComStyle] = useState(false);
  const Residencial = () => {
    setResStyle(true);
    setComStyle(false);
  }
  const Comarcial = () => {
    setComStyle(true);
    setResStyle(false);
  }
    return (
        <>
          <Navbar expand="lg" id="totalnav" fixed='top'>
  <Navbar.Brand id="logo" href=""> <Link to="/"><img src={Logo}/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      {/* <div className="navelements"> */}
      <Nav.Link><Link id="navletters" to="/about">About Us</Link></Nav.Link>
      <NavDropdown title="Catagory" id="basic-nav-dropdown" id="navletters" >
      {/* <Link id="navletters" to="/recidancialimages">Recidancial</Link> */}
      <NavDropdown.Item as={Link} to={"/recidancialimages"} >Recidancial</NavDropdown.Item>
      <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to={"/comarcialimages"} >Comarcial</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><Link id="navletters" to="/whyluxriror">Why Luxurior?</Link></Nav.Link>
      <Nav.Link><Link id="navletters" to="/designgallary">Design Gallary</Link></Nav.Link>
      <Nav.Link><Link id="navletters" to="/ourservices">Our services</Link></Nav.Link>
      <Nav.Link id="navletters" href="">Contact Us</Nav.Link>
      <NavDropdown title="get free estimate" id="nav-dropdown" >
        <NavDropdown.Item as={Link} to={"/recidancialestimate"} onClick={Residencial}style={ rssStyle ? { backgroundColor:"brown",color:'white'} : {backgroundColor:'#ffffe6',color:'black'}}> Recidancial</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to={"/comarcialestimate"} onClick={Comarcial} style={ comStyle ? { backgroundColor:"brown",color:'white'} : {backgroundColor:'white',color:'gray'} }>Comarcial</NavDropdown.Item>
      </NavDropdown>
      {/* </div> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
{/* <p className="Login">Login</p> */}
{/* <p className="Sign-Up">Sign Up</p> */}
</>
    )
}
