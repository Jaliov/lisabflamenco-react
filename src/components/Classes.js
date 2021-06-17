import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import LisaChildren from '../assets/lisakiddiesedit.jpg';

const Classes = () => {
  return (
    <Container>
      <h1>Classes</h1>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Card className = "bg-transparent">
          <Card.Img variant='top' src={LisaChildren}
          />
            <Card.Body bg = 'transparent'>
              <Card.Text >
                <p className='text-light larger'>
                  {' '}
                  Lisa teaches classes for adults and children of all ages and
                  levels. <br />
                  She is also available for private instruction.
                  <br /> <br />
                  <span className = 'alertyellow'> Contact:</span> 
                </p>
               
                <Card.Link
                  href='http://www.artscouncilofprinceton.org/'
                  className='larger'
                  target='blank'
                >
                  Arts Council of Princeton
                </Card.Link>
                <br />
                <Card.Link
                  href='mailto:lisasolea@aol.com'
                  className='card-link larger'
                >
                  Email
                </Card.Link>
             
                </Card.Text>
                </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Classes;
