import React, { useState } from "react";

const ChildComponent = (props) => {
  const [counter, setCounter] = useState(0);

  const button_clicked = (e) => {
    setCounter(counter + 1);
    props.onButtonClick(counter);
  };

  return <button onClick={button_clicked}>{counter}</button>;
};

export default ChildComponent;
