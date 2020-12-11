import React, { Fragment } from "react";

import { Jumbotron} from "react-bootstrap";

export default function Services(props) {
 
 
return (
   <div>

<Jumbotron fluid>
  <Container>
<h1>{props.title}</h1>
  </Container>
</Jumbotron>



<p>{props.content}</p>
    
   </div>
   
   
) 
   
   
}
