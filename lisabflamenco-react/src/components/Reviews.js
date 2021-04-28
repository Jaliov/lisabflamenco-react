import React, { Card, Col, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <>
        <Row>
             <Col>
    <Card style={{ backgroundColor: "transparent"}}>
   
       
  <Card.Body className = "text-light">
 
    <Card.Title>Card Title</Card.Title>
    <Card.Text >
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
 </Card>
  </Col>
 
   <Col md-3>
   <Card style={{ backgroundColor: "transparent"}}>
  <Card.Body className = "text-light">
    <Card.Title>Card Title</Card.Title>
    <Card.Text >
    loremUt Lorem incididunt aliquip aliqua proident labore deserunt exercitation cupidatat laboris officia.
    </Card.Text>
   
     </Card.Body>
  
    
 
  </Card>
  </Col>

  <Col>
   <Card style={{ backgroundColor: "transparent"}}>
  <Card.Body className = "text-light">
    <Card.Title>Card Title</Card.Title>
    <Card.Text >
    loremUt Lorem incididunt aliquip aliqua proident labore deserunt exercitation cupidatat laboris officia.
    </Card.Text>
   
     </Card.Body>
  
    
 
  </Card>
  </Col>

 </Row>


<Row>
<Col>
<div><p className = "text-light">This is a freiggin test</p></div>
</Col>


</Row>
</>
    )
}

export default Reviews