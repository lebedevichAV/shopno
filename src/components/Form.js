import React from "react";
import Button from "./Button";

function Form({ initial }) {
  return (
    <form className="form" name="form">
      <input className="form__input" placeholder={initial.name} />
      <input className="form__input" placeholder={initial.subject} />
      <input className="form__input" placeholder={initial.mail} />
      <textarea className="form__text-area" placeholder={initial.message} />
      <Button text={initial.btn} />
    </form>
  );
}

export default Form;
