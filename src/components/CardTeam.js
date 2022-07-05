import React, { useState } from "react";
import SocialNetwork from "./SocialNetwork";

function CardTeam({ card, className }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={"card-team card-team_elem-" + className}
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
    >
      <div
        className={
          isActive ? "card-team__content card-team__content_active" : "card-team__content"
        }
      >
        <p className="card-team__title">
          {card.name} / 
          <span className="card-team__position">{card.job}</span>
        </p>
        <p className="card-team__description">{card.description}</p>
        <SocialNetwork />
      </div>
    </div>
  );
}

export default CardTeam;
