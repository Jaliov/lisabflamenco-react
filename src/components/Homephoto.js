import React from "react";

const Homephoto = ({ photo, cover }) => {
  photo = (
    <img
      src={cover}
      alt="cover"
      width="400px"
      height="600px"
      className="rounded mx-auto d-block"
      style={{ backgroundSize: "400px, 600px" }}
      centered
    ></img>
  );
  return photo;
};

export default Homephoto;
