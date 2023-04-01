import React from "react";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <form>
      <h3 className="form-header">Product Card</h3>
      <FormInput labelText="Title" name="title" type="text" />
      <FormInput labelText="Price" name="price" type="text" />
      <FormInput labelText="Image" name="image" type="file" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
