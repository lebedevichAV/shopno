import React, { useState } from "react";
import Icon from "./Icon";
import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

function CardService({ text, className }) {
  const [isActive, setIsActive] = useState(false);
  function changeActivity() {
    setIsActive(!isActive);
  }

  return isActive ? (
    <div className={"card-service card-service_active " + className}>
      <h4 className="card-service__title">{text.title}</h4>
      <p className="card-service__post">{text.post}</p>
      <Icon
        className="icon_card-service"
        icon={<IoCloseSharp />}
        onClick={changeActivity}
      />
    </div>
  ) : (
    <div className={"card-service " + className}>
      <h4 className="card-service__title">{text.title}</h4>
      <p className="card-service__post">{text.post}</p>
      <p className="card-service__link" onClick={() => setIsActive(!isActive)}>
        <span className="card-service__link-text">Know More</span>
        <IconContext.Provider value={{ className: "card-service__icon" }}>
          <BsArrowRight />
        </IconContext.Provider>
      </p>
    </div>
  );
}

export default CardService;
