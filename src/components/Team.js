import React from "react";
import CardTeam from "./CardTeam";

function Team({ cards }) {
  let i = 1;
  return (
    <div className="team-cards">
      {cards.map((card, index) => (
        <CardTeam key={index} card={card} className={i++} />
      ))}
    </div>
  );
}

export default Team;
