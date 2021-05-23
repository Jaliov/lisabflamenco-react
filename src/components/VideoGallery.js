import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Iframe from 'react-iframe';
const cardStyle = {
  width: '475px',
  height: '350px',
  marginBottom: '10px',
  boxShadow: '5px 3px 3px rgb(217, 83, 79, 0.5)',
};
const TubeUrl = 'https://www.youtube.com/embed/Wwou3GZ4tZ8';

const VideoGallery = () => {
  return (
    <>
      <Container>
        <h1>Videos!</h1>
        <Row>
          <Col>
            <Card
              className='bg-dark text-light'
              key={Iframe.id}
              style={cardStyle}
            >
              <ReactPlayer url={TubeUrl} width={475} controls={true}   className='border border-secondary'/>
              <Card.Body>
                <Card.Title>
                  Lisa as Juana la Loca in Alborada's <em>Trail of Gold </em>
                </Card.Title>
                {/* <Card.Text>Lisa dancing Solea!</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={1}></Col>
          <Col>
            <Card
              className='bg-dark text-light'
              key={Iframe.id}
              style={cardStyle}
            >
              <Iframe
                url='https://drive.google.com/file/d/1jwRTAuRNkzQic8W-n1sLDLakh0KD3zux/preview'
                alt='Lisa dancing'
                title='Nighttime Sevillanas'
                id='70'
                width='475'
                height='275'
                className='border border-secondary'
                allowFullScreen
              />
              <Card.Body>
                <Card.Title>
                  <em>Sevillanas, Noche en el Jardin</em>
                </Card.Title>

                <Card.Text>Quarantine Project</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <p className='text-light larger'>
            <em>More soon!</em>
          </p>
        </Row>
      </Container>
    </>
  );
};

export default VideoGallery;
