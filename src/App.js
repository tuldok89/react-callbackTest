import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./Components/ChildComponent";

function App() {
  const [childCounter, setChildCounter] = useState(0);

  useEffect(() => {
    console.log("childCounter from effect: ", childCounter);
  }, [childCounter]);

  const child_clicked = (value) => {
    console.log("Value: ", value);
    setChildCounter(value);
    console.log("childCounter from callback: ", childCounter);
  };

  return (
    <React.Fragment>
      <p>{childCounter}</p>
      <ChildComponent onButtonClick={child_clicked} />
    </React.Fragment>
  );
}

export default App;
