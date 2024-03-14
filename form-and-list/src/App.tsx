import { useState } from "react";

import FormSection from "./components/FormSection";
import ListSection from "./components/ListSection";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <FormSection></FormSection>
        </div>
        <div className="col">
          <ListSection></ListSection>
        </div>
      </div>
    </div>
  );
}

export default App;
