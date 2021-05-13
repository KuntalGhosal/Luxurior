import React, { useState } from 'react';
import '../components/Header.css'
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import Logo from "../assets/nawazproject.png";
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
      <Nav.Link><Link id="navletters" to="/about">About Us</Link></Nav.Link>
      <NavDropdown title="Catagory" id="basic-nav-dropdown" id="navletters" >
      <NavDropdown.Item><Link id="navletters" to="/recidancialimages">Recidancial</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Comarcial</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><Link id="navletters" to="/whyluxriror">Why Luxurior?</Link></Nav.Link>
      <Nav.Link id="navletters" href="">Design Gallary</Nav.Link>
      <Nav.Link id="navletters" href="">Our Services</Nav.Link >
      <Nav.Link id="navletters" href="">Contact Us</Nav.Link>
      <NavDropdown title="get free estimate" id="nav-dropdown" >
        <NavDropdown.Item onClick={Residencial}style={ rssStyle ? { backgroundColor:"white",color:'white'} : {backgroundColor:'#ffffe6',color:'black'} }> <Link id="navletters" to="/recidancialestimate" >Recidancial</Link></NavDropdown.Item>
        <NavDropdown.Item  onClick={Comarcial} style={ comStyle ? { backgroundColor:"brown",color:'white'} : {backgroundColor:'white',color:'gray'} }  > <Link id="navletters" to="comarcialestimate"> Comarcial</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
    )
}
