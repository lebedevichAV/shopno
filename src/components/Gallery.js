import React from "react";
import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";
import gallery4 from "../img/gallery4.jpg";
import gallery5 from "../img/gallery5.jpg";
import gallery6 from "../img/gallery6.jpg";

function Gallery() {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <div className="gallery">
      {gallery.map((item, index) => (
        <div className="gallery__item" key={index}>
          <img className="gallery__img" src={item} alt="img" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
