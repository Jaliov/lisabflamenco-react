
import SimpleReactLightbox from 'simple-react-lightbox';
// import "react-awesome-lightbox/build/style.css";
import PhotoDisplay from "./PhotoDisplay";
import React, { useState } from 'react';
import { SRLWrapper } from "simple-react-lightbox"; 


  

const Gallery = () => {
    const [lisaImages] = useState([
  
        {id:1, link: "images/BARBIES135.jpg", title: "Lisa at Gala"},
        {id:2, link:"images/Lisapicin_NYTimesDec2010.jpg", title: "lisa NYTimes photo"}, 
        {id:3, link:"images/D7K_8199_edited-1.jpg"}, 
        {id:4, link:"images/LisaClavilitos.jpg"},
        {id:5, link:"images/Lisa_BilliMartitango.jpg"},
        {id:6, link:"images/LisaDnaLin.jpg"},
        {id:7, link:"images/LisaYellowcape.jpg", title: "Snake Costume"},
        {id:12, link: "images/Classic Yellow Lisa.jpg", title: "Snake Costume"}, 
      ])
    return (
      
      <div className = "container fluid gallery">
        <h1>Gallery</h1>
      <SimpleReactLightbox>  
      <SRLWrapper>
        
        <PhotoDisplay lisaImages = {lisaImages} className = "photolayout1"/>
  
    </ SRLWrapper>
    </SimpleReactLightbox>
    
    </div>
    
  )}

export default Gallery;