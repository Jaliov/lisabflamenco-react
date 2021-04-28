import SimpleReactLightbox from 'simple-react-lightbox';
import "react-awesome-lightbox/build/style.css";
import PhotoDisplay from "./PhotoDisplay";
import React, { useState } from 'react';
import { SRLWrapper } from "simple-react-lightbox";  


const Choreography = () => {
    const [choreoImages] = useState([
  
        {id:8, link: "images/CompaniaLisanormal.jpg", title: "Compania Folklorica Latina"},
        {id:9, link:"images/Grndsculpture_Piedraslrg.jpg", title: "Rock Dance"}, 
        {id:10, link:"images/Sueno_Verdiales.jpg", title: "Verdiales"}, 
        {id:11, link:"images/Lisacomedypiece.jpg", title: "Comedy"}, 
        
      ])
    return (
      
      <div className = "container fluid choreography">
        <h1>Choreography</h1>
      <SimpleReactLightbox>  
      <SRLWrapper>
        
        <PhotoDisplay choreoImages = { choreoImages } />
  
    </ SRLWrapper>
    </SimpleReactLightbox>
    
    </div>
    
  )}

export default Choreography;