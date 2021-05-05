
import React, { Row, Col } from 'react-bootstrap';
import PhotoLayout from './PhotoLayout';
// const phto = {photolayout1:{width: '175px', height: '200px', margin: '3px 6px'}};

const PhotoDisplay = ( { lisaImages, choreoImages, njpacImages} ) => {  //destructured
   return (
       <>
       <Row >
       <Col xs = {10} >
       {lisaImages ? lisaImages.map((image) => (
         <><a href = {image.link}>< img key = { image.id }  src = { image.thumbnail } style = {PhotoLayout.photolayout1}  alt = { image.title } text = {image.text} className="border border-secondary"></img></a></>)) :

        choreoImages ? choreoImages.map((image) => (
          <><a href = {image.link}>< img key = { image.id } src = { image.thumbnail }   style = {PhotoLayout.photolayout2} alt = { image.title } className="border border-secondary"></img></a></>)) :
        
        njpacImages ? njpacImages.map((image) => (
          < img key = { image.id } src = { image.link } style= { PhotoLayout.photolayout2 } alt = { image.title } className="border border-secondary"></img>)) : <p className = "text-light">no pictures here</p>
            
}  
    </Col>
    </Row>
    
    </>
 
   )       
           
     }
    
    
export default PhotoDisplay; 

    




