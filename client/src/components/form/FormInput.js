import React from "react";

const FormInput = ({labelText, name, type}) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="label">{labelText}</label>
      <input type={type} name={name} className="input"/>
    </div>
  );
};

export default FormInput;
