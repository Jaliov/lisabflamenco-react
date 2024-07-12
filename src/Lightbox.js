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
        className="home btnTransform nav-link liteboxContnt"
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: "transparent",
          color: "#ffff66",
          margin: "auto",
          width: "50%",
        }}
        // class="btnTransform nav-link liteboxContnt"
      >
        <h5 style={{ textDecoration: "underline" }}>Photos!</h5>
      </button>
      <Lightbox
        styles={{
          root: {
            "--yarl__color_backdrop": "rgba(0, 0, 0, .8)",
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
