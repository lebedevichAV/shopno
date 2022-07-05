import React from "react";

function Section({id, className, children }) {
  return (
    <div className={"section " + className} id={id}>
      <div className="container">
        <div className={"section__inner "}>{children}</div>
      </div>
    </div>
  );
}

export default Section;
