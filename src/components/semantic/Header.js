import React from "react";

function Header({ children }) {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">{children}</div>
      </div>
    </div>
  );
}

export default Header;
