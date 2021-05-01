
import SimpleReactLightbox from 'simple-react-lightbox';
// import "react-awesome-lightbox/build/style.css";
import PhotoDisplay from "./PhotoDisplay";
import React, { useState } from 'react';
import { SRLWrapper } from "simple-react-lightbox"; 

const Gallery = () => {
    const [lisaImages] = useState([
  
        {id:1, link: "images/BARBIES135.jpg", title: "Lisa at Gala", text: "This is a great image!"},
        {id:2, link:"images/Lisapicin_NYTimesDec2010.jpg", title: "lisa NYTimes photo"}, 
        {id:3, link:"images/LisaBotalico_Alegrias.jpg", title: "Alegrias!"}, 
        {id:4, link:"images/LisaClavilitos.jpg"},
        {id:5, link:"images/Lisa_BilliMartitango.jpg"},
        {id:6, link:"images/LisaDnaLin.jpg"},
        {id:7, link:"images/LisaYellowcape.jpg", title: "with a yellow cape"},
        {id:8, link:"images/D7K_8199_edited-1.jpg", title: "Alborada Feria"},
        {id:9, link:"images/D7K_8201_edited-2.jpg", title: "Alborada Feria"},
        {id:10, link:"images/D7K_8203.JPG", title: "Alborada Feria"},
        {id:11, link:"images/Feria_GreenCostume_Irina.jpg", title: "Alborada Feria"},
        {id:12, link: "images/Classic Yellow Lisa.jpg", title: "Classic photo of Lisa"},
        {id:14, link: "images/Lisa_Botalico_Rumba.jpg", title: "Classic photo of Lisa"},
        {id:15, link: "images/Lisa_Elena_FlamencoMoro.jpg", title: "Flamenco Moro"},
        {id:16, link: "images/Lisa_Orlando2.jpg", title: "Lisa with the great Orlando Romero"},
        {id:18, link: "images/Lisa_OrlandoRomero.jpg", title: "Dancing 'Guajira' with Orlando Romero"}

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