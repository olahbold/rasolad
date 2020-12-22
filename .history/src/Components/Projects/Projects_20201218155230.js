import "./project.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectGallery from "./projectGallery";

export default function Projects() {
  return (
    <div>
    <Container fluid>
      <Row>
        <Col>
          <div>
            <img
              src="image7.jpg"
              alt="jumbo_image"
              width="100%"
              height="300vh"
              object-fit="contain"
              style={{ position: "relative" }}
            />
          </div>
        </Col>
      </Row>
      </Container>

      <Container>
      <Row>
        <Col>
          <div>
          <projectGallery/>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
}
