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
       <header>
        <h1 style = {{paddingBottom:'0px', textAlign:'left'}}>
          <em>Lisa Botalico </em>
        </h1>
        <p className = 'larger text-light' style={{marginTop:'-10px', lineHeight:'98%', textAlign:'right'}}>
          <em>
            ...danced and sang with her head  
            thrown back, her energy seemingly unquenchable.{' '}<br />
          </em>
          <p><small>(Star Ledger)</small></p>
        </p>
        </header>
        <Homephoto cover={cover} />
        </Col>
        <Col></Col>
        </Row>
      </Container>
  );
};
export default Home;
