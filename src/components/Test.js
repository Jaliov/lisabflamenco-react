import React from "react";
import Litebox from "./Lightbox3";
import { Container, Row, Col } from "react-bootstrap";

export const Test = () => {
  return (
    <div>
      <Container
        className="container-fluid"
        style={{ height: "500px" }}
        id="noscroll"
      >
        <Row>
          <Col></Col>
          <Col md={4}>
            <h1 className="home"></h1>
            <Litebox></Litebox>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Test;
