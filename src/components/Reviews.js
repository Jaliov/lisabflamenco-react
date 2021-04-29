import React, { Col, Row, Alert, Container, Carousel  } from 'react-bootstrap';
// const alertStyle = {marginLeft:'1px' }
const alertStyle2 = {marginTop: '50px'}
// const carouselExperiment = './images/'

const Reviews = () => {
  return (
     
    <Container>
      
        <div>
    
      <Row >
      
        <Col>
        <h1>Press</h1>
          <Alert className='text-light' style={{position:'absolute', marginTop: '20px'}}>
           
                <p>
                  "Another notable solo was Lisa Botalico's <em>'Solea'</em>{' '}
                  which, began as a 
                  lamentation and proceeded into a dance of pride and defiance."
                  <em>
                    <br />
                    (Jack Anderson, NY Times)
                  </em>
                </p>
             
          </Alert>
        </Col>

        <Col>
        <Alert className='alertyellow'style={{position:'absolute', marginTop: '50px', marginBottom:'20px'}}>
           
                <p>
                  "Botalico passed through a variety of rhythms and moods in her
                  solo
                  <em>'Cantinas.'</em>
                 
                  In sequence, she emphasized the swaying of her hips, the
                  curling tracery of her arms, starkly dramatic poses and a
                  rapid 'zapateado.' 
                  Finally, hitching up her skirts, she became a saucy one woman
                  fiesta."
                  <em>
                    
                    (Star Ledger)
                  </em>
                  </p>
         </Alert>
        </Col>
        <Col>
        <Alert style={alertStyle2} className='text-light'>
           
                <p>
                  "Lisa Botalico was the essence of fiery passion, <br />first playing
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
        <Alert style={alertStyle2 } className='text-warning'>
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
        <Alert className='text-light' style={{position:'relative', marginTop: '50px'}}>
                <p>
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
        <Alert className='text-light'style={alertStyle2}>
                 <a className = "text-light" style={alertStyle2} href='http://www.towntopics.com/wordpress/2015/10/14/ole-flamenco-flourishes-in-princeton-as-lisa-botalico-leads-eager-spanish-dancers/' alt="towntopics" target="blank">  “Ole!” Flamenco Flourishes, in Princeton As Lisa Botalico
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
     
     
      </div>
      <Carousel>
      <Carousel.Item style={{'height':"300px"}} interval={10000}>  

                         {/* <img style={{'height':"300px"}}  

                         className="d-block w-100"  

                       alt="first slide" />   */}
    <Carousel.Caption>
 
      <h3>New York Times</h3>
      <p>
                  "Another notable solo was Lisa Botalico's <em>'Solea'</em>{' '}
                  which, began as a 
                  lamentation and proceeded into a dance of pride and defiance."
                  <em>
                    <br />
                    (Jack Anderson, NY Times)
                  </em>
                </p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item style={{'height':"300px"}} interval={10000}>  

{/* <img style={{'height':"300px"}}  

className="d-block w-100"  

alt="first slide" />   */}
<Carousel.Caption>

<h3>New Jersey Star Ledger</h3>
<p>
                  "Botalico passed through a variety of rhythms and moods in her
                  solo
                  <em>'Cantinas.'</em>
                 
                  In sequence, she emphasized the swaying of her hips, the
                  curling tracery of her arms, starkly dramatic poses and a
                  rapid 'zapateado.' 
                  Finally, hitching up her skirts, she became a saucy one woman
                  fiesta."
                  <em>
                    
                    (Star Ledger)
                  </em>
                  </p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item style={{'height':"300px"}} interval={10000}>  

{/* <img style={{'height':"300px"}}  

className="d-block w-100"  

alt="first slide" />   */}
<Carousel.Caption>

<h3>Asbury Park Press</h3>
<p>
                  "Lisa Botalico was the essence of fiery passion, <br />first playing
                  the role of a slyly sultry seductress, then becoming the
                  personification of a flickering flame."
                  <br />
               
                </p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item style={{'height':"300px"}} interval={10000}>  

{/* <img style={{'height':"300px"}}  

className="d-block w-100"  

alt="first slide" />   */}
<Carousel.Caption>

<h3>Il Progresso</h3>
<p>
                  "Bravo Lisa Bottalico, in an <em>applauditissimo 'Solea'</em>;
                  she made the stage tremble."
                  <br />
                  <em>(Mario Fratti)</em>
                </p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item style={{'height':"300px"}} interval={10000}>  

{/* <img style={{'height':"300px"}}  

className="d-block w-100"  

alt="first slide" />   */}
<Carousel.Caption>

<h3>Asbury Park Press</h3>
<p>
"...Lisa Botalico's 'Solea' had the crowd on it's feet, clapping in rhythm because of the audacious display of drama emanating from her being."
(Asbury Park Press)
                </p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item style={{'height':"300px"}} interval={10000}>  

{/* <img style={{'height':"300px"}}  

className="d-block w-100"  

alt="first slide" />   */}
<Carousel.Caption>

<h3>Princeton Town Topics (link)</h3>
<p><a className = "text-light" style={alertStyle2} href='http://www.towntopics.com/wordpress/2015/10/14/ole-flamenco-flourishes-in-princeton-as-lisa-botalico-leads-eager-spanish-dancers/' alt="towntopics" target="blank">  “Ole!” Flamenco Flourishes, in Princeton As Lisa Botalico
                      Leads Eager Spanish Dancers</a>
                    <br />
                    Princeton Town Topics</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
    </Container>
     
  );
};

export default Reviews;
