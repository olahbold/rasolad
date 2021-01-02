import "./service.css";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Services from "./Services";

export default function Servicehandler() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Services
              title={"LICENSED ELECTRICAL CONTRACTOR"}
              content={
                "Our company is licensed by NIGERIA electricity Management Service Agency to undertake electrical installations which covers both domestic and industrial installations"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
