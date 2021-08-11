import React from 'react';
import {Helmet} from "react-helmet";
import cubanLunge from '../assets/cubanlungefade.png';
import { Container, Row, Col } from 'react-bootstrap';
import BioText from './BioText';

const Bio = () => {
  return (
      <Container>
        <h1>About</h1>
        <Helmet>
          <title>About Lisa Botalico</title>
          <meta name = "description" content = "Lisa Botalico Biography, About Lisa Botalico" />
        </Helmet>
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
