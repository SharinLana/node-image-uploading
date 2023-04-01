import React from "react";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <form>
      <FormInput labelText="Product title" name="title" type="text" />
      <FormInput labelText="Product price" name="price" type="text" />
      <FormInput labelText="Product image" name="image" type="file" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
