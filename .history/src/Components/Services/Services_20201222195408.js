import React from "react";
import { Row,Container,Col } from "react-bootstrap";
import "./service.css";

export default function Services(props) {
  return (
    <div className="serviceContainer">

<Container >
  <Row><Col> <div>
   <div>
     <img src="image7.jpg" alt=" " className = 'w-100 h-25 fluid'  />
   </div>
   <div className = 'serviceTexts'>
     <h2> {props.service.title} </h2>
   </div>
 </div></Col></Row>
     
     
     
     
     
     
     
     
<Row><Col>  <div>
    <p className = 'contentContainer'>
     
     {props.service.content}
     
     
     
    </p> </div></Col></Row>
    
    
    
    
    
    
    
    

      </Container>
    </div>
  );
}
