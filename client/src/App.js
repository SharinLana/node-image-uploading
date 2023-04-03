import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import ItemContainer from "./components/output/ItemContainer";

function App() {
  return (
    <div className="app-container">
      <h3 className="app-name">Node Image Upload</h3>
      <hr />
      <Form />
      <ItemContainer />
    </div>
  );
}

export default App;
