import React from "react";
import { Row, Col } from "react-bootstrap";
import PhotoLayout from "./PhotoLayout";
import { Link } from "react-router-dom";

const PhotoDisplay = ({ lisaImages, nyImages, videoImages }) => {
  return (
    <>
      <Row className="text-center">
        <Col>
          {lisaImages
            ? lisaImages.map((image) => (
                <Link to={image.link} key={image.id}>
                  <img
                    src={image.thumbnail}
                    width={150}
                    height={175}
                    alt={image.title}
                    class="rotateImg"
                  />
                </Link>
              ))
            : nyImages
            ? nyImages.map((image) => (
                <Link to={image.link} key={image.id}>
                  <img
                    src={image.thumbnail}
                    width={175}
                    height={175}
                    alt={image.title}
                    class="rotateImg"
                  />
                </Link>
              ))
            : videoImages
            ? videoImages.map((image) => (
                <img
                  src={image.url}
                  style={PhotoLayout.videolayout}
                  alt={image.altTag}
                  className="border border-secondary"
                />
              ))
            : null}
        </Col>
      </Row>
    </>
  );
};
export default PhotoDisplay;
