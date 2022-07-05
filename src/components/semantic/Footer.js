import React from "react";

function Footer({ initial, children }) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <h4 className="footer__title">{initial.title}</h4>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Footer;
