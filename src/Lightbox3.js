import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
//import Inline from "yet-another-react-lightbox/plugins/inline";
// import { Container, Row, Card, Col } from "react-bootstrap";

export const Litebox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        id="pngEffects"
        className="home  nav-link liteboxContnt fade-in-image"
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: "transparent",
        }}
      >
        {" "}
        <img
          src="./images/choreography/LisaNY1.png"
          alt="Lisa and Manolo"
          style={{
            width: "10rem",
            height: "15rem",
            margin: "auto",
            backgroundColor: "rgb(0,0,0, 0.2)",
          }}
        />
      </button>

      <Lightbox
        id="litebox"
        styles={{
          root: {
            "--yarl__color_backdrop": "rgba(0, 0, 0, .8)",
            height: "100vh",
          },
        }}
        plugins={[Captions, Thumbnails, Fullscreen, Zoom]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
          descriptionMaxLines: 4,
        }}
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            id: 100,
            src: "images/LisaNY1.JPG",

            description:
              "Lisa with legendary dancers Manolo Rivera and Luisa Triana",
          },
          {
            id: 101,
            src: "images/LisaNY5.JPG",
            description:
              "Slide of Lisa performance Lincoln Center Outdoors in 1986(!), with cantaor Dominico Caro and guitarist Arturo Martinez",
          },
          {
            id: 102,
            src: "images/LisaNY3.JPG",
            description: "With cantaor Dominico Caro",
          },
        ]}
      />
    </>
  );
};

export default Litebox;
