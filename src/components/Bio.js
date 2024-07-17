import React from "react";
import { Helmet } from "react-helmet";
import cubanLunge from "../assets/cubanlungefade.png";
import { Container, Row, Col } from "react-bootstrap";
import BioText from "./BioText";
import BioPhoto from "./BioPhoto";

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
        <h1 className="home">About</h1>
        <Container className="container-fluid">
          <Row>
            <Col md={8} className="text-light bio">
              <BioText />
            </Col>
            <Col>
              <BioPhoto cubanLunge={cubanLunge} id="background"></BioPhoto>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Bio;
