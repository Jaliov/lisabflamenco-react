import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PhotoLayout from './PhotoLayout';
// import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PhotoDisplay = ({
  lisaImages,
  choreoImages,
  nyImages,
  njpacImages,
  videoImages,
}) => {
  return (
    <>
      <Row>
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
            : choreoImages
            ? choreoImages.map((image) => (
                <Link to={image.link} key={image.id}>
                  <img
                    src={image.thumbnail}
                    width={150}
                    height={175}
                    alt={image.title}
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
                  />
                </Link>
              ))
            : njpacImages
            ? njpacImages.map((image) => (
                <Link to={image.link} key={image.id}>
                  <img
                    src={image.thumbnail}
                    width={150}
                    height={175}
                    alt={image.title}
                  />
                </Link>
              ))
            : videoImages
            ? videoImages.map((image) => (
                <img
                  src={image.url}
                  style={PhotoLayout.videolayout}
                  alt={image.altTag}
                  className='border border-secondary'
                />
              ))
            : null}
        </Col>
      </Row>
    </>
  );
};
export default PhotoDisplay;
