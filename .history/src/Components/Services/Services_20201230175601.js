import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./service.css";

export default function Services(props) {
  let {Services} = useParams()
  return (
    <div className="serviceContainer">
      <Container>
        <Row>
          <Col>
            {" "}
            <div>
              <h2> Service </h2>
              <div>
                <img src="image7.jpg" alt=" " className="w-100 h-25 fluid" />
              </div>
              <div className="serviceTexts">
                <h2> {props.title} </h2>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            {" "}
            <div>
              <p className="contentContainer">{props.content}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
