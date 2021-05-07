import { Container, Row, Card, Col } from 'react-bootstrap';
import LisaChildren from '../assets/lisakiddiesedit.jpg';

const Classes = () => {
  return (
    <Container>
      <h1>Classes</h1>
        <Row>
       
        <Col xs={9}>
       
          <Card.Img variant = "top" src = { LisaChildren } />
          </Col>
          <Col>
          <Card className = "bg-transparent">
            <Card.Body>
              <Card.Text>
                <p className='text-light larger'>
                  {' '}
                  Lisa teaches classes for adults and children of all ages and
                  levels. <br />
                  She is also available for private instruction.
                  <br />
                </p>
            

              <p className='text-left larger alertyellow'>Contact:</p>
              <Card.Link href='http://www.artscouncilofprinceton.org/'
                className='larger'
                target='blank'
              >
                Arts Council of Princeton
              </Card.Link>
              <br />

              <a
                href="<'mailto:lisasolea@aol.com'>"
                className='card-link larger'
              >
                Email
              </a>
              <br />
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
    
    </Container>
  );
};

export default Classes;
