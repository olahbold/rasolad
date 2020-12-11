import React, {Component} from "react";
import {Carousel, Row,Col} from 'react-bootstrap'
import { Container } from "reactstrap";
import Home from './Home'

export default class header extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
      <Carousel interval={5000} fade = {true}  className = 'm'>
  <Carousel.Item  >
    <img
      className="d-block w-100 vh-25 "
      src="constrution_work.jpg"
      alt="First slide"
    />
    </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100  vh-25"
      src="images.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 vh-25 "
      src="image2.jpg"
      alt="Third slide"
    />
</Carousel.Item>
</Carousel>
</Col>
</Row>



<Row><Col>
<Home/>

</Col></Row>
</Container>






     </div>   
    )
    }
  }
