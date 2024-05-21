import React from "react";

const Homephoto = ({ photo, cover }) => {
  photo = (
    <img
      src={cover}
      alt="cover"
      width="400px"
      height="590vh"
      className="rounded mx-auto d-block"
      style={{ backgroundSize: "auto" }}
    ></img>
  );
  return photo;
};

export default Homephoto;
