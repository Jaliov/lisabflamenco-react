import React from "react";

const Homephoto = ({ photo, cover }) => {
  photo = (
    <img
      id="cover"
      src={cover}
      alt="cover"
      width="400px"
      height="600px"
      className="rounded mx-auto d-block"
      style={{ backgroundSize: "25rem, 37.5rem" }}
      centered="true"
    ></img>
  );
  return photo;
};

export default Homephoto;
