import React from "react";

function Title({ text }) {
  return (
    <div className="title-box">
      <h2 className="title-box__text">{text.title}</h2>
      <p className="title-box__subtitle">{text.subtitle}</p>
    </div>
  );
}

export default Title;
