import React from "react";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <form>
      <h3 className="form-header">Product Card</h3>
      <FormInput labelText="Title" name="title" type="text" className="input" />
      <FormInput labelText="Price" name="price" type="text" className="input" />
      <FormInput labelText="Image" name="image" type="file" className="file" />
      <button type="submit" className="btn">Submit</button>
    </form>
  );
};

export default Form;
