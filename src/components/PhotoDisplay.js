
import React, { Row, Col } from 'react-bootstrap';
import PhotoLayout from './PhotoLayout';
// const phto = {photolayout1:{width: '175px', height: '200px', margin: '3px 6px'}};

const PhotoDisplay = ( { lisaImages, choreoImages, njpacImages } ) => {  //destructured
   return (
       <>
       <Row>
       <Col md = '10'>
       {lisaImages ? lisaImages.map((image) => (
        < img key = { image.id } src = { image.link } style = {PhotoLayout.layout1}  alt = { image.title } className="border border-secondary"></img>)) :

        choreoImages ? choreoImages.map((image) => (
          < img key = { image.id } src = { image.link } style= { PhotoLayout.layout2 } alt = { image.title } className="border border-secondary"></img>)) :
        
        njpacImages ? njpacImages.map((image) => (
          < img key = { image.id } src = { image.link } style= { PhotoLayout.layout3 } alt = { image.title } className="border border-secondary"></img>)) : <p className = "text-light">no pictures here</p>
            
}   
    </Col>
    </Row>
    
    </>
 
   )       
           
     }
    
    
export default PhotoDisplay; 

    




