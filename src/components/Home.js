import React from 'react';
import Homephoto from './Homephoto';
import cover from '../assets/ShawlintheAirfade.png';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
      <Container>
         <Row>
        <Col></Col>
       <Col md ={4}>
        <h1 style = {{paddingBottom:'0px'}}>
          <em>Lisa Botalico </em>
        </h1>
        <p className = 'larger text-light text-center' style={{marginTop:'-10px'}}>
          <em>
            ...danced and sang with her head thrown back,
            <br />
            her energy seemingly unquenchable.{' '}<br />
          </em>
          <small>(Star Ledger)</small>
        </p>
        <Homephoto cover={cover} />
        </Col>
        <Col></Col>
        </Row>
      </Container>
  );
};
export default Home;
