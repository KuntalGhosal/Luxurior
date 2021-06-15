import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import Signup from './Signup';
import Loginbutton from './Loginbutton';
export default function Signupbutton() {
    const [show, setShow] = useState(false);
    
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondory" onClick={handleShow} className="sidebutton">
            Signup
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>
          <Modal.Body><Signup/></Modal.Body>
          <p className="whyp">you have an account?<Loginbutton/></p>
        </Modal>
      </>
    );
  }
  
