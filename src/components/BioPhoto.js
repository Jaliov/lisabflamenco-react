import React from "react";

const BioPhoto = ({ photo, cubanLunge }) => {
  photo = (
    <img
      src={cubanLunge}
      alt="cuban lunge"
      className="fade-in-image w-200 h-300 fluid"
      style={{ padding: "0", margin: "0" }}
    ></img>
  );
  return photo;
};

export default BioPhoto;
