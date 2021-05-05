import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

// import Luisa from "../images/LisaNY1smll.jpg";
import SimpleReactLightbox from 'simple-react-lightbox'; 
// import 'react-awesome-lightbox/build/style.css';
import PhotoDisplay from './PhotoDisplay';
// import NJPACImages from './NJPACImages';
import { SRLWrapper } from 'simple-react-lightbox';


const Gallery2 = () => {
  const [choreoImages] = useState([
    { id: 21, link: 'images/LisaNY1.JPG', thumbnail: 'images/LisaNY1.JPG',title: 'Luisa' },
    {
      id: 22,
      link: 'images/LisaNY5smll copy.jpg',
      title:
        'Slide of Lisa performance Lincoln Center Outdoors in 1986(!), with cantaor Dominico Caro and guitarist Arturo Martinez',
    },
    { id: 23, link: 'images/LisaNY3smll.jpg', title: 'With Dominico Caro' },
   
  ]) 
   const [njpacImages] = useState([  { id: 16, link: 'images/NJPACweb1.jpg', title: 'At NJPAC!' }, 
 ]);
   
  return (
    <div className='container fluid bg-transparent'>
      <h1>Gallery 2</h1>

      <div>
        <Card className='bg-transparent'>
          <Card.Body>
            <Card.Title className='text-light'>
              Arts Council of Princeton Fall 2014 Artist in Residence
            </Card.Title>
            <Card.Text>
              <p className='text-light'>
                <em>
                  Our{' '}
                  <a href='http://artscouncilofprinceton.org/artists/anne-reeves-air/current-artist-in-residence/'>
                    fall Artist-in-Residence
                  </a>
                  , critically acclaimed Flamenco dancer and ACP instructor
                  <strong>Lisa Botalio</strong>
                  proved to be one of our most popular residencies. Throughout
                  the fall season, Lisa, in collaboration with visual artist
                  Libby Ramage, led a free community dance and art workshop, a
                  free public forum and a sold-out final performance, all of
                  which explored the universal themes of passion, oppression and
                  hope through original Flamenco dance choreography, music, and
                  visual art imagery. Lisa’s{' '}
                  <a href='http://artscouncilofprinceton.org/2014/10/finding-light-through-fire/'>
                    blog wrap-up
                  </a>{' '}
                  after her residency currently holds the ACP record for most
                  comments on a post, a testament to her impact.
                </em>
              </p>
              <p class='card-text'>
                <small class='text-light'>
                  Jeff Nathanson, Executive Director
                </small>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <SimpleReactLightbox>
        <SRLWrapper>
          <Card className='bg-transparent'>
          
            <PhotoDisplay choreoImages={choreoImages} /> <br />
            <h2 className = 'text-light'>Lisa at NJPAC!</h2>
            <PhotoDisplay njpacImages={njpacImages} /> 
           
          </Card>
        </SRLWrapper>
      </SimpleReactLightbox>

      {/* <SimpleReactLightbox>
        <SRLWrapper>
          <Card className='bg-transparent'>
            <Main lisaImages={lisaImages} />
          </Card>
        </SRLWrapper>
      </SimpleReactLightbox> */}
    </div>
  );
};

export default Gallery2;
