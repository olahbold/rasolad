import React from "react";
import "./All.css";
import { Carousel } from "react-bootstrap";

export default function Projects() {
  return ( <div className = '.Project_container'>
    <div>
      <Carousel slide="false">
        <Carousel.Item>
          <img className="d-block w-100" src="image7.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="image6.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="image4.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>

    <div>
  <Carousel slide="false">
    <Carousel.Item>
      <img className="d-block w-100" src="image7.jpg" alt="First slide" />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img className="d-block w-100" src="image6.jpg" alt="Third slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="image4.jpg" alt="Third slide" />
    </Carousel.Item>
  </Carousel>
</div>




<div  cla>
  <Carousel slide="false">
    <Carousel.Item>
      <img className="d-block w-100" src="image7.jpg" alt="First slide" />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img className="d-block w-100" src="image6.jpg" alt="Third slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="image4.jpg" alt="Third slide" />
    </Carousel.Item>
  </Carousel>
</div>



    </div>
  );
}