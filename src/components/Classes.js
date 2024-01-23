import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Card, Col } from "react-bootstrap";
import LisaChildren from "../assets/lisakiddiesedit.jpg";
import LisaStudents from "../assets/lisaWithStudents.jpg";
import ThreeKings24 from "../assets/ThreeKings_2024.jpg";
const Classes = () => {
  return (
    <>
      <Helmet>
        <title>Flamenco Classes</title>
        <meta
          name="description"
          content="Learn to Dance Flamenco with Lisa Botalico!"
        />
      </Helmet>
      <Container>
        <h1>Classes</h1>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Card className="bg-transparent">
              <Card.Img variant="top" src={LisaChildren} />
              <Card.Body bg="transparent">
                <Card.Title className="text-light larger">
                  {" "}
                  Lisa teaches classes for adults and children of all ages and
                  levels. <br />
                  Private instruction also available.{" "}
                </Card.Title>
                <Card.Text className="alertyellow larger">
                  {" "}
                  Contact:
                  <br />
                  <Card.Link
                    href="http://www.artscouncilofprinceton.org/"
                    target="blank"
                  >
                    Arts Council of Princeton
                  </Card.Link>
                  <br />
                  <Card.Link href="mailto:lisasolea@aol.com">Email</Card.Link>
                  <br />
                  See videos of Lisa teaching on the{" "}
                  <Card.Link href="/videogallery">Videos </Card.Link>page
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Card bg="transparent">
              <Card.Body>
                <Card.Title className="text-light larger">
                  {" "}
                  Lisa with students after the first in-person student showcase,
                  post-lockdown, June, 2021
                </Card.Title>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src={LisaStudents}
                style={{ marginBottom: "20px" }}
              />
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Card bg="transparent">
              <Card.Body>
                <Card.Title className="text-light larger">
                  <em className="alertyellow larger">
                    Fiesta del Día de Los Reyes Magos
                  </em>
                  , or Three Kings Day, is celebrated throughout the world to
                  mark the culmination of the 12 days of Christmas. On Saturday,
                  a dance performance by{" "}
                  <span className="alertyellow">students</span> in the Arts
                  Council of Princeton’s Flamenco program, led by Lisa Botalico,
                  center, featured multiple dances as attendees learned about
                  this cultural holiday. (Photo by Charles R. Plohn)
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={ThreeKings24} />
            </Card>
          </Col>
          <Col></Col>
        </Row>

        <br />
      </Container>
    </>
  );
};

export default Classes;
