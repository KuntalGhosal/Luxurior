import React, { useState } from 'react';
import "aos/dist/aos.css";
import { Modal,Button } from 'react-bootstrap';
import Login from './Login';
import Signupbutton from './Signupbutton';


export default function Getfreeestimatebutton() {
    const [show, setShow] = useState(false);
    
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        <Button variant="primary" onClick={handleShow} id="nav-dropdown" >
          Get free estimate
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body><Login/></Modal.Body>
          <p className="whyp">you don't have account ? <Signupbutton/></p>
        </Modal>
        
      </>
    );
  }
  
