import React from "react";
import { Helmet } from "react-helmet";
import cubanLunge from "../assets/cubanlungefade.png";
import { Container, Row, Col } from "react-bootstrap";
import BioText from "./BioText";

const Bio = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Lisa Botalico Biography, About Lisa Botalico"
        />
      </Helmet>
      <div>
        <Container className="container-fluid">
          <Row>
            <Col md={8} className="text-light">
              <h1 className="home">About</h1>
              <BioText />
            </Col>
            <Col md={4} style={{ backgroundColor: "rgb(216, 79, 79, 0.3)" }}>
              <img
                className="fade-in-image"
                src={cubanLunge}
                style={{ width: "400", height: "600" }}
                alt="Lisa Cuban"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Bio;
