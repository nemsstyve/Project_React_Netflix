import React from "react";

const Input = (props) => {
  return (
    <div className="form__group">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        required={props.required}
        placeholder={props.placeholder}
        className={props.classes}      
      />
    </div>
  );
};

export default Input;
