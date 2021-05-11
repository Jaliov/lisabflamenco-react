// import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Iframe from 'react-iframe'
// import SimpleReactLightbox from 'simple-react-lightbox';
// import { SRLWrapper } from 'simple-react-lightbox';
//  import ReactPlayer from "react-player";
//  import PhotoLayout from './PhotoLayout';
import PhotoDisplay from './PhotoDisplay';

 const VideoGallery = () => {
    return (
       <Container>
     <Iframe url='https://drive.google.com/file/d/1jwRTAuRNkzQic8W-n1sLDLakh0KD3zux/preview' alt ='Lisa dancing' title='Nighttime Sevillanas' id='70' allow="fullscreen" style = {PhotoDisplay.videoImages}
    
        
        />
        </Container>
    )
  
   
    }

export default VideoGallery;