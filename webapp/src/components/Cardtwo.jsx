import React from"react";
import {Navbar,Nav,Form,FormControl,Button,Card} from "react-bootstrap";
function Cardtwo(props){
    return(
      <div style={{margin:"5px"}}>
        <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.imglinktwo} />
  <Card.Body>
    <Card.Title>{props.heading}</Card.Title>
    <a href={props.watch}><Button variant="primary">watch more</Button></a>
  </Card.Body>
</Card>
</div>
    )
}
export default Cardtwo ;