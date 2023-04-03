import React from "react";
import { useAppContext } from "../../context/appContext";
import FormInput from "./FormInput";

const Form = () => {
  const { getValue, title, price, image } = useAppContext();

  const getInputValueHandler = (e) => {
    getValue({ name: e.target.name, value: e.target.value });
  };

  return (
    <form>
      <h3 className="form-header">Product Card</h3>
      <FormInput
        labelText="Title"
        name="title"
        type="text"
        value={title}
        className="input"
        onChange={getInputValueHandler}
      />
      <FormInput
        labelText="Price"
        name="price"
        type="text"
        value={price}
        className="input"
        onChange={getInputValueHandler}
      />
      <FormInput
        labelText="Image"
        name="image"
        type="file"
        value={image}
        className="file"
        onChange={getInputValueHandler}
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
