import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Card, Col } from "react-bootstrap";
// import PhotoDisplay from "./PhotoDisplay";
// import { SRLWrapper } from "simple-react-lightbox";
// import SimpleReactLightbox from "simple-react-lightbox";
import Modal from "./Modal";
import Litebox from "../Lightbox3";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const lisaImages2 = [
  {
    src: "images/choreography/NJPAC026.jpg",
    title: "NJPAC",
  },
  {
    src: "images/choreography/LisaBotalicoNJPAC.jpg",

    title: "NJPAC",
  },
  {
    src: "images/choreography/NJPAC086.jpg",

    title: "NJPAC",
  },
  {
    src: "images/choreography/NJPAC093.jpg",

    title: "NJPAC",
  },
  {
    src: "images/choreography/NJPAC094.jpg",

    title: "NJPAC",
  },
  {
    src: "images/choreography/NJPAC002.jpg",

    title: "NJPAC",
  },
];
const Notable = () => {
  return (
    <>
      <Helmet>
        <title>Notable Events</title>
        <meta name="description" content="Lisa Botalico, Notable Past Events" />
      </Helmet>

      <div>
        <Container className="container-fluid">
          <Modal> </Modal>
          <Row>
            <h1
              style={{
                marginTop: "1rem",
              }}
              className="home"
            >
              Notable Past Events
            </h1>

            <div>
              <Col>
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
                        <a
                          href="http://artscouncilofprinceton.org/artists/anne-reeves-air/current-artist-in-residence/"
                          className="press"
                        >
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
              </Col>
            </div>
          </Row>
          <Row>
            <Card className="bg-transparent" style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Header>
                  <p></p>
                  {<Litebox />}
                </Card.Header>

                <Card.Title className="text-warning">
                  {" "}
                  100 Years of Flamenco in New York
                </Card.Title>
                <Card.Text className="text-light">
                  {/* <p className ="larger"> */}
                  Opening reception: The New York Public Library for the
                  Performing Arts, Vincent Astor Gallery, Mar 12 - Aug 3, 2013
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card className="bg-transparent" style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Header>
                  <p></p>
                  {<Litebox2 />}
                </Card.Header>
                <Card.Title
                  className="text-warning"
                  // style={{ marginTop: "-2rem" }}
                >
                  <em>Jersey Moves!</em>{" "}
                </Card.Title>
                <Card.Text className="text-light">
                  Festival of Dance at the New Jersey Performing Arts
                  Center(NJPAC)
                  <br />
                  March 24, 2012
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
};
const Litebox2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        id="pngEffects"
        className="home  nav-link liteboxContnt fade-in-image"
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: "transparent",
        }}
      >
        {" "}
        <img
          src="./images/choreography/NJPAC086.png"
          id="NJPACpng"
          alt="Lisa at NJPAC"
          style={{
            width: "10rem",
            height: "15em",
            backgroundColor: "rgb(0,0,0, 0.2)",
          }}
        />
      </button>

      <Lightbox
        id="litebox"
        styles={{
          root: {
            "--yarl__color_backdrop": "rgba(0, 0, 0, .8)",
            height: "100vh",
          },
        }}
        plugins={[Captions, Thumbnails, Fullscreen, Zoom]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
          descriptionMaxLines: 4,
        }}
        open={open}
        close={() => setOpen(false)}
        slides={lisaImages2}
      />
    </>
  );
};

export default Notable;
