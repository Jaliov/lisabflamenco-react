import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Card, Col } from 'react-bootstrap';
import LisaChildren from '../assets/lisakiddiesedit.jpg';
import LisaStudents from '../assets/lisaWithStudents.jpg';


const Classes = () => {
  return (
    <>
    <Helmet>
    <title>Flamenco Classes</title>
    <meta name = "description" content = "Learn to Dance Flamenco with Lisa Botalico!" />
  </Helmet>
    <Container>
      <h1>Classes</h1>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Card className='bg-transparent'>
            <Card.Img variant='top' src={LisaChildren} />
            <Card.Body bg='transparent'>
              <Card.Title className='text-light larger'>
                {' '}
                Lisa teaches classes for adults and children of all ages and
                levels. <br />
                Private instruction also available. </Card.Title>
                <Card.Text className='alertyellow larger'> Contact: 
                <br /><Card.Link
                  href='http://www.artscouncilofprinceton.org/'
                  target='blank'>
               
                  Arts Council of Princeton
                  </Card.Link>
                <br />
                <Card.Link
                  href='mailto:lisasolea@aol.com'
                >
                  Email
                </Card.Link>
                <br />
              See videos of Lisa teaching on the <Card.Link
              href='/videogallery'>Videos </Card.Link>page</Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
       <Row>
        <Col></Col>
        <Col xs={8}>
          <Card bg='transparent'>
          <Card.Body>
              <Card.Title className='text-light'>
                {' '}
                Lisa with students after the first in-person student showcase, June, 2021
              </Card.Title>
            </Card.Body>
            <Card.Img variant='bottom' src={ LisaStudents } />
           
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <br />
    </Container>
    </>
  );
};

export default Classes;
