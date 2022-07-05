import React from "react";
import { IconContext } from "react-icons";

function Icon({ icon, className, onClick }) {
  return (
    <div className="icon__box" onClick={onClick}>
      <IconContext.Provider value={{ className: "icon " + className }}>
        {icon}
      </IconContext.Provider>
    </div>
  );
}

export default Icon;
