import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./Components/ChildComponent";
import ChildComponent2 from "./Components/ChildComponent2";

function App() {
  const [childCounter, setChildCounter] = useState(0);

  const child_clicked = (value) => {
    console.log("Value: ", value);
    setChildCounter(value);
    console.log("childCounter from callback: ", childCounter);
  };

  return (
    <React.Fragment>
      <p>Parent: {childCounter}</p>
      <ChildComponent onButtonClick={child_clicked} />
      <ChildComponent2 counter={childCounter} />
    </React.Fragment>
  );
}

export default App;
