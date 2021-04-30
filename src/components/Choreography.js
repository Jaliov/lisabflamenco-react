import SimpleReactLightbox from 'simple-react-lightbox';
import PhotoDisplay from "./PhotoDisplay";
import React, { useState } from 'react';
import { SRLWrapper } from "simple-react-lightbox";  


const Choreography = () => {
    const [choreoImages] = useState([
  
        {id:1, link: "images/choreography/CompaniaLisanormal.jpg", title: "Compañía Folklorica Latina"},
        {id:2, link:"images/choreography/Grndsculpture_Piedraslrg.jpg", title: "Rock Dance"}, 
        {id:3, link:"images/choreography/Sueno_Verdiales.jpg", title: "Verdiales"}, 
        {id:4, link:"images/choreography/Lisacomedypiece.jpg", title: "Comedy"}, 
        {id:5, link:"images/choreography/CarmenMedia_002.JPG", title: "Roxy Ballet production of 'Carmen'"}, 
        {id:6, link:"images/choreography/CarmenMedia_018.jpg", title: "Roxy Ballet production of 'Carmen'"}, 
        {id:7, link:"images/choreography/CarmenMedia_020.JPG", title: "Roxy Ballet production of 'Carmen'"},
        {id:8, link:"images/choreography/DSC_4334.JPG", title: "El Amor Brujo"},
        {id:9, link:"images/choreography/Lisa_Ramya2.jpg", title: "Lisa with Ramya"},
        {id:10, link:"images/choreography/Lisa_Ramya_Co.jpg", title: "Lisa with Ramya"},
        {id:11, link:"images/choreography/3369.jpg", title: "Lisa and Marie"},
        {id:12, link:"images/choreography/10042009_004.jpg", title: "Snake Costume"},
        {id:13, link:"images/choreography/IMG_1028.jpg", title: "With Belly Dancer"},
        {id:14, link:"images/choreography/FireDance.jpg", title: "Fire Dance, 'El Amor Brujo'"},
        
        
        
        

      ])
    return (
      
      <div className = "container fluid choreography">
        <h1>Collaborations</h1>
      <SimpleReactLightbox>  
      <SRLWrapper>
        
        <PhotoDisplay choreoImages = { choreoImages } />
  
    </ SRLWrapper>
    </SimpleReactLightbox>
    
    </div>
    
  )}

export default Choreography;