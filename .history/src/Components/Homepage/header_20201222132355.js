import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { Container } from "reactstrap";

import Homes from "./Homes";
import "./home.css";
import Testimonials from "./Testimonials";
import Partners from "./Partners";

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
                    src="public\rasolad_images\staff_images\staff3.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100  vh-25 img-fluid"
                    src=""
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 vh-25  img-fluid"
                    src="image7.jpg"
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
              <Homes />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <Testimonials />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Partners />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
