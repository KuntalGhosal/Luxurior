import React from 'react';
import '../components/Header.css';
import Lastdetails from "./Lastdetails";
import Followus from './Followus';
import "aos/dist/aos.css";
import Footerdetails from './Footerdetails';

export default function Footer() {
       
  return (
    <>
      <Footerdetails/>
      <Followus />
      <Lastdetails />
    </>
  );
}

