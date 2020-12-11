import React from "react";
import data from './data'
import { Jumbotron,Container} from "react-bootstrap";

export default function Services(props) {
 
 
return (
   <div>

<Jumbotron fluid>
  <Container>
<h1>{props.data.title}</h1>
  </Container>
</Jumbotron>



<p>{props.content}</p>
    
   </div>
   
   
) 
   
   
}
