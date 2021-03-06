import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import AddEvent from './AddEvent';
import UsefulLinks from './UsefulLinks';

const Events = () => {
  return (
    <div>
       <Helmet>
        <title>Upcoming Events</title>
          <meta name = "description" content = "Don't miss out on Lisa Botalico's Upcoming Events!" />
        </Helmet>
      <Container>
        <h1>Events/Links</h1>
        <Row>
          <Col xs={8}>
            <Alert variant={'transparent text-light bg-transparent'} id='alert'>
              For Information about Performances & Classes:{' '}
              <Alert.Link href='mailto:lisasolea@aol.com'> email</Alert.Link>
            </Alert>
            l
            <Card className='bg-transparent text-light'>
              <Card.Body>
                <Card.Title className='text-light'>Upcoming Events </Card.Title>
                <AddEvent />
              </Card.Body>
            </Card>
            <Card className='bg-transparent text-light'>
              <Card.Body>
                <Card.Title>Important Links</Card.Title>
                
               <UsefulLinks />
                {/* <p>
                  <em style={{ color: '#FFFFCC' }}>
                    Lisa teaches students at Rutgers University, Feb, 2015.
                    Scroll to Page 5 for article below
                  </em>
                </p> */}
                {/* <div
                  data-configid='0/11648128'
                  style={{
                    marginTop: '0px',
                    marginLeft: '70px',
                    paddingTop: '0px',
                    width: '525px',
                    height: '397px',
                    paddingBottom: '10px',
                    className: 'issuuembed',
                  }}
                ></div> */}
              </Card.Body>
            </Card>
            <br />
            {/* Start of SimpleHitCounter Code */}
            <div>
              <a href='http://www.simplehitcounter.com' target='blank'>
                <img
                  src='http://simplehitcounter.com/hit.php?uid=1491703&f=16777215&b=16711680'
                  border='0'
                  height='18'
                  width='83'
                  alt='web counter'
                ></img>
              </a>
              <br />
              <a
                href='http://www.simplehitcounter.com'
                target='blank'
                style={{ textDecoration: 'none' }}
              >
                web counter
              </a>
            </div>
          </Col>
          <Col></Col>
          {/* End of SimpleHitCounter Code */}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
