import React, {Component} from "react";
import {Carousel} from 'react-bootstrap'

export default class header extends Component {
  render() {
    return (
      <div>
      <Carousel interval={1000} fade = {true}>
  <Carousel.Item >
    <img
      className="d-block w-100 h-50"
      src="constrution_work.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 h-50"
      src="images.jpg"
      alt="Third slide"
    />
  
  
  
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="constrution_work.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     
     
 </div>   
    )
    }
  }
