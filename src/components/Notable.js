import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Card, Col } from "react-bootstrap";
import PhotoDisplay from "./PhotoDisplay";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import Modal from "./Modal";

const nyImages = [
  {
    id: 100,
    link: "images/LisaNY1.JPG",
    thumbnail: "images/LisaNY1smll copy.gif",
    title: "Lisa with legendary dancers Manolo Rivera and Luisa Triana",
  },
  {
    id: 101,
    link: "images/LisaNY5.JPG",
    thumbnail: "images/LisaNY5smll copy.gif",
    title:
      "Slide of Lisa performance Lincoln Center Outdoors in 1986(!), with cantaor Dominico Caro and guitarist Arturo Martinez",
  },
  {
    id: 102,
    link: "images/LisaNY3.JPG",
    thumbnail: "images/LisaNY3.gif",
    title: "With cantaor Dominico Caro",
  },
];

const lisaImages = [
  {
    id: 46,
    link: "images/choreography/NJPAC026.jpg",
    thumbnail: "images/choreography/NJPAC026.jpg",
    title: "At NJPAC!",
  },
  {
    id: 45,
    link: "images/choreography/LisaBotalicoNJPAC.jpg",
    thumbnail: "images/choreography/NJPACweb9 copy.gif",
    title: "At NJPAC!",
  },
  {
    id: 47,
    link: "images/choreography/NJPAC086.jpg",
    thumbnail: "images/choreography//NJPACweb2 copy.gif",
    title: "At NJPAC!",
  },
  {
    id: 48,
    link: "images/choreography/NJPAC093.jpg",
    thumbnail: "images/choreography/NJPACweb3 copy.gif",
    title: "At NJPAC!",
  },
  {
    id: 49,
    link: "images/choreography/NJPAC094.jpg",
    thumbnail: "images/choreography/NJPACweb4 copy.gif",
    title: "At NJPAC!",
  },
  {
    id: 50,
    link: "images/choreography/NJPAC002.jpg",
    thumbnail: "images/choreography/NJPACweb5 copy.gif",
    title: "At NJPAC!",
  },
];
const Notable = () => {
  return (
    <div>
      <Helmet>
        <title>Notable Events</title>
        <meta name="description" content="Lisa Botalico, Notable Past Events" />
      </Helmet>
      <div>
        <Container>
          <Modal />
          <Row>
            <Col></Col>
            <Col xs={10}>
              <h1 style={{ color: "#ffff66", textAlign: "center" }} class="bio">
                Notable Past Events
              </h1>
              <div>
                <Card className="bg-transparent">
                  <Card.Body>
                    <Card.Title className="text-light">
                      <h4 className="text-warning">
                        Arts Council of Princeton Fall 2014 Artist in Residence
                      </h4>
                    </Card.Title>
                    <Card.Text className="text-light larger">
                      <em>
                        Our{" "}
                        <a href="http://artscouncilofprinceton.org/artists/anne-reeves-air/current-artist-in-residence/">
                          fall Artist-in-Residence
                        </a>
                        , critically acclaimed Flamenco dancer and ACP
                        instructor
                        <strong> Lisa Botalio </strong>
                        proved to be one of our most popular residencies.
                        Throughout the fall season, Lisa, in collaboration with
                        visual artist Libby Ramage, led a free community dance
                        and art workshop, a free public forum and a sold-out
                        final performance, all of which explored the universal
                        themes of passion, oppression and hope through original
                        Flamenco dance choreography, music, and visual art
                        imagery. Lisa’s blog wrap-up after her residency
                        currently holds the ACP record for most comments on a
                        post, a testament to her impact.
                      </em>
                      <br />
                      <small className="text-light">
                        Jeff Nathanson, Executive Director
                      </small>
                      <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={10}>
              <Card className="bg-transparent">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4 className="text-warning">
                      <em>100 Years of Flamenco in New York</em>
                    </h4>
                  </Card.Title>
                  <Card.Text className="text-light">
                    {/* <p className ="larger"> */}
                    Opening reception
                    <br />
                    The New York Public Library for the Performing Arts, Vincent
                    Astor Gallery <br />
                    Mar 12 - Aug 3, 2013
                  </Card.Text>
                </Card.Body>
              </Card>
              <Col>
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <PhotoDisplay nyImages={nyImages} />
                  </SRLWrapper>
                </SimpleReactLightbox>
              </Col>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={10}>
              <Card className="bg-transparent">
                <Card.Body>
                  <Card.Title className="text-warning">
                    <em>Jersey Moves!</em> Festival of Dance at the New Jersey
                    Performing Arts Center (NJPAC)
                  </Card.Title>
                  <Card.Text className="text-light">March 24, 2012</Card.Text>
                  <SimpleReactLightbox>
                    <SRLWrapper>
                      <PhotoDisplay lisaImages={lisaImages} />
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Notable;
