import React from "react";
// import { Parallax } from "react-scroll-parallax";
// import { useParallax } from "react-scroll-parallax";
import { Helmet } from "react-helmet";
import { Container, Row, Card, Col } from "react-bootstrap";
import LisaChildren from "../assets/lisakiddiesedit.jpg";
import LisaStudents from "../assets/lisaWithStudents.jpg";
import LisaStudentsAward from "../assets//LisaStudents_june8.jpg";
//import Iframe from "react-iframe";

//import ThreeKings24 from "../assets/ThreeKings_2024.jpg";
const Classes = () => {
  // const { ref } = useParallax({ speed: 10 });
  return (
    <>
      <Helmet>
        <title>Flamenco Classes</title>
        <meta
          name="description"
          content="Learn to Dance Flamenco with Lisa Botalico!"
        />
      </Helmet>

      <Container className="container-fluid" style={{ height: "1000px" }}>
        <h1
          className="home scroll-effect"
          style={{
            marginBottom: "1rem",
          }}
        >
          Classes
        </h1>
        <Row>
          <Col md={1} />
          <Col md={10}>
            <Card className="bg-transparent classMedia scroll-effect">
              <Card.Img
                variant="top"
                src={LisaChildren}
                className="fade-in-image studentPhotos"
                alt="Lisa teaching youngsters"
              />

              <Card.Title className="text-light larger  scroll-effect">
                {" "}
                Lisa teaches classes for adults and children of all ages and
                levels. <br />
                Private instruction also available.{" "}
              </Card.Title>
              <Card.Text className="alertyellow larger  scroll-effect">
                {" "}
                Contact:
                <br />
                <Card.Link
                  className="text-light  scroll-effect"
                  href="http://www.artscouncilofprinceton.org/"
                  target="blank"
                >
                  Arts Council of Princeton
                </Card.Link>
                <br />
                <Card.Link
                  href="mailto:lisasolea@aol.com"
                  className="text-light  scroll-effect"
                >
                  Email
                </Card.Link>
                <br />
                See videos of Lisa teaching on the{" "}
                <Card.Link
                  href="/videogallery"
                  className="text-light  scroll-effect"
                >
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
            <Card bg="transparent classMedia scroll-effect">
              <Card.Title className="text-light larger  scroll-effect">
                June 8, 2024: in recognition of 25 years teaching at The Arts
                Council of Princeton, Lisa has had a{" "}
                <span className="alertyellow">studio named in her honor!</span>
              </Card.Title>

              <Card.Img
                variant="bottom"
                src={LisaStudentsAward}
                alt="Three Kings Day 2024"
                className="scroll-effect"
              />
            </Card>
          </Col>
          {/* <Col xs={1}></Col> */}
        </Row>
        <br />
        <Row>
          <Col md={1} />
          <Col md={10}>
            <Card bg="transparent classMedia scroll-effect">
              <Card.Title className="text-light larger scroll-effect">
                Below:{" "}
                <em className="alertyellow larger scroll-effect">
                  Fiesta del Día de Los Reyes Magos
                </em>{" "}
                or Three Kings Day, is celebrated throughout the world to mark
                the culmination of the 12 days of Christmas. On Saturday, Jan 6,
                2024, a dance performance by{" "}
                <span className="alertyellow scroll-effect">students</span> in
                the Arts Council of Princeton’s Flamenco program, led by Lisa
                Botalico, center, featured multiple dances as attendees learned
                about this cultural holiday. <br />
                <span className="smaller">
                  <small>(Photo by Charles R. Plohn)</small>
                </span>
              </Card.Title>

              <Card.Img
                variant="bottom"
                src="https://www.towntopics.com/wordpress/wp-content/uploads/2024/01/page-1-1-10-24-web-1.jpg"
                alt="Three Kings Day 2024"
                className="scroll-effect"
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
              <Card.Title className="text-light larger scroll-effect">
                {" "}
                Lisa with students after the first in-person student showcase,
                post-lockdown, June, 2021
              </Card.Title>{" "}
              <Card.Img
                src={LisaStudents}
                className="studentPhotos scroll-effect"
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
