import React from 'react';
import { Carousel } from 'react-bootstrap';

const carouselItemStyle = { height: '300px', interval: '10000', width: '100%'};

const Reviews = () => {
  return (
    <>
      <h1>Press</h1>
      <Carousel className = 'press'>
        <Carousel.Item style={carouselItemStyle}>
          <Carousel.Caption>
            <h3>New York Times</h3>
            <p className='larger'>
              "Another notable solo was Lisa Botalico's <em>Solea</em> which,
              began as a lamentation and proceeded into a dance of pride and
              defiance."
              <em>
                <br />
                (Jack Anderson, NY Times)
              </em>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={carouselItemStyle}>
          <Carousel.Caption>
            <p className='larger'>
              "Botalico passed through a variety of rhythms and moods in her
              solo <em>Cantinas.</em> In sequence, she emphasized the swaying of her hips, the curling
              tracery of her arms, starkly dramatic poses and a rapid
              'zapateado.' Finally, hitching up her skirts, she became a saucy
              one woman fiesta."
              <em>(Star Ledger)</em>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <Carousel.Caption>
            <p className='larger'>
              "Lisa Botalico was the essence of fiery passion, <br />
              first playing the role of a slyly sultry seductress, then becoming
              the personification of a flickering flame." <em>(Asbury Park Press)</em>
              <br />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <Carousel.Caption>
            <h3>Il Progresso</h3>
            <p className='larger'>
              "Bravo Lisa Bottalico, in an applauditissimo <em>Solea</em>; she
              made the stage tremble."
              <br />
              <em>(Mario Fratti)</em>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <Carousel.Caption>
            <p className='larger'>
              "...Lisa Botalico's <em>Solea</em> had the crowd on it's feet, clapping
              in rhythm because of the audacious display of drama emanating from
              her being." <em>(Asbury Park Press)</em>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <Carousel.Caption>
            <h3>Princeton Town Topics <small>(link)</small></h3>
            <p className='larger'>
              <a
                href='http://www.towntopics.com/wordpress/2015/10/14/ole-flamenco-flourishes-in-princeton-as-lisa-botalico-leads-eager-spanish-dancers/'
                alt='towntopics'
                target='blank'
              >
                {' '}
                “Ole!” Flamenco Flourishes, in Princeton As Lisa Botalico Leads
                Eager Spanish Dancers
              </a>
              <br />
              Princeton Town Topics
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Reviews;
