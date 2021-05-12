import React, { useState } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import SimpleReactLightbox from 'simple-react-lightbox';
import PhotoDisplay from './PhotoDisplay';
import { SRLWrapper } from 'simple-react-lightbox';

const Notable = () => {
  const [choreoImages] = useState([
    {
      id: 43,
      link: 'images/LisaNY1.JPG',
      thumbnail: 'images/LisaNY1smll copy.gif',
      title: 'Lisa with legendary dancers Manolo Rivera and Luisa Triana',
    },
    {
      id: 42,
      link: 'images/LisaNY5.JPG',
      thumbnail: 'images/LisaNY5.JPG',
      title:
        'Slide of Lisa performance Lincoln Center Outdoors in 1996(!), with cantaor Dominico Caro and guitarist Arturo Martinez',
    },
    {
      id: 44,
      link: 'images/LisaNY3.JPG',
      thumbnail: 'images/LisaNY3.gif',
      title: 'With cantaor Dominico Caro',
    },
  ]);
  const [njpacImages] = useState([
    { id: 46, link: 'images/NJPAC002/NJPAC026.jpg', title: 'At NJPAC!' },
    {
      id: 45,
      link: 'images/NJPAC002/LisaBotalicoNJPAC.jpg',
      title: 'At NJPAC!',
    },
    { id: 47, link: 'images/NJPAC002/NJPAC086.jpg', title: 'At NJPAC!' },
    { id: 48, link: 'images/NJPAC002/NJPAC093.jpg', title: 'At NJPAC!' },
    { id: 49, link: 'images/NJPAC002/NJPAC094.jpg', title: 'At NJPAC!' },
    { id: 50, link: 'images/NJPAC002/NJPAC002.jpg', title: 'At NJPAC!' },
  ]);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={12}>
          {/* <div className='container fluid bg-transparent'> */}
          <h1>Notable Events</h1>

          <div>
            <Card className='bg-transparent'>
              <Card.Body>
                <Card.Title className='text-light'>
                  <h4 className='text-warning'>
                    Arts Council of Princeton Fall 2014 Artist in Residence
                  </h4>
                </Card.Title>
                <Card.Text className='text-light larger'>
                  <em>
                    Our{' '}
                    <a href='http://artscouncilofprinceton.org/artists/anne-reeves-air/current-artist-in-residence/'>
                      fall Artist-in-Residence
                    </a>
                    , critically acclaimed Flamenco dancer and ACP instructor
                    <strong> Lisa Botalio </strong>
                    proved to be one of our most popular residencies. Throughout
                    the fall season, Lisa, in collaboration with visual artist
                    Libby Ramage, led a free community dance and art workshop, a
                    free public forum and a sold-out final performance, all of
                    which explored the universal themes of passion, oppression
                    and hope through original Flamenco dance choreography,
                    music, and visual art imagery. Lisa’s{' '}
                    <a href='http://artscouncilofprinceton.org/2014/10/finding-light-through-fire/'>
                      blog wrap-up
                    </a>{' '}
                    after her residency currently holds the ACP record for most
                    comments on a post, a testament to her impact.
                  </em>
                  <br />

                  <>
                    <small className='text-light'>
                      Jeff Nathanson, Executive Director
                    </small>
                    <br />
                  </>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <div>
        <Row>
          <Col></Col>
          <Col xs={12}>
            <Card className='bg-transparent'>
              <Card.Body>
                <Card.Title>
                  {' '}
                  <h4 className='text-warning'>
                    <em>100 Years of Flamenco in New York</em>
                  </h4>
                </Card.Title>

                <Card.Text className='text-light'>
                  {/* <p className ="larger"> */}
                  Opening reception
                  <br />
                  The New York Public Library for the Performing Arts, Vincent
                  Astor Gallery <br />
                  Mar 12 - Aug 3, 2013
                </Card.Text>

                <SimpleReactLightbox>
                  <SRLWrapper>
                    <PhotoDisplay choreoImages={choreoImages} /> <br />
                  </SRLWrapper>
                </SimpleReactLightbox>
              </Card.Body>
            </Card>

            <Card className='bg-transparent'>
              <Card.Body>
                <Card.Title className='text-warning'>
                  <h4>
                    <em>Jersey Moves!</em> Festival of Dance at the New Jersey
                    Performing Arts Center (NJPAC)
                  </h4>{' '}
                  <p className='text-light'>March 24, 2012</p>
                </Card.Title>
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <Card className='bg-transparent'>
                      <PhotoDisplay njpacImages={njpacImages} />
                    </Card>
                  </SRLWrapper>
                </SimpleReactLightbox>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
};

export default Notable;
