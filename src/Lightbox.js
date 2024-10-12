import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { lisaImages } from "./components/lisaImages";

export const Litebox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="home nav-link liteboxContnt fade-in-image"
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: "transparent",
          color: "#ffff66",
          margin: "auto",
          borderWidth: "5px",
        }}
      >
        {" "}
        <img
          id="pngEffects"
          src="./images/choreography/Lisamarie4fade copy.png"
          alt="Lisa and Marie dancing"
          style={{
            width: "15rem",
            height: "20rem",
            marginTop: "3%",
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
        slides={lisaImages}
      />
    </>
  );
};

export default Litebox;
