import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PhotoLayout from './PhotoLayout';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PhotoDisplay = ({
  lisaImages,
  choreoImages,
  njpacImages,
  videoImages,
}) => {
  return (
    <>
      <Row>
        <Col xs={10}>
          {lisaImages
            ? lisaImages.map((image, id) => (
                <Fragment key={image.id}>
                    <img
                      src={image.thumbnail}
                      style={PhotoLayout.photolayout1}
                      alt={image.title}
                      className='border border-secondary'
                    />
                </Fragment>
              ))
            : choreoImages
            ? choreoImages.map((image, id) => (
                <Fragment key={image.id}>
                  <Link to={image.link}>
                    <img
                      src={image.thumbnail}
                      style={PhotoLayout.photolayout2}
                      alt={image.title}
                      className='border border-secondary'
                    />
                  </Link>
                </Fragment>
              ))
            : njpacImages
            ? njpacImages.map((image, id) => (
                <Fragment key={image.id}>
                  <img
                    src={image.link}
                    style={PhotoLayout.photolayout2}
                    alt={image.title}
                    className='border border-secondary'
                  />
                </Fragment>
              ))
            : videoImages
            ? videoImages.map((image, id) => (
                <Fragment key={image.id}>
                  <img
                    src={image.url}
                    style={PhotoLayout.videolayout}
                    alt={image.altTag}
                    className='border border-secondary'
                  />
                </Fragment>
              ))
            : null}
        </Col>
      </Row>
    </>
  );
};
export default PhotoDisplay;
