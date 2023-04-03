import React from "react";

const FormInput = ({ labelText, name, type, className, value, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
