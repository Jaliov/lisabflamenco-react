import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <Container>
    <h1>Gallery</h1>
      <Row>
        {lisaImages
            ? lisaImages.map((image, id) => (
              <><Col><Fragment key={image.id}>
                  <Link to={image.link}>
                    <img
                      src={image.thumbnail}
                      width= {150}
                      height={175}
                      alt={image.title}
                      caption={image.catpion}
                      className='border border-secondary'
                    />
                       </Link>
                </Fragment></Col></>
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
     
      </Row>
      </Container>
    </>
  );
};
export default PhotoDisplay;
