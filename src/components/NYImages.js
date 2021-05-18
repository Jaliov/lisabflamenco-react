import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NYImages = ({ nyImages }) => {
  return (
    <>
      <Row>
        <Col>
         {nyImages.map((image) => (
                <>
                  <Fragment key={image.id}>
                    <Link to={image.link}>
                      <img
                        src={image.thumbnail}
                        width={175}
                        height={175}
                        alt={image.title}
                      />
                    </Link>
                  </Fragment>
                </>
              ))}
         
        </Col>
      </Row>
    </>
  );
};
export default NYImages;
