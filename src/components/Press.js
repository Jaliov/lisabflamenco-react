import React from 'react';
import {Helmet} from "react-helmet";
import Reviews from './Reviews';
import { Container } from 'react-bootstrap';

const Press = () => {
  return (
    <Container>
       <title>Reviews</title>
          <meta name = "description" content = "Press Coverage of Lisa Botalico" />
      <Reviews />
    </Container>
  );
};

export default Press;
