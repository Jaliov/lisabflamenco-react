import PhotoDisplay from './PhotoDisplay';
import { SRLWrapper } from 'simple-react-lightbox';
import { Container } from 'react-bootstrap';
  
const lisaImages = [
    {
      id: 1,
      thumbnail: 'images/Classic Yellow Lisa.jpg',
      title: '',
    },
    {
      id: 2,
      thumbnail: 'images/Lisapicin_NYTimesDec2010.jpg',
      title: "Dancing 'Garrotin' photo: NY Times",
    },
    {
      id: 3,
      thumbnail: 'images/LisaClavilitos.jpg',
      title: "Singing 'Clavelitos'",
      text: 'Great singng',
    },
    {
      id: 4,
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
      thumbnail: 'images/Manolo_Tanguillo2smll.jpg',
      title:
        "'Tanguillo' with the great Manonlo Rivera at Cami Hall, NYC (VHS screen capture)",
    },
    {
      id: 7,
      thumbnail: 'images/LisaYellowcape.jpg',
      title: "'El Relicario Pasadoble' for Morris Arts",
    },
    {
      id: 8,
      thumbnail: 'images/LisaZapcostmeEdit.jpg',
      title: 'Zapateado!',
    },
    {
      id: 9,
      thumbnail: 'images/D7K_8201_edited-2.jpg',
      title: 'Alborada Feria',
    },

    {
      id: 10,
      thumbnail: 'images/Feria_GreenCostume_Irina.jpg',
      title: 'Alborada Feria',
    },
    {
      id: 11,
      thumbnail: 'images/Lisa_Elena_FlamencoMoro.jpg',
      title: 'Flamenco Moro',
    },
    {
      id: 12,
      thumbnail: 'images/Lisa_Orlando2.jpg',
      title: 'with Orlando Romero',
    },
    {
      id: 13,
      thumbnail: 'images/Lisa_LincolnCntrCrafts2.jpg',
      title: "Lincoln Center Outdoors (1980's)",
    },

    {
      id: 14,
      link: 'images/Lisa_OrlandoRomero.jpg',
      thumbnail: 'images/Lisa_OrlandoRomero.jpg',
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
