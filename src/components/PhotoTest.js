import React from "react";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "./images/Classic Yellow Lisa.jpg", width: 50, height: 100 },
  { src: "/images/Lisa_red Shawl_ACP_1.jpg", width: 200, height: 300 },
];

export default function PhotoTest() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}
