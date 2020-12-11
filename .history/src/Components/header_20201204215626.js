import React, {Component} from "react";
import {Carousel} from 'react-bootstrap'

export default class header extends Component {
  render() {
    return (
      <div>
      <Carousel interval={1000} fade = {true}>
  <Carousel.Item >
    <img
      className="d-block w-100 h-2"
      src="constrution_work.jpg"
      alt="First slide"
    />
    
    
    
    
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 h-25"
      src="images.jpg"
      alt="Third slide"
    />
  
  
  
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="image2.jpg"
      alt="Third slide"
    />
</Carousel.Item>
</Carousel>
     
     
 </div>   
    )
    }
  }
