import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { Container } from "reactstrap";
import Home from "./Home";

export default class header extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Carousel interval={3000} fade={true} className="mw-100 mh-25">
                <Carousel.Item>
                  <img
                    className="d-block w-100 vh-25  img-fluid"
                    src="constrution_work.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100  vh-25 img-fluid"
                    src="images.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 vh-25  img-fluid"
                    src="image2.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Home />
            </Col>
          </Row>
        </Container>

        <Container fluid>
  <Row>
    <Col>
      
    </Col>
  </Row>
</Container>


      </div>
    );
  }
}
