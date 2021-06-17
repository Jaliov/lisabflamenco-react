import React from 'react';
import cubanLunge from '../assets/cubanlungefade.png';
import { Container, Row, Col } from 'react-bootstrap';
import BioText from './BioText';

const Bio = () => {
  return (
      <Container>
        <h1>About</h1>
        <Row>
          <Col sm={8} className='text-light'>
           <BioText />
          </Col>
          <Col xs={4} style={{ backgroundColor: 'rgb(216, 79, 79, 0.3)' }}>
            <img
              src={cubanLunge}
              style={{ width: '400', height: '600' }}
              alt='Lisa Cuban'
            />
          </Col>
        </Row>
      </Container>
  );
};
export default Bio;
