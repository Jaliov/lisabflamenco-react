import React from 'react';
import PhotoDisplay from './PhotoDisplay';
import { SRLWrapper } from 'simple-react-lightbox';
import { Container } from 'react-bootstrap';
  
const lisaImages = [
  {
    id: 1,
    link: 'images/Classic Yellow Lisa.jpg',
    thumbnail: 'images/Lisa classic yellow fan.gif', 
    title: '',
  },

  {
    id: 2,
    link: 'images/Lisapicin_NYTimesDec2010.jpg',
    thumbnail: 'images/Lisapicin_NYTimesDec2010smll.gif',
    title: "Dancing 'Garrotin' photo: NY Times",
  },
  {
    id: 3,
    link: 'images/LisaClavilitos.jpg',
    thumbnail: 'images/LisaClavilitos.gif',
    title: "Singing 'Clavelitos'",
    text: 'Great singng',
  },
  {
    id: 4,
    link: 'images/Lisa_BilliMartitango.jpg',
    thumbnail: 'images/Lisa_BilliMartitango.jpg',
    title: "Latin Hustle, 1980's",
  },
  {
    id: 5,
    link: 'images/LisaDnaLin.jpg',
    thumbnail: 'images/LisaDnaLin.jpg',
  },
  {
    id: 6,
    link: 'images/Manolo_Tanguillo2smll.jpg',
    thumbnail: 'images/Manolo_Tanguillo2smll.jpg',
    title:
      "'Tanguillo' with the great Manonlo Rivera at Cami Hall, NYC (VHS screen capture)",
  },
  {
    id: 7,
    link: 'images/LisaYellowcape.jpg',
    thumbnail: 'images/LisaYellowcapesmll copy.gif',
    title: "'El Relicario Pasadoble' for Morris Arts",
  },
  {
    id: 8,
    link: 'images/LisaZapcostmeEdit.jpg',
    thumbnail: 'images/LisaZapcostmesmll copy.gif',
    title: 'Zapateado!',
  },
  {
    id: 9,
    link: 'images/D7K_8201_edited-2.jpg',
    thumbnail: 'images/D7K_8201_edited-2.jpg',
    title: 'Alborada Feria',
  },

  {
    id: 10,
    link: 'images/Feria_GreenCostume_Irina.jpg',
    thumbnail: 'images/Feria_GreenCostume_Irina.jpg',
    title: 'Alborada Feria',
  },
  {
    id: 11,
    link: 'images/Lisa_Elena_FlamencoMoro.jpg',
    thumbnail: 'images/Lisa_Elena_FlamencoMorosmll.gif',
    title: 'Flamenco Moro',
  },
  {
    id: 12,
    link: 'images/Lisa_Orlando2.jpg',
    thumbnail: 'images/Lisa_Orlando2smll.gif',
    title: 'with Orlando Romero',
  },
  {
    id: 13,
    link: 'images/Lisa_LincolnCntrCrafts2.jpg',
    thumbnail: 'images/LnclnCntrold copy.gif',
    title: "Lincoln Center Outdoors (1980's)",
  },

  {
    id: 14,
    link: 'images/Lisa_OrlandoRomero.jpg',
    thumbnail: 'images/Lisa_OrlandoRomerosmll.gif',
    title: "Dancing 'Guajira' with Orlando Romero",
  },
  {
    id: 15,
    link: 'images/BARBIES135.jpg',
    thumbnail: 'images/BARBIES135.jpg',
    title:
      "Dancing 'Guajiras' solo in a white suit and hat: Lisa's tribute to the late Orlando Romero",
  },
];
 
const Gallery = () => {
  return (
      <Container className = "gallery">
      <h1>Gallery</h1>
        <SRLWrapper>
          <PhotoDisplay lisaImages={lisaImages}/>
        </SRLWrapper>
        </Container>
  )
};

export default Gallery;
