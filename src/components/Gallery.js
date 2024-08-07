import * as React from "react";
import { Helmet } from "react-helmet";
// import PhotoDisplay from "./PhotoDisplay";
// import { SRLWrapper } from "simple-react-lightbox";
//import bckgrnd from "../assets/blackwhitepolkaadotglow.png";
import { Container, Row, Col } from "react-bootstrap";
// import SimpleReactLightbox from "simple-react-lightbox";

// import { lisaGalleryImages } from "./lisaImages";
import Litebox from "../LIghtbox2.js";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Photo Gallery</title>
        <meta
          name="description"
          content="Lisa Botalico Flamenco Photo Gallery"
        />
      </Helmet>
      <div>
        <Container className="container-fluid" id="noscroll">
          <Row>
            <Col></Col>
            <Col xs={8}>
              <div>
                <h1 className="home">
                  <em>Gallery </em>
                </h1>
                <Litebox />
              </div>
              {/* <div className="fade-in-image centered"></div> */}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Gallery;
