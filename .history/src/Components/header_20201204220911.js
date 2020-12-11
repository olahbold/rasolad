import React, {Component} from "react";
import {Carousel} from 'react-bootstrap'

export default class header extends Component {
  render() {
    return (
      <div>
      <Carousel interval={5000} fade = {true}  className = 'mt-25'>
  <Carousel.Item  >
    <img
      className="d-block w-100 vh-100 "
      src="constrution_work.jpg"
      alt="First slide"
    />
    </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100  vh-50"
      src="images.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 vh-50 "
      src="image2.jpg"
      alt="Third slide"
    />
</Carousel.Item>
</Carousel>
     </div>   
    )
    }
  }
