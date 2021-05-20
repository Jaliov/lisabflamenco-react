import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PhotoLayout from './PhotoLayout';
import { Fragment } from 'react';
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
            ? lisaImages.map((image, id) => (
             <Fragment key={image.id}>
                  <Link to={image.link}>
                  <img
                      src={image.thumbnail}
                      width= {150}
                      height={175}
                      alt={image.title}
                    />
                       </Link>
                </Fragment>
              
              )) :
              choreoImages ?
                choreoImages.map((image, id) => (
                  <Fragment key={image.id}>
                      <Link to={image.link}>
                      <img
                          src={image.thumbnail}
                          width= {150}
                          height={175}
                       
                          alt={image.title}
                        />
                           </Link>
                    </Fragment>
                  
              )): nyImages?  nyImages.map((image) => (
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
                 
                 )) :  njpacImages ?
              njpacImages.map((image, id) => (
               <Fragment key={image.id}>
                    <Link to={image.link}>
                    <img
                        src={image.thumbnail}
                        width= {150}
                        height={175}
                      
                        alt={image.title}
                      />
                         </Link>
                  </Fragment>  
              )) :
             videoImages
            ? videoImages.map((image, id) => (
                <Fragment key={image.id}>
                  <img
                    src={image.url}
                    style={PhotoLayout.videolayout}
                    alt={image.altTag}
                    className='border border-secondary'/>
                </Fragment>
            
              ))
            : null}
       </Col>
      </Row>
       </>
  )  
};
export default PhotoDisplay;