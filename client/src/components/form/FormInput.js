import React from "react";

const FormInput = ({labelText, name, type, className}) => {
  return (
    <div className="input-container">
      <label htmlFor={name} >{labelText}</label>
      <input type={type} name={name} className={className}/>
    </div>
  );
};

export default FormInput;
