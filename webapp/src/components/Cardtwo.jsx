import React from"react";
import {Button,Card} from "react-bootstrap";
import { Link } from "react-router-dom";
function Cardtwo(props){
    return(
      <div style={{margin:"5px"}}>
        <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.imglinktwo} alt="image" />
  <Card.Body>
    <Card.Title>{props.heading}</Card.Title>
    <a><Link to={props.watch}><Button variant="primary">watch more</Button></Link></a>
  </Card.Body>
</Card>
</div>
    )
}
export default Cardtwo ;