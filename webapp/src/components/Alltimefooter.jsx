import React, { useState } from 'react';
import "aos/dist/aos.css";
import { Modal,Button } from 'react-bootstrap';
import Login from './Login';
import Signupbutton from './Signupbutton';


export default function Alltimefooter() {
    const [show, setShow] = useState(false);
    
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        <Button variant="secondory" onClick={handleShow} className="fixedbutton">
        Book free online Consultation 
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
  
