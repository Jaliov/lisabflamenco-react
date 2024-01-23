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
      <Container>
        <h1 className="bio">About</h1>
        <Row>
          <Col sm={8} className="text-light">
            <BioText />
          </Col>
          <Col
            xs={4}
            style={{ backgroundColor: "rgb(216, 79, 79, 0.3)" }}
            className="fade-in-image"
          >
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
  );
};
export default Bio;
