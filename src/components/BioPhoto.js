import React from "react";

const BioPhoto = ({ photo, cubanLunge }) => {
  photo = (
    <img
      src={cubanLunge}
      alt="cuban lunge"
      className="fade-in-image w-200 h-300 fluid centered"
      style={{ padding: "0", margin: "0", maxWidth: "90vw" }}
    ></img>
  );
  return photo;
};

export default BioPhoto;
