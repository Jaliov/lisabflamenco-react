import React, { Col, Row, Alert } from 'react-bootstrap';

const Reviews = () => {
  return (
    <>
      <Row>
        <Col>
          <Alert style={{ backgroundColor: 'transparent' }} className='text-light'>
           
                <p>
                  "Another notable solo was Lisa Botalico's <em>'Solea'</em>{' '}
                  which, began as a <br />
                  lamentation and proceeded into a dance of pride and defiance."
                  <em>
                    <br />
                    (Jack Anderson, NY Times)
                  </em>
                </p>
             
          </Alert>
        </Col>

        <Col md-3>
        <Alert style={{ backgroundColor: 'transparent' }} className='text-warning'>
           
                <p>
                  "Botalico passed through a variety of rhythms and moods in her
                  solo
                  <em>'Cantinas.'</em>
                  <br />
                  In sequence, she emphasized the swaying of her hips, the
                  curling tracery of her arms, starkly dramatic poses and a
                  rapid 'zapateado.' <br />
                  Finally, hitching up her skirts, she became a saucy one woman
                  fiesta."
                  <em>
                    <br />
                    (Star Ledger)
                  </em>
                  </p>
         </Alert>
        </Col>
        <Col>
        <Alert style={{ backgroundColor: 'transparent' }} className='text-light'>
           
                <p class='text-light'>
                  "Lisa Botalico was the essence of fiery passion, first playing
                  the role of a slyly sultry seductress, then becoming the
                  personification of a flickering flame."
                  <br />
                  <em>(Asbury Park Press)</em>
                </p>
            </Alert>
        </Col>
      </Row>

      <Row>
        <Col>
        <Alert style={{ backgroundColor: 'transparent' }} className='text-warning'>
                <p>
                  "Bravo Lisa Bottalico, in an <em>applauditissimo 'Solea'</em>;
                  she made the stage tremble."
                  <br />
                  <em>(Mario Fratti, Il Progresso)</em>
                </p>

                {/* <p><img src="images/Adobe_PDF_Icon_svg.png"> US 1 Interview </a><span class="text-light"><br />with Lisa
                        in article
                        about Paco Pena<span></p> */}
            </Alert>
       
        </Col>

        <Col>
        <Alert style={{ backgroundColor: 'transparent' }} className='text-light'>
                <p class='text-light'>
                  "...Lisa Botalico's <em>'Solea'</em> had the crowd on it's
                  feet, clapping in rhythm because of the audacious display of
                  drama emanating from her being."
                  <em>
                    <br /> (Asbury Park Press)
                  </em>
                </p>
            </Alert>
        </Col>
        <Col>
        <Alert style={{ backgroundColor: 'transparent' }} className='text-light'>
                 <a className = "text-light" href='http://www.towntopics.com/wordpress/2015/10/14/ole-flamenco-flourishes-in-princeton-as-lisa-botalico-leads-eager-spanish-dancers/' alt="towntopics" target="blank">  “Ole!” Flamenco Flourishes, in Princeton As Lisa Botalico
                      Leads Eager Spanish Dancers</a>
                    <br />
                    Princeton Town Topics
                 
                  <br />
                  <br />
                 
          </Alert>
          {/* <img
                    src='./images/US1Article.pdf'
                    alt='Towntopics article'
                  ></img> */}
        </Col>
      </Row>
    </>
  );
};

export default Reviews;
