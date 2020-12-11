import React from "react";

import { Jumbotron,Container} from "react-bootstrap";

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
console.log(props)