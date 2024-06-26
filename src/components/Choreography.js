import React from "react";
import { Helmet } from "react-helmet";
import { SRLWrapper } from "simple-react-lightbox";
import PhotoDisplay from "./PhotoDisplay";
import { Container } from "react-bootstrap";
const lisaImages = [
  {
    id: 20,
    link: "images/choreography/CompaniaLisanormal.jpg",
    thumbnail: "images/choreography/CompaniaLisasmll copy.gif",
    title: "Compañía Folklorica Latina(1980's)",
  },
  {
    id: 21,
    link: "images/choreography/Grndsculpture_Piedraslrg.jpg",
    thumbnail: "images/choreography/Grndsculpture_Piedras1.gif",
    title:
      'Lisa\'s choreography, "Al Ritmo de las Piedras",(Rock Dance) at The Grounds for Sculpture, NJ',
  },
  {
    id: 22,
    link: "images/choreography/Sueno_Verdiales.jpg",
    thumbnail: "images/choreography/Verdialis_smll copy.gif",
    title:
      "Lisa's Choreography: \"The 'Verdiales' was a powerhouse of community.\" (Robert Johnson, Star Ledger)",
  },
  {
    id: 23,
    link: "images/choreography/Lisacomedypiece.jpg",
    thumbnail: "images/choreography/Lisacomedypiecesmll copy.gif",
    title:
      "\"Lisa Botalico and Eva Lucena stole the show with their comedic, 'Tanguillos por Chufla'.\" (Damaris Solis, Flamenco Buzz)",
  },
  {
    id: 24,
    link: "images/choreography/CarmenMedia_002.JPG",
    thumbnail: "images/choreography/CarmenMedia_002.gif",
    title: 'Roxey Ballet production of "Carmen"',
  },
  {
    id: 25,
    link: "images/choreography/Carmen_red_shawl.jpg",
    thumbnail: "images/choreography/Roxey_Carmen_red_shawl.gif",
    title: 'Roxey Ballet production of "Carmen"',
  },
  {
    id: 26,
    link: "images/choreography/CarmenMedia_018.JPG",
    thumbnail: "images/choreography/CarmenMedia_018.gif",
    title: 'Roxey Ballet production of "Carmen"',
  },
  {
    id: 27,
    link: "images/choreography/DSC_4334.JPG",
    thumbnail: "images/choreography/04-DSC_4330.jpg",
    title: '"Fire Dance" from Manuel deFalla\'s "El Amor Brujo"',
  },
  {
    id: 28,
    link: "images/choreography/DSC_0179.JPG",
    thumbnail: "images/choreography/DSC_0179.GIF",
    title:
      "Lisa performing with young students at Communiversity, yearly outdoor festival, Princeton, Nj",
  },
  {
    id: 29,
    link: "images/choreography/Lisa_Ramya_Co.jpg",
    thumbnail: "images/choreography/Lisa_Ramya_Co.gif",
    title:
      "With Ramya Ramnarayan and the Ngifrithyanjali Ensemble, Crossroads Theatre",
  },
  {
    id: 30,
    link: "images/choreography/Photo-0035.jpg",
    thumbnail: "images/choreography/Lisa_Willie copy.gif",
    title:
      'Willie Sanchez of NJN\'s "Images/Imagenes" and the Emmy for his documentary "The Spanish Guitar" with Lisa, featured dancer',
  },
  {
    id: 31,
    link: "images/choreography/Lisa_Ramya2.jpg",
    thumbnail: "images/choreography/Lisa_Ramya2a copy.gif",
    title:
      'With Bharathanatyam dancer Ramya Ramnarayan: "...creating an atmosphere of moonlit rapture." (Star Ledger)',
  },
  {
    id: 32,
    link: "images/choreography/Lisa MarieGrnds for Sculpture3.jpg",
    thumbnail: "images/choreography/Lisa MarieGrnds for Sculpture3.gif",
    title:
      '"...en el jardin" with modern dancer Marie Alonzo at the Grounds for Sculpture, NJ',
  },
  {
    id: 33,
    link: "images/choreography/10042009_004.jpg",
    thumbnail: "images/choreography/snakecstume2.jpg",
    title: "Grounds for Sculpture",
  },
  {
    id: 34,
    link: "images/choreography/IMG_1028.jpg",
    thumbnail: "images/choreography/LisaKim1.gif",
    title: "Lisa & Alexia (Belly Dance & Beyond)",
  },
  {
    id: 35,
    link: "images/choreography/LisaCapture__Tarantula_best.JPG",
    thumbnail: "images/choreography/LisaCapture__Tarantula_smll copy.gif",
    title:
      'Performing "Tarantula" with members of the New Brunswick Chamber Orchestra',
  },
  {
    id: 36,
    link: "images/FlamencoMoro1.jpg",
    thumbnail: "images/FlamencoMoro1.gif",
    title:
      '"Flamenco Moro", 1985: Lisa, left, with legends Maria Alba & Victorio.',
  },
  {
    id: 37,
    link: "images/choreography/FireDance.jpg",
    thumbnail: "images/choreography/FireDance copy.gif",
    title:
      '"Fire Dance", choreographed by Lisa Botalico to the magnficent music of Manuel deFalla',
  },
  {
    id: 38,
    link: "images/choreography/Sueno_smll.jpg",
    thumbnail: "images/choreography/Sueno_smll copy.gif",
    title: '"Sueño", a Flamenco Nutcracker conceived and directed by Lisa.',
  },
  {
    id: 39,
    link: "images/Lisa and CristinaA11 cropped Nutwrk.jpg",
    thumbnail: "images/choreography/Lisa and CristinaA11 cropped Nutwrk.gif",
    title:
      'Majas from "Sueño", a Flamenco Nutcracker conceived and directed by Lisa.',
  },
  {
    id: 40,
    link: "images/choreography/lisajoel.jpg",
    thumbnail: "images/choreography/lisajoelcropped.gif",
    title:
      'Singing "Anda Jaleo" with violist Joel Rudin and guitarist Ivan Max',
  },
  {
    id: 41,
    link: "images/choreography/LisaRamyaScreenshotsCombo.jpg",
    thumbnail: "images/choreography/LisaRamyaScreenshotsCombo.gif",
    title:
      "Reunited: with Ramya Ramnarayan in virtual performance on Instagram, May, 2020",
  },
  {
    id: 51,
    link: "images/choreography/Ramya_Lisa_The HinduArticle.jpg",
    thumbnail: "images/choreography/Ramya_Lisa_The HinduArticle.gif",
    title: "Article in The Hindu, India",
  },
  // {
  //   id: 52,
  //   link: "images/choreography/Lisamarie4fade.png",
  //   thumbnail: "images/choreography/Lisamarie4fade.png",
  //   title: "Collaboration!",
  // },
  {
    id: 53,
    link: "images/choreography/Robeson_Rock Dance_flail.jpg",
    thumbnail: "images/choreography/Robeson_Rock Dance_flail.gif",
    title: "'Rock Dance' at ACP's PAUL ROBESON 126TH BIRTHDAY CELEBRATION",
  },
];
const Choreography = () => {
  return (
    <>
      <Helmet>
        <title>Choreography/Collaborations</title>
        <meta
          name="description"
          content="Check out these amazing photos of Lisa Botalico, Collaborations with Other Great Dancers."
        />
      </Helmet>
      <h1 style={{ color: "#ffff66" }} className="bio">
        Choreography/Collaborations
      </h1>

      <Container>
        <SRLWrapper>
          <PhotoDisplay lisaImages={lisaImages} />
        </SRLWrapper>
      </Container>
    </>
  );
};

export default Choreography;
