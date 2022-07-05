import React from "react";

function Slide({ item }) {
  return (
    <div className="slide">
      <img className="slide__img" src={item} alt="slide" />
    </div>
  );
}

export default Slide;
