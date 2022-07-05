import React from "react";

function Description({ obj }) {
  return (
    <div className="description">
      <h3 className="description__title">{obj.title}</h3>
      {obj.post.map((paragraph, index) => (
        <p className="description__paragraph" key={index}>
          {paragraph}
        </p>
      ))}
      <h4 className="description__title description__title_question">
        {obj.question}
      </h4>
      <p className="description__paragraph">{obj.answer}</p>
    </div>
  );
}

export default Description;
