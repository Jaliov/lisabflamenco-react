import React from "react";
// import { SRLWrapper } from "simple-react-lightbox";
// import PhotoDisplay from "./PhotoDisplay";
import { Container, Row, Col } from "react-bootstrap";
import Litebox from "../Lightbox.js";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Homephoto from "./Homephoto";
import bckgrnd from "../assets/Lisamarie4fade.png";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Choreography = () => {
  return (
    <div>
      <HelmetProvider>
        <div>
          <Helmet>
            <meta
              name="description"
              content="Discover Lisa Botalico, acclaimed Flamenco dancer, dance and music of Spain"
            />
          </Helmet>
        </div>
      </HelmetProvider>

      <div>
        <Container className="container-fluid" id="noscroll">
          <Row>
            <Col></Col>
            <Col md={4}>
              <div>
                <h1 className="home">
                  <em>
                    Choreography/
                    <br />
                    Collaborations{" "}
                  </em>
                </h1>
                <Litebox></Litebox>
              </div>

              <div></div>
              <div className="fade-in-image centered">
                <Homephoto cover={bckgrnd} />
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Choreography;
