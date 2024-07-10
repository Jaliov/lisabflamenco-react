import { useState } from "react";
import { useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Inline from "yet-another-react-lightbox/plugins/inline";

export const Litebox = () => {
  const [open, setOpen] = useState(false);

  const fullscreenRef = useRef(null);
  return (
    <>
      <button
        className="home"
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: "transparent",
          color: "#ffff66",
          margin: "auto",
          width: "50%",
        }}
        class="btnTransform nav-link liteboxContnt"
      ></button>
      <Lightbox
        styles={{
          root: {
            "--yarl__color_backdrop": "rgba(0, 0, 0, .6)",
          },
        }}
        style={{ height: "auto" }}
        plugins={[Captions, Fullscreen, Zoom, Inline]}
        captions={{
          descriptionTextAlign: "center",
          descriptionMaxLines: 3,
        }}
        inline={{
          style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" },
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
