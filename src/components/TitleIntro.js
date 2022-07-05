import React from "react";

function TitleIntro({ text }) {
  return (
    <div className="title-intro">
      <p className="title-intro__paragraph">
        {text.title}
        <span className="title-intro__highlighting">
          {text.title_highlighting}
        </span>
      </p>
      <p className="title-intro__paragraph">
        <span className="title-intro__highlighting">
          {text.title_continue_highlighting}
        </span>
        {text.title_continue}
      </p>
    </div>
  );
}

export default TitleIntro;
