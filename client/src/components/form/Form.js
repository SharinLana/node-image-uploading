import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import FormInput from "./FormInput";

const Form = () => {
  const { getValue, title, price, addImage } = useAppContext();
  const [imageFile, setImageFile] = useState();

  const getInputValueHandler = (e) => {
    getValue({ name: e.target.name, value: e.target.value });
  };

  const getImageFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addImage(imageFile);
  };

  return (
    <form onSubmit={formSubmitHandler}>
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
        // value={image.name}
        className="file"
        onChange={getImageFile}
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
