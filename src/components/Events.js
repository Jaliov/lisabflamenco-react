import { Container, Row, Col, Card } from 'react-bootstrap';
import AddEvent from './AddEvent';

// import React, { useState } from 'react';

const Events = () => {
  return (
    <div>
      <Container>
        <h1>Events/Links</h1>
        <Row>
          <Col xs={8}>
            <Card className='bg-transparent text-light'>
              {/* <Card.Header>Featured</Card.Header> */}
              <Card.Body>
                <Card.Title className='text-light'>
                    For Information about Performances & Classes:{' '}
                   <Card.Link href="'mailto:lisasolea@aol.com'">email</Card.Link>
                </Card.Title>
                
                <Card.Title className='text-light'>
                  {' '}
                 
                   Upcoming Events{' '}
                  
                </Card.Title>
                <AddEvent />
              </Card.Body>
            </Card>

            <Card className='bg-transparent text-light'>
              <Card.Body>
                <Card.Title>
                  {' '}
                  <h4 className='text-light'>Important Links</h4>
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'>
                  Card Subtitle
                </Card.Subtitle> */}
                <Card.Text>
                  <Card.Link href='http://www.AlboradaDance.org/'>
                  {' '}
                    Alborada Spanish Dance Theatre
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                  <Card.Link href='http://www.towntopics.com/wordpress/2015/10/14/ole-flamenco-flourishes-in-princeton-as-lisa-botalico-leads-eager-spanish-dancers' target = "blank">
                    <em>
                      “Ole!” Flamenco Flourishes in Princeton As Lisa Botalico
                      Leads Eager Spanish Dancers,{' '}
                    </em>
                    <br />
                    Princeton Town Topics
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                  <Card.Link href='http://artscouncilofprinceton.org/events/fiesta-del-dia-de-los-reyes-magos-a-three-kings-day-celebration/'> 
                  Three Kings Day
                  {' '}
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                <Card.Link href='https://www.pinnworth.com/'>
                  {' '}
                  <em>Zorro, The Musical</em>, Pinnworth Productions
                </Card.Link>
                </Card.Text>
                <Card.Text>
                  <Card.Link href='images/cityartsphoto.jpg'>
                    {' '}
                    Lisa teaching students at CityArts, Trenton, 2010
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                  <Card.Link href='http://www.joelrudinart.com'>
                    {' '}
                    <em>Cosmic Visions, </em> Art by Joel Rudin
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                  <Card.Link href='http://www.joelrudinart.com'>
                    {' '}
                    <em>Cosmic Visions, </em> Art by Joel Rudin
                  </Card.Link>
                </Card.Text>
                <p>
                  <em style={{ color: '#FFFFCC' }}>
                    Lisa teaches students at Rutgers University, Feb, 2015.
                    Scroll to Page 5 for article below
                  </em>
                </p>
                <div
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
                ></div>
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
          {/* End of SimpleHitCounter Code */}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
