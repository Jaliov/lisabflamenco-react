import React from "react";
import { Row, Col } from "react-bootstrap";
import PhotoLayout from "./PhotoLayout";
import { Link } from "react-router-dom";

const PhotoDisplay = ({
  lisaImages,
  lisaImages2,
  nyImages,
  videoImages,
  classImg,
}) => {
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
                  />
                </Link>
              ))
            : lisaImages2
            ? lisaImages2.map((image) => (
                <Link to={image.link} key={image.id}>
                  <img
                    src={image.thumbnail}
                    width={150}
                    height={175}
                    alt={image.title}
                  />
                </Link>
              ))
            : classImg
            ? classImg.map((image) => (
                <Link to={image.link} key={image.id}>
                  <img
                    src={image.thumbnail}
                    width={600}
                    height={400}
                    alt={image.title}
                    className="rotateImg item"
                  />
                </Link>
              ))
            : nyImages
            ? nyImages.map((image) => (
                <Link to={image.link} key={image.id}>
                  <img
                    src={image.thumbnail}
                    width={150}
                    height={100}
                    alt={image.title}
                    className="rotateImg item"
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
