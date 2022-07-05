import React from "react";
import CardService from "./CardService";

function CardsServise({ list }) {
  let i = 1;
  return (
    <div className="cards-services">
      {list.map((elem, index) => (
        <div
          className={"cards-services__item cards-services__item_" + i++}
          key={index}
        >
          <CardService text={elem} />
        </div>
      ))}
    </div>
  );
}

export default CardsServise;
