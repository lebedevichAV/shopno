import React from "react";
import map from "../img/map.jpg";

function Contacts({ initial }) {
  return (
    <div className="contacts">
      {initial.lines.map((elem, index) => (
        <p className="contacts__address" key={index}>
          {elem}
        </p>
      ))}
      {initial.numbers.map((elem, index) => (
        <p className="contacts__number" key={index}>
          <span className="contacts__title">{elem.title}</span>
          <a className="contacts__link" href={"tel:" + elem.number}>
            {elem.number}
          </a>
        </p>
      ))}
      <div className="contacts__web-box">
        {initial.web.map((elem, index) => (
          <p className="contacts__web" key={index}>
            <span className="contacts__title">{elem.title}</span>
            {elem.mail}
          </p>
        ))}
      </div>
      <div className="contacts__map">
        <img className="contacts__map-img" src={map} alt="map" />
      </div>
    </div>
  );
}

export default Contacts;
