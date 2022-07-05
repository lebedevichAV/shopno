import React from "react";
import path from "../img/team-3.jpg";
import pathStar from "../img/star.svg";

function SlideFullWidth({ card }) {
  function getstars(amount) {
    let paths = [];
    for (let i = 0; i < amount; i++) {
      paths.push(pathStar);
    }
    return paths;
  }

  return (
    <div className="card-slide">
      <div className="card-slide__img-box">
        <img className="card-slide__img" src={path} alt="img" />
      </div>
      <div className="card-slide__content-box">
        <h4 className="card-slide__title">
          {card.name}
          <span className="card-slide__job"> / {card.job}</span>
        </h4>
        <p className="card-slide__text">{card.description}</p>
        <div className="card-slide__stars-box">
          {getstars(card.amount).map((elem, index) => (
            <img
              className="card-slide__star"
              src={elem}
              alt="star"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideFullWidth;
