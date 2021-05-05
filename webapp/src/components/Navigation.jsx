import React, { useState } from 'react';
import '../components/Header.css'
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import Logo from "../assets/nawazproject.png";
import { Link } from "react-router-dom";
export default function Navigation() {
    return (
        <>
          <Navbar expand="lg" id="totalnav" fixed='top'>
  <Navbar.Brand id="logo" href=""> <Link to="/"><img src={Logo}/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="navletters"><Link to="/about">About Us</Link></Nav.Link>
      <NavDropdown title="Catagory" id="basic-nav-dropdown" className="navletters" >
        <NavDropdown.Item href="#action/3.1">Recidancial</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Comarcial</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className="navletters" href="">Why Luxurior? </Nav.Link>
      <Nav.Link className="navletters" href="">Design Gallary</Nav.Link>
      <Nav.Link className="navletters" href="">Our Services</Nav.Link >
      <Nav.Link className="navletters" href="">Contact Us</Nav.Link>
      <Nav.Link id="buttonnav" href="">Get Free Estimate</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
    )
}
