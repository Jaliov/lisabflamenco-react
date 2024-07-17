import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Card, Col } from "react-bootstrap";
import LisaChildren from "../assets/lisakiddiesedit.jpg";
import LisaStudents from "../assets/lisaWithStudents.jpg";
import LisaStudentsAward from "../assets//LisaStudents_june8.jpg";
//import Iframe from "react-iframe";

//import ThreeKings24 from "../assets/ThreeKings_2024.jpg";
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
      <Container className="container-fluid">
        <h1
          className="home"
          style={{
            marginBottom: "1rem",
          }}
        >
          Classes
        </h1>
        <Row>
          <Col md={1} />
          <Col md={10}>
            <Card className="bg-transparent classMedia">
              <Card.Img
                variant="top"
                src={LisaChildren}
                className="fade-in-image studentPhotos"
                alt="Lisa teaching youngsters"
              />

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
                  className="text-light"
                  href="http://www.artscouncilofprinceton.org/"
                  target="blank"
                >
                  Arts Council of Princeton
                </Card.Link>
                <br />
                <Card.Link
                  href="mailto:lisasolea@aol.com"
                  className="text-light"
                >
                  Email
                </Card.Link>
                <br />
                See videos of Lisa teaching on the{" "}
                <Card.Link href="/videogallery" className="text-light">
                  Videos{" "}
                </Card.Link>
                page
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={1} />
          <Col md={10}>
            <Card bg="transparent classMedia">
              <Card.Title className="text-light larger">
                June 8, 2024: in recognition of 25 years teaching at The Arts
                Council of Princeton, Lisa has had a{" "}
                <span className="alertyellow">studio named in her honor!</span>
              </Card.Title>

              <Card.Img
                variant="bottom"
                src={LisaStudentsAward}
                alt="Three Kings Day 2024"
              />
            </Card>
          </Col>
          {/* <Col xs={1}></Col> */}
        </Row>
        <br />
        <Row>
          <Col md={1} />
          <Col md={10}>
            <Card bg="transparent classMedia">
              <Card.Title className="text-light larger">
                Below:{" "}
                <em className="alertyellow larger">
                  Fiesta del Día de Los Reyes Magos
                </em>{" "}
                or Three Kings Day, is celebrated throughout the world to mark
                the culmination of the 12 days of Christmas. On Saturday, Jan 6,
                2024, a dance performance by{" "}
                <span className="alertyellow">students</span> in the Arts
                Council of Princeton’s Flamenco program, led by Lisa Botalico,
                center, featured multiple dances as attendees learned about this
                cultural holiday. <br />
                <span className="smaller">
                  <small>(Photo by Charles R. Plohn)</small>
                </span>
              </Card.Title>

              <Card.Img
                variant="bottom"
                src="https://www.towntopics.com/wordpress/wp-content/uploads/2024/01/page-1-1-10-24-web-1.jpg"
                alt="Three Kings Day 2024"
              />
            </Card>
          </Col>
          {/* <Col xs={1}></Col> */}
        </Row>
        <br />
        <Row>
          <Col md={1} />
          <Col md={10}>
            <Card bg="transparent classMedia">
              <Card.Title className="text-light larger">
                {" "}
                Lisa with students after the first in-person student showcase,
                post-lockdown, June, 2021
              </Card.Title>{" "}
              <Card.Img
                src={LisaStudents}
                className="studentPhotos"
                alt="student showcase 2021"
              ></Card.Img>
            </Card>
          </Col>
        </Row>

        <br />
      </Container>
    </>
  );
};

export default Classes;
