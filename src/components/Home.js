import React from 'react';
import Row from 'react-bootstrap/Row';
import Homephoto from './Homephoto';
import cover from '../assets/ShawlintheAirfade.png';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Row>
      <Container>
        {/* <Col xs ="2" />
    <Col size="8"> */}
        <h1 className='text-center'>
          <em>Lisa Botalico </em>
        </h1>
        <h5 style={{ marginTop: '-10px' }}>
          <em>
            ...danced and sang with her head thrown back,
            <br />
            her energy seemingly unquenchable.{' '}
          </em>
          <small>(Star Ledger)</small>
        </h5>
        {/* <hr class="style2" /> */}
        <Homephoto cover={cover} />
        {/* </Col> */}
      </Container>
      {/* // <Col xs ="2" /> */}
    </Row>
  );
};
export default Home;
